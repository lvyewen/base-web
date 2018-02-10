import { DateMomentPipe } from './date-moment.pipe';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImgComponent } from './img/img.component';
import { TextFilteringPipe } from './text-filtering.pipe';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ImgComponent,
    TextFilteringPipe,
    DateMomentPipe,
  ],
  declarations: [
    ImgComponent,
    TextFilteringPipe,
    DateMomentPipe,
  ],
  providers: []
})
export class SharedModule { }
