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
var core_1 = require('@angular/core');
var data_service_1 = require('./data.service');
var ng2_nvd3_1 = require('ng2-nvd3');
var Main = (function () {
    function Main(dataService) {
        this.dataService = dataService;
        this.mode = 'Observable';
    }
    Main.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (d) { return _this.data = [d]; });
        this.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -10
                }
            }
        };
        console.log('output.....' + this.data);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Main.prototype, "options", void 0);
    Main = __decorate([
        core_1.Component({
            selector: 'main',
            directives: [ng2_nvd3_1.nvD3],
            providers: [data_service_1.DataService],
            template: "\n    <div>\n      <nvd3 [options]=\"options\" [data]=\"data\"></nvd3>\n\n      \n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], Main);
    return Main;
}());
exports.Main = Main;

//# sourceMappingURL=nvd3.component.js.map
