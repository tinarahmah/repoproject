import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user:any={};
  stateCtrl: FormControl | undefined
  hide:boolean=true
 

  constructor(
    public router: Router,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  loading:boolean | undefined;
  
  register()
  {
    this.loading=true;
    this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(res=> {
      this.loading=false;
      alert('Registrasi berhasil');
      this.router.navigate(['/login']);
    }) .catch (err=>{
      this.loading=false;
      alert('Tidak dapat mendaftar');
    })
  }

}
