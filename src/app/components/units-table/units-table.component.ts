import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subject } from 'rxjs';

import { Unit } from '../../models/response/units.model';

@Component({
  selector: 'app-units-table',
  templateUrl: './units-table.component.html',
  styleUrls: ['./units-table.component.scss']
})
export class UnitsTableComponent implements OnInit, OnDestroy {
  @Input()
  private units: Unit[];

  public displayedColumns: string[] = ['name', 'id', 'capacity', 'census', 'lowAlarm', 'highAlarm'];
  public tableData: MatTableDataSource<Unit>;
  private unsubscribe: Subject<void> = new Subject();

  public ngOnInit(): void {
    this.tableData = new MatTableDataSource(this.units);
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
