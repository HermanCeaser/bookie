import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  ModalController,
  NavController,
  IonRouterOutlet,
} from "@ionic/angular";
import { PlacesService } from "./../../places.service";

import { CreateBookingComponent } from "./../../../bookings/create-booking/create-booking.component";
import { Place } from "../../place.model";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private navCtrl: NavController,
    private placesService: PlacesService,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private routerOutlet: IonRouterOutlet
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("placeId")) {
        this.navCtrl.navigateBack("/places/tabs/discover");
        return;
      }
      this.place = this.placesService.getPlaceById(paramMap.get("placeId"));
    });
  }

  onBookPlace() {
    //this.router.navigateByUrl("/places/tabs/discover");
    //this.navCtrl.navigateBack("/places/tabs/discover");
    this.modalController
      .create({
        component: CreateBookingComponent,
        swipeToClose: true,
        presentingElement: this.routerOutlet.nativeEl,
        componentProps: {
          selectedPlace: this.place,
        },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((resultData) => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === "confirm") {
          console.log("BOOKED!");
        }
      });
  }
}
