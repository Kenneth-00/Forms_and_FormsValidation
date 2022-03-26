import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormfieldComponent } from './formfield/formfield.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path :"formfield",
    component: FormfieldComponent
  },
  {
    path:"",
    redirectTo: "formfield",
    pathMatch:"full"
  },
]
@NgModule({
  declarations: [
    AppComponent,
    FormfieldComponent
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
