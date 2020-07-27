import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MediaDialogComponent } from './media-dialog.component';

describe('MediaDialogComponent', () => {
  let component: MediaDialogComponent;
  let fixture: ComponentFixture<MediaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaDialogComponent ],
      providers: [    { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
