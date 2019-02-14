import * as HoaxActions from './actions';
import { initialState, IState } from './state';

export function hoaxReducer (state = initialState, action: HoaxActions.Actions): IState
{
    switch (action.type)
    {
        case HoaxActions.HoaxActionTypes.HOAX_BEGIN_LOADING_REQUESTS:
            const s = {
                ...state
            };

            return s;

        default:
            return state;
    }
}
