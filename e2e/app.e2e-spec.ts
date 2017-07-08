import { DelfiRSSReaderPage } from './app.po';

describe('delfi-rssreader App', () => {
  let page: DelfiRSSReaderPage;

  beforeEach(() => {
    page = new DelfiRSSReaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
