const oss = require("ali-oss");

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
   * Create a new bucket
   * @create
   * @param {string} name
   */
  create(name) {
    return new Promise((resolve, reject) => {
      this._client.putBucket(name).then(
        result => {
          this._client.useBucket(name);
          resolve(result);
        },
        ex => {
          reject(ex);
        }
      );
    });
  }

  /**
   * List n number of buckets
   * @listBuckets
   * @param {number} count
   */
  listBuckets(count) {
    return new Promise((resolve, reject) => {
      this._client.listBuckets({ "max-keys": count }).then(
        result => {
          resolve(result);
        },
        ex => {
          reject(ex);
        }
      );
    });
  }

  /**
   * Get bucket information
   * @fetchBucketInfo
   * @param {string} name
   */
  fetchBucketInfo(name) {
    return new Promise((resolve, reject) => {
      this._client.getBucketInfo(name).then(
        result => {
          resolve(result);
        },
        ex => {
          reject(ex);
        }
      );
    });
  }

  /**
   * Get bucket location
   * @fetchBucketLocation
   * @param {string} name
   */
  fetchBucketLocation(name) {
    return new Promise((resolve, reject) => {
      this._client.getBucketLocation(name).then(
        result => {
          resolve(result);
        },
        ex => {
          reject(ex);
        }
      );
    });
  }

  /**
   * Set ACL on a bucket
   * @setBucketACL
   * @param {string} name
   * @param {string} acl
   */
  setBucketACL(name, acl) {
    return new Promise((resolve, reject) => {
      this._client.putBucketACL(name, acl).then(
        result => {
          resolve(result);
        },
        ex => {
          reject(ex);
        }
      );
    });
  }

  /**
   * Fetch ACL of a bucket
   * @fetchBucketACL
   * @param {string} name
   */
  fetchBucketACL(name) {
    return new Promise((resolve, reject) => {
      this._client.getBucketACL(name).then(
        result => {
          resolve(result);
        },
        ex => {
          reject(ex);
        }
      );
    });
  }

  /**
   * Delete an existing bucket
   * @delete
   * @param {string} name
   */
  delete(name) {
    return new Promise((resolve, reject) => {
      this._client.deleteBucket(name).then(
        result => {
          resolve(result);
        },
        ex => {
          reject(ex);
        }
      );
    });
  }
}

module.exports = OSS;
