import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacaParteComponent } from './faca-parte.component';

describe('FacaParteComponent', () => {
  let component: FacaParteComponent;
  let fixture: ComponentFixture<FacaParteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacaParteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacaParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
