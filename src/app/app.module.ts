import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { DialogComponent } from './components/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { ArchivedComponent } from './components/archived/archived.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import {MatListModule} from '@angular/material/list';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const imports = [
  BrowserModule,
  BrowserAnimationsModule,
  MatCardModule,
  MatSliderModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatDialogModule,
  MatGridListModule,
  ReactiveFormsModule,
  MatInputModule,
  HttpClientModule,
  MatListModule,
  SweetAlert2Module,
];

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    DialogComponent,
    ArchivedComponent,
    AlertsComponent,
  ],
  imports: [
    imports
  ],
  providers: [AlertsComponent, NotesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
