import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes.service';
import { ArchivedComponent } from '../archived/archived.component';
import { AlertsComponent } from '../alerts/alerts.component';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['../../app.component.scss']
})
export class NotesComponent {

  constructor(private dialog: MatDialog, private notesService: NotesService, private alerts: AlertsComponent) {
    this.index()
  }

  notes:any = [];

  index(){
    this.notesService.index().subscribe(response => {
      const { data } = response;
      this.notes = data;
    });
    
  }

  openDialogCreate(data: any = null) {
    this.index();
    this.dialog.open(DialogComponent, {
      data: data,
      width: "500px",
      height: "500px"
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  openDialogArchived(){
    this.notesService.index().subscribe(response => {
      const { data } = response;
      this.notes = data;
      this.dialog.open(ArchivedComponent, {
        data: this.notes,
        width: "500px",
        height: "500px"
      });
    });
  }

  create(form: any, id: any = null){
    const regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    const match = regex.test(form.name);
    if(match){
      this.alerts.showAlert("Upps!", "The input does not accept emails", "error");
    }else{
      this.closeDialog();
      this.notesService.create(form).subscribe(() => {
        this.notesService.index().subscribe(response => {
          const { data } = response;
          this.notes = data;
          this.alerts.showAlert("Success", "Created note", "success");
          this.index();
        });
      });
    }
  }

  delete(note:any){
    this.alerts.showWait();
    this.notesService.delete(note).subscribe(response => {
      const { data, error } = response;
      if(error == ""){
        this.alerts.showAlert("Success", "Deleted note", "success");
        this.closeDialog();
        this.index();
      }
    });
  }

  public archived(note: any, bollean:any){
    this.alerts.showWait();
    const item = {
      "archived" : bollean,
    }
    this.notesService.update(note, item).subscribe(response => {
      const { data, error } = response;
      this.notes = data;
      this.closeDialog();
      if(error == ""){
        this.alerts.showAlert("Success", "archived note", "success");
        this.index();
      }
    });
  }

  show(note: any){
    this.closeDialog();
    this.notesService.show(note).subscribe(response => {
      const { data, error } = response;
      this.openDialogCreate(data);
    })
  }
}
