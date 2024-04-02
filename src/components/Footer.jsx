import React from "react";
import footerText from "../constants/footer";
import footer from "../assets/img/footer.jpg";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__text">
                    <span>Thank you:)</span>
                </div>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <p>contact me</p>
                        </div>
                        <img src={footer} alt="하단 이미지" />
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    © 2024 Byun ji hyun - portfolio
                </div>
            </div>
        </footer>
    );
};

export default Footer;
