# Project Documentation
[Proposal](https://github.com/deco3500-2018/Pennywise/wiki/Proposal)

[Design process](https://github.com/deco3500-2018/Pennywise/wiki/Design-process)


[Develop process](https://github.com/deco3500-2018/Pennywise/wiki/Develop-Progress-&-Code-Go-Through)


[Survey and Interview](https://github.com/deco3500-2018/Pennywise/wiki/Survey-and-Interview)


# How to Use puzzle pay
## Download from Chrome Web Store
The extenson is released in Google web store

https://chrome.google.com/webstore/detail/puzzle-pay/gelfhbdlgbhbjgkoppmpmhnebmjnegen

FYI: The version in Google store is really old, we highly recommand you to install the plugin locally. New version will be published to Google store in the future.

## Install with source code or our CRX file
For Installing Puzzle pay in your Chrome broswer locally, we provided two way for you to install it.

### Step 1. Clone the repository to your local
SSH Clone:
~~~~
git@github.com:deco3500-2018/Pennywise.git
~~~~

HTTP Clone:
~~~~
https://github.com/deco3500-2018/Pennywise.git
~~~~

After sucessfuly clone, you will get a folder with file structure like this

![alt text](https://github.com/deco3500-2018/Pennywise/blob/master/Plugin/assets/Images/Screen%20Shot%202018-09-16%20at%2010.36.43%20am.png)

### 1-1. Load Unpacked extension
Go to chrome://extensions/ and make sure you opened developer mode
![alt text](https://github.com/deco3500-2018/Pennywise/blob/master/Plugin/assets/Images/Screen%20Shot%202018-09-16%20at%2010.57.18%20am.png)


Click "Load Unpacked" to install the extension
![alt text](https://github.com/deco3500-2018/Pennywise/blob/master/Plugin/assets/Images/Screen%20Shot%202018-09-16%20at%2010.57.35%20am.png)

### 1-2 Load packed extension by using CRX file
Go to chrome://extensions/ and make sure you opened developer mode
![alt text](https://github.com/deco3500-2018/Pennywise/blob/master/Plugin/assets/Images/Screen%20Shot%202018-09-16%20at%2010.57.18%20am.png)
Drag and Drop plugin.crx to the Broswer, It should install automaticlly

Tip: `CRX` is a google officla packed plugin file type.

### Step 2. Hosting the puzzle pay website locally
The website application is developed by React, for running the website locally you will need pull the 'Web' folder from Github first.
After pulled it, use `cd web` then `npm i` to install necessary node_modules.
After all node_modules installed, using `npm run server-dev` to running website in your localhost 3000 port.

The web application intergradted google login function, you will need add your google developer API (https://developers.google.com/identity/) key in the Web/raect-client/Components/Registe.jsx first

For using the web application's email function. You need add your personal email address and password in web/server/index.js
~~~~

let transporter = nodemailer.createTransport({
      service:"Gmail",
      auth:{
        user:'addyouremailaddress',
        pass:'addyouremailpwd'
      }
    })

~~~~
