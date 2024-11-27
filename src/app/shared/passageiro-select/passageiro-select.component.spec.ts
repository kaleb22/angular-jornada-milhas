import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageiroSelectComponent } from './passageiro-select.component';

describe('PassageiroSelectComponent', () => {
  let component: PassageiroSelectComponent;
  let fixture: ComponentFixture<PassageiroSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassageiroSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PassageiroSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
