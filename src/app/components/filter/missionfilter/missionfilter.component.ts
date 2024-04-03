import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule,
     FormsModule,
     MatCard,
     MatCardModule,
     MatFormFieldModule,
     MatInputModule,
     MatIconModule],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {

  filterYear: number | null = null;
  @Output() filterApplied = new EventEmitter<number | null>();

  applyFilter(): void {
    this.filterApplied.emit(this.filterYear);
  }

}
