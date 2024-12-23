import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface FeaturedPost {
  title: string;
  imageUrl: string;
  description: string;
}
@Component({
  selector: 'app-featured-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-post.component.html',
  styleUrl: './featured-post.component.css'
})
export class FeaturedPostComponent {
  featuredPosts: FeaturedPost[] = [
    {
      title: 'Life under the water',
      imageUrl: 'https://imgs.search.brave.com/uMGg_r2XjnSSdK7JoLlFOPeN88FLW6N5X-zdn_paIFM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTgy/NTQzNjYyL3Bob3Rv/L2JlYXV0aWZ1bC1m/aXNoLWZpc2guanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWZF/a1pxdXdGSkExbjFL/QTZKNHkxbTl2a3Rh/NC1QeV9ISDl3OWl2/endWNEU9',
      description: 'Explore the enigmatic cosmic phenomena where gravity is so strong that nothing, not even light, can escape.'
    },
    {
      title: 'Black Holes',
      imageUrl: 'https://imgs.search.brave.com/8N4_O-gCOz7Usfw2BsomEgbl3HDqkFp1dsInKi8iTt0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNTcvMTgxODU3/LTA1MC05NzJBNEY5/Ni9BcnRpc3QtcmVu/ZGVyaW5nLW1hdHRl/ci1ibGFjay1ob2xl/LmpwZz93PTMwMA',
      description: 'Dive into the vibrant and diverse world beneath the ocean surface, teeming with fascinating creatures and ecosystems.'
    },
    // Add more featured posts as needed
  ];

}
