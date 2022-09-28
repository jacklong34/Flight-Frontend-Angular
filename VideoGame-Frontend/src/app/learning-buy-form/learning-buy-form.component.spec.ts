import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningBuyFormComponent } from './learning-buy-form.component';

describe('LearningBuyFormComponent', () => {
  let component: LearningBuyFormComponent;
  let fixture: ComponentFixture<LearningBuyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningBuyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningBuyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
