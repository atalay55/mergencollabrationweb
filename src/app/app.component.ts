import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webyucel';

  constructor(private elementRef: ElementRef,private translateService: TranslateService ) {}
   
  public selectLanguage(event: any): void {

    this.translateService.use(event.target.value);
  }

  descPage!:String[];


  ngOnInit() {
    this.translateService.get('descPage').subscribe((res: string[]) => {
      this.descPage = res;
    });
  }
  switchLanguage(lang: string): void{
    if (lang === 'en') {
      this.translateService.use('en'); 
    } 
    if (lang === 'tr') {
      this.translateService.use('tr'); 
    }
    if (lang === 'fr') {
      this.translateService.use('fr'); 
    }
  }


  @HostListener('click')
  onClick() {
    const navbarToggler = this.elementRef.nativeElement.querySelector('.navbar-toggler');
  
    if (navbarToggler.getAttribute('aria-expanded') === 'true') {
      navbarToggler.click();
    }
  }



}
