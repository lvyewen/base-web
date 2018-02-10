/*
 * @Author: majunfeng
 * @Date: 2017-12-12 15:18:34
 * @Last Modified by: majunfeng
 * @Last Modified time: 2018-02-10 15:58:14
 * intructer: 过滤富文本的通道
 */
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'textFiltering'
})

export class TextFilteringPipe implements PipeTransform {
    constructor( private sanitizer: DomSanitizer ) { }
    transform(value: any, args?: any): any {
        value = value || '暂无获取内容';
        const reg = /&lt;/g;
        const reg2 = /&gt;/g;
        const reg3 = /&quot;/g;
        const reg4 = /&amp;/g;
        value = value.replace(reg, '<');
        value = value.replace(reg2, '>');
        value = value.replace(reg3, '"');
        value = value.replace(reg4, '&');
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
