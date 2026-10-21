import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy, Suspense, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import PageSkeleton from "./components/skeletons/PageSkeleton";
import { EASE_APPLE } from "./shared/motion";

const loadHome = () => import("./pages/Home");
const loadProjects = () => import("./pages/Projects");
const loadAbout = () => import("./pages/About");
const loadContact = () => import("./pages/Contact");
const loadNotFound = () => import("./pages/NotFound");

const Home = lazy(loadHome);
const Projects = lazy(loadProjects);
const About = lazy(loadAbout);
const Contact = lazy(loadContact);
const NotFound = lazy(loadNotFound);

function App() {
  const location = useLocation();

  // Fetch the other pages once the browser is idle, so navigating never waits on the network
  useEffect(() => {
    const prefetch = () => [loadHome, loadProjects, loadAbout, loadContact].forEach((load) => load());
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(prefetch, { timeout: 3000 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(prefetch, 1500);
    return () => clearTimeout(id);
  }, []);

  return (
    // Respect the OS "reduce motion" setting everywhere
    <MotionConfig reducedMotion="user">
      <Layout>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_APPLE } }}
            exit={{ opacity: 0, transition: { duration: 0.15, ease: EASE_APPLE } }}
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
          </motion.main>
        </AnimatePresence>
      </Layout>
    </MotionConfig>
  );
}

export default App;
