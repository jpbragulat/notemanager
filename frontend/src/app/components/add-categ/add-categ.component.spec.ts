import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategComponent } from './add-categ.component';

describe('AddTutorialComponent', () => {
  let component: AddCategComponent;
  let fixture: ComponentFixture<AddCategComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCategComponent]
    });
    fixture = TestBed.createComponent(AddCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
