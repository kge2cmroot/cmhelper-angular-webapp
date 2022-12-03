import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent, SuccessDialog, WarningDialog } from './home/home.component';
import { CmHelperFormComponent } from './home/cm-helper-form/cm-helper-form.component';
import { CmHelperViewComponent } from './home/cm-helper-view/cm-helper-view.component';
import { CmHelperGraphComponent } from './home/cm-helper-graph/cm-helper-graph.component';
import { MaterialExampleModule } from './material.modul';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CmHelperFormComponent,
    CmHelperViewComponent,
    CmHelperGraphComponent, 
    SuccessDialog,
    WarningDialog
  ],
  imports: [
    NgxGraphModule,MaterialExampleModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
