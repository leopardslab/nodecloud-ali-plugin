class ECS {
  /**
   * ECS constructor
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
      endpoint: "https://ecs.ap-south-1.aliyuncs.com",
      apiVersion: "2014-05-26"
    });
    this._requestOption = { method: "POST" };
  }

  /**
   * Create an ECS instance
   * @create
   * @param {object} params
   */
  create(params) {
    return new Promise((resolve, reject) => {
      this._client.request("CreateInstance", params, this._requestOption).then(
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
   * List all ECS Instances
   * @listInstances
   * @param {object} params
   */
  listInstances(params) {
    return new Promise((resolve, reject) => {
      this._client
        .request("DescribeInstances", params, this._requestOption)
        .then(
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
   * List all ECS Images
   * @listImages
   * @param {object} params
   */
  listImages(params) {
    return new Promise((resolve, reject) => {
      this._client.request("DescribeImages", params, this._requestOption).then(
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
   * List all ECS Instance Types
   * @listInstanceTypes
   * @param {object} params
   */
  listInstanceTypes(params) {
    return new Promise((resolve, reject) => {
      this._client
        .request("DescribeInstanceTypes", params, this._requestOption)
        .then(
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
   * Start an ECS Instance
   * @start
   * @param {object} params
   */
  start(params) {
    return new Promise((resolve, reject) => {
      this._client.request("StartInstance", params, this._requestOption).then(
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
   * Stop an ECS Instance
   * @stop
   * @param {object} params
   */
  stop(params) {
    return new Promise((resolve, reject) => {
      this._client.request("StopInstance", params, this._requestOption).then(
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
   * Delete an ECS Instance
   * @delete
   * @param {object} params
   */
  delete(params) {
    return new Promise((resolve, reject) => {
      this._client.request("DeleteInstance", params, this._requestOption).then(
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

module.exports = ECS;
