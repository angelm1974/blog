import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdytorComponent } from './edytor.component';

describe('EdytorComponent', () => {
  let component: EdytorComponent;
  let fixture: ComponentFixture<EdytorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdytorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdytorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
