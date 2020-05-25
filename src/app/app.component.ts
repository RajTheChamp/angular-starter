import { ThemeLoaderService } from './shared/services/theme-loader.service';
import { Component, Inject, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from './shared/services/dynamic-script-loader.service';
import { environment } from 'src/environments/environment';
import { LocaleService, Language, DefaultLocale, Currency, } from 'angular-l10n';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-starter-template';
  value = 657028;
  languages = [{ lang: 'English' }, { lang: 'French ' }];
  @Language() lang: string;
  @DefaultLocale() defaultLocale: string;
  @Currency() currency: string;
  collapedSideBar: boolean;

  constructor(
    private dynamicScriptLoader: DynamicScriptLoaderService,
    public localeService: LocaleService,
    // private toast: ToastrService,
    private themeLoaderService: ThemeLoaderService) { }


  ngOnInit() {
    // Just call your load scripts function with scripts you want to load
    this.loadScripts();
    const config = this.themeLoaderService.getTheme();
    console.log(config);
    this.themeLoaderService.load(config.theme);
    console.log(environment.variables.baseApiUrl);
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('chartjs').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }




}
