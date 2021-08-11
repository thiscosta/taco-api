const normalizeString = (stringToNormalize) => {
  return stringToNormalize
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
};

module.exports = { normalizeString };
