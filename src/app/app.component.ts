import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'templateDrivenForms';
  topics = ["Angular", "React", "Vue"];
  topicHasError = true;

  userModel = new User("Rob", "rob@test.com", 1234567890, "default", "morning", true);


  validateTopic(value: any) {
    if (value === "default") {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    console.log(this.userModel)
  }
}