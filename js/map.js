import { getSimilarAdverts } from './data.js';
import { activatePage } from './form.js';
import { createSimilarAdvert } from './popup.js';

const downloadMap = () => {
  const lat = 35.6895000;
  const lng = 139.6917100;
  const SCALE = 13;
  const mainIconUrl = 'img/main-pin.svg';
  const mainIconSize = [52, 52];
  const mainIconAnchor = [26, 52];
  const iconUrl = 'img/pin.svg';
  const iconSize = [40, 40];
  const iconAnchor = [20, 40];
  const advertisements = getSimilarAdverts();
  const locationAddressInput = document.querySelector('#address');
  locationAddressInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  const map = L.map('map-canvas')
    .on('load', () => {
      activatePage();
    })
    .setView({
      lat: lat,
      lng: lng,
    }, SCALE);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: mainIconUrl,
    iconSize: mainIconSize,
    iconAnchor: mainIconAnchor,
  });

  const mainPinMarker = L.marker (
    {
      lat,
      lng,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker
    .addTo(map);
  mainPinMarker.on('moveend', (evt) => {
    const locationAddressCoordinates = evt.target.getLatLng();
    locationAddressInput.value = `${locationAddressCoordinates.lat.toFixed(5)}, ${locationAddressCoordinates.lng.toFixed(5)}`;
  });

  advertisements.forEach((advertisement) => {
    const {lat, lng} = advertisement.location;
    const icon = L.icon({
      iconUrl: iconUrl,
      iconSize: iconSize,
      iconAnchor: iconAnchor,
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
      .bindPopup(createSimilarAdvert(advertisement));
  });
};


export {downloadMap};
