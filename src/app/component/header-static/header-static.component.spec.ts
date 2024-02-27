import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStaticComponent } from './header-static.component';

describe('HeaderStaticComponent', () => {
  let component: HeaderStaticComponent;
  let fixture: ComponentFixture<HeaderStaticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderStaticComponent]
    });
    fixture = TestBed.createComponent(HeaderStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
