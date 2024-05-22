import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//service
import { PetApiService } from 'src/app/service/pet-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  public pet: any;
  public pets: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  public getAllPets: any;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private petApiService: PetApiService,

  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.petApiService.apiListAllPets.subscribe(
      res => {
        this.pets = res.animais
        
        for ( let x in this.pets){
          if( this.pets[x].id == id){
            this.pet = this.pets[x]
          }
        }
        this.isLoading = true
      }
      ,
      error => {
        this.apiError = true
      }
    );
  }
}
