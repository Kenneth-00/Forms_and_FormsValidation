import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormfieldComponent } from './formfield/formfield.component';

const routes: Routes = [
  {
    path :"formfield",
    component: FormfieldComponent
  },
  {
    path:"",
    redirectTo: "FormField",
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
    RouterModule.forRoot(
      routes
    ),
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
