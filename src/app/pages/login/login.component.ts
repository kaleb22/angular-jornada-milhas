import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { take } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

import { BannerComponent } from '../../shared/banner/banner.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    BannerComponent,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(): void {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService
      .auth(email, password)
      .pipe(take(1))
      .subscribe({
        next: (value) => {
          this.router.navigateByUrl('/home');
        },
        error: (err) => {
          console.log('login error ', err);
        },
      });
  }
}
