import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  conversations = [
    { name: "Nguyen", time: "9:15", latestMessage: "Good morning!", latestMessageRead: true},
    { name: "Nguyen", time: "9:15", latestMessage: "Good morning!", latestMessageRead: false},
    { name: "Nguyen", time: "9:15", latestMessage: "Good morning!", latestMessageRead: true},
    { name: "Nguyen", time: "9:15", latestMessage: "Good morning!", latestMessageRead: true},
    { name: "Nguyen", time: "9:15", latestMessage: "Good morning!", latestMessageRead: false},
    { name: "Nguyen", time: "9:15", latestMessage: "Good morning!", latestMessageRead: true},
    { name: "Nguyen", time: "9:15", latestMessage: "Good morning!", latestMessageRead: false},
    { name: "Nguyen", time: "9:15", latestMessage: "Good morning!", latestMessageRead: true},
    { name: "Nguyen", time: "9:15", latestMessage: "Good morning!", latestMessageRead: false},
    { name: "Nguyen", time: "9:15", latestMessage: "Good morning!", latestMessageRead: true},
    { name: "Nguyen", time: "9:15", latestMessage: "Good morning!", latestMessageRead: false},
    { name: "Nguyen", time: "9:15", latestMessage: "Good morning!", latestMessageRead: true}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
