import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Comps/nav-bar/nav-bar.component';
import { DataComponent } from './Comps/data/data.component';
import { SideBarComponent } from './Comps/side-bar/side-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InpComponent } from './Comps/inp/inp.component';
import { MaterialModule } from './modules/material.module';
import { ConversorPipe } from './conversor.pipe';
import { FuenteDirective } from './fuente.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DataComponent,
    SideBarComponent,
    InpComponent,
    ConversorPipe,
    FuenteDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
