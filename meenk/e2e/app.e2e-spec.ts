import { MeenkPage } from './app.po';

describe('meenk App', () => {
  let page: MeenkPage;

  beforeEach(() => {
    page = new MeenkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
