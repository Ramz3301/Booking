import { activatePage } from './form.js';

const downloadMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      activatePage();
    })
    .setView({
      lat: 35.6895000,
      lng: 139.6917100,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  // const marker = L.marker (
  //   {
  //     lat: 35.6895000,
  //     lng: 139.6917100,
  //   },
  //   {
  //     draggable: true,
  //   },
  // );

  // marker.addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26,52],
  });

  const mainPinMarker = L.marker (
    {
      lat: 35.6895000,
      lng: 139.6917100,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker.addTo(map);
};


export {downloadMap};
