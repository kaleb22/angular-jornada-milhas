import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfilComponent } from './perfil.component';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilComponent, MatNativeDateModule],
      providers: [
        provideHttpClient(),
        importProvidersFrom([BrowserAnimationsModule]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
