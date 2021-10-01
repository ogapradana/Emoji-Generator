import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateModalComponent } from '../create-modal/create-modal.component';
import { SegmentDataService } from '../../service/segment-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  emojiSize: number = 16
  constructor(
    private dialog: MatDialog,
    public segmentService: SegmentDataService
  ) { }

  ngOnInit(): void {
  }

  openCreateDialog (segmentName : number) {
    this.dialog.open(CreateModalComponent, {
      data: {
        segmentId: segmentName
      }
    });
  }
}
