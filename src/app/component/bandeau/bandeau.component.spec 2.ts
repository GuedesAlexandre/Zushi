import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeauComponent } from './bandeau.component';

describe('BandeauComponent', () => {
  let component: BandeauComponent;
  let fixture: ComponentFixture<BandeauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandeauComponent]
    });
    fixture = TestBed.createComponent(BandeauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
