import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './dashboard/card/card.component';
import { EventCardComponent } from './dashboard/event-card/event-card.component';
import { FilterBarComponent } from './dashboard/filter-bar/filter-bar.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EventComponent } from './event/event.component';
import { CharityComponent } from './charity/charity.component';
import { CommonModule } from '@angular/common';
import { CharityDashboardComponent } from './charity-dashboard/charity-dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthServiceService } from './services/auth-service.service';

const appRoute : Routes = [
{path: 'aboutus', component : AboutusComponent},
{path:'', component : MainComponent},
{path:'login', component : LoginComponent},
{path:'dashboard', component:DashboardComponent},
{path:'notFound', component: FourOhFourComponent},
{path:'event/:id',component : EventComponent},
{path:'charity/:id',component : CharityComponent},
{path:'charitydashboard/:id',canActivate:[AuthGuard],component:CharityDashboardComponent},
{path:'**', redirectTo:'/notFound'}
]

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    MainComponent,
    AboutusComponent,
    DashboardComponent,
    CardComponent,
    EventCardComponent,
    FilterBarComponent,
    FourOhFourComponent,
    EventComponent,
    CharityComponent,
    CharityDashboardComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [
    AuthServiceService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
