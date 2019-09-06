const ECS = require('./compute/ali-ecs')

class AliCloud {
	/**
   * Expose AliCloud APIs
   * @constructor
   */
  constructor(aliSDK, accessKeyId, secretAccessKey) {
    this._aliSDK = aliSDK;
    this._accessKeyId = accessKeyId;
    this._secretAccessKey = secretAccessKey;

		return {
      getSDK: () => this._aliSDK,
      getAccessKeyId: () => this._accessKeyId,
      getSecretAccessKey: () => this._secretAccessKey,
      ecs: this.ECS
		};
  }

	/**
   * Compute - ECS Wrapper
   * @ECS
   */
  ECS() {
    return new ECS(this.getSDK(), this.getAccessKeyId(), this.getSecretAccessKey());
  }

}

module.exports = AliCloud;