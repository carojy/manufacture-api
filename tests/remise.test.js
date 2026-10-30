const { appliquerRemise } = require('../src/remise');

test('25% de remise sur 200 euros font 150', () => {
  expect(appliquerRemise(200, 25)).toBe(150);
});

test('10% de remise sur 100 euros font 90', () => {
  expect(appliquerRemise(100, 10)).toBe(90);
});

test('une remise > à 100% est refusee', () => {
  expect(() => appliquerRemise(100, 120)).toThrow('Remise invalide');
});

test('une remise < à 0% est refusee', () => {
  expect(() => appliquerRemise(100, -1)).toThrow('Remise invalide');
});
