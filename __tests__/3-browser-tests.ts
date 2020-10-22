import { Builder, By, WebDriver, Key } from 'selenium-webdriver';
import { expect } from 'chai';

describe('browser tests', () => {
  const browsers = ['firefox', 'chrome']; // 'internet explorer'

  browsers.forEach((browser) => {
    let driver: WebDriver;

    beforeEach(async () => {
      driver = await new Builder().forBrowser(browser).build();
    });

    it(`Has correct home page text (${browser})`, async () => {
      driver.navigate().to('https://www.danfoss.com/en/');
      const titleElement = await driver.findElement(By.className('card__title'));
      const text = await titleElement.getText();
      expect(text).to.equal('Danfoss – Engineering Tomorrow');
    });

    it(`Shows cookie dialog on first time (${browser})`, async () => {
      driver.navigate().to('https://www.danfoss.com/en/');

      let cookiePopupElement = await driver.findElement(By.id('coiOverlay'));

      let style = await cookiePopupElement.getAttribute('style');
      expect(style).to.equal('display: flex;');

      const acceptAllButton = await driver.findElement(By.className('coi-banner__accept'));
      await acceptAllButton.click();

      style = await cookiePopupElement.getAttribute('style');
      expect(style).to.equal('display: none;');
    });

    afterEach(async () => {
      await driver?.close();
    });
  });
});
