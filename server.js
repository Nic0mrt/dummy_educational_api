const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const users = [{ login: 'admin', password: 'password' }];

let repertoire = [
  {
    id: 'e60c34aa-5461-43a8-841c-0ef417059421',
    first_name: 'Gene',
    last_name: 'Walesby',
    email: 'gwalesby0@parallels.com',
    gender: 'Male',
  },
  {
    id: 'a7caa9b3-bd7d-4ad1-b457-34734c557b78',
    first_name: 'Kaylil',
    last_name: 'Sweeting',
    email: 'ksweeting1@nyu.edu',
    gender: 'Female',
  },
  {
    id: '378ffc64-5d10-431c-b7b7-b3307a7e8ed2',
    first_name: 'Theda',
    last_name: 'Keaves',
    email: 'tkeaves2@4shared.com',
    gender: 'Female',
  },
  {
    id: '7864c369-df45-4b0e-8364-7757178b2ec5',
    first_name: 'Bryce',
    last_name: "O' Dornan",
    email: 'bodornan3@ovh.net',
    gender: 'Male',
  },
  {
    id: 'd3a4753f-f051-4c8c-92f0-a740236801c4',
    first_name: 'Lenna',
    last_name: 'Pettwood',
    email: 'lpettwood4@webs.com',
    gender: 'Female',
  },
  {
    id: '6c255d93-2cf3-420b-808b-a399a2a7ac58',
    first_name: 'Bendix',
    last_name: 'Batteson',
    email: 'bbatteson5@merriam-webster.com',
    gender: 'Male',
  },
  {
    id: '7b3860fe-988e-46e3-97ea-90040537b53c',
    first_name: 'Neall',
    last_name: 'Kettoe',
    email: 'nkettoe6@umich.edu',
    gender: 'Male',
  },
  {
    id: 'da7e772b-36ef-456f-93a2-130c036166a0',
    first_name: 'Debbi',
    last_name: 'Sollas',
    email: 'dsollas7@nationalgeographic.com',
    gender: 'Female',
  },
  {
    id: '2ff41f90-12b6-4d6a-9f29-9389b74ddce6',
    first_name: 'Fax',
    last_name: 'Hemphill',
    email: 'fhemphill8@accuweather.com',
    gender: 'Male',
  },
  {
    id: 'f791198a-7d4f-465b-9611-ada3dd29f1cf',
    first_name: 'Clarisse',
    last_name: 'Poletto',
    email: 'cpoletto9@a8.net',
    gender: 'Female',
  },
  {
    id: '139d0df3-ef54-4481-91cf-db0d9c271119',
    first_name: 'Lamar',
    last_name: 'Nolder',
    email: 'lnoldera@squidoo.com',
    gender: 'Male',
  },
  {
    id: 'c1ad0284-6fe1-4f8c-9049-8d856de7a96d',
    first_name: 'Ephrem',
    last_name: 'Conant',
    email: 'econantb@ca.gov',
    gender: 'Male',
  },
  {
    id: 'a0ca5f43-759c-4215-94d9-a0d2df2ac806',
    first_name: 'Duke',
    last_name: 'Coopey',
    email: 'dcoopeyc@live.com',
    gender: 'Male',
  },
  {
    id: '67250a42-2790-4fa0-9585-ce865fcdc9fa',
    first_name: 'Ignace',
    last_name: 'Donati',
    email: 'idonatid@ed.gov',
    gender: 'Male',
  },
  {
    id: '6e1e2918-a2cf-44f0-bed9-1fab809966b0',
    first_name: 'Chilton',
    last_name: 'Hartzenberg',
    email: 'chartzenberge@uol.com.br',
    gender: 'Male',
  },
  {
    id: '0e90d61a-90c2-49bc-bb93-a31abfe54a33',
    first_name: 'Kristin',
    last_name: 'Luberti',
    email: 'klubertif@google.ca',
    gender: 'Female',
  },
  {
    id: '6dedb8be-a679-4bc8-bd14-1aa38583bccc',
    first_name: 'Doy',
    last_name: 'Piddlesden',
    email: 'dpiddlesdeng@pbs.org',
    gender: 'Male',
  },
  {
    id: '4c87ebd1-d3f0-45e8-9329-067b2123a1cf',
    first_name: 'Tracy',
    last_name: 'Espinay',
    email: 'tespinayh@fc2.com',
    gender: 'Female',
  },
  {
    id: '92fe0ad9-6c4f-4f9e-8eb8-ed50b0dec0e9',
    first_name: 'Lynnelle',
    last_name: 'Arnhold',
    email: 'larnholdi@bbc.co.uk',
    gender: 'Female',
  },
  {
    id: 'a0bf951d-1439-43e0-994c-0edd55086f1d',
    first_name: 'Babette',
    last_name: 'Viccars',
    email: 'bviccarsj@paypal.com',
    gender: 'Female',
  },
  {
    id: 'b1303e77-4689-4f4d-b1e6-746616bbea96',
    first_name: 'Breanne',
    last_name: 'Owens',
    email: 'bowensk@ihg.com',
    gender: 'Female',
  },
  {
    id: '126439fd-3233-4cba-91f9-bea01e56a076',
    first_name: 'Joann',
    last_name: 'Andreolli',
    email: 'jandreollil@liveinternet.ru',
    gender: 'Female',
  },
  {
    id: 'b78f7ab9-d37c-4c50-82ca-98aa5d2fc50a',
    first_name: 'Ebonee',
    last_name: 'Church',
    email: 'echurchm@friendfeed.com',
    gender: 'Female',
  },
  {
    id: '6cf3c3cd-3358-49ec-a2fa-86468122e9bd',
    first_name: 'Eula',
    last_name: 'Mattisson',
    email: 'emattissonn@amazon.com',
    gender: 'Female',
  },
  {
    id: '3d8d6874-7808-4fb2-9c09-f040cfa3f959',
    first_name: 'Miltie',
    last_name: 'Burburough',
    email: 'mburburougho@fastcompany.com',
    gender: 'Male',
  },
  {
    id: '08d3390f-a9a6-4b55-8398-6c7f815a075f',
    first_name: 'Janine',
    last_name: 'Grenville',
    email: 'jgrenvillep@amazonaws.com',
    gender: 'Female',
  },
  {
    id: '72e61a68-5c7e-4c3f-b304-6d9fad25cb2a',
    first_name: 'Abigael',
    last_name: 'Nequest',
    email: 'anequestq@china.com.cn',
    gender: 'Female',
  },
  {
    id: '1a385100-9fb1-455b-b44a-265c2afcbf85',
    first_name: 'Tania',
    last_name: 'Castangia',
    email: 'tcastangiar@guardian.co.uk',
    gender: 'Female',
  },
  {
    id: '56836980-390b-47fb-981b-c132129fc307',
    first_name: 'Laurianne',
    last_name: 'Shovelbottom',
    email: 'lshovelbottoms@china.com.cn',
    gender: 'Female',
  },
  {
    id: '1d7aab9c-269c-492a-b58d-0725038e549b',
    first_name: 'Eda',
    last_name: 'Albert',
    email: 'ealbertt@comcast.net',
    gender: 'Female',
  },
  {
    id: 'f6c35c6f-47e6-47ca-8f61-d159524e79cc',
    first_name: 'Renee',
    last_name: 'Tym',
    email: 'rtymu@sphinn.com',
    gender: 'Female',
  },
  {
    id: 'a229595b-0afc-40d8-bb0e-2d60837653f8',
    first_name: 'Claudell',
    last_name: 'McGinn',
    email: 'cmcginnv@angelfire.com',
    gender: 'Male',
  },
  {
    id: '05f3b03b-e35f-41de-84b7-f2a99eab3463',
    first_name: 'Tedmund',
    last_name: 'Olivo',
    email: 'tolivow@nymag.com',
    gender: 'Male',
  },
  {
    id: 'b9f99c26-bac2-403b-9a54-892918734a8c',
    first_name: 'Atlanta',
    last_name: 'Hoodless',
    email: 'ahoodlessx@a8.net',
    gender: 'Female',
  },
  {
    id: 'b27d1846-d435-494f-aac3-292dff968c8d',
    first_name: 'Cordie',
    last_name: 'Galego',
    email: 'cgalegoy@ft.com',
    gender: 'Female',
  },
  {
    id: 'd8ef55cd-3e9a-436d-9204-1ec3e9a9ed1a',
    first_name: 'Linnie',
    last_name: 'Dyneley',
    email: 'ldyneleyz@va.gov',
    gender: 'Female',
  },
  {
    id: '695d8196-1bb6-4560-bde6-f967200002dc',
    first_name: 'Lesya',
    last_name: 'Goldis',
    email: 'lgoldis10@dailymail.co.uk',
    gender: 'Female',
  },
  {
    id: 'df5dfbe6-e9a2-461d-a6d6-54d0a0b935b3',
    first_name: 'Billye',
    last_name: 'Derl',
    email: 'bderl11@cornell.edu',
    gender: 'Female',
  },
  {
    id: 'e2372216-df15-4c49-a911-235ef16a22d1',
    first_name: 'Lucita',
    last_name: 'Loughlan',
    email: 'lloughlan12@toplist.cz',
    gender: 'Female',
  },
  {
    id: 'f121c03f-6e31-413e-be88-9312ac599d44',
    first_name: 'Lauritz',
    last_name: 'Vamplers',
    email: 'lvamplers13@t.co',
    gender: 'Male',
  },
];

app.post('/login', (req, res) => {
  const { login, password } = req.body;
  console.log(login, password);
  const check = users.filter(user => user.login === login);
  console.log(check);
  if (check.length === 0 || !check[0].password === password) {
    res.json({ ok: false, error: 'mauvais identifiants' });
  } else {
    res.json({ ok: true, login: login });
  }
});

app.post('/register', (req, res) => {
  const { login, password } = req.body;
  if (!login && !password) {
    res.json({ ok: false, error: 'il faut renseigner les deux champs' });
  }
  const check = users.filter(user => user.login === login);
  if (check.length === 0) {
    users.push({ login, password });
    res.json({ ok: true, data: login });
  } else {
    res.json({ ok: false, error: "cet identifiant n'es pas disponible" });
  }
});

app.get('/repertoire', (_, res) => {
  res.json({ ok: true, data: repertoire });
});

app.get('/users', (req, res) => {
  res.json({ ok: true, data: users });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
