// import React from 'react'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import { SlideData } from '../Data'
// import { BiWifi } from 'react-icons/bi'
// import styled from 'styled-components'

// const SlideContainer = styled.div`
//   width: 80%;
//   margin: 0 auto;
//   margin-top: 50px;
//   margin-bottom: 100px;

//   .slick-slide > div {
//     margin: 0 10px;
//   }

//   .slick-list {
//     margin: 0 -10px;
//   }

//   .slick-dots li button:before {
//     color: black !important;
//     font-size: 18px !important;
//   }

//   .slick-prev:before,
//   .slick-next:before {
//     color: black;
//     font-size: 24px;
//   }

//   @media (max-width: 768px) {
//     .slick-dots li button:before {
//       color: black !important;
//       font-size: 11px !important;
//     }
//     .slick-prev:before,
//     .slick-next:before {
//       color: black;
//       font-size: 18px;
//     }
//   }
// `

// const HeroText = styled.h2`
//   display: flex;
//   justify-content: center;
//   font-size: 36px;
//   font-family: 'Russo One';
//   @media (max-width: 768px) {
//     font-size: 24px;
//   }
// `

// const Card = styled.div`
//   border: 1px solid #020000;
//   border-radius: 8px;
//   margin-top: 50px;
//   margin-bottom: 50px;
//   overflow: hidden;
//   height: 500px;
//   cursor: pointer;
//   display: flex;
// `

// const CardTop = styled.div`
//   img {
//     width: 100%;
//     height: 380px;
//     object-fit: cover;
//   }

//   h1 {
//     font-size: 22px;
//     margin: 20px;
//     font-weight: bold;
//     color: #f4941c;
//     text-align: center;
//     font-family: 'SourceSans';
//     @media (max-width: 768px) {
//       font-size: 16px;
//     }
//   }
// `

// const CardBottom = styled.div`
//   margin: 5px 10px;
//   margin-bottom: 20px;
//   color: black;
//   text-align: center;
//   font-size: 16px;
//   font-family: 'SourceSans';

//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', fontSize: '18px' }}
//       onClick={onClick}
//     />
//   )
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', fontSize: '18px' }}
//       onClick={onClick}
//     />
//   )
// }

// function Slide() {
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   }

//   return (
//     <SlideContainer>
//       <HeroText>Hitta reasa och aktiviteter hos oss</HeroText>
//       <Slider {...settings}>
//         {SlideData.map((item) => (
//           <Card key={item.id}>
//             <CardTop>
//               <img src={item.img} alt={item.title} />
//               <h1>{item.title}</h1>
//             </CardTop>
//             <CardBottom>
//               <h3>
//                 {item.place} <BiWifi />
//               </h3>
//             </CardBottom>
//           </Card>
//         ))}
//       </Slider>
//     </SlideContainer>
//   )
// }

// export default Slide
