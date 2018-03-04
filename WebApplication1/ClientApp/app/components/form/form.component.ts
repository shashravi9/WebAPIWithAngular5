import { Component } from '@angular/core';

@Component({
    selector: 'consumer-form',
    templateUrl: './form.component.html'
})
export class ConsumerFormComponent {
    public minValue: number = 0;
    public maxValue: number = 0;
    public calendarValue: Date;

    checkMin(val: number) {
        if (val < 0) {
            this.minValue = 0
        }
        
        else if (val < this.maxValue && this.maxValue > 0) {
            this.minValue = val;
        }
        else {
            this.maxValue = val;
        }
    }

    checkMax(val: number) {
        if (val < this.minValue) {
            this.maxValue = this.minValue;
            console.log(this.maxValue);
        }
    }

    save() {

    }
}