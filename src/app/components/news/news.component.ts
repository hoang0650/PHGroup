import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: false,
  
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsArticles = [
    {
      title: "PHGROUP ra mắt giải pháp AI mới",
      summary: "Chúng tôi vừa giới thiệu giải pháp AI tiên tiến giúp doanh nghiệp tối ưu hóa quy trình làm việc.",
      image: "assets/placeholder.svg?height=200&width=300",
      date: "15/06/2023",
    },
    {
      title: "Hợp tác chiến lược với Tập đoàn XYZ",
      summary: "PHGROUP và Tập đoàn XYZ đã ký kết thỏa thuận hợp tác chiến lược trong lĩnh vực công nghệ thông tin.",
      image: "assets/placeholder.svg?height=200&width=300",
      date: "02/06/2023",
    },
    {
      title: "Mở rộng thị trường sang Đông Nam Á",
      summary: "PHGROUP công bố kế hoạch mở rộng hoạt động kinh doanh sang các nước Đông Nam Á trong năm tới.",
      image: "assets/placeholder.svg?height=200&width=300",
      date: "20/05/2023",
    },
  ]
}
