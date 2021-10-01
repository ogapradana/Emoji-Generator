import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateModalComponent } from 'src/app/pages/create-modal/create-modal.component';
import { SegmentDataService, segments } from '../../service/segment-data.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  filteredSearch : segments[] = []
  showFiller : boolean = true;
  constructor(
    private dialog: MatDialog,
    public segmentService: SegmentDataService
  ) { 
    this.segmentService.addSegment('Segment 1', '😀')
    this.segmentService.addSegment('Segment 2', '😀')
  }

  ngOnInit(): void {
  }

  onSearch (event:any) {
    if (event.target.value) {
      this.segmentService.segments.subscribe((val) => {
        this.filteredSearch = val.filter(obj => obj.name.includes(event.target.value))
      })
    } else {
      this.filteredSearch = []
    }
  }

  openCreateDialog () {
    this.dialog.open(CreateModalComponent, {
      data: {
        segmentId: null
      }
    });
  }

}
