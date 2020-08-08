import MainLogo from "../../assets/main-logo.svg";

// Import utilities
import styled from "@emotion/styled";

const Section = styled.section`
  background-image: url(/images/bg-image.png);
  background-repeat: no-repeat;
  background-position: top right;
`;

const Layout = ({ children }) => (
  <>
    <header className="container">
      <MainLogo />
    </header>
    <Section className="container">{children}</Section>
  </>
);
export default Layout;
