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
      title: 'Tư vấn IT',
      description: 'Chúng tôi cung cấp dịch vụ tư vấn IT chuyên nghiệp để giúp doanh nghiệp của bạn tối ưu hóa quy trình công nghệ.',
      icon: 'laptop',
      link: '/rooms'
    },
    {
      title: 'Phát triển phần mềm',
      description: 'Đội ngũ lập trình viên giàu kinh nghiệm của chúng tôi sẽ xây dựng các giải pháp phần mềm tùy chỉnh cho doanh nghiệp của bạn.',
      icon: 'code',
      link: '/dining'
    },
    {
      title: 'Bảo mật thông tin',
      description: 'Chúng tôi cung cấp các giải pháp bảo mật toàn diện để bảo vệ dữ liệu và hệ thống của bạn khỏi các mối đe dọa trực tuyến.',
      icon: 'safety',
      link: '/spa'
    }
  ];
}
