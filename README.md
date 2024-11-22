# Flare Radio Module

## Description
A module that allows you to interact with the Flare Radio API. Right now, the API is quite limited but more functionality and features will be coming soon, so please make sure you regularly update this module.

## Installation
```
npm install flareradio
```

## Usage

There are currently two functions, `.stats` and `.upcoming`, both are pretty self explanitory, but `.stats` allows you to get the currently playing song on Flare and `.upcoming` gives you the next three shows.

All data is returned in a JSON format, other formats are currently not supported, but we will be making changes to this as time goes on.

## Examples

```javascript
const flareRadio = require('flare-radio');

// Get current stats
flareRadio.stats().then(data => {
  console.log(data);
}).catch(err => {
  console.error(err);
});

// Get upcoming shows
flareRadio.upcoming().then(data => {
  console.log(data);
}).catch(err => {
  console.error(err);
});
```

## Testing

If you want to check this module is performing as expected, you can use the following command, which will perform two tests using Jest, and output the status of both tests to your console.

```bash
npm run test
```

## Support

If you find any issues with this module, or you have any ideas on ways to improve it, please join our [Discord server](https://discord.gg/3dYHRJAhZZ).