import styled from "@emotion/styled";
import { colors } from "../styles/colors";

const P = styled.p`
  font-size: 1rem;
  color: ${colors.darkGrey};
  margin-bottom: 2rem;
`;

const ParagraphTitleComponent = () => (
  <P className="regular-font">
    Explore the unknown. Uncover what matters. Prototype, test, repeat. Combine
    intuition with evidence. Design with intent and build it right.
  </P>
);
export default ParagraphTitleComponent;
