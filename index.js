const aliSdk = require("@alicloud/pop-core");
const aliPlugin = require("./ali");

const ncAliPlugin = options => {
  return new aliPlugin(
    aliSdk,
    options.AccessKeyId,
    options.AccessKeySecret,
    options.BucketName,
    options.BucketRegion
  );
};

module.exports = ncAliPlugin;
