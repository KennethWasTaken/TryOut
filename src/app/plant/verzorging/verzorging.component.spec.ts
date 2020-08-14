import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerzorgingComponent } from './verzorging.component';

describe('VerzorgingComponent', () => {
  let component: VerzorgingComponent;
  let fixture: ComponentFixture<VerzorgingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerzorgingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerzorgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
