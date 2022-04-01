module.exports = (on, config) => {
 on("before:browser:launch", (browser = {}, args) => {
  if ((browser as any).name === "chrome") {
   args.push("--disable-device-discovery-notifications");
   return args;
  }
 });
};
