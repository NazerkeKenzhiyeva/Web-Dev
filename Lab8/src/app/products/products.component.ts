import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface Product {
  name: string;
  description: string;
  rating: number;
  images: string[];
  link: string;
}

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule]
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Salton Очиститель Белый Активная пена',
      description: 'Очиститель для белой обуви, активная пена.',
      rating: 4.5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/hb0/64390726565982.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h4e/h25/64390727364638.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h05/h49/64390728226334.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/salton-ochistitel-belyi-aktivnaja-pena-103025637/'
    },
    {
      name: 'Avizor Aqua Soft Comfort 350 мл',
      description: 'Раствор для контактных линз, комфортное увлажнение.',
      rating: 4.7,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb2/hdf/63834879582238.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h61/hb1/63834880299038.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h5b/h83/63834880839646.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/avizor-aqua-soft-comfort-350-ml-27100002/'
    },
    {
      name: 'ARG JG-38C KIT Natural',
      description: 'Гитара акустическая, цвет коричневый.',
      rating: 4.8,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h87/h96/64013814153246.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc2/h3e/64013814713822.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h82/h99/64013815254430.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/arg-jg-38c-kit-natural-korichnevyi-123259882/'
    },
    {
      name: 'Aurora Швабра Water SprayMop',
      description: 'Швабра с разбрызгивателем, цвет белый.',
      rating: 4.6,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2e/h0b/63946904346654.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/h66/63946904887262.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hb2/63946905427870.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/aurora-shvabra-water-spraymop-belyi-107398721/'
    },
    {
      name: 'Black Rice Сыворотка для лица',
      description: 'Интенсивная сыворотка для лица, 50 мл.',
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/h68/64001320435742.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hb5/h23/64001320976350.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/h4b/64001321516958.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/black-rice-syvorotka-black-rice-intensive-dlja-litsa-50-ml-100665958/'
    },
    {
      name: 'Yamaha F310 Natural',
      description: 'Акустическая гитара Yamaha F310, цвет натуральный.',
      rating: 4.8,
      images: [],
      link: 'https://kaspi.kz/shop/p/yamaha-f310-natural-14100411/'
    },
    {
      name: 'Tom Ford Lost Cherry 100 мл',
      description: 'Парфюмированная вода унисекс.',
      rating: 4.7,
      images: [],
      link: 'https://kaspi.kz/shop/p/tom-ford-lost-cherry-parfjumernaja-voda-edp-100-ml-uniseks-102781260/'
    },
    {
      name: 'Tom Ford Lost Cherry 10 мл',
      description: 'Мини-версия парфюмированной воды.',
      rating: 4.6,
      images: [],
      link: 'https://kaspi.kz/shop/p/tom-ford-lost-cherry-parfjumernaja-voda-edp-10-ml-uniseks-102400055/'
    },
    {
      name: 'Пижама 18375068',
      description: 'Женская пижама, белого цвета, размер 44.',
      rating: 4.5,
      images: [],
      link: 'https://kaspi.kz/shop/p/pizhama-18375068-161766342-belyi-44-128705675/'
    },
    {
      name: 'LC Waikiki Демисезонная куртка',
      description: 'Черная демисезонная куртка.',
      rating: 4.8,
      images: [],
      link: 'https://kaspi.kz/shop/p/demisezonnaja-kurtka-lc-waikiki-w34085z8-chernyi-s-132655531/'
    }
  ];

  share(product: Product, platform: string) {
    const encodedUrl = encodeURIComponent(product.link);
    let shareUrl = '';

    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodedUrl}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodedUrl}`;
    }

    window.open(shareUrl, '_blank');
  }
}
