import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { HeaderComponent } from './header/header.component';
import { SectionFeatureComponent } from './section-feature/section-feature.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { SectionScreenshotsComponent } from './section-screenshots/section-screenshots.component';
import { SectionTestimonialsComponent } from './section-testimonials/section-testimonials.component';
import { SectionPricingComponent } from './section-pricing/section-pricing.component';
import { SectionSubscribeComponent } from './section-subscribe/section-subscribe.component';
import { SectionDownloadComponent } from './section-download/section-download.component';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { SectionFooterComponent } from './section-footer/section-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    SectionFeatureComponent,
    SectionServicesComponent,
    Step1Component,
    Step2Component,
    SectionScreenshotsComponent,
    SectionTestimonialsComponent,
    SectionPricingComponent,
    SectionSubscribeComponent,
    SectionDownloadComponent,
    SectionContactComponent,
    SectionFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
