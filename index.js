import dotenv from 'dotenv';

dotenv.config();

import fetch from 'node-fetch';
import { sendEmailNotification } from './email.js';

const run = async () => {
  const response = await fetch(
    'https://deolhonafila.prefeitura.sp.gov.br/processadores/dados.php',
    {
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
        'x-requested-with': 'XMLHttpRequest',
      },
      referrer: 'https://deolhonafila.prefeitura.sp.gov.br/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: 'dados=dados',
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
    }
  );

  const healthCenters = await response.json();
  const ubs = healthCenters.find((hc) =>
    hc.equipamento.includes('UBS VILA MATILDE')
  );

  const { coronavac } = ubs;

  if (coronavac === '1') {
    await sendEmailNotification(ubs);
  } else {
    console.log(new Date(), 'Vacina ainda indisponível');
  }
};

run();
