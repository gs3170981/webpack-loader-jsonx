module.exports = function (source, other) {
  if (cacheable) this.cacheable()
  console.log(source)
  this.callback(null, source, other);
};