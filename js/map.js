import { activatePage, price } from './form.js';
import { createSimilarAdvert } from './popup.js';
import { data } from './data.js';

const SIMILAR_ADVERTS_COUNT = 10;
const LATITUDE = 35.6895000;
const LONGITUDE = 139.6917100;
const SCALE = 13;
const iconSize = [40, 40];
const iconAnchor = [20, 40];
const mainIconSize = [52, 52];
const mainIconAnchor = [26, 52];
const resetButton = document.querySelector('.ad-form__reset');
const advertForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mainIconUrl = 'img/main-pin.svg';
const iconUrl = 'img/pin.svg';
const locationAddressInput = document.querySelector('#address');
const map = L.map('map-canvas');
const mainPinIcon = L.icon({
  iconUrl: mainIconUrl,
  iconSize: mainIconSize,
  iconAnchor: mainIconAnchor,
});

const mainPinMarker = L.marker (
  {
    lat: LATITUDE,
    lng: LONGITUDE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerGroup = L.layerGroup().addTo(map);

const downloadMap = (advertisements) => {
  locationAddressInput.value = `${LATITUDE.toFixed(5)}, ${LONGITUDE.toFixed(5)}`;
  markerGroup.clearLayers();
  map.on('load', () => {
    activatePage();
  })
    .setView({
      lat: LATITUDE,
      lng: LONGITUDE,
    }, SCALE);

  mainPinMarker
    .addTo(map);
  mainPinMarker.on('moveend', (evt) => {
    const locationAddressCoordinates = evt.target.getLatLng();
    locationAddressInput.value = `${locationAddressCoordinates.lat.toFixed(5)}, ${locationAddressCoordinates.lng.toFixed(5)}`;
  });
  advertisements
    .slice(0, SIMILAR_ADVERTS_COUNT)
    .forEach((advertisement) => {
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
        .addTo(markerGroup)
        .bindPopup(createSimilarAdvert(advertisement));
    });
};

const clearForm = () => {
  advertForm.reset();
  mapFilters.reset();
  locationAddressInput.value = `${LATITUDE.toFixed(5)}, ${LONGITUDE.toFixed(5)}`;
  map.closePopup();
  price.placeholder = 5000;
  downloadMap(data.adverts);
  mainPinMarker.setLatLng({
    lat: LATITUDE,
    lng: LONGITUDE,
  });
  map.setView({
    lat: LATITUDE,
    lng: LONGITUDE,
  }, SCALE);
};

const resetFormButton = () => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    clearForm();
  });
};

export {downloadMap, clearForm, resetFormButton, mapFilters};

