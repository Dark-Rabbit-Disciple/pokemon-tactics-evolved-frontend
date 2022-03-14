import { Component, Inject, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http-service.service';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Login } from '../store/actions/user/user.actions';
import { AppState } from '../store/state/app.state';
import { selectUser, selectUserName } from '../store/selectors/user.selectors';
import { User } from '../model/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { login } from '../store/actions/auth/auth.action';
// import { AppState } from '../store/app.states';
// import { State } from '../store/reducer/auth.reducer';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css', '../../nes.min.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: any;
  isSubmitted  =  false;
  // authState$: Observable<State>

  constructor(private store: Store<AppState>,  private formBuilder: FormBuilder) {

  }

  get formControls() { return this.loginForm.controls; }

  login(){
    this.store.dispatch(Login(this.loginForm.value));
  }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}