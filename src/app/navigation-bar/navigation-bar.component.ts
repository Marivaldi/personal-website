import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  // Member variables
  currentURL : String;

  // Constructor takes in the router to subscribe
  constructor(private router: Router) {}

  ngOnInit() {
    // Cache reference to this component to use in callback
    var self = this;

    // This subscribes to route changes
    this.router.events.subscribe((val) => {

        // We only care about the where the navication is going
        if (val instanceof NavigationEnd){

          // Save the NavigationEnd object
          var navigationEnd = val;

          // Set the components currentURL to be used in the template
          self.currentURL = navigationEnd.urlAfterRedirects;

        }

    });
  }
}
