import { useContext } from "react";
import styled from "styled-components";
import { PostContext } from "./PostContext";
import PostCard from "./PostCard";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const ProductInfo = () => {
  const { posts, postsCats } = useContext(PostContext);
  const [filteredPosts, setFilteredPosts] = useState();
  const location = useLocation();
  useEffect(() => {
    if (postsCats && posts && location.state) {
      const filtered = posts.filter((post) => {
        const found = post.categories.find((cat) => {
          return cat === location.state.id;
        });
        if (found) {
          return post;
        }
      });
      setFilteredPosts(filtered);
    } else if (postsCats && posts) {
      setFilteredPosts(posts);
    }
  }, [posts, postsCats, location.pathname]);

  return (
    <Wrapper>
      <Container>
        <NavBar>
          {postsCats &&
            postsCats.map((cat, index) => {
              if (cat.link.split("/").length < 8) {
                if (
                  cat.link.split("/")[cat.link.split("/").length - 2] !==
                  "uncategorized"
                ) {
                  return (
                    <NavLink
                      to={`/product-information/${cat.slug}`}
                      state={{ id: cat.id, slug: cat.slug }}
                      key={index}
                    >
                      <Button>{cat.name}</Button>
                    </NavLink>
                  );
                }
              }
            })}
        </NavBar>
        <Posts>
          {filteredPosts &&
            filteredPosts.map((post, index) => {
              return <PostCard key={index} post={post} postsCats={postsCats} />;
            })}
        </Posts>
      </Container>
    </Wrapper>
  );
};

const Button = styled.button`
  @media screen and (max-width: 1024px) {
    padding: 5px 10px;
  }
`;

const Posts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ProductInfo;
