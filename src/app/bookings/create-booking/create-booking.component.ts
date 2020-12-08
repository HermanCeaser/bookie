import { Component, Input, OnInit } from "@angular/core";
import { Place } from "src/app/places/place.model";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-create-booking",
  templateUrl: "./create-booking.component.html",
  styleUrls: ["./create-booking.component.scss"],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  onBook() {
    this.modalController.dismiss(
      { message: "This is a dummy message!" },
      "confirm"
    );
  }

  dismissModal(success?: Object, error?: any) {
    this.modalController.dismiss({
      success: { message: "Did not book the place" },
      error: null,
    });
  }
}
