import { Component, input, Input, OnInit, signal, Signal } from '@angular/core';
import { List } from './List';

@Component({
  selector: 'app-board-details',
  imports: [],
  templateUrl: './board-details.html',
  styleUrl: './board-details.scss',
})
export class BoardDetails implements OnInit {

  id = input<string>();
  allLists = signal<List[]>([]); 
  
  ngOnInit(): void {
    console.log(this.id());
  }
}
