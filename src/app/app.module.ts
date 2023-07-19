
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatIconModule } from '@angular/material/icon';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { GraficoEvolucaoPatrimonioComponent } from './component/grafico-evolucao-patrimonio/grafico-evolucao-patrimonio.component';
import { NgChartsModule } from 'ng2-charts';
import { ListaClasseAtivoComponent } from './component/lista-classe-ativo/lista-classe-ativo.component';
import { IncluirAtivoComponent } from './component/incluir-ativo/incluir-ativo.component';
import { DetalheClasseAtivosComponent } from './component/detalhe-classe-ativos/detalhe-classe-ativos.component';
import { AutenticacaoService } from './component/autenticacao/autenticacao.service';
import { HttpClientModule } from '@angular/common/http';
import { NovoUsuarioComponent } from './component/novo-usuario/novo-usuario.component';
import { GroupByPipe } from './component/detalhe-classe-ativos/group-by.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    HeaderComponent,
    GraficoEvolucaoPatrimonioComponent,
    ListaClasseAtivoComponent,
    IncluirAtivoComponent,
    DetalheClasseAtivosComponent,
    NovoUsuarioComponent,
    GroupByPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgChartsModule,
    MatSelectModule,
    MatToolbarModule,
    HttpClientModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
