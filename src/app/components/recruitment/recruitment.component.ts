import { Component } from '@angular/core';

@Component({
  selector: 'app-recruitment',
  standalone: false,
  
  templateUrl: './recruitment.component.html',
  styleUrl: './recruitment.component.css'
})
export class RecruitmentComponent {
  opportunities = [
    "Làm việc với các công nghệ tiên tiến nhất",
    "Phát triển kỹ năng chuyên môn và kỹ năng mềm",
    "Tham gia các dự án lớn, đa dạng",
    "Hưởng chế độ đãi ngộ và phúc lợi hấp dẫn",
  ]

  openPositions = [
    {
      title: "Senior Full Stack Developer",
      description:
        "Chúng tôi đang tìm kiếm một Senior Full Stack Developer có kinh nghiệm làm việc với các công nghệ hiện đại.",
      requirements: "Tối thiểu 5 năm kinh nghiệm, thành thạo Angular, Node.js, và cơ sở dữ liệu.",
    },
    {
      title: "UX/UI Designer",
      description: "PHGROUP cần tuyển UX/UI Designer tài năng để tạo ra những trải nghiệm người dùng tuyệt vời.",
      requirements: "Có kinh nghiệm thiết kế cho web và mobile, thành thạo các công cụ thiết kế như Figma, Sketch.",
    },
    {
      title: "DevOps Engineer",
      description:
        "Chúng tôi đang tìm kiếm DevOps Engineer để quản lý và tối ưu hóa quy trình phát triển và triển khai.",
      requirements: "Kinh nghiệm với Docker, Kubernetes, CI/CD, và các nền tảng cloud như AWS hoặc Azure.",
    },
  ]
}
