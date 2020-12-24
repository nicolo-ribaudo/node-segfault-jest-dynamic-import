require("../source/foo.js");

test("segfault", async () => {
  console.log("So far so good");

  // Wait a bit, otherwise the segfault doesn't happen
  await new Promise(resolve => setTimeout(resolve, 100));

  debugger;

  console.log(await import(`../source/bar.mjs`));
});
