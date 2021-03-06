
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFacotr: 2 });
  await page.goto("https://observablehq.com/@kerryrodden/sequences-sunburst", {waitUntil: 'networkidle0'});
  await page.pdf({
    path: "./test.pdf",
    format: "A4",
    printBackground: false
  });
  await browser.close();
})();
