import { createGlobalStyle } from "styled-components";
import JuraMedium from "~styles/assets/fonts/Jura-Medium.ttf";
import bg from "~images/bg.png";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Jura Medium";
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url(${JuraMedium}) format("truetype");
  }

  #__next, body, html {
		height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    font-family: "Jura Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		background: url(${bg}) no-repeat center center fixed;
		background-color: #010007;
		color: #fff;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  ::-moz-focus-inner {
    border: 0;
  }

  @keyframes spinner-spin {
  	100% {
  		-webkit-transform: rotate(360deg);
  		transform: rotate(360deg);
  	}
  }

  @keyframes spinner-fade {
  	20% {
  		opacity: 0.1;
  	}
  	40% {
  		opacity: 1;
  	}
  	60% {
  		opacity: 0.1;
  	}
  }

  @keyframes spin {
  	from {
  		-webkit-transform: rotate(0);
  		transform: rotate(0);
  	}
  	to {
  		-webkit-transform: rotate(359deg);
  		transform: rotate(359deg);
  	}
  }

  @keyframes spin3D {
  	from {
  		-webkit-transform: rotate3d(0.5, 0.5, 0.5, 360deg);
  		transform: rotate3d(0.5, 0.5, 0.5, 360deg);
  	}
  	to {
  		-webkit-transform: rotate3d(0deg);
  		transform: rotate3d(0deg);
  	}
  }

  @keyframes grow {
  	0% {
  		width: 0px;
  	}
  	100% {
  		width: 100px;
  	}
  }

  @keyframes zoomOut {
  	from {
  		opacity: 1;
  	}

  	50% {
  		opacity: 0;
  		-webkit-transform: scale3d(0.3, 0.3, 0.3);
  		transform: scale3d(0.3, 0.3, 0.3);
  	}

  	to {
  		opacity: 0;
  	}
  }

	@keyframes rotate {
		0% {
			transform: rotateX(0) rotateY(0) rotateZ(0);
		}
		100% {
			transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
		}
	}
`;

export default GlobalStyle;
