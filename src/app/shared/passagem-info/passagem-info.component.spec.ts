import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemInfoComponent } from './passagem-info.component';

describe('PassagemInfoComponent', () => {
  let component: PassagemInfoComponent;
  let fixture: ComponentFixture<PassagemInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassagemInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PassagemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
