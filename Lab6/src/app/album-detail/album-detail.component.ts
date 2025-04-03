import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Для работы с параметрами маршрута
import { AlbumService } from '../album-service';  // Сервис для получения данных альбомов
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  standalone: true,
  imports: [CommonModule]  
})
export class AlbumDetailComponent implements OnInit {
  albumTitle: string = '';
  albumDescription: string = '';
  releaseDate: string = '';
  albumId: string = '';

  constructor(
    private albumService: AlbumService,  // Инжектируем сервис для получения данных альбома
    private route: ActivatedRoute       // Для работы с параметрами маршрута
  ) {}

  ngOnInit(): void {
    // Получаем параметр albumId из URL
    this.albumId = this.route.snapshot.paramMap.get('albumId')!;

    // Загружаем данные альбома с помощью AlbumService
    this.albumService.getAlbumDetails(this.albumId).subscribe({
      next: (data) => {
        this.albumTitle = data.title;
        this.albumDescription = data.description;
        this.releaseDate = data.releaseDate;
      },
      error: (err) => {
        console.error('Ошибка при получении данных альбома', err);
      }
    });
  }
}
