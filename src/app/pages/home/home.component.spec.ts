import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatNativeDateModule } from '@angular/material/core';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { PromocaoService } from '../../core/services/promocao.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let promocaoService: PromocaoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, MatNativeDateModule],
      providers: [
        PromocaoService,
        importProvidersFrom([BrowserAnimationsModule]),
        provideHttpClient(),
      ],
    }).compileComponents();

    promocaoService = TestBed.inject(PromocaoService);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
