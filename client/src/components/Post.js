import { useLocation } from "react-router-dom";
import parse from "html-react-parser";
import styled from "styled-components";
import "./Post.css";

const Post = () => {
  const location = useLocation();
  return <Wrapper>{parse(location.state.post.content.rendered)}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  padding: 5em 20em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  justify-content: center;
  
`

export default Post;
