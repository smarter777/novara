import React, { useEffect, useState } from "react";
import { Button, Img, Input, Text, } from "components";
import Navigation from "components/Navigation";
import Card from "components/Card";
import Picture from "components/Bubble/Rotate";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Select } from "antd";
import ColorPicker from "components/ColorPicker";
import { LiaCogSolid } from 'react-icons/lia';
import "@fontsource/inter";
const { Option } = Select;
AOS.init();
const Landing003Page = () => {

  const [visibleFixedHeader, setVisibleFixedHeader] = useState(false);
  const [firstPhoneHidden, setfirstPhoneHidden] = useState(0);
  const [firstPhoneScale, setFirstPhoneScale] = useState(1);
  const [color, setColor] = useState('#f96221');
  const [fontFamily, setFontFamily] =useState('Inter');

  const handleFontChange = (value) => {
    setFontFamily(value);
  };

  const [frame, setFrame] = useState(0)
  useEffect(() => {

    window.addEventListener('scroll', (e) => {
      setVisibleFixedHeader(e.currentTarget.scrollY > 600);
      if (e.currentTarget.scrollY > 600 && 600 / e.currentTarget.scrollY > 0.75) setFirstPhoneScale(600 / e.currentTarget.scrollY);

      if (e.currentTarget.scrollY<800){ setfirstPhoneHidden (0)}
      if (e.currentTarget.scrollY>800 && e.currentTarget.scrollY<1800){ setfirstPhoneHidden (1)}
      if (e.currentTarget.scrollY>1800 && e.currentTarget.scrollY < 2700) { setfirstPhoneHidden (2)}
      if (e.currentTarget.scrollY>2700 && e.currentTarget.scrollY < 3600) { setfirstPhoneHidden (3)}
      console.log(visibleFixedHeader);

    });
  },[])

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-outfit items-center justify-start mx-auto w-full">
        <div className="md:px-5  w-full">
          <div className="flex flex-col m-auto w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col items-center justify-start mx-auto p-[38px] sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group10.png')" }}
            >
              <div className="flex flex-col justify-start mb-[76px] w-[99%] md:w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between py-0.5 w-full">
                  <div className="flex flex-row items-start justify-start pr-[17px]">
                    <Img
                      className="h-[33px]"
                      src="images/img_edit.svg"
                      alt="edit"
                    />
                    <Text
                      className="ml-[5px] mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtOutfitBold24"
                    >
                      novara
                    </Text>
                  </div>
                  <Button className="bg-deep_orange-500 cursor-pointer font-bold leading-[normal] min-w-[124px] py-[11px] rounded-[10px] shadow-bs text-base text-center text-white-A700">
                    Let’s Create
                  </Button>
                </div>
                <div className={`fixed w-screen flex flex-col items-center justify-start left-0 z-20 frame-transition transition-opacity duration-500  ${visibleFixedHeader ? "opacity-100" : "opacity-0"}`}>
                  <Navigation className="w-[50%] min-w-[700px] md:min-w-[350px] relative" />
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col gap-[19px] items-center justify-start md:ml-[0] mt-[65px] w-full">
                  <Text
                    className="md:text-5xl text-[85px] text-black-900 text-center"
                    size="txtOutfitExtraBold85"
                  >
                    <span className="text-black-900 font-outfit font-extrabold">
                      <>
                        Build an app
                        <br />
                      </>
