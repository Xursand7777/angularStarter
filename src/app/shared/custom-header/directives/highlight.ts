import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[appHighlight]'
})


export class HighlightDirective implements OnInit  {
    constructor(private element:ElementRef) {
       
    }

    ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor = 'yellow';
    }

   


}