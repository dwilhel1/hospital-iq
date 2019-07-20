import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Subject } from 'rxjs';

import { Unit } from '../../models/response/units.model';

@Component({
  selector: 'app-units-table',
  templateUrl: './units-table.component.html',
  styleUrls: ['./units-table.component.scss']
})
export class UnitsTableComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort)
  private sort: MatSort;

  @Input()
  private units: Unit[];

  public displayedColumns: string[] = ['name', 'id', 'capacity', 'census', 'lowAlarm', 'highAlarm'];
  public tableData: MatTableDataSource<Unit>;
  private unsubscribe: Subject<void> = new Subject();

  public ngOnInit(): void {
    this.tableData = new MatTableDataSource(this.units);
    this.tableData.sort = this.sort;
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
