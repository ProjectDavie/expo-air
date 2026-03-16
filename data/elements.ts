export const CATEGORY_COLORS = {
  'alkali metal': '#ff6b6b',
  'alkaline earth': '#feca57',
  'transition metal': '#48dbfb',
  'post-transition metal': '#1dd1a1',
  'metalloid': '#f368e0',
  'nonmetal': '#5f27cd',
  'halogen': '#ff9ff3',
  'noble gas': '#00d2d3',
  'lanthanide': '#f6e58d',
  'actinide': '#ffaf40',
};

export interface ElementData {
  symbol: string;
  name: string;
  number: number;
  category: keyof typeof CATEGORY_COLORS;
  funFact: string;
  row: number;
  col: number;
}

const elements: ElementData[] = [
  // Row 1
  { symbol: 'H', name: 'Hydrogen', number: 1, category: 'nonmetal', funFact: 'Lightest element; makes up about 75% of the universe’s mass.', row: 1, col: 1 },
  { symbol: 'He', name: 'Helium', number: 2, category: 'noble gas', funFact: 'Second lightest element; used in balloons and as a coolant for MRI magnets.', row: 1, col: 18 },

  // Row 2
  { symbol: 'Li', name: 'Lithium', number: 3, category: 'alkali metal', funFact: 'Used in rechargeable batteries and mood‑stabilising drugs.', row: 2, col: 1 },
  { symbol: 'Be', name: 'Beryllium', number: 4, category: 'alkaline earth', funFact: 'Lightweight metal used in aerospace and nuclear reactors.', row: 2, col: 2 },
  { symbol: 'B', name: 'Boron', number: 5, category: 'metalloid', funFact: 'Used in borosilicate glass and as a semiconductor dopant.', row: 2, col: 13 },
  { symbol: 'C', name: 'Carbon', number: 6, category: 'nonmetal', funFact: 'Basis of all known life; forms diamonds and graphite.', row: 2, col: 14 },
  { symbol: 'N', name: 'Nitrogen', number: 7, category: 'nonmetal', funFact: 'Makes up 78% of Earth’s atmosphere; essential for proteins.', row: 2, col: 15 },
  { symbol: 'O', name: 'Oxygen', number: 8, category: 'nonmetal', funFact: 'Essential for respiration; the third most abundant element in the universe.', row: 2, col: 16 },
  { symbol: 'F', name: 'Fluorine', number: 9, category: 'halogen', funFact: 'Most reactive element; added to toothpaste to prevent cavities.', row: 2, col: 17 },
  { symbol: 'Ne', name: 'Neon', number: 10, category: 'noble gas', funFact: 'Produces a bright reddish‑orange glow in neon lamps.', row: 2, col: 18 },

  // Row 3
  { symbol: 'Na', name: 'Sodium', number: 11, category: 'alkali metal', funFact: 'Reacts violently with water; essential for nerve function.', row: 3, col: 1 },
  { symbol: 'Mg', name: 'Magnesium', number: 12, category: 'alkaline earth', funFact: 'Burns with a brilliant white light; used in flares and alloys.', row: 3, col: 2 },
  { symbol: 'Al', name: 'Aluminium', number: 13, category: 'post-transition metal', funFact: 'Most abundant metal in Earth’s crust; lightweight and corrosion‑resistant.', row: 3, col: 13 },
  { symbol: 'Si', name: 'Silicon', number: 14, category: 'metalloid', funFact: 'Second most abundant element in Earth’s crust; used in computer chips.', row: 3, col: 14 },
  { symbol: 'P', name: 'Phosphorus', number: 15, category: 'nonmetal', funFact: 'Essential for DNA and ATP; glows in the dark (white phosphorus).', row: 3, col: 15 },
  { symbol: 'S', name: 'Sulfur', number: 16, category: 'nonmetal', funFact: 'Smells like rotten eggs; used in gunpowder and vulcanisation.', row: 3, col: 16 },
  { symbol: 'Cl', name: 'Chlorine', number: 17, category: 'halogen', funFact: 'Used to disinfect water; a greenish‑yellow gas at room temperature.', row: 3, col: 17 },
  { symbol: 'Ar', name: 'Argon', number: 18, category: 'noble gas', funFact: 'Used in welding to provide an inert atmosphere.', row: 3, col: 18 },

  // Row 4
  { symbol: 'K', name: 'Potassium', number: 19, category: 'alkali metal', funFact: 'Essential for nerve impulses and muscle contractions.', row: 4, col: 1 },
  { symbol: 'Ca', name: 'Calcium', number: 20, category: 'alkaline earth', funFact: 'Major component of bones and teeth; also used in cement.', row: 4, col: 2 },
  { symbol: 'Sc', name: 'Scandium', number: 21, category: 'transition metal', funFact: 'Used in high‑performance aerospace components.', row: 4, col: 3 },
  { symbol: 'Ti', name: 'Titanium', number: 22, category: 'transition metal', funFact: 'Strong as steel but 45% lighter; used in aircraft and implants.', row: 4, col: 4 },
  { symbol: 'V', name: 'Vanadium', number: 23, category: 'transition metal', funFact: 'Added to steel to make it strong and corrosion‑resistant.', row: 4, col: 5 },
  { symbol: 'Cr', name: 'Chromium', number: 24, category: 'transition metal', funFact: 'Used in stainless steel and chrome plating.', row: 4, col: 6 },
  { symbol: 'Mn', name: 'Manganese', number: 25, category: 'transition metal', funFact: 'Essential for steel production and many biological enzymes.', row: 4, col: 7 },
  { symbol: 'Fe', name: 'Iron', number: 26, category: 'transition metal', funFact: 'Most common element on Earth by mass; core of our planet.', row: 4, col: 8 },
  { symbol: 'Co', name: 'Cobalt', number: 27, category: 'transition metal', funFact: 'Used in magnets, batteries, and blue glass.', row: 4, col: 9 },
  { symbol: 'Ni', name: 'Nickel', number: 28, category: 'transition metal', funFact: 'Used in stainless steel and coins.', row: 4, col: 10 },
  { symbol: 'Cu', name: 'Copper', number: 29, category: 'transition metal', funFact: 'Excellent conductor of electricity; used in wiring.', row: 4, col: 11 },
  { symbol: 'Zn', name: 'Zinc', number: 30, category: 'transition metal', funFact: 'Used to galvanise steel and in batteries.', row: 4, col: 12 },
  { symbol: 'Ga', name: 'Gallium', number: 31, category: 'post-transition metal', funFact: 'Melts in your hand (30 °C); used in semiconductors.', row: 4, col: 13 },
  { symbol: 'Ge', name: 'Germanium', number: 32, category: 'metalloid', funFact: 'Used in infrared optics and early transistors.', row: 4, col: 14 },
  { symbol: 'As', name: 'Arsenic', number: 33, category: 'metalloid', funFact: 'Poisonous, but used in some alloys and semiconductors.', row: 4, col: 15 },
  { symbol: 'Se', name: 'Selenium', number: 34, category: 'nonmetal', funFact: 'Used in photocells and as a dietary supplement.', row: 4, col: 16 },
  { symbol: 'Br', name: 'Bromine', number: 35, category: 'halogen', funFact: 'One of two elements that are liquid at room temperature.', row: 4, col: 17 },
  { symbol: 'Kr', name: 'Krypton', number: 36, category: 'noble gas', funFact: 'Used in some photographic flashes and lasers.', row: 4, col: 18 },

  // Row 5
  { symbol: 'Rb', name: 'Rubidium', number: 37, category: 'alkali metal', funFact: 'Used in atomic clocks and research.', row: 5, col: 1 },
  { symbol: 'Sr', name: 'Strontium', number: 38, category: 'alkaline earth', funFact: 'Gives fireworks a brilliant red colour.', row: 5, col: 2 },
  { symbol: 'Y', name: 'Yttrium', number: 39, category: 'transition metal', funFact: 'Used in LEDs and superconductors.', row: 5, col: 3 },
  { symbol: 'Zr', name: 'Zirconium', number: 40, category: 'transition metal', funFact: 'Used in nuclear fuel rods because it resists corrosion.', row: 5, col: 4 },
  { symbol: 'Nb', name: 'Niobium', number: 41, category: 'transition metal', funFact: 'Added to steel to make it stronger.', row: 5, col: 5 },
  { symbol: 'Mo', name: 'Molybdenum', number: 42, category: 'transition metal', funFact: 'Used in high‑strength alloys and as a catalyst.', row: 5, col: 6 },
  { symbol: 'Tc', name: 'Technetium', number: 43, category: 'transition metal', funFact: 'First artificially produced element; used in medical imaging.', row: 5, col: 7 },
  { symbol: 'Ru', name: 'Ruthenium', number: 44, category: 'transition metal', funFact: 'Used in electrical contacts and as a catalyst.', row: 5, col: 8 },
  { symbol: 'Rh', name: 'Rhodium', number: 45, category: 'transition metal', funFact: 'Used in catalytic converters and jewellery plating.', row: 5, col: 9 },
  { symbol: 'Pd', name: 'Palladium', number: 46, category: 'transition metal', funFact: 'Absorbs hydrogen; used in catalytic converters.', row: 5, col: 10 },
  { symbol: 'Ag', name: 'Silver', number: 47, category: 'transition metal', funFact: 'Best conductor of electricity; used in jewellery and photography.', row: 5, col: 11 },
  { symbol: 'Cd', name: 'Cadmium', number: 48, category: 'transition metal', funFact: 'Used in rechargeable batteries and as a pigment.', row: 5, col: 12 },
  { symbol: 'In', name: 'Indium', number: 49, category: 'post-transition metal', funFact: 'Used in touchscreens and solar cells.', row: 5, col: 13 },
  { symbol: 'Sn', name: 'Tin', number: 50, category: 'post-transition metal', funFact: 'Used to coat steel to make “tin cans”.', row: 5, col: 14 },
  { symbol: 'Sb', name: 'Antimony', number: 51, category: 'metalloid', funFact: 'Used in flame retardants and alloys.', row: 5, col: 15 },
  { symbol: 'Te', name: 'Tellurium', number: 52, category: 'metalloid', funFact: 'Used in solar panels and thermoelectric devices.', row: 5, col: 16 },
  { symbol: 'I', name: 'Iodine', number: 53, category: 'halogen', funFact: 'Essential for thyroid function; antiseptic.', row: 5, col: 17 },
  { symbol: 'Xe', name: 'Xenon', number: 54, category: 'noble gas', funFact: 'Used in flash lamps and ion thrusters.', row: 5, col: 18 },

  // Row 6 (main part: Cs, Ba, then Hf–Rn)
  { symbol: 'Cs', name: 'Caesium', number: 55, category: 'alkali metal', funFact: 'Most reactive metal; used in atomic clocks.', row: 6, col: 1 },
  { symbol: 'Ba', name: 'Barium', number: 56, category: 'alkaline earth', funFact: 'Used in drilling fluids and as a contrast agent in X‑rays.', row: 6, col: 2 },
  // Hf (72) to Rn (86) fill cols 4–18
  { symbol: 'Hf', name: 'Hafnium', number: 72, category: 'transition metal', funFact: 'Used in nuclear control rods and superalloys.', row: 6, col: 4 },
  { symbol: 'Ta', name: 'Tantalum', number: 73, category: 'transition metal', funFact: 'Used in capacitors and surgical implants.', row: 6, col: 5 },
  { symbol: 'W', name: 'Tungsten', number: 74, category: 'transition metal', funFact: 'Highest melting point of all metals; used in light bulb filaments.', row: 6, col: 6 },
  { symbol: 'Re', name: 'Rhenium', number: 75, category: 'transition metal', funFact: 'Used in jet engine turbines.', row: 6, col: 7 },
  { symbol: 'Os', name: 'Osmium', number: 76, category: 'transition metal', funFact: 'Densest naturally occurring element.', row: 6, col: 8 },
  { symbol: 'Ir', name: 'Iridium', number: 77, category: 'transition metal', funFact: 'Most corrosion‑resistant metal; used in spark plugs.', row: 6, col: 9 },
  { symbol: 'Pt', name: 'Platinum', number: 78, category: 'transition metal', funFact: 'Used in catalytic converters, jewellery, and anticancer drugs.', row: 6, col: 10 },
  { symbol: 'Au', name: 'Gold', number: 79, category: 'transition metal', funFact: 'Highly malleable and non‑corrosive; used in electronics and jewellery.', row: 6, col: 11 },
  { symbol: 'Hg', name: 'Mercury', number: 80, category: 'transition metal', funFact: 'Only metal that is liquid at room temperature; used in thermometers.', row: 6, col: 12 },
  { symbol: 'Tl', name: 'Thallium', number: 81, category: 'post-transition metal', funFact: 'Highly toxic; used in some electronic devices.', row: 6, col: 13 },
  { symbol: 'Pb', name: 'Lead', number: 82, category: 'post-transition metal', funFact: 'Used in batteries, radiation shielding, and historically in pipes.', row: 6, col: 14 },
  { symbol: 'Bi', name: 'Bismuth', number: 83, category: 'post-transition metal', funFact: 'Heaviest stable element; used in cosmetics and medicine.', row: 6, col: 15 },
  { symbol: 'Po', name: 'Polonium', number: 84, category: 'post-transition metal', funFact: 'Highly radioactive; used in antistatic devices.', row: 6, col: 16 },
  { symbol: 'At', name: 'Astatine', number: 85, category: 'halogen', funFact: 'Rarest naturally occurring element; highly radioactive.', row: 6, col: 17 },
  { symbol: 'Rn', name: 'Radon', number: 86, category: 'noble gas', funFact: 'Radioactive gas that can accumulate in basements.', row: 6, col: 18 },

  // Row 7 (main part: Fr, Ra, then Rf–Og)
  { symbol: 'Fr', name: 'Francium', number: 87, category: 'alkali metal', funFact: 'Highly unstable and radioactive; extremely rare.', row: 7, col: 1 },
  { symbol: 'Ra', name: 'Radium', number: 88, category: 'alkaline earth', funFact: 'Discovered by Marie Curie; used in radiotherapy.', row: 7, col: 2 },
  // Rf (104) to Og (118) fill cols 4–18
  { symbol: 'Rf', name: 'Rutherfordium', number: 104, category: 'transition metal', funFact: 'Synthetic; named after Ernest Rutherford.', row: 7, col: 4 },
  { symbol: 'Db', name: 'Dubnium', number: 105, category: 'transition metal', funFact: 'Synthetic; named after Dubna, Russia.', row: 7, col: 5 },
  { symbol: 'Sg', name: 'Seaborgium', number: 106, category: 'transition metal', funFact: 'Named after Glenn T. Seaborg.', row: 7, col: 6 },
  { symbol: 'Bh', name: 'Bohrium', number: 107, category: 'transition metal', funFact: 'Named after Niels Bohr.', row: 7, col: 7 },
  { symbol: 'Hs', name: 'Hassium', number: 108, category: 'transition metal', funFact: 'Named after Hesse, Germany.', row: 7, col: 8 },
  { symbol: 'Mt', name: 'Meitnerium', number: 109, category: 'transition metal', funFact: 'Named after Lise Meitner.', row: 7, col: 9 },
  { symbol: 'Ds', name: 'Darmstadtium', number: 110, category: 'transition metal', funFact: 'Named after Darmstadt, Germany.', row: 7, col: 10 },
  { symbol: 'Rg', name: 'Roentgenium', number: 111, category: 'transition metal', funFact: 'Named after Wilhelm Röntgen.', row: 7, col: 11 },
  { symbol: 'Cn', name: 'Copernicium', number: 112, category: 'transition metal', funFact: 'Named after Nicolaus Copernicus.', row: 7, col: 12 },
  { symbol: 'Nh', name: 'Nihonium', number: 113, category: 'post-transition metal', funFact: 'Named after Japan (Nihon).', row: 7, col: 13 },
  { symbol: 'Fl', name: 'Flerovium', number: 114, category: 'post-transition metal', funFact: 'Named after Flerov Laboratory, Russia.', row: 7, col: 14 },
  { symbol: 'Mc', name: 'Moscovium', number: 115, category: 'post-transition metal', funFact: 'Named after Moscow, Russia.', row: 7, col: 15 },
  { symbol: 'Lv', name: 'Livermorium', number: 116, category: 'post-transition metal', funFact: 'Named after Lawrence Livermore National Laboratory.', row: 7, col: 16 },
  { symbol: 'Ts', name: 'Tennessine', number: 117, category: 'halogen', funFact: 'Named after Tennessee, USA.', row: 7, col: 17 },
  { symbol: 'Og', name: 'Oganesson', number: 118, category: 'noble gas', funFact: 'Named after Yuri Oganessian.', row: 7, col: 18 },

  // Row 8 (lanthanides: La–Lu, cols 3–17)
  { symbol: 'La', name: 'Lanthanum', number: 57, category: 'lanthanide', funFact: 'Used in camera lenses and carbon arc lamps.', row: 8, col: 3 },
  { symbol: 'Ce', name: 'Cerium', number: 58, category: 'lanthanide', funFact: 'Used in catalytic converters and lighter flints.', row: 8, col: 4 },
  { symbol: 'Pr', name: 'Praseodymium', number: 59, category: 'lanthanide', funFact: 'Used in aircraft engines and magnets.', row: 8, col: 5 },
  { symbol: 'Nd', name: 'Neodymium', number: 60, category: 'lanthanide', funFact: 'Used in strong permanent magnets (Nd magnets).', row: 8, col: 6 },
  { symbol: 'Pm', name: 'Promethium', number: 61, category: 'lanthanide', funFact: 'Radioactive; used in luminous paint.', row: 8, col: 7 },
  { symbol: 'Sm', name: 'Samarium', number: 62, category: 'lanthanide', funFact: 'Used in cancer treatment and magnets.', row: 8, col: 8 },
  { symbol: 'Eu', name: 'Europium', number: 63, category: 'lanthanide', funFact: 'Used in red phosphors for TV screens.', row: 8, col: 9 },
  { symbol: 'Gd', name: 'Gadolinium', number: 64, category: 'lanthanide', funFact: 'Used in MRI contrast agents.', row: 8, col: 10 },
  { symbol: 'Tb', name: 'Terbium', number: 65, category: 'lanthanide', funFact: 'Used in solid‑state devices and green phosphors.', row: 8, col: 11 },
  { symbol: 'Dy', name: 'Dysprosium', number: 66, category: 'lanthanide', funFact: 'Used in hard disk drives and lasers.', row: 8, col: 12 },
  { symbol: 'Ho', name: 'Holmium', number: 67, category: 'lanthanide', funFact: 'Has the highest magnetic strength of any element.', row: 8, col: 13 },
  { symbol: 'Er', name: 'Erbium', number: 68, category: 'lanthanide', funFact: 'Used in fibre‑optic amplifiers.', row: 8, col: 14 },
  { symbol: 'Tm', name: 'Thulium', number: 69, category: 'lanthanide', funFact: 'Used in portable X‑ray devices.', row: 8, col: 15 },
  { symbol: 'Yb', name: 'Ytterbium', number: 70, category: 'lanthanide', funFact: 'Used in atomic clocks and stress gauges.', row: 8, col: 16 },
  { symbol: 'Lu', name: 'Lutetium', number: 71, category: 'lanthanide', funFact: 'Used in positron emission tomography (PET) detectors.', row: 8, col: 17 },

  // Row 9 (actinides: Ac–Lr, cols 3–17)
  { symbol: 'Ac', name: 'Actinium', number: 89, category: 'actinide', funFact: 'Radioactive; used in neutron sources.', row: 9, col: 3 },
  { symbol: 'Th', name: 'Thorium', number: 90, category: 'actinide', funFact: 'Used in gas mantles and as a nuclear fuel.', row: 9, col: 4 },
  { symbol: 'Pa', name: 'Protactinium', number: 91, category: 'actinide', funFact: 'Rare and radioactive; used in scientific research.', row: 9, col: 5 },
  { symbol: 'U', name: 'Uranium', number: 92, category: 'actinide', funFact: 'Used as fuel in nuclear reactors and in nuclear weapons.', row: 9, col: 6 },
  { symbol: 'Np', name: 'Neptunium', number: 93, category: 'actinide', funFact: 'First synthetic transuranium element.', row: 9, col: 7 },
  { symbol: 'Pu', name: 'Plutonium', number: 94, category: 'actinide', funFact: 'Used in nuclear weapons and radioisotope thermoelectric generators.', row: 9, col: 8 },
  { symbol: 'Am', name: 'Americium', number: 95, category: 'actinide', funFact: 'Used in smoke detectors.', row: 9, col: 9 },
  { symbol: 'Cm', name: 'Curium', number: 96, category: 'actinide', funFact: 'Named after Marie and Pierre Curie.', row: 9, col: 10 },
  { symbol: 'Bk', name: 'Berkelium', number: 97, category: 'actinide', funFact: 'Named after Berkeley, California.', row: 9, col: 11 },
  { symbol: 'Cf', name: 'Californium', number: 98, category: 'actinide', funFact: 'Used as a neutron source in airport scanners.', row: 9, col: 12 },
  { symbol: 'Es', name: 'Einsteinium', number: 99, category: 'actinide', funFact: 'Named after Albert Einstein.', row: 9, col: 13 },
  { symbol: 'Fm', name: 'Fermium', number: 100, category: 'actinide', funFact: 'Named after Enrico Fermi.', row: 9, col: 14 },
  { symbol: 'Md', name: 'Mendelevium', number: 101, category: 'actinide', funFact: 'Named after Dmitri Mendeleev.', row: 9, col: 15 },
  { symbol: 'No', name: 'Nobelium', number: 102, category: 'actinide', funFact: 'Named after Alfred Nobel.', row: 9, col: 16 },
  { symbol: 'Lr', name: 'Lawrencium', number: 103, category: 'actinide', funFact: 'Named after Ernest Lawrence.', row: 9, col: 17 },
];

export const ELEMENTS = elements;