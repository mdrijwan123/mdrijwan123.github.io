import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, 'public/resume.html');
const pdfPath = path.resolve(__dirname, 'public/Mohammed_Rijwan_Resume.pdf');

console.log('Launching Puppeteer...');
const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
});

const page = await browser.newPage();
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

// Check page height to warn if overflow
const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
console.log(`\nResume body scroll height: ${bodyHeight}px`);
console.log(`A4 height at 96dpi = ~1122px`);
if (bodyHeight > 1180) {
    console.warn(`⚠ Content may overflow a single A4 page! (${bodyHeight}px)`);
} else {
    console.log(`✅ Fits within one A4 page.`);
}

await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
});

await browser.close();
console.log(`\n✅ PDF saved to: ${pdfPath}`);
