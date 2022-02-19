import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderWithoutMenuComponent } from './header-without-menu.component';

describe('HeaderWithoutMenuComponent', () => {
  let component: HeaderWithoutMenuComponent;
  let fixture: ComponentFixture<HeaderWithoutMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWithoutMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWithoutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
