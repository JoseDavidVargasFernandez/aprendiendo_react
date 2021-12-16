import React from "react";
import posts from "./../data/Post";
import { Link } from "react-router-dom";
import Controles from "./Controles";


const Blog = () => {
  

    return (
        <div>
            <h2>Blog</h2>
                <ul>

                  {/* <li>Articulo#1</li>
                  <li>Articulo#1</li>
                  <li>Articulo#1</li>
                   */}
                  {posts.map((post) => {
                    return (
                      <li key={post.id}> 
                        <Link to={`/post/${post.id}`}>{post.titulo}</Link>
                      </li>

                    )
                  })}
                </ul>
                <Controles/>
              </div>
      );
}
 
export default Blog;