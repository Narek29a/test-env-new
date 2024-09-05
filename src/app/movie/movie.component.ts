import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ContentChild,
  DoCheck, ElementRef, Input, TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements DoCheck, AfterViewInit, AfterContentInit {


  @ViewChild('templateRef')
  private templateRef!: TemplateRef<HTMLElement>;

  @ContentChild('myParagraph') myParagraph!: ElementRef;
  ngAfterContentInit(): void {
    console.log(this.myParagraph);
  }

  @Input()
  set name(value: string) {
    console.log(value)
  }


  constructor(public changeDetectorRef: ChangeDetectorRef, private viewContainerRef: ViewContainerRef) {

  }


  ngDoCheck(): void {
    console.log('Movie Comp')
  }


  movieCompClick() {

  }

  ngAfterViewInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef)
  }


}
