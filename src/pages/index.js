/**Main layout */
import Layout from "../layout/layout";

/**Components */
import MainTitle from "../components/MaintTitleComponent";
import ParagraphTitleComponent from "../components/ParagraphTitleComponent";
import UserPostComponent from "../components/UserPostComponent";

const Page = () => (
  <Layout>
    <MainTitle />
    <ParagraphTitleComponent />
    <UserPostComponent />
  </Layout>
);

export default Page;
