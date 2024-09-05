import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-sub-movie',
  templateUrl: './sub-movie.component.html',
  styleUrls: ['./sub-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubMovieComponent implements DoCheck {


  constructor(public changeDetectorRef: ChangeDetectorRef) {
   // changeDetectorRef.markForCheck();
  }


  ngDoCheck(): void {
    console.log('Sub Movie Comp')
  }

}
