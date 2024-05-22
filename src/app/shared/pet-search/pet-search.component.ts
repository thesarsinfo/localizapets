import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pet-search',
  templateUrl: './pet-search.component.html',
  styleUrls: ['./pet-search.component.scss']
})
export class PetSearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public search(value: string){
    this.emmitSearch.emit(value);
  }
}
