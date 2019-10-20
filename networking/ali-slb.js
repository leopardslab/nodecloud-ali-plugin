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
      endpoint: 'https://slb.ap-south-1.aliyuncs.com',
      apiVersion: '2014-05-15'
    });
    this._requestOption = {method: 'POST'};
  }

  /**
   * Create a Load Balancer
   * @create
   * @param {object} params
   */
  create(params) {
    return new Promise((resolve,reject) => {
      this._client.request('CreateLoadBalancer', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * List all Load Balancers
   * @listLoadBalancers
   * @param {object} params
   */
  listLoadBalancers(params) {
    return new Promise((resolve,reject) => {
      this._client.request('DescribeLoadBalancers', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * List Load Balancer regions
   * @listRegions
   * @param {object} params
   */
  listRegions(params) {
    return new Promise((resolve,reject) => {
      this._client.request('DescribeRegions', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * List all Tags
   * @listTags
   * @param {object} params
   */
  listTags(params) {
    return new Promise((resolve,reject) => {
      this._client.request('DescribeTags', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * Add tags to a Load Balancer
   * @addTags
   * @param {object} params
   */
  addTags(params) {
    return new Promise((resolve,reject) => {
      this._client.request('AddTags', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * Remove tags from a Load Balaner
   * @removeTags
   * @param {object} params
   */
  removeTags(params) {
    return new Promise((resolve,reject) => {
      this._client.request('RemoveTags', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

  /**
   * Delete a Load Balancer
   * @delete
   * @param {object} params
   */
  delete(params) {
    return new Promise((resolve,reject) => {
      this._client.request('DeleteLoadBalance', params, this._requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve(result);
      }, (ex) => {
        reject(ex);
      });
    });
  }

}

module.exports = Networking;