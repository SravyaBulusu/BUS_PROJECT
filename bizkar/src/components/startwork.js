// import React, { useState, useEffect } from "react";
// import "./Alldummy.css";
// import { TbBus } from "react-icons/tb";
// import BusDetails from "./Businfo";
// import Roadmap from "./Try";
// import { Track } from "./GoogleMaps";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// export const Startwork = () => {
//     const BASE_URL = "http://localhost:9001";
//     const location = useLocation();
//     const { id } = location.state || {};

//     const [busrelated, setBusrelated] = useState({});
//     useEffect(() => {
//         if (id) {
//             getBusById(id);
//         } else {
//             console.warn("Bus ID is undefined.");
//         }
//     }, [id]);

//     const getBusById = async (id) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/bus/${id}`);
//             setBusrelated(response.data);
//         } catch (error) {
//             console.error("Error fetching bus by ID:", error);
//         }
//     };

//     const stopsparent = Array.isArray(busrelated.stops) ? busrelated.stops : [];

//     const Address = busrelated.address || {};
//     const driverdetails = {
//         name: busrelated.drivername || "N/A",
//         phone: busrelated.driverphone || "N/A",
//         cleaner: "Yes"
//     };


//     const trackdetails = {
//         original: Address.OriginalAddress || "Not specified",
//         destination: Address.DestinationAddress || "Not specified"
//     };

//     console.log(trackdetails);

//     const [isTracking, setIsTracking] = useState(false);

//     const handleLiveTracking = () => {
//         setIsTracking(true);
//     };

//     const closeTracking = () => {
//         setIsTracking(false);
//     };

//     return (
//         <>
//             <div className={`mainsection ${isTracking ? 'blurred' : ''}`}>
//                 <div className="bustag">
//                     <div className="iconrelated">
//                         <TbBus style={{ color: "white", fontSize: "38px" }} />
//                     </div>
//                     <div className="busname">
//                         <p>Bus Number: {busrelated.busno || "Not specified"}</p>
//                     </div>
//                 </div>

//                 <div className="pingmybus">
//                     <button>Ping Bus</button>
//                 </div>

//                 <div className="busrelated">
//                     <div className="businnerrelated">
//                         <div className="busmain">
//                             <BusDetails driverInfo={driverdetails} />
//                         </div>

//                         <div className="busroute">
//                             <div className="busrouteinner">
//                                 <p className="route-heading">Bus Route</p>
//                                 <p className="route-description">
//                                     This bus follows a designated route to ensure efficient travel.
//                                     Below is the detailed roadmap showing the key stops and landmarks.
//                                 </p>
//                                 <Roadmap steps={stopsparent} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="map">
//                     <div className="mapinner">
                    
//                         <Track
//                             onLiveTracking={handleLiveTracking}
//                             origin={trackdetails.original}
//                             destination={trackdetails.destination}
//                         />

//                     </div>
//                 </div>
//             </div>

//             {isTracking && (
//                 <div className="liveTrackingOverlay">
//                     <h2>Live Tracking</h2>
//                     <button onClick={closeTracking} className="closeTrackingButton">
//                         Close
//                     </button>
//                 </div>
//             )}
//         </>
//     );
// };




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { TbBus } from 'react-icons/tb';
import BusDetails from './busdetails';
import Roadmap from './roadmap';
import Track from './track';

const Startwork = () => {
    const BASE_URL = "http://localhost:9001";
    const location = useLocation();
    const { id } = location.state || {};

    console.log(id);

    const [busrelated, setBusrelated] = useState({});
    useEffect(() => {
        if (id) {
            getBusById(id);
        } else {
            console.warn("Bus ID is undefined.");
        }
    }, [id]);

    const getBusById = async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/bus/${id}`);
            setBusrelated(response.data);
        } catch (error) {
            console.error("Error fetching bus by ID:", error);
        }
    };

    const stopsparent = Array.isArray(busrelated.stops) ? busrelated.stops : [];
    const Address = busrelated.address || {};
    const driverdetails = {
        name: busrelated.drivername || "N/A",
        phone: busrelated.driverphone || "N/A",
        cleaner: "Yes"
    };

    const trackdetails = {
        original: Address.OriginalAddress || "Not specified",
        destination: Address.DestinationAddress || "Not specified"
    };

    const [isTracking, setIsTracking] = useState(false);

    const handleLiveTracking = () => {
        setIsTracking(true);
    };

    const closeTracking = () => {
        setIsTracking(false);
    };

    return (
        <>
            <div className={`mainsection ${isTracking ? 'blurred' : ''}`}>
                <div className="bustag">
                    <div className="iconrelated">
                        <TbBus style={{ color: "white", fontSize: "38px" }} />
                    </div>
                    <div className="busname">
                        <p>Bus Number: {busrelated.busno || "Not specified"}</p>
                    </div>
                </div>

                <div className="pingmybus">
                    <button>Pin Bus</button>
                </div>

                <div className="busrelated">
                    <div className="businnerrelated">
                        <div className="busmain">
                            <BusDetails driverInfo={driverdetails} />
                        </div>

                        <div className="busroute">
                            <div className="busrouteinner">
                                <p className="route-heading">Bus Route</p>
                                <p className="route-description">
                                    This bus follows a designated route to ensure efficient travel.
                                    Below is the detailed roadmap showing the key stops and landmarks.
                                </p>
                                <Roadmap steps={stopsparent} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="map">
                    <div className="mapinner">
                        <Track
                            onLiveTracking={handleLiveTracking}
                            origin={trackdetails.original}
                            destination={trackdetails.destination}
                        />
                    </div>
                </div>
            </div>

            {isTracking && (
                <div className="liveTrackingOverlay">
                    <h2>Live Tracking</h2>
                    <button onClick={closeTracking} className="closeTrackingButton">
                        Close
                    </button>
                </div>
            )}
        </>
    );
};

export default Startwork;
