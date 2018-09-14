module.exports = function() {
  return function(label, shortcut) {
    if (!shortcut || !/^[A-Za-z]$/.test(shortcut)) {
      return label;
    }

    var match = label.match(new RegExp(shortcut, 'i'));

    if (!match) {
      return label;
    }

    var index = match.index + 1;
    var lowLine = '\u0332';

    return label.substring(0, index) + lowLine + label.substring(index);
  };
};
