import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthAdminLoginComponent } from './AuthAdmin/auth-admin-login/auth-admin-login.component';
import { AuthAdminRegisterComponent } from './AuthAdmin/auth-admin-register/auth-admin-register.component';
import { BarangayLoginComponent } from './AuthBarangay/barangay-login/barangay-login.component';
import { BarangayRegisterComponent } from './AuthBarangay/barangay-register/barangay-register.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'barangay-login',
    pathMatch: 'full'
  },
  {
    path:'barangay-login',
    component:BarangayLoginComponent
  },
  {
    path:'barangay-register',
    component:BarangayRegisterComponent
  }, 
  {
    path:'admin-login',
    component:AuthAdminLoginComponent
  },
  {
    path:'admin-register',
    component:AuthAdminRegisterComponent
  }, 
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./DashboardPackage/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  // },   
  {
    path: 'barangay',
    loadChildren: () => import('./modules/barangay/main-barangay/main-barangay.module').then( m => m.MainBarangayPageModule)
  },  
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/main-admin/main-admin.module').then( m => m.MainAdminPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  declarations = [
  AuthAdminLoginComponent,AuthAdminRegisterComponent,
  BarangayLoginComponent,BarangayRegisterComponent
]
