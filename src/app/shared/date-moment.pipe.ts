/*
 * @Author: majunfeng
 * @Date: 2017-12-14 11:20:42
 * @Last Modified by: majunfeng
 * @Last Modified time: 2018-02-10 15:55:33
 */
import { Pipe, PipeTransform } from '@angular/core';
declare let moment: any;

@Pipe({
    name: 'dateMoment'
})

export class DateMomentPipe implements PipeTransform {
    transform(value: any, format?: any): any {
        if (!value) { return ''; }
        format = format || 'YYYY-MM-DD HH:mm:ss';
        return moment(value).format(format);
    }
}
