import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoForm!: FormGroup;
  taskList: any[] = [
    { description: 'Task 1', priority: 'High', due: new Date() },
  ];
  today = new Date();

  priorities: string[] = ['High', 'Medium', 'Low'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      description: this.fb.control<string>('', [Validators.required, Validators.minLength(5)]),
      priority: this.fb.control<string>('Low', [Validators.required]),
      due: this.fb.control<Date | null>(null, [Validators.required])
    });
  }

  addTask() {
    console.log(this.todoForm.value);
    this.taskList.push(this.todoForm.value);
  }

}
