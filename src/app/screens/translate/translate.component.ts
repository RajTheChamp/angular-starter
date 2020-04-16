import { Component, OnInit } from '@angular/core';
import { Language, DefaultLocale, Currency, LocaleService } from 'angular-l10n';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styles: []
})
export class TranslateComponent implements OnInit {
  @Language() lang: string;
  @DefaultLocale() defaultLocale: string;
  @Currency() currency: string;
  languages = [{ lang: 'English' }, { lang: 'French ' }];

  constructor(public localeService: LocaleService) { }

  ngOnInit() {
  }

  changeLange(lang: string) {
    if (lang === 'English') {
      this.localeService.setDefaultLocale('en');
    } else {
      this.localeService.setDefaultLocale('fr');
      // this.toast.error('Error');
    }

  }

}
