import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private loginService: LoginserviceService) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group ( {
      userName : ['', Validators.required],
      passWord : ['', Validators.required]
    }

    );
  }

  get userName() {
    return this.loginForm.get('loginForm.userName');
  }

  get passWord() {
    return this.loginForm.get('loginForm.passWord');
  }

  onSubmit(): void{

    if (this.loginForm.invalid) {
      return;
  }

  const userName = this.loginForm.value.userName;
  console.log(this.loginForm.value);



    this.loginService.login(userName).subscribe(() => {
    const loggedInUser = localStorage.getItem('LoggedInUser') || null;
    if(!loggedInUser){
        console.log('User Not foound');
    }else{
        if( JSON.parse(loggedInUser).name === 'admin'){
          return this.router.navigateByUrl('/admin-view');
       }
       return this.router.navigateByUrl('/user-view');

    }

  });

  }
}
