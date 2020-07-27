import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MediaDialogComponent} from '../media-dialog/media-dialog.component';
import {FeedResultModel} from '../flicker/feed-result.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  @Input() items: Array<FeedResultModel>;

  constructor(private dialog: MatDialog) { }
}
