import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { CounterComponent } from './counter/counter.component';
import { DatabaseAreaComponent } from './database-area/database-area.component';
import { HomeComponent } from './home/home.component';
import { SchooledApplication } from './schooled-app/schooled-app.component';
import { TokenComponent } from './token/token.component';

export const routes: Routes = [

  //{ path: 'counter', component: CounterComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'database', component: DatabaseAreaComponent },
  { path: 'app-user', component: SchooledApplication }
  //{ path: 'token', component: TokenComponent, canActivate: [AuthorizeGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
