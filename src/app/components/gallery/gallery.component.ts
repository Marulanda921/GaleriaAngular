import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Image[] = [];
  filteredImages: Image[] = [];
  categories = ['Naturaleza', 'Tecnologia', 'Ciudad', 'Animales'];
  favorites: Image[] = [];
  selectedImage: Image | null = null;

  constructor(private unplashService : UnsplashService) { }

  async ngOnInit(){
    this.images = await this.unplashService.getRandomImages('naturaleza', 10);
    this.filteredImages = [...this.images];
  }


  filterImages(event: Event){
    const category = (event.target as HTMLSelectElement).value;
    this.unplashService.getRandomImages(category.toLowerCase(), 10).then(images =>{
      this.filteredImages = images;
    });
  }

  toggleFavorite(image: Image) {
    image.favorite = !image.favorite;
    if (image.favorite) {
      this.favorites.push(image);
    } else {
      this.favorites = this.favorites.filter(fav => fav.id !== image.id);
    }
  }

  removeFavorite(image: any): void {
    this.favorites = this.favorites.filter(fav => fav.id !== image.id);
  }

  showDetails(image: any){
    this.selectedImage = image;
  }

  closeDetails(){
    this.selectedImage = null;
  }

}
