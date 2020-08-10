/**Styles */
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { breakpoint } from "../styles/breakPoints";

const H1 = styled.h1`
  color: ${colors.mainBlue};
  font-size: 8rem;
  margin-top: 0;
  ${breakpoint("sm")} {
    font-size: 3rem;
  }
`;

const MainTitleComponent = () => {
  return <H1 className="light-font">Blog msco.</H1>;
};

export default MainTitleComponent;
