import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routs
import { APP_ROUTING } from './app-routing.module';

// Service

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { StartingComponent } from './components/start/starting/starting.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TutorialComponent,
    StartingComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
