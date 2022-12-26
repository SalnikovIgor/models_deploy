import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

interface Classification {
  class: string;
  probability: number;
}

const ELEMENT_DATA: Classification[] = [];

@Component({
  selector: 'app-classication',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})
export class ClassificationComponent implements OnInit {
  image: File;
  classes$: Observable<any>;

  displayedColumns: string[] = ['class', 'probability'];
  dataSource = ELEMENT_DATA;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getImage(image: File) {
    this.image = image;
  }

  onUpload() {
    const formData = new FormData();
    if (this.image) {
      formData.append("image", this.image);
      this.classes$ = this.http.post<Array<Classification>>(`${environment.baseUrl}/classification`, formData);
    }
  }

}
