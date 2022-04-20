import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooktableComponent } from './booktable/booktable.component';
import { BookviewComponent } from './bookview/bookview.component';
import { TopnewreleasesComponent } from './topnewreleases/topnewreleases.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooktableComponent,
    BookviewComponent,
    TopnewreleasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
