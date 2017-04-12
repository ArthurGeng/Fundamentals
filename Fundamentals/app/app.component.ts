import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <list-component *ngFor=" let event of events" [event]="event"></list-component>
        </div>`,
    styleUrls: ['app.component.css'],
    moduleId: module.id
})

export class AppComponent {
    name = 'Angular 2';
    events = [{ id: 1 }, { id: 2 }, { id: 3 }];
}
