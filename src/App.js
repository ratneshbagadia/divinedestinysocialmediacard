import React ,{useState} from 'react';
import logo from './resource/images/logo.png';
import shopInterior from './resource/images/shop_interior.jpg';
import './styles/main.css';
import {FaFacebook, FaInstagram,FaWhatsapp,FaPhoneAlt} from 'react-icons/fa';
import {MdEmail,MdFlipToBack,MdFlipToFront} from 'react-icons/md';
import ReactCardFlip from 'react-card-flip';

import ChooseUs from './components/ChooseUs';
import Services from './components/Services';
import CustomerDelight from './components/CustomerDelight';

function App() {

  const headers = ["Why choose us","Services","Projects","Customer Delight"];
  const [isFlipped, setIsFlipped] = useState(false);
  const [headerSelected,setHeaderSelection] = useState(headers[0]);

  let backPageContent = () =>{

    let backPage;
    switch(headerSelected){
      case "Why choose us":
        backPage = <ChooseUs />
        break;
      case "Services":
        backPage = <Services />
        break;
      case "Projects":
        break;
      case "Customer Delight":
        backPage = <CustomerDelight/>
        break;
      default:
        backPage = "";
        break;      
    }

    return backPage;
  }

  
  return (

    <div className="App  h-screen w-screen flex content-center flex-col" id="app" >
      <div>
     <ReactCardFlip className="" isFlipped={isFlipped} flipDirection="vertical">
    <div className="flex content-center flex-col bg-white max-w-sm mx-auto my-10 w-full
                   rounded-lg shadow-lg" style={{ height: "100%",backgroundColor:"#373737" }}
                   >
     <div className="h-full my-5">
    <div className="flex content-center flex-row w-full border-b justify-evenly py-5" style={{height:"auto",display:"none"}} >
    <div className="rounded-full bg-cover w-24 h-24 " style={{ backgroundImage: "url(" + shopInterior + ")" }}></div>
    <div className="rounded-full bg-cover w-24 h-24" style={{ backgroundImage: "url(" + shopInterior + ")" }}></div>
    <div className="rounded-full bg-cover w-24 h-24 " style={{ backgroundImage: "url(" + shopInterior + ")" }}></div>
    </div>
    <div className=" flex justify-start content-center flex-col w-full" style={{height:"auto"}}>
      <div className=" mx-auto bg-cover w-5/12 h-32" style={{backgroundImage:"url(" + logo + ")" }}></div>
      <div className="mx-auto  font-semibold" style={{fontSize:"24px",color:"#c9a56f",fontFamily:"Montserrat"}}>Divine Destiny</div>
      <div className="mx-auto" style={{fontSize:"14px",color:"#c9a56f",lineHeight:"10px",fontFamily:"Open Sans"}}>Interior designer and consultant</div>
      <div className="flex flex-col w-full mx-auto mt-5" style={{ color: "#c9a56f",lineHeight:"15px" }}>
              <div className="flex flex-row justify-evenly p-1 text-lg">
              <div className="m-2 ml-0"><FaPhoneAlt/></div>
              <div className="m-2 "><FaFacebook/></div>
                  <div className="m-2"><FaInstagram /></div>
                  <div className="m-2"><FaWhatsapp/></div>
                  <div className="m-2"><MdEmail/></div>
                  
                  {/*<div className="m-2"><FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon></div>
                  <div className="m-2 mr-0"><FontAwesomeIcon icon={faShare}></FontAwesomeIcon></div>*/}
              </div>
            </div>
    </div>
    <div className="flex content-center flex-row w-full border-b justify-evenly py-5" style={{height:"auto",display:"none"}}>
    <div className="rounded-full bg-cover w-24 h-24 " style={{ backgroundImage: "url(" + shopInterior + ")" }}></div>
    <div className="rounded-full bg-cover w-24 h-24" style={{ backgroundImage: "url(" + shopInterior + ")" }}></div>
    <div className="rounded-full bg-cover w-24 h-24 " style={{ backgroundImage: "url(" + shopInterior + ")" }}></div>
    
    </div>
    </div>


    </div>

    <div className="flex content-center flex-col bg-white max-w-sm mx-auto my-10 w-full
                   rounded-lg shadow-lg" style={{ height: "100%",backgroundColor:"#373737",color:"#c9a56f" }}
                   >
     
     <div className="h-full my-5">
    <div className="flex content-center flex-row w-full justify-evenly pb-5" style={{fontSize:"12px",color:"#c9a56f",lineHeight:"10px",fontFamily:"Montserrat",height:"auto"}} >
     {
       headers.map((item) => {
         if(headerSelected === item){
          return <div className="cursor-pointer header active" onClick={()=>setHeaderSelection(item)}>{item}</div>   
         }
         return <div className="cursor-pointer header" onClick={()=>setHeaderSelection(item)}>{item}</div>   
        
       })
     }
     
    </div>
   
    <div className=" flex justify-start content-center flex-col w-full" style={{height:"auto"}}>
        {backPageContent()}
    </div>
    <div className="flex content-center flex-row w-full border-b justify-evenly py-5" style={{height:"auto",display:"none"}}>
    <div className="rounded-full bg-cover w-24 h-24 " style={{ backgroundImage: "url(" + shopInterior + ")" }}></div>
    <div className="rounded-full bg-cover w-24 h-24" style={{ backgroundImage: "url(" + shopInterior + ")" }}></div>
    <div className="rounded-full bg-cover w-24 h-24 " style={{ backgroundImage: "url(" + shopInterior + ")" }}></div>
     
    </div>
    </div>


    </div>
    </ReactCardFlip>
      </div>

    <div className="px-5 font-bold text-lg cursor-pointer flex 
                 content-center flex-col bg-white max-w-sm mx-auto w-full" 
                 onClick={() => setIsFlipped(!isFlipped)}>
         
         {isFlipped && <div className="flex flex-row justify-center text-sm text-gray-600"><MdFlipToFront style={{marginTop:"4px"}}/>Move to front</div>}
         {!isFlipped && <div className="flex flex-row justify-center text-sm text-gray-600"><MdFlipToBack style={{marginTop:"4px"}}/>Move to back</div>}
    </div>                           
  </div>
  );
}

export default App;
