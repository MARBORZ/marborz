import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy, Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import PageSkeleton from "./components/skeletons/PageSkeleton";
import { useIsMobile } from "./hooks/useIsMobile";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const isMobile = useIsMobile();
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show skeleton when language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      setIsChangingLanguage(true);
      setTimeout(() => {
        setIsChangingLanguage(false);
      }, 400);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  if (isChangingLanguage) {
    return (
      <Layout>
        <PageSkeleton />
      </Layout>
    );
  }

  return (
    <Layout>
      <Suspense fallback={<PageSkeleton />}>
        <AnimatePresence mode="wait">
          {!isMobile ? (
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Routes location={{ pathname } as any}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </AnimatePresence>
      </Suspense>
    </Layout>
  );
}

export default App;
