import React from "react";
import TutorialCard from "./TutorialCard";

const tutorials = [
    {
        title: "JS6 Essentials",
        description: "Modern JavaScript (ES6+)",
        rating: 5,
        username: "codeGuy",
        image: "https://picsum.photos/250/150?4",
    },
    {
        title: "React Router Guide",
        description: "Routing in React explained",
        rating: 4.7,
        username: "devQueen",
        image: "https://picsum.photos/250/150?5",
    },
    {
        title: "Express Overview",
        description: "Quick start with ExpressJS",
        rating: 4.9,
        username: "nodeNinja",
        image: "https://picsum.photos/250/150?6",
    },
];

function FeaturedTutorials() {
    return (
        <section>
            <h2>Featured Tutorials</h2>
            <div className="grid">
                {tutorials.map((tutorial, index) => (
                    <TutorialCard key={index} data={tutorial} />
                ))}
            </div>
            <a href="#" className="btn">See all tutorials</a>
        </section>
    );
}

export default FeaturedTutorials;
