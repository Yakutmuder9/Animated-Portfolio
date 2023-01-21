import {
  motion,
  MotionProps,
  useTransform,
  useViewportScroll
} from "framer-motion";
import { useEffect, useRef, useState } from "react";


function useElementViewportPosition(ref) {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { position };
}

const slideAnimation = {
  variants: {
    full: { backgroundColor: "#663399" },
    partial: { backgroundColor: "#808080" }
  },
  initial: "partial",
  whileInView: "full",
  viewport: { amount: 1, once: true }
};

const Projects = () => {
  const ref = useRef(null);
  const carouselRef = useRef(null);
  const { position } = useElementViewportPosition(ref);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress, scrollY } = useViewportScroll();
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      console.log({ scrollYProgress: scrollYProgress.current, scrollY })
    );
  }, []);

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          (parent).offsetLeft * 2;

        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
    const handleResize =  resetCarouselEndPosition

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section>
        <div className="container">
          <h2>
            Scroll Linked animations, useViewportScroll, useTransform and custom
            useElementViewportPosition hook
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A corrupti
            eaque sed ex cum? Facilis animi consequatur repellendus perspiciatis
            odio praesentium aliquam, quis ratione.
          </p>
          <p>
            Velit nemo deleniti quasi quos soluta illum voluptatum laudantium,
            dolorem excepturi vero ullam consequatur ea eius inventore iste! Qui
            ipsam minus eius nostrum nisi aliquid laboriosam in quia praesentium
            quaerat.
          </p>
        </div>
      </section>
      <section ref={ref}>
        <div className="container" style={{ height: "300vh" }}>
          <div className="sticky-wrapper">
            <motion.div ref={carouselRef} className="carousel" style={{ x }}>
              {Array.from(Array(8).keys()).map((i) => (
                <motion.div
                  {...slideAnimation}
                  key={i}
                  className="carousel__slide"
                >
                  {i + 1}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Ea, asperiores</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            necessitatibus vel earum tempore asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            autem est vitae magni alias, delectus atque repudiandae maiores
            molestiae fuga error a, laboriosam velit voluptas odio inventore
            modi libero, ratione quas neque. Corporis, nam?
          </p>
          <p>
            Minima exercitationem, quo fugit hic ipsam est laudantium
            accusantium quisquam nobis porro obcaecati veniam atque natus
            reprehenderit corrupti modi consequatur fuga animi tempore officiis
            enim expedita ullam! Vitae repudiandae, sapiente temporibus neque,
            repellat expedita cupiditate magnam harum debitis similique
            voluptatibus sit aspernatur rem hic eligendi dolor? Harum, saepe.
          </p>
        </div>
      </section>
    </div>
  );
}
export default  Projects; 