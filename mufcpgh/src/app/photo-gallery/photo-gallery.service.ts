import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoGalleryService {
  private photos: string[] = [
    '../../../assets/photo-gallery/photo1.jpg',
    '../../../assets/photo-gallery/photo2.jpg',
    '../../../assets/photo-gallery/photo3.jpg',
    '../../../assets/photo-gallery/photo4.jpg',
    '../../../assets/photo-gallery/photo5.jpg',
    '../../../assets/photo-gallery/photo6.jpg',
    '../../../assets/photo-gallery/photo7.jpg',
    '../../../assets/photo-gallery/photo8.jpg',
    // Add more image paths as needed
  ];

  getPhotos(): string[] {
    return this.photos;
  }

  constructor() { }
}
