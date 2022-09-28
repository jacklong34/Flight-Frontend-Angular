import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../shared/flight.service';
import { Flight } from '../shared/flights';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {
  bookFlightForm: FormGroup;
  flight2Add: Flight;
  flightPath: string = 'Flight';

  constructor(private formBuilder: FormBuilder, private flightService: FlightService) { }

  ngOnInit(): void {
    this.bookFlightForm = this.formBuilder.group({
      passengerName: ['', Validators.required],
      numberOfTickets: ['', [Validators.required, Validators.min(1)]],
      flightId: ['', [Validators.required, this.validateFlight]]
    });
    this.flightPath = 'Flight 101';
    console.log(this.flightPath);
  }

  book() {
    this.flight2Add = new Flight();
    this.flight2Add.passengerName = this.bookFlightForm.controls.passengerName.value;
    this.flight2Add.numberOfTickets = this.bookFlightForm.controls.numberOfTickets.value;
    this.flight2Add.flightId = this.bookFlightForm.controls.flightId.value;
    this.flightService.addFlight(this.flight2Add);
    
    console.log(this.flightService.getFlights());
    this.bookFlightForm.reset();
  }

  validateFlight(c: FormControl): any {
    console.log(c.value.length);
    console.log(c);
    let isLengthCorrect: boolean = false;
    let isfirstThreeCharacters: boolean;
    let isHyphen: boolean;
    let isLastThreeCharacters: boolean;
    if (c.value.length == 7) {
      return null;
    } else {
      return {flightIdInvalid: true}
    }
    
  }
}
