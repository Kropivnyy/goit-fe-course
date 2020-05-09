export default function microTemplate(src, data) {
  return src.replace(/\{\{([\w\-_\.]+)\}\}/gi, function (match, key) {
    var value = data;
    key.split('.').forEach(function (part) {
      value = value[part];
    });
    return value;
  });
}
