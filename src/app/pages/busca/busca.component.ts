import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';

import { BannerComponent } from '../../shared/banner/banner.component';
import { PassagensService } from './../../core/services/passagens.service';
import { ContainerComponent } from '../../shared/container/container.component';
import { FormComponent } from '../../shared/form/form.component';
import { PassagemInfoComponent } from '../../shared/passagem-info/passagem-info.component';
import { FormService } from '../../core/services/form.service';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [
    BannerComponent,
    ContainerComponent,
    FormComponent,
    CommonModule,
    PassagemInfoComponent,
  ],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss',
})
export class BuscaComponent implements AfterViewInit {
  private passagensService = inject(PassagensService);
  private formService = inject(FormService);

  tickets$ = this.passagensService.tickets$.pipe(
    tap((res) => console.log(res)),
  );

  ngAfterViewInit(): void {
    this.searchTickets();
  }

  searchTickets() {
    console.log('searchTickets emmited');
    const searchData = this.formService.getSearchData();
    this.passagensService.search(searchData);
  }
}
