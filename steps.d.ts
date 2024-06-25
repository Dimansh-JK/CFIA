/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type travelPage = typeof import('./pages/travel.js');
type Generic = import('./helpers/generic_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, travelPage: travelPage }
  interface Methods extends Playwright, Mochawesome, Generic {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
