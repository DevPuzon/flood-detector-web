import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular'; 
import * as firebase from 'firebase';
import { CryptService } from 'src/app/utils/crypt.service'; 
import { ToastMessageService } from 'src/app/utils/toast-message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-barangay-login',
  templateUrl: './barangay-login.component.html',
  styleUrls: ['./barangay-login.component.scss'],
})
export class BarangayLoginComponent implements OnInit {
  form: FormGroup; get f() { return this.form.controls; }
  submitted=false;
  loading:any;
  constructor(
    private loadingController:LoadingController,
    private toast:ToastMessageService,
    private afAuth:AngularFireAuth,
    private afs:AngularFirestore,
    private router:Router, 
    private crypt:CryptService,
    private formBuilder:FormBuilder
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
    this.login();
  } 

  async login() { 
    this.loading = await  this.loadingController.create({ message: "Please wait ...."  });
    await this.loading.present();
    let val = this.form.value;
    this.afAuth.signInWithEmailAndPassword(val.email+"@gmail.com",val.password)
    .then(result=>{ 
      // await this.afs.collection("flood_auth")
      // .doc(val.email+"@gmail.com").set({
      //   email:val.email+"@gmail.com",
      //   role:`barangay`
      // }) 
      // this.afs.collection("flood_auth").doc(val.email+"@gmail.com")
      // .get().
       
      firebase.default.firestore().collection("flood_auth")
      .doc(val.email+"@gmail.com").get().then((res)=>{
        this.loading.dismiss();
        const data =res.data();
        if(data.role == "barangay"){
          this.router.navigateByUrl('barangay');
        }else{
          this.toast.presentToast("Unauthorized")
        }
      })
    }).catch((err)=>{ 
      this.loading.dismiss();
      this.toast.presentToast(err.message);
    });
  }
 
}
