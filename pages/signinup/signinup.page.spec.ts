import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninupPage } from './signinup.page';

describe('SigninupPage', () => {
  let component: SigninupPage;
  let fixture: ComponentFixture<SigninupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