sdf
                    </span>
                    <span className="text-black-900 font-outfit font-extrabold">
                      for your
                    </span>
                    <span className="text-black-900 font-outfit font-extrabold">
                      {" "}
                    </span>
                    <span className="text-deep_orange-500 font-outfit font-extrabold">
                      Ski Resort
                    </span>
                  </Text>
                  <Text
                    className="text-center text-gray-700 text-xl"
                    size="txtInterMedium20"
                  >
                    <>
                      Create and launch a native mobile app in less than a day.
                      <br />
                      No technical skills or coding required.
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div id="sticky" className="flex flex-col items-center justify-start w-full">
            <div className="`flex flex-col items-center justify-start w-[30%] h-[3600px]">
              <div className="flex flex-col items-center justify-start z-0 sticky top-4"  style={{ transform: `scale(${firstPhoneScale})` }}>
                <div className="h-[948px]  w-[468px] md:h-[709px] md:w-[350px] p-0.5  relative">
                  <Img
                    className={`absolute h-[948px] w-[468px] md:h-[709px] md:w-[350px] ${
                      visibleFixedHeader ? "md:top-[100px]" : "md:top-[0px]"
                    }  m-auto object-cover`}
                    
                    src="images/img_iphone12pro.png"
                    alt="iphone12pro"
                  />
                    <Img
                      className={`absolute h-[908px] w-[421px] md:h-[679px] md:w-[315px] inset-[0] justify-center mt-[19.7px] mx-[23.79px] md:mt-[14.7px] md:mx-[17.8px] frame-transition transition-opacity duration-1000 ${
                        firstPhoneHidden === 0 ? "opacity-100" : "opacity-0", visibleFixedHeader ? "md:top-[100px]" : "md:top-[0px]"
                      }`}
                      src="images/img_screeniphone12.svg"
                      alt="screeniphoneTwelve"
                    />
                    <Img
                      className={`absolute h-[908px] w-[421px] md:h-[679px] md:w-[315px] inset-[0] md:top-[100px] justify-center mt-[19.7px] mx-[23.79px] md:mt-[14.7px] md:mx-[17.8px] frame-transition transition-opacity duration-1 ${
                        firstPhoneHidden === 1 ? "opacity-100" : "opacity-0"
                      }`}
                      src="images/img_animate.png"
                      alt="screeniphoneTwelve"
                    />
                    <Img
                      className={`absolute h-[908px] w-[421px] md:h-[679px] md:w-[315px] inset-[0] md:top-[100px] justify-center mt-[19.7px] mx-[23.79px] md:mt-[14.7px] md:mx-[17.8px] frame-transition transition-opacity duration-1000 ${
                        firstPhoneHidden === 2 ? "opacity-100" : "opacity-0"
                      }`}
                      src="images/img_phone1.png"
                      alt="screeniphoneTwelve"
                    />
                    <Img
                      className={`absolute h-[908px] w-[421px] md:h-[679px] md:w-[315px] inset-[0] md:top-[100px] justify-center mt-[19.7px] mx-[23.79px] md:mt-[14.7px] md:mx-[17.8px] frame-transition transition-opacity duration-1000 ${
                        firstPhoneHidden === 3 ? "opacity-100" : "opacity-0"
                      }`}
                      src="images/img_phone2.png"
                      alt="screeniphoneTwelve"
                    />

                  <Img
                    className={`absolute h-[44px] w-[390px] md:h-[33px] md:w-[291.6px] inset-x-[0]  mt-[14.95px] ml-[27.67px] ${
                      visibleFixedHeader ? "md:top-[100px]" : "md:top-[0px]"
                    }`}
                    src="images/img_statusbar.svg"
                    alt="statusbar"
                  />
                </div>
              </div>
            </div>
            <div className="absolute w-full flex flex-col justify-evenly z-1 m-auto max-w-[1000px]  md:max-w-[700px] sm :max-w-[400px] gap-10">

              <div data-aos="fade-right" data-aos-duration="1000" className="flex justify-start pl-[18px] md:pl-[13.46px]">

                <div className="relative h-[100px]   w-[187px] md:h-[75.3px] md:w-[139.8px]">
                  <Picture img={'images/img_magicpatterndesign.png'} text={'Greeting Module'} type={0} />
                </div>
              </div>

              <div data-aos="fade-left" data-aos-duration="1000" className="flex justify-end">
                <div className="relative h-[128px] w-[247px]  md:h-[95.72px] md:w-[184.7px]">
                  <Picture img={'images/img_magicpatterndesign_128x247.png'} text={'Hero Image Module'} type={1} />
                </div>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000" className="flex justify-start pl-[121px] md:pl-[90.49px]">
                <div className="relative h-[147px]  w-[187px] md:h-[109.9px] md:w-[139.8px]">
                  <Picture img={'images/img_magicpatterndesign_147x187.png'} text={'Offers Module'} type={0} />
                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000" className="flex justify-end pr-[104px] md:pr-[77.7px]">
                <div className="relative h-[128px] w-[232px]  md:h-[95.72px] md:w-[173.5px]">
                  <Picture img={'images/img_magicpatterndesign_128x232.png'} text={'Weather Module'} type={1} />
                </div>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000" className="flex justify-start ">
                <div className="relative max-h-[111px] max-w-[222px]  md:h-[83px] md:w-[166px]">
                  <Picture img={'images/img_magicpatterndesign_111x222.png'} text={'Live Tracking Module'} type={0} />
                </div>
              </div>

              <div data-aos="fade-left" data-aos-duration="1000" className="flex justify-end pr-[74px] md:pr-[55.34px]">
                <div className="relative h-[100px]  w-[187px] md:h-[75.3px] md:w-[139.8px]">
                  <Picture img={'images/img_magicpatterndesign_100x187.png'} text={'Many More'} type={1} />
                </div>
              </div>
            </div>


            <div  className=" absolute w-full flex flex-col justify-evenly mt-[900px] z-1 h-[2700px] bg-white-900 m-auto md:hidden">

              <div data-aos="fade-up" data-aos-duration="3000" className="flex justify-start">
                <div data-aos="fade-up" data-aos-duration="2000" className="relative h-[900px] w-[35%] lg:[30%] justify-start">
                <div className="flex flex-col gap-[38px] float-right items-start justify-end md:mt-0 mt-[54px] px-4 w-full max-w-[463px] md:w-full">
                    <Text
                      className="lg:text-[33px] text-[50px] float-right text-black-900"
                      size="txtOutfitExtraBold50"
                    >
                      <>
                        The fastest way to
                        build an app
                      </>
                    </Text>
                    <Text
                      className="text-gray-700 text-xl  float-right lg:text-[13.25px] w-full"
                      size="txtInterMedium20"
                    >
                      By using our modules, you can quickly select which ones you need
                      in your app to increase your Guests’ Experience and your ROI.
                    </Text>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className="flex justify-end">
                <div data-aos="fade-up" data-aos-duration="2000" className="relative h-[900px]   w-[35%] lg:w-[30%] justify-start">
                <div className="flex flex-col gap-8 items-start justify-start md:mt-0 mt-[91px] max-w-[451px] px-4 w-full md:w-full">
                  <Text
                    className="lg:text-[33px]  text-[50px] text-black-900 "
                    size="txtOutfitExtraBold50"
                  >
                    Make it your own
                  </Text>
                  <Text
                    className="text-gray-700 text-xl w-full lg:text-[13.25px]"
                    size="txtInterMedium20"
                  >
                    Our intuitive platform lets you decide how everything looks,
                    where it goes, what it does and so much more to ensure your app
                    matches your brands style.
                  </Text>

                </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className="flex justify-start">
                <div data-aos="fade-up" data-aos-duration="2000"  className="relative h-[900px]   w-[35%] justify-start ">
                <div className="flex flex-col gap-8 items-start float-right justify-end md:mt-0 mt-[86px]  max-w-[548px] px-4 w-full md:w-full">
                  <Text
                    className="lg:text-[33px] text-[50px]  float-right text-black-900"
                    size="txtOutfitExtraBold50"
                  >
                    See Changes Instantly
                  </Text>
                  <Text
                    className="text-gray-700 text-xl w-[88%]  float-right lg:text-[13.25px] sm:w-full"
                    size="txtInterMedium20"
                  >
                    You can change anything about your app, anytime. The second you
                    publish is the moment your guests will see them. No need to wait
                    for App Store approvals.
                  </Text>
                </div>
                </div>
              </div>
            </div>

          </div>
          
        </div>

        <div className="flex flex-col items-center justify-start max-w-[1141px]  mx-auto mt-[87px] md:px-5 w-full">
          <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col items-center justify-start w-full px-4">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
              size="txtOutfitExtraBold50"
            >
              <>
                Features that are
                <br />
                primed for an ROI
              </>
            </Text>
            <Text
              className="mt-6 text-center text-gray-700 text-xl w-[46%] sm:w-full"
              size="txtInterMedium20"
            >
              We have many features designed to enhance your Guests Experience
              and to help your business grow.
            </Text>
            <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col md:gap-10 gap-[62px] items-center justify-start mt-[78px] w-full">
              <div className="perspective-10 font-inter md:gap-5 gap-[38px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <Card image={'images/img_magicpatterndesign_142x142.png'} text={'Food & Beverage'} svg={'images/img_frame_white_a700.svg'} />
                <Card image={'images/img_magicpatterndesign_1.png'} text={'Discounts & Offers'} svg={'images/img_frame_white_a700_84x84.svg'} />
                <Card image={'images/img_magicpatterndesign_2.png'} text={'Events'} svg={'images/img_frame_84x84.svg'} />
                <Card image={'images/img_magicpatterndesign_3.png'} text={'Maps & POIs'} svg={'images/img_frame_1.svg'} />
                <Card image={'images/img_magicpatterndesign_4.png'} text={'Rentals'} svg={'images/img_clock.svg'} />
                <Card image={'images/img_magicpatterndesign_5.png'} text={'& much more'} svg={'images/img_frame_2.svg'} />
              </div>
              <Button className="bg-deep_orange-500 cursor-pointer hover:bg-orange-500 font-extrabold font-outfit leading-[normal] min-w-[232px] py-3 rounded-[12px] shadow-bs text-center text-lg text-white-A700">
                View all our modules
              </Button>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center justify-end max-w-[1126px] mt-[163px] mx-auto md:px-5 py-[22px] w-full">
          <Text
            data-aos="fade-up" data-aos-duration="1000"
            className="mt-3.5 sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
            size="txtOutfitExtraBold50"
          >
            Give it a try!
          </Text>
          <Text
            data-aos="fade-up" data-aos-duration="1500"
            className="mt-[3px] text-center text-gray-700 text-xl w-[53%] sm:w-full"
            size="txtInterMedium20"
          >
            <>
              We&#39;ve set up a scaled down demo for you to play with and see
              just how much creative control you have with our platform.
            </>
          </Text>
          <div data-aos="fade-up" data-aos-duration="2000" className="bg-white-A700 flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between mt-[73px] p-[17px] rounded-[24px] shadow-bs w-full">
            <div className="bg-gray-200 flex md:flex-1 flex-col gap-[35px] items-center justify-start mb-[3px] md:mt-0 mt-[9px] p-[13px] rounded-[24px] w-[29%] px-4 md:w-full">
              <Text
                className="mt-4 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                size="txtInterSemiBold24"
              >
                Modules
              </Text>
              <div className="flex flex-col gap-9 items-center justify-start w-[95%] md:w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <Img
                    className="h-[133px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                    src="images/img_rectangle5841.png"
                    alt="rectangle5841"
                  />
                  <Text
                    className="text-base text-blue_gray-900_bf text-center"
                    size="txtInterMedium16"
                  >
                    Hero Image 1
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                  <div className="font-nunito h-[100px] relative rounded-[12px] shadow-bs w-full">
                    <Img
                      className="h-[100px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_rectangle5852.png"
                      alt="rectangle5852_Two"
                    />
                    <div className="absolute flex flex-col items-start justify-start left-[4%] top-[26%]">
                      <Text
                        className="text-sm text-white-A700 tracking-[0.10px]"
                        size="txtNunitoExtraBold14"
                      >
                        Save 30% on all Lift Upgrades
                      </Text>
                      <Text
                        className="bg-white-A700 h-[18px] justify-center mt-0.5 px-4 py-[3px] rounded-[9px] text-[8px] text-black-900_99 w-auto"
                        size="txtNunitoMedium8"
                      >
                        Expires in 48 Hours
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-base text-blue_gray-900_bf text-center"
                    size="txtInterMedium16"
                  >
                    Offers 1
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-center justify-start w-[51%] md:w-full">
                  <div className="h-[100px] relative rounded-[20px] shadow-bs w-full">
                    <Img
                      className="h-[100px] m-auto object-cover rounded-[20px] w-full"
                      src="images/img_rectangle5823.png"
                      alt="rectangle5823"
                    />
                    <div className="absolute bottom-[8%] flex flex-col gap-2 items-start justify-start left-[9%] w-[38%]">
                      <Img
                        className="h-[18px]"
                        src="images/img_airplane_white_a700.svg"
                        alt="airplane_One"
                      />
                      <Text
                        className="text-white-A700 text-xs"
                        size="txtInterBold12"
                      >
                        Weather
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-base text-blue_gray-900_bf text-center"
                    size="txtInterMedium16"
                  >
                    Tile
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center justify-start mb-[15px] w-full">
                <div className="font-outfit h-[100px] relative w-full">
                  <div className="h-[100px] m-auto shadow-bs w-[94%]"></div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-row h-full inset-[0] items-start justify-between m-auto p-[7px] rounded-[12px] w-full"
                    style={{
                      backgroundImage: "url('/images/img_Lweather.png')",
                    }}
                  >
                  </div>
                </div>
                <Text
                  className="text-base text-blue_gray-900_bf text-center"
                  size="txtInterMedium16"
                >
                  Weather
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col font-nunito items-center justify-start w-[28%] md:w-full">
              <div className="md:h-[611px] h-[631px] relative w-[304.81px]">
                <div className=" relative h-[611.72px] m-auto w-[301.75px]">
                  <Img
                    className="h-[611px] m-auto object-cover w-[301.75px]"
                    src="images/img_iphone12pro.png"
                    alt="iphone12pro_Five"
                  />
                  <div className="absolute h-[586.3px] inset-[0] justify-center w-[271.53px] mt-[12.71px] ml-[15.33px]">
                    <Img
                      className="h-[586px] object-cover w[271.53px]"
                      src="images/img_screeniphone12_586x271.png"
                      alt="screeniphoneTwelve_Five"
                    />
                    <div 
                      style={{ backgroundColor: color }}
                      className="absolute h-[29px] w-[29px] top-[58px]  left-[228px] rounded-full object-cover flex justify-center items-center"
                    >
                      <LiaCogSolid className="w-5 h-5" style={{ color: color > '#f99999' ? 'black' : 'white' }} />
                    </div>
                    <Text
                      className="absolute left-[5%] text-shadow-ts text-sm text-white-A700 top-[11%]"
                      size="txtNunitoExtraBold14"
                      style={{fontFamily:fontFamily}}
                    >
                      Hello, Guest! 👋
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-[34.84px] w-[266.02px] inset-x-[0] ml-[15.33px] top-[8.57px]"
                  src="images/img_statusbar_white_a700.svg"
                  alt="statusbar_Five"
                />
              </div>
            </div>
            <div className="bg-gray-200 flex md:flex-1 flex-col font-inter items-center justify-start mb-[3px] md:mt-0 mt-[9px] p-[27px] sm:px-5 rounded-[24px] w-[29%] md:w-full">
              <div className="flex flex-col gap-[38px] items-center justify-start mb-[138px] w-[93%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtInterSemiBold24"
                >
                  Editor
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-900_bf"
                        size="txtInterMedium16"
                      >
                        Color
                      </Text>
                      <ColorPicker className="flex flex-row gap-5 items-center justify-between w-full" setColor={setColor}/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start mt-[38px] w-full">
                    <Text
                      className="text-base text-blue_gray-900_bf"
                      size="txtInterMedium16"
                    >
                      Font
                    </Text>
                    <Select defaultValue={fontFamily} onChange={handleFontChange} className=" min-w-[240px]  rounded-[10px] shadow-bs1 text-base text-blue_gray-900 text-center">
                      <Option value="Inter">Inter</Option>
                      <Option value="Arial">Arial</Option>
                      <Option value="Verdana">Verdana</Option>
                      <Option value="Times New Roman">Times New Roman</Option>
                    </Select>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-7 w-[97%] md:w-full">
                    <Text
                      className="text-base text-blue_gray-900_bf"
                      size="txtInterMedium16"
                    >
                      Image
                    </Text>
                    <Img
                      className="h-5 w-5"
                      src="images/img_trash.svg"
                      alt="trash"
                    />
                  </div>
                  <Img
                    className="h-[207px] md:h-auto mt-1 object-cover rounded-[10px] w-full"
                    src="images/img_rectangle5845.png"
                    alt="rectangle5845"
                  />
                  <div className="flex flex-col items-start justify-start mt-[39px] w-full">
                    <Text
                      className="text-base text-blue_gray-900_bf"
                      size="txtInterMedium16"
                    >
                      Edges
                    </Text>
                    <Button className="bg-white-A700 cursor-pointer font-medium leading-[normal] min-w-[240px] mt-1 py-2.5 rounded-[10px] shadow-bs1 text-base text-blue_gray-900 text-center">
                      Round
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-[37px] text-base text-center text-gray-700_7f w-[46%] sm:w-full"
            size="txtInterMedium16Gray7007f"
          >
            <>
              Please note: The demo above is just to show you how easy our
              Novara App Editor is to use. It doesn&#39;t showcase all the
              features, themes and capabilities you&#39;ll have when you use the
              full version.
            </>
          </Text>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center justify-start mt-[167px] md:px-5 w-[41%] md:w-full">
          <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
              size="txtOutfitExtraBold50"
            >
              <>
                Unleash your
                <br />
                inner creativity
              </>
            </Text>
            <Text
              className="text-center text-gray-700 text-xl w-full"
              size="txtInterMedium20"
            >
              You have the creative control to make your app look and feel
              exactly how you need it to.
            </Text>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-col gap-6 items-center justify-start mt-[63px] pb-[17px] w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
              size="txtOutfitExtraBold50"
            >
              <>
                Save time,
                <br />
                avoid hassle
              </>
            </Text>
            <Text
              className="text-center text-gray-700 text-xl w-full"
              size="txtInterMedium20"
            >
              Forget long Product & Development cycles. Instead, create and
              adjust features whenever it suits you.
            </Text>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col gap-6 items-center justify-start mt-[75px] pb-[17px] w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
              size="txtOutfitExtraBold50"
            >
              <>
                Zero coding
                <br />
                required
              </>
            </Text>
            <Text
              className="text-center text-gray-700 text-xl w-full"
              size="txtInterMedium20"
            >
              Bring your app to life without writing a single line of code. We
              made this for you, not developers.
            </Text>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="bg-deep_orange-500 flex flex-col font-outfit items-center justify-end mt-[167px] py-8 w-full">
          <div className="flex flex-col items-center justify-start mt-[69px] w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
              size="txtOutfitExtraBold50WhiteA700"
            >
              <>
                Ready to increase your <br />
                guest experience?
              </>
            </Text>
            <Button className="bg-black-900 cursor-pointer font-extrabold leading-[normal] min-w-[223px] mt-[52px] py-3 rounded-[12px] shadow-bs text-center text-lg text-white-A700">
              Let’s make an app!
            </Button>
            <Img
              className="h-11 mt-[159px]"
              src="images/img_forward.svg"
              alt="forward"
            />
            <div className="flex flex-row items-center justify-center mt-[25px] md:px-5 w-[19%] md:w-full">
              <Text
                className="text-center text-sm text-white-A700_7f"
                size="txtOutfitMedium14"
              >
                Home
              </Text>
              <Text
                className="ml-[53px] text-center text-sm text-white-A700_7f"
                size="txtOutfitMedium14"
              >
                Modules
              </Text>
              <Text
                className="ml-[46px] text-center text-sm text-white-A700_7f"
                size="txtOutfitMedium14"
              >
                Contact
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing003Page;
