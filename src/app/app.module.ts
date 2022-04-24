import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { BooktableComponent } from './home/booktable/booktable.component';
import { BookviewComponent } from './home/bookview/bookview.component';
import { TopnewreleasesComponent } from './pages/topnewreleases/topnewreleases.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooktableComponent,
    BookviewComponent,
    TopnewreleasesComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
