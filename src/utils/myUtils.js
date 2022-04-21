function dotClear(str) {
  return str.replace('.', '');
}
function zero(arr) {
  if (arr.length < 13) {
    let length = arr.length;
    for (let i = 0; i < 13 - length; i++) {
      arr.unshift('');
    }
  }
  return arr;
}
export default { dotClear, zero };
