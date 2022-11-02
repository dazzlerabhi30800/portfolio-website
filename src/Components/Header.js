import React, { useState, useEffect } from "react";
import "./Styles/Style.css";

const Header = ({ theme, setTheme }) => {
  const [click, setClick] = useState(false);
  const handleTheme = () => {
    if (!theme) {
      setTheme(true);
      document.body.classList.add("light");
    } else {
      setTheme(false);
      document.body.classList.remove("light");
    }
  };

  const handleClick = () => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  };
  const handleResize = () => {
    if (window.innerWidth >= 950) {
      setClick(false);
    }
  };

  window.addEventListener("resize", handleResize);
  useEffect(() => {
    handleResize();
  }, [click]);

  return (
    <header id="home">
      <svg
        width="80"
        height="80"
        viewBox="0 0 133 142"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_9_10)">
          <path
            d="M1 11L53.3961 41.8047L110 11V96.2558L53.3961 129L1 96.2558V11Z"
            fill="url(#paint0_linear_9_10)"
          />
          <g filter="url(#filter1_d_9_10)">
            <path
              d="M35.5123 86.6119C35.1793 87.0652 34.7994 87.4042 34.3725 87.6289C33.9451 87.8862 33.5353 88.0622 33.143 88.157C32.6852 88.2838 32.1961 88.329 31.6758 88.2926C31.4805 88.2912 31.2698 88.2408 31.0435 88.1415C30.8492 88.0749 30.6393 87.9757 30.4135 87.8439C30.1873 87.7445 29.9946 87.5804 29.8356 87.3513C29.4065 85.7206 29.0254 84.139 28.6923 82.6066C28.3592 81.0743 28.0723 79.705 27.8316 78.4988C27.5289 77.0968 27.2738 75.7766 27.0661 74.5381C26.1878 74.4991 24.8695 74.4894 23.1112 74.509C21.3859 74.4963 19.5127 74.5801 17.4913 74.7605C16.8409 76.7088 16.3258 78.3489 15.9459 79.6807C15.5661 81.0125 15.2876 82.1172 15.1105 82.9948C14.9333 83.8724 14.8565 84.588 14.8801 85.1415C14.903 85.7276 14.9924 86.2328 15.1483 86.6572C14.6851 87.1095 14.2241 87.4316 13.7652 87.6235C13.3383 87.8482 12.9453 87.9918 12.5862 88.0543C12.1614 88.1488 11.754 88.1784 11.3639 88.1429C10.8441 88.074 10.4226 87.9732 10.0992 87.8406C9.77527 87.7406 9.53406 87.5598 9.37556 87.2982C9.24908 87.0694 9.20583 86.7273 9.24583 86.2719C9.31838 85.8167 9.45842 85.2155 9.66596 84.4684C9.8719 83.8188 10.2488 82.666 10.7968 81.0099C11.3778 79.3215 12.0276 77.4058 12.7463 75.2627C11.5078 75.3512 10.5486 75.279 9.86873 75.0461C9.22143 74.8135 8.77581 74.1917 8.53189 73.1808C9.05537 73.0219 9.61113 72.8796 10.1992 72.7537C10.8203 72.5955 11.4086 72.4534 11.9641 72.3272C12.5847 72.2016 13.2213 72.0924 13.874 71.9995C14.5926 69.8564 15.327 67.746 16.0772 65.6682C16.8274 63.5904 17.5252 61.7238 18.1708 60.0685L21.1264 52.522C21.1947 52.3272 21.54 52.1181 22.1622 51.8949C22.7843 51.6716 23.4708 51.4976 24.2217 51.3729C24.973 51.2157 25.6904 51.1396 26.374 51.1447C27.0576 51.1497 27.4946 51.2994 27.6852 51.5938C27.7717 52.278 27.888 53.1252 28.0343 54.1354C28.2131 55.1458 28.3762 56.1235 28.5235 57.0686C28.7008 58.1767 28.91 59.3175 29.1513 60.4912C29.4176 62.1207 29.6974 63.9294 29.9904 65.9172C30.3161 67.9053 30.7209 70.0241 31.2051 72.2737C31.6892 74.5234 32.2697 76.8551 32.9464 79.2689C33.6232 81.6827 34.4785 84.1304 35.5123 86.6119ZM22.1881 71.2307C23.2302 71.2059 24.0931 71.1959 24.7767 71.201C25.4603 71.206 26.0459 71.2266 26.5337 71.2628L26.3991 70.5294C26.2235 69.3236 26.0329 68.0365 25.8274 66.6678C25.6544 65.2993 25.4649 63.947 25.2589 62.6109C25.0854 61.275 24.9108 60.0042 24.7352 58.7985C24.5595 57.5928 24.4141 56.5338 24.2987 55.6215C23.9594 56.4653 23.5683 57.4878 23.1255 58.689C22.6832 59.8576 22.2064 61.1399 21.6953 62.5358C21.1842 63.9318 20.6557 65.3927 20.1099 66.9186C19.5966 68.4447 19.0836 69.9546 18.5709 71.4482C19.1579 71.3874 19.7446 71.3429 20.3311 71.3147C20.9175 71.2865 21.5365 71.2585 22.1881 71.2307Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter2_d_9_10)">
            <path
              d="M88.7197 89.2969C86.9619 89.2969 85.3669 88.8574 83.9346 87.9785C82.5023 87.1322 81.2816 85.9603 80.2725 84.4629C79.2959 82.9655 78.5309 81.2077 77.9775 79.1895C77.4567 77.1712 77.1963 74.9902 77.1963 72.6465C77.1963 69.2936 77.5869 66.2988 78.3682 63.6621C79.1494 61.0254 80.1748 58.7956 81.4443 56.9727C82.7464 55.1497 84.2113 53.75 85.8389 52.7734C87.499 51.7969 89.1917 51.3086 90.917 51.3086C92.5446 51.3086 93.9118 51.6016 95.0186 52.1875C96.1253 52.7734 97.0042 53.5221 97.6553 54.4336C98.3389 55.3451 98.7946 56.3542 99.0225 57.4609C99.2829 58.5352 99.3643 59.5605 99.2666 60.5371C99.1038 62.4251 98.4528 63.9551 97.3135 65.127C96.2067 66.2988 94.9209 66.8848 93.4561 66.8848C92.9678 66.8522 92.4632 66.7708 91.9424 66.6406C91.4867 66.5104 91.0146 66.3151 90.5264 66.0547C90.0381 65.7943 89.5824 65.4199 89.1592 64.9316C90.5264 65.0293 91.5843 64.7526 92.333 64.1016C93.0817 63.4505 93.6351 62.7181 93.9932 61.9043C94.3838 60.9603 94.6117 59.8535 94.6768 58.584C94.6768 57.8678 94.5628 57.2493 94.335 56.7285C94.1071 56.1751 93.7979 55.7357 93.4072 55.4102C93.0492 55.0521 92.6585 54.7917 92.2354 54.6289C91.8122 54.4661 91.4053 54.3848 91.0146 54.3848C90.1357 54.3848 89.1755 54.7266 88.1338 55.4102C87.1247 56.0938 86.1644 57.1354 85.2529 58.5352C84.3415 59.9023 83.5765 61.6602 82.958 63.8086C82.3721 65.9245 82.0791 68.4473 82.0791 71.377C82.0791 74.2741 82.3395 76.6504 82.8604 78.5059C83.3812 80.3288 84.016 81.7611 84.7646 82.8027C85.5133 83.8118 86.2946 84.5117 87.1084 84.9023C87.9548 85.2604 88.6709 85.4395 89.2568 85.4395C90.3962 85.3418 91.4378 84.9512 92.3818 84.2676C93.1956 83.6816 93.9606 82.7539 94.6768 81.4844C95.4255 80.1823 95.93 78.3268 96.1904 75.918C96.6136 75.9505 96.9554 76.0482 97.2158 76.2109C97.5088 76.3737 97.7529 76.5365 97.9482 76.6992C98.1436 76.8945 98.3226 77.1224 98.4854 77.3828C98.5179 77.4154 98.5179 77.7409 98.4854 78.3594C98.4528 78.9779 98.3389 79.7266 98.1436 80.6055C97.9482 81.4844 97.639 82.4284 97.2158 83.4375C96.8252 84.4466 96.2555 85.3906 95.5068 86.2695C94.7907 87.1484 93.8792 87.8646 92.7725 88.418C91.6657 89.0039 90.3148 89.2969 88.7197 89.2969Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_9_10"
            x="0"
            y="0"
            width="133"
            height="142"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="11" dy="1" />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_9_10"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_9_10"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_9_10"
            x="5.28702"
            y="45.0158"
            width="41.8035"
            height="51.3537"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="1" />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_9_10"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_9_10"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_9_10"
            x="74.1963"
            y="45.3086"
            width="36.2168"
            height="51.9883"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="1" />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_9_10"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_9_10"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_9_10"
            x1="55.6079"
            y1="40.7899"
            x2="55.6079"
            y2="126.898"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0111674" stopColor="#B80545" />
            <stop offset="1" stopColor="#E714B8" stopOpacity="0.87" />
          </linearGradient>
        </defs>
      </svg>
      <nav className={click ? "active" : ""}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="theme--toggler" onClick={handleTheme}>
        <i className={theme ? "fas fa-moon" : "fas fa-sun"}></i>
      </div>
      <div className="menu--btn" onClick={handleClick}>
        <i className={`fas ${click ? "fa-times" : "fa-bars"}`}></i>
      </div>
    </header>
  );
};

export default Header;
