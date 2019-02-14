import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as hoaxActions from './actions';
import { _INITIAL_STATE } from '@ngrx/store';

@Injectable()
export class HoaxEffects
{
  constructor(private actions: Actions) { }

  @Effect()
  hoaxBeginLoadingRequests = this.actions
    .pipe(
      ofType(hoaxActions.HoaxActionTypes.HOAX_BEGIN_LOADING_REQUESTS),
      tap(() => {
        console.log(hoaxActions.HoaxActionTypes.HOAX_BEGIN_LOADING_REQUESTS);
      })
    );
}
