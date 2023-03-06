import { Type, enableProdMode } from "@angular/core";
import { environment } from "./environment/environment.prod";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/components/app/app.component";

const production = environment.production;

export const startApp = (fromComponent: Type<unknown> = AppComponent) => {
  if (!production) {
    return bootstrapApplication(fromComponent);
  }
  enableProdMode();
  return bootstrapApplication(fromComponent);
};

startApp()
  .then(() => {
    console.log(!production ? "Welcome to Dev Mode" : undefined);
  })
  .catch((err) => console.error(err));
