import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

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
                        기록의 가치를 중요시하는 개발자 <br />
                        <span className="text-[#915eff]">정하승입니다.</span>
                    </h1>
                </div>
            </div>
            <ComputersCanvas />
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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

            <h3 className={`${styles.sectionHeadText} font-semibold`}>
                About Me
            </h3>
            <ul className={styles.sectionSubText}>
                <li>
                    동료의 추천으로 인해 웹 개발에 처음 접하게 됐습니다.
                    <br />
                    생각을 화면에 표현할 수 있는게 재밌었고, 다른 사람들로부터
                    피드백을 빠르게 받을 수 있는 점에 흥미를 느껴 프론트엔드에
                    입문하게 되었습니다.
                    <br />
                    에러를 해결하는 과정은 쉽지 않지만, 해결했을 때 얻는
                    성취감으로 인해 개발자의 길을 걷고자 했습니다.
                </li>
            </ul>
        </section>
    );
};

export default SectionWrapper(Hero, "");
