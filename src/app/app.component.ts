import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private sampleService: SampleService) {

  }

  title = 'sample1';
}
