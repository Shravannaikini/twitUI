import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterblue'
})
export class FilterbluePipe implements PipeTransform {

  transform(info:any): string {
    
    
      let str= "";
      const arr=info.split(' ');
      console.log(arr);
      for(let i=0; i<arr.length; i++)
      {
        console.log(arr[i][0])
     
        if(arr[i][0]=="#" || arr[i].search("https")>=0) 
        {
          console.log(arr[i]);
          let strtoappend=`<a href='${arr[i].slice(1)}'>`+arr[i]+"</a>";
          arr[i]=strtoappend;
        }
      }
        for( let i=0; i<arr.length; i++)
      {
        str=str+" "+arr[i];
      }
      return str;
      }

  

 

}
