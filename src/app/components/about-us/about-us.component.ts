import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: false,
  
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  teamMembers = [
    {
      name: 'Phan Huy Hoàng',
      position: 'CEO',
      avatarUrl: 'member1.jpg',
      bio: 'Ông Phan Huy Hoàng thành lập PHGroup vào năm 2025 và là một người có tầm nhìn xa đằng sau công ty chúng tôi, dẫn đầu bằng niềm đam mê và sự đổi mới.'
    },
    {
      name: 'Phạm Hoàng Thắng',
      position: 'CTO',
      avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      bio: 'Ông Thắng là nhà đồng sáng lập nên PHGroup và người thúc đẩy chiến lược công nghệ của chúng tôi và đảm bảo các giải pháp của chúng tôi luôn tiên tiến.'
    }
  ];

  services = [
    {
      title: "Phát triển phần mềm tùy chỉnh",
      description: "Giải pháp phần mềm đáp ứng nhu cầu cụ thể của doanh nghiệp bạn.",
      icon: "code",
    },
    {
      title: "Giải pháp AI và Machine Learning",
      description: "Ứng dụng trí tuệ nhân tạo để tối ưu hóa quy trình kinh doanh.",
      icon: "robot",
    },
    {
      title: "Nền tảng dựa trên đám mây",
      description: "Xây dựng và quản lý hệ thống đám mây linh hoạt và có khả năng mở rộng.",
      icon: "cloud",
    },
    {
      title: "Dịch vụ IT toàn diện",
      description: "Hỗ trợ IT đầy đủ từ tư vấn đến triển khai và bảo trì.",
      icon: "laptop",
    },
  ]
}
