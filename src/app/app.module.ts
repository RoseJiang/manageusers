import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms'
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';
import { UserService } from './services/user.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingComponent } from './components/setting/setting.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AngularFireModule } from  'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';

const appRoutes: Routes  = [
   { path: '', component: HomeComponent},
   { path: 'register', component: RegisterComponent},
   { path: 'login', component: LoginComponent},
   { path: 'add-user', component: AddUserComponent},
   { path: 'user/:id', component: UserDetailComponent},
   { path: 'edit-user/:id', component: EditUserComponent}
];

const firebaseConfig = {
    apiKey: "AIzaSyAk4KMUjBSihrjB5z3hiAJ4MNotfuDwbII",
    authDomain: "manageusers-b9dc1.firebaseapp.com",
    databaseURL: "https://manageusers-b9dc1.firebaseio.com",
    projectId: "manageusers-b9dc1",
    storageBucket: "manageusers-b9dc1.appspot.com",
    messagingSenderId: "416181401656"
  };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserDetailComponent,
    AddUserComponent,
    EditUserComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    UserService,
    AngularFireAuth,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
