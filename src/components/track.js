import React, { useRef, useState, useEffect } from "react";
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { FaLocationArrow, FaTimes } from 'react-icons/fa';
import './Alldummy.css';

const center = { lat: 17.08959447599296, lng: 82.06681022400967 };
const libraries = ['places'];

const Track = ({ onLiveTracking, origin, destination }) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCSkMcv8BF3Sxv8ugdVIBxxDs8exC8gDW0",
        libraries,
    });

    const [directionResponse, setDirectionResponse] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');

    const mapRef = useRef(null);

    useEffect(() => {
        if (origin && destination && isLoaded) {
            calculateRoute(origin, destination);
        }
    }, [origin, destination, isLoaded]);

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    async function calculateRoute(originAddress, destinationAddress) {
        if (!window.google) {
            console.error("Google Maps API is not loaded.");
            return;
        }

        const directionService = new window.google.maps.DirectionsService();
        const results = await directionService.route({
            origin: originAddress,
            destination: destinationAddress,
            travelMode: window.google.maps.TravelMode.DRIVING,
        });

        setDirectionResponse(results);
        setDistance(results.routes[0].legs[0].distance.text);
        setDuration(results.routes[0].legs[0].duration.text);
    }

    function clearRoute() {
        setDirectionResponse(null);
        setDistance('');
        setDuration('');
    }

    return (
        <div className="container1">
            <div className="mapContainer">
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    onLoad={map => (mapRef.current = map)}
                    options={{
                        zoomControl:true,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                >
                    <Marker position={center} />
                    {directionResponse && <DirectionsRenderer directions={directionResponse} />}
                </GoogleMap>
            </div>

            <div className="mapOptions">
                <button onClick={clearRoute} className="clearButton">
                    <FaTimes size={20} />
                </button>

                <div className="info">
                    <div className="placeInfo">
                        <h4>Route Information</h4>
                        <p><strong>Origin:</strong> {origin || "Not Specified"}</p>
                        <p><strong>Destination:</strong> {destination || "Not Specified"}</p>
                        <p><strong>Distance:</strong> {distance || "Not Calculated"}</p>
                        <p><strong>Duration:</strong> {duration || "Not Calculated"}</p>
                    </div>
                </div>

                <button onClick={() => mapRef.current?.panTo(center)} className="locationButton">
                    <FaLocationArrow size={20} />
                </button>
            </div>

            <button className="liveTrackingButton" onClick={onLiveTracking}>
                Live Tracking
            </button>
        </div>
    );
};

export default Track;
