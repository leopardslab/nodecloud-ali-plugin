const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const slb = ncProviders.alicloud.slb();

const params = {
  "RegionId": "ap-south-1",
  "LoadBalancerId": "lb-6gj6ep7mrfohotyl9358z",
  "Tags": "[{\"TagKey\":\"test\",\"TagValue\":\"works\"}]"
}

slb
  .removeTags(params)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });