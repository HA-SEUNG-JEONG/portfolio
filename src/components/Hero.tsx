import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText}`}>
                        기록을 좋아하는 프론트엔드 개발자 <br />
                        <span className="text-[#915eff]">정하승입니다.</span>
                    </h1>
                    <h2 className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                        동영상 이미지 처리 서비스를 하는 애자일그로스에서
                        프론트엔드 개발을 담당했습니다. 프로젝트를 진행 과정에서
                        UX 개선을 위해 토스트 컴포넌트를 도입했습니다. 또한 회사
                        프로젝트를 하면서 겪었던 문제 해결 경험과 개인 공부를
                        하면서 느꼈던 경험을 블로그를 통해 기록하고 있습니다.{" "}
                    </h2>
                </div>
            </div>
            <ComputersCanvas />
            <div className="absolute  xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                            className="w-3 h-3 rounded-full bg-gray-500 mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
