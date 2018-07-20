import { Component, OnInit } from '@angular/core';
import { ViewEditService } from '../view-edit.service';
import { Http, HttpModule, Response } from '@angular/http';
import { error } from 'protractor';

@Component({
  selector: 'app-vr-eresource',
  templateUrl: './vr-eresource.component.html',
  styleUrls: ['./vr-eresource.component.css']
})
export class VrEResourceComponent implements OnInit {
 
  updatedDetails = {     
    nameOfTheResource : "",
    adharNumber : "",
    panNumber : "",
    mobile : "",
    email : "",
    cEmail : "",
    dob : "",
    currentCTC : "",
    expectedCTC : "",
    noticePeriod : "",
    currentCompany : "",
    employerName : "",
    location : "",
    modeOfEmployment : "",
    experience : "",
    relevantExperience : "",
    domainExperience : "",
    primarySkill : "",
    secondarySkill : "",
    comments : "",
    uploadResume : ""

}

  constructor(private vieweditservice: ViewEditService) { }
  multipleData1: any = [];

  displayUpdate: any = {};
  // Without using Click function in .html file
  ngOnInit() {
    this.vieweditservice.multipleData()
      .subscribe(
        data => {
         // console.log("check");
          this.multipleData1 = data.details;
          console.log("DATA" + this.multipleData1);
        }),
      ((error) => console.log(error));
  }


  btn="";
  dispalyData='';
  onUpdate(event) {
    var receivedDataItem= this.multipleData1;
    //console.log(xx);
    this.btn=event.path[2].cells[0].innerHTML;
    //console.log(this.btn);
    for (let i=0;i<receivedDataItem.length;i++){
      if(this.btn==receivedDataItem[i].id) {
        //console.log(xx[i].id);
        this.dispalyData=receivedDataItem[i];
        console.log(this.dispalyData);
        break;
      }
    }
    // this.vieweditservice.multipleData()
    //   .subscribe(data1 => {
    //     console.log("subscribe");
    //     for (let i = 0; i < data1.details.length; i++) {
    //       if (data1.details[i].id == (i+1)) {

    //         this.displayUpdate = data1.details[i];
    //         console.log("Data one " + this.displayUpdate);
    //       }
    //     }
      // }),
      // ((error) => console.log(error));
  }
  // getMultipleDetails(){
  //   this.vieweditservice.multipleData()
  //   .subscribe(
  //     data => {
    //       this.vieweditservice=data;
  //       console.log(this.vieweditservice);
  //     }),
  //     (error => {console.log(error)});

  // }

  onUpdateDetails()
  {
    //console.log(this.dispalyData);
    this.vieweditservice.updateJsonData(this.dispalyData)
    .subscribe (
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  
  onUpdateForm(value:any){
    
    this.updatedDetails.nameOfTheResource = value.nameOfTheResource;
    this.updatedDetails.adharNumber = value.adharNumber;
    this.updatedDetails.panNumber = value.panNumber;
    this.updatedDetails.mobile = value.mobile;
    this.updatedDetails.email = value.email;
    this.updatedDetails.cEmail = value.cEmail;
    this.updatedDetails.dob = value.dob;
    this.updatedDetails.currentCTC = value.currentCTC;
    this.updatedDetails.employerName = value.employerName;
    this.updatedDetails.location = value.location;
    this.updatedDetails.modeOfEmployment = value.modeOfEmployment;
    this.updatedDetails.experience = value.experience;
    this.updatedDetails.relevantExperience = value.relevantExperience;
    this.updatedDetails.domainExperience = value.domainExperience;
    this.updatedDetails.primarySkill = value.primarySkill;
    this.updatedDetails.secondarySkill = value.secondarySkill;
    this.updatedDetails.comments = value.comments;
    this.updatedDetails.uploadResume = value.uploadResume;
    console.log(this.updatedDetails);
  }

}
