import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState();
  const [postsCats, setPostsCats] = useState();

  useEffect(() => {
    const postDataFetch = async () => {
      const promiseData = await Promise.all([
        fetch(`${process.env.REACT_APP_URL}/posts`),
        fetch(`${process.env.REACT_APP_URL}/post/categories`),
      ]);
      const results = await promiseData.map((data) => {
        return data.json();
      });
      const [postResult, postCatResult] = await Promise.all(results);
      setPosts(postResult.data);
      setPostsCats(postCatResult.data);
    };

    postDataFetch();
  }, []);

  return (
    <PostContext.Provider value={{ posts, postsCats }}>
      {children}
    </PostContext.Provider>
  );
};
