import ButtonCreateNewPostComponent from "../components/ButtonCreateNewPostComponent";
import styled from "@emotion/styled";

const Article = styled.article`
  border-bottom: 1px solid red;
`;

const ExcerptComponent = () => (
  <Article>
    <ul>
      <li>November 01 / 2019</li>
      <li> 3 months ago</li>
    </ul>
    <ul>
      <li>
        <h3>Readme.md</h3>
      </li>
      <li>
        <a href="">Read</a>
      </li>
    </ul>
  </Article>
);

export default ExcerptComponent;
