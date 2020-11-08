import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import customer1 from '../resource/images/customer/customer1.png';
import customer2 from '../resource/images/customer/customer2.png';
import customer3 from '../resource/images/customer/customer3.png';


function CustomerDelight() {

    const customerDetails = [
        {
            name:"Shirley Fultz",
            profession:"Designer",
            img:"../resource/images/customer/customer1.png",
            alt:"",
            feedback:"It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site"
        },
        {
            name:"Daniel Keystone",
            profession:"Designer",
            img:{customer2},
            alt:"",
            feedback:"The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers."
        },
        {
            name:"Theo Sorel",
            profession:"Designer",
            img:{customer3},
            alt:"",
            feedback:"I enjoy catching up with Fetch on my laptop, or on my phone when I'm on the go"
        },
    ]

    const customerDelightSec = () =>{
      return  customerDetails.map((item)=>{
         return   <div className="" style={{backgroundColor:"#373737"}}>
          <div className="w-24 h-24 bg-cover mx-auto" style={{backgroundImage: "url(./src/resource/images/customer/customer1.png)"}} />
          <div className="myCarousel">
            <h3>{item.name}</h3>
            <h4>{item.profession}</h4>
            <p>
              {item.feedback}
            </p>
          </div>
        </div>
        })
    }

    return (
        <div>
              <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        interval={6100}
      >
       {/* <div className="" style={{backgroundColor:"#373737"}}>
          <div className="w-24 h-24 bg-cover mx-auto" style={{backgroundImage: "url("+customer1+")"}} />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
        <div className="w-24 h-24 bg-cover mx-auto" style={{backgroundImage: "url("+customer2+")"}} />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
        <div className="w-24 h-24 bg-cover mx-auto" style={{backgroundImage: "url("+customer3+")"}} />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go
            </p>
          </div>
    </div>*/}
    {customerDelightSec()}
      </Carousel>
        </div>
    )
}

export default CustomerDelight
