import { useTheme } from './hooks/useTheme';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          
          <main>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;