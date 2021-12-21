import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingHerosComponentComponent } from './flying-heros-component.component';

describe('FlyingHerosComponentComponent', () => {
  let component: FlyingHerosComponentComponent;
  let fixture: ComponentFixture<FlyingHerosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyingHerosComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyingHerosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
