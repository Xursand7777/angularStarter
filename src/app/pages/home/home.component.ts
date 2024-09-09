import {  ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { CustomHeader } from "../../shared/custom-header/custom-header.component";
import { HighlightDirective } from "../../shared/custom-header/directives/highlight";
import { HomeService } from "../../services/home.service";
import { AsyncPipe, NgForOf } from "@angular/common";
import { Observable } from "rxjs";

interface Product {
    productId: string,
    productName: string,
    productTag: string,
    productPrice: number
}


@Component({
    selector: 'app-home',
    styleUrls: ['home.component.scss'],
    templateUrl: 'home.component.html',
    imports: [CustomHeader, HighlightDirective, AsyncPipe, NgForOf],
    standalone: true,
})
export class HomeComponent implements OnInit {
   
    public todos$$!:Observable<any[]>; 

    constructor(private homeService:HomeService
    ) {
      
    }

    ngOnInit(): void {
        this.homeService.getMockData().subscribe();
        this.todos$$ = this.homeService.todos$$;
       
        
    }



}