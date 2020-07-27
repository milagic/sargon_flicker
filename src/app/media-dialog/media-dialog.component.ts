import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-media',
  templateUrl: './media-dialog.component.html',
  styleUrls: ['./media-dialog.component.scss']
})
export class MediaDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {mediaUrl: string}) { }
}
