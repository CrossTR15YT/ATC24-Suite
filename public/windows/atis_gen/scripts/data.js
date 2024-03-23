/* let aircraftTypes = [
  'A-10 Warthog',
  'A6M Zero',
  'Airbus A220',
  'Airbus A320',
  'Airbus A330',
  'Airbus A340',
  'Airbus A350',
  'Airbus A380',
  'Airbus Beluga',
  'Avro Vulcan',
  'B2 Bomber',
  'B29',
  'Hot Air Balloon',
  'Bell 412',
  'Blimp',
  'Boeing 737',
  'Boeing 747',
  'Boeing 747 Cargo',
  'Boeing 757',
  'Boeing 757 Cargo',
  'Boeing 767',
  'Boeing 767 Cargo',
  'Boeing 777',
  'Boeing 777 Cargo',
  'Boeing 787',
  'Bombardier CRJ700',
  'Bombardier Learjet',
  'Bombardier Q400',
  'C130 Hercules',
  'Caravan Blimp',
  'Cessna 172',
  'Cessna 172 Seaplane',
  'Cessna 182',
  'Cessna 182 Seaplane',
  'Cessna Caravan',
  'Cessna Caravan Seaplane',
  'Cessna Caravan Skydiving',
  'Chinook',
  'Cirrus Vision SF50',
  'Concorde',
  'DHC-6 Twin Otter',
  'DHC-6 Twin Otter Seaplane',
  'Douglas MD11',
  'Douglas MD11 Cargo',
  'Douglas MD90',
  'Boeing DreamLifter',
  'English Electric Lightning',
  'Eurofighter Typhoon',
  'Extra 300s',
  'F/A-18 Super-Hornet',
  'F-14 Tomcat',
  'F-15E Strike Eagle',
  'F-16',
  'F-22',
  'F-35B',
  'F4 Phantom',
  'F4U Corsair',
  'Fokker Dr1',
  'Airbus H135',
  'Hawker Harrier (VTOl)',
  'Hawk T1',
  'Hurricane',
  'Mig-15',
  'Walrus',
  'P38 Lightning',
  'P51 Mustang',
  'Parastrike',
  'Piper Cub',
  'Piper Cub Seaplane',
  'Piper PA-28',
]; */

