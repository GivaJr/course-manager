import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: 'course-list.component.html'

})


export class CourseListComponent implements OnInit {

  courses: Course[] = [];


  ngOnInit(): void {

    this.courses = [
      {
        id: 1,
        name: 'Angular Forms',
        imagemURL: './assets/images/forms.png',
        price: 150,
        code: '123',
        duration: 190,
        rating: 3,
        realeseDate: '12/12/1990'

      },
      {
        id: 2,
        name: 'Angular HTTP',
        imagemURL: './assets/images/http.png',
        price: 100,
        code: '123',
        duration: 100,
        rating: 4.5,
        realeseDate: ' 09/08/1995'

      }
    ];
  }
}
