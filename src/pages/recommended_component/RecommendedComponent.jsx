import React from "react";
import first from "../../assets/recommend/first.jpg";
import second from "../../assets/recommend/second.jpg";
import third from "../../assets/recommend/third.jpg";
import fourth from "../../assets/recommend/fourth.jpg";
import fifth from "../../assets/recommend/fifth.jpg";

const ImageWithLabel = ({ imageSrc, label, isEven }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px',marginRight:"20px",paddingLeft:"20px", marginBottom: '20px' ,border:"solid", margin:"10px" }}>
    <div style={{ flex: 1, order: isEven ? 1 : 2 }}>
      <img src={imageSrc} alt={label} style={{  width: "75%", height: "75%", paddingTop:"50px", paddingBottom:"50px" }} />
    </div>
    <div style={{ flex: 1, order: isEven ? 2 : 1,  }}>
      <div style={{ display: "flex", justifyContent: "center", fontSize: "2em" }}>{label}</div>
    </div>
  </div>
);

const RecommendedComponent = () => {
  return (
    <div>
      <ImageWithLabel imageSrc={first} label="Image 1" isEven={true} />
      <ImageWithLabel imageSrc={second} label="Image 2" isEven={false}/>
      <ImageWithLabel imageSrc={third} label="Image 3" isEven={true} />
      <ImageWithLabel imageSrc={fourth} label="Image 4" isEven={false}/>
      <ImageWithLabel imageSrc={fifth} label="Image 5" isEven={true} />
      {/* <ImageWithLabel imageSrc={second} label="Image 2" isEven={false}/> */}
      
      {/* Add more ImageWithLabel components as needed */}
    </div>
  );
};

export default RecommendedComponent;