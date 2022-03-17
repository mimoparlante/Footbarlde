import { CONFIG } from './config'

export const WORDS = [
  'dzeko',
'BARAK',
'PEDRO',
'ARAMU',
'VERDE',
'SINGO',
'ELMAS',
'PRAET',
'MUSSO',
'LUKIC',
'PJACA',
'REBIC',
'MALEH',
'HENRY',
'VIDAL',
'BUSIO',
'NZOLA',
'GYASI',
'TOLOI',
'AMIRI',
'MERET',
'FARES',
'ERLIC',
'MARIN',
'REINA',
'HYSAJ',
'KJAER',
'MEDEL',
'BESSA',
'BASIC',
'MANAJ',
'HEFTI',
'EKDAL',
'VERDI',
'VACCA',
'BELEC',
'ZAPPA',
'AYHAN',
'AMIAN',
'FAZIO',
'DEMME',
'VERRE',
'OUNAS',
'BINKS',
'MURRU',
'SOPPY',
'CEIDE',
'OBERT',
'SENSI',
'BARDI',
'PERIN',
'ZOVKO',
'MOLLA',
'RUSSO',
'PIANA',
'DIJKS',
'MBAYE',
'CONTI',
'RUEGG',
'YEPES',
'VIOLA',
'BUKSA',
'EDERA',
'CETER',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
