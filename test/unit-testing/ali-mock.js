class AliMockSdk {
  constructor(options) {
    this.options = options;
    this.ECS = ECS;
  }
}

class ECS {
  listInstances(params, cb) {
    this.respObj(params, cb);
  }

  startInstances(params, cb) {
    this.respObj(params, cb);
  }

  stopInstances(params, cb) {
    this.respArr(params, cb);
  }

  rebootInstances(params, cb) {
    this.respObj(params, cb);
  }

  terminateInstances(params, cb) {
    this.respObj(params, cb);
  }

  respObj(params, cb) {
    if (params) cb(null, {});
    else cb(true, null);
  }

  respArr(params, cb) {
    if (params) cb(null, []);
    else cb(true, null);
  }
}

class Database {
  listInstances(params, cb) {
    if (params) {
      cb(null, { instances: [] });
    } else {
      cb(true, null);
    }
  }

  createCluster(params, cb) {
    if (params) {
      cb(null, {
        cluster: {
          clusterName: "my_cluster"
        }
      });
    } else {
      cb(true, null);
    }
  }

  deleteCluster(params, cb) {
    if (params) {
      cb(null, {
        cluster: {
          clusterName: "my_cluster"
        }
      });
    } else {
      cb(true, null);
    }
  }

  createService(params, cb) {
    if (params) {
      cb(null, {
        service: {
          serviceName: "ecs-simple-service"
        }
      });
    } else {
      cb(true, null);
    }
  }

  describeServices(params, cb) {
    if (params) {
      cb(null, {
        services: [
          {
            serviceName: "sample-webapp"
          }
        ]
      });
    } else {
      cb(true, null);
    }
  }

  deleteService(params, cb) {
    if (params) {
      cb(null, {
        service: {
          serviceName: "ecs-simple-service"
        }
      });
    } else {
      cb(true, null);
    }
  }

  describeContainerInstances(params, cb) {
    if (params) {
      cb(null, {
        containerInstances: [{}]
      });
    } else {
      cb(true, null);
    }
  }
}

class Networking {
  listInstances(params, cb) {
    if (params) {
      cb(null, { instances: [] });
    } else {
      cb(true, null);
    }
  }

  createCluster(params, cb) {
    if (params) {
      cb(null, {
        cluster: {
          clusterName: "my_cluster"
        }
      });
    } else {
      cb(true, null);
    }
  }

  deleteCluster(params, cb) {
    if (params) {
      cb(null, {
        cluster: {
          clusterName: "my_cluster"
        }
      });
    } else {
      cb(true, null);
    }
  }

  createService(params, cb) {
    if (params) {
      cb(null, {
        service: {
          serviceName: "ecs-simple-service"
        }
      });
    } else {
      cb(true, null);
    }
  }

  describeServices(params, cb) {
    if (params) {
      cb(null, {
        services: [
          {
            serviceName: "sample-webapp"
          }
        ]
      });
    } else {
      cb(true, null);
    }
  }

  deleteService(params, cb) {
    if (params) {
      cb(null, {
        service: {
          serviceName: "ecs-simple-service"
        }
      });
    } else {
      cb(true, null);
    }
  }

  describeContainerInstances(params, cb) {
    if (params) {
      cb(null, {
        containerInstances: [
          {
            containerInstanceArn:
              "arn:aws:ecs:us-west-2:878299302707:container-instance/ab0262b7-1b12-4485-8f6f-79" +
              "166e4d5230"
          }
        ]
      });
    } else {
      cb(true, null);
    }
  }
}

class Storage {
  listInstances(params, cb) {
    if (params) {
      cb(null, { instances: [] });
    } else {
      cb(true, null);
    }
  }

  createCluster(params, cb) {
    if (params) {
      cb(null, {
        cluster: {
          clusterName: "my_cluster"
        }
      });
    } else {
      cb(true, null);
    }
  }

  deleteCluster(params, cb) {
    if (params) {
      cb(null, {
        cluster: {
          clusterName: "my_cluster"
        }
      });
    } else {
      cb(true, null);
    }
  }

  createService(params, cb) {
    if (params) {
      cb(null, {
        service: {
          serviceName: "ecs-simple-service"
        }
      });
    } else {
      cb(true, null);
    }
  }

  describeServices(params, cb) {
    if (params) {
      cb(null, {
        services: [
          {
            serviceName: "sample-webapp"
          }
        ]
      });
    } else {
      cb(true, null);
    }
  }

  deleteService(params, cb) {
    if (params) {
      cb(null, {
        service: {
          serviceName: "ecs-simple-service"
        }
      });
    } else {
      cb(true, null);
    }
  }

  describeContainerInstances(params, cb) {
    if (params) {
      cb(null, {
        containerInstances: [{}]
      });
    } else {
      cb(true, null);
    }
  }
}

module.exports = new AliMockSdk();
