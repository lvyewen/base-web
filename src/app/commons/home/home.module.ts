/*
 * @Author: majunfeng
 * @Date: 2018-02-10 16:16:32
 * @Last Modified by: majunfeng
 * @Last Modified time: 2018-02-10 16:32:58
 * @Intruduce: home模块开发
 */
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeNavComponent } from './home-nav/home-nav.component';


@NgModule({
    imports: [
        SharedModule,
    ],
    exports: [],
    declarations: [HomeNavComponent],
    providers: [],
})
export class HomeModule { }
