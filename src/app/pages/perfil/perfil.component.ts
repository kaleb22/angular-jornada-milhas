import { Component, inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';

import { BannerComponent } from '../../shared/banner/banner.component';
import { FormGenericComponent } from '../../shared/form-generic/form-generic.component';
import { CadastroService } from '../../core/services/cadastro.service';
import { User } from '../../core/types/types';
import { FormGenericService } from '../../core/services/form-generic.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [BannerComponent, FormGenericComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
})
export class PerfilComponent implements OnInit {
  private cadastroService = inject(CadastroService);
  private formGenericService = inject(FormGenericService);
  private router = inject(Router);
  private userService = inject(UserService);

  title: string = '';
  token: string;
  user: User;
  form: FormGroup | null;

  ngOnInit(): void {
    this.cadastroService
      .getProfile()
      .pipe(take(1))
      .subscribe((res) => {
        this.title = `Olá, ${res.nome}!`;
        this.user = res;
        this.loadForm();
      });
  }
  private loadForm(): void {
    this.form = this.formGenericService.getForm();
    this.form?.patchValue({
      nome: this.user.nome,
      nascimento: this.user.nascimento,
      cpf: this.user.cpf,
      telefone: this.user.telefone,
      email: this.user.email,
      genero: this.user.genero,
      cidade: this.user.cidade,
      estado: this.user.estado,
    });
  }

  edit(): void {
    const userData: User = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      genero: this.form?.value.genero,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado,
      senha: this.form?.value.senha,
    };
    this.cadastroService
      .updateProfile(userData)
      .pipe(take(1))
      .subscribe({
        next: () => {
          alert('data updated successfully');
          this.router.navigateByUrl('/home');
        },
        error: (e) => console.error(e),
      });
  }

  signOut(): void {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
}
