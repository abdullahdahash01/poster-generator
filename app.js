const express = require("express");
const { chromium } = require("playwright");
const jsdom = require("jsdom");
const path = require('path');
const html = require('./htmlContent')
const { JSDOM } = jsdom;
const fs = require('fs').promises

const app = express();
const port = 3000
const baseUrl = `http://localhost:${port}`

app.use('/poster', express.static(path.join(__dirname, 'posters')))

app.get("/generate-poster", async (req, res) => {
  try {
    const scale = parseFloat(req.query.scale) || 1;

    const width = 900 * scale;
    const height = 700 * scale;

    // use playwright to launch headless Chromiun browser instance
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width, height });

    // use JSDOM to get access to document object
    const dom = new JSDOM(html);
    const htmlElement = dom.window.document.querySelector("html");
    const computedStyle = dom.window.getComputedStyle(htmlElement)
  
    // get and set the fontSize of the htmlElement
    const font = parseFloat(computedStyle.getPropertyValue('font-size')) * scale
    htmlElement.setAttribute("style",`font-size: ${font}%`)
   
    // serialize the dom
    const modifiedHTML = dom.serialize();
  
    await page.setContent(modifiedHTML);
    const screenShot = await page.screenshot();

    // write the screenShot to /posters directory 
    await fs.writeFile('./posters/screenshot.png', screenShot)
    await browser.close();

    //send the response as a json
    res.status(200).json({
      status:'ok',
      data:{
        poster: `${baseUrl}/poster/screenShot.png`
      }
    })

  } catch (error) {
    console.error("Error generating poster:", error);
    res.status(500).send("Error generating poster");  
  }
});


app.listen(3000, () => {
  console.log(`server running on port ${port}`);
});
