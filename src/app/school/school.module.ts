import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher/teacher.component';

@NgModule({
  declarations: [TeacherComponent],
  imports: [CommonModule],
  exports: [TeacherComponent],
})
export class SchoolModule {}
