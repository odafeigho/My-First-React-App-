import type { GuideTranslations } from "../types"

export const xh: GuideTranslations = {
  common: {
    loading: "Iyalayisha...",
    error: "Impazamo",
    success: "Impumelelo",
    warning: "Isilumkiso",
    info: "Ulwazi",
    print: "Printa",
    download: "Khuphela",
    expand: "Yandisa",
    collapse: "Nciphisa",
    next: "Okulandelayo",
    previous: "Okungaphambili",
    home: "Ikhaya",
    tableOfContents: "Isalathiso",
    selectLanguage: "Khetha Ulwimi",
    languageSupport: "Inkxaso Yeelwimi",
    languagesAvailable: "Le aplikheyishini iyafumaneka ngeelwimi ezili-10",
    viewUserGuide: "Jonga Isikhokelo Somsebenzisi",
  },
  home: {
    title: "Umdibanisi Wedatha Yomgodi",
    description:
      "Ngokuzenzekelayo icoceka, ilungise kwaye idibanise idatha yomgodi yefomathi ezininzi kwimo ehlangeneyo kusetyenziswa ii-algoritm eziphambili zokulungelelanisa",
    tabs: {
      upload: "Layisha Idatha",
      preview: "Jonga Idatha",
      normalize: "Lungelelanisa",
      integrate: "Dibanisa",
      algorithm: "I-Algoritm",
    },
    errors: {
      noDatasets: "Nceda layisha ubuncinane isethi enye yedatha kuqala",
      beforeNormalization: "Nceda layisha ubuncinane isethi enye yedatha phambi kokulungelelanisa",
      beforeIntegration: "Nceda lungelelanisa iisethi zakho zedatha phambi kokudibanisa",
    },
  },
  guide: {
    title: "Umdibanisi Wedatha Yomgodi - Isikhokelo Somsebenzisi",
    description:
      "Isikhokelo esipheleleyo senyathelo ngenyathelo sokudibanisa idatha eyahlukeneyo yomgodi kusetyenziswa ii-algoritm eziphambili zokulungelelanisa",
    overview: {
      title: "Isishwankathelo",
      gettingStarted: {
        title: "Ukuqalisa",
        description: "Ukuqonda inkqubo yokusebenza kunye neengqiqo ezisisiseko",
        whatIs: {
          title: "Yintoni Ukudibaniswa Kwedatha?",
          description:
            "Ukudibaniswa kwedatha yinkqubo yokuhlanganisa idatha evela kwiindawo ezahlukeneyo, iifomathi, kunye nezilinganiso kwifomathi ehlangeneyo nengaguqukiyo evumela uhlalutyo olupheleleyo.",
        },
        whyImportant: {
          title: "Kutheni Kubalulekile?",
          description:
            "Kubunjineli bomgodi, idatha ivela kwiindawo ezahlukeneyo (iilogi, izivungululi-mhlaba, imveliso) nezilinganiso neeyunithi ezahlukeneyo. Ukudibanisa kuvumela uhlalutyo olunqamlezileyo kunye nokwenza izigqibo ezingcono.",
        },
      },
      coreAlgorithm: {
        title: "I-Algoritm Engundoqo",
        description: "I-app isebenzisa inkqubo yamanyathelo amabini: Ukulungelelanisa kulandelwa Ukudibanisa",
      },
      workflow: {
        steps: {
          upload: {
            title: "Layisha Idatha",
            description: "Yongeza iisethi zakho zedatha ezahlukeneyo",
          },
          preview: {
            title: "Jonga & Qinisekisa",
            description: "Hlola umgangatho kunye nesakhiwo sedatha",
          },
          normalize: {
            title: "Lungelelanisa",
            description: "Sebenzisa ukulungelelanisa kwezibalwa",
          },
          integrate: {
            title: "Dibanisa",
            description: "Yenza imodeli ehlangeneyo",
          },
        },
      },
    },
    upload: {
      title: "Ukulayisha Idatha",
      description: "Funda indlela yokongeza iisethi zakho zedatha yomgodi kumdibanisi",
      supportedTypes: {
        title: "Iintlobo Zedatha Ezixhaswayo",
        wellLogs: {
          label: "Iilogi Zomngxuma",
          description: "Imilinganiselo yemitha gamma, ukumelana, ukuvuleka",
        },
        seismic: {
          label: "Idatha Yezivungululi-mhlaba",
          description: "Idatha yobungakanani, ifrikhwensi, isantya",
        },
        production: {
          label: "Idatha Yemveliso",
          description: "Amazinga e-oyile/igesi/amanzi, ukufunda uxinzelelo",
        },
        core: {
          label: "Uhlalutyo Lwembewu",
          description: "Idatha yokungena, ukuvuleka, ukumanzi",
        },
      },
      instructions: {
        title: "Imiyalelo Yenyathelo Ngenyathelo",
        step1: {
          title: "Faka Igama Lesethi Yedatha",
          description: 'Khetha igama elichazayo (umz., "Iilogi-Zomngxuma-A", "Imveliso-Yendawo-X")',
        },
        step2: {
          title: "Khetha Uhlobo Lwedatha",
          description: "Khetha udidi olufanelekileyo lwedatha yakho",
        },
        step3: {
          title: "Yenza Isethi Yedatha Yomzekelo",
          description: "Cofa ukwenza isethi yedatha yomzekelo yomboniso",
        },
      },
      exampleWorkflow: {
        title: "Umzekelo Wenkqubo Yokusebenza",
        description:
          "Ukwenza uhlalutyo olupheleleyo, layisha ubuncinane iintlobo ezahlukeneyo zedatha ezi-2-3. Umzekelo: Iilogi zomngxuma + Idatha yemveliso + Uhlalutyo lwembewu ukwenza inkcazelo epheleleyo yomgodi.",
      },
    },
    faq: {
      title: "Imibuzo Ebuzwa Rhoqo",
      description: "Imibuzo eqhelekileyo malunga noMdibanisi Wedatha Yomgodi",
      questions: {
        dataTypes: {
          question: "Umbuzo: Zeziphi iintlobo zedatha yomgodi endinokuzidibanisa?",
          answer:
            "Impendulo: I-app ixhasa iintlobo ezine eziphambili zedatha yomgodi: Iilogi Zomngxuma (imitha gamma, ukumelana, ukuvuleka), Idatha Yezivungululi-mhlaba (ubungakanani, ifrikhwensi, isantya), Idatha Yemveliso (amazinga e-oyile/igesi/amanzi, uxinzelelo), kunye Nohlalutyo Lwembewu (ukungena, ukuvuleka, ukumanzi). Uhlobo ngalunye luqhutywa ngokwemikhwa yemigaqo yeshishini.",
        },
        normalization: {
          question: "Umbuzo: Kutheni ukulungelelaniswa kwedatha kuyimfuneko?",
          answer:
            "Impendulo: Imilinganiselo eyahlukeneyo yomgodi inezilinganiso ezahlukeneyo kakhulu (umz., ukuvuleka: 0-1, uxinzelelo: 1000-5000 psi). Ngaphandle kokulungelelanisa, imilinganiselo yesilinganiso esikhulu ingalawula uhlalutyo. Ukulungelelanisa kubeka yonke idatha kwisilinganiso esinye (umndilili=0, std=1), kuvumela uthelekiso olufanelekileyo kunye nokudibanisa.",
        },
        accuracy: {
          question: "Umbuzo: Ichanekile kangakanani i-algoritm yokulungelelanisa?",
          answer:
            "Impendulo: I-app isebenzisa ifomula yomlungelelaniso we-Z-score (d-μ)/σ, eyichanekileyo ngokwezibalo kwaye yamkelwe ngokubanzi kuhlalutyo lwezibalwa. I-algoritm iphatha iimeko ezingaphandle ezifana nokungabikho kwesiseko kunye namaxabiso angekhoyo ukuqinisekisa iziphumo eziqinileyo.",
        },
        security: {
          question: "Umbuzo: Ingaba idatha yam ikhuselekile xa ndisebenzisa le app?",
          answer:
            "Impendulo: Ewe, yonke inkqubo yedatha yenzeka ngokukhawuleza kwibhrawuza yakho. Akukho datha ithunyelwa kwiiserver zangaphandle. Idatha yakho yomgodi ihlala iyimfihlo kwaye ikhuselekile kwisixhobo sakho kuyo yonke inkqubo yokudibanisa.",
        },
      },
    },
    glossary: {
      title: "Isigama Sobugcisa",
      description: "Iinkcazelo zamagama kunye neengqiqo zobugcisa",
      reservoirTerms: {
        title: "Amagama Obunjineli Bomgodi",
        porosity: {
          term: "Ukuvuleka",
          definition:
            "Ipesenti yesithuba esingenanto elityeni esinokuba nezinzo. Ibalulekile ukubala izivingco ze-hydrocarbon.",
        },
        permeability: {
          term: "Ukungena",
          definition:
            "Umlinganiselo wokukwazi kwelitye ukudlulisa izinzo, kuqheleke ukulinganiswa nge-millidarcy (mD).",
        },
        resistivity: {
          term: "Ukumelana",
          definition:
            "Ukumelana kombane kwezakhiwo zamatye, kusetyenziswa ukwahlula phakathi kwezakhiwo ezine-hydrocarbon kunye nezine-manzi.",
        },
      },
      dataScienceTerms: {
        title: "Amagama Enzululwazi Yedatha",
        normalization: {
          term: "Ukulungelelanisa",
          definition:
            "Ubugcisa bezibalwa bokulinganisa idatha kwibanga elimisiweyo, ngokuqhelekileyo ngo-mean=0 kunye ne-standard deviation=1.",
        },
        standardDeviation: {
          term: "Ukuphambuka Esiqhelekileyo (σ)",
          definition:
            "Umlinganiselo wosasazo lwedatha okanye ukwahluka-hluka malunga nomndilili. Isetyenziswa ekulungelelaniseni ukwenza idatha ilingane ngokulinganayo.",
        },
        zScore: {
          term: "Ukulungelelanisa kwe-Z-Score",
          definition:
            "Ifomula yokulungelelanisa ethile: (ixabiso - umndilili) / ukuphambuka_esiqhelekileyo. Iziphumo zidatha ngo-mean=0 kunye ne-std=1.",
        },
      },
    },
    troubleshooting: {
      title: "Isikhokelo Sokusombulula Iingxaki",
      description: "Iingxaki eziqhelekileyo kunye nezisombululo",
      problems: {
        noDatasets: {
          problem: "Akukho zisethi zedatha zifumanekayo ukujonga",
          cause: "Akukho zisethi zedatha zilayishiweyo",
          solution: "Yiya kwithebhu Yokulayisha kwaye wongeze ubuncinane isethi enye yedatha",
        },
        notNormalized: {
          problem: "Nceda lungelelanisa iisethi zakho zedatha phambi kokudibanisa",
          cause: "Ukuzama ukudibanisa ngaphandle kokulungelelanisa",
          solution: "Gqiba inyathelo lokulungelelanisa kuqala",
        },
        missingValues: {
          problem: "Kufunyenwe amaxabiso X angekhoyo",
          cause: "Isethi yedatha iqulathe amaxabiso angenanto okanye angasebenziyo",
          solution: 'Sebenzisa iqhosha "Coca Zonke Iisethi Zedatha" ukuphatha ngokuzenzekelayo amaxabiso angekhoyo',
        },
      },
      bestPractices: {
        title: "Iindlela Ezingcono Zempumelelo",
        items: [
          "Soloko ujonga idatha yakho phambi kokulungelelanisa",
          "Sebenzisa iimpawu zokucocwa kwedatha ukwenza iziphumo ezingcono",
          "Qinisekisa ukuba iisethi zedatha zinemilinganiselo yobunzulu okanye amaxesha anqamlezayo",
          "Qala nge-2-3 iisethi zedatha phambi kokongeza idatha engaphezulu",
          "Khuphela kwaye ugcine imodeli yakho ehlangeneyo emva kokudibanisa",
        ],
      },
    },
    print: {
      title: "Isikhokelo Somsebenzisi Esinokuprinta",
      description: "Khuphela okanye uprinte inguqulelo epheleleyo ye-PDF yesikhokelo somsebenzisi esipheleleyo",
      whatsIncluded: {
        title: "Yintoni Equkiweyo",
        items: [
          "Inkqubo yokusebenza epheleleyo yenyathelo ngenyathelo",
          "Iifomula zezibalo kunye neenkcazelo",
          "Imibuzo ebuzwa rhoqo",
          "Isigama sobugcisa",
          "Isikhokelo sokusombulula iingxaki",
          "Iindlela ezingcono kunye nemizekelo",
        ],
      },
      formatFeatures: {
        title: "Iimpawu Zefomathi",
        items: [
          "Isakhiwo se-PDF esingumsebenzi",
          "Amacandelo anemibala",
          "Iifomula zezibalo",
          "Imizekelo kunye namacebo",
          "Isalathiso",
          "Ifomathi elula ukufunda",
        ],
      },
      printTips: {
        title: "Amacebo Okuprinta",
        items: [
          'Sebenzisa ukhetho "Printa kwi-PDF" kwibhrawuza yakho ukwenza iziphumo ezingcono',
          'Vumela "Imizobo yomva" ukwenza amacandelo anemibala',
          'Khetha "Ezinye izicwangciso" → "Ubungakanani bephepha: A4" ukwenza isakhiwo esifanelekileyo',
          'Khetha "Imida: Emiselwe kwangaphambili" ukwenza isithuba esifanelekileyo',
        ],
      },
    },
  },
}
