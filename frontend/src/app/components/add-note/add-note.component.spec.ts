import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoteComponent } from './add-note.component';

describe('AddTutorialComponent', () => {
  let component: AddNoteComponent;
  let fixture: ComponentFixture<AddNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNoteComponent]
    });
    fixture = TestBed.createComponent(AddNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
