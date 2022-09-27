import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {
  bookFlightForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bookFlightForm = this.formBuilder.group({
      passengerName: ['', Validators.required],
      numberOfTickets: ['', [Validators.required, Validators.min(1)]],
      flightId: ['', [Validators.required, this.validateFlight]]
    });
  }

  book() {
    console.log('Form has been submitted');
    console.log(this.bookFlightForm);
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
