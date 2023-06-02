import { Component } from '@angular/core';
import { Resource } from 'src/app/model/resource';
import { ResourcesRequest } from 'src/app/model/resources-request';
import { APIserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent {

  resourcesRequest: ResourcesRequest = new ResourcesRequest([]); 
  listResources: Resource[] = [];

  constructor(private apiService: APIserviceService){

    this.apiService.getListResources().subscribe(data => {
      this.resourcesRequest = data;
      this.listResources = this.resourcesRequest.data;
    });

  }

}
