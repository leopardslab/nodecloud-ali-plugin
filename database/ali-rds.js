class RDS {
  /**
   * RDS constructor
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
      endpoint: "https://rds.aliyuncs.com",
      apiVersion: "2014-08-15"
    });
    this._requestOption = { method: "POST" };
  }

  /**
   * Create a RDS database instance
   * @createRDSInstance
   * @param {object} params
   */
  createRDSInstance(params) {
    return new Promise((resolve, reject) => {
      this._client
        .request("CreateDBInstance", params, this._requestOption)
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
   * Create a database in a RDS instance
   * @createDatabase
   * @param {object} params
   */
  createDatabase(params) {
    return new Promise((resolve, reject) => {
      this._client.request("CreateDatabase", params, this._requestOption).then(
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
   * List all RDS Instances
   * @listRDSInstances
   * @param {object} params
   */
  listRDSInstances(params) {
    return new Promise((resolve, reject) => {
      this._client
        .request("DescribeDBInstances", params, this._requestOption)
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
   * List all Databases in a RDS instance
   * @listDatabases
   * @param {object} params
   */
  listDatabases(params) {
    return new Promise((resolve, reject) => {
      this._client
        .request("DescribeDatabases", params, this._requestOption)
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
   * Restart a RDS instance
   * @restartRDSInstance
   * @param {object} params
   */
  restartRDSInstance(params) {
    return new Promise((resolve, reject) => {
      this._client
        .request("RestartDBInstance", params, this._requestOption)
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
   * Delete a Database in a RDS instance
   * @deleteDatabase
   * @param {object} params
   */
  deleteDatabase(params) {
    return new Promise((resolve, reject) => {
      this._client.request("DeleteDatabase", params, this._requestOption).then(
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
   * Delete a RDS Instance
   * @deleteRDSInstance
   * @param {object} params
   */
  deleteRDSInstance(params) {
    return new Promise((resolve, reject) => {
      this._client
        .request("DeleteDBInstance", params, this._requestOption)
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
}

module.exports = RDS;
