import { Component } from '@angular/core';
import { Resource } from 'src/app/model/resource';
import { ResourceRequest } from 'src/app/model/resource-request';
import { APIserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent {

  id: number = 0;
  resource: Resource = new Resource(2,"fuchsia rose",2001,"#C74375","17-2031");
  resourceRequest: ResourceRequest = new ResourceRequest(this.resource); 
  

  constructor(private apiService: APIserviceService){

    this.apiService.getResource(this.id).subscribe(data => {
      this.resourceRequest = data;
      this.resource = this.resourceRequest.data;
    });

  }

}
