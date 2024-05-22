import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetHeaderComponent } from './pet-header.component';

describe('PetHeaderComponent', () => {
  let component: PetHeaderComponent;
  let fixture: ComponentFixture<PetHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
