import { PlacesService } from "./../../places.service";
import { Place } from "./../../place.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-place-bookings",
  templateUrl: "./place-bookings.page.html",
  styleUrls: ["./place-bookings.page.scss"],
})
export class PlaceBookingsPage implements OnInit {
  place: Place;
  constructor(
    private route: ActivatedRoute,
    private navController: NavController,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((p) => {
      if (!p.has("placeId")) {
        this.navController.navigateBack("/places/tabs/offers");
        return;
      }
      this.place = this.placesService.getPlaceById(p.get("placeId"));
    });
  }
}
