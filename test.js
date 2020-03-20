// import puppeteer from 'puppeteer'
// const pageUrl = 'http://localhost:3001/#home'
// let page;
// let browser
// const width = 1280;
// const width = 720


// beforeAll(async () => {
//   browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 80,
//     args: [`--window-size =${width}, ${height}`]
//   });
//   page = await browser.newPage();
//   await page.setViewPort({ width, height });
// })

// afterAll(() => {
//   browser.close();
// });

// describe('search function'() => {
//   beforeEach(async () => {
//   await page.goto(pageUrl, { waitUnitl: 'networkidle2' })
// });
// test('initial title is correct', async () => {
//   var div = ' '
//   const title = await page.$eval((div, e => e.textContent));
//   expect(title).toEqual(' ')
// });

// test('can search for cats', async () => {
//   var selector = 'input.form-control[text=type]'
//   await page.click(selector);
//   await page.type(selector, 'cats')
//   await page.waitFor(1500)
//   const title = await page.$eval((div, e => e.textContent));
//   expect(title).toEqual(' ')
// })
// })