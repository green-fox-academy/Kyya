/**
 * Create a Proxy based object that
 * disables the setting of any field and only provides access to the nextId field.
 * If that field is read, either initialize it to 1
 * if the target has no such field or increment it with 1 and then return the new value.
 */

/* eslint-disable */

const target = {
  name: 'node'
}

const handler = {
  get: function(targetObject, field) {
    if (field === 'nextId') {
      if(targetObject[field] == null) {
        targetObject[field] = 1;
        return targetObject[field];
      } else {
        targetObject[field]++;
        return targetObject[field];
      }
    }
    return undefined;
  },
  set: function(targetObject, field, value) {
    return undefined;
  }
};

const proxyObject = new Proxy(target, handler);

proxyObject.name = "not node";
proxyObject.nextId = 999;

console.log(proxyObject.name);
console.log(proxyObject.nextId);

proxyObject.nextId = 8;

console.log(proxyObject.nextId);
console.log(target.nextId);
