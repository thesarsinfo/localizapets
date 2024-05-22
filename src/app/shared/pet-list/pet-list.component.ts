import { Component, OnInit } from '@angular/core';
import { PetApiService } from 'src/app/service/pet-api.service';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  private setAllPets: any;
  public getAllPets: any;
  public apiError: boolean = false;
  public filtro: any;


  constructor(
    private petApiService: PetApiService
  ) { }

  ngOnInit(): void {
    this.petApiService.apiListAllPets.subscribe(
      res => {
        this.setAllPets = res.animais;
        this.getAllPets = this.setAllPets;
      }
      ,
      error => {
        this.apiError = false
      }
    );
  }

  public getSearch(value: string){
    const filter = this.setAllPets.filter( (res: any ) => {
      this.filtro =  !res.raca.indexOf(value.toLowerCase())
      this.filtro = this.filtro + !res.especie.indexOf(value.toLowerCase())
      this.filtro = this.filtro + !res.cor.indexOf(value.toLowerCase())
      this.filtro = this.filtro + !res.name.indexOf(value.toLowerCase())

      return this.filtro 
    });

    this.getAllPets = filter;
  }
}
