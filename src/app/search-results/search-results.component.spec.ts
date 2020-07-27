import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import {MatDialog} from '@angular/material/dialog';
import createSpy = jasmine.createSpy;
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// @ts-ignore
const _ = require('lodash');

function getDummyItem(): any {
  return {author: 'Test Author', mediaUrl: 'https://live.staticflickr.com/65535/50156079683_f26f017070_b.jpg',
    tags: ['Test'], title: 'Text'};
}

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsComponent ],
      providers: [{provide: MatDialog, useValue: {open: createSpy()}}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    dialog = TestBed.get(MatDialog);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When item does not have tags', () => {
    it('should not render tags', () => {
      component.items = [_.omit(getDummyItem(), 'tags')];
      fixture.detectChanges();

      const tags = fixture.debugElement.nativeElement.querySelector('.tags');

      expect(tags).toBeNull();
    });
  });

  describe('When item is not available', () => {
    it('should not render anything', () => {
      const card = fixture.debugElement.nativeElement.querySelector('mat-card');

      expect(card).toBeNull();
    });
  });
});
