/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type travelPage = typeof import('./pages/travel.js');
type Generic = import('./helpers/generic_helper.js');
type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, travelPage: travelPage }
  interface Methods extends Playwright, Mochawesome, Generic, ChaiWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
