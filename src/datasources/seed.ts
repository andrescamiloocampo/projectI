import { SeedDataM } from 'src/interfaces/zone.model';

export const seedData: SeedDataM = {
  zones: [
    { name: 'porvenir', code: 1, distance: '3.2km' },
    { name: 'manantiales', code: 2, distance: '3.1km' },
    { name: 'la esmeralda', code: 3, distance: '12km' },
    { name: 'san antonio', code: 4, distance: '2.8km' },
    { name: 'Santa Ana', code: 5, distance: '19km' },
    { name: 'vereda galicia', code: 6, distance: '7.5km' },
    { name: 'san francisco', code: 7, distance: '2.2km' },
    { name: 'Rionegro plaza', code: 9, distance: '2.5km' },
    { name: 'vereda campo alegre', code: 10, distance: '11km' },
    { name: 'Alto de la capilla', code: 11, distance: '17km' },
    { name: 'Vereda Santa Barbara', code: 12, distance: '8.6km' },
  ],
  routes: [
    { name: 'ruta_05', code: 1 },
    { name: 'ruta_03', code: 2 },
    { name: 'circular', code: 3 },
    { name: 'linea_a', code: 4 },
    { name: 'ruta_04', code: 5 },
    { name: 'ruta_303', code: 6 },
  ],
};
