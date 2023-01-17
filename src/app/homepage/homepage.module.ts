import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomepageComponent } from './homepage.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
     FormsModule, 
     MatButtonModule, 
     MatCardModule],
  exports: [HomepageComponent],
  declarations: [HomepageComponent]
})

export class HomepageModule { }
