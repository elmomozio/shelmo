import { ElectronAngular2Page } from './app.po';

describe('electron-angular2 App', function() {
  let page: ElectronAngular2Page;

  beforeEach(() => {
    page = new ElectronAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
