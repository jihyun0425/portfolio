import React from "react";
import githubBg from "../assets/img/githubBg.jpg"
import blogBg from "../assets/img/blogBg.jpg"

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">Site</h2>
                <div className="site__wrap">
                            <h3 className="title">
                               GitHub 주소
                            </h3>
                            <div className="link">
                                <a href="https://github.com/jihyun0425">https://github.com/jihyun0425</a>
                            </div>
                            <div className="img">
                                <img src={githubBg} alt="깃허브 사진"/>
                            </div>
                </div>
                <div className="site__wrap">
                            <h3 className="title">
                               Blog 주소
                            </h3>
                            <div className="link">
                                <a href="https://blog.naver.com/jihyun9833">https://blog.naver.com/jihyun9833</a>
                            </div>
                            <div className="img">
                                <img src={blogBg} alt="블로그 사진"/>
                            </div>
                </div>
            </div>
        </section>
    );
};

export default Site;
