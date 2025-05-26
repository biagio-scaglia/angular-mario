import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarioButtonComponent } from './mario-button.component';

describe('MarioButtonComponent', () => {
  let component: MarioButtonComponent;
  let fixture: ComponentFixture<MarioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarioButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
