import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }
}

//!Async loading of maps
// import * as dotenv from 'dotenv';
// dotenv.config();

// import { Loader } from '@googlemaps/js-api-loader';

// const apiKey = process.env.GOOGLE_MAPS_API_KEY!;

// const loader = new Loader({
//   apiKey: apiKey,
//   version: 'weekly',
//   libraries: ['places'],
// });

// loader.load().then(async () => {
//   const { Map } = (await google.maps.importLibrary(
//     'maps'
//   )) as google.maps.MapsLibrary;
//   const map = new Map(document.getElementById('map') as HTMLElement, {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 1,
//   });
// });
