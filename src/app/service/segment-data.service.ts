import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface segments {
  name: string;
  icon: any
  table: Array<table>;
  id: number;
}

export interface table {
  name: string;
  icon: any;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class SegmentDataService {
  segment = new BehaviorSubject<Array<segments>>([]);
  readonly segments = this.segment.asObservable();
  constructor() { }

  addSegment (segmentName : string, icon: any) {
    const currentValue = this.segment.value
    const segmentObject: segments = {
      name : segmentName,
      table : [],
      icon : icon, 
      id: this.generateRandomID()
    }
    this.segment.next([segmentObject, ...currentValue])
  }

  addTable (segment : table, segmentId: string) {
    let currentValue : Array<any> = []
    this.segments.subscribe((data) => {
      currentValue = data
    })
    console.log(segmentId)
    const selectedSegment = currentValue.find(obj => obj.id === segmentId)
    selectedSegment.table.push(segment)
    this.segment.next(currentValue)
  }

  
  generateRandomID () {
    return Math.floor(Math.random() * (9999 - 1 + 1) + 1)
  }
}
