const ECS = require('./compute/ali-ecs')
const SLB = require('./networking/ali-slb')
const RDS = require('./database/ali-rds')

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
      ecs: this.ECS,
      slb: this.SLB,
      rds: this.RDS
		};
  }

	/**
   * Compute - ECS Wrapper
   * @ECS
   */
  ECS() {
    return new ECS(this.getSDK(), this.getAccessKeyId(), this.getSecretAccessKey());
  }

  /**
   * Networking - SLB Wrapper
   * @SLB
   */
  SLB() {
    return new SLB(this.getSDK(), this.getAccessKeyId(), this.getSecretAccessKey());
  }

  /**
   * Database - ApsaraDB for RDS Wrapper
   * @APSARA
   */
  RDS() {
    return new RDS(this.getSDK(), this.getAccessKeyId(), this.getSecretAccessKey());
  }

}

module.exports = AliCloud;