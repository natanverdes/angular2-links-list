import { Angular2LinksListPage } from './app.po';

describe('angular2-links-list App', () => {
  let page: Angular2LinksListPage;

  beforeEach(() => {
    page = new Angular2LinksListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
