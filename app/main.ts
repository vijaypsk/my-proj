import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';
import {Main} from './nvd3.component';


bootstrap(Main,[HTTP_PROVIDERS]);
