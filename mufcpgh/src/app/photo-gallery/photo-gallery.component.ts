import {Component, OnInit} from '@angular/core';
import {PhotoGalleryService} from "./photo-gallery.service";

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  photos: string[] = [];
  activeIndex: number = 0;
  constructor(private photoGalleryService: PhotoGalleryService) {
  }

  ngOnInit(): void {
    this.photos = this.photoGalleryService.getPhotos();
  }

  moveToPrevious() {
    this.activeIndex = (this.activeIndex - 1 + this.photos.length) % this.photos.length;
  }

  moveToNext() {
    this.activeIndex = (this.activeIndex + 1) % this.photos.length;
  }
}
