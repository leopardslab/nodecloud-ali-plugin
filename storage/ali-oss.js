const oss = require('ali-oss');

class OSS {
  /**
   * OSS constructor
   * @constructor
   * @param {string} accessKeyId - User Access Key ID
   * @param {string} secretAccessKey - User Secret Access Key
   * @param {string} bucketName - Name of the OSS bucket
   * @param {string} bucketRegion - Region of the OSS bucket
   */
  constructor(accessKeyId, secretAccessKey, bucketName, bucketRegion) {
    this._client = oss({
      region: bucketRegion,
      accessKeyId: accessKeyId,
      accessKeySecret: secretAccessKey,
      bucket: bucketName
    });
  }

  /**
   * List n number of buckets
   * @listBuckets
   * @param {number} count
   */
  listBuckets(count) {
    return new Promise((resolve,reject) => {
      this._client.listBuckets({"max-keys": count}).then((result) => {
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

}

module.exports = OSS;