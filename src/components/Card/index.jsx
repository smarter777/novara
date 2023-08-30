import { Img, Text } from 'components';
import React, { useRef, useEffect, useState } from 'react';
import 'styles/card.css';

function Card(props) {
  const cardRef = useRef(null);
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setBounds(cardRef.current.getBoundingClientRect());
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function rotateToMouse(e) {
   
    if (!bounds) {
      return;
    }

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    const card = cardRef.current;
    card.style.transform = `
      scale3d(1, 1, 1)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    const glow = card.querySelector('.glow');
    glow.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
  }

  function handleMouseEnter() {
    const card = cardRef.current;
    setBounds(card.getBoundingClientRect());
    card.addEventListener('mousemove', rotateToMouse);

  }

  function handleMouseLeave() {
    const card = cardRef.current;
    card.removeEventListener('mousemove', rotateToMouse);
    card.style.transform = '';
    const glow = card.querySelector('.glow');
    glow.style.backgroundImage = '';
  }

  return (
    <div className="card" ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      
      <div className="content">
        {/* Add card content here */}
        <div className=" bg-white-A700 flex flex-1 flex-col gap-[39px] items-center justify-end p-9 sm:px-5 rounded-[24px] shadow-bs w-full z-10">
            <div className="h-[142px] relative w-[142px]">
            <Img
                className="h-[142px] m-auto object-cover rounded-[24px] w-[142px]"
                src={props.image}
                alt="magicpatterndes"
            />
            <Img
                className="absolute h-[84px] inset-[0] justify-center m-auto w-[84px]"
                src={props.svg}
                alt="frame"
            />
            </div>
            <Text
            className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
            size="txtInterSemiBold24"
            >
            {props.text}
            </Text>
        </div>
      </div>
      <div className="glow"></div>
    </div>
  );
}

export default Card;