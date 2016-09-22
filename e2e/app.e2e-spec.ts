import { HelloStorykartPage } from './app.po';

describe('hello-storykart App', function() {
  let page: HelloStorykartPage;

  beforeEach(() => {
    page = new HelloStorykartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
