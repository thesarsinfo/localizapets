import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//components
import { PetHeaderComponent } from './pet-header/pet-header.component';
import { PetSearchComponent } from './pet-search/pet-search.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PetHeaderComponent,
    PetSearchComponent,
    PetListComponent
  ],
  exports:[
    PetHeaderComponent,
    PetSearchComponent,
    PetListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
