import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeedDetailComponent } from './deed-detail/deed-detail.component';
import { DeedListComponent } from './deed-list/deed-list.component';
import { DeedSubmissionComponent } from './deed-submission/deed-submission.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'deed-list', component: DeedListComponent }, 
  { path: 'deed-detail/:id', component: DeedDetailComponent },
  { path: 'deed-submission', component: DeedSubmissionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
