import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { ToastMessageService } from 'src/app/utils/toast-message.service';

@Component({
  selector: 'app-auth-admin-register',
  templateUrl: './auth-admin-register.component.html',
  styleUrls: ['./auth-admin-register.component.scss'],
})
export class AuthAdminRegisterComponent implements OnInit {

  form: FormGroup; get f() { return this.form.controls; }
  submitted=false;
  constructor(
    private navctrl:NavController,
    private formBuilder:FormBuilder,
    private afs:AngularFirestore,
    private toast :ToastMessageService,
    private router:Router,
    private afAuth:AngularFireAuth, 
    private loadingController:LoadingController
  ) {  
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(7)]] 
    }, { });
  }

  ngOnInit() { 
  }  
 
   
  imgPass = "eye";
  typePass="password";
  onClickShow(){ 
    this.typePass = this.typePass === 'text' ? 'password' : 'text';
    this.imgPass = this.imgPass === 'eye-off' ? 'eye' : 'eye-off';
  } 
  
  async onSubmit(){ 
    console.log(this.form);
    this.submitted = true;
    if(this.form.invalid){
      return;
    }  
     
    var loading = await  this.loadingController.create({ message: "Please wait ...."  });
    await loading.present();
    let uid = ""; 
    this.createAuth().then(async passuid=>{   
      let val = this.form.value;
      await this.afs.collection("flood_auth")
      .doc(val.email+"@gmail.com").set({
        email:val.email+"@gmail.com",
        role:`admin`
      })
      loading.dismiss();
      this.toast.presentToast("Registered Successfully");
      this.router.navigateByUrl('admin-login');
    }).catch(e=>{
      console.log(e);
      loading.dismiss();
      this.toast.errorToast(e);
    })
  } 

  createAuth(){
    return new Promise<any>((resolve,reject)=>{
      let val = this.form.value;
      this.afAuth.createUserWithEmailAndPassword(val.email+"@gmail.com",val.password)
      .then((result)=>{
        console.log(result);
        resolve(result.user.uid);
      }).catch((e)=>{reject(e.message)})
    })
  } 
} 