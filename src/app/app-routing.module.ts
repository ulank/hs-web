import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./home/login/login.component";
import {RegisterComponent} from "./home/register/register.component";
import {TopnewreleasesComponent} from "./pages/topnewreleases/topnewreleases.component";
import {AboutusComponent} from "./pages/aboutus/aboutus.component";

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'releases', component:TopnewreleasesComponent},
  { path: 'about', component:AboutusComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
