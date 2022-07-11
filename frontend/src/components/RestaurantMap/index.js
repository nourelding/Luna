import React from "react";
import {ImLocation} from "react-icons/im";
import {MdOutlineSmartphone} from "react-icons/md";
import {GrPersonalComputer} from "react-icons/gr";


import {
MainResturantMap,
ResturantMapWrapper,
ResturantMapImage,
ResturantMapInfo,
ResturantMapAdress,
ResturantMapPhone,
ResturantMapWebsite,
} from "../../styles/RestaurantMap";
const ResturantMap = () => {
  return ( 
    <MainResturantMap>
      <ResturantMapWrapper>
          <ResturantMapImage></ResturantMapImage>
          <ResturantMapInfo>
            <ResturantMapAdress> <ImLocation size ="1rem" /> Bahnhofstrasse 106</ResturantMapAdress>
            <ResturantMapPhone> <MdOutlineSmartphone size ="1rem" /> +41 44 211 53 72</ResturantMapPhone>
            <ResturantMapWebsite> <GrPersonalComputer size ="1rem" /> laederach.com</ResturantMapWebsite>
          </ResturantMapInfo>
      </ResturantMapWrapper>
    </MainResturantMap>
   );
}
 
export default ResturantMap;

// style = {{color:}}