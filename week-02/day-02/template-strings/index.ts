/* eslint-disable */
function log(timestamp: string, username: string, action: string): string {
  return "INFO - " + timestamp + "\n" + username + " : " + action;
}
/* eslint-enable */
function logES6(timestamp: string, username: string, action: string): string {
  return `INFO - ${timestamp}\n${username} : ${action}`;
}

console.log(log('2019.10.18', 'Steve', 'Eat'));
console.log(logES6('2019.10.18', 'Steve', 'Eat'));
