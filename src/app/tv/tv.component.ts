import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush


})
export class TvComponent implements DoCheck {



  constructor(public changeDetectorRef: ChangeDetectorRef) {
    changeDetectorRef.markForCheck();
  }

  ngDoCheck(): void {
    console.log('TV Comp')
  }

}
