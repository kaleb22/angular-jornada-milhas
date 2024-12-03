import { FormControl } from '@angular/forms';

export interface Promocao {
  id: number;
  destino: string;
  imagem: string;
  preco: number;
}

export interface Estado {
  id: number;
  nome: string;
  sigla: string;
}

export interface FormBusca {
  idaEvolta: FormControl<boolean | null>;
  origem: FormControl<string | null>;
  destino: FormControl<string | null>;
  tipo: FormControl<string | null>;
  adultos: FormControl<number | null>;
  criancas: FormControl<number | null>;
  bebes: FormControl<number | null>;
}

export interface Depoimento {
  id: number;
  texto: string;
  autor: string;
  avatar: string;
}

export interface User {
  nome: string;
  nascimento: string;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
  genero: string;
  cidade: string;
  estado: Estado;
}

export interface Token {
  access_token: string;
}
