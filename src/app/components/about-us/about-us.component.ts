import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: false,
  
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  coreValues = ["Đổi mới và sáng tạo", "Chất lượng và độ tin cậy", "Hợp tác và tôn trọng", "Học hỏi liên tục"]
}
