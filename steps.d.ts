/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type travelPage = typeof import('./pages/travel.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, travelPage: travelPage }
  interface Methods extends Playwright, Mochawesome {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
