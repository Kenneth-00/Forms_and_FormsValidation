import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  
  // constructor(private route: Router){}

  // Currentnav: string = '';
  
  
  ngOnInit(): void {
  }
  // newClass(current:string){
  //   this.Currentnav = current;
  //   this.route.navigateByUrl('/formfield');
  // }

}
