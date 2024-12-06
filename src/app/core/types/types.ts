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
  dataIda: FormControl<Date | null>;
  dataVolta: FormControl<Date | null>;
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

export interface ResultadoBusca {
  paginaAtual: number;
  ultimaPagina: number;
  total: number;
  precoMin: number;
  precoMax: number;
  resultado: Passagem[];
}

export interface Passagem {
  tipo: string;
  precoIda: number;
  precoVolta: number;
  taxaEmbarque: number;
  conexoes: number;
  tempoVoo: number;
  origem: Origem;
  destino: Destino;
  companhia: Companhia;
  dataIda: string;
  dataVolta: string;
  total: number;
  orcamento: Orcamento[];
}

export interface Origem {
  id: number;
  nome: string;
  sigla: string;
}

export interface Destino {
  id: number;
  nome: string;
  sigla: string;
}

export interface Companhia {
  id: number;
  nome: string;
}

export interface Orcamento {
  descricao: string;
  preco: number;
  taxaEmbarque: number;
  total: number;
}

export interface DadosBusca {
  somenteIda?: boolean;
  passageirosAdultos?: number;
  passageirosCriancas?: number;
  passageirosBebes?: number;
  tipo?: string;
  origemId?: number;
  destinoId: number;
  dataIda: string;
  dataVolta?: string;
  precoMin?: number;
  precoMax?: number;
  conexoes?: number;
  tempoVoo?: number;
  companhiasId?: number[];
  pagina: number;
  porPagina: number;
}
