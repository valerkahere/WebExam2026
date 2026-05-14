import { Component, inject } from '@angular/core';
import { ExamApi } from '../../services/exam-api/exam-api';

@Component({
  selector: 'app-countries',
  imports: [],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
})
export class Countries {
  countriesService = inject(ExamApi);
  constructor() {
    this.countriesService.getCountries();
  }
}
