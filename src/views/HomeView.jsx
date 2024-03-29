import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";

const HomeView = () => {
    return (
        <>
            <Skip />
            <Header />
            <Main>
                <Intro />
                <Skill />
                <Site />
                <Projects />
                <Contact />
            </Main>
            <Footer />
        </>
    );
};

export default HomeView
