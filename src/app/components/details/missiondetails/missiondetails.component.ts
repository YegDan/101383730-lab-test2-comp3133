import { Component, OnInit, Input } from '@angular/core';
import { SpacexLaunch } from '../../../spacex-launch';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatCard } from '@angular/material/card';
@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatCard],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent implements OnInit{

  @Input() launch :SpacexLaunch | null = null;

  ngOnInit(): void {}
  

}
