import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DespCard } from '../Classes/DescCard';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private translateService: TranslateService ) {}
 
  descCard!:DespCard[];
  ngOnInit() {

    this.translateService.get('descCard').subscribe((res:DespCard []) => {
      this.descCard = res;
    });
  }

  



}
