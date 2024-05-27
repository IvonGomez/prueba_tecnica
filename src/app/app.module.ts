import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { AmountPipe } from './pipes/amounmtPipe';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent,
    InicioComponent,
    FooterComponent,
    BannerComponent,
    AmountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  //entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
      const el = createCustomElement(AppComponent, {injector});
      customElements.define('skco-forgetpassword-angular', el);
  }

  ngDoBootstrap() {

  }
}