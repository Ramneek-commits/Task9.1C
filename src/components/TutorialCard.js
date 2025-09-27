import React from "react";

function TutorialCard({ data }) {
    return (
        <div className="card">
            <img src={data.image} alt={data.title} />
            <div className="card-content">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <div className="rating">⭐ {data.rating} — {data.username}</div>
            </div>
        </div>
    );
}

export default TutorialCard;
