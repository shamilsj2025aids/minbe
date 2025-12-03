const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Replace with your GitHub Pages URL
    await page.goto('https://your-github-username.github.io/your-repo/');

    // Fill in the job form
    await page.type('#jobTitle', 'Automation Tester');
    await page.type('#companyName', 'AutoCorp');
    await page.type('#location', 'Virtual');
    await page.type('#startDate', '2025-12-05');
    await page.type('#endDate', '2025-12-25');

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for the job to appear
    await page.waitForSelector('li strong', { timeout: 5000 });

    console.log('Job added successfully via GitHub Actions!');

    await browser.close();
})();
