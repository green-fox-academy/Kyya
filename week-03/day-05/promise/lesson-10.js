function alwaysThrows() {
  throw new Error('OH NOES');
}

function iterate(number) {
  console.log(number);
  return ++number;
}

function onReject(err) {
  console.log(err.message);
}

Promise.resolve(1)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(null, onReject);