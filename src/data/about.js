import { STORAGE_URL } from 'utils/environment.js';

/* eslint-disable max-len */
export const companyDescription = `
  Początki sklepu budowlanego <span class="about__text-part about__text-part--bold">BUDOMAN</span>,
  sięgają 1995 roku, a jego działalność na
  początku koncentrowała się tylko na sprzedaży narzędzi malarskich (wałków, pędzli itp.).<br/>
  Wraz z dynamicznym rozwojem firmy, już po
  roku działania na rynku budowlanym, firma
  <span class="about__text-part about__text-part--bold">BUDOMAN</span> rozszerzyła swój asortyment
  o pełną ofertę artykułów budowlanych.<br/>
  <span class="about__text-part about__text-part--italic">Przeróżne nagrody, oraz osiągnięcia w sprzedaży pozwalały nam zdobywać coraz to
  większą popularność w całej Polsce. Aktualnie
  jesteśmy jednym z największych sklepów
  budowlanych w Polsce. Asortyment naszego
  sklepu sięga dziesiątek tysięcy artykółów
  budowlanych.</span><br/>
  Współpracujemy z największymi dostawcami
  w Europie.<br/>
  Posiadamy również swój oddział, który
  wykonuje prace budowlane na terenie
  całej Polski.
`;
/* eslint-enable max-len */

export const managers = [
  {
    name: 'Małgorzata Lewandowska',
    picturePath: `${STORAGE_URL}/images/management-staff/malgorzata-lewandowska.png`,
    description: 'Odpowiedzialna za budowanie oraz utrzymywanie relacji z partnerami biznesowymi',
    position: 'Prezes zarządu'
  },
  {
    name: 'Łukasz Nowak',
    picturePath: `${STORAGE_URL}/images/management-staff/lukasz-nowak.png`,
    description: 'Odpowiedzialny za rozwój strategiczny w szczególności na rynku Europejskim',
    position: 'Dyrektor ds. wzrostu'
  },
  {
    name: 'Aleksander Winny',
    picturePath: `${STORAGE_URL}/images/management-staff/aleksander-winny.png`,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, consequatur. Ex blanditiis accusamus nam molestiae officiis totam repellendus labore beatae ullam quas, hic facilis fugit illum tenetur, magni est distinctio.',
    position: 'Menager magazynu'
  },
  {
    name: 'Paweł Niegodziwy',
    picturePath: `${STORAGE_URL}/images/management-staff/paweł-niegodziwy.png`,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, consequatur. Ex blanditiis accusamus nam molestiae officiis totam repellendus labore beatae ullam quas, hic facilis fugit illum tenetur, magni est distinctio.',
    position: 'Starszy sprzedawca'
  }
];

export const mappedDirections = {
  0: 'top-left',
  1: 'top-right',
  2: 'bottom-right',
  3: 'bottom-left'
};

export const mappedDividersColors = {
  0: 'green',
  1: 'red',
  2: 'yellow',
  3: 'blue'
};
