import { getSimilarAdverts } from './data.js';
import { activatePage } from './form.js';
import { createSimilarAdvert } from './popup.js';

const downloadMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      activatePage();
    })
    .setView({
      lat: 35.6895000,
      lng: 139.6917100,
    }, 17);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

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
  mainPinMarker.on('moveend', (evt) => {
    const locationAddress = document.querySelector('#address');
    locationAddress.value = evt.target.getLatLng();
  });

  const adverts = getSimilarAdverts();
  adverts.forEach((advert) => {
    const {lat, lng} = advert.location;
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon: icon,
      },
    );
    marker
      .addTo(map)
      .bindPopup(createSimilarAdvert(advert)); // Не получается тут сделать правильно
  });
};


export {downloadMap};
