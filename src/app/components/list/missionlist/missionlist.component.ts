import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpacexDataService } from '../../../services/spacex-data.service';
import { SpacexLaunch } from '../../../spacex-launch';
import { CommonModule } from '@angular/common';
import { MissionfilterComponent } from '../../filter/missionfilter/missionfilter.component';
import { MissiondetailsComponent } from '../../details/missiondetails/missiondetails.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule,
     MissionfilterComponent,
     MissiondetailsComponent,
     MatCardModule,
     MatGridListModule],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent implements OnInit{
  launches: SpacexLaunch[] = [];
  selectedLaunch: SpacexLaunch | null = null;

  

  constructor(private spacexDataService: SpacexDataService) {}

  ngOnInit(){
    this.fetchLaunches(null);
  }

  fetchLaunches(filterYear: number | null): void {
      let launchesObservable;
      if (filterYear) {
        launchesObservable = this.spacexDataService.getLaunchesByYear(filterYear);
      } else {
        launchesObservable = this.spacexDataService.getLaunches();
      }

      launchesObservable.subscribe({
        next: (data: SpacexLaunch[]) => {
          this.launches = data;
        },
        error: (error: any) => {
          console.error('There was an error fetching the launches!', error);
        }
      });
    }

    onLaunchSelected(launch: SpacexLaunch): void {
      this.selectedLaunch = launch;
    }

    clearSelection(): void {
      this.selectedLaunch = null; 
    }

    onFilterApplied(year: number | null): void {
      this.fetchLaunches(year); 
    }
  }

 



