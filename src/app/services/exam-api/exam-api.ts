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

  public countries = signal<Countries[] | null>([]);
  public apiError = signal<true | false>(false);




  getCountries() {


    const fullURL = `${this._apiURL}all?fields=flag,name,capital,independent`;
    this._http.get<Countries[]>(fullURL)
    .pipe(
      // products side effects - preflight check that data arrived
      tap((data) => console.log(`API data: ${JSON.stringify(data)}`))
    )
    .subscribe({
        next: (dataArrived) => {

            // console.log(data);

            // api returns an array of js objects
            // assign them directly to countries signal
            this.countries.set(dataArrived);
            console.log(`Assigned data: ${JSON.stringify(this.countries())}`);

            console.log(`One country name: ${JSON.stringify(this.countries()?.[1].name.common)}`);

        },
        error: (data) => {
          this.apiError.set(true);
        },
      })

  }
}
