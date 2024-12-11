import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroComponent } from './erro.component';
import { provideRouter, Routes } from '@angular/router';

describe('ErroComponent', () => {
  let component: ErroComponent;
  let fixture: ComponentFixture<ErroComponent>;
  const mockRoutes: Routes = [
    {
      path: 'error',
      component: ErroComponent,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErroComponent],
      providers: [provideRouter(mockRoutes)],
    }).compileComponents();

    fixture = TestBed.createComponent(ErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
