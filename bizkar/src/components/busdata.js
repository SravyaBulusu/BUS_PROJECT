import React from 'react';
import BusInfo from './businfo1';
import axios from '../axios';
import { useState, useEffect } from 'react';

// const busData = [
//   {
//     name: 'Bus 101',
//     route: 'Kakinada',
//     driver: 'Raju',
//     ground: 'Kkd Ground',
//     departureTime: '8:00 AM',
//   },
//   {
//     name: 'Bus 102',
//     route: 'Rajahmundry',
//     driver: 'Venkat',
//     ground: 'Rjy Ground',
//     departureTime: '7:30 AM',
//   },
//   {
//     name: 'Bus 103',
//     route: 'Kakinada',
//     driver: 'Balaji',
//     ground: 'Kkd Ground',
//     departureTime: '8:00 AM',
//   },
//   {
//     name: 'Bus 104',
//     route: 'Rajahmundry',
//     driver: 'Siva',
//     ground: 'Rjy Ground',
//     departureTime: '7:30 AM',
//   }, {
//     name: 'Bus 105',
//     route: 'Kakinada',
//     driver: 'Shankar',
//     ground: 'Kkd Ground',
//     departureTime: '8:00 AM',
//   },
//   {
//     name: 'Bus 106',
//     route: 'Rajahmundry',
//     driver: 'Manoj',
//     ground: 'Rjy Ground',
//     departureTime: '7:30 AM',
//   }, {
//     name: 'Bus 107',
//     route: 'Kakinada',
//     driver: 'David',
//     ground: 'Kkd Ground',
//     departureTime: '8:00 AM',
//   },
//   {
//     name: 'Bus 109',
//     route: 'Rajahmundry',
//     driver: 'Ramu',
//     ground: 'Rjy Ground',
//     departureTime: '7:30 AM',
//   }, {
//     name: 'Bus 100',
//     route: 'Kakinada',
//     driver: 'Mani',
//     ground: 'Kkd Ground',
//     departureTime: '8:00 AM',
//   },
//   {
//     name: 'Bus 111',
//     route: 'Rajahmundry',
//     driver: 'Vijya',
//     ground: 'Rjy Ground',
//     departureTime: '7:30 AM',
//   }, {
//     name: 'Bus 112',
//     route: 'Kakinada',
//     driver: 'Gopi',
//     ground: 'Kkd Ground',
//     departureTime: '8:00 AM',
//   },
//   {
//     name: 'Bus 113',
//     route: 'Rajahmundry',
//     driver: 'Venu',
//     ground: 'Rjy Ground',
//     departureTime: '7:30 AM',
//   }, {
//     name: 'Bus 115',
//     route: 'Kakinada',
//     driver: 'Nani',
//     ground: 'Kkd Ground',
//     departureTime: '8:00 AM',
//   },
//   {
//     name: 'Bus 116',
//     route: 'Rajahmundry',
//     driver: 'Chandu',
//     ground: 'Rjy Ground',
//     departureTime: '7:30 AM',
//   }, {
//     name: 'Bus 117',
//     route: 'Kakinada',
//     driver: 'Rajesh',
//     ground: 'Kkd Ground',
//     departureTime: '8:00 AM',
//   },
//   {
//     name: 'Bus 118',
//     route: 'Rajahmundry',
//     driver: 'Naresh',
//     ground: 'Rjy Ground',
//     departureTime: '7:30 AM',
//   }, {
//     name: 'Bus 119',
//     route: 'Kakinada',
//     driver: 'Ravi',
//     ground: 'Kkd Ground',
//     departureTime: '8:00 AM',
//   },
//   {
//     name: 'Bus 120',
//     route: 'Rajahmundry',
//     driver: 'Srinu',
//     ground: 'Rjy Ground',
//     departureTime: '7:30 AM',
//   },
//   {
//     name: 'Bus 121',
//     route: 'Kovvur',
//     driver: 'Sekhar',
//     ground: 'Rjy Ground',
//     departureTime: '7:05 AM',
//   },
//   {
//     name: 'Bus 122',
//     route: 'Kovvur',
//     driver: 'Veera Babu',
//     ground: 'Rjy Ground',
//     departureTime: '7:05 AM',
//   },
//   {
//     name: 'Bus 123',
//     route: 'Ragam Peta',
//     driver: 'Mani Kanta',
//     ground: 'Rjy Ground',
//     departureTime: '8:55 AM',
//   },
//   {
//     name: 'Bus 124',
//     route: 'Ragam Peta',
//     driver: 'Chitti Babu',
//     ground: 'Rjy Ground',
//     departureTime: '8:55 AM',
//   },
// ];



const Bus = () => {
  const [busData, setBusData] = useState([]);

  const BusData = () => {
    // axios.get("http://localhost:9001/bus")
    axios.get("/bus")

    
      .then(response => {
        setBusData(response.data);
        // console.log(response)

      })
      .catch(error => {
        console.error(error);
      })
  }

  useEffect(() => {
    BusData();
  }, []);
  return (
    <div>
      <BusInfo busData={busData} />
    </div>
  );
};

export default Bus;
