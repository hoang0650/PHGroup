import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { NzLayoutModule } from "ng-zorro-antd/layout"
import { NzMenuModule } from "ng-zorro-antd/menu"
import { NzButtonModule } from "ng-zorro-antd/button"
import { NzTypographyModule } from "ng-zorro-antd/typography"
import { NzGridModule } from "ng-zorro-antd/grid"
import { NzCardModule } from "ng-zorro-antd/card"
import { NzIconModule } from "ng-zorro-antd/icon"
import { NzDrawerModule } from "ng-zorro-antd/drawer"
import { NzToolTipModule } from "ng-zorro-antd/tooltip"
import { NzDividerModule } from "ng-zorro-antd/divider"
import { NzListModule } from "ng-zorro-antd/list"
import { NzFormModule } from "ng-zorro-antd/form"
import { NzInputModule } from "ng-zorro-antd/input"
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzTimelineModule } from 'ng-zorro-antd/timeline'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideNzI18n } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MainComponent } from './components/main/main.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    AboutUsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzTypographyModule,
    NzGridModule,
    NzCardModule,
    NzIconModule,
    NzDrawerModule,
    NzToolTipModule,
    NzDividerModule,
    NzListModule,
    NzFormModule,
    NzInputModule,
    NzPageHeaderModule,
    NzTimelineModule,
    NzDescriptionsModule,
    NzTagModule,
    NzAvatarModule

  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideNzI18n(en_US),
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
