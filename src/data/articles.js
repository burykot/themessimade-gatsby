const cdn = './assets/articles/'// local temporarily

const ArticleData = [
  {
    "url": "https://oscarliang.com/diy-psu-lipo-charger-workbench/",
    "image": cdn + "PSU2.jpg",
    "title": "DIY benchtop power supply for LiPo chargers, electronics",
    "shortdesc": "Some modern LiPo chargers are able to charge multiple battery packs at once. However they require large power supply to meet the current demand. Dedicated PSU’s are costly, so in this post we will show you how to make a cheap DIY PC/server PSU for chargers and workbench.",
    "date": "2016-09-27T00:00:00.000Z",
    "featured": 1
  },
  {
    "url": "http://intofpv.com/t-flysky-i6-hall-sensor-gimbal",
    "image": "https://i.imgur.com/BQlMVXsl.jpg",
    "title": "Flysky i6 hall sensor gimbal mod",
    "shortdesc": "After three years of usage one of my Flysky i6 gimbals started feeling a bit loose on throttle. This article describes how to mod the transmitter to mount the hall sensor gimbals.",
    "date": "2018-02-17T00:00:00.000Z",
    "featured": 1
  },
  {
    "url": "http://intofpv.com/t-demonrc-nox5r",
    "image": "http://stadopikseli.pl/quadcopter/NOX5R/IMG_4755.JPG",
    "title": "Review and build log: DemonRC NOX5R racing frame",
    "shortdesc": "Build log of a stretched racing quadcopter frame. It was pretty lightweight for its time and is still used by many pilots.",
    "date": "2016-10-13T11:48:00.000Z",
    "featured": 1
  },
  {
    "url": "http://intofpv.com/t-clean-dvr-install-on-quanum-goggles",
    "image": "http://i.imgur.com/Xcxgd40l.jpg",
    "title": "Clean DVR install on Quanum Goggles",
    "shortdesc": "I got myself a small Eachine ProDVR. I came up with an idea to route all necessary wiring inside the goggles monitor case.",
    "date": "2016-09-13T00:00:00.000Z",
    "featured": 0
  },
  {
    "url": "http://intofpv.com/t-multirotor-scrap-rc-car",
    "image": "http://i.imgur.com/NjRzQD6l.jpg",
    "title": "Multirotor scrap RC car",
    "shortdesc": "I had some free time, so I built a turnable car out of heaps of copter parts and junk I had laying around.",
    "date": "2016-06-21T12:15:00.000Z",
    "featured": 0
  },
  {
    "url": "http://intofpv.com/t-hobbywing-xrotor-12a-4in1-review",
    "image": "http://i.imgur.com/BvOnXg7l.jpg",
    "title": "Hobbywing XRotor 12A 4IN1 review",
    "shortdesc": "I was given an opportunity to review a unit of Hobbywing XRotor 12A 4IN1 1-4s, a 32bit ARM (48 mHz processor) option in the ESC market.",
    "date": "2017-07-09T12:15:00.000Z",
    "featured": 0
  },
  {
    "url": "https://oscarliang.com/airblade-assault-130-micro-quad/",
    "image": cdn + "airblade.jpg",
    "title": "Airblade Assault 130 micro quad",
    "shortdesc": "Review and build log of the the Airblade Assault 130mm – a brushless micro quad frame.",
    "date": "2016-07-09T12:15:00.000Z",
    "featured": 0
  },
  {
    "url": "https://oscarliang.com/low-fc-pdb-stack-tight-mini-quad-builds/",
    "image": cdn + "low-stack.jpg",
    "title": "Low FC PDB stack for tight mini quad builds",
    "shortdesc": "Tutorial on how to save space in a mini quad tight build by lowering the FC/PDB stack as much as possible.",
    "date": "2016-06-21T12:16:00.000Z",
    "featured": 0
  },
  {
    "url": "https://oscarliang.com/xm20a-esc-f396-review/",
    "image": cdn + "xm20a.jpg",
    "title": "ESC review – XM20A ESC – F396 MCU",
    "shortdesc": "The DYS XM20A was a relatively new speed controller for multirotors back when I wrote this review.",
    "date": "2016-04-20T12:15:00.000Z",
    "featured": 0
  },
  {
    "url": "https://oscarliang.com/review-flycolor-raptor-30a-esc/",
    "image": cdn + "raptor.jpg",
    "title": "ESC review: Flycolor Raptor 30A ESC",
    "shortdesc": "The Raptor ESC’s have been on the market for some time now. Let’s take a look at how they perform compared to the Littlebee 20A we have.",
    "date": "2016-09-11T12:15:00.000Z",
    "featured": 0
  },
  {
    "url": "https://oscarliang.com/arris-d2205-2300kv-motor/",
    "image": cdn + "arris.jpg",
    "title": "Motor review: ARRIS D2205 2300KV Motor",
    "shortdesc": "A close look on a budget motor, not really the best choice in my opinion, but they got pretty popular with the Racerstar brand.",
    "date": "2016-09-11T12:15:00.020Z",
    "featured": 0
  },
  {
    "url": "https://oscarliang.com/rcx-se2205-2400kv-motor/",
    "image": cdn + "RCX.JPG",
    "title": "Motor review: RCX SE2205 2400kV Motor",
    "shortdesc": "RCX is known to make cheap mini quad motors that are relatively powerful for their price.",
    "date": "2016-11-02T12:15:00.000Z",
    "featured": 0
  },
  {
    "url": "https://oscarliang.com/brotherhobby-tornado-t2-2206-2600kv-motor/",
    "image": cdn + "tornadot2.jpg",
    "title": "Motor review: Brotherhobby Tornado T2 2206 2600KV Motor",
    "shortdesc": "The Tornado T2 2206 motor is a new product from Brotherhobby. In this review I took a close look at the 2600KV version.",
    "date": "2016-12-18T12:15:00.000Z",
    "featured": 0
  },
  {
    "url": "http://intofpv.com/t-mini-acro-f4-flight-controller",
    "image": "http://i.imgur.com/YcEIn61l.jpg",
    "title": "Mini acro F4 flight controller",
    "shortdesc": "Review of a mini Flight Controller.",
    "date": "2017-04-22T12:15:00.000Z",
    "featured": 0
  },
  {
    "url": "http://intofpv.com/t-control-vtx-through-minimosd",
    "title": "Control VTX through MinimOSD",
    "shortdesc": "Tutorial on how to control the Tramp and Unify Video Transmitters via the Betaflight CANVAS.",
    "date": "2017-07-08T12:15:00.000Z",
    "featured": 0
  },
  {
    "url": "http://intofpv.com/t-building-a-first-wing-noob-mode-on",
    "title": "Building my first wing",
    "image": "http://i.imgur.com/sdtNkgTl.jpg",
    "shortdesc": "After watching a few guys on youtube flying INAV stabilized wings, I decided to build the wing that has been laying in the box for a few months.",
    "date": "2017-07-23T12:15:00.200Z",
    "featured": 0
  },
  {
    "url": "http://intofpv.com/t-racerstar-12a-4in1-micro-esc",
    "title": "ESC review: Racerstar 12A 4in1 micro ESC",
    "image": "http://i.imgur.com/1RPBNmvl.jpg",
    "shortdesc": "One of the first budget ESC offerings with 20x20 mounting hole pattern.",
    "date": "2017-07-23T12:15:00.300Z",
    "featured": 0
  },
  {
    "url": "http://intofpv.com/t-sunnysky-0705-15000kv-thrust-test",
    "title": "Sunnysky 0705 15000kv thrust test",
    "image": "https://i.imgur.com/yspVfQgl.jpg",
    "shortdesc": "Quick number crunching on the Sunnysky 0705 15000kv thrust data.",
    "date": "2018-01-17T12:15:00.400Z",
    "featured": 1
  },
  {
    "url": "http://intofpv.com/t-happymodel-se0706-15000kv-thrust-test",
    "title": "Happymodel SE0706 15000kv thrust test",
    "image": "https://i.imgur.com/LF2oP77l.jpg",
    "shortdesc": "Quick number crunching on the Happymodel SE0706 15000kv thrust data.",
    "date": "2018-01-17T09:36:00.400Z",
    "featured": 0
  },
  {
    "url": "http://intofpv.com/t-racerstar-br1103-10000kv-micro-brushless-motor",
    "title": "Racerstar BR1103 10000kv micro brushless motor",
    "image": "http://i.imgur.com/qdN3ZjHl.jpg",
    "shortdesc": "Review and thrust testing of the small brushless Racerstar BR1103B.",
    "date": "2017-05-15T09:36:00.400Z",
    "featured": 0
  },
  {
    "url": "http://intofpv.com/t-diy-225-frame",
    "title": "DIY 225 frame build",
    "image": "http://i.imgur.com/zYGZuZDl.jpg",
    "shortdesc": "A rebuild my light backup quad.",
    "date": "2017-07-22T09:37:00.400Z",
    "featured": 0
  }
]

export default ArticleData;
