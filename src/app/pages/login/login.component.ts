import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isLoginView: boolean = true;

  userRegistrationObj: User = {
    userName: '',
    password: '',
    emailId: '',
  };
  userLogInObj: Partial<User> = {
    password: '',
    emailId: '',
  };

  private router = inject(Router);
  private authService = inject(AuthService);

  onRegister() {
    const result = this.authService.register(this.userRegistrationObj);

    if (result.success) {
      alert(result.message);
      this.router.navigateByUrl('browse');
    } else {
      alert(result.message);
    }
  }

  onLogin() {
    const isUserFound = this.authService.login(this.userLogInObj);
    if (isUserFound) {
      this.router.navigateByUrl('browse');
    } else {
      alert('User is not found');
    }
  }
}
