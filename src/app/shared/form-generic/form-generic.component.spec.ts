import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatNativeDateModule } from '@angular/material/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

import { FormGenericComponent } from './form-generic.component';

describe('FormGenericComponent', () => {
  let component: FormGenericComponent;
  let fixture: ComponentFixture<FormGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGenericComponent, MatNativeDateModule],
      providers: [
        provideHttpClient(),
        importProvidersFrom([BrowserAnimationsModule]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
