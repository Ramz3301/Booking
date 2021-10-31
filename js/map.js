import { activatePage } from './form.js';

const downloadMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      activatePage();
    })
    .setView({
      lat:  35.6895000,
      lng: 139.6917100,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

export {downloadMap};
