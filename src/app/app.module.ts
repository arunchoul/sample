import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { ViewEditService } from './view-edit.service';
import { AppComponent } from './app.component';
import { RecriterEvalutionComponent } from './recriter-evalution/recriter-evalution.component';
import { RouterModule, Routes} from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { VrEResourceComponent } from './vr-eresource/vr-eresource.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpModule } from '@angular/http';

const routes: Routes=[
  { path:'', component: LandingPageComponent },
  { path:'recruiter', component: RecriterEvalutionComponent},
  { path:'addresource', component: AddResourceComponent},
  { path: 'viewresource', component: VrEResourceComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    RecriterEvalutionComponent,
    LandingPageComponent,
    AddResourceComponent,
    VrEResourceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTablesModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],  
  providers: [ ViewEditService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
