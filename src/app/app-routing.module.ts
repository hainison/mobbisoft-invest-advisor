import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/loginX/login.component';
import { IncluirAtivoComponent } from './component/incluir-ativo/incluir-ativo.component';
import { DetalheClasseAtivosComponent } from './component/detalhe-classe-ativos/detalhe-classe-ativos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'incluir-ativo', component: IncluirAtivoComponent },
  { path: 'detalhe-classe-ativos', component: DetalheClasseAtivosComponent },


  // outras rotas
  { path: '**', component: NotFoundComponent } // Rota 404 para rotas inexistentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
