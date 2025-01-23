import { Component } from '@angular/core';
interface Article {
  title: string
  date: Date
  readTime: number
  content: string
  imageUrl: string
  author: {
    name: string
    role: string
    avatar: string
  }
}

interface RelatedNews {
  id: number
  title: string
  date: Date
  imageUrl: string
}
@Component({
  selector: 'app-news-article-detail',
  standalone: false,
  
  templateUrl: './news-article-detail.component.html',
  styleUrl: './news-article-detail.component.css'
})
export class NewsArticleDetailComponent {
  article: Article = {
    title: "Khám phá vẻ đẹp của Vịnh Hạ Long: Di sản thiên nhiên thế giới",
    date: new Date("2024-01-24"),
    readTime: 5,
    imageUrl: "assets/halong.jpg",
    content: `
      Vịnh Hạ Long, một trong những kỳ quan thiên nhiên của Việt Nam, đã thu hút hàng triệu du khách mỗi năm bởi vẻ đẹp hùng vĩ và độc đáo của nó. Với hơn 1.600 hòn đảo đá vôi lớn nhỏ mọc lên từ mặt biển xanh ngọc bích, Vịnh Hạ Long tạo nên một cảnh quan tuyệt đẹp không thể tìm thấy ở bất kỳ nơi nào khác trên thế giới.

      Được UNESCO công nhận là Di sản Thiên nhiên Thế giới vào năm 1994, Vịnh Hạ Long không chỉ nổi tiếng về mặt địa chất và địa mạo mà còn là nơi chứa đựng nhiều giá trị văn hóa và lịch sử.
    `,
    author: {
      name: "Nguyễn Văn A",
      role: "Nhà báo du lịch",
      avatar: "assets/author-avatar.jpg",
    },
  }

  relatedNews: RelatedNews[] = [
    {
      id: 1,
      title: "Du lịch Sapa: Khám phá vẻ đẹp vùng cao nguyên",
      date: new Date("2024-01-23"),
      imageUrl: "assets/sapa.jpg",
    },
    {
      id: 2,
      title: "Phố cổ Hội An: Điểm đến không thể bỏ qua",
      date: new Date("2024-01-22"),
      imageUrl: "assets/hoian.jpg",
    },
    {
      id: 3,
      title: "Mũi Né - Thiên đường resort của Việt Nam",
      date: new Date("2024-01-21"),
      imageUrl: "assets/muine.jpg",
    },
  ]}
