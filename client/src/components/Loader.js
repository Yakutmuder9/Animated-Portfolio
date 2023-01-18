import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const Loader = ({ setLoading }) => {


    return (
        // <motion.div className="loader">
        //     <motion.div
        //         initial={{ opacity: 0, scale: 0.5 }}
        //         animate={{
        //             scale: [1, 2, 2, 1, 1],
        //             rotate: [0, 0, 180, 180, 0],
        //             borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        //         }}
        //         transition={{
        //             duration: 2,
        //             ease: "easeInOut",
        //             times: [0, 0.2, 0.5, 0.8, 1],
        //             repeatDelay: 1
        //         }}
        //     >

        //         <div className="loading-page" style={{background: "red"}}>
        //             <h1>Bootle</h1>
        //             <Frame group2361="group-2361.png" />
        //         </div>
        //     </motion.div>
        // </motion.div>

        <div className="loader">
            <Component1 />
        </div>
    );
};

export default Loader;


const Component1 = () => {

    return (
        <div className="ellipse-container">
            <div class='view'>
                <ul class='circles'>
                    <li class='ellipse-1 item'></li>
                    <li class='ellipse-2 item'></li>
                    <li class='ellipse-3 item'></li>
                    <li class='ellipse-4 item'></li>
                    <li class='ellipse-5 item'></li>
                    <li class='ellipse-6 item'></li>
                    <li class='ellipse-7 item'></li>
                </ul>
            </div>
        </div>

    )
}

