export const getPokemonId = (path: string) => {
  const removedLastSlashIfExist = path.replace(/\/$/, '');
  const pathArray = removedLastSlashIfExist.split('/');

  return pathArray[pathArray.length - 1];
};
