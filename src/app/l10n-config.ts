import { L10nConfig, ProviderType,StorageStrategy } from "angular-l10n";


export const l10nConfig: L10nConfig = {
  locale:{
      languages:[
          {code:'en',dir:'ltr'},
          {code:'en',dir:'ltr'},
          {code:'en',dir:'ltr'}
      ],
      defaultLocale:{languageCode:'en',countryCode:'GB'},
      currency:'GBP',
      storage:StorageStrategy.Disabled
  },
  translation:{
      providers:[
          {type:ProviderType.Static, prefix:'assets/locale/locale-'}
      ],
      caching:true,
      missingKey:'No Key'
  }
};

