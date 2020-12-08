import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places: Place[] = [
    {
      id: "p1",
      title: "Manhattan Mansion",
      description: "In the heart of New York City",
      imageUrl:
        "https://i.pinimg.com/originals/3f/ee/82/3fee822a1cbc4198375a088fd1484fbe.jpg",
      price: 100.5,
    },
    {
      id: "p2",
      title: "La Passerie Hotel",
      description: "One of the best five star Luxury Hotels",
      imageUrl:
        "https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1103i215%2Ft8x5kxv6t2ez4ht76vvg6zj5p3i215&option=N&h=472&permitphotoenlargement=false",
      price: 189.5,
    },
    {
      id: "p3",
      title: "International Luxury reaL Estate",
      description: "A Home with State of the art Technology",
      imageUrl:
        "https://i.pinimg.com/originals/07/3e/f9/073ef9922d3e5b0f2c9815d609102c35.jpg",
      price: 220.0,
    },
    {
      id: "p4",
      title: "Creek Side Mansion",
      description: "Not Your Average City trip",
      imageUrl:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iY9hlVg7iub8/v0/1000x-1.jpg",
      price: 225.0,
    },
    {
      id: "p5",
      title: "coeur-dalene-lakefront-mansion",
      description: "Excellent customer Services with a Niche",
      imageUrl: "https://i.ytimg.com/vi/Vl_JrEWZaHI/maxresdefault.jpg",
      price: 100.5,
    },
  ];

  get places() {
    return [...this._places];
  }

  getPlaceById(id: string) {
    return { ...this.places.find((place) => place.id === id) };
  }
  constructor() {}
}
