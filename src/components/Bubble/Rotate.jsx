import React from 'react';
import { Img, Text } from 'components';
import useMousePosition from './index';


//   const { x, y } = useMousePosition({ includeTouch: true });
//   const [translateX, setTranslateX] = React.useState(0);
//   const [translateY, setTranslateY] = React.useState(0);
//   const MAX_OFFSET = 10;

//   React.useEffect(() => {
//     const offsetX = (x / window.innerWidth) * 100;
//     const offsetY = (y / window.innerHeight) * 100;
//     const pixelOffsetX = Math.min(offsetX, 100 - offsetX) / 100 * MAX_OFFSET; // calculate the pixel offset for X translation
//     const pixelOffsetY = Math.min(offsetY, 100 - offsetY) / 100 * MAX_OFFSET; // calculate the pixel offset for Y translation
//     setTranslateX(`${offsetX > 50 ? '-' : ''}${pixelOffsetX}px`); // set X translation value and handle negative value if mouse is on the right side of the screen
//     setTranslateY(`${offsetY > 50 ? '-' : ''}${pixelOffsetY}px`); // set Y translation value and handle negative value if mouse is on the bottom side of the screen
//   }, [x, y]);


const Picture = (props) => {
    const { x, y } = useMousePosition({ includeTouch: true });
    const [translateX, setTranslateX] = React.useState(0);
    const [translateY, setTranslateY] = React.useState(0);
    const MAX_OFFSET = 10;
  
    React.useEffect(() => {
            
      setTranslateX((x / window.innerWidth) * 15); // calculate the percentage of the window width the mouse is over
      setTranslateY((y / window.innerHeight) * 15); // calculate the percentage of the window height the mouse is over
    }, [x, y]);
  
    return (
      <div style={{ transform: `translate(${translateX}%, ${translateY}%)` }}  >
        <Img
        className=" m-auto object-cover rounded-bl-[24px] rounded-br-[24px] rounded-tl rounded-tr-[24px] w-full"
        src={props.img}
        alt="magicpatterndes"
        />
        <Text
        className="absolute h-max inset-[0] justify-center m-auto text-lg md:text-base text-white-A700 w-max"
        size="txtOutfitBold18"
        >
        {props.text}
        </Text>
    </div>
    );
  };
  
  export default Picture;