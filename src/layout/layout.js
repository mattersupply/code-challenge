import MainLogo from "../../assets/main-logo.svg";
import ImageComponent from "../components/ImageComponent";

// Import utilities
import styled from "@emotion/styled";

const Header = styled.header`
  margin-top: 3rem;
  margin-bottom: 4rem;
`;

const Layout = ({ children }) => (
  <>
    <Header className="container">
      <MainLogo />
    </Header>
    <section className="container">
      <section className=" col-2">{children}</section>
      <ImageComponent />
    </section>
  </>
);
export default Layout;
