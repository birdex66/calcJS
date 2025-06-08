const { contextBridge } = require('electron');
const path = require('path');
const func = require(path.join(__dirname, 'functions.js'));

contextBridge.exposeInMainWorld('myAPI', {
  update: func.update,
  upFunc: func.upFunc,
  overflow: func.overflow,
  testHello: func.testHello,
  isFloat: func.isFloat
});

