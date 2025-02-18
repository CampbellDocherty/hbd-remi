import cassie from './Me & U - Cassie.mp3';

import overboard from './Overboard - Miles from Kinshasa.mp3';
import blinding from './Blinding Lights - The Weeknd.mp3';
import wepaid from './We Paid (feat. 42 Dugg) - Lil Baby.mp3';
import either from './either on or off the drugs - JPEGMAFIA.mp3';
import reallove from './REAL LOVE with Fashionspitta - MIKE.mp3';
import forgot from './FORGOT ABOUT U - Cakedog.mp3';
import dk from './dk001 - Tlim Shug.mp3';
import burn from './Burn-A-Hoe - Cakedog.mp3';
import gimme from './Gimme - 1 9 0 5.mp3';
import ifu from './If U Let Me - dj blackpower.mp3';

type Media = {
  src: string;
};

export type Copy = {
  title: string;
  children: string[];
  media: Media[];
};

export const copy: Copy[] = [
  {
    title: '(2) Day trip to Samothraki',
    children: [
      '7 hours of ridiculous sea sickness',
      'Remi sacrificed his back for a sleep on the top deck',
      'I think a few people threw up ??',
      'Cammy proved his legs could not burn or tan - 7 hours of direct Greek sunlight no visible changes in complexion',
      'Incredible sunset swim everyone stung by jellyfish',
      'Waterfalls...',
      'HONEY GOAT',
      'Indescribably beautiful journey home',
    ],
    media: [{ src: cassie }],
  },
  {
    title: 'Glifoneri beach day',
    children: [
      'We went to a small beach with a resturant that did red wine Octopus',
      'I think Fed got pissed at you for always teasing him',
      'Played some football',
    ],
    media: [
      {
        src: overboard,
      },
    ],
  },
  {
    title: 'Bulgarian boat trip',
    children: [
      'Mouses meal paid for by Uncle Stathis - Remi almost chokes on bread (Near death count: 1)',
      'Drunk driving courtesy of yours truly (Near death count: 2)',
      'Swimming to the boat (Near death count: 3)',
      'Whisky with the Bulgarians, lovely guys',
      'Swimming back from the boat (Near death count: 4)',
      'Drunk drive back to the house (Near death count: 5)',
    ],
    media: [
      {
        src: blinding,
      },
      {
        src: wepaid,
      },
    ],
  },
  {
    title: 'Late night long exposure photos',
    children: [
      "Waiting and waiting I don't remember what music we listened to",
    ],
    media: [],
  },
  {
    title: 'Views of Thessaloniki',
    children: ['Tsipouro with Xristos', 'Up on to hook up hill for views'],
    media: [],
  },
  {
    title: 'Additional media as birthday recommendations',
    children: [],
    media: [
      { src: either },
      { src: reallove },
      { src: forgot },
      { src: dk },
      { src: burn },
      { src: gimme },
      { src: ifu },
    ],
  },
];
