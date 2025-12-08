import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Post(){
    const { id } = useParams();
    let [post, setPost] = useState();

    useEffect(() => {
        // Fetch post data based on the id
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setPost(data);
            });
    }, [id]);
    return (
        <> 
            <h2>Post Page</h2>
            <p>Post ID: {id}</p>

            {/* useEffect(() => {
                // Fetch post data based on the id
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                <div>
                    <h3>{data.title}</h3>
                    <p>{data.body}</p>
                </div>
            })
            }, [id]); */}

            {post ? (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}