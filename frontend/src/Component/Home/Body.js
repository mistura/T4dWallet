import React from "react";
import { Button, Carousel } from "antd"; 
import 'antd/dist/reset.css'; 
import {WhatsAppOutlined, YoutubeOutlined, LinkedinOutlined, FacebookOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";


export default function Body() {
  const menu = [
    { name: "Services", url: "#services" },
    { name: "Contact", url: "#contact" },
  ];

  const heroText = "Manage your finances simply and easily";
  const subtext =
    'lorem20 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.';

  const carouselImages = [
    "/hero.jpg", 
    "/hero3.png",
    "/img2.png",
  ];

  const icon = [
    <WhatsAppOutlined />, <YoutubeOutlined />, <LinkedinOutlined />, <FacebookOutlined />
  ]

  return (
    <section className="h-[calc(100vh-50px)] space-y-[120px] w-full justify-between px-[10%] pt-[70px]">
      <section className="grid grid-cols-2 w-full h-fit">
        <div className="w-[80%]">
          <h1 className="text-[#074FBA] font-extrabold text-[42px]">{heroText}</h1>
          <p className="text-[#777777] text-[12px] mt-3">{subtext}</p>

          <Link to="/login">
          <Button type="primary" className="shadow-lg px-[60px] mt-[50px] py-[20px] rounded-[50px]">
            Get started
          </Button>
          </Link>
        </div>

        <div className="relative w-full z-0 h-[300px] h-fit">
          <Carousel autoplay>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Carousel Slide ${index + 1}`}
                  className="w-[100%] relative z-10 p-3  justify-end carol  h-[400px] object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <div className="relative h-[300px] radius bg-cover bg-no-repeat rounded-t-[20px]">
  <div className="absolute inset-0 bg-[#074FBA] opacity-75 rounded-t-[20px]"></div>
  <div className="relative space-y-[16px] text-white z-10 text-center justify-center pt-[70px]">
    <h1 className="text-white text-[32px] font-bold ">Modern and Best Safe <br/> Online Payment</h1>
    <p className="text-[12px] w-[50%] m-auto">{subtext}</p>
    <div className="flex space-x-[24px] m-auto w-fit pt-5">
    {
        icon.map((list) => (
            <p className="text-[24px] text-white hover:">{list}</p>
        ))
    }
    </div>
  </div>
</div>
</section>
  );
}
