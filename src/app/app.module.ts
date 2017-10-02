import { RequirementsComponent } from './docs/requirements/requirements.component';
import { NonAngularCliComponent } from './docs/non-angular-cli/non-angular-cli.component';
import { SoCreateLogoComponent } from './shared/socreate-logo/socreate-logo.component';
import { PlaygroundLogoComponent } from './shared/playground-logo/playground-logo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MarkdownComponent } from './shared/markdown.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs/docs.component';
import { GithubCornerComponent } from './shared/github-corner.component';
import { IntroductionComponent } from './docs/introduction/introduction.component';
import { InstallingComponent } from './docs/installing/installing.component';
import { BootstrappingComponent } from './docs/bootstrapping/bootstrapping.component';
import { CliComponent } from './docs/cli/cli.component';
import { AngularCliComponent } from './docs/angular-cli/angular-cli.component';
import { SandboxingComponent } from './docs/sandboxing/sandboxing.component';
import { ApiComponent } from './docs/api/api.component';
import { CustomRootNgmoduleComponent } from './docs/custom-root-ngmodule/custom-root-ngmodule.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: 'docs',
    component: DocsComponent,
    children: [
      { path: 'getting-started/introduction', component: IntroductionComponent },
      { path: 'getting-started/requirements', component: RequirementsComponent },
      { path: 'getting-started/installing', component: InstallingComponent },
      { path: 'getting-started/bootstrapping', component: BootstrappingComponent },
      { path: 'getting-started/cli', component: CliComponent },
      { path: 'getting-started/angular-cli', component: AngularCliComponent },
      { path: 'getting-started/non-angular-cli', component: NonAngularCliComponent },
      { path: 'sandboxing/sandboxing-components', component: SandboxingComponent },
      { path: 'sandboxing/api', component: ApiComponent },
      { path: 'sandboxing/custom-root-ngmodule', component: CustomRootNgmoduleComponent },
      { path: '', redirectTo: 'getting-started/introduction', pathMatch: 'full' }
    ]
  },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundLogoComponent,
    SoCreateLogoComponent,
    GithubCornerComponent,
    MarkdownComponent,
    AboutComponent,
    HomeComponent,
    DocsComponent,
    IntroductionComponent,
    InstallingComponent,
    BootstrappingComponent,
    CliComponent,
    AngularCliComponent,
    NonAngularCliComponent,
    SandboxingComponent,
    ApiComponent,
    CustomRootNgmoduleComponent,
    RequirementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
