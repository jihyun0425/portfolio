import React from "react";

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">Skill</h2>
                <div className="skill__desc">
                    <div>
                        <span>서버사이드 언어</span>
                        <h3>Java</h3>
                    </div>
                    <div>
                        <span>클라이언트측 언어</span>
                        <h3>HTML</h3>
                        <h3>CSS</h3>
                        <h3>JavaScript</h3>
                    </div>
                    <div>
                        <span>데이터베이스</span>
                        <h3>Oracle</h3>
                        <h3>MariaDB</h3>
                        <h3>H2DB</h3>
                    </div>
                    <div>
                        <span>디자인 및 협업도구</span>
                        <h3>Figma</h3>
                        <h3>GIMP</h3>
                        <h3>GitHub</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Skill;
