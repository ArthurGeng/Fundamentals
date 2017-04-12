import { Component,Input,OnInit } from '@angular/core';
import { ListService } from './services/list.service';

@Component({
    selector: 'list-component',
    template: `
        <div>
            <h1>{{event?.id}}</h1>
        </div>
        <div *ngFor="let e of events">
            <h2>{{e.id}}</h2>
        </div>
`,
    
})

export class ListComponent implements OnInit {
    @Input() event: any

    events: any[]

    constructor(private listService: ListService) {
    }

    ngOnInit() {
        this.events = this.listService.getEvents();
    }
}
