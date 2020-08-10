import { css } from "@emotion/core";

const main = css`
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

  .container {
    max-width: 1370px;
    margin: auto;
    display: flex;
  }
  .light-font {
    font-family: "neuehanskendrick-light";
  }
  .medium-font {
    font-family: "neuehanskendrick-medium";
  }
  .regular-font {
    font-family: "neuehanskendrick-regular";
  }

  .blue {
    color: blue;
  }
  .col-2 {
    width: 50%;
  }
`;

export default main;
