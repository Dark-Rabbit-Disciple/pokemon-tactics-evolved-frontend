import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth/login-page.component';
import { BattleComponent } from './battle/battle.component';
import { HttpClientModule } from  '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducer/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartyWindowComponent } from './party-window/party-window.component';
import { BattleOptionListComponent } from './battle-option-list/battle-option-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    BattleComponent,
    PartyWindowComponent,
    BattleOptionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ user: userReducer }),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
