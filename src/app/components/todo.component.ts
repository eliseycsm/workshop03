import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { ToDo } from '../models/todo'
import * as moment from 'moment'
import { forbiddenDate } from '../directives/forbiddenDate'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  form: FormGroup

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      description: fb.control("", [Validators.required]),
      priority: fb.control("", [Validators.required]),
      date: fb.control("", [Validators.required, forbiddenDate(this.date)])
    })


  }
  taskList = []
  date: string;

  ngOnInit(): void {
  }

  processForm() {
    this.date = this.form.value.date
    let task = new ToDo(
      this.form.value.description, 
      this.form.value.priority,
      moment(this.date).format("DD-MM-YYYY")
    )
    //console.log(task)
    this.taskList.push(task)
    console.log(this.taskList)
  }
}
