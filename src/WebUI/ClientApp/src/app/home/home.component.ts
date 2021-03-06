import { Component, OnInit } from '@angular/core';
import { AccountsClient, CreateAccountCommand, CheckLoginInfoCommand, AuthorizationCheckCommand} from '../web-api-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = true;

  constructor(private _accountsClient: AccountsClient, private _router: Router) { }

  ngOnInit() {
    var retrievedObject = localStorage.getItem('userData');
    this.loading = true;

    if (retrievedObject != null) {
      var userUid = JSON.parse(retrievedObject)['userUIN'];
      var token = JSON.parse(retrievedObject)['token'];

      if (userUid != undefined && token != undefined && userUid != null && token != null) {
        var authCheck = new AuthorizationCheckCommand({
          userUid: userUid,
          token: token,
          isAdminArea: true
        })

        this._accountsClient.authorized(authCheck).subscribe(result => {
          if (result != 0) {
            localStorage.removeItem('userData');
            this.loading = false;
          }
          else {
            this._router.navigateByUrl("app-user");
            this.loading = false;
          }
        })
      } else {
        this.loading = false;
      }
    } else {
      this.loading = false;
    }
  }

  usernameBad = false;
  passwordBad = false;
  failedLogin = false;
  registrationForm = false;
  isAdminLogin = false;
  invalidInputs = [];

  public login(username, password) {
    var Account = new CheckLoginInfoCommand({
      username: username,
      password: password,
      isAdminLogin: this.isAdminLogin,
    });

    this._accountsClient.login(Account).subscribe(result => {
      console.log(result);
      if (result != null && this.isAdminLogin) {
        // Put the object into storage
        localStorage.setItem('userData', JSON.stringify(result));
        this._router.navigateByUrl("database");
      }
      else if (result != null && !this.isAdminLogin) {
        // Put the object into storage
        localStorage.setItem('userData', JSON.stringify(result));
        this._router.navigateByUrl("app-user");
      }

      // Retrieve the object from storage
      //var retrievedObject = localStorage.getItem('userData');
      //console.log('retrievedObject: ', JSON.parse(retrievedObject));
    });

  }

  public register(inputUsername, inputPassword, inputEmail, inputPhone, inputToken) {
    var newAccount = new CreateAccountCommand({
      username: inputUsername,
      password: inputPassword,
      email: inputEmail,
      phoneNumber: inputPhone,
      token: inputToken
    });

    this._accountsClient.create(newAccount).subscribe(result => {
      this.registrationForm = result != 0;
      if (result != 0) {

      }
    });
  }

  public routeRegister() {
    this.registrationForm = !this.registrationForm;
  }

  public forgotPassword() {
  }

  public checkUsername(username) {
    if (username != '') {
      this.usernameBad = true;
    }
  }

  public checkPassword(password) {
    this.passwordBad = this.checkValidInputs(password);
  }

  private checkValidInputs(input) {
    if (input.length <= 6)
      return false;
    return true;
  }

}
