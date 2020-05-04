import { ActivatedRoute } from '@angular/router';
import { Injectable, Renderer2, Inject, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import configJson from '../../../assets/app-config/theme-config.json';
import { IConfig } from '../interfaces/config';


interface IThemes {
  name: string;
  loaded: boolean;
}
export const STORE: IThemes[] = [
  {
    name: 'brand1',
    loaded: false,
  },
  {
    name: 'brand2',
    loaded: false,
  },
];
@Injectable({
  providedIn: 'root',
})
export class ThemeLoaderService {
  private configs: IConfig[] = configJson;
  private _themes: IThemes[] = [];
  private _renderer: Renderer2;
  public loadedTheme: IConfig;
  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private _document,
    private _http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this._renderer = rendererFactory.createRenderer(null, null);
    this._initialize();
  }


  private _initialize() {
    STORE.forEach((theme: any) => {
      this._themes[theme.name] = {
        loaded: false,
        name: theme.name,
      };
    });
  }

  /**
   * Loads themes
   * @param themes all in memory themes
   */
  load(...themes: string[]) {
    const promises: any[] = [];
    themes.forEach((theme) => promises.push(this._loadTheme(theme)));
    return Promise.all(promises);
  }


  /**
   * Checks if given theme is already loaded
   * @param name name of theme
   */
  private _isThemeLoaded(name: string) {
    if (this._themes[name].loaded) {
      return true;
    }
    return false;
  }

  /**
   * Attach theme tag through Renderer2
   * @param name name of theme
   */
  private _renderTheme(name: string) {
    if (environment.production) {
      const style = this._renderer.createElement('link');
      style.rel = 'stylesheet';
      style.type = 'text/css';
      style.href = this._themes[name].name + '.css';
      return style;
    }
    const script = this._renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = this._themes[name].name + '.js';
    return script;
  }


  /**
   * get resolve params based on themes status
   * @param name name of script
   * @param status status of script
   */
  private _setThemeStatus(name: string, status = true) {
    this._themes[name].loaded = status;
    return {
      name,
      loaded: status,
    };
  }


  /**
   * Loads themes
   * @param name name of script
   */
  private _loadTheme(name: string) {
    return new Promise((resolve) => {
      if (this._isThemeLoaded(name)) {
        return resolve(this._setThemeStatus(name));
      }
      const theme = this._renderTheme(name);
      theme.onload = () => {
        resolve(this._setThemeStatus(name));
      };
      theme.onerror = () => resolve(this._setThemeStatus(name, false));
      this._renderer.appendChild(
        this._document.getElementsByTagName('head')[0],
        theme
      );
    });
  }


  getTheme() {
    const theme  = this.configs.filter(selectedtheme => selectedtheme.theme === 'brand1')[0];
    this.loadedTheme = theme;
    return theme;
  }


}

