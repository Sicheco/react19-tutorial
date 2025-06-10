import { useState, useEffect } from "react";

import React from 'react'

function FetchDataEffect() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    }

    getData();
  }, [])

  return (
    <div>
      <h1>Shalom</h1>
      {posts.length > 0 ?
        <h2>{posts[0].title}</h2>
        :
        <h2>Rahu</h2>}
    </div>
  )
}

export default FetchDataEffect