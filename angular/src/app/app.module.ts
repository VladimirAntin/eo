import {enableProdMode, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {NavigationModule} from './navigation/navigation.module';
import {PageModule} from './page/page.module';

enableProdMode();
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule, NavigationModule, PageModule
  ],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
