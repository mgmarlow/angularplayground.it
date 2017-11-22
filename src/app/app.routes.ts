import { Routes } from '@angular/router';
import { AboutComponent } from 'app/about/about.component';
import { IntroductionComponent } from 'app/docs/introduction/introduction.component';
import { RequirementsComponent } from 'app/docs/requirements/requirements.component';
import { InstallingComponent } from 'app/docs/installing/installing.component';
import { AngularCliComponent } from 'app/docs/angular-cli/angular-cli.component';
import { NonAngularCliComponent } from 'app/docs/non-angular-cli/non-angular-cli.component';
import { SandboxingComponent } from 'app/docs/sandboxing/sandboxing.component';
import { CustomRootNgmoduleComponent } from 'app/docs/custom-root-ngmodule/custom-root-ngmodule.component';
import { CommandBarCloseComponent } from 'app/docs/how-to/command-bar-close/command-bar-close.component';
import { CommandBarNavigationComponent } from 'app/docs/how-to/command-bar-navigation/command-bar-navigation.component';
import { CommandBarOpenComponent } from 'app/docs/how-to/command-bar-open/command-bar-open.component';
import { EmbeddingSandboxesComponent } from 'app/docs/how-to/embedding-sandboxes/embedding-sandboxes.component';
import { QuickToggleComponent } from 'app/docs/how-to/quick-toggle/quick-toggle.component';
import { SearchingForSandboxesComponent } from 'app/docs/how-to/searching-for-sandboxes/searching-for-sandboxes.component';
import { HomeComponent } from 'app/home/home.component';
import { DocsComponent } from 'app/docs/docs.component';
import { SandboxApiComponent } from 'app/docs/api/sandbox/sandbox.component';
import { CliApiComponent } from 'app/docs/api/cli/cli.component';

export const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: 'docs',
    component: DocsComponent,
    children: [
      { path: 'getting-started/introduction', component: IntroductionComponent },
      { path: 'getting-started/requirements', component: RequirementsComponent },
      { path: 'getting-started/installing', component: InstallingComponent },
      { path: 'getting-started/angular-cli', component: AngularCliComponent },
      { path: 'getting-started/non-angular-cli', component: NonAngularCliComponent },
      { path: 'api/sandbox', component: SandboxApiComponent },
      { path: 'api/cli', component: CliApiComponent },
      { path: 'how-to/sandboxing-components', component: SandboxingComponent },
      { path: 'how-to/command-bar-close', component: CommandBarCloseComponent },
      { path: 'how-to/command-bar-navigation', component: CommandBarNavigationComponent },
      { path: 'how-to/command-bar-open', component: CommandBarOpenComponent },
      { path: 'how-to/embedding-sandboxes', component: EmbeddingSandboxesComponent },
      { path: 'how-to/custom-root-ngmodule', component: CustomRootNgmoduleComponent },
      { path: 'how-to/quick-toggle', component: QuickToggleComponent },
      { path: 'how-to/searching-for-sandboxes', component: SearchingForSandboxesComponent },
      { path: '', redirectTo: 'getting-started/introduction', pathMatch: 'full' }
    ]
  },
  { path: '', component: HomeComponent }
];
