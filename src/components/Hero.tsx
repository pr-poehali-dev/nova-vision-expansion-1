import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-widest mb-4 opacity-75">
          Муниципальное бюджетное общеобразовательное учреждение
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          ШКОЛА № 31<br />
          <span className="text-2xl md:text-4xl lg:text-5xl font-light">им. А.П. Жданова</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Проектные работы учащихся — от идеи до защиты
        </p>
        <a
          href="#about"
          className="inline-block mt-10 px-8 py-3 border border-white text-white uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Узнать больше
        </a>
      </div>
    </div>
  );
}
