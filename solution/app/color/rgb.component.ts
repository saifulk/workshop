import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-color-paletter',
  templateUrl: './color/rgb.component.html',
  styleUrls: ['./color/color.component.css']
})
export class RGBComponent implements OnInit{
  rgb: string = 'black';

  constructor(private router: RouterExtensions, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .forEach(params => this.rgb = params['rgb']);
  }

  goBlue() {
    this.router.navigate(['/color/blue']);
  }

  goRed() {
    this.router.navigate(['/color/red']);
  }

  changeToRandom() {
    this.router.navigate(['/color/rgb', this.getRandomColor()]);
  }

  getRandomColor(): string {
    const r = Math.floor(Math.random() * 16).toString(16);
    const g = Math.floor(Math.random() * 16).toString(16);
    const b = Math.floor(Math.random() * 16).toString(16);
    return '#' + r+g+b;
  }

  goBack() {
    this.router.back();
  }

  goHome() {
    this.router.navigate(['/color'], { clearHistory: true });
  }
  
}
