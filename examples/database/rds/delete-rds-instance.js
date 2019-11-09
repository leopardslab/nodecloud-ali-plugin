const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const rds = ncProviders.alicloud.rds();

const params = {
  RegionId: "ap-south-1",
  DBInstanceId: "rm-6gj713q25625b52gn"
};

rds
  .deleteRDSInstance(params)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
