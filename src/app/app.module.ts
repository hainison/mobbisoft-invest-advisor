import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/loginX/login.component';

import { CalendarModule } from 'primeng/calendar';
import { ToolbarModule } from 'primeng/toolbar';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ListboxModule } from 'primeng/listbox';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { GraficoEvolucaoPatrimonioComponent } from './component/grafico-evolucao-patrimonio/grafico-evolucao-patrimonio.component';
import { NgChartsModule } from 'ng2-charts';
import { ListaClasseAtivoComponent } from './component/lista-classe-ativo/lista-classe-ativo.component';
import { IncluirAtivoComponent } from './component/incluir-ativo/incluir-ativo.component';
import { DetalheClasseAtivosComponent } from './component/detalhe-classe-ativos/detalhe-classe-ativos.component';


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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgChartsModule,
    ListboxModule,
    CalendarModule,
    ToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
