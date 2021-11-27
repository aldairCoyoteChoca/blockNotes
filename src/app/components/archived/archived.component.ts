import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesComponent } from '../notes/notes.component';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['../../app.component.scss']
})
export class ArchivedComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private notesComponent: NotesComponent) { }

  notes:any = this.data;

  ngOnInit(): void {
  
  }

  unarchived(note: any, bollean:any){
    this.notesComponent.archived(note, bollean)
  }

  show(note: any){
    this.notesComponent.show(note);
  }

}
