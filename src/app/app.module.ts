import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodProductComponent } from './food-product/food-product.component';
import { HomeComponent } from './home/home.component';
import { SuccessfulComponent } from './successful/successful.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    SuccessfulComponent,
    FoodProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'admin',component:AdminComponent},
      {path:'food-product',component:FoodProductComponent},
      {path:'successful',component:SuccessfulComponent},
      {path:'',redirectTo:'/home',pathMatch:'full'}
    ])
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
