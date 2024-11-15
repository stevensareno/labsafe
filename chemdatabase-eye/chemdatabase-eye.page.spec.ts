import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChemdatabaseEyePage } from './chemdatabase-eye.page';

describe('ChemdatabaseEyePage', () => {
  let component: ChemdatabaseEyePage;
  let fixture: ComponentFixture<ChemdatabaseEyePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemdatabaseEyePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
