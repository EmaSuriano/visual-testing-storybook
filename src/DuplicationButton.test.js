import puppeteer from 'puppeteer';

describe('<DuplicationButton />', () => {
  let page;

  beforeAll(async () => {
    let browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it('hould duplicate content after clicking', async () => {
    // navigate to story
    await page.goto(
      'http://localhost:9009/iframe.html?id=duplicationbutton--good',
    );

    // click on the button
    await page.click('button');

    // take screenshot and compare
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot();
  });
});
