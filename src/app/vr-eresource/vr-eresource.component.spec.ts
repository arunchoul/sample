import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrEResourceComponent } from './vr-eresource.component';

describe('VrEResourceComponent', () => {
  let component: VrEResourceComponent;
  let fixture: ComponentFixture<VrEResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrEResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrEResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
