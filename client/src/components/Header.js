import Logo from "../assets/Logo.png";
import {  useState } from "react";
import { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, [])

    console.log(width);
    return (
        <>
            {(width < 762) ?
                <MobileView /> :
                < nav className="navbar navbar-defaullt" >
                    <div className="container-fluid">

                        <div className="navbar-logo">
                            <a href="/" className="navbar-brand">
                                <img width="auto" height="50" src={Logo} alt="logo" />
                            </a>
                        </div>


                        <div className="navlink-container">
                            <ul className="navbar-link">
                                <li><a href="/">Home</a></li>
                                <li><a href="/#about">About</a></li>
                                <li><a href="/#about">Projects</a></li>
                                <li><a href="/#about">Contact</a></li>
                                <li><a href="/#about">Login</a></li>
                                <li className="dot-list"><a></a></li>
                            </ul>
                        </div>

                    </div>
                </ nav>
            }
        </>

    )
}

export default Header;


// const MobileView = ({ toggle }) => {
//     return (
//         <motion.div id="mobile-view">
//             <div className="mobile-view-container">
//                 <div className="navbar-logo">
//                     <a href="/" className="navbar-brand">
//                         <img width="auto" height="50" src={Logo} alt="logo" />
//                     </a>
//                 </div>

//                 <div className="navlink-toggler">
//                     <Component1 />
//                 </div>
//             </div>
//         </motion.div>
//     )
// }


export const useDimensions = ref => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }, []);

    return dimensions.current;
  };


const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 80vw)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export const MobileView = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            id="mobile-View"
        >
            <motion.div className="background" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
            <motion.div>
            <div className="navbar-logo">
                            <a href="/" className="navbar-brand">
                                <img width="auto" height="50" src={Logo} alt="logo" />
                            </a>
                        </div>
            </motion.div>
        </motion.nav>
    );
};



const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
    const style = { border: `2px solid ${colors[i]}` };
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="icon-placeholder" style={style} />
            <div className="text-placeholder" style={style} />
        </motion.li>
    );
};


const Path = props => (
    <motion.path
        fill="#fff"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);
export const MenuToggle = ({ toggle }) => (
    <button onClick={toggle} id="menu-toggle-btn">
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);


const variant = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <motion.ul variants={variant}>
        {itemIds.map(i => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];