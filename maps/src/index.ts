// import { User } from './User';
// import { Company } from './Company';
import * as dotenv from 'dotenv';
import { Loader } from '@googlemaps/js-api-loader';

// const map = document.getElementById('map')!;

// new google.maps.Map(map, {
//   zoom: 8,
//   center: {
//     lat: -34.397,
//     lng: 150.644,
//   },
// });

dotenv.config();

console.log(process.env.GOOGLE_MAPS_API_KEY);

const loader = new Loader({
  apiKey: process.env.GOOGLE_MAPS_API_KEY as string,
  version: 'weekly',
});

loader.load().then(async () => {
  const { Map } = (await google.maps.importLibrary(
    'maps'
  )) as google.maps.MapsLibrary;
  new Map(document.getElementById('map') as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 1,
  });
});
