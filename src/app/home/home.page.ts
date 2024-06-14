import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router) {}

  goToFinancialPage() {
    this.router.navigate(['/financial']);
  }

  goToCameraPage() {
   this.router.navigate(['/camera']);  
  }

  
  viewLocation(){
    this.router.navigate(['/map']);  
  }


}
