import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
