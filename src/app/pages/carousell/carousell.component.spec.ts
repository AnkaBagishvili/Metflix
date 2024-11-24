import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousellComponent } from './carousell.component';

describe('CarousellComponent', () => {
  let component: CarousellComponent;
  let fixture: ComponentFixture<CarousellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarousellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarousellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
