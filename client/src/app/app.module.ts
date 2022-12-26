import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { DndDirective } from './derictives/dnd/dnd.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './components/header/header.component';
import { ClassificationComponent } from './components/classification/classification.component';
import { NlpComponent } from './components/nlp/nlp.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
    DndDirective,
    HeaderComponent,
    ClassificationComponent,
    NlpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
