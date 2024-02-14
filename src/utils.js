export const typeChecker = (desiredType, checkedType) => {
  if (typeof desiredType === typeof checkedType) return true;
  return false;
};
