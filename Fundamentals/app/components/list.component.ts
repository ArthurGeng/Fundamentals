import { Component,Input } from '@angular/core';

@Component({
    selector: 'list-component',
    template: `
        <div>
            <h1>{{event.id}}</h1>
        </div>`,
    
})

export class ListComponent {
    @Input() event:any
}
