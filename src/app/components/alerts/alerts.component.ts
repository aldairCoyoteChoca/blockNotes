import { Component, OnInit } from '@angular/core';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  showAlert(title:any = null ,message: string, type: any){
    Swal.fire({
      title: title,
      text: message,
      icon: type,
      showConfirmButton: false,
      timer: 4000,
  })
  }

  closeAlert(){
    Swal.close();
  }

  showWait(message:string = "Please wait..."){
    Swal.fire({
      allowOutsideClick: false,
      text: message,
      icon: "info"
    });
    Swal.showLoading();
  }

  
}
