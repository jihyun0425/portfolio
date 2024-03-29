import React from "react";

import about from "../assets/img/about.jpg";

const Intro = () => {
    return (
        <section id="intro">
            <div class="intro__inner">
                <h1 class="intro__title">junior developer</h1>
                <div class="intro__lines" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
                    <div class="img">
                        <img src={about} alt="어바웃" />
                    </div>
                <div class="intro__lines bottom" aria-hidden="true">
                    <span class="line">이름</span>
                    <span class="line">생년월일</span>
                    <span class="line">주소</span>
                    <span class="line">메일</span>
                    <span class="line">학교</span>
                    <span class="line">깃허브</span>
                    <span class="line">블로그</span>
                </div>
            </div>
        </section>
    );
};

export default Intro;
