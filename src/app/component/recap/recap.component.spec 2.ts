import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapComponent } from './recap.component';

describe('RecapComponent', () => {
  let component: RecapComponent;
  let fixture: ComponentFixture<RecapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecapComponent]
    });
    fixture = TestBed.createComponent(RecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
