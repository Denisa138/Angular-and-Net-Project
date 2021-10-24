import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AutheService } from 'src/app/services/authe.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AutheService,
    private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm);
    const token = this.authService.authUser(loginForm.value);

    if(token){
      loginForm.reset();
      localStorage.setItem('token', token.userName);
      this.alertify.success('Login succesfully');
      this.router.navigate(['/']);
    }else{
      this.alertify.error('Failed login');
    }
  }

}
