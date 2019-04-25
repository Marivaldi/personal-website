import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  // Member variables
  currentURL : String;

  constructor(private router: Router) { }

  ngOnInit() {
    // This subscribes to route changes
    this.router.events.subscribe((val) => {

        // We only care about the where the navication is going
        if (val instanceof NavigationEnd) {

          // Save the NavigationEnd object
          var navigationEnd = val;

          // Set the components currentURL to be used in the template
          this.currentURL = navigationEnd.urlAfterRedirects;

        }
    });
  }

}
