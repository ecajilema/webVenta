import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: 'dialogdelete.component.html'
})
export class DialogdeleteComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DialogdeleteComponent>) 
  { 

  }

  ngOnInit(): void {
  }

}
