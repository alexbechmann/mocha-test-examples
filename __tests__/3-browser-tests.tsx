import { Builder, By, WebDriver } from 'selenium-webdriver';
import { expect } from 'chai';

describe('browser tests', () => {
  const browsers = ['firefox'];

  browsers.forEach((browser) => {
    let driver: WebDriver;

    beforeEach(async () => {
      driver = await new Builder().forBrowser(browser).build();
    });

    it('Has correct home page text', async () => {
      driver.navigate().to('https://www.danfoss.com/en/');
      const titleElement = await driver.findElement(By.className('card__title'));
      const text = await titleElement.getText();
      expect(text).to.equal('Danfoss – Engineering Tomorrow');
    });

    it('Shows cookie dialog on first time', async () => {
      driver.navigate().to('https://www.danfoss.com/en/');

      const cookiePopupElement = await driver.findElement(By.id('coiOverlay'));

      let style = await cookiePopupElement.getAttribute('style');
      expect(style).to.equal('display: flex;');

      const acceptAllButton = await driver.findElement(By.className('coi-banner__accept'));
      await acceptAllButton.click();

      style = await cookiePopupElement.getAttribute('style');
      expect(style).to.equal('display: none;');
    });

    afterEach(async () => {
      await driver.close();
    });
  });
});
