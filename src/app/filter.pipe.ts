import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  flag : any = false;

  transform(value: any, args?: any,args3?: any): any {
      if(!value || !args){
        return value;
      }
    
    return value.filter((it,index)=>{
      this.flag = false;
        for(let j=0;j<args3[index].length;j++){
          if((args3[index][j].toLowerCase().indexOf(args.toLowerCase()) > -1)){
            this.flag = true;
          }
        }  
      return this.flag;
    });
  }

}
