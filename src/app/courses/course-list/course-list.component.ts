import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: 'course-list.component.html',
  providers: [CourseService]
})

export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];

  courses: Course[] = [];

  filterBy: string;

  constructor( private courseService: CourseService) {
  }


  ngOnInit(): void {
    this.courses = this.courseService.retrievelAll();
    this.filteredCourses = this.courses;
  }

  public get filter(): string {
    return '';
  }

  public set filter(v: string) {
    this.filterBy = v;
    this.filteredCourses = this.courses.filter(course => course.name.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase()) > -1);
  }

}
