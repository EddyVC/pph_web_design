import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new Subject<boolean>();
  loaderState$ = this.loaderSubject.asObservable();

  showLoader(show: boolean) {
    if (!show) {
      setTimeout(() => {
        this.loaderSubject.next(show);
      }, 1200);
    }
    else
      this.loaderSubject.next(show);
  }

}
