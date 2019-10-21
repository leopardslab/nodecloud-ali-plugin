const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const ecs = ncProviders.alicloud.ecs();

const params = {
  "RegionId": "ap-south-1",
  "ImageId": "aliyun_2_1903_64_20G_alibase_20190619.vhd",
  "InstanceType": "ecs.t1.xsmall"
}

ecs
  .create(params)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });