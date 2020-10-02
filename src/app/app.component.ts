import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'credit-card-form';
  message:any;
  submit = false;
  ngOnInit(){
    this.loadScript('../assets/js/jquery.payform.min.js');
     this.loadScript('../assets/js/demo.js');
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  onSubmit(){
        this.message = " Details Submitted";
        this.submit = true;
  }
}
