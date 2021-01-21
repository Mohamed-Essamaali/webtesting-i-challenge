module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {

   const durability = 100
  
  return { ...item,durability};
}

function get(item) {
  return { ...item };
}
