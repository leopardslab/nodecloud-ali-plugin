const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const rds = ncProviders.alicloud.rds();

const params = {
  "RegionId": "cn-hangzhou",
  "DBInstanceId": "rm-6gj713q25625b52gn",
  "DBName": "test_db"
}

rds
  .deleteDatabase(params)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });