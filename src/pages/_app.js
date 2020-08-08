import App from "next/app";
import { Global, css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";
import main from "../styles/main";

class BlogApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Global
          styles={css`
            ${emotionNormalize}
            ${main}
          `}
        />
        <Component {...pageProps} />
      </>
    );
  }
}

export default BlogApp;
