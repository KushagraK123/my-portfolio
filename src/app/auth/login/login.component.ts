import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  constructor(private authService: AuthService, private router: Router) { }

  private loginSubscription: Subscription = new Subscription();

  ngOnDestroy(){
    this.loginSubscription.unsubscribe();
  }


  ngOnInit(): void {
    this.loginSubscription = this.authService.getLoginUpdateListener().subscribe(
      (user: User)=>{
       console.log("User updated" + user);
       if(user!=null && user != undefined) {
        this.router.navigate(['/admin']);
       }
       this.isLoading = false;
      }
    );
  }
  hide = true;
  isLoading=false;

  login(form: NgForm) {
    if(form.invalid) return;
    this.isLoading = true;
    let username = form.controls['userName'].value;
    let password = form.controls['password'].value;
    this.authService.login(username, password);

    form.resetForm();
  }
}
