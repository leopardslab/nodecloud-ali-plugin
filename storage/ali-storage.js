class Storage {
  /**
   * Storage constructor
   * @constructor
   * @param {object} aliSdk - AliCloud SDK
   * @param {string} accessKeyId - User Access Key ID
   * @param {string} secretAccessKey - User Secret Access Key
   */
  constructor(aliSdk, accessKeyId, secretAccessKey) {
    this._aliSDK = aliSdk;
    this._client = new this._aliSDK({
      accessKeyId: accessKeyId,
      accessKeySecret: secretAccessKey,
      endpoint: 'https://ecs.ap-south-1.aliyuncs.com',
      apiVersion: '2014-05-26'
    });
    this._requestOption = {method: 'POST'};
  }

  /**
   * Create an Storage instance
   * @createInstance
   * @param {object} params
   */
  create(params) {
    return new Promise((resolve,reject) => {
      this._client.request('CreateStorageInstance', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        console.log(ex);
      });
    });
  }

  /**
   * List all Storage Instances
   * @listInstances
   * @param {object} params
   */
  listInstances(params) {
    return new Promise((resolve,reject) => {
      this._client.request('DescribeStorageInstances', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * List all Storage Images
   * @listImages
   * @param {object} params
   */
  listImages(params) {
    return new Promise((resolve,reject) => {
      this._client.request('DescribeStorageImages', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * List all Storage Instance Types
   * @listInstanceTypes
   * @param {object} params
   */
  listInstanceTypes(params) {
    return new Promise((resolve,reject) => {
      this._client.request('DescribeStorageInstanceTypes', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * Start an Storage Instance
   * @start
   * @param {object} params
   */
  start(params) {
    return new Promise((resolve,reject) => {
      this._client.request('StartStorageInstance', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * Stop an Storage Instance
   * @stop
   * @param {object} params
   */
  stop(params) {
    return new Promise((resolve,reject) => {
      this._client.request('StopStorageInstance', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * Delete an Storage Instance
   * @delete
   * @param {object} params
   */
  delete(params) {
    return new Promise((resolve,reject) => {
      this._client.request('DeleteStorageInstance', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

}

module.exports = Storage;