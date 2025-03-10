import shortUUID from 'short-uuid';
import webdriver, { By } from 'selenium-webdriver';

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

const sampleSize = 500;
const sleepTime = 2000;


test('runs the experiment', async () => {
  const browser = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
  await browser.manage().setTimeouts({ implicit: 3000 });
  let clickCount = 0;
  for (let i = 0; i < sampleSize; i++){
    console.log(i);
    let userId = shortUUID().generate(); 
    await browser.get(`http://localhost:5173?user=${userId}&location=CA`);
    sleep(sleepTime);
    try {
      browser.wait(() => {
        browser.findElement(By.name('buy')); // product panel
      });
      const button = await browser.findElements(By.name('buy'));
      const t1 = Math.random();
      const t2 = Math.random();
      console.log(t1, t2, button.length)
      if (t1 > t2) {
        console.log('clicking...');
        await button[1].click();
        sleep(500);
        await browser.switchTo().alert().accept();
        clickCount++;
      }

    } catch(error) {
      console.log(error);
    }
    
    
  }
  browser.quit();
  expect(clickCount).toBeGreaterThan(0);
 
  
  
}, sampleSize * 1000 + 10000);
