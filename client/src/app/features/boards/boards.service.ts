import { inject, Service, signal } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';
import { List } from './board-details/List.js';

@Service()
export class BoardService {
  envURL = environment.BACKEND_URL;
  URL = this.envURL + '/board';
  authService = inject(AuthService);
  http = inject(HttpClient);

  showAddBoard = signal<Boolean>(false);
  boardError = signal('');
  userBoards = signal<[]>([]);
  currBoardLists = signal<[List] | null>(null);

  showBoardError(message: string) {
    this.boardError.set(message);
    setTimeout(() => {
      this.boardError.set('');
    }, 2000);
  }

  async addBoard(title: string) {
    const payload = {
      title: title,
      userId: this.authService.user()?._id,
    };

    this.http.post(this.URL + '/add-board', payload).subscribe({
      next: (response) => {
        console.log('Success :', response);
      },

      error: (err) => {
        console.log(err.error.message);
        this.showBoardError('Failed to add board. Try again later');
      },
    });
  }

  getBoards() {
    const userId = this.authService.user()?._id;

    console.log(`${this.URL}/all-boards/${userId}`);
    this.http.get<{ boards: [] }>(`${this.URL}/all-boards/${userId}`).subscribe({
      next: (response) => {
        this.userBoards.set(response.boards);
      },

      error(err) {
        console.log(err.message);
      },
    });
  }

  // Add list to Board

  addList(boardId: string, title: string) {
    try {
      this.http
        .post(`${this.URL}/addList`, {
          boardId,
          title,
        })
        .subscribe({
          next: (respnonse) => {
            console.log(respnonse);
          },
          error(err) {
            throw err;
          },
        });
    } catch (err) {
      console.log('addList error ', err);
      throw err;
    }
  }

  getLists(boardId: string) {
    this.http.get<[List]>(`${this.envURL}/list/${boardId}`).subscribe({
      next: (res) => {
        console.log(res);
        this.currBoardLists.set(res);
      },
      error(err) {
        console.log(err);
      },
    });
  }

  deleteList(boardId: string, listId: string) {
    try {
      this.http.delete(`${this.envURL}/list/delete`, { body: { boardId, listId } }).subscribe({
        next:(res) => {
          console.log(res);
        },

        error:(err) => {
          console.log(err);
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
}
