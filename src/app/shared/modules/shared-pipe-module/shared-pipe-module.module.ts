import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayTolowPipe } from '../../pipes/array-tolow.pipe';
import { ArrayTohighPipe } from '../../pipes/array-tohigh.pipe';



@NgModule({
  declarations: [ArrayTolowPipe,
    ArrayTohighPipe],
  exports: [ArrayTolowPipe,
    ArrayTohighPipe],
  imports: [
    CommonModule
  ]
})
export class SharedPipeModuleModule { 
  static forRoot() {
    return {
        ngModule: SharedPipeModuleModule,
        providers: [],
    };
  }
}
