import { Component, OnInit, OnDestroy } from '@angular/core';
import { CanComponentDeactivate } from '../can-deactivate-guard';
import { Observable } from 'rxjs';
import { SampleService } from '../sample.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy, CanComponentDeactivate {


  ngOnDestroy(): void {
    this.sampleService.unsubscribeToBrowserBackButtonEvent();
  }
  constructor(private router: Router,
    private route: ActivatedRoute,
    private sampleService: SampleService) {


  }

  ngOnInit() {
    this.sampleService.subscribeToBrowserBackButtonEvent();
    this.sampleService.hasUnSavedData = false;
  }

  markDirty() {
    this.sampleService.hasUnSavedData = true;
  }

  onClick() {
    this.sampleService.unsubscribeToBrowserBackButtonEvent();
    this.sampleService.hasUnSavedData = false;
    this.router.navigate(['/home', {}]);

  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {

    if (!this.sampleService.hasUserHitbackButton) {
      return true;
    }
    return false;

  }

}
