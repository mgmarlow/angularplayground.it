import { SearchingForSandboxesComponent } from './docs/how-to/keyboard-shortcuts/searching-for-sandboxes/searching-for-sandboxes.component';
import { QuickToggleComponent } from './docs/how-to/keyboard-shortcuts/quick-toggle/quick-toggle.component';
import { EmbeddingSandboxesComponent } from './docs/how-to/embedding-sandboxes/embedding-sandboxes.component';
import { CommandBarOpenComponent } from './docs/how-to/keyboard-shortcuts/command-bar-open/command-bar-open.component';
import { CommandBarNavigationComponent } from './docs/how-to/keyboard-shortcuts/command-bar-navigation/command-bar-navigation.component';
import { CommandBarCloseComponent } from './docs/how-to/keyboard-shortcuts/command-bar-close/command-bar-close.component';
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
import { GithubCornerComponent } from './shared/github-corner.component';
import { SlideShowComponent } from './home/slide-show/slide-show.component';
import { appRoutes } from './app.routes';
import { DocsComponent } from 'app/docs/docs.component';
import { SandboxApiComponent } from 'app/docs/api/sandbox/sandbox.component';
import { IntroductionComponent } from 'app/docs/getting-started/introduction/introduction.component';
import { InstallingComponent } from 'app/docs/getting-started/installing/installing.component';
import { AngularCliComponent } from 'app/docs/getting-started/angular-cli/angular-cli.component';
import { NonAngularCliComponent } from 'app/docs/getting-started/non-angular-cli/non-angular-cli.component';
import { SandboxingComponent } from 'app/docs/how-to/sandboxing/sandboxing.component';
import { ConfigurationComponent } from 'app/docs/api/configuration/configuration.component';
import { RunTheCliComponent } from 'app/docs/how-to/run-the-cli/run-the-cli.component';
import { ReporterFormatsComponent } from 'app/docs/api/reporter-formats/reporter-formats.component';
import { CheckingUtilityComponent } from 'app/docs/how-to/checking-utility/checking-utility.component';
import { KeyboardShortcutsComponent } from 'app/docs/how-to/keyboard-shortcuts/keyboard-shortcuts.component';
import { BuildProdComponent } from 'app/docs/how-to/build-prod/build-prod.component';
import { ConfigurationPluginsComponent } from './docs/api/configuration-plugins/configuration-plugins.component';


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
    RunTheCliComponent,
    ReporterFormatsComponent,
    CheckingUtilityComponent,
    AngularCliComponent,
    NonAngularCliComponent,
    KeyboardShortcutsComponent,
    SandboxingComponent,
    SandboxApiComponent,
    ConfigurationComponent,
    ConfigurationPluginsComponent,
    CommandBarCloseComponent,
    CommandBarNavigationComponent,
    CommandBarOpenComponent,
    EmbeddingSandboxesComponent,
    QuickToggleComponent,
    SearchingForSandboxesComponent,
    SlideShowComponent,
    BuildProdComponent
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
