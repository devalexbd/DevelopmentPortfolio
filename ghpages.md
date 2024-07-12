# gh-pages Node Package

To host my React app on GitHub Pages, I had to install the Node.js package "gh-pages". This simplifies and automates the process of hosting my website on GitHub Pages. There are also other additional steps required in order to complete this process.

NOTE: This is tailored specifically for React.js projects created with Vite.

----

## Step 1: Install the Package

First I have to install the Node.js package.



## Step 2: Edit vite.config.js

Then I must go to `vite.config.js` and add the `base:` key property to defineConfig(). The value of base can vary depending on the scenario.

If you're simply hosting your GitHub repositor with GitHub Pages, the base value should be: `/{repository-name-here}/`

If you're using a custom domain name, check here.



## Step 3: Add New Scripts to package.json

The following scripts must then be added to the 'scripts' object in `package.json`.

`"predeploy": "npm run build"`, `"deploy": "gh-pages -d dist"`, `"clean": "rm -rf dist"`.



## Step 4: Commit Changes

Make sure to commit what you've done so far.

## Step 5: Run Build & Deploy

After all these steps, I run the scripts `npm run build` and then `npm run deploy`. Once these have finished, my React app will be deployed and hosted on GitHub Pages.