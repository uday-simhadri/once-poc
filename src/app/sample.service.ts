import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PlatformLocation } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private location: PlatformLocation) { }

  hasUnSavedData: boolean = true;
  hasUserHitbackButton: boolean = false;

  subscribeToBrowserBackButtonEvent() {

    this.location.onPopState(() => {
      this.hasUserHitbackButton = true;
    });

  }


  unsubscribeToBrowserBackButtonEvent() {

    this.hasUserHitbackButton = false;
    this.location.onPopState(() => {

    });

  }

}
