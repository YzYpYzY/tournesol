import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "java",
    loadChildren: () =>
      import("../modules/java/java.module").then(m => m.JavaModule)
  },
  {
    path: "mobile",
    loadChildren: () =>
      import("../modules/mobile/mobile.module").then(m => m.MobileModule)
  },
  {
    path: "web",
    loadChildren: () =>
      import("../modules/web/web.module").then(m => m.WebModule)
  },
  {
    path: "api",
    loadChildren: () =>
      import("../modules/api/api.module").then(m => m.ApiModule)
  },
  {
    path: "bi",
    loadChildren: () => import("../modules/bi/bi.module").then(m => m.BiModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
