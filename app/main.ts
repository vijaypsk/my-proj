import {bootstrap}    from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';
import {Main} from './nvd3.component';

enableProdMode();
bootstrap(Main,[HTTP_PROVIDERS]);
