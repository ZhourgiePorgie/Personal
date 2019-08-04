import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { VlogPageComponent } from './pages/vlog-page/vlog-page.component';
import { ResourcePageComponent } from './pages/resource-page/resource-page.component';


const routes: Routes = [
  { path: 'about', component: AboutPageComponent },
  { path: 'vlogs', component: VlogPageComponent },
  { path: 'resources', component: ResourcePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutPageComponent, VlogPageComponent, ResourcePageComponent]
