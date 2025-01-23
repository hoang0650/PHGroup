import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NewsComponent } from './components/news/news.component';
import { NewsArticleDetailComponent } from './components/news-article-detail/news-article-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { RecruitmentComponent } from './components/recruitment/recruitment.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: MainComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact", component: ContactComponent },
  { path: "news", component: NewsComponent },
  { path: "detail", component: NewsArticleDetailComponent },
  { path: "recruitment", component: RecruitmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled', // Scrolls back to the top after navigation
    anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
