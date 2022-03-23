import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';

  image1 = 'https://lp-cms-production.imgix.net/2021-08/Oia_Santorini_path.jpg?format=auto&crop=entropy&fit=crop&h=800&sharp=10&vib=20&w=1200';
  image2 = 'https://montessori-ami.org/sites/default/files/images/countries/morocco.jpg';
  image3 = 'https://www.planetware.com/photos-large/HR/croatia-dubrovnik-old-city-center-aerial-view.jpg';

  constructor() { }

  ngOnInit() {
  }

}
