import { FormControl } from '@angular/forms';

export interface Promocao {
  id: number;
  destino: string;
  imagem: string;
  preco: number;
}

export interface Estados {
  id: number;
  nome: string;
  sigla: string;
}

export interface FormBusca {
  idaEvolta: FormControl<boolean | null>;
  origem: FormControl<string | null>;
  destino: FormControl<string | null>;
}
