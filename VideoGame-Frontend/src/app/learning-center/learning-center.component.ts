import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learning-center',
  templateUrl: './learning-center.component.html',
  styleUrls: ['./learning-center.component.scss']
})
export class LearningCenterComponent implements OnInit {
  learningCards = [
    {imagePath: '../assets/images/arkin-si-nkIIbgOVyl4-unsplash.jpg', title: 'Planes', description: 'Discover the history of aircraft and how planes have evolved to what they are today'},
    {imagePath: '../assets/images/arkin-si-nkIIbgOVyl4-unsplash.jpg', title: 'Helicopters', description: 'Learn the history of helicopters and how they have become an integral part of modern travel'},
    {imagePath: '../assets/images/arkin-si-nkIIbgOVyl4-unsplash.jpg', title: 'Military Aircraft', description: 'Purchase this book on military aircraft to discover the evolution of aircraft warefare'}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBuy(card: any) {
    this.router.navigate(['/learning/buy', card.title.toLowerCase()]);
  }

}
