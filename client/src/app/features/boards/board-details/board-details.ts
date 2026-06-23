import { Component, inject, input, Input, OnInit, signal, Signal } from '@angular/core';
import { List } from './List';
import {
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { BoardService } from '../boards.service';

@Component({
  selector: 'app-board-details',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './board-details.html',
  styleUrl: './board-details.scss',
})
export class BoardDetails implements OnInit {

  boardService = inject(BoardService);

  boardId = input<string>();
  allLists = signal<List[]>([]);
  showAddListForm = signal<boolean>(false);
  addListFormError = signal<string>('');
  addListFormSuccess = signal<string>('');

  addListForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });


  ngOnInit(): void {
    console.log(this.boardId());
  }

  toggleAddListForm() {
    this.showAddListForm.update((prev) => !prev);
  }

  showError(message: string) {
    this.addListFormError.set(message);
    setTimeout(() => {
      this.addListFormError.set('');
    }, 2000);
  }

  addListFormSubmit() {
    const title = this.addListForm.value.title;
    console.log('Title : ', title);

    if (!title) {
      this.showError('Title cannot be empty');
      return;
    }

    try {
      const currBoardId = this.boardId();

      if(!currBoardId) {
        throw new Error('Board Id not Found');
      }
      
      this.boardService.addList(currBoardId, title);
      this.addListFormSuccess.set('List Created');
      this.addListForm.reset();
      setTimeout(() => {
        this.addListFormSuccess.set('');
        this.toggleAddListForm();
      }, 2000);

    } catch (err) {
      this.showError('Internal Server Error. Please try again later.')
      console.log('Error while adding List to Board : ', err);
    }
  }
}
