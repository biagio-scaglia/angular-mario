import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerupdettaglioComponent } from './powerupdettaglio.component';

describe('PowerupdettaglioComponent', () => {
  let component: PowerupdettaglioComponent;
  let fixture: ComponentFixture<PowerupdettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerupdettaglioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerupdettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
