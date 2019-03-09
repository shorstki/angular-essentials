import {NgModule} from '@angular/core';
import {CreateCharacterComponent} from './create-character.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: '', component: CreateCharacterComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateCharacterComponent]
})
export class CreateCharacterModule {}
