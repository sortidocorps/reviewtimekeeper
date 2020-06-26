import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  private currentThemeSubject: Subject<string> = new Subject<string>();

  /**
   * The current theme as observable
   * @returns {Observable<string>}
   */
  get currentTheme$(): Observable<string> {
    return this.currentThemeSubject.asObservable();
  }

  /**
   * Set the new theme
   *
   * @param {string} themeName
   */
  set currentTheme(themeName: string) {
    this.currentThemeSubject.next(themeName);
  }

}
