import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'create';
  data : any = [];
  filteredArr : any = [];

  ngOnInit(){
    this.data = [{'name':'shashi','age':26,'addr':'nsp'},{'name':'Amit','age':25,'addr':'vasai'},{'name':'Heena','age':27,'addr':'charni'}];
    this.filteredArr = this.data.map(obj => {
      return [obj.name,obj.addr];
    });
  }
}
