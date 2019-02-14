import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HoaxEffects } from './effects';
import { hoaxReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
      CommonModule,
        StoreModule.forFeature(
          'hoax',
          hoaxReducer
      ),
      EffectsModule.forFeature([
          HoaxEffects
      ])
    ],
    providers: [
        HoaxEffects
    ]
})
export class HoaxStoreModule { }
