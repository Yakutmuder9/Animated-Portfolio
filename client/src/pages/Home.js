import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "./About";
import Main from "./Main";
import Project from "./Projects";
import Contact from "./Contact";



const Home = () => {

  return (
    <motion.div className="home-container">
      <Main />
      <div style={{width:"100vw", height:"100vh"}}></div>
      <About />
      <Project />
      <Contact />
      <Footer />
    </motion.div>
  )
}

export default Home