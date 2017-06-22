import { FirebaseTestPage } from './app.po';

describe('firebase-test App', () => {
  let page: FirebaseTestPage;

  beforeEach(() => {
    page = new FirebaseTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
