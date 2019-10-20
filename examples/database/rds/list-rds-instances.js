const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const rds = ncProviders.alicloud.rds();

const params = {
  "RegionId": "ap-south-1"
}

rds
  .listRDSInstances(params)
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });