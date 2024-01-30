import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PostCard = ({ post, postsCats }) => {
  const [slug, setSlug] = useState();
  useEffect(() => {
    if (post) {
      const arr = post.link.split("product-information")[1].split("/");
      arr.pop();
      arr.shift();
      setSlug(arr);
    }
  }, [post, postsCats]);

  return (
    <Wrapper>
      {slug && (
        <>
          <NavLink
            to={`/product-information/${slug[0]}/${slug[1]}`}
            state={{ id: post.id, post: post }}
          >
            <p>{post.title.rendered}</p>
          </NavLink>
          <NavLink
            to={`/product-information/${slug[0]}/${slug[1]}`}
            state={{ id: post.id, post: post }}
          >
            <Button>click here</Button>
          </NavLink>
        </>
      )}
    </Wrapper>
  );
};

const Button = styled.button`
  padding: 5px 15px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 10px 20px;
`;
export default PostCard;
