import React from "react";
import ArticleCard from "./ArticleCard";

const articles = [
    {
        title: "Intro to React",
        description: "Learn the basics of ReactJS",
        rating: 5,
        author: "Ramneek",
        image: "https://picsum.photos/250/150?1",
    },
    {
        title: "NodeJS Basics",
        description: "Understand the backend with NodeJS",
        rating: 4.8,
        author: "Jane Smith",
        image: "https://picsum.photos/250/150?2",
    },
    {
        title: "React Hooks",
        description: "Master React Hooks",
        rating: 4.9,
        author: "Alex Johnson",
        image: "https://picsum.photos/250/150?3",
    },
];

function FeaturedArticles() {
    return (
        <section>
            <h2>Featured Articles</h2>
            <div className="grid">
                {articles.map((article, index) => (
                    <ArticleCard key={index} data={article} />
                ))}
            </div>
            {/* FIX: replaced <a href="#"> with <button> */}
            <button className="btn" onClick={() => alert("Redirect to all articles")}>
                See all articles
            </button>
        </section>
    );
}

export default FeaturedArticles;
