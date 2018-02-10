/*
 * @Author: majunfeng
 * @Date: 2018-02-10 16:25:15
 * @Last Modified by: majunfeng
 * @Last Modified time: 2018-02-10 16:25:35
 * @Intruduce: 主路由模块
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeNavComponent } from './commons';

const routes: Routes = [
  { path: '', component: HomeNavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
