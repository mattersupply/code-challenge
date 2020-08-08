import Layout from "../layout/layout";

// COMPONENTS
import MainTitle from "../components/MaintTitleComponent";
import ParagraphTitleComponent from "../components/ParagraphTitleComponent";
import SearchComponentBar from "../components/SearchBarComponent";
import AuthorComponent from "../components/AuthorComponent";
import ExcerptComponent from "../components/ExcerptComponent";

const Page = () => (
  <Layout>
    <MainTitle />
    <ParagraphTitleComponent />
    <SearchComponentBar />
    <AuthorComponent />
    <ExcerptComponent />
  </Layout>
);

export default Page;
