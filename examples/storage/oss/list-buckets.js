const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const oss = ncProviders.alicloud.oss();

oss
  .listBuckets(10)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(`${err}`);
  });