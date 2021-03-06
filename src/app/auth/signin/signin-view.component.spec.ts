import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninViewComponent } from './signin-view.component';

describe('SigninViewComponent', () => {
  let component: SigninViewComponent;
  let fixture: ComponentFixture<SigninViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
