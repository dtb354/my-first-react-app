// module "my-module.js"
function cube(x) {
  return x * x * x;
}

const pi = Math.PI;

const graph = {
  options: {
    color: "white",
    thickness: "2px",
  },
  draw() {
    console.log("From graph draw function");
  },
};

export { cube, pi, graph };