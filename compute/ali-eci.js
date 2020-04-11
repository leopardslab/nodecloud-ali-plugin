class ECI {
    /**
     * ECI constructor
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
            endpoint: "https://eci.aliyuncs.com",
            apiVersion: "2018-08-08"
        });
        this._requestOption = { method: "POST" };
    }

    /**
     * Create an ECI Container Group
     * @createContainerGroup
     * @param {object} params
     */
    createContainerGroup(params) {
        return new Promise((resolve, reject) => {
            this._client.request("CreateContainerGroup", params, this._requestOption).then(
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
     * List all ECI Container Groups
     * @listContainerGroups
     * @param {object} params
     */
    listContainerGroups(params) {
        return new Promise((resolve, reject) => {
            this._client
                .request("DescribeContainerGroups", params, this._requestOption)
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
     * Update an ECI Container Group
     * @updateContainerGroup
     * @param {object} params
     */
    updateContainerGroup(params) {
        return new Promise((resolve, reject) => {
            this._client.request("UpdateContainerGroup", params, this._requestOption).then(
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
     * List ECI Container Group Regions
     * @listRegions
     * @param {object} params
     */
    listRegions(params) {
        return new Promise((resolve, reject) => {
            this._client.request("DescribeRegions", params, this._requestOption).then(
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
     * Restart an ECI Container Group
     * @restartContainerGroup
     * @param {object} params
     */
    restartContainerGroup(params) {
        return new Promise((resolve, reject) => {
            this._client
                .request("RestartContainerGroup", params, this._requestOption)
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
     * Delete an ECI Container Group
     * @deleteContainerGroup
     * @param {object} params
     */
    deleteContainerGroup(params) {
        return new Promise((resolve, reject) => {
            this._client.request("DeleteContainerGroup", params, this._requestOption).then(
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

module.exports = ECI;
