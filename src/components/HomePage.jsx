import React from "react";
import Header from "./HeaderBar";
import Introduction from "./Introduction";
import FeaturedArticles from "./FeaturedArticles";
import Tutorials from "./FeaturedTutorials.js";
import Footer from "./Footer";

export default function HomePage() {
    return (
        <>
            <Header />
            <Introduction />
            <FeaturedArticles />
            <Tutorials />
            <Footer />
        </>
    );
}
