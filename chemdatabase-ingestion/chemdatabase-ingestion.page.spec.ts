import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChemdatabaseIngestionPage } from './chemdatabase-ingestion.page';

describe('ChemdatabaseIngestionPage', () => {
  let component: ChemdatabaseIngestionPage;
  let fixture: ComponentFixture<ChemdatabaseIngestionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemdatabaseIngestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
