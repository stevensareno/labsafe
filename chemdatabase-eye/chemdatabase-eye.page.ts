import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

// Define an interface for the data structure you expect
interface ChemicalData {
  name: string;    // Name of the individual
  language: string; // Language spoken
  id: string;      // Unique identifier
  bio: string;     // Biography or description
  version: number; // Version number
}

@Component({
  selector: 'app-chemdatabase-eye',
  templateUrl: './chemdatabase-eye.page.html',
  styleUrls: ['./chemdatabase-eye.page.scss'],
})
export class ChemdatabaseEyePage implements OnInit {

  data: ChemicalData[] = []; // Array to hold the JSON data

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.databaseService.getData().subscribe({
      next: (response: ChemicalData[]) => {
        this.data = response;
        console.log(this.data); // Log the data to check structure
      },
      error: (err) => {
        console.error('Error fetching data:', err); // Handle errors
      }
    });
  }
}
