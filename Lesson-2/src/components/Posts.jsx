import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

const Posts = () => {
  const { loading, data, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  // PAGINATION //////////////////////////////////////

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const pages = [];
  for (let i = 0; i < Math.ceil(data.length / limit); i++) {
    pages.push(i + 1);
  }

  const paginatePosts = (page) => {
    let firstIndex = limit * (page - 1);
    let lastIndex = limit * page;
    const currentPosts = data.slice(firstIndex, lastIndex);
    setPosts(currentPosts);
  };

  useEffect(() => {
    paginatePosts(page);
  }, [data, page]);
  // ///////////////////////////////////////////////////////

  return (
    <div>
      {loading ? <h2 style={{ textAlign: 'center' }}>Loading...</h2> : null}
      {posts.length > 0 ? (
        <div>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                {post.id} {post.title}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div style={{ display: 'flex', gap: '5px' }}>
        {pages.map((p) => (
          <button onClick={() => paginatePosts(p)}>{p}</button>
        ))}
      </div>
      {error ? <h3>{error.message}</h3> : null}
    </div>
  );
};

export default Posts;
