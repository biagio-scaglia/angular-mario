import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuboMarioComponent } from './tubo-mario.component';

describe('TuboMarioComponent', () => {
  let component: TuboMarioComponent;
  let fixture: ComponentFixture<TuboMarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TuboMarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuboMarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
