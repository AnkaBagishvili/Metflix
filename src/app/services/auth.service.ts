import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  private passwordRegex = /^.{8,}$/;

  register(userRegistrationObj: User): { success: boolean; message: string } {
    const isLocalData = localStorage.getItem('MetflixAcc');
    const localArray: User[] = isLocalData ? JSON.parse(isLocalData) : [];

    const isDuplicate = localArray.some(
      (user) =>
        user.emailId === userRegistrationObj.emailId ||
        user.userName === userRegistrationObj.userName
    );

    if (isDuplicate) {
      return {
        success: false,
        message: 'User already exists.',
      };
    }

    if (!this.emailRegex.test(userRegistrationObj.emailId)) {
      return {
        success: false,
        message: 'Enter a valid Email',
      };
    }
    if (!this.passwordRegex.test(userRegistrationObj.password)) {
      return {
        success: false,
        message: 'Password must be at least 8 symbols long',
      };
    }

    localArray.push(userRegistrationObj);
    localStorage.setItem('MetflixAcc', JSON.stringify(localArray));
    return {
      success: true,
      message: 'Registration successful!',
    };
  }

  login(userLogInObj: Partial<User>): boolean {
    const isLocalData = localStorage.getItem('MetflixAcc');
    if (isLocalData) {
      const users: User[] = JSON.parse(isLocalData);
      return users.some(
        (user) =>
          user.emailId === userLogInObj.emailId &&
          user.password === userLogInObj.password
      );
    }
    return false;
  }
}
