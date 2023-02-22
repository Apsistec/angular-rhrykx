import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExtraPageComponent } from './extra-page.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: ExtraPageComponent }])],
  declarations: [ExtraPageComponent],
  exports: [ExtraPageComponent],
})
export class ExtraPageModule {}
