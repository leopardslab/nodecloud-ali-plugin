const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const rds = ncProviders.alicloud.rds();

const params = {
  "RegionId": "ap-south-1",
  "Engine": "MySQL",
  "EngineVersion": "5.5",
  "DBInstanceClass": "rds.mysql.s1.small",
  "DBInstanceStorage": 5,
  "DBInstanceNetType": "Internet",
  "SecurityIPList": "10.23.12.27/24",
  "PayType": "Postpaid"
}

rds
  .createRDSInstance(params)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });