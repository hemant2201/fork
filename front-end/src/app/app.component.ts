import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'fork-frontend';
  myControl = new FormControl();
  battleData: any;
  autoList: any;
  chosenList: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/all').subscribe((data) => {
      this.battleData = data;
      this.autoList = this.battleData.data.map((item: any) => {
        return item.location;
      });
      console.log(this.autoList);
    });
  }

  loadRequiredInfo(data: any) {
    this.chosenList = this.battleData.data.filter((item: any) => {
      return item.location == data;
    });
    console.log(this.chosenList);
  }
}
