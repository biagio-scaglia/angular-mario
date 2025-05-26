import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiocodettaglioComponent } from './giocodettaglio.component';

describe('GiocodettaglioComponent', () => {
  let component: GiocodettaglioComponent;
  let fixture: ComponentFixture<GiocodettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiocodettaglioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiocodettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
