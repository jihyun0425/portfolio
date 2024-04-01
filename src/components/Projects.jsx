import React from "react";
import proText from "../constants/projects"

const Projects = () => {
    return (
        <section id="project">
            <div className="pro__inner">
                <div className="pro__title">
                    Projects
                </div>
                <div className="pro__wrap">
                    {proText.map((pro, key) => (
                        <article className={`pro__item p${key + 1}`} key={key}>
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
