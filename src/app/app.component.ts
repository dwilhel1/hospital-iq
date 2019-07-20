import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs';

import { UnitsResponse } from './models/response/units.model';

import { UnitService } from './services/unit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public unitsResponse: UnitsResponse;
  private unsubscribe: Subject<void> = new Subject();

  constructor(private unitService: UnitService) {}

  public ngOnInit(): void {
    this.getAllUnits();
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getAllUnits(): void {
    this.unitService.getUnits().pipe(
      takeUntil(this.unsubscribe),
    ).subscribe((response: UnitsResponse) => {
      this.unitsResponse = response;
      console.log(this.unitsResponse);
    }, () => {
      console.log('There was an error');
    });
  }
}
