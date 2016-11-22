import { Ng2ketPage } from './app.po';

describe('ng2ket App', function() {
  let page: Ng2ketPage;

  beforeEach(() => {
    page = new Ng2ketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
