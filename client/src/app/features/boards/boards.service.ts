import { inject, Service, signal } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';

@Service()
export class BoardService {
  URL = environment.BACKEND_URL + '/board';
  authService = inject(AuthService);
  http = inject(HttpClient);

  boardList = signal([]);
  showAddBoard = signal<Boolean>(false);
  boardError = signal('');

  showBoardError(message: string) {
    this.boardError.set(message);
    setTimeout(() => {
      this.boardError.set('');
    }, 2000);
  }

  async addBoard(title: string) {

    const payload = {
      title: title,
      userId : this.authService.user()?._id,
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
}
