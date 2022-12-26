import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassificationComponent } from './components/classification/classification.component';
import { NlpComponent } from './components/nlp/nlp.component';

const routes: Routes = [
  { path: 'classification', component: ClassificationComponent },
  { path: 'nlp', component: NlpComponent },
  { path: '',   redirectTo: '/classification', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
