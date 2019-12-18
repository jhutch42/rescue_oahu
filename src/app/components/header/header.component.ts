import { Component, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { AnimalServiceService } from 'src/app/services/animal-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('navBar', { static: false }) navElement;

  navData: any; // Navigation bar links.
  mobileNavOpen: boolean; // Is the mobile nav open?
  logoSrc: string; // Link to the logo image file.

  constructor(private animalService: AnimalServiceService) {
    this.navData = animalService.getNavData(); // Get the nav link data.
    this.mobileNavOpen = false;
    this.logoSrc = '../../../assets/images/415-logo.JPG';
  }

  ngAfterViewInit() {
    this.animalService.mobileNavSubject.subscribe({
      next: value => {
        this.navElement.nativeElement.style.display = value ? 'inline-block' : 'none';
      }
    });
  }

  /** Toggles the nav bar in moblie view. */
  private toggle(): void {
    this.animalService.toggleMobileNav();
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.animalService.updateInnerWidth(window.innerWidth);
  }

}
