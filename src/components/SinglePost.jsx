import React, { useEffect, useState } from "react";

export default function SinglePost() {
  const [id, setId] = useState(1);
  const [post, setPost] = useState({});
  useEffect(() => {
    async function getSinglePost() {
      let path = `https://jsonplaceholder.typicode.com/posts/${id}`;
      let response = await fetch(path, {
        method: "GET"
      });
      let data = await response.json();
      setPost(data);
    }
    getSinglePost();
  }, [id]);

  return (
    <>

      <div className="w-1/2 mx-auto text-left p-6 h-1/3">
        <p className="text-2xl p-2 bg-green-400 text-red-500">[{post?.id}] {post?.title}</p>
        <p className="text-2xl p-3 bg-slate-500 text-white">{post?.body}</p>
        <div className="w-full mt-3 flex justify-between gap-2 bg-gray-700">
            <button
            disabled={id === 1 ? true : false}
            onClick={() => setId(prevId => prevId = id - 1)}
            className={`p-2 ${id === 1 ? "bg-red-300" :'bg-green-700'}`}
            style={{ cursor: id === 1 ? 'no-drop': 'pointer'}}
            >
            Prev
            </button>
            <button 
                className="bg-green-500 p-2"
                onClick={() => setId(prevId => prevId = id + 1)}>Next</button>
        </div>
      </div>
    </>
  );
}
