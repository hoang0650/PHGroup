import { Component} from '@angular/core';
import { FormBuilder,FormGroup, Validators } from "@angular/forms"
@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    })
  }


  submitForm(): void {
    if (this.contactForm.valid) {
      console.log("Form Submitted", this.contactForm.value)
      // Add your form submission logic here
    } else {
      Object.values(this.contactForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsTouched()
          control.updateValueAndValidity({ onlySelf: true })
        }
      })
    }
  }
}
