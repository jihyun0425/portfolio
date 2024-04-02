import React, {useEffect, useRef} from "react";
import proText from "../constants/projects"
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const Projects = () => {
    const horizontalRef=useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;

        let scrollTween = gsap.to(sections,{
            xPercent:-120*(sections.length-1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });

        return() => {
            scrollTween.kill();
        };
      }, []);

    return (
        <section id="project" ref={horizontalRef}>
            <div className="pro__inner">
                <div className="pro__title">
                    Projects
                </div>
                <div className="pro__wrap">
                    {proText.map((pro, key) => (
                        <article className={`pro__item p${key + 1}`}
                                 key={key}
                                 ref={(el) => (sectionsRef.current[key]=el)}>
                            <span className="num">{pro.num}.</span>
                            <a href={pro.code} target="_blank" className="img" rel="noreferrer">
                                <img src={pro.img} alt={pro.name} />
                            </a>
                            <h3 className="title">{pro.title}</h3>
                            <p className="desc">{pro.desc}</p>
                            <a href={pro.view} target="_blank" className="site" rel="noreferrer">사이트 보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
