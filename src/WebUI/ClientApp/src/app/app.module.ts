import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { DatabaseAreaComponent } from './database-area/database-area.component';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SchooledApplication } from './schooled-app/schooled-app.component';
import { CounterComponent } from './counter/counter.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { TokenComponent } from './token/token.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading-page/loading-page.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ResourceGroupCreateComponent } from './resource-group/add/create/resource-group-create.component';
import { ResourceGroupAddComponent } from './resource-group/add/resource-group-add.component';
import { ResourceGroupComponent } from './resource-group/resource-group.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { ManagRoleComponent } from './resource-group/role/manage-role/manage-role.component';
import { ResourceComponent } from './resource-group/resource/resource.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    TokenComponent,
    DatabaseAreaComponent,
    SchooledApplication,
    HomeComponent,
    LoadingComponent,
    ResourceGroupCreateComponent,
    ResourceGroupAddComponent,
    ResourceGroupComponent,
    ManagRoleComponent,
    ResourceComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CalendarModule,
    CommonModule,
    TabViewModule,
    ProgressSpinnerModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    SplitButtonModule,
    ToastModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
