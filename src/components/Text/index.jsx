import React from "react";

const sizeClasses = {
  txtOutfitMedium14: "font-medium font-outfit",
  txtNunitoBold16: "font-bold font-nunito",
  txtOutfitExtraBold18: "font-extrabold font-outfit",
  txtNunitoExtraBold14: "font-extrabold font-nunito",
  txtInterSemiBold24: "font-inter font-semibold",
  txtNunitoExtraBold18: "font-extrabold font-nunito",
  txtInterMedium16: "font-inter font-medium",
  txtOutfitMedium10: "font-medium font-outfit",
  txtInterBold12: "font-bold font-inter",
  txtInterExtraBold18: "font-extrabold font-inter",
  txtOutfitExtraBold85: "font-extrabold font-outfit",
  txtOutfitExtraBold50: "font-extrabold font-outfit",
  txtInterMedium20: "font-inter font-medium",
  txtNunitoMedium8: "font-medium font-nunito",
  txtOutfitBold40: "font-bold font-outfit",
  txtOutfitBold10: "font-bold font-outfit",
  txtOutfitBold12: "font-bold font-outfit",
  txtInterMedium16Gray7007f: "font-inter font-medium",
  txtOutfitBold24: "font-bold font-outfit",
  txtOutfitBold16: "font-bold font-outfit",
  txtOutfitExtraBold50WhiteA700: "font-extrabold font-outfit",
  txtOutfitBold18: "font-bold font-outfit",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
