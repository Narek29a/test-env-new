import {
  AfterContentInit, AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DoCheck, ElementRef, NgZone, QueryList, ViewChild, ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements DoCheck, AfterContentInit, AfterViewInit {

  @ViewChild('firstH1') firstDiv!: ElementRef;
  @ViewChildren('ppp') ppp!: QueryList<ElementRef>;
  movieName: string = '';



  constructor(public changeDetectorRef: ChangeDetectorRef,
              viewContainerRef: ViewContainerRef,
              private ngZone: NgZone) {
    const hotObservable = new Subject();
    hotObservable.subscribe(value => console.log('Subscriber 1:', value));
    hotObservable.next('Value 1'); // Subscriber 1 receives the value

    hotObservable.subscribe(value => console.log('Subscriber 2:', value));

    hotObservable.next('Value 2'); // Both subscribers receive the value
  }

  ngDoCheck(): void {
    console.log('App Comp')
  }

  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(this.firstDiv)
    console.log(this.ppp)
  }


}
