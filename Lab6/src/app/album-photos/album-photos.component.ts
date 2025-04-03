import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService, Photo } from '../album-service';  // Импортируем сервис и типы
import { CommonModule } from '@angular/common';  // Импортируем CommonModule для директивы *ngFor

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
  standalone: true,
  imports: [CommonModule]  // Добавляем CommonModule
})
export class AlbumPhotosComponent implements OnInit {
  albumId: string = '';
  photos: Photo[] = [];  // Массив для хранения фотографий

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Получаем параметр albumId из URL
    this.albumId = this.route.snapshot.paramMap.get('albumId')!;

    // Загружаем фотографии альбома
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;  // Сохраняем фотографии в массив
      },
      error: (err) => {
        console.error('Ошибка при получении фотографий', err);
      }
    });
  }
}

