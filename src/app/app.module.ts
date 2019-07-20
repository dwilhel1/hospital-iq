import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule, MatToolbarModule, MatTableModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UnitsTableComponent } from './components/units-table/units-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitsTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
  ],
  exports: [
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
