import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChemdatabasePage } from './chemdatabase.page';

describe('ChemdatabasePage', () => {
  let component: ChemdatabasePage;
  let fixture: ComponentFixture<ChemdatabasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemdatabasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
