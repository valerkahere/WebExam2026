import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Countries } from '../../models/countries.interface';
import { Observable, catchError, tap, throwError, take } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ExamApi {
  private _http   = inject(HttpClient);
  private _apiURL = environment.apiURL;

  public countries = signal<Countries[]>([]);
  public apiError = signal<true | false>(false);




  getCountries() {


    const fullURL = `${this._apiURL}all?fields=flag,name,capital,independent`;
    this._http.get<Countries>(fullURL)
      .subscribe({
        next: (data) => {

            console.log(data);

            this.countries.update((data) => data)


        },
        error: (data) => {
          this.apiError.set(true);
        },
      })

  }
}
