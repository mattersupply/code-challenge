import { css } from "@emotion/core";
import { breakpoint } from "./breakPoints";

const main = css`
  /**Local fonts */
  @font-face {
    font-family: "neuehanskendrick-light";
    src: url(/fonts/neuehanskendrick-light.ttf);
    src: url(/fonts/neuehanskendrick-light.woff);
  }
  @font-face {
    font-family: "neuehanskendrick-medium";
    src: url(/fonts/neuehanskendrick-medium.ttf);
    src: url(/fonts/neuehanskendrick-medium.woff);
  }
  @font-face {
    font-family: "neuehanskendrick-regular";
    src: url(/fonts/neuehanskendrick-regular.ttf);
    src: url(/fonts/neuehanskendrick-regular.woff);
  }

  /**Grid */
  .container {
    max-width: 1370px;
    margin: auto;
    display: flex;
    ${breakpoint("sm")} {
      display: block;
      margin: 0 2rem;
    }
  }
  .col-2 {
    width: 50%;
    ${breakpoint("sm")} {
      width: 100%;
    }
  }

  /**Fonts styles */
  .light-font {
    font-family: "neuehanskendrick-light";
  }
  .medium-font {
    font-family: "neuehanskendrick-medium";
  }
  .regular-font {
    font-family: "neuehanskendrick-regular";
  }

  /**Media queries */
`;

export default main;
