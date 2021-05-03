import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}
   userName = "";

  
  ngOnInit(): void {
    if(this.authService.getUserName() == null || this.authService.getUserName()!!.length == 0) {
      this.router.navigate(['/login']);
    }
    this.userName = this.authService.getUserName()!!;
  }

}
