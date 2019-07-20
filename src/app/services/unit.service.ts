import { Injectable }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UnitsResponse } from '../models/response/units.model';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  constructor(private http: HttpClient) {}

  public getUnits(): Observable<UnitsResponse> {
    const url = 'https://private-anon-0a3707b0d4-hospiqtest.apiary-mock.com/units';

    return this.http.get(url).pipe(
      map(data => new UnitsResponse(data)),
    );
  }
}
