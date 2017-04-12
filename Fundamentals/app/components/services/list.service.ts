import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
    getEvents() {
        return EVENTS;
    }
}

const EVENTS = [{ id: 1 }, { id: 2 }, {id: 3}];