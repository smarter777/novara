import React, { useState } from "react";
import { Button } from "components";
import { message } from 'antd';

const ColorPicker = ({setColor}) => {
  const [selectedColor, setSelectedColor] = useState("#f96221");
  const [buttonColor, setButtonColor] = useState("");
  const [buttonName, setButtonName] = useState("#f96221");

  const success = () => {
    message.success('copied');
  };



  var cpnBtn = document.getElementById("copybutton");
  var color ;
  const selectColor = (color) => {
    setColor(color);
    setSelectedColor(color);
    setButtonColor(color);
    setButtonName(color);
  };
  color = buttonName;
  window.localStorage.setItem("RRR", color);

  message.config({
    top: 100,
    duration: 2,
  });

  const copyColorName = () => {
    navigator.clipboard.writeText(buttonName);
    message.success('copied');
    
    // cpnBtn.innerHTML = "copied";
    
    // setTimeout(function(){
    //     cpnBtn.innerHTML = buttonName;
    //   }, 400);
    // show some notification or feedback to the user
  };

  return (
    <div className="flex flex-row gap-5 items-center justify-between w-full">
      {/* <button
        id="copybutton"
        className="color-button w-[100px] rounded-lg p-2 mr-4 bg-white-A700"
        onClick={copyColorName}
      >
        {buttonName}
      </button>
      <input
        type="color"
        value={selectedColor}
        onChange={(e) => selectColor(e.target.value)}
        className="mr-4"
      /> */}
        <input
            type="color"
            value={selectedColor}
            onChange={(e) => selectColor(e.target.value)}
            className=" flex h-10 rounded-[10px] shadow-bs1 w-10"
        />
        <Button 
         id="copybutton"
         className="bg-white-A700 cursor-pointer font-medium leading-[normal] min-w-[180px] py-2.5 rounded-[10px] shadow-bs1 text-base text-blue_gray-900 text-center"
         onClick={copyColorName}>
         {buttonName}
        </Button>

      
    </div>
  );
};

export default ColorPicker;