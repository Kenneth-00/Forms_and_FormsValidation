import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormfieldComponent } from './formfield/formfield.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path :"formfield",
        component: FormfieldComponent
      }
    ],
  },
  {
    path: "**",
    redirectTo: "home",
    pathMatch: "full"
  }
  
]
@NgModule({
  declarations: [
    AppComponent,
    FormfieldComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes
    ),
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
