import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime, distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {FlickerService} from '../flicker/flicker.service';
import {FeedResultModel} from '../flicker/feed-result.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() selection: EventEmitter<any> = new EventEmitter();
  @Output() search: EventEmitter<any> = new EventEmitter();

  filteredOptions: Observable<Array<any>>;
  formGroup: FormGroup;

  constructor(private flickerService: FlickerService) {

  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      input: new FormControl()
    });

    this.filteredOptions = this.formGroup.get('input').valueChanges
      .pipe(
        startWith(''),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(val => {
          return this.filter(val);
        })
      );
  }

  filter(query: any): Observable<FeedResultModel[]> {
    if (typeof(query) !== 'string') { return of(); }

    return this.flickerService.getPublicFeed(query.split(' '));
  }

  handleSelection(searchEvent): any {
    this.formGroup.get('input').setValue('');
    this.selection.emit(searchEvent.source.value);
  }

  handleSearch() {
    const query = this.formGroup.get('input').value;
    return this.flickerService.getPublicFeed(query.split(' ')).subscribe((data) => {
          this.search.emit(data);
    })
  }

  displayFn(value: any): string {
    return value && value.tags ? value.tags : '';
  }
}


