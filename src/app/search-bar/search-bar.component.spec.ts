import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import {FlickerService} from '../flicker/flicker.service';
import createSpy = jasmine.createSpy;
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatAutocompleteModule, ReactiveFormsModule],
      declarations: [ SearchBarComponent ],
      providers: [{provide: FlickerService, useValue: {
          getPublicFeed: createSpy()
        }}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When calling #handleSelection', () => {
    it('should clear input', () => {
      component.formGroup.get('input').setValue('Test');
      component.handleSelection({source: {value: ''}});

      expect(component.formGroup.get('input').value).toBe('');
    });
  });

  describe('When calling #displayFn', () => {
    it('should return title if not empty', () => {
      expect(component.displayFn({tags: 'tags'})).toBe('tags');
    });

    it('should return empty if value is null', () => {
      expect(component.displayFn(null)).toBe('');
    });
  });
});
