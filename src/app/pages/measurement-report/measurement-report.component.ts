import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Measurement } from 'src/app/models/measurement';
import { StorageService } from '../../services/storage.service';
import { StoredMeasurement } from '../../models/stored.measurement.interface';
declare var cordova:any; 
@Component({
  selector: 'app-measurement-report',
  templateUrl: './measurement-report.component.html',
  styleUrls: ['./measurement-report.component.scss'],
})
export class MeasurementReportComponent implements OnInit {

  storedMeasurement : StoredMeasurement = {} as StoredMeasurement;

  constructor(private storageService : StorageService,private route: ActivatedRoute) {
      const id = parseInt(this.route.snapshot.paramMap.get('id')!);
      this.storedMeasurement = this.storageService.getDataById(id);
      console.log(this.storedMeasurement);

  }

  generateReport() {
    cordova.plugins.pdf.htmlToPDF({
      data: document.getElementById('report')!.innerHTML,
      documentSize: "A4",
      landscape: "portrait",
      type: "share",
      fileName: "report.pdf"
    }
    ).then((
      //This method saves the pdf to the device
      (data:any) => {
      cordova.plugins.file.writeFile(cordova.file.externalRootDirectory, 'report.pdf', data, {replace:true}, (success:any) => {
        console.log('success');
      }
      ).catch((error:any) => {
        console.log(error);
      }
      );

    })  
    ).catch((error:any) => {
      console.log(error);
    }
    );
  }

  ngOnInit() {}

}
