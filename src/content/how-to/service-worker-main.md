###### main.playground.ts
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PlaygroundModule } from 'angular-playground';
import { environment } from './environments/environment';

PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: [
      environment.production
        ? ServiceWorkerModule.register('/ngsw-worker.js')
        : []
    ]
  });

platformBrowserDynamic().boostrapModule(PlaygroundModule);
```