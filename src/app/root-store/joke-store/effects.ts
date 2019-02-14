import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap, tap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import * as featureActions from './actions';
import { HoaxStoreActions } from '../hoax-store';

@Injectable()
export class JokeStoreEffects
{
  constructor(private dataService: DataService, private actions$: Actions) { }

  @Effect()
  initEffect$: Observable<Action> = this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    map(_ => new featureActions.LoadRequestAction())
  );

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST
    ),
    startWith(new featureActions.LoadRequestAction()),
    switchMap(action =>
      this.dataService
        .getJokes()
        .pipe(
          map(
            items =>
              new featureActions.LoadSuccessAction({
                items
              })
          ),
          catchError(error =>
            observableOf(new featureActions.LoadFailureAction({ error }))
          )
        )
    )
  );

  @Effect()
  loadSuccessEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadSuccessAction>(
      featureActions.ActionTypes.LOAD_SUCCESS
    ),
    map(() => new HoaxStoreActions.HoaxBeginLoadingRequests())
  );
}
