import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppInitService } from './shared/services/app-init.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './shared/interceptors/interceptor';
import { L10nLoader, LocalizationModule } from "angular-l10n";
import { l10nConfig } from './l10n-config';
import { HttpClientModule } from '@angular/common/http';
import { DynamicScriptLoaderService } from './shared/services/dynamic-script-loader.service';
import { AppErrorHandler } from './app-errorhandler';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { reducer } from './shared/store/reducers/employee.reducer';
import { FormComponent } from './library/form/form.component';
import { ListComponent } from './library/list/list.component';
import { SharedModule } from './shared/shared.module';
import { LibraryModule } from './library/library.module';
import { ScreensModule } from './screens/screens.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BusyIndictorInterceptor } from './shared/interceptors/busyloader.interceptor';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { LoginComponent } from './screens/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export function app_Initialize(appInitService: AppInitService) {
  return () => appInitService.init();
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibraryModule,
    SharedModule,
    ScreensModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LocalizationModule.forRoot(l10nConfig),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true,
      easing: 'ease-in'
    }),
    StoreModule.forRoot({
      employee: reducer
    }),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER, useFactory: app_Initialize, deps: [AppInitService], multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
     { provide: HTTP_INTERCEPTORS, useClass: BusyIndictorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    DynamicScriptLoaderService,
     AuthGuardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public l10Loader: L10nLoader) {
    this.l10Loader.load();
  }
}
