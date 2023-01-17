import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  public onSubmit() {
    // Send the form data to the server or perform other logic here
    console.log(`Name: ${this.name}, Email: ${this.email}, Message: ${this.message}`);
  }
}
