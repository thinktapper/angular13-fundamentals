import { Component, OnInit } from '@angular/core'
import { Course } from '../common/models/course'

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'JavaScript: Understanding the Weird Parts',
      description:
        'Learn the JavaScript like a pro! Understand the weird parts of JavaScript with Will.',
      percentComplete: 98,
      favorite: true,
    },
  ]
  selectedCourse = emptyCourse
  originalTitle = ''

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course) {
    this.selectedCourse = { ...course }
    this.originalTitle = course.title
  }

  saveCourse(course) {
    console.log('save course', course)
  }

  deleteCourse(courseId) {
    console.log('delete course', courseId)
  }

  reset() {
    this.selectCourse({ ...emptyCourse })
  }
}
