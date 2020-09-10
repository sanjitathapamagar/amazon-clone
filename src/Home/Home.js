import React from 'react';
import './Home.css'
import Product from "./Product";
import 'react-slideshow-image/dist/styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Home() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
    };
    const slideImages = [
        {
            name: 'One',
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'
        },
        {
            name: 'Two',
            url: 'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        },
        {
            name: 'Three',
            url: 'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        },
    ];
    return (
        <div className='home'>
            <div className='home__container'>
                {/*<Slider {...settings}>*/}
                {/*    <div>*/}
                {/*        <img  className='home__image' src={slideImages[0].url}/>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <img className='home__image' src={slideImages[1].url}/>*/}
                {/*    </div>*/}
                {/*</Slider>*/}
                <img className='home__image'
                     src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg'/>
                <div className='home__row'>
                    <Product
                        id="4903332"
                        title="Navaris Omega Headphone Stand - Synthetic Leather Headset Hanger with Wooden Base - Holder for Wired, Wireless, Gaming, DJ, Studio Headphones - Blue"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41R+VaxAEbL._AC_SY200_.jpg"
                        rating={3}
                    />
                    <Product
                        id="49038340"
                        title="Sceptre 24 Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA Speakers, VESA Wall Mount Ready Metal Black 2019 (C248W-1920RN)"
                        price={118.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71qCGPWI8aL._AC_SX425_.jpg"
                        rating={3}
                    />
                    <Product
                        id="32544345"
                        title="Jula Vance Large Makeup Train Case with Speaker & Code Lock & Full Screen Lighted Mirror & 3 Light Colors Lighted Rolling Cosmetic Organizer, Professional Artist Trolley Studio Free Standing"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61B2WonLXGL._AC_SX425_.jpg"
                    />
                </div>
                <div className='home__row'>

                    <Product
                        id="23445938"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY327_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="32544345"
                        title="New apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51W2e10l3UL._AC_UY327_FMwebp_QL65_.jpg"
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id="4901234"
                        title="Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)"
                        price={1094.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_UY327_FMwebp_QL65_.jpg"/>
                </div>
                <div className='home__row'>
                    <Product
                        id="4903332"
                        title="New 2020 Bicycle & Motorcycle Phone Mount - The Most Secure & Reliable Bike Phone Holder for iPhone, Samsung or Any Smartphone. Stress-Resistant and Highly Adjustable. +100 to Safeness & Comfort"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71vTs90yMDL._AC_SX522_.jpg"
                        rating={3}
                    />
                    <Product
                        id="49038340"
                        title="iSaddle CH-150-159 4.3 & 5 Garmin Nuvi 52 GPS Suction Cup Mount GPS Rigid Low Profile GelBase GripLock Dashboard Windshield Suction Car Holder Mount - Best Replacement for 010-11983-00"
                        price={118.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41XGQUl8BlL._AC_.jpg"
                        rating={3}
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id="4903850"
                        title="Aduro Vanity Mirror Makeup Mirror With Lights And Bluetooth Speaker, U-Reflect Audio Home Beauty LED Wireless Swivel Smart Mirror With Tray Rechargeable, (White)"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/61ibAKXOpeL._SX425_.jpg"
                    />
                    <Product
                        id="23445938"
                        title="Dr pen Professional Ultima Derma Pen,Nano Microneedling Pen,Rechargeable Skin Care Tools Beauty System Makeup Pen with 12pcs Set of Replacement Needle Cartidge"
                        price={88.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Ak3yV2f%2BL._SY355_.jpg"
                    />
                    <Product
                        id="4903850"
                        title="Coty Airspun Loose Face Powder 2.3 oz. Translucent Tone Loose Face Powder, for Setting Makeup or as Foundation, Lightweight, Long Lasting,Pack of 1"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71le2ZYj97L._SX522_.jpg"
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id="4901234"
                        title="Klipsch Black Reference Theater Pack 5.1 Surround Sound System"
                        price={400.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/81UTwdVe-0L._AC_SX425_.jpg"/>
                </div>
            {/*</Slider>*/}
            </div>
        </div>
    )
}

export default Home;
