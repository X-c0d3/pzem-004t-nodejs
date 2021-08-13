import { PZEM004T } from '@nanomatic/pzem-004t';

const pzem004t = new PZEM004T({ port: '/dev/cu.usbserial-40' });

setInterval(async () => {
  try {
    const data = await pzem004t.getData();
    console.log(data);
  } catch ({ message }) {
    console.log(`Error: ${message}`);
  }
}, 500);
