import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponentx {
  email: string;
  senha: string;
  emailError: string;
  senhaError: string;

  constructor(private router: Router) {
    this.email = '';
    this.senha = '';
    this.emailError = '';
    this.senhaError = '';
  }

  fazerLogin() {
    this.emailError = '';
    this.senhaError = '';

    // Validar campos
    if (!this.email) {
      this.emailError = 'Campo de email em branco';
    }

    if (!this.senha) {
      this.senhaError = 'Campo de senha em branco';
    }

    // Lógica de autenticação aqui
    if (this.email && this.senha) {
      console.log('Login bem-sucedido!');
      // Redirecionar para outra página, fazer alguma ação, etc.
      this.router.navigate(['/home']);
    }
  }
}


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;

//   constructor(private formBuilder: FormBuilder, private router: Router) {
//     this.loginForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required]]
//     });
//   }

//   ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required]]
//     });
//   }

//   get email() {
//     return this.loginForm.get('email');
//   }

//   get password() {
//     return this.loginForm.get('password');
//   }

//   login() {
//     if (this.loginForm.valid) {
//       // Lógica de login aqui
//       this.router.navigate(['/home']);
//     }
//   }
// }










