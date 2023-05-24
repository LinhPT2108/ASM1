import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { QuestionComponent } from './question/question.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SlideShowComponent } from './slide-show/slide-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    QuestionComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    ListCourseComponent,
    PageNotFoundComponent,
    ContentComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    SlideShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
