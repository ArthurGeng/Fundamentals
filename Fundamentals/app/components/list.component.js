"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var list_service_1 = require("./services/list.service");
var ListComponent = (function () {
    function ListComponent(listService) {
        this.listService = listService;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.events = this.listService.getEvents();
    };
    return ListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListComponent.prototype, "event", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: 'list-component',
        template: "\n        <div>\n            <h1>{{event?.id}}</h1>\n        </div>\n        <div *ngFor=\"let e of events\">\n            <h2>{{e.id}}</h2>\n        </div>\n",
    }),
    __metadata("design:paramtypes", [list_service_1.ListService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map