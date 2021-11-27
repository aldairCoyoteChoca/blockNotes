import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesComponent } from '../notes/notes.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['../../app.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private notesComponent: NotesComponent) {
  }

  ngOnInit(): void {
  }

  title = this.data == null ? "Create new note" : this.data.name;
  nameSet = this.data == null ? "" : this.data.name;
  textSet = this.data == null ? "" : this.data.text;

  addNote = new FormGroup({
    name: new FormControl(this.nameSet, [Validators.required]),
    text: new FormControl(this.textSet, [Validators.required]),
  });

  onKey(){
    const input = this.addNote.controls['text'].value.toUpperCase();
    this.addNote.controls['text'].setValue(input);
  }

  saveNote(form: any){
    this.notesComponent.create(form);
  }
  
}
