"use client";

import { FaGlobe } from "react-icons/fa6";
import { FaMugSaucer } from "react-icons/fa6";

import Wrapper from "@/styles/wrappers/Blog_xx";

const Blogs_12 = ({ blogs }) => {
  return (
    <Wrapper>
      <section className="blogs">
        <div className="section-title">
          <h2> Blogs from Supabase-- Jimmy , 212410012</h2>
        </div>
        <div className="blogs-center">
          {blogs?.map((blog) => {
            const { id, title, descrip, category, img, remote_img } = blog;
            return (
              <article className="blog" key={id}>
                <img src={img} alt={title} className="img blog-img" />
                <div className="blog-content">
                  <span>
                    {category}{" "}
                    {category === "lifestyle" ? <FaMugSaucer /> : <FaGlobe />}
                  </span>
                  <h3>{title}</h3>
                  <p>{descrip}</p>
                  <a href="#">read more</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default Blogs_12;
