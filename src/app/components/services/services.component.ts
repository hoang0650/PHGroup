import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      icon: "laptop",
      title: "Tư vấn IT",
      description:
        "Chúng tôi cung cấp dịch vụ tư vấn IT chuyên nghiệp để giúp doanh nghiệp của bạn tối ưu hóa quy trình công nghệ.",
      link: "#",
    },
    {
      icon: "code",
      title: "Phát triển phần mềm",
      description:
        "Đội ngũ lập trình viên giàu kinh nghiệm của chúng tôi sẽ xây dựng các giải pháp phần mềm tùy chỉnh cho doanh nghiệp của bạn.",
      link: "#",
    },
    {
      icon: "safety",
      title: "Bảo mật thông tin",
      description:
        "Chúng tôi cung cấp các giải pháp bảo mật toàn diện để bảo vệ dữ liệu và hệ thống của bạn khỏi các mối đe dọa trực tuyến.",
      link: "#",
    },
  ]
}
