import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { BoardService } from '../boards.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Board } from './Board.js';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-boards-list',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './boards-list.html',
  styleUrl: './boards-list.scss',
})
export class BoardsList implements OnInit {
  boardService = inject(BoardService);
  
  boardError = signal('');
  isLoadingAddBoard = signal<Boolean>(false);
  boardList : Signal<Board[]> = computed(() => {
    return this.boardService.userBoards();
  })

    ngOnInit(): void {
      this.boardService.getBoards();
    }
  addBoardForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  toggleAddBoardForm() {
    this.boardService.showAddBoard.update((prev) => !prev);
  }

  showAddBoardError(message: string) {
    this.boardError.set(message);
    setTimeout(() => {
      this.boardError.set('');
    }, 2000);
  }

  async handleAddBoard() {
    this.isLoadingAddBoard.set(true);
    const title = this.addBoardForm.value.title;

    if (!title) {
      this.showAddBoardError('Title cannot be empty.');
      return;
    }

    await this.boardService.addBoard(title);
    setTimeout(() => {
    this.isLoadingAddBoard.set(false);
    }, 2000);
  }
}
