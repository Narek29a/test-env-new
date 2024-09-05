import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTvComponent } from './sub-tv.component';

describe('SubTvComponent', () => {
  let component: SubTvComponent;
  let fixture: ComponentFixture<SubTvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubTvComponent]
    });
    fixture = TestBed.createComponent(SubTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
