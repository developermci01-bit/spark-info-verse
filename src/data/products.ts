export type ProductCategory =
  | 'engine-oils'
  | 'gear-brake-oils'
  | 'greases'
  | 'hydraulic-oils'
  | 'coolants';

export type Product = {
  category: ProductCategory;
  subCategory?: string;
  grade: string;
  application?: string;
  packs: string[];
};

export const products: Product[] = [
  // ===== Engine Oils — Bike & Scooty =====
  { category: 'engine-oils', subCategory: 'Bike & Scooty', grade: '20W40 API SL', application: 'Motorcycles & scooters', packs: ['900 ml', '1 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Bike & Scooty', grade: '20W50 API SL', application: 'Motorcycles & scooters', packs: ['900 ml', '1 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Bike & Scooty', grade: '20W40 API SM', application: 'Motorcycles & scooters', packs: ['900 ml', '1 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Bike & Scooty', grade: '20W50 API SM', application: 'Motorcycles & scooters', packs: ['900 ml', '1 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Bike & Scooty', grade: '20W40 API SN', application: 'Motorcycles & scooters', packs: ['900 ml', '1 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Bike & Scooty', grade: '20W50 API SN', application: 'Motorcycles & scooters', packs: ['900 ml', '1 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Bike & Scooty', grade: '20W40 API SN Plus', application: 'Motorcycles & scooters', packs: ['900 ml', '1 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Bike & Scooty', grade: '20W50 API SN Plus', application: 'Motorcycles & scooters', packs: ['900 ml', '1 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Bike & Scooty', grade: '10W30 API SM', application: 'Motorcycles & scooters', packs: ['800 ml', '900 ml', '1 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Bike & Scooty', grade: '10W30 API SN', application: 'Motorcycles & scooters', packs: ['800 ml', '900 ml', '1 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Bike & Scooty', grade: '10W30 API SN Plus', application: 'Motorcycles & scooters', packs: ['800 ml', '900 ml', '1 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Bike & Scooty', grade: '15W50 API SN', application: 'Performance motorcycles', packs: ['2.5 L', '50 L', '210 L'] },

  // ===== Engine Oils — Car, Bus, Tractor, Truck & Auto Rickshaw =====
  { category: 'engine-oils', subCategory: 'Car, Bus, Tractor, Truck & Auto Rickshaw', grade: '20W40 Multi Grade', application: 'Petrol & diesel engines', packs: ['1 L', '3 L', '3.5 L', '5 L', '6 L', '7.5 L', '8.5 L', '10 L', '15 L', '20 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Car, Bus, Tractor, Truck & Auto Rickshaw', grade: '20W50 Multi Grade', application: 'Petrol & diesel engines', packs: ['1 L', '3 L', '3.5 L', '5 L', '6 L', '7.5 L', '8.5 L', '10 L', '15 L', '20 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Car, Bus, Tractor, Truck & Auto Rickshaw', grade: '15W40 CH-4', application: 'Heavy-duty diesel engines', packs: ['1 L', '3 L', '3.5 L', '5 L', '7.5 L', '8.5 L', '10 L', '15 L', '20 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Car, Bus, Tractor, Truck & Auto Rickshaw', grade: '20W40 CH-4', application: 'Heavy-duty diesel engines', packs: ['1 L', '3 L', '3.5 L', '5 L', '7.5 L', '8.5 L', '10 L', '15 L', '20 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Car, Bus, Tractor, Truck & Auto Rickshaw', grade: '15W40 CI-4', application: 'Heavy-duty diesel engines', packs: ['1 L', '3 L', '3.5 L', '5 L', '7.5 L', '8.5 L', '10 L', '15 L', '20 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Car, Bus, Tractor, Truck & Auto Rickshaw', grade: '20W40 CI-4', application: 'Heavy-duty diesel engines', packs: ['1 L', '3 L', '3.5 L', '5 L', '7.5 L', '8.5 L', '10 L', '15 L', '20 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Car, Bus, Tractor, Truck & Auto Rickshaw', grade: '15W40 CI-4 Plus', application: 'Premium heavy-duty diesel', packs: ['1 L', '3.5 L', '5 L', '7.5 L', '8.5 L', '10 L', '15 L', '20 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Car, Bus, Tractor, Truck & Auto Rickshaw', grade: '20W40 CI-4 Plus', application: 'Premium heavy-duty diesel', packs: ['1 L', '3.5 L', '5 L', '7.5 L', '8.5 L', '10 L', '15 L', '20 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Car, Bus, Tractor, Truck & Auto Rickshaw', grade: '5W30 API SN', application: 'Modern passenger cars', packs: ['1 L', '3.5 L', '5 L', '10 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Car, Bus, Tractor, Truck & Auto Rickshaw', grade: '5W40 API SN', application: 'Modern passenger cars', packs: ['1 L', '3.5 L', '5 L', '10 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Car, Bus, Tractor, Truck & Auto Rickshaw', grade: '10W40 API SN', application: 'Modern passenger cars', packs: ['1 L', '3.5 L', '5 L', '10 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Car, Bus, Tractor, Truck & Auto Rickshaw', grade: '5W30 API SN/CF', application: 'Mixed fleet petrol & diesel', packs: ['1 L', '3.5 L', '5 L', '10 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Car, Bus, Tractor, Truck & Auto Rickshaw', grade: '5W40 API SN/CF', application: 'Mixed fleet petrol & diesel', packs: ['1 L', '3.5 L', '5 L', '10 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Car, Bus, Tractor, Truck & Auto Rickshaw', grade: '10W40 API SN/CF', application: 'Mixed fleet petrol & diesel', packs: ['1 L', '3.5 L', '5 L', '10 L', '50 L', '210 L'] },
  { category: 'engine-oils', subCategory: 'Car, Bus, Tractor, Truck & Auto Rickshaw', grade: 'PSO SAE-40', application: 'Monograde diesel engines', packs: ['1 L', '3.5 L', '5 L', '10 L', '20 L', '50 L', '210 L'] },

  // ===== Gear & Brake Oils =====
  { category: 'gear-brake-oils', subCategory: 'Gear Oil', grade: 'EP-90', application: 'Manual transmissions & differentials', packs: ['1 L', '3.5 L', '5 L', '10 L', '20 L', '26 L', '50 L', '210 L'] },
  { category: 'gear-brake-oils', subCategory: 'Gear Oil', grade: 'EP-140', application: 'Heavy-duty differentials', packs: ['1 L', '3.5 L', '5 L', '10 L', '20 L', '26 L', '50 L', '210 L'] },
  { category: 'gear-brake-oils', subCategory: 'Gear Oil', grade: 'EP-220', application: 'Industrial gearboxes', packs: ['1 L', '3.5 L', '5 L', '10 L', '20 L', '26 L', '50 L', '210 L'] },
  { category: 'gear-brake-oils', subCategory: 'Gear Oil', grade: 'EP-320', application: 'Industrial gearboxes', packs: ['1 L', '3.5 L', '5 L', '10 L', '20 L', '26 L', '50 L', '210 L'] },
  { category: 'gear-brake-oils', subCategory: 'Gear Oil', grade: 'EP-460', application: 'Heavy industrial gearboxes', packs: ['1 L', '3.5 L', '5 L', '10 L', '20 L', '26 L', '50 L', '210 L'] },
  { category: 'gear-brake-oils', subCategory: 'Shocker & Brake Oil', grade: 'Fork Oil', application: 'Motorcycle front forks', packs: ['175 ml'] },
  { category: 'gear-brake-oils', subCategory: 'Shocker & Brake Oil', grade: 'DOT-4 Brake Oil', application: 'Hydraulic brake systems', packs: ['100 ml', '250 ml'] },
  { category: 'gear-brake-oils', subCategory: 'Transmission Oil', grade: 'TQ Fluid (Steering Oil)', application: 'Power steering & torque converters', packs: ['500 ml', '1 L', '5 L'] },
  { category: 'gear-brake-oils', subCategory: 'Transmission Oil', grade: 'UTTO', application: 'Tractor transmission & hydraulics', packs: ['5 L', '10 L', '26 L'] },

  // ===== Greases =====
  { category: 'greases', grade: 'Red Calcium Wheel Bearing Chassis Grease', application: 'Wheel bearings & chassis lubrication', packs: ['500 g', '1 kg', '2 kg', '3 kg', '5 kg', '10 kg', '18 kg'] },
  { category: 'greases', grade: 'Golden Calcium Wheel Bearing Chassis Grease', application: 'Wheel bearings & chassis lubrication', packs: ['500 g', '1 kg', '2 kg', '3 kg', '5 kg', '10 kg', '18 kg'] },

  // ===== Hydraulic Oils =====
  { category: 'hydraulic-oils', grade: 'AW-38 Hydraulic Oil', application: 'Light-duty hydraulic systems', packs: ['1 L', '3.5 L', '5 L', '10 L', '20 L', '26 L', '50 L', '210 L'] },
  { category: 'hydraulic-oils', grade: 'AW-42 Hydraulic Oil', application: 'General hydraulic systems', packs: ['1 L', '3.5 L', '5 L', '10 L', '20 L', '26 L', '50 L', '210 L'] },
  { category: 'hydraulic-oils', grade: 'AW-68 Hydraulic Oil', application: 'Heavy-duty hydraulic systems', packs: ['1 L', '3.5 L', '5 L', '10 L', '20 L', '26 L', '50 L', '210 L'] },

  // ===== Coolants =====
  { category: 'coolants', subCategory: 'Coolant', grade: 'Coolant', application: 'Engine cooling systems', packs: ['1 L'] },
  { category: 'coolants', subCategory: 'Coolant', grade: 'Coolant Extra Cool', application: 'High-performance cooling', packs: ['1 L'] },
  { category: 'coolants', subCategory: 'DEF / AD Blue', grade: 'AD Blue (DEF)', application: 'Diesel exhaust fluid for SCR systems', packs: ['10 L', '20 L', '210 L'] },
];

export const getProductsByCategory = (category: ProductCategory): Product[] =>
  products.filter((p) => p.category === category);

export const groupBySubCategory = (items: Product[]): Record<string, Product[]> => {
  return items.reduce<Record<string, Product[]>>((acc, item) => {
    const key = item.subCategory ?? '';
    (acc[key] = acc[key] || []).push(item);
    return acc;
  }, {});
};