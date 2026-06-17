import xlsx from 'xlsx';
console.log('Default export keys:', Object.keys(xlsx || {}));

import * as xlsxStar from 'xlsx';
console.log('Star export keys:', Object.keys(xlsxStar));