let airportATISData = [
  {
    icaoCode: 'IGAR',
    maxAircraftSize: 'N/A',
    chartPacks: [
      {
        author: 'Official',
        link: 'https://github.com/Treelon/ptfs-charts/tree/main/Rockford/Air%20Base%20Garry',
        sids: [],
      },
    ],
  },
  {
    icaoCode: 'IJAF',
    maxAircraftSize: 'CRJ7/Q400',
    chartPacks: [
      {
        author: 'Official',
        link: 'https://github.com/Treelon/ptfs-charts/tree/main/Izolirani/AL%20Najaf',
      },
      {
        author: 'EzyDubbs',
        link: 'https://drive.google.com/file/d/1USL62H5M-TlF_Gk1erRGuNkBhQYuDqup/view',
      },
      {
        author: 'Midwest Avgeek',
        link: 'https://docs.google.com/document/d/1AAVgOdVWRAq070j-ExKGqF0lbdd2R4lzb-O3G9ISoy4/edit',
      },
    ],
  },
  {
    icaoCode: 'IBAR',
    maxAircraftSize: 'SF50/DHC6',
    chartPacks: [
      {
        author: 'Official',
        link: 'https://github.com/Treelon/ptfs-charts/tree/main/Cyprus/Barra',
      },
      {
        author: 'userwastaken, din0_nuggies21',
        link: 'https://docs.google.com/document/d/1wazg7w22DMyvJdu869_BnNwvA0aR6naw9y0kKw3sNO4/edit',
      },
      {
        author: 'Sander',
        link: 'https://cdn.discordapp.com/attachments/876914987715686440/888806599844593745/EGPR_CHARTS.pdf',
      },
    ],
  },
  {
    icaoCode: 'IRFD',
    maxAircraftSize: 'N/A',
    chartPacks: [
      {
        author: 'Official',
        link: 'https://github.com/Treelon/ptfs-charts/tree/main/Rockford/Greater%20Rockford',
        sids: [
          {
            name: 'INTER1A',
            runways: ['36L'],
            transitions: ['REAPR', 'LOGAN', 'DEATH'],
          },
          {
            name: 'INTER1B',
            runways: ['36R'],
            transitions: ['REAPR', 'LOGAN', 'DEATH'],
          },
          {
            name: 'INTER1C',
            runways: ['18R', '18L'],
            transitions: ['REAPR', 'LOGAN', 'DEATH'],
          },
          {
            name: 'KEN1A',
            runways: ['36L', '36R'],
          },
          {
            name: 'KEN1B',
            runways: ['18R'],
          },
          {
            name: 'KEN1C',
            runways: ['18L'],
          },
        ],
      },
      {
        author: 'sanderli25',
        link: 'https://drive.google.com/file/d/1I-oucFK61M6QdSFdEPYWQ3P9dRZ8D7Jl/view',
      },
      {
        author: 'Nikita39Gamer',
        link: 'https://drive.google.com/file/d/1Kg7IaeCuovKrtfTduSCsmhsjWTiFDSV_/view',
        sids: [
          {
            name: 'GUESS1A',
            runways: ['36L'],
            route: 'EASTN GUESS',
          },
          {
            name: 'GUESS1B',
            runways: ['36R'],
            route: 'EASTN GUESS',
          },
          {
            name: 'GUESS1C',
            runways: ['18R'],
            route: 'BLA HELPR WAREZ PARTS GUESS',
          },
          {
            name: 'GUESS1D',
            runways: ['18L'],
            route: 'BLA HELPR WAREZ PARTS GUESS',
          },
          {
            name: 'WELSH3A',
            runways: ['36L'],
            route: 'EASTN KEN WELSH',
          },
          {
            name: 'WELSH3B',
            runways: ['36R'],
            route: 'EASTN KEN WELSH',
          },
          {
            name: 'WELSH3C',
            runways: ['18R'],
            route: 'BLA TRN STOOD RESTS WELSH',
          },
          {
            name: 'WELSH3D',
            runways: ['18L'],
            route: 'BLA TRN STOOD RESTS WELSH',
          },
          {
            name: 'INDEX4A',
            runways: ['36L'],
            route: 'EASTN INDEX',
          },
          {
            name: 'INDEX4B',
            runways: ['36R'],
            route: 'EASTN INDEX',
          },
          {
            name: 'INDEX4C',
            runways: ['18R'],
            route: 'BLA TRN STOOD RESTS INDEX',
          },
          {
            name: 'INDEX4D',
            runways: ['18L'],
            route: 'BLA TRN STOOD RESTS INDEX',
          },
          {
            name: 'SEEKS1A',
            runways: ['36L'],
            route: 'EASTN ROK BEANS SEEKS',
          },
          {
            name: 'SEEKS1B',
            runways: ['36R'],
            route: 'EASTN ROK BEANS SEEKS',
          },
          {
            name: 'SEEKS1C',
            runways: ['18R'],
            route: 'BLA HELPR SEEKS',
          },
          {
            name: 'SEEKS1D',
            runways: ['18L'],
            route: 'BLA HELPR SEEKS',
          },
          {
            name: 'SETHR1A',
            runways: ['36L'],
            route: 'EASTN RESTS SETHR',
          },
          {
            name: 'SETHR1B',
            runways: ['36R'],
            route: 'EASTN RESTS SETHR',
          },
          {
            name: 'SETHR1C',
            runways: ['18R'],
            route: 'BLA TRN HMS SETHR',
          },
          {
            name: 'SETHR1D',
            runways: ['18L'],
            route: 'BLA TRN HMS SETHR',
          },
          {
            name: 'JAMSI1A',
            runways: ['36L'],
            route: 'EASTN RESTS HMS JAMSI',
          },
          {
            name: 'JAMSI1B',
            runways: ['36R'],
            route: 'EASTN RESTS HMS JAMSI',
          },
          {
            name: 'JAMSI1C',
            runways: ['18R'],
            route: 'BLA TRN SAVES JAMSI',
          },
          {
            name: 'JAMSI1D',
            runways: ['18L'],
            route: 'BLA TRN SAVES JAMSI',
          },
          {
            name: 'LAZER1A',
            runways: ['36L'],
            route: 'EASTN RESTS HMS LAZER',
          },
          {
            name: 'LAZER1B',
            runways: ['36R'],
            route: 'EASTN RESTS HMS LAZER',
          },
          {
            name: 'LAZER1C',
            runways: ['18R'],
            route: 'BLA TRN SAVES LAZER',
          },
          {
            name: 'LAZER1D',
            runways: ['18L'],
            route: 'BLA TRN SAVES LAZER',
          },
        ],
      },
      {
        author: 'makiwasmyidea',
        link: 'https://docs.google.com/document/d/1pOfIhQ9z6HSgFNjIMryd_FWwF_FgkAPvhK5xerOBex4/edit',
      },
      {
        author: 'DarthD3NN15',
        link: 'https://docs.google.com/presentation/d/1kc8pIQMEukO_meQ05yavOX1EFDbLqJTyxv5jA9p-m3s/edit#slide=id.g1f43ba55dbd_0_131',
      },
      {
        author: 'userwastaken',
        link: 'https://docs.google.com/document/d/1AR-TLLS1S5H0SjDFCsiWKKQ4HTi87JUkU80ij4i-wPc/edit#heading=h.hev5tuk6ocb6',
      },
      {
        author: 'Eastern',
        link: 'https://docs.google.com/presentation/d/1mKn1mwti1rA8t6xXGBXQxVmVycgxuUWWLaaHpiJg-d4/edit#slide=id.g1111f78b68b_0_154',
      },
      {
        author: 'Aloha516',
        link: 'https://drive.google.com/file/d/14L3ZEegJfXIli1xn_QBIyJeTQPurHTr0/view',
      },
      {
        author: 'EzyDubbs',
        link: 'https://drive.google.com/file/d/13WTsIv4FbnUhUoDJzXyw1ZV3_fGqbjBF/view',
        sids: [
          {
            name: 'GUESS1S',
            runways: ['36L'],
            route: 'GUESS',
          },
          {
            name: 'GUESS1Z',
            runways: ['36R'],
            route: 'GUESS',
          },
          {
            name: 'GUESS1R',
            runways: ['18R'],
            route: 'ROK GUESS',
          },
          {
            name: 'GUESS1Y',
            runways: ['18L'],
            route: 'ROK GUESS',
          },
          {
            name: 'WELSH1S',
            runways: ['36L'],
            route: 'WELSH',
          },
          {
            name: 'WELSH1Z',
            runways: ['36R'],
            route: 'WELSH',
          },
          {
            name: 'WELSH1R',
            runways: ['18R'],
            route: 'ROK WELSH',
          },
          {
            name: 'WELSH1Y',
            runways: ['18L'],
            route: 'ROK WELSH',
          },
          {
            name: 'INDEX1S',
            runways: ['36L'],
            route: 'INDEX',
          },
          {
            name: 'INDEX1Z',
            runways: ['36R'],
            route: 'INDEX',
          },
          {
            name: 'INDEX1R',
            runways: ['18R'],
            route: 'ROK INDEX',
          },
          {
            name: 'INDEX1Y',
            runways: ['18L'],
            route: 'ROK INDEX',
          },
          {
            name: 'SETHR1S',
            runways: ['36L'],
            route: 'SETHR',
          },
          {
            name: 'SETHR1Z',
            runways: ['36R'],
            route: 'SETHR',
          },
          {
            name: 'SETHR1R',
            runways: ['18R'],
            route: 'SETHR',
          },
          {
            name: 'SETHR1Y',
            runways: ['18L'],
            route: 'SETHR',
          },
          {
            name: 'LAZER1S',
            runways: ['36L'],
            route: 'LAZER',
          },
          {
            name: 'LAZER1Z',
            runways: ['36R'],
            route: 'LAZER',
          },
          {
            name: 'LAZER1R',
            runways: ['18R'],
            route: 'LAZER',
          },
          {
            name: 'LAZER1Y',
            runways: ['18L'],
            route: 'LAZER',
          },
        ],
      },
    ],
  },
  {
    icaoCode: 'IGRV',
    maxAircraftSize: 'B787/A350/MD11',
    chartPacks: [
      {
        author: 'Official',
        link: 'https://github.com/Treelon/ptfs-charts/tree/main/Grindavik/Grindavik',
      },
      {
        author: 'sander25',
        link: 'https://cdn.discordapp.com/attachments/876914987715686440/888886462848831508/UGDK_CHARTS.pdf',
      },
      {
        author: 'EzyDubbs',
        link: 'https://drive.google.com/file/d/1FWfJotQk2yKI03Kg43M5RQlzisdlDEql/view',
      },
      {
        author: 'ATC24MobileMaster, Pro_Gamer7089',
        link: 'https://drive.google.com/file/d/1WNxb-d3gxIqPhtncoM3hDbALfMfuIdDS/view',
      },
      {
        author: 'nova_av',
        link: 'https://drive.google.com/file/d/1G4M1CGxjXO688x-l7WBnD8UfhiLq2yrB/view',
      },
    ],
  },
  {
    icaoCode: 'IZOL',
    maxAircraftSize: 'N/A',
    chartPacks: [
      {
        author: 'Official',
        link: 'https://github.com/Treelon/ptfs-charts/tree/main/Izolirani/Izolirani',
      },
      {
        author: 'sanderli25',
        link: 'https://github.com/Treelon/ptfs-charts/tree/main/Izolirani/Izolirani',
      },
      {
        author: 'userwastaken',
        link: 'https://docs.google.com/document/d/1WGSfuBNWxn4WxVBtEFF3ZYboNIh21Fcqrm9AtSXnq_4/edit#heading=h.ydxas8subl85',
      },
      {
        author: 'Midwest Avgeek',
        link: 'https://docs.google.com/document/d/19f9w2uE7vqwLBLlbKrfc8_NZlEcDr4I34SKGN0dfub0/edit',
      },
    ],
  },
  {
    icaoCode: 'ILAR',
    maxAircraftSize: 'N/A',
    chartPacks: [
      {
        author: 'Official',
        link: 'https://github.com/Treelon/ptfs-charts/tree/main/Cyprus/Larnaca',
      },
      {
        author: 'Aloha516',
        link: 'https://docs.google.com/document/d/1Hat4-PSwd9L0tWKaofTEQH-egoJLw7pzvgCo2RHO0cE/edit',
      },
      {
        author: 'makiwasmyidea',
        link: 'https://docs.google.com/document/d/11Wvou24H_RgUIn5VwJoQ5w4tnE5JZbtYTTbkuRDvtHk/edit',
      },
      {
        author: 'userwastaken, Nikita39Gamer',
        link: 'https://docs.google.com/document/d/1DXI4DGpc2UMl7bHrPygf3_oHAZ68UDe5X4boa2teIw8/edit',
        sids: [
          {
            name: 'ANYMS1J',
            runways: ['06'],
          },
          {
            name: 'JAMSI1J',
            runways: ['06'],
          },
          {
            name: 'JUSTY1J',
            runways: ['06'],
          },
          {
            name: 'REAPR1J',
            runways: ['06'],
          },
          {
            name: 'ANYMS1K',
            runways: ['24'],
          },
          {
            name: 'JAMSI1K',
            runways: ['24'],
          },
          {
            name: 'JUSTY1K',
            runways: ['24'],
          },
          {
            name: 'REAPR1K',
            runways: ['24'],
          },
        ],
      },
      {
        author: 'greek_dutchman',
        link: 'https://docs.google.com/document/d/1i9q2jla0cXq6Vq-IkLihjkzqu-s3Q1e_EyPWAo3mxso/edit',
      },
    ],
  },
  {
    icaoCode: 'ILKL',
    maxAircraftSize: 'LJ45/DHC6',
    chartPacks: [
      {
        author: 'Official',
        link: 'https://github.com/Treelon/ptfs-charts/tree/main/Perth/Lukla',
      },
    ],
  },
  {
    icaoCode: 'IIAB',
    maxAircraftSize: 'N/A',
    chartPacks: [
      {
        author: 'N/A',
        link: 'N/A',
      },
    ],
  },
  {
    icaoCode: 'IMLR',
    maxAircraftSize: 'B787/A350/MD11',
    chartPacks: [
      {
        author: 'Official',
        link: 'https://github.com/Treelon/ptfs-charts/tree/main/Rockford/Mellor',
      },
      {
        author: 'EzyDubbs',
        link: 'https://drive.google.com/file/d/1u0f6131yt_nA83RYKm5cy6f1SzfOOxTu/view',
      },
      {
        author: 'DarthD3NN15',
        link: 'https://docs.google.com/presentation/d/1s72z-fRBtVsDE4fGcTyIMWNbrVF7_i9ja8K4PDA1MWc/edit#slide=id.p',
      },
      {
        author: 'SQD_Yeet, sanderli25',
        link: 'https://docs.google.com/presentation/d/1OVEz2Zq1MzEr9_kDXYxo_t82d-bHchD_MJXi38d8IWk/edit#slide=id.gc6f90357f_0_0',
      },
      {
        author: 'Jeffersen',
        link: 'https://formicacidgd.github.io/atisgen/IMLR_Chart_Jeffersen.png',
      },
    ],
  },
  {
    icaoCode: 'IPAP',
    maxAircraftSize: 'B787/A350/MD11',
    chartPacks: [
      {
        author: 'Official',
        link: 'https://github.com/Treelon/ptfs-charts/tree/main/Cyprus/Paphos',
      },
      {
        author: 'sanderli25',
        link: 'https://drive.google.com/file/d/1feK0t-bD79o5PJTPlOhfe_0agf83xt9y/view',
      },
      {
        author: 'playevator',
        link: 'https://docs.google.com/presentation/d/1OTeilcBnK6c5MJuhMTcBu03cauV5dKokGkAsrGdD3sg/edit#slide=id.g23c6c35c134_1_0',
      },
      {
        author: 'sweet_kid',
        link: 'https://drive.google.com/file/d/1Ckwrvr93OBZxEfpSwTzc75ALkCmjqsqr/view',
      },
    ],
  },
  {
    icaoCode: 'IPPH',
    maxAircraftSize: 'N/A',
    chartPacks: [
      {
        author: 'Official',
        link: 'https://github.com/Treelon/ptfs-charts/tree/main/Perth/Perth',
      },
      {
        author: 'Natto, userwastaken, Nikita39Gamer',
        link: 'https://docs.google.com/document/d/1sEOREpJL5TCAs7tejRn2Fm02Ai4IZV5uolC9cX65x3c/edit',
        sids: [
          {
            name: 'KNIF1A',
            runways: ['11'],
          },
          {
            name: 'KNIF1B',
            runways: ['15'],
          },
          {
            name: 'KNIF1C',
            runways: ['29'],
          },
          {
            name: 'KNIF1D',
            runways: ['33'],
          },
          {
            name: 'ROM1A',
            runways: ['11'],
          },
          {
            name: 'ROM1B',
            runways: ['15'],
          },
          {
            name: 'ROM1C',
            runways: ['29'],
          },
          {
            name: 'ROM1D',
            runways: ['33'],
          },
          {
            name: 'CAME1A',
            runways: ['11'],
          },
          {
            name: 'CAME1B',
            runways: ['15'],
          },
          {
            name: 'CAME1C',
            runways: ['29'],
          },
          {
            name: 'CAME1D',
            runways: ['33'],
          },
        ],
      },
    ],
  },
  {
    icaoCode: 'IDCS',
    maxAircraftSize: 'SF50/DHC6',
    chartPacks: [
      {
        author: 'Official',
        link: 'https://github.com/Treelon/ptfs-charts/tree/main/Orenji/Saba',
      },
      {
        author: 'MR. GEARZ',
        link: 'https://docs.google.com/document/d/17-uqDqJ1YzxvZDwtlduM8hGdPH-kCNxoDxdfBHoOhzE/edit',
      },
    ],
  },
  {
    icaoCode: 'IBTH',
    maxAircraftSize: 'CRJ7/Q400',
    chartPacks: [
      {
        author: 'Official',
        link: 'https://github.com/Treelon/ptfs-charts',
      },
      {
        author: 'sweet_kid',
        link: 'https://drive.google.com/file/d/1OSWgKHBnu8ch3sP68erv8_nVcAFIY7CQ/view',
      },
      {
        author: 'playevator',
        link: 'https://drive.google.com/file/d/1OakBVh551I5OmqO05KdEFAF9LcjscaGs/view',
      },
      {
        author: 'snowfrfr',
        link: 'https://docs.google.com/presentation/d/1qJjS4HnvnP1u0j6ESnOqb-sGJIO_B0jFh1h10vsFWv0/edit#slide=id.p',
      },
      {
        author: 'Sander25',
        link: 'https://cdn.discordapp.com/attachments/876914987715686440/904124376457310228/IBTH_CHARTS.pdf',
      },
    ],
  },
  {
    icaoCode: 'ISAU',
    maxAircraftSize: 'A320/B737/MD90',
    chartPacks: [
      {
        author: 'Official',
        link: 'https://github.com/Treelon/ptfs-charts/tree/main/Sauthemptona/Sauthemptona',
      },
      {
        author: 'Aloha516',
        link: 'https://drive.google.com/file/d/11_ioZKaEt2Un1oyKa1R6WZ4hUjUFk7VL/view',
      },
      {
        author: 'userwastaken, Nikita39Gamer',
        link: 'https://docs.google.com/document/d/1iRG8S9p2bq99rgnofHK6_r0jtJqgXc1bj13W0IaBSzc/edit#heading=h.hev5tuk6ocb6',
      },
    ],
  },
  {
    icaoCode: 'ITKO',
    maxAircraftSize: 'N/A',
    chartPacks: [
      {
        author: 'Official',
        link: 'https://github.com/Treelon/ptfs-charts/tree/main/Orenji/Tokyo',
      },
      {
        author: 'Nikita39Gamer, userwastaken',
        link: 'https://drive.google.com/file/d/12D4LEcKJiMkh9u7i1kEih54dYSAFQHRG/view',
        sids: [
          {
            name: 'BLANK1W',
            runways: ['02'],
          },
          {
            name: 'EURAD1W',
            runways: ['02'],
          },
          {
            name: 'HONDA1W',
            runways: ['02'],
          },
          {
            name: 'RENDR1W',
            runways: ['02'],
          },
          {
            name: 'ONDER1W',
            runways: ['02'],
          },
          {
            name: 'BLANK1X',
            runways: ['13'],
          },
          {
            name: 'EURAD1X',
            runways: ['13'],
          },
          {
            name: 'HONDA1X',
            runways: ['13'],
          },
          {
            name: 'RENDR1X',
            runways: ['13'],
          },
          {
            name: 'ONDER1X',
            runways: ['13'],
          },
          {
            name: 'BLANK1Y',
            runways: ['20'],
          },
          {
            name: 'EURAD1Y',
            runways: ['20'],
          },
          {
            name: 'HONDA1Y',
            runways: ['20'],
          },
          {
            name: 'RENDR1Y',
            runways: ['20'],
          },
          {
            name: 'ONDER1Y',
            runways: ['20'],
          },
          {
            name: 'BLANK1Z',
            runways: ['31'],
          },
          {
            name: 'EURAD1Z',
            runways: ['31'],
          },
          {
            name: 'HONDA1Z',
            runways: ['31'],
          },
          {
            name: 'RENDR1Z',
            runways: ['31'],
          },
          {
            name: 'ONDER1Z',
            runways: ['31'],
          },
          {
            name: 'BLANK2A',
            runways: ['02'],
          },
          {
            name: 'EURAD2A',
            runways: ['02'],
          },
          {
            name: 'HONDA2A',
            runways: ['02'],
          },
          {
            name: 'RENDR2A',
            runways: ['02'],
          },
          {
            name: 'ONDER2A',
            runways: ['02'],
          },
          {
            name: 'BLANK2B',
            runways: ['13'],
          },
          {
            name: 'EURAD2B',
            runways: ['13'],
          },
          {
            name: 'HONDA2B',
            runways: ['13'],
          },
          {
            name: 'RENDR2B',
            runways: ['13'],
          },
          {
            name: 'ONDER2B',
            runways: ['13'],
          },
          {
            name: 'BLANK2C',
            runways: ['20'],
          },
          {
            name: 'EURAD2C',
            runways: ['20'],
          },
          {
            name: 'HONDA2C',
            runways: ['20'],
          },
          {
            name: 'RENDR2C',
            runways: ['20'],
          },
          {
            name: 'ONDER2C',
            runways: ['20'],
          },
          {
            name: 'BLANK2D',
            runways: ['31'],
          },
          {
            name: 'EURAD2D',
            runways: ['31'],
          },
          {
            name: 'HONDA2D',
            runways: ['31'],
          },
          {
            name: 'RENDR2D',
            runways: ['31'],
          },
          {
            name: 'ONDER2D',
            runways: ['31'],
          },
        ],
      },
      {
        author: 'GA4RIE1',
        link: 'https://docs.google.com/document/d/1NjssUTQnlHVQiZciry656h5ZBu2xW7lJu2Q2L5G90CU/edit',
      },
      {
        author: 'SQD_YEET',
        link: 'https://docs.google.com/presentation/d/1PPpJoNXSOLL5DUMBSexPGDbDskA2nMkrPglJ35szKF4/edit#slide=id.gc6f90357f_0_0',
      },
    ],
  },
];
