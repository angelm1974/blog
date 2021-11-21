import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LudzieComponent } from './ludzie.component';

describe('LudzieComponent', () => {
  let component: LudzieComponent;
  let fixture: ComponentFixture<LudzieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LudzieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LudzieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
