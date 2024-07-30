import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'
import  list from "../lists.json"
import Cards from "./Cards";

function Freebooks() {
    const filterData=list.filter((data)=>data.category==="Free");
    var settings ={
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
   <>
   <div>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h3>Free Offered Courses</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde ad similique consequatur cum quam fugit repellendus, atque accusamus omnis?</p>
    </div>
    <div>
   <Slider {...settings}>
    {filterData.map((item) =>(
        <Cards item={item} key={item.id} />
    ))}
       
      </Slider>
      </div>
   </div>
   </>
  );
}

export default Freebooks
