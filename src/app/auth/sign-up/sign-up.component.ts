import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user = new User();

  constructor(private authService: AuthService,private _router: Router,) { }

  ngOnInit(): void {
  }

  register(user: User) {
    this.authService.register(user).subscribe(
        (response) => {

        // Navigate to the confirmation required page
        this._router.navigateByUrl('sign-in');
    },
    (response) => {

        // Re-enable the form
        
    }
);
};
  

}
