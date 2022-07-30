import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formularioContacto!: FormGroup;

  constructor(
    private fb: FormBuilder
    ) {
      this.formularioContacto = this.fb.group({
        email: new FormControl('', [Validators.required, Validators.email]), 
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
        address: new FormControl('', [Validators.required]),
        address2: new FormControl(),
        city: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]),
        state: new FormControl(),
        zip: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
        check: new FormControl()
      });
   }

  ngOnInit(): void {
  }

  enviarContacto(){
    console.log(this.formularioContacto);
  }

}
