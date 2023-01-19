import { useState } from 'react';
import Hill from "../assets/Mount.png"
import Header from '../components/Header';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const Main = () => {
  const [scrollMain, setScrollMain] = useState(true)
  return (
    <motion.div className={scrollMain ? "main-container" : 'main-container scrollTop'} >
      <Header />
      <div className='hill-container'>
        <img src={Hill} alt="" id='hill' />
        <div className='sun-container'>
          <div className='sun-fade'></div>
          <div className='sun-ellipse'></div>

        </div>

        <div className='welcome-txt'>
          <h1 className='welcome-txt'>Welcome to my Portfolio!</h1>

        </div>

        <div id="layer-0">
          <div id="layer-1">
            <div id="layer-2">
              <div id="lines">
                <div id="layer-corner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Component />



    </motion.div>
  )
}

export default Main


export const Component = () => {
  const { scrollYProgress } = useViewportScroll();

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  return (
    <div style={{ height: '200vh' }} id="scrollTxt">
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <motion.p style={{ x }}>
          Rainbow Rainbow Rainbow
        </motion.p>
      </div>
    </div>
  );
};