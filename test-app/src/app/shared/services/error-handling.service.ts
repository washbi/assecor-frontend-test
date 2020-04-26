import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ErrorHandlingService {

  constructor(private router: Router) { }

  handleError(err) {
    console.error(err);
    this.router.navigate(['starwars/error']);
  }

  /*
   add other handlings here
   */

}
