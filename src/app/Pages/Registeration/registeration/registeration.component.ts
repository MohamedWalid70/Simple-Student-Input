import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { supabase } from '../../../Supabase Client/supabase-client';  
import { InputStudent } from '../../../Interfaces/interfaces'

@Component({
  selector: 'app-registeration',
  imports: [FormsModule, CommonModule],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent {

  Input : WritableSignal<InputStudent>;
  Response: any;

  constructor(private router: Router) { 
    this.Response = new Object();
    this.Input = signal<InputStudent>({age: null, instrumentofinterest: "", parentphonenumber: "", name: ""});
  }


 async onSubmit() {
    // For now, just log the form values
    // console.log('Student Name:', this.studentName);
    // console.log('Age:', this.age);
    // console.log('Instrument of Interest:', this.instrument);
    // console.log('Parent Phone Number:', this.parentPhone);

    this.Response = await supabase.from("student").
    insert(this.Input()).single(); 

    if(this.Response.error != null){
      console.log("Error Submitting the data: ", this.Response.error);
    }
    else{

      this.router.navigate(['/success']);
    }
  }
}
