import React from 'react';

const posts = [
    {
        title: 'React Basics for Beginners',
        description: 'Learn how to set up and start using React step by step.',
        category: 'Tutorial',
        author: 'John Dev',
        image: 'https://picsum.photos/id/1015/300/180'
    },
    {
        title: 'The Future of AI',
        description: 'Exploring how artificial intelligence is shaping industries.',
        category: 'Article',
        author: 'Jane AI',
        image: 'https://picsum.photos/id/1025/300/180'
    },
    {
        title: 'Top 10 Node.js Tips',
        description: 'Speed up your backend development with these tricks.',
        category: 'Tips',
        author: 'CoderX',
        image: 'https://picsum.photos/id/1041/300/180'
    }
];

function Posts() {
    return (
        <section>
            <h2>Latest Posts</h2>
            <div className="card-grid" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {posts.map((post, index) => (
                    <div key={index} className="card" style={{ width: '220px', background: '#fff' }}>
                        <img src={post.image} alt={post.title} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <p><strong>By:</strong> {post.author}</p>
                        <small>{post.category}</small>
                        <button style={{ marginTop: '10px' }}>Read More</button>
                    </div>
                ))}
            </div>
            <button style={{ marginTop: '20px' }}>See all posts</button>
        </section>
    );
}

export default Posts;
