import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlbumClass} from '../album-class';
import {PhotosClass} from '../photos-class';
import {AlbumsService} from '../albums.service';
import {CommonModule} from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
  
})
export class AlbumPhotosComponent implements OnInit {
  // post!: Post | undefined;
  album!: AlbumClass;
  loaded: boolean;
  albumphotos!: PhotosClass[];

  // Injecting objects
  constructor(private route: ActivatedRoute, private albumsService: AlbumsService, 
    private location: Location) {
    // console.log('constructor');
    this.loaded = false;
  }

  ngOnInit() {
    
    // console.log('ng init function');
    this.route.paramMap.subscribe((params) => {
      const albumID = Number(params.get('id'));

      this.loaded = false;
      this.albumsService.getPhotosByAlbum(albumID).subscribe((albumPhotos: PhotosClass[]) => {
        this.albumphotos = albumPhotos;
        this.loaded = true;
      });
      

      // this.post = POSTS.find(post => post.id === postID) as Post;
      // console.log(typeof postID);
    });
  }
  goBack() {
    this.location.back();
  }
}