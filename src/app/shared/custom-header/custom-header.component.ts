import { Component, EventEmitter, Input, output, Output } from "@angular/core";

interface managerData {
    surname: string,
    name: string,
    address: string
}

@Component({
    selector: 'app-custom-header',
    templateUrl: 'custom-header.component.html',
    styleUrls: ['custom-header.component.scss'],
    standalone: true
})
export class CustomHeader {
    @Input() managerData!:managerData;
    @Output() calculateNumber:EventEmitter<number> = new EventEmitter<number>();


    generateNumber() {
        const randomNumber = Math.floor(Math.random() * 1000);
        console.log(randomNumber, 'randomNumber');
        this.calculateNumber.emit(randomNumber);  // Здесь эмитим число в родительский компонент
    }
}