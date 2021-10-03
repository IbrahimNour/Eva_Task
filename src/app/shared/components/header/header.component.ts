import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private readonly router: Router,
    public readonly translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  selectedLanguage!: string | null;

  ngOnInit(): void {
    this.translate.setDefaultLang(localStorage.getItem('lang') ?? 'en');
    this.selectedLanguage =
      localStorage.getItem('lang') ?? this.translate.defaultLang;

    this.onLanguageChange();
  }

  onLanguageChange(): void {
    const htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;
    htmlTag.dir = this.selectedLanguage === 'ar' ? 'rtl' : 'ltr';
    htmlTag.lang = this.selectedLanguage!;
    this.document.body.className =
      this.selectedLanguage === 'ar' ? 'body__Ar' : 'body__En';
    localStorage.setItem('lang', this.selectedLanguage!);
    this.translate.use(this.selectedLanguage!);
  }
}
