import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },

  //other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
