import { TestBed } from '@angular/core/testing';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

describe('AppComponent', () => {
  const mockRoutes: Routes = [
    {
      path: 'login',
      component: LoginComponent,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(mockRoutes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
