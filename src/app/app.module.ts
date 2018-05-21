import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserService } from './services/user.service';
import { ErrorComponent } from './error/error.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    UsersListComponent,
    ErrorComponent, CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
