import { PZEM004T } from '@nanomatic/pzem-004t';

const pzem004t = new PZEM004T({ port: '/dev/cu.usbserial-1440' });

setInterval(async () => {
  try {
    const data = await pzem004t.getData();
    console.log(new Date());
    console.log(data);
  } catch ({ message }) {
    console.log(`Error: ${message}`);
  }
}, 500);

// PZEM PIN
/*
1. RED  5v
2. GREEN
3. WHITE
4. GND
 */
