import { Builder, By, WebDriver, Key } from 'selenium-webdriver';
import { expect } from 'chai';

describe.skip('browser tests', () => {
  const browsers = ['firefox', 'chrome']; // 'internet explorer'

  browsers.forEach((browser) => {
    let driver: WebDriver;

    before(async () => {
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

    // it('First search result is ', async () => {
    //   driver.navigate().to('https://www.danfoss.com/en/');

    //   const searchInputElement = await driver.findElement(By.id('react-select-2-input'));
    //   searchInputElement.sendKeys('valve');
    //   searchInputElement.sendKeys(Key.ENTER);

    //   const resultTitles = await driver.findElements(By.className('tile__text-title'));
    //   const firstResultText = await resultTitles[0].getText();
    //   expect(firstResultText).to.equal('Danfoss Dynamic valve™');
    // });

    after(async () => {
      await driver?.close();
    });
  });
});
