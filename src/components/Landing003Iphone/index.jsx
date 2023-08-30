import React from "react";

import { Img } from "components";

const Landing003Iphone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[948px]  w-[468px] md:h-[709px] md:w-[350px]  relative">
          <Img
            className="absolute h-[948px] w-[468px] md:h-[709px] md:w-[350px] m-auto object-cover "
            src="images/img_iphone12pro.png"
            alt="iphone12pro"
          />
          <Img
            className="absolute h-[908px] w-[421px] md:h-[679px] md:w-[315px] inset-[0] justify-center mt-[19.7px] mx-[23.79px] md:mt-[14.7px] md:mx-[17.8px]"
            src="images/img_screeniphone12.svg"
            alt="screeniphoneTwelve"
          />
          <Img
            className="absolute h-[44px] w-[390px] md:h-[33px] md:w-[291.6px] inset-x-[0] mt-[14.95px] ml-[27.67px]"
            src="images/img_statusbar.svg"
            alt="statusbar"
          />
        </div>
      </div>
    </>
  );
};

Landing003Iphone.defaultProps = {};

export default Landing003Iphone;
2.025641025641026