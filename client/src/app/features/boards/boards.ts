import { Component } from '@angular/core';
import { BoardsList } from './boards-list/boards-list';

@Component({
  selector: 'app-boards',
  imports: [BoardsList],
  templateUrl: './boards.html',
  styleUrl: './boards.scss',
})
export class BoardsComponent {

}
