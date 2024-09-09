import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";

interface Product {
    productId: string,
    productName: string,
    productTag: string,
    productPrice: number
}
@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private httpClient:HttpClient) {

    }
    public productDetails:Product[] = [];
    public todos$$:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);


    getMockData() {
       return this.httpClient.get('https://jsonplaceholder.typicode.com/todos').pipe(
        tap((todos:any)=> this.todos$$.next(todos))
       );
    }


}