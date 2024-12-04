import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { AuthService } from './../../core/services/auth.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  const mockRoutes: Routes = [
    {
      path: 'login',
      component: LoginComponent,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        provideHttpClient(),
        AuthService,
        importProvidersFrom([BrowserAnimationsModule]),
        provideRouter(mockRoutes),
      ],
    }).compileComponents();

    authService = TestBed.inject(AuthService);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
