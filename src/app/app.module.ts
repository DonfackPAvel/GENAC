import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {DashboardComponent} from "./dashboard/dashboard/dashboard.component";
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AdminSettingsComponent } from './dashboard/component/admin-settings/admin-settings.component';
import { FooterComponent } from './footer/footer.component';
import { PublicationsComponent } from './publications/publications.component';
import { OppositionComponent } from './opposition/opposition.component';
import { IncrireComponent } from './incrire/incrire.component';
import { NaissanceComponent } from './naissance/naissance.component';
import { DecesComponent } from './deces/deces.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { DemandeComponent } from './demande/demande.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    DashboardComponent,
    NavigationComponent,
    AdminSettingsComponent,
    FooterComponent,
    PublicationsComponent,
    OppositionComponent,
    IncrireComponent,
    NaissanceComponent,
    DecesComponent,
    DeclarationComponent,
    DemandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
