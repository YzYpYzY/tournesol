import { IdeeComponent } from "./idee.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DbschemaComponent } from "./dbschema/dbschema.component";

const routes: Routes = [
  { path: "", component: IdeeComponent },
  { path: "db/schema", component: DbschemaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeeRoutingModule {}
