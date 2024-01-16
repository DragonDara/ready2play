import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './shared/layout/default/default.component';
import {GridComponent} from './shared/components/grid/grid.component';
import {MapHallComponent} from "./features/map-hall/map-hall.component";

const routes: Routes = [{
  path: '',
  component: DefaultComponent, children: [{
      path: 'posts',
      component: GridComponent
   },
   {
      path: 'map-hall', component: MapHallComponent
    },
    // {
    //   path: 'map-hall', component: MapHallComponent
    // },
    // {
    //   path: 'map-hall', component: MapHallComponent
    // }
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
