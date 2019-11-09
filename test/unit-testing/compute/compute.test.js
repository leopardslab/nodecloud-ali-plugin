const aliPlugin = require("../../../ali");
const aliSdk = require("../ali-mock");
const ncAliPlugin = new aliPlugin(aliSdk, null, null);
const ecs = ncAliPlugin.ecs();

console.log(ecs);

describe("AliCloud ECS", () => {
  it("should list all ECS instance", done => {
    const params = {
      RegionId: "ap-south-1"
    };
    ecs
      .listInstances(params)
      .then(res => {
        expect(typeof res).toBe("array");
      })
      .catch(err => {
        console.log("Err", err);
      });
  });
});
