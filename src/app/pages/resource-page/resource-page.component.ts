import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.css']
})
export class ResourcePageComponent implements OnInit {

  files = [
    'Java_Basics',
    'Recursion',
    'Inheritance',
    'Interfaces',
    'Abstract_Classes',
    'LinkedLists',
    'Asymptotic_Analysis',
    'Trees',
    'BST',
    'Game_Trees',
    'Hashing'
  ]

  constructor() { }

  ngOnInit() {
  }

  public openFile(file: String) {
    const url = 'assets/resources/' + file + '.pdf';
    window.open(url, '_blank');
  }

}
