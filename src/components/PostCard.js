import React from 'react';

function PostCard({ data }) {
    return (
        <div className="card" style={{ width: '220px', background: '#fff' }}>
            <img
                src={data.image}
                alt={data.title}
                style={{ width: '100%', height: '120px', objectFit: 'cover' }}
            />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p><strong>By:</strong> {data.author}</p>
            <small>{data.category}</small>
            <button style={{ marginTop: '10px' }}>Read More</button>
        </div>
    );
}

export default PostCard;
