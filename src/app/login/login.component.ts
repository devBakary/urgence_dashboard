import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { ICredentials } from '../_interfaces/credentials';
import { TokenService } from '../_services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: ICredentials = {
    username: '',
    password: ''
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  utilisateur:any;
  value!:string
  role: any

  constructor(
    //private authService: AuthService,
    //private storageService: StorageService,
    //private route: Router,
    private tokenService: TokenService,
    private uservice: UtilisateurService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.form);
    this.uservice.login(this.form).subscribe(
      data =>{
        // console.log(data.accessToken),
        this.tokenService.saveToken(data),
        this.uservice.getUsername(this.form.username).subscribe(dat=>{
        this.utilisateur=dat;
        this.roles = dat.roles[0].name
        this.isLoggedIn = true;
        console.log(dat.roles[0].name);
         // localStorage.setItem('utilisateur', this.value)
        })
      },
      err => console.log(err)
    )
  }
}
