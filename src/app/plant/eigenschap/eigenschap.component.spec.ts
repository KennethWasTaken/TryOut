import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EigenschapComponent } from './eigenschap.component';

describe('EigenschapComponent', () => {
  let component: EigenschapComponent;
  let fixture: ComponentFixture<EigenschapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EigenschapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EigenschapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
