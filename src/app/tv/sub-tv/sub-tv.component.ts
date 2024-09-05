import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-sub-tv',
  templateUrl: './sub-tv.component.html',
  styleUrls: ['./sub-tv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush


})
export class SubTvComponent implements DoCheck {

  constructor(public changeDetectorRef: ChangeDetectorRef) {
  }

  ngDoCheck(): void {
    console.log('Sub TV Comp');
  }

}
