import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecriterEvalutionComponent } from './recriter-evalution.component';

describe('RecriterEvalutionComponent', () => {
  let component: RecriterEvalutionComponent;
  let fixture: ComponentFixture<RecriterEvalutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecriterEvalutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecriterEvalutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
