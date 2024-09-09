import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-users',
    styleUrls: ['users.component.scss'],
    templateUrl: 'users.component.html',
    imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
    standalone: true
})
export class UsersComponent {

    public isShow: boolean | null = null;

    public customers = [{name: 'Dilshoda', age:20}, {name: 'Alisher', age: 27}, {name: 'Dilshod', age: 24}];


    public currentItem = { feature: 'slim'  };

    onToggle() {
        this.isShow = !this.isShow;
    }

    onChangeVintage() {
        this.currentItem = { ...this.currentItem, feature: 'vintage' };
    }

    onChangeBright() {
        this.currentItem = { ...this.currentItem, feature: 'brigh' };
    }
}