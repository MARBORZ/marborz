import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { useTranslation } from "react-i18next";
import PageSkeleton from "./components/skeletons/PageSkeleton";
import { EASE_APPLE } from "./shared/motion";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const location = useLocation();
  const { i18n } = useTranslation();

  return (
    // Respect the OS "reduce motion" setting everywhere
    <MotionConfig reducedMotion="user">
      <Layout>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
            exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: EASE_APPLE }}
          >
            {/* Re-keying on language gives a soft crossfade instead of a hard text swap */}
            <motion.div
              key={i18n.resolvedLanguage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: EASE_APPLE }}
            >
              <Suspense fallback={<PageSkeleton />}>
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </motion.div>
          </motion.main>
        </AnimatePresence>
      </Layout>
    </MotionConfig>
  );
}

export default App;
