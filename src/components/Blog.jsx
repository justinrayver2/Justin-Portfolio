import React from "react";

export default function Blog() {
  const posts = [
    {
      title: "React + Vite: Why It's So Fast",
      desc: "Understanding how Vite speeds up modern React development.",
      link: "#"
    },
    {
      title: "Styling in React",
      desc: "How CSS animations make interfaces feel alive and dynamic.",
      link: "#"
    },
    {
      title: "Learning Frontend the Fun Way",
      desc: "Building real projects instead of following endless tutorials.",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="wrapper">
      <h2 className="section-title">Blog</h2>

      <div className="blog-grid">
        {posts.map((post, index) => (
          <div key={index} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <a href={post.link} className="read-more">
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
