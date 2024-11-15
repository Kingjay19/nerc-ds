import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense("ORg4AjUWIQA/Gnt 2VVhhQ1 Fac11JW3XNYVF2R2FJe1RzdF9DZkwgOX1dQ19hSXtTcEVhWndceXFdQmY=")

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideAnimationsAsync()
  ]
})
  .catch((err) => console.error(err));
