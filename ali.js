const ECS = require("./compute/ali-ecs");
const SLB = require("./networking/ali-slb");
const RDS = require("./database/ali-rds");
const OSS = require("./storage/ali-oss");

class AliCloud {
  /**
   * Expose AliCloud APIs
   * @constructor
   */
  constructor(aliSDK, accessKeyId, secretAccessKey, bucketName, bucketRegion) {
    this._aliSDK = aliSDK;
    this._accessKeyId = accessKeyId;
    this._secretAccessKey = secretAccessKey;
    this._bucketName = bucketName;
    this._bucketRegion = bucketRegion;

    return {
      getSDK: () => this._aliSDK,
      getAccessKeyId: () => this._accessKeyId,
      getSecretAccessKey: () => this._secretAccessKey,
      getBucketName: () => this._bucketName,
      getBucketRegion: () => this._bucketRegion,
      ecs: this.ECS,
      slb: this.SLB,
      rds: this.RDS,
      oss: this.OSS
    };
  }

  /**
   * Compute - ECS Wrapper
   * @ECS
   */
  ECS() {
    return new ECS(
      this.getSDK(),
      this.getAccessKeyId(),
      this.getSecretAccessKey()
    );
  }

  /**
   * Networking - SLB Wrapper
   * @SLB
   */
  SLB() {
    return new SLB(
      this.getSDK(),
      this.getAccessKeyId(),
      this.getSecretAccessKey()
    );
  }

  /**
   * Database - ApsaraDB for RDS Wrapper
   * @RDS
   */
  RDS() {
    return new RDS(
      this.getSDK(),
      this.getAccessKeyId(),
      this.getSecretAccessKey()
    );
  }

  /**
   * Storage - OSS Wrapper
   * @OSS
   */
  OSS() {
    return new OSS(
      this.getAccessKeyId(),
      this.getSecretAccessKey(),
      this.getBucketName(),
      this.getBucketRegion()
    );
  }
}

module.exports = AliCloud;
