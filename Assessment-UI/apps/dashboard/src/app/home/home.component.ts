import { Component, OnInit } from '@angular/core';
import { UserService, User } from '@workspace/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any = [
    {icon: "help", title:"Questions", link: "/questions",
    line1: "",
    line2: ""},

    {icon: "question_answer", title:"Exam", link: '/exam',
    line1: "",
    line2: ""},

    {icon: "dashboard", title:"Quiz", link: "/quiz",
    line1: "",
    line2: ""},
    

    {icon: "work", title:"Projects", link: "/projects",
    line1: "",
    line2: ""},
    
    

    
    
  ]

  currUser: User;

  constructor(private userService: UserService, private router: Router) {
    this.userService.getUserDetails()
      .subscribe(res => {
        this.currUser = res;
      })
  }

  ngOnInit(): void {
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
