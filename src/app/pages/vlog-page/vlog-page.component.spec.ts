import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogPageComponent } from './vlog-page.component';

describe('VlogPageComponent', () => {
  let component: VlogPageComponent;
  let fixture: ComponentFixture<VlogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
