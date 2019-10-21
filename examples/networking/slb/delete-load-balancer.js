const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const slb = ncProviders.alicloud.slb();

const params = {
  "RegionId": "ap-south-1",
  "LoadBalancerId": "lb-6gj9s7y8294yv59udzf69"
}

slb
  .delete(params)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });