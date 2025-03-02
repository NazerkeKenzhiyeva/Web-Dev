import { Component, Input, OnInit ,Output, EventEmitter} from '@angular/core';
import { AlbumClass } from '../album-class';
import {RouterModule} from '@angular/router';
import {AlbumsService} from '../albums.service';
import { ActivatedRoute } from '@angular/router'
import { CommonModule } from '@angular/common';; 

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  @Input() albumClass!: AlbumClass;
  //@Output() deleteProduct= new EventEmitter<number>();
  albums!: AlbumClass[];
  loaded: boolean = false;
  //categoryId!: number;
  //isLiked: Boolean = false;
  constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
  }

  
  ngOnInit() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums: AlbumClass[]) => {
      this.albums = albums;
      this.loaded = true;
    })
    if (localStorage.getItem('albumUpdated')) {
      localStorage.removeItem('albumUpdated'); // Clear flag
      this.loadAlbums(); // Reload album list
    }


  }
  /*loadAlbums() {
    this.albumService.getAlbums().subscribe((albums: AlbumClass[]) => {
      this.albums = albums;
    });*/
  

  
  deleteAlbum(id: number) {
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumService.deleteAlbum(id).subscribe(() => {
        this.albums = this.albums.filter(album => album.id !== id);
        alert('Album deleted successfully!');
      });
    }
  }
  loadAlbums() {
    this.albumService.getAlbums().subscribe((albums: AlbumClass[]) => {
      this.albums = albums;
      localStorage.setItem('albums', JSON.stringify(albums)); // Store albums
    });
  }
  
}

