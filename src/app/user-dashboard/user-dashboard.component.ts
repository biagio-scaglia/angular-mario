import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  users: any[] = [];

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const usersData = localStorage.getItem('formUsers');
      this.users = usersData ? JSON.parse(usersData) : [];
    }
  }

  clearAllUsers() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('formUsers');
      this.users = [];
    }
  }

  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}