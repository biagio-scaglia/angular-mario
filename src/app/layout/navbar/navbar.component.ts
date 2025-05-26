import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';


interface UserInfo {
  name: string;
  email: string;
  role: string;
  avatar: string;
}

interface NavItem {
  name: string;
  path: string;
  adminOnly?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  userInfo: UserInfo = {
    name: 'Guest',
    email: '',
    role: 'guest',
    avatar: 'mario-logo.jpg'
  };

  navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Personaggi', path: '/personaggi' },
    { name: 'Giochi', path: '/giochi' },
    { name: 'Demo', path: '/demo' },
    { name: 'Power-Up', path: '/powerups' },
    { name: 'Contatti', path: '/contatti' },
    { name: 'Dashboard', path: '/dashboard', adminOnly: true }
  ];

  ngOnInit(): void {
    this.loadUserInfo();
  }

  isAdmin(): boolean {
return this.userInfo.role === 'admin';  }

  private loadUserInfo(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedUser = localStorage.getItem('marioUserInfo');
      if (savedUser) {
        this.userInfo = JSON.parse(savedUser);
      } else {
        const defaultAdmin: UserInfo = {
           name: 'Biagio Scaglia',
  email: 'admin@marioworld.com',
  role: 'admin', 
  avatar: 'mario-logo.png'
        };
        this.saveUserInfo(defaultAdmin);
      }
    }
  }

  saveUserInfo(user: UserInfo): void {
    this.userInfo = user;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('marioUserInfo', JSON.stringify(user));
    }
  }

  updateUserInfo(user: Partial<UserInfo>): void {
    const updatedUser = { ...this.userInfo, ...user };
    this.saveUserInfo(updatedUser);
  }
} 