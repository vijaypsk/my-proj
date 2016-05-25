"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var nvd3_component_1 = require('./nvd3.component');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(nvd3_component_1.Main, [http_1.HTTP_PROVIDERS]);

//# sourceMappingURL=main.js.map
