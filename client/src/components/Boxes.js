import { motion } from "framer-motion"

const Box = ({ height, open, delay }) => {
  return (
    <motion.div
      initial={{ scale: 0, rotateX: 90 }}
      animate={{ scale: 1, rotateX: 0 }}
      transition={{ delay: delay }}
      style={{
        height: `${height}px`,
        width: "100px",
        background: "blue",
        transformStyle: "preserve-3d",
      }}
    >
      {open ? (
        <motion.div
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 0 }}
          transition={{ delay: delay + 0.2 }}
          style={{
            height: `${height}px`,
            width: "100px",
            background: "red",
            transformStyle: "preserve-3d",
          }}
        />
      ) : null}
    </motion.div>
  )
}

const Boxes = () => {
  return (
    <div style={{ display: "flex" }}>
      <Box height={100} open={true} delay={0} />
      <Box height={150} open={false} delay={2} />
      <Box height={50} open={true} delay={4} />
    </div>
  )
}

export default Boxes