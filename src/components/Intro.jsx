import React from "react";

import about from "../assets/img/about.jpg";

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">junior developer</h1>
                <div className="intro__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                    <div className="img">
                        <img src={about} alt="어바웃" />
                    </div>
                <div class="intro__lines bottom" aria-hidden="true">
                    <span className="line">이름</span>
                    <span className="line">생년월일</span>
                    <span className="line">주소</span>
                    <span className="line">메일</span>
                    <span className="line">학교</span>
                    <span className="line">깃허브</span>
                    <span className="line">블로그</span>
                </div>
            </div>
        </section>
    );
};

export default Intro;
