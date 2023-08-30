import React from "react";

import { Img, Text, Button } from "components";

const Navigation = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className=" flex flex-row md:gap-10 items-center justify-start  rounded-[51px] bg-[rgba(255,255,255,0.8)] box-shadow-custom backdrop-blur-sm  h-[66px] sm:w-full relative">
        <div className="flex flex-row md:gap-10 items-center justify-between py-0.5 w-full">
            <div className="flex flex-row items-start justify-start ml-[37px]">
                <Img
                    className="h-[33px]"
                    src="images/img_edit.svg"
                    alt="edit"
                />
                <Text
                    className="ml-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtOutfitBold24"
                >
                    novara
                </Text>
            </div>
            <div className="flex flex-row  gap-[2%] items-center justify-center md:hidden">
              <Text
                className="text-center text-lg font-medium text-black"
                size="txtOutfitBold24"
              >
                Home
              </Text>
              <Text
                className="ml-[53px] text-center font-medium text-lg text-black"
                size="txtOutfitBold24"
              >
                Modules
              </Text>
              <Text
                className="ml-[46px] text-center  font-medium text-lg text-black"
                size="txtOutfitBold24"
              >
                Contact
              </Text>
            </div>
            <Button className="bg-deep_orange-500 cursor-pointer font-bold leading-[normal] min-w-[124px] py-[11px] rounded-[10px] shadow-bs text-base text-center text-white-A700 mr-[42px]">
            Let’s Create
            </Button>
        </div>
        </div>
      </div>
    </>
  );
};

Navigation.defaultProps = {};

export default Navigation;