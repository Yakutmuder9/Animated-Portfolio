import './styles/main.scss'
import { useState, useEffect } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { Routes, Route } from "react-router-dom"
import Loader from './components/Loader';
import Header from './components/Header';
import Posters from './components/Posters';
import Boxes from './components/Boxes';

const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    {
      loading ?
        document.querySelector("body").classList.add("loading")
        : document.querySelector("body").classList.remove("loading")
    }
  }, [loading])

  return (
    <LayoutGroup>
      <AnimatePresence className="App">
        {
          loading ? 
          <motion.div key='loader'>
            <Loader setLoading={setLoading}/>
          </motion.div>
          : <motion.div>
            <Header />
            <Posters />
            {!loading && 
              <div className='transition-image final'>
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src="https://pbs.twimg.com/media/FZLGesNVEAU1OaT?format=jpg&name=large"
                  layoutId='main-image-1'
                />
            </div>}
            <div class="cursor"></div>
          </motion.div>
        }
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default App;


const updateProperties = (elem, state) => {
  elem.style.setProperty('--x', `${state.x}px`)
  elem.style.setProperty('--y', `${state.y}px`)
  elem.style.setProperty('--width', `${state.width}px`)
  elem.style.setProperty('--height', `${state.height}px`)
  elem.style.setProperty('--radius', state.radius)
  elem.style.setProperty('--scale', state.scale)
  // elem.style.setProperty('--background', 'black')
}

document.querySelectorAll('.cursor').forEach(cursor => {
  let onElement

  const createState = e => {
    const defaultState = {
      x: e.clientX,
      y: e.clientY,
      width: 10,
      height: 10,
      radius: '50%'
    }

    const computedState = {}

    if (onElement != null) {
      const { top, left, width, height } = onElement.getBoundingClientRect()
      const radius = window.getComputedStyle(onElement).borderTopLeftRadius

      computedState.x = left + width / 2
      computedState.y = top + height / 2
      computedState.width = width
      computedState.height = height
      computedState.radius = radius
    }

    return {
      ...defaultState,
      ...computedState
    }
  }

  document.addEventListener('mousemove', e => {
    const state = createState(e)
    updateProperties(cursor, state)
  })

  document.querySelectorAll('a, button').forEach(elem => {
    elem.addEventListener('mouseenter', () => (onElement = elem))
    elem.addEventListener('mouseleave', () => (onElement = undefined))
  })
})
