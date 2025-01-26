import React from "react";
import "./Alldummy.css";
// import img1 from "../../../public/image3.jpg";


const BusDetails = ({driverInfo}) => {
    
 

    return (
        <div className="bus-details-related">
            {/* <div className="bus-detailsinner"> */}
            <p className="bus-details-heading">Bus Driver Details</p>
            <div className="bus-info">

                <div className="driver">
                    {/* <img className="driver-pic" src={img1} /> */}
                </div>
                <div className="info-item">
                    <label>Bus Driver:</label>
                    <span>{driverInfo.name}</span>
                </div>
                <div className="info-item">
                    <label>Bus Driver Phone:</label>
                    <span>{driverInfo.phone}</span>
                </div>

                <div className="info-item">
                    <label>Cleanar:</label>
                    <span>{driverInfo.cleaner}</span>
                </div>

                </div>

            {/* </div> */}
        </div>
    );
};

export default BusDetails;
