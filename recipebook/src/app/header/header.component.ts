import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticate:boolean;
  constructor(public authservice:AuthService) { }

  ngOnInit() {
    this.authenticate = this.authservice.getIsAuth();
    this.authservice.getAuthStatus().subscribe((auth:boolean)=>{
      this.authenticate = auth;
    })
  }
  logout(){
    this.authservice.logout();
  }

}
