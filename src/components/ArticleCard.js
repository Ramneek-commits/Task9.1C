import React from "react";

function ArticleCard({ data }) {
    return (
        <div className="card">
            <img src={data.image} alt={data.title} />
            <div className="card-content">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <div className="rating">⭐ {data.rating} — {data.author}</div>
            </div>
        </div>
    );
}

export default ArticleCard;
