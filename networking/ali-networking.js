class Networking {
  /**
   * Networking constructor
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
   * Create an Networking instance
   * @createInstance
   * @param {object} params
   */
  create(params) {
    return new Promise((resolve,reject) => {
      this._client.request('CreateNetworkingInstance', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        console.log(ex);
      });
    });
  }

  /**
   * List all Networking Instances
   * @listInstances
   * @param {object} params
   */
  listInstances(params) {
    return new Promise((resolve,reject) => {
      this._client.request('DescribeNetworkingInstances', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * List all Networking Images
   * @listImages
   * @param {object} params
   */
  listImages(params) {
    return new Promise((resolve,reject) => {
      this._client.request('DescribeNetworkingImages', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * List all Networking Instance Types
   * @listInstanceTypes
   * @param {object} params
   */
  listInstanceTypes(params) {
    return new Promise((resolve,reject) => {
      this._client.request('DescribeNetworkingInstanceTypes', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * Start an Networking Instance
   * @start
   * @param {object} params
   */
  start(params) {
    return new Promise((resolve,reject) => {
      this._client.request('StartNetworkingInstance', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * Stop an Networking Instance
   * @stop
   * @param {object} params
   */
  stop(params) {
    return new Promise((resolve,reject) => {
      this._client.request('StopNetworkingInstance', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * Delete an Networking Instance
   * @delete
   * @param {object} params
   */
  delete(params) {
    return new Promise((resolve,reject) => {
      this._client.request('DeleteInstance', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

}

module.exports = Networking;