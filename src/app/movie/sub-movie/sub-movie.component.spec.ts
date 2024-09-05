import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMovieComponent } from './sub-movie.component';

describe('SubMovieComponent', () => {
  let component: SubMovieComponent;
  let fixture: ComponentFixture<SubMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubMovieComponent]
    });
    fixture = TestBed.createComponent(SubMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
