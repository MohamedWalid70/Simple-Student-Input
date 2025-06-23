import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { supabase } from '../../../Supabase Client/supabase-client';  
import { Student } from '../../../Interfaces/interfaces'
  
  
@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  Entries: WritableSignal<Student[]>;
  successMessage :  WritableSignal<string | null>;
  errorMessage : WritableSignal<string | null>;

  constructor() {
    this.Entries = signal<Student[]>([]);
    this.successMessage = signal<string | null>(null);
    this.errorMessage = signal<string | null>(null);
  }

  ngOnInit() {

    this.fetchEntries();
    
  }

  async fetchEntries() {
    const { error, data } = await supabase.from("student").select("*").order("id", { ascending: true });
    if (error) {
      console.log(error);
      this.errorMessage.update(em => em='Failed to fetch entries.');
      setTimeout(() => this.clearAlerts(), 5000);
    } else {
      this.Entries.set(data as Student[]);
    }
  }

  // async updateEntry(id: number){
  //   await supabase.from("student").update()
  // }

  async deleteRegistration(id: string) {
    this.clearAlerts();
    const { error } = await supabase.from("student").delete().eq("id", id);

    if (error) {
      console.log(error);
      this.errorMessage.update(em => em = `Error deleting registration: ${error.message}`);
    } else {
      this.Entries.update((entries: Student[]) => entries.filter((entry: Student) => entry.id !== id));
      this.successMessage.update(sm => sm = 'Registration deleted successfully!');
    }
    setTimeout(() => this.clearAlerts(), 4000);
  }

  clearAlerts() {
    this.successMessage.update(sm => sm = null);
    this.errorMessage.update(em => em = null);
  }
}
