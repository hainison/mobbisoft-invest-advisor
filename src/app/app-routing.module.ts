import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';
import { IncluirAtivoComponent } from './component/incluir-ativo/incluir-ativo.component';
import { DetalheClasseAtivosComponent } from './component/detalhe-classe-ativos/detalhe-classe-ativos.component';
import { NovoUsuarioComponent } from './component/novo-usuario/novo-usuario.component';
import { AuthGuard } from './component/autenticacao/autenticacao.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'incluir-ativo', component: IncluirAtivoComponent },
  { path: 'detalhe-classe-ativos', component: DetalheClasseAtivosComponent },
  { path: 'novo-usuario', component: NovoUsuarioComponent },


  // outras rotas
  { path: '**', component: NotFoundComponent } // Rota 404 para rotas inexistentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
