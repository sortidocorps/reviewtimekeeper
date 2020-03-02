import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { KeeperComponent } from './keeper/keeper.component';
import { TimertestComponent } from './shared/timertest/timertest.component';
import { SubjectcompoComponent } from './components/subjectcompo/subjectcompo.component';
import { MatCardModule } from '@angular/material/card';
import { SubjectDisplayComponent } from './components/subject-display/subject-display.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent,
    KeeperComponent,
    TimertestComponent,
    SubjectcompoComponent,
    SubjectDisplayComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
