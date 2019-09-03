const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const ecs = ncProviders.alicloud.ecs();

const params = {
  "RegionId": "ap-south-1"
}

ecs
  .listInstances(params)
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });