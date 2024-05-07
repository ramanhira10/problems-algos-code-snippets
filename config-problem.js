const US = ['ONE', 'TWO', 'THREE'],
  CA = ['ONE', 'FOUR'],
  MX = ['ONE', 'FIVE'];

const META_DATA = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5
};

const renderer = (tenant) => {
  return tenant.map((field) => META_DATA[field]);
};

console.log('US: ', renderer(US));
console.log('CA: ', renderer(CA));
console.log('MX: ', renderer(MX));
