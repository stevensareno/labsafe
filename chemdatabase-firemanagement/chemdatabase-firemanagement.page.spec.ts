import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChemdatabaseFiremanagementPage } from './chemdatabase-firemanagement.page';

describe('ChemdatabaseFiremanagementPage', () => {
  let component: ChemdatabaseFiremanagementPage;
  let fixture: ComponentFixture<ChemdatabaseFiremanagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemdatabaseFiremanagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
