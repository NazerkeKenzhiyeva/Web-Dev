import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album-service';  
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];  

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
      },
      error: (err) => {
        console.error('Ошибка при получении альбомов', err);
      }
    });
  }
}
