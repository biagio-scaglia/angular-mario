import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieBannerComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isCookieConsentSet(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('cookieConsent') !== null;
    }
    return false;
  }

  setCookieConsent(consent: boolean): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookieConsent', String(consent));

      if (consent) {
        console.log('Cookie accettati');
      } else {
        console.log('Cookie rifiutati');
      }
    }
  }
}
