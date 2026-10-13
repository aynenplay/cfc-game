// ═══ Penaltı sahnesi (three.js r128) ═══
/* City Soccer Club · Penaltı Düellosu 3B sahnesi (three.js r128)
   Kale modeli: "Football Goal" — romullus (Sketchfab), CC BY-SA 4.0; çerçeve ve file ağı bu oyun için değiştirildi (CC BY-SA 4.0).
   Kaleci modeli: "Football player" (Sketchfab, Standart lisans). */
window.Sahne3D = (() => {
  const T = THREE;
  const KOK = window.PD_KOK || 'pd/', SURUM = window.PD_SURUM || '';
  const yol = ad => KOK + ad + (SURUM ? '?v=' + SURUM : '');
  const KALE_G = 7.32, KALE_Y = 2.44, CATI_D = 1.0, TABAN_D = 2.2;
  const BOLGE_X = [-2.44, 0, 2.44];
  let renderer, scene, camera, kap, top, kaleci, ag, zaman = 0, son = performance.now();
  const animler = [];

  // ── yardımcılar ──
  const malz = (renk, o = {}) => new T.MeshStandardMaterial(Object.assign({ color: renk, roughness: .72, metalness: 0 }, o));
  function kapsul(r1, r2, boy, mat, parca = 18) {
    const p = [];
    for (let i = 0; i <= 8; i++) { const a = -Math.PI / 2 + (i / 8) * Math.PI / 2; p.push(new T.Vector2(Math.cos(a) * r2, -boy + Math.sin(a) * r2)); }
    for (let i = 0; i <= 8; i++) { const a = (i / 8) * Math.PI / 2; p.push(new T.Vector2(Math.cos(a) * r1, Math.sin(a) * r1)); }
    const m = new T.Mesh(new T.LatheGeometry(p, parca), mat);
    m.castShadow = true; return m;
  }
  function govdeMesh(profil, mat, sx = 1, sz = 1) {
    const g = new T.LatheGeometry(profil.map(([r, y]) => new T.Vector2(r, y)), 28);
    g.scale(sx, 1, sz);
    const m = new T.Mesh(g, mat); m.castShadow = true; return m;
  }
  const eklem = (ust, x, y, z) => { const g = new T.Group(); g.position.set(x, y, z); ust.add(g); return g; };

  // ── kaleci ──
  function kaleciYap() {
    const forma = malz('#c8f000', { roughness: .6 }), forma2 = malz('#16181d', { roughness: .8 });
    const ten = malz('#c58c66', { roughness: .62 }), sac = malz('#24170f', { roughness: .9 });
    const eldiven = malz('#f2f4f7', { roughness: .5 }), eld2 = malz('#16181d');
    const ayak = malz('#0d0e11', { roughness: .4 }), taban = malz('#e9ecef');
    const k = new T.Group();
    const kok = eklem(k, 0, .95, 0);                             // kalça
    // şort + gövde
    const sort = govdeMesh([[0, -.2], [.15, -.2], [.165, -.05], [.155, .06], [0, .06]], forma2, 1.12, .78); kok.add(sort);
    const bel = eklem(kok, 0, .05, 0);
    const govde = govdeMesh([[0, 0], [.145, 0], [.16, .12], [.185, .3], [.195, .4], [.17, .47], [.09, .52], [0, .52]], forma, 1.18, .72); bel.add(govde);
    // forma ön şeridi ve numara bandı
    const serit = new T.Mesh(new T.BoxGeometry(.36, .05, .02), forma2); serit.position.set(0, .3, .135); bel.add(serit);
    const boyun = kapsul(.05, .055, .08, ten); boyun.position.y = .6; bel.add(boyun);
    const yaka = new T.Mesh(new T.TorusGeometry(.068, .016, 8, 24), forma2); yaka.rotation.x = Math.PI / 2; yaka.scale.set(1.15, .8, 1); yaka.position.y = .52; bel.add(yaka);
    const arma = new T.Mesh(new T.CircleGeometry(.03, 20), malz('#16181d')); arma.position.set(-.075, .38, .139); bel.add(arma);
    const no = new T.Mesh(new T.PlaneGeometry(.07, .09), new T.MeshBasicMaterial({ map: (() => { const c = document.createElement('canvas'); c.width = 64; c.height = 80; const x = c.getContext('2d'); x.fillStyle = '#16181d'; x.font = '900 72px "Barlow Condensed", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('1', 32, 44); const t = new T.CanvasTexture(c); t.encoding = T.sRGBEncoding; return t; })(), transparent: true }));
    no.position.set(.075, .37, .14); bel.add(no);
    const bas = new T.Mesh(new T.SphereGeometry(.105, 24, 18), ten); bas.scale.set(1, 1.18, 1.05); bas.position.y = .72; bas.castShadow = true; bel.add(bas);
    const sacM = new T.Mesh(new T.SphereGeometry(.11, 24, 12, 0, Math.PI * 2, 0, Math.PI * .55), sac); sacM.scale.set(1, 1.15, 1.08); sacM.position.set(0, .735, -.008); sacM.rotation.x = -.35; bel.add(sacM);
    const kulak = (x) => { const m = new T.Mesh(new T.SphereGeometry(.025, 10, 8), ten); m.scale.set(.6, 1, .8); m.position.set(x, .72, 0); bel.add(m); };
    kulak(-.104); kulak(.104);
    // kollar
    const kol = (yon) => {
      const omuz = eklem(bel, yon * .215, .44, 0);
      const ust = kapsul(.06, .052, .3, forma); omuz.add(ust);
      const dirsek = eklem(omuz, 0, -.3, 0);
      const alt = kapsul(.05, .044, .25, forma); dirsek.add(alt);
      const kolSerit = new T.Mesh(new T.CylinderGeometry(.052, .055, .035, 16), forma2); kolSerit.position.y = -.05; omuz.add(kolSerit);
      const bilek = eklem(dirsek, 0, -.27, 0);
      const manset = new T.Mesh(new T.CylinderGeometry(.052, .052, .06, 16), eld2); manset.position.y = .0; bilek.add(manset);
      const avuc = new T.Mesh(new T.SphereGeometry(.07, 18, 14), eldiven); avuc.scale.set(1, 1.45, .55); avuc.position.y = -.09; avuc.castShadow = true; bilek.add(avuc);
      const parmak = new T.Mesh(new T.BoxGeometry(.11, .07, .045), eldiven); parmak.position.y = -.17; bilek.add(parmak);
      const bas2 = new T.Mesh(new T.SphereGeometry(.03, 10, 8), eldiven); bas2.scale.set(1, 1.6, 1); bas2.position.set(-yon * .07, -.08, .02); bilek.add(bas2);
      return { omuz, dirsek, bilek };
    };
    const solK = kol(-1), sagK = kol(1);
    // bacaklar
    const bacak = (yon) => {
      const kalca = eklem(kok, yon * .09, -.08, 0);
      const ust = kapsul(.085, .062, .42, ten); kalca.add(ust);
      const sortB = new T.Mesh(new T.CylinderGeometry(.092, .088, .2, 18), forma2); sortB.position.y = -.07; sortB.castShadow = true; kalca.add(sortB);
      const diz = eklem(kalca, 0, -.42, 0);
      const alt = kapsul(.058, .042, .4, forma); diz.add(alt);
      const bilek = eklem(diz, 0, -.42, 0);
      const bot = new T.Mesh(new T.BoxGeometry(.095, .075, .25), ayak); bot.position.set(0, -.02, .05); bot.castShadow = true; bilek.add(bot);
      const tb = new T.Mesh(new T.BoxGeometry(.1, .018, .26), taban); tb.position.set(0, -.065, .05); bilek.add(tb);
      return { kalca, diz, bilek };
    };
    const solB = bacak(-1), sagB = bacak(1);
    k.userData = { kok, bel, solK, sagK, solB, sagB };
    return k;
  }
  // duruşlar: her biri eklem açıları + kök konumu
  const DURUS = {
    hazir: { x: 0, yy: 0, y: .86, rz: 0, rx: .12, kol: [[-.25, -.55, -.95], [-.25, .55, -.95]], bacak: [[-.42, -.14, .62], [-.42, .14, .62]] },
    yuk:   { x: 0, yy: 0, y: .8,  rz: 0, rx: .2,  kol: [[-.2, -.7, -1.1], [-.2, .7, -1.1]], bacak: [[-.62, -.18, .95], [-.62, .18, .95]] },
    sol:   { x: -1.25, yy: .55, y: 1.0, rz: 1.22, rx: 0, kol: [[-.1, 2.9, -.15], [-.1, 2.5, -.15]], bacak: [[0, .25, .15], [.05, -.1, .25]] },
    solD:  { x: -1.5, yy: .12, y: .32, rz: 1.5, rx: 0, kol: [[-.1, 2.95, -.1], [-.1, 2.6, -.1]], bacak: [[0, .3, .1], [.1, -.05, .2]] },
    sag:   { x: 1.25, yy: .55, y: 1.0, rz: -1.22, rx: 0, kol: [[-.1, -2.5, -.15], [-.1, -2.9, -.15]], bacak: [[.05, .1, .25], [0, -.25, .15]] },
    sagD:  { x: 1.5, yy: .12, y: .32, rz: -1.5, rx: 0, kol: [[-.1, -2.6, -.1], [-.1, -2.95, -.1]], bacak: [[.1, .05, .2], [0, -.3, .1]] },
    orta:  { x: 0, yy: .3, y: 1.0, rz: 0, rx: -.05, kol: [[-.15, 2.85, -.1], [-.15, -2.85, -.1]], bacak: [[-.1, -.1, .4], [-.1, .1, .4]] },
  };
  // tepki duruşları: x yok → kalktığı yer (konumX), yükseklik GLB'de zeminden hesaplanır
  const B_DIK = [[0, -.04, 0], [0, .04, 0]], B_DIZLER = [[0, -.05, 1.5], [0, .05, 1.5]];
  Object.entries({
    dik:       { y: .93, rx: 0,    kol: [[0, -.12, -.15], [0, .12, -.15]], bacak: B_DIK },
    diz:       { y: .5,  rx: .15,  kol: [[-.6, -.2, -.9], [0, .12, -.2]], bacak: [[-1.5, -.1, 1.5], [0, .1, 1.5]] },
    dizler:    { y: .5,  rx: .1,   kol: [[0, -.12, -.4], [0, .12, -.4]], bacak: B_DIZLER },
    dizlerY:   { y: .5,  rx: 0,    kol: [[0, -.15, -.3], [-.3, 2.7, -.6]], bacak: B_DIZLER },
    dizlerV:   { y: .48, rx: .9,   kol: [[-.5, -.2, -.3], [-.9, .1, 0]], bacak: [[-.9, -.05, 1.5], [-.9, .05, 1.5]] },
    dizlerBas: { y: .5,  rx: .35,  kol: [[-.3, -.1, -.5], [-.3, .1, -.5]], bacak: [[-.35, -.05, 1.5], [-.35, .05, 1.5]] },
    dizlerS:   { y: .5,  rx: -.1,  kol: [[-.8, -.3, -1.6], [-.8, .3, -1.6]], bacak: B_DIZLER },
    dizlerS2:  { y: .5,  rx: -.15, kol: [[0, -2.6, -.2], [0, 2.6, -.2]], bacak: B_DIZLER },
    basEl:     { y: .93, rx: 0,    kol: [[0, -2.3, -2.3], [0, 2.3, -2.3]], bacak: B_DIK },
    belEl:     { y: .93, rx: .05,  kol: [[.2, -.7, -1.7], [.2, .7, -1.7]], bacak: B_DIK },
    belElS:    { y: .93, rx: .05,  kol: [[.2, -.7, -1.7], [.2, .7, -1.7]], bacak: B_DIK },
    belElG:    { y: .93, rx: .05,  kol: [[.2, -.7, -1.7], [.2, .7, -1.7]], bacak: B_DIK },
    sevin:     { y: .93, rx: -.05, kol: [[0, -2.6, -.1], [0, 2.6, -.1]], bacak: B_DIK },
    yumrukUst: { y: .93, rx: 0,    kol: [[0, -.12, -.15], [0, 2.7, -.3]], bacak: B_DIK },
    yumrukAlt: { y: .9,  rx: .1,   kol: [[0, -.12, -.15], [-.4, .3, -2.0]], bacak: B_DIK },
    alkisA:    { y: .93, rx: 0,    kol: [[-1.1, -.2, -.6], [-1.1, .2, -.6]], bacak: B_DIK },
    alkisB:    { y: .93, rx: 0,    kol: [[-1.1, .25, -.9], [-1.1, -.25, -.9]], bacak: B_DIK },
  }).forEach(([ad, d]) => { DURUS[ad] = Object.assign({ yy: 0, rz: 0, zm: true }, d); });
  DURUS.solY = { ...DURUS.solD, x: -1.75, kol: [[-.8, -.3, -1.4], [-.8, .3, -1.4]] }; DURUS.sagY = { ...DURUS.sagD, x: 1.75, kol: [[-.8, -.3, -1.4], [-.8, .3, -1.4]] };
  function durusUygula(k, a, b, t) {
    const L = (x, y) => x + (y - x) * t, u = k.userData;
    k.position.x = L(a.x ?? konumX, b.x ?? konumX); k.position.y = L(a.yy, b.yy); u.kok.position.y = L(a.y, b.y);
    k.rotation.z = L(a.rz, b.rz); u.kok.rotation.x = L(a.rx, b.rx);
    [[u.solK, 0], [u.sagK, 1]].forEach(([kk, i]) => { kk.omuz.rotation.x = L(a.kol[i][0], b.kol[i][0]); kk.omuz.rotation.z = L(a.kol[i][1], b.kol[i][1]); kk.dirsek.rotation.x = L(a.kol[i][2], b.kol[i][2]); });
    [[u.solB, 0], [u.sagB, 1]].forEach(([bb, i]) => { bb.kalca.rotation.x = L(a.bacak[i][0], b.bacak[i][0]); bb.kalca.rotation.z = L(a.bacak[i][1], b.bacak[i][1]); bb.diz.rotation.x = L(a.bacak[i][2], b.bacak[i][2]); bb.bilek.rotation.x = -(bb.kalca.rotation.x + bb.diz.rotation.x); });
  }


  // ── gerçek kaleci modeli (GLB, iskeletli) ──
  const KEMIK = { bel1: 'Spine02_09', bel2: 'Spine01_010', gogus: 'Spine_011', boyun: 'neck_020', bas: 'Head_021', solOmuz: 'LeftShoulder_012', sagOmuz: 'RightShoulder_016',
    solKol: 'LeftArm_013', solOnkol: 'LeftForeArm_014', solEl: 'LeftHand_015', sagKol: 'RightArm_017', sagOnkol: 'RightForeArm_018', sagEl: 'RightHand_019',
    solUyluk: 'LeftUpLeg_01', solBaldir: 'LeftLeg_02', solAyak: 'LeftFoot_03', solParmak: 'LeftToeBase_04',
    sagUyluk: 'RightUpLeg_05', sagBaldir: 'RightLeg_06', sagAyak: 'RightFoot_07', sagParmak: 'RightToeBase_08' };
  // Yönler karakterin kendi ekseninde: +y yukarı, +z öne (kameraya), +x karakterin solu
  const ayna = o => { const m = {}; for (const k in o) { const [x, y, z] = o[k]; const k2 = k.startsWith('sol') ? 'sag' + k.slice(3) : (k.startsWith('sag') ? 'sol' + k.slice(3) : k); m[k2] = [-x, y, z]; } return m; };
  const POZ = {
    hazir: { bel1: [0, 1, .16], solKol: [.5, -.8, .32], solOnkol: [.15, -.35, .92], sagKol: [-.5, -.8, .32], sagOnkol: [-.15, -.35, .92],
             solUyluk: [.16, -.9, .42], solBaldir: [.1, -.95, -.28], solAyak: [.1, -.25, 1], sagUyluk: [-.16, -.9, .42], sagBaldir: [-.1, -.95, -.28], sagAyak: [-.1, -.25, 1] },
    yuk:   { bel1: [0, 1, .3], solKol: [.62, -.68, .38], solOnkol: [.22, -.2, .95], sagKol: [-.62, -.68, .38], sagOnkol: [-.22, -.2, .95],
             solUyluk: [.18, -.72, .66], solBaldir: [.1, -.95, -.32], solAyak: [.1, -.25, 1], sagUyluk: [-.18, -.72, .66], sagBaldir: [-.1, -.95, -.32], sagAyak: [-.1, -.25, 1] },
    sol:   { solOmuz: [.72, .68, .05], sagOmuz: [-.72, .68, .05], bel1: [-.08, 1, .05], solKol: [-.12, 1, .14], solOnkol: [-.16, 1, .12], sagKol: [-.4, .92, .12], sagOnkol: [-.42, .9, .1],
             solUyluk: [.12, -.95, .28], solBaldir: [.05, -.9, -.4], solAyak: [0, -.3, 1], sagUyluk: [-.05, -1, .06], sagBaldir: [-.05, -1, 0], sagAyak: [0, -.3, 1] },
    solD:  { solOmuz: [.72, .68, .05], sagOmuz: [-.72, .68, .05], bel1: [-.05, 1, 0], solKol: [-.25, .97, .1], solOnkol: [-.3, .95, .1], sagKol: [-.5, .86, .1], sagOnkol: [-.55, .83, .1],
             solUyluk: [.15, -.95, .2], solBaldir: [.08, -.92, -.3], solAyak: [0, -.3, 1], sagUyluk: [-.03, -1, .1], sagBaldir: [-.03, -1, 0], sagAyak: [0, -.3, 1] },
    orta:  { solOmuz: [.72, .68, .05], sagOmuz: [-.72, .68, .05], bel1: [0, 1, 0], solKol: [.28, 1, .12], solOnkol: [.18, 1, .25], sagKol: [-.28, 1, .12], sagOnkol: [-.18, 1, .25],
             solUyluk: [.12, -.95, .3], solBaldir: [.08, -.96, -.22], solAyak: [.05, -.3, 1], sagUyluk: [-.12, -.95, .3], sagBaldir: [-.08, -.96, -.22], sagAyak: [-.05, -.3, 1] },
  };
  const KOL_DIK = { solKol: [.18, -1, 0], solOnkol: [.1, -1, .18], sagKol: [-.18, -1, 0], sagOnkol: [-.1, -1, .18] };
  const AYAK_DIK = { solUyluk: [.05, -1, .02], solBaldir: [.03, -1, -.05], solAyak: [.12, -.3, 1], sagUyluk: [-.05, -1, .02], sagBaldir: [-.03, -1, -.05], sagAyak: [-.12, -.3, 1] };
  const AYAK_DIZLER = { solUyluk: [.08, -1, -.05], solBaldir: [.03, -.12, -1], solAyak: [0, -.5, -.85], sagUyluk: [-.08, -1, -.05], sagBaldir: [-.03, -.12, -1], sagAyak: [0, -.5, -.85] };
  const OMUZ_UST = { solOmuz: [.72, .68, .05], sagOmuz: [-.72, .68, .05] };
  Object.assign(POZ, {
    dik:       { bel1: [0, 1, .02], ...KOL_DIK, ...AYAK_DIK },
    diz:       { bel1: [0, 1, .18], solKol: [.3, -.8, .5], solOnkol: [.05, -.45, .9], sagKol: [-.2, -1, .12], sagOnkol: [-.1, -.95, .3],
                 solUyluk: [.12, -.1, 1], solBaldir: [.04, -1, .08], solAyak: [.1, -.25, 1], sagUyluk: [-.1, -1, -.12], sagBaldir: [-.04, -.15, -1], sagAyak: [0, -.55, -.85] },
    dizler:    { bel1: [0, 1, .1], solKol: [.2, -1, .1], solOnkol: [.1, -.9, .4], sagKol: [-.2, -1, .1], sagOnkol: [-.1, -.9, .4], boyun: [0, .85, .5], ...AYAK_DIZLER },
    dizlerY:   { bel1: [-.05, 1, .05], sagOmuz: [-.72, .68, .05], sagKol: [-.3, .85, .2], sagOnkol: [-.05, 1, .1], solKol: [.2, -.95, .2], solOnkol: [.08, -.85, .5], boyun: [0, .95, -.25], ...AYAK_DIZLER },
    dizlerV:   { bel1: [-.1, .45, .88], sagKol: [-.15, -.8, .55], sagOnkol: [-.05, -.97, .2], solKol: [.25, -.7, .66], solOnkol: [.05, -.8, .6], boyun: [0, .5, .86], ...AYAK_DIZLER },
    dizlerBas: { bel1: [0, .9, .42], solKol: [.15, -.9, .4], solOnkol: [.02, -.6, .8], sagKol: [-.15, -.9, .4], sagOnkol: [-.02, -.6, .8], boyun: [0, .55, .83], ...AYAK_DIZLER },
    dizlerS:   { bel1: [0, 1, -.15], solKol: [.55, -.75, .2], solOnkol: [.2, .6, .75], sagKol: [-.55, -.75, .2], sagOnkol: [-.2, .6, .75], boyun: [0, .9, -.4], ...AYAK_DIZLER },
    dizlerS2:  { bel1: [0, 1, -.2], ...OMUZ_UST, solKol: [.55, .8, .1], solOnkol: [.4, .9, .1], sagKol: [-.55, .8, .1], sagOnkol: [-.4, .9, .1], boyun: [0, .9, -.45], ...AYAK_DIZLER },
    basEl:     { bel1: [0, 1, -.05], solKol: [.83, .55, .05], solOnkol: [-.85, .5, .1], sagKol: [-.83, .55, .05], sagOnkol: [.85, .5, .1], boyun: [0, .92, -.38], ...AYAK_DIK },
    belEl:     { bel1: [0, 1, .1], solKol: [.6, -.75, -.25], solOnkol: [-.62, -.7, .3], sagKol: [-.6, -.75, -.25], sagOnkol: [.62, -.7, .3], boyun: [0, .75, .65], ...AYAK_DIK },
    sevin:     { bel1: [0, 1, -.08], ...OMUZ_UST, solKol: [.5, .86, .05], solOnkol: [.42, .9, .05], sagKol: [-.5, .86, .05], sagOnkol: [-.42, .9, .05], boyun: [0, .92, -.4], ...AYAK_DIK },
    yumrukUst: { bel1: [0, 1, .02], sagOmuz: [-.72, .68, .05], sagKol: [-.3, .9, .3], sagOnkol: [-.1, .98, .15], solKol: [.18, -1, 0], solOnkol: [.1, -1, .18], boyun: [0, .95, -.3], ...AYAK_DIK },
    yumrukAlt: { bel1: [0, 1, .2], sagKol: [-.3, -.9, .3], sagOnkol: [-.2, .5, .85], solKol: [.25, -.95, .1], solOnkol: [.12, -.7, .7], boyun: [0, .9, .2], ...AYAK_DIK },
    alkisA:    { bel1: [0, 1, .05], solKol: [.25, -.45, .86], solOnkol: [.1, .2, .97], sagKol: [-.25, -.45, .86], sagOnkol: [-.1, .2, .97], ...AYAK_DIK },
    alkisB:    { bel1: [0, 1, .05], solKol: [.25, -.45, .86], solOnkol: [-.85, .15, .5], sagKol: [-.25, -.45, .86], sagOnkol: [.85, .15, .5], ...AYAK_DIK },
  });
  POZ.belElS = { ...POZ.belEl, boyun: [.32, .7, .64] }; POZ.belElG = { ...POZ.belEl, boyun: [-.32, .7, .64] };
  // yerde toparlanma: kollar göğse, dizler karna (kalkmadan önce)
  POZ.solY = { bel1: [-.05, 1, .15], solKol: [.3, -.5, .8], solOnkol: [-.2, .3, .9], sagKol: [-.3, -.55, .78], sagOnkol: [.15, .2, .95],
               solUyluk: [.1, -.45, .88], solBaldir: [.05, -.85, -.5], solAyak: [0, -.3, 1], sagUyluk: [-.05, -.6, .8], sagBaldir: [-.03, -.9, -.4], sagAyak: [0, -.3, 1], boyun: [0, .9, .4] };
  POZ.sag = ayna(POZ.sol); POZ.sagD = ayna(POZ.solD); POZ.sagY = ayna(POZ.solY);
  const ZINCIR = [['bel1', 'bel2'], ['boyun', 'bas'], ['solOmuz', 'solKol'], ['sagOmuz', 'sagKol'], ['solKol', 'solOnkol'], ['solOnkol', 'solEl'], ['sagKol', 'sagOnkol'], ['sagOnkol', 'sagEl'],
    ['solUyluk', 'solBaldir'], ['solBaldir', 'solAyak'], ['solAyak', 'solParmak'], ['sagUyluk', 'sagBaldir'], ['sagBaldir', 'sagAyak'], ['sagAyak', 'sagParmak']];
  function glbKaleci(gltf) {
    const kok = new T.Group(), model = gltf.scene, kb = {};
    model.scale.setScalar(1.08); kok.add(model);
    model.traverse(o => { if (o.isMesh) { o.castShadow = true; o.frustumCulled = false; if (o.material) { o.material.roughness = .78; o.material.metalness = 0; o.material.side = T.DoubleSide; } } });
    for (const k in KEMIK) kb[k] = model.getObjectByName(KEMIK[k]);
    const kemikler = []; model.traverse(o => { if (o.isBone) kemikler.push(o); });
    const bag = new Map(kemikler.map(b => [b, b.quaternion.clone()]));
    const v1 = new T.Vector3(), v2 = new T.Vector3(), q1 = new T.Quaternion(), q2 = new T.Quaternion();
    const yonlendir = (b, c, yon) => {
      kok.updateMatrixWorld(true);
      const d = c.getWorldPosition(v2).sub(b.getWorldPosition(v1)).normalize();
      const q = new T.Quaternion().setFromUnitVectors(d, new T.Vector3(...yon).normalize());
      const yeni = q.multiply(b.getWorldQuaternion(q1));
      b.quaternion.copy(b.parent.getWorldQuaternion(q2).invert().multiply(yeni));
    };
    // eldivenler (bilek üstüne, el yönünde)
    const eld = new T.MeshStandardMaterial({ color: '#f4f6f8', roughness: .55 }), eld2 = new T.MeshStandardMaterial({ color: '#16181d', roughness: .6 });
    kok.updateMatrixWorld(true);
    [['solOnkol', 'solEl'], ['sagOnkol', 'sagEl']].forEach(([o, e]) => {
      const el = kb[e], yon = el.getWorldPosition(new T.Vector3()).sub(kb[o].getWorldPosition(new T.Vector3())).normalize();
      const merkez = el.getWorldPosition(new T.Vector3()).addScaledVector(yon, .085);
      const g = new T.Group(); el.add(g); g.position.copy(el.worldToLocal(merkez.clone()));
      const ws = el.getWorldScale(new T.Vector3()); g.scale.set(1 / ws.x, 1 / ws.y, 1 / ws.z);
      const iq = el.getWorldQuaternion(new T.Quaternion()).invert();
      g.quaternion.copy(iq.multiply(new T.Quaternion().setFromUnitVectors(new T.Vector3(0, 1, 0), yon)));
      const avuc = new T.Mesh(new T.SphereGeometry(.06, 18, 14), eld); avuc.scale.set(1, 1.55, .62); avuc.castShadow = true; g.add(avuc);
      const manset = new T.Mesh(new T.CylinderGeometry(.045, .05, .05, 16), eld2); manset.position.y = -.075; g.add(manset);
    });
    const pozlar = {}, zemin = {};
    for (const ad in POZ) {
      kemikler.forEach(b => b.quaternion.copy(bag.get(b)));
      ZINCIR.forEach(([a, c]) => { if (POZ[ad][a] && kb[a] && kb[c]) yonlendir(kb[a], kb[c], POZ[ad][a]); });
      pozlar[ad] = new Map(kemikler.map(b => [b, b.quaternion.clone()]));
      kok.updateMatrixWorld(true);
      zemin[ad] = -Math.min(kb.solParmak.getWorldPosition(v1).y, kb.sagParmak.getWorldPosition(v2).y, kb.solAyak.getWorldPosition(v1).y - .06, kb.sagAyak.getWorldPosition(v2).y - .06,
        kb.solBaldir.getWorldPosition(v1).y - .065, kb.sagBaldir.getWorldPosition(v2).y - .065);
    }
    kok.userData = { glb: true, kemikler, pozlar, zemin };
    return kok;
  }
  function glbPoz(k, a, b, t) {
    const u = k.userData, A = u.pozlar[a], B = u.pozlar[b], L = (x, y) => x + (y - x) * t;
    u.kemikler.forEach(bn => bn.quaternion.copy(A.get(bn)).slerp(B.get(bn), t));
    const ra = DURUS[a], rb = DURUS[b];
    const ya = (ra.zm || a === 'hazir' || a === 'yuk') ? u.zemin[a] : ra.yy, yb = (rb.zm || b === 'hazir' || b === 'yuk') ? u.zemin[b] : rb.yy;
    k.position.x = L(ra.x ?? konumX, rb.x ?? konumX); k.position.y = L(ya, yb); k.rotation.z = L(ra.rz, rb.rz);
  }
  let konumX = 0;
  const KALK_X = 2.1;
  function zincir(adimlar) {
    return adimlar.reduce((p, [a, b, sure, egri = yumusak, zip = 0]) => p.then(() => oynat(sure, t => {
      poz(a, b, egri(t)); if (zip) kaleci.position.y += Math.sin(t * Math.PI) * zip;
    })), Promise.resolve());
  }
  function tepki(dalisAd, gol) {
    const yan = dalisAd !== 'orta', D = dalisAd + 'D', Y = dalisAd + 'Y', r = Math.random(), sert = t => t * t;
    konumX = yan ? Math.sign(DURUS[D].x) * KALK_X : 0;
    const kalk = yan ? [[D, D, gol ? .3 : .1], [D, Y, .26], [Y, 'diz', .45], ['diz', 'dik', .4]] : [['hazir', 'dik', .3]];
    let a;
    if (gol) {
      if (yan && r < .4) a = [[D, D, .25], [D, Y, .26], [Y, 'dizler', .42], ['dizler', 'dizlerY', .24], ['dizlerY', 'dizlerV', .1, sert], ['dizlerV', 'dizlerV', .1],
        ['dizlerV', 'dizlerY', .22], ['dizlerY', 'dizlerV', .1, sert], ['dizlerV', 'dizlerV', .14], ['dizlerV', 'dizlerBas', .35]];
      else if (r < .7) a = [...kalk, ['dik', 'basEl', .32], ['basEl', 'basEl', .5], ['basEl', 'belEl', .5]];
      else a = [...kalk, ['dik', 'belEl', .35], ['belEl', 'belElS', .25], ['belElS', 'belElG', .3], ['belElG', 'belEl', .25]];
    } else {
      if (yan && r < .3) a = [[D, D, .08], [D, Y, .22], [Y, 'dizler', .38], ['dizler', 'dizlerS', .22], ['dizlerS', 'dizlerS', .3], ['dizlerS', 'dizlerS2', .25]];
      else if (r < .55) a = [...kalk, ['dik', 'sevin', .28, yumusak, .12], ['sevin', 'sevin', .3, t => t, .14]];
      else if (r < .8) a = [...kalk, ['dik', 'yumrukUst', .22], ['yumrukUst', 'yumrukAlt', .14, sert], ['yumrukAlt', 'yumrukUst', .16], ['yumrukUst', 'yumrukAlt', .14, sert], ['yumrukAlt', 'dik', .4]];
      else a = [...kalk, ['dik', 'alkisA', .2], ['alkisA', 'alkisB', .1, sert], ['alkisB', 'alkisA', .12], ['alkisA', 'alkisB', .1, sert], ['alkisB', 'alkisA', .12], ['alkisA', 'alkisB', .1, sert], ['alkisB', 'dik', .35]];
    }
    return zincir(a);
  }
  function poz(a, b, t) { if (kaleci.userData.glb) glbPoz(kaleci, a, b, t); else durusUygula(kaleci, DURUS[a], DURUS[b], t); }
  // ── takım forması: gölge dokusu + maskeler, renkler ve arma uniform ile ──
  const KIT = {
    kForma: { value: new T.Color('#ccf000') }, kSort: { value: new T.Color('#ccf000') }, kCorap: { value: new T.Color('#16181d') },
    kSerit: { value: new T.Color('#16181d') }, kYazi: { value: new T.Color('#121417') }, kKenar: { value: new T.Color('#d9a400') },
    kitA: { value: null }, kitB: { value: null }, kitUV: { value: null }, kitLogo: { value: null }, kLogoVar: { value: 0 },
  };
  function kitMalzeme(mat) {
    mat.onBeforeCompile = sh => {
      Object.assign(sh.uniforms, KIT);
      sh.fragmentShader = 'uniform sampler2D kitA, kitB, kitUV, kitLogo; uniform vec3 kForma, kSort, kCorap, kSerit, kYazi, kKenar; uniform float kLogoVar;\n' +
        sh.fragmentShader.replace('#include <map_fragment>', [
          'vec4 texelColor = mapTexelToLinear( texture2D( map, vUv ) );',
          'vec3 ma = texture2D( kitA, vUv ).rgb, mb = texture2D( kitB, vUv ).rgb;',
          'float top = ma.r + ma.g + ma.b + mb.r, kit = clamp( top, 0., 1. ), g = texelColor.r * 2.;',
          'vec3 kr = ( ma.r * kForma + ma.g * kSort + ma.b * kCorap + mb.r * kSerit ) / max( top, 1e-4 );',
          'vec3 rk = mix( texelColor.rgb, kr * g, kit );',
          'rk = mix( rk, kKenar * g, mb.b );',
          'rk = mix( rk, kYazi * ( .55 + .45 * g ), mb.g );',
          'vec3 lu = texture2D( kitUV, vUv ).rgb;',
          'vec4 lg = sRGBToLinear( texture2D( kitLogo, lu.rg ) );',
          'rk = mix( rk, lg.rgb * ( .6 + .4 * g ), lg.a * smoothstep( .5, 1., lu.b ) * kLogoVar );',
          'diffuseColor *= vec4( rk, texelColor.a );'].join('\n'));
    };
    mat.customProgramCacheKey = () => 'kaleci-kit';
    mat.needsUpdate = true;
  }
  const dokuYukle = (src, ayar) => new Promise(res => {
    if (!src) return res(null);
    new T.TextureLoader().load(src, t => { t.flipY = false; Object.assign(t, ayar || {}); t.needsUpdate = true; res(t); }, undefined, () => res(null));
  });
  function rozetDokusu(r) {
    const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
    x.fillStyle = r.bg || '#333'; x.beginPath(); x.moveTo(64, 6); x.lineTo(116, 22); x.lineTo(110, 78); x.quadraticCurveTo(96, 108, 64, 122); x.quadraticCurveTo(32, 108, 18, 78); x.lineTo(12, 22); x.closePath(); x.fill();
    x.lineWidth = 6; x.strokeStyle = r.tc || '#fff'; x.stroke();
    x.fillStyle = r.tc || '#fff'; x.font = '900 46px "Barlow Condensed", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(r.short || '', 64, 64);
    const t = new T.CanvasTexture(c); t.flipY = false; t.encoding = T.sRGBEncoding; return t;
  }
  let kitIstek = 0;
  async function kaleciTakim(k) {
    const no = ++kitIstek, dogrusal = h => new T.Color(h).convertSRGBToLinear();
    ['forma', 'sort', 'corap', 'serit', 'yazi', 'kenar'].forEach(a => KIT['k' + a[0].toUpperCase() + a.slice(1)].value.copy(dogrusal(k[a])));
    const lt = k.logo ? await dokuYukle(k.logo, { encoding: T.sRGBEncoding, anisotropy: 4 }) : null;
    if (no !== kitIstek) return;
    KIT.kitLogo.value = lt || rozetDokusu(k.rozet || {}); KIT.kLogoVar.value = 1;
  }
  async function glbYukle(url, dokular) {
    if (!url || !T.GLTFLoader) return;
    const ld = new T.GLTFLoader(); if (window.MeshoptDecoder) ld.setMeshoptDecoder(window.MeshoptDecoder);
    const veri = { minFilter: T.LinearFilter, generateMipmaps: false };
    const [taban, a, b, uv] = await Promise.all([dokuYukle(dokular.taban, { encoding: T.sRGBEncoding, anisotropy: 4 }), dokuYukle(dokular.a, { anisotropy: 4 }), dokuYukle(dokular.b, { anisotropy: 4 }), dokuYukle(dokular.uv, veri)]);
    KIT.kitA.value = a; KIT.kitB.value = b; KIT.kitUV.value = uv;
    if (!KIT.kitLogo.value) KIT.kitLogo.value = rozetDokusu({});
    const tam = taban && a && b && uv;
    ld.load(url, gltf => {
      const malzemeler = new Set();
      gltf.scene.traverse(o => { if (o.isMesh && o.material) { o.material.map = taban; o.material.color.set(taban ? '#ffffff' : '#ccf000'); malzemeler.add(o.material); } });
      if (tam) malzemeler.forEach(kitMalzeme); else malzemeler.forEach(m => { m.needsUpdate = true; });
      const yeni = glbKaleci(gltf); yeni.position.set(0, 0, .35);
      scene.remove(kaleci); kaleci = yeni; scene.add(kaleci);
      poz('hazir', 'hazir', 1);
    }, undefined, e => console.warn('kaleci modeli yüklenemedi', e));
  }

  // ── top (kesik ikosahedron deseni) ──
  // ── top: CSC26 (panel dikişleri + bant + yazı, küre üzerinde piksel piksel hesaplanır) ──
  function topDokusu(renkC, kabC) {
    const W = renkC.width, H = renkC.height;
    const t = (1 + Math.sqrt(5)) / 2, V = [[-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]].map(v => new T.Vector3(...v));
    const kenar = V[0].distanceTo(V[1]), yuz = [];
    V.forEach(v => { const n = V.find(k => Math.abs(k.distanceTo(v) - kenar) < 1e-6), nn = v.clone().normalize(); yuz.push([nn, v.clone().multiplyScalar(2).add(n).divideScalar(3).dot(nn)]); });
    for (let i = 0; i < 12; i++) for (let j = i + 1; j < 12; j++) for (let k = j + 1; k < 12; k++) {
      const A = V[i], B = V[j], C = V[k];
      if (Math.abs(A.distanceTo(B) - kenar) > 1e-6 || Math.abs(B.distanceTo(C) - kenar) > 1e-6 || Math.abs(A.distanceTo(C) - kenar) > 1e-6) continue;
      const nn = A.clone().add(B).add(C).normalize(); yuz.push([nn, A.clone().multiplyScalar(2).add(B).divideScalar(3).dot(nn)]);
    }
    const NX = yuz.map(y => y[0].x / y[1]), NY = yuz.map(y => y[0].y / y[1]), NZ = yuz.map(y => y[0].z / y[1]);
    // yazı ekseni kameraya bakar; bant 45° yanından çapraz geçer
    const Wy = new T.Vector3(0, .31, .95).normalize(), e1 = new T.Vector3(1, 0, 0), e2 = new T.Vector3().crossVectors(Wy, e1);
    const u = e1.clone().multiplyScalar(Math.cos(.55)).add(e2.clone().multiplyScalar(Math.sin(.55)));
    const BANTLAR = [1, -1].map(sg => {
      const A = Wy.clone().multiplyScalar(Math.cos(1.0)).add(u.clone().multiplyScalar(sg * Math.sin(1.0))).normalize();
      const b1 = new T.Vector3().crossVectors(A, Wy).normalize(), b2 = new T.Vector3().crossVectors(A, b1);
      return { A, b1, b2, sg };
    });
    // yazı
    const yc = document.createElement('canvas'); yc.width = 512; yc.height = 176;
    const yx = yc.getContext('2d'); yx.fillStyle = '#0d0f12'; yx.font = '900 150px "Barlow Condensed", "Arial Narrow", sans-serif'; yx.textAlign = 'center'; yx.textBaseline = 'alphabetic';
    yx.fillText('CSC26', 256, 138); yx.fillStyle = '#00c96a'; yx.fillRect(150, 152, 212, 12);
    const yd = yx.getImageData(0, 0, 512, 176).data, YW = .74, YH = YW * 176 / 512;
    const yaziOku = (s2, t2) => {
      const x = (s2 / YW + .5) * 512 - .5, y = (.5 - t2 / YH) * 176 - .5; if (x < 0 || y < 0 || x >= 511 || y >= 175) return null;
      const x0 = x | 0, y0 = y | 0, fx = x - x0, fy = y - y0, o = [0, 0, 0, 0];
      [[0, 0, (1 - fx) * (1 - fy)], [1, 0, fx * (1 - fy)], [0, 1, (1 - fx) * fy], [1, 1, fx * fy]].forEach(([dx, dy, w]) => { const i = ((y0 + dy) * 512 + x0 + dx) * 4; for (let k = 0; k < 4; k++) o[k] += yd[i + k] * w; });
      return o;
    };
    const sm = (a, b, x) => { const q = Math.min(1, Math.max(0, (x - a) / (b - a))); return q * q * (3 - 2 * q); };
    const rx = renkC.getContext('2d'), kx = kabC.getContext('2d'), rI = rx.createImageData(W, H), kI = kx.createImageData(W, H), R = rI.data, K = kI.data;
    const pw = 2 * Math.PI / W * 1.2, P = 2 * Math.PI / 6;
    const BEYAZ = [244, 245, 247], SIYAH = [16, 18, 22], YESIL = [0, 230, 118], MAVI = [0, 176, 255], DIKIS = [196, 201, 207];
    const karis = (c, r, a) => { c[0] += (r[0] - c[0]) * a; c[1] += (r[1] - c[1]) * a; c[2] += (r[2] - c[2]) * a; };
    for (let y = 0; y < H; y++) {
      const th = (y + .5) / H * Math.PI, st = Math.sin(th), dy = Math.cos(th);
      for (let x = 0; x < W; x++) {
        const ph = (x + .5) / W * 2 * Math.PI, dx = -Math.cos(ph) * st, dz = Math.sin(ph) * st;
        let m1 = -9, m2 = -9;
        for (let i = 0; i < 32; i++) { const f = dx * NX[i] + dy * NY[i] + dz * NZ[i]; if (f > m1) { m2 = m1; m1 = f; } else if (f > m2) m2 = f; }
        const c = BEYAZ.slice();
        // iki çapraz bant: eğik siyah şeritler, yeşil uçlu; kenarında ince yeşil ve mavi çizgi
        for (const { A, b1, b2, sg } of BANTLAR) {
          const la = Math.asin(Math.max(-1, Math.min(1, dx * A.x + dy * A.y + dz * A.z))) * sg;
          const lo = Math.atan2(dx * b2.x + dy * b2.y + dz * b2.z, dx * b1.x + dy * b1.y + dz * b1.z) * sg;
          const yer = ((lo + la * 1.1) % P + P) % P;
          const bant = (1 - sm(.12 - pw, .12 + pw, Math.abs(la))) * sm(-pw, pw, yer) * (1 - sm(.68 * P - pw, .68 * P + pw, yer));
          if (bant > 0) {
            karis(c, SIYAH, bant);
            karis(c, YESIL, bant * sm(.36 * P, .68 * P, yer) * (1 - sm(.07 - pw, .07 + pw, Math.abs(la + .015))));
          }
          karis(c, YESIL, 1 - sm(.005, .005 + pw, Math.abs(la + .165)));
          karis(c, MAVI, 1 - sm(.004, .004 + pw, Math.abs(la - .165)));
        }
        // yazı (ön ve arka)
        for (const sg of [1, -1]) {
          const dw = sg * (dx * Wy.x + dy * Wy.y + dz * Wy.z); if (dw < .6) continue;
          const o = yaziOku(sg * (dx * e1.x + dy * e1.y + dz * e1.z) / dw, (dx * e2.x + dy * e2.y + dz * e2.z) / dw);
          if (o) karis(c, [o[0], o[1], o[2]], o[3] / 255);
        }
        // dikiş
        const ds = 1 - sm(.0035, .0035 + pw * .8, m1 - m2);
        karis(c, DIKIS, ds * .85);
        const i = (y * W + x) * 4;
        R[i] = c[0]; R[i + 1] = c[1]; R[i + 2] = c[2]; R[i + 3] = 255;
        K[i] = K[i + 1] = K[i + 2] = 255 * (1 - ds); K[i + 3] = 255;
      }
    }
    rx.putImageData(rI, 0, 0); kx.putImageData(kI, 0, 0);
  }
  function topYap() {
    const rc = document.createElement('canvas'), kc = document.createElement('canvas');
    rc.width = kc.width = 1024; rc.height = kc.height = 512;
    const map = new T.CanvasTexture(rc), kab = new T.CanvasTexture(kc);
    map.encoding = T.sRGBEncoding; map.anisotropy = kab.anisotropy = 4;
    const ciz = () => { topDokusu(rc, kc); map.needsUpdate = kab.needsUpdate = true; };
    ciz();
    if (document.fonts) document.fonts.load('900 150px "Barlow Condensed"').then(f => f.length && ciz(), () => {});
    const m = new T.Mesh(new T.SphereGeometry(.11, 64, 48), new T.MeshPhysicalMaterial({ map, bumpMap: kab, bumpScale: .004, roughness: .42, metalness: 0, clearcoat: .45, clearcoatRoughness: .35 }));
    m.castShadow = true; return m;
  }

  // ── file: petek dokulu ince ip, ızgara üzerinde esneyen yüzeyler ──
  const FILE_S = .085, X_F = KALE_G / 2;
  const N_GERI = new T.Vector3(0, TABAN_D - CATI_D, -KALE_Y).normalize();     // arka file dış normali
  const GERI_BOY = Math.hypot(KALE_Y, TABAN_D - CATI_D);
  function fileDokusu() {
    const W = 256, H = 512, c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d');
    x.fillStyle = '#000'; x.fillRect(0, 0, W, H);
    const tw = Math.sqrt(3) * FILE_S, th = 3 * FILE_S;
    x.setTransform(W / tw, 0, 0, H / th, 0, 0);
    x.strokeStyle = '#fff'; x.lineWidth = .0105; x.lineJoin = 'round';
    const merkezler = [];
    for (let i = -1; i <= 2; i++) for (let j = -1; j <= 2; j++) merkezler.push([i * tw, j * th], [i * tw + tw / 2, j * th + th / 2]);
    merkezler.forEach(([cx, cy]) => {
      x.beginPath();
      for (let k = 0; k <= 6; k++) { const a = Math.PI / 6 + k * Math.PI / 3, px = cx + FILE_S * Math.cos(a), py = cy + FILE_S * Math.sin(a); k ? x.lineTo(px, py) : x.moveTo(px, py); }
      x.stroke();
    });
    // düğümler: ip birleşim yerleri biraz kalın
    x.fillStyle = '#fff';
    merkezler.forEach(([cx, cy]) => { for (let k = 0; k < 6; k++) { const a = Math.PI / 6 + k * Math.PI / 3; x.beginPath(); x.arc(cx + FILE_S * Math.cos(a), cy + FILE_S * Math.sin(a), .0075, 0, Math.PI * 2); x.fill(); } });
    const t = new T.CanvasTexture(c); t.wrapS = t.wrapT = T.RepeatWrapping; t.anisotropy = 8; return { t, tw, th };
  }
  function fileYap() {
    const pos = [], uv = [], nrm = [], sol = [], idx = [], dk = fileDokusu();
    const panel = (P, na, nb, n, solma) => {
      const bas = pos.length / 3;
      for (let j = 0; j <= nb; j++) for (let i = 0; i <= na; i++) {
        const a = i / na, b = j / nb, [p, u, v] = P(a, b);
        pos.push(p.x, p.y, p.z); uv.push(u / dk.tw, v / dk.th); nrm.push(n.x, n.y, n.z); sol.push(solma(a, b));
      }
      for (let j = 0; j < nb; j++) for (let i = 0; i < na; i++) {
        const k = bas + j * (na + 1) + i; idx.push(k, k + 1, k + na + 1, k + 1, k + na + 2, k + na + 1);
      }
    };
    const kenar = (...m) => Math.min(1, Math.max(0, Math.min(...m) / .5));
    panel((a, b) => [new T.Vector3(-X_F + a * KALE_G, b * KALE_Y, -TABAN_D + b * (TABAN_D - CATI_D)), a * KALE_G, b * GERI_BOY],
      64, 24, N_GERI, (a, b) => kenar(a * KALE_G, (1 - a) * KALE_G, b * GERI_BOY * 3.2, (1 - b) * GERI_BOY));
    panel((a, b) => [new T.Vector3(-X_F + a * KALE_G, KALE_Y, -b * CATI_D), a * KALE_G, b * CATI_D],
      64, 9, new T.Vector3(0, 1, 0), (a, b) => kenar(a * KALE_G, (1 - a) * KALE_G, b * CATI_D, (1 - b) * CATI_D) * .8);
    [-1, 1].forEach(sx => panel((a, b) => { const y = b * KALE_Y, d = TABAN_D + (CATI_D - TABAN_D) * b, z = -a * d; return [new T.Vector3(sx * X_F, y, z), -z, y]; },
      18, 22, new T.Vector3(sx, 0, 0), (a, b) => kenar(a * 2, (1 - a) * 2, b * KALE_Y * 3.2, (1 - b) * KALE_Y)));
    const g = new T.BufferGeometry();
    g.setAttribute('position', new T.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
    g.computeVertexNormals();
    const mat = new T.MeshStandardMaterial({ color: '#ffffff', emissive: '#4a4e54', alphaMap: dk.t, transparent: true, depthWrite: false, side: T.DoubleSide, roughness: .8 });
    // uzakta doku küçülünce ipler ortalanıp silikleşmesin: saydamlığı güçlendir
    mat.onBeforeCompile = sh => { sh.fragmentShader = sh.fragmentShader.replace('#include <alphamap_fragment>', 'diffuseColor.a *= clamp( texture2D( alphaMap, vUv ).g * 2.4, 0., 1. );'); };
    mat.customProgramCacheKey = () => 'file-ip';
    const m = new T.Mesh(g, mat);
    m.userData = { taban: Float32Array.from(pos), normal: Float32Array.from(nrm), solma: Float32Array.from(sol) };
    m.frustumCulled = false; m.renderOrder = 1;
    return m;
  }
  // ── gerçek kale modeli: çerçeve GLB'den, file modelin ip ağından (her ip ekranda en az ~1 px kalınlıkta şerit) ──
  let KUTU = null;               // modelin file sınırları (çarpışma)
  function seritBoyut() {
    const u = ag.material.uniforms, pr = renderer.getPixelRatio();
    u.res.value.set(kap.clientWidth * pr, kap.clientHeight * pr); u.minPx.value = 1.15 * pr;
  }
  function ipFile(ham) {
    const dv = new DataView(ham);
    const mn = [0, 1, 2].map(i => dv.getFloat32(i * 4, true)), mx = [3, 4, 5].map(i => dv.getFloat32(i * 4, true));
    const nd = dv.getUint32(24, true), ne = dv.getUint32(28, true), q = new Uint16Array(ham, 32, nd * 3), e = new Uint16Array(ham, 32 + nd * 6, ne * 2);
    const P = new Float32Array(nd * 3);
    for (let i = 0; i < nd * 3; i++) P[i] = mn[i % 3] + q[i] / 65535 * (mx[i % 3] - mn[i % 3]);
    // sabit noktalar: çerçeveye/yere bağlı uç düğümler; esneme bunlardan uzaklaştıkça artar
    const der = new Uint8Array(nd); for (let i = 0; i < ne * 2; i++) der[e[i]]++;
    const sabit = []; for (let i = 0; i < nd; i++) if (der[i] < 3 && (P[i * 3 + 1] < .06 || P[i * 3 + 2] > mx[2] - .06)) sabit.push(i);
    const izgara = new Map(), H = .5, anah = (x, y, z) => x + ',' + y + ',' + z;
    sabit.forEach(i => { const k = anah(Math.floor(P[i * 3] / H), Math.floor(P[i * 3 + 1] / H), Math.floor(P[i * 3 + 2] / H)); (izgara.get(k) || izgara.set(k, []).get(k)).push(i); });
    const mask = new Float32Array(nd);
    for (let i = 0; i < nd; i++) {
      const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2], gx = Math.floor(x / H), gy = Math.floor(y / H), gz = Math.floor(z / H);
      let en = H * H;
      for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (let c = -1; c <= 1; c++) (izgara.get(anah(gx + a, gy + b, gz + c)) || []).forEach(j => {
        const d = (P[j * 3] - x) ** 2 + (P[j * 3 + 1] - y) ** 2 + (P[j * 3 + 2] - z) ** 2; if (d < en) en = d; });
      const t = Math.min(1, Math.sqrt(en) / H); mask[i] = t * t * (3 - 2 * t);
    }
    const A = new Float32Array(ne * 12), B = new Float32Array(ne * 12), U = new Float32Array(ne * 8), M = new Float32Array(ne * 8), ix = new Uint32Array(ne * 6);
    for (let k = 0; k < ne; k++) {
      const a = e[k * 2], b = e[k * 2 + 1];
      for (let v = 0; v < 4; v++) {
        const o = k * 4 + v;
        A.set([P[a * 3], P[a * 3 + 1], P[a * 3 + 2]], o * 3); B.set([P[b * 3], P[b * 3 + 1], P[b * 3 + 2]], o * 3);
        U.set([v & 1 ? 1 : -1, v >> 1], o * 2); M.set([mask[a], mask[b]], o * 2);
      }
      ix.set([k * 4, k * 4 + 2, k * 4 + 1, k * 4 + 1, k * 4 + 2, k * 4 + 3], k * 6);
    }
    const g = new T.BufferGeometry();
    g.setAttribute('position', new T.BufferAttribute(A, 3)); g.setAttribute('aB', new T.BufferAttribute(B, 3));
    g.setAttribute('aU', new T.BufferAttribute(U, 2)); g.setAttribute('aM', new T.BufferAttribute(M, 2)); g.setIndex(new T.BufferAttribute(ix, 1));
    const mat = new T.ShaderMaterial({
      uniforms: { res: { value: new T.Vector2(800, 1000) }, minPx: { value: 1.15 }, genis: { value: .0055 }, renk: { value: new T.Color('#eef1f4') },
        fC: { value: new T.Vector3() }, fN: { value: new T.Vector3(0, 0, -1) }, fD: { value: 0 }, fDalga: { value: 0 }, fT: { value: 0 } },
      vertexShader: [
        'attribute vec3 aB; attribute vec2 aU, aM;',
        'uniform vec2 res; uniform float minPx, genis, fD, fDalga, fT; uniform vec3 fC, fN;',
        'varying float vA; varying float vY;',
        'vec3 esne( vec3 p, float m ) { vec3 d = p - fC; float r2 = dot( d, d ), r = sqrt( r2 );',
        '  float w = fD * exp( -r2 / .32 ) + fDalga * sin( r * 8.5 - fT * 15. ) * exp( -r * 1.1 ) * step( r, fT * 2.2 );',
        '  return p + fN * w * m; }',
        'void main() {',
        '  vec3 a = esne( position, aM.x ), b = esne( aB, aM.y );',
        '  mat4 pv = projectionMatrix * viewMatrix;',
        '  vec4 ca = pv * vec4( a, 1. ), cb = pv * vec4( b, 1. ), c = aU.y < .5 ? ca : cb;',
        '  vec2 dr = ( cb.xy / cb.w - ca.xy / ca.w ) * res; float L = length( dr ); dr = L > 1e-5 ? dr / L : vec2( 1., 0. );',
        '  float px = genis * projectionMatrix[1][1] * res.y * .5 / c.w, w = max( px, minPx );',
        '  vA = clamp( px / minPx, .5, 1. ); vY = ( aU.y < .5 ? a.y : b.y );',
        '  c.xy += vec2( -dr.y, dr.x ) * aU.x * w / res * c.w;',
        '  gl_Position = c; }'].join('\n'),
      fragmentShader: 'uniform vec3 renk; varying float vA; varying float vY; void main() { gl_FragColor = vec4( renk * ( .8 + .08 * vY ), .92 * vA ); }',
      transparent: true, depthWrite: false });
    const m = new T.Mesh(g, mat); m.frustumCulled = false; m.renderOrder = 1;
    m.userData = { serit: true };
    // çarpışma: arka yüzeyin derinliği (x,y) ve çatının yüksekliği (x,z) ızgaraları, filenin kendi düğümlerinden
    const H2 = .2, izg = (ad, f, ilk) => {
      const nx = Math.ceil(7.6 / H2), ny = Math.ceil(2.8 / H2), dz = Math.ceil(2.6 / H2);
      const n2 = ad === 'arka' ? ny : dz, A = new Float32Array(nx * n2).fill(NaN);
      for (let i = 0; i < nd; i++) {
        const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2];
        if (ad === 'cati' && y < 1.9) continue;
        const a = Math.floor((x + 3.8) / H2), b = Math.floor((ad === 'arka' ? y : -z) / H2); if (a < 0 || a >= nx || b < 0 || b >= n2) continue;
        const k = b * nx + a, v = ad === 'arka' ? z : y; A[k] = isNaN(A[k]) ? v : f(A[k], v);
      }
      for (let tur = 0; tur < 40; tur++) { let bos = 0;
        for (let b = 0; b < n2; b++) for (let a = 0; a < nx; a++) { const k = b * nx + a; if (!isNaN(A[k])) continue; bos++;
          let t = 0, c = 0; [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([u, v]) => { const aa = a + u, bb = b + v; if (aa >= 0 && aa < nx && bb >= 0 && bb < n2 && !isNaN(A[bb * nx + aa])) { t += A[bb * nx + aa]; c++; } });
          if (c) A[k] = t / c; }
        if (!bos) break; }
      return (x, q) => { const a = Math.min(nx - 1, Math.max(0, Math.floor((x + 3.8) / H2))), b = Math.min(n2 - 1, Math.max(0, Math.floor(q / H2))), v = A[b * nx + a]; return isNaN(v) ? ilk : v; };
    };
    const arka = izg('arka', Math.min, mn[2]), cati = izg('cati', Math.max, mx[1]);
    KUTU = { x: Math.min(-mn[0], mx[0]) - .06, z: mn[2], arka: (x, y) => arka(x, y), cati: (x, z) => cati(x, -z) };
    return m;
  }
  async function kaleModelYukle(url, agUrl, eski, don) {
    if (!url || !agUrl || !T.GLTFLoader) return;
    let ag64;
    try { const c = await fetch(agUrl); if (!c.ok) throw new Error(c.status); ag64 = await c.arrayBuffer(); }
    catch (e) { console.warn('file ağı yüklenemedi', e); return; }
    new T.GLTFLoader().load(url, gltf => {
      const direk = malz('#f6f8fa', { roughness: .32 }), metal = malz('#9aa2ac', { roughness: .35, metalness: .7 }), ip = malz('#eef1f4', { roughness: .9 });
      gltf.scene.traverse(o => {
        if (!o.isMesh) return;
        o.castShadow = true;
        if (/Cylinder002|Line002/.test(o.name)) o.visible = false;      // ortadaki arka destek: kale ağzını ikiye bölüyor gibi duruyor
        o.material = /Rectangle|Bar/.test(o.name) ? direk : /Line/.test(o.name) ? ip : metal;
      });
      let kok = gltf.scene;
      if (don) {     // model ekseni → sahne: ağız +z'ye, direkler z=0'da, kale ortası x=0'da
        const ic = new T.Group(), olc = new T.Group(); kok = new T.Group();
        gltf.scene.position.set(-don.xf, 0, -don.zc); ic.add(gltf.scene); olc.add(ic); olc.scale.set(don.sw, don.sh, don.sw); kok.add(olc); kok.rotation.y = -Math.PI / 2;
      }
      const yeni = ipFile(ag64);
      scene.remove(eski); scene.add(kok); fileSifirla(); ag = yeni; scene.add(ag); seritBoyut();
      if (isik.fileIsik) isik.fileIsik.forEach((f, i) => { f.position.z = KUTU.arka(BOLGE_X[i], 1.2) + .06; });
    }, undefined, e => console.warn('kale modeli yüklenemedi', e));
  }

  // file esnemesi: top içerideyken çukur topun gömüldüğü kadar; bırakınca sönümlü salınım + yayılan hafif dalga
  const FILE = { aktif: false, temas: false, c: new T.Vector3(), n: new T.Vector3(0, 0, -1), d: 0, hiz: 0, t0: 0 };
  function fileSifirla() {
    Object.assign(FILE, { aktif: false, temas: false, d: 0, hiz: 0 });
    if (!ag) return;
    if (ag.userData.serit) { const u = ag.material.uniforms; u.fD.value = 0; u.fDalga.value = 0; return; }
    ag.geometry.attributes.position.array.set(ag.userData.taban); ag.geometry.attributes.position.needsUpdate = true;
  }
  function fileGuncelle(dt) {
    if (!FILE.aktif || !ag) return;
    if (!FILE.temas) {
      const w = 2 * Math.PI * 2.3, z = .2;
      FILE.hiz += (-w * w * FILE.d - 2 * z * w * FILE.hiz) * dt; FILE.d += FILE.hiz * dt;
    }
    const t = zaman - FILE.t0;
    if (!FILE.temas && t > 3) return fileSifirla();
    if (ag.userData.serit) {
      const u = ag.material.uniforms; u.fC.value.copy(FILE.c); u.fN.value.copy(FILE.n); u.fD.value = FILE.d; u.fDalga.value = .022 * Math.exp(-t * 1.5); u.fT.value = t;
      return;
    }
    const pos = ag.geometry.attributes.position, b = ag.userData.taban, n = ag.userData.normal, so = ag.userData.solma, c = FILE.c;
    const dalgaG = .022 * Math.exp(-t * 1.5);
    for (let i = 0; i < pos.count; i++) {
      const k = i * 3, dx = b[k] - c.x, dy = b[k + 1] - c.y, dz = b[k + 2] - c.z, r2 = dx * dx + dy * dy + dz * dz, r = Math.sqrt(r2);
      const w = (FILE.d * Math.exp(-r2 / (2 * .4 * .4)) + dalgaG * Math.sin(r * 8.5 - t * 15) * Math.exp(-r * 1.1) * (r < t * 2.2 ? 1 : 0)) * so[i];
      pos.array[k] = b[k] + n[k] * w; pos.array[k + 1] = b[k + 1] + n[k + 1] * w; pos.array[k + 2] = b[k + 2] + n[k + 2] * w;
    }
    pos.needsUpdate = true;
  }

  // ── top fiziği: yerçekimi, hava direnci, dönüş, esnek file, çimde sekme ve yuvarlanma ──
  const R_TOP = .11, YER = new T.Vector3(0, -9.81, 0), SURT = .0133;
  const FIZ = { aktif: false, v: new T.Vector3(), w: new T.Vector3() };
  const _a = new T.Vector3(), _t = new T.Vector3(), _q = new T.Quaternion(), _ex = new T.Vector3();
  const N_ARKA = new T.Vector3(0, 0, -1), N_UST = new T.Vector3(0, 1, 0), N_SAG = new T.Vector3(1, 0, 0), N_SOL = new T.Vector3(-1, 0, 0);
  function fileTemas(p) {     // en derin file temasını bul: [derinlik, dış normal, düzlemdeki nokta]
    let en = null;
    const dene = (d, n, nokta) => { if (d > 0 && (!en || d > en[0])) en = [d, n, nokta]; };
    if (KUTU) {
      if (p.z > KUTU.z - .4 && p.z < 0 && Math.abs(p.x) < KUTU.x + .4) {
        if (Math.abs(p.x) < KUTU.x) {
          const zb = KUTU.arka(p.x, p.y), yt = KUTU.cati(p.x, p.z);
          dene(zb + R_TOP - p.z, N_ARKA, new T.Vector3(p.x, p.y, zb));
          if (p.y > yt - .6) dene(p.y - yt + R_TOP, N_UST, new T.Vector3(p.x, yt, p.z));
        }
        const sx = p.x < 0 ? -1 : 1; dene(sx * p.x - KUTU.x + R_TOP, sx > 0 ? N_SAG : N_SOL, new T.Vector3(sx * KUTU.x, p.y, p.z));
      }
      return en;
    }
    if (Math.abs(p.x) < X_F && p.y < KALE_Y + .05) {
      const d = _ex.copy(p).sub(new T.Vector3(p.x, 0, -TABAN_D)).dot(N_GERI) + R_TOP;
      dene(d, N_GERI, p.clone().addScaledVector(N_GERI, R_TOP - d));
    }
    if (Math.abs(p.x) < X_F && p.z < 0 && p.z > -CATI_D && p.y > KALE_Y - R_TOP && p.y < KALE_Y + R_TOP) dene(p.y - KALE_Y + R_TOP, new T.Vector3(0, 1, 0), new T.Vector3(p.x, KALE_Y, p.z));
    const derin = TABAN_D + (CATI_D - TABAN_D) * Math.min(1, Math.max(0, p.y / KALE_Y));
    if (p.z < 0 && p.z > -derin && p.y < KALE_Y && Math.abs(p.x) < X_F + R_TOP) {
      const sx = Math.sign(p.x) || 1; dene(sx * p.x - X_F + R_TOP, new T.Vector3(sx, 0, 0), new T.Vector3(sx * X_F, p.y, p.z));
    }
    return en;
  }
  function fizikAdim(dt) {
    if (!FIZ.aktif) return;
    const n = Math.max(1, Math.ceil(dt * 240)), h = dt / n, p = top.position, v = FIZ.v;
    for (let s = 0; s < n; s++) {
      _a.copy(YER).addScaledVector(v, -SURT * v.length());
      const tm = fileTemas(p);
      if (tm) {
        const [d, nn, nokta] = tm, vn = v.dot(nn);
        _a.addScaledVector(nn, -1000 * d - (vn > 0 ? 45 : 80) * vn);
        _t.copy(v).addScaledVector(nn, -vn); _a.addScaledVector(_t, -4);
        if (!FILE.aktif) { FILE.aktif = true; FILE.t0 = zaman; }
        FILE.temas = true; FILE.c.copy(nokta); FILE.n.copy(nn); FILE.d = d; FILE.hiz = vn;
        FIZ.w.multiplyScalar(Math.exp(-6 * h));
      } else FILE.temas = false;
      v.addScaledVector(_a, h); p.addScaledVector(v, h);
      if (p.y < R_TOP) {
        p.y = R_TOP;
        if (v.y < 0) {
          const vn = -v.y; v.y = vn > .3 ? vn * .58 : 0;
          const ys = Math.hypot(v.x, v.z);
          if (ys > 0) { const k = Math.max(0, 1 - .22 * 1.58 * vn / ys); v.x *= k; v.z *= k; }
          FIZ.w.set(v.z / R_TOP, FIZ.w.y * .6, -v.x / R_TOP);
        }
      }
      if (p.y <= R_TOP + 1e-4 && v.y === 0) {
        const ys = Math.hypot(v.x, v.z);
        if (ys > 0) { const k = Math.max(0, ys - (.9 + .25 * ys) * h) / ys; v.x *= k; v.z *= k; }
        FIZ.w.set(v.z / R_TOP, 0, -v.x / R_TOP);
      }
      const wl = FIZ.w.length();
      if (wl > 1e-4) { _q.setFromAxisAngle(_ex.copy(FIZ.w).divideScalar(wl), wl * h); top.quaternion.premultiply(_q); }
    }
  }
  // istenen noktaya istenen sürede varan ilk hız (direnç dahil, birkaç düzeltme turu)
  function atisHizi(bas, hedef, T_) {
    const v = hedef.clone().sub(bas).divideScalar(T_); v.y += .5 * 9.81 * T_;
    for (let k = 0; k < 5; k++) {
      const p = bas.clone(), u = v.clone(), h = 1 / 480;
      for (let t = 0; t < T_ - 1e-9; t += h) { u.addScaledVector(YER, h).addScaledVector(u, -SURT * u.length() * h); p.addScaledVector(u, h); }
      v.addScaledVector(hedef.clone().sub(p), 1 / T_);
    }
    return v;
  }

  // ── çim, tribün ve LED dokuları ──
  const LOGO = new Image(), logoBekleyen = [];
  LOGO.onload = () => logoBekleyen.forEach(f => f());
  const logoCiz = (x, cx, cy, gen) => { if (!LOGO.naturalWidth) return; const h = gen * LOGO.naturalHeight / LOGO.naturalWidth; x.drawImage(LOGO, cx - gen / 2, cy - h / 2, gen, h); };
  // çim: 60 x 40 m saha dokusu (biçim şeritleri, renk lekeleri, kale ağzı aşınması, boyalı çizgiler)
  // + yakında görünen ot yaprakları için ayrı, tekrarlanan ayrıntı dokusu
  function gurultu(boy, olcek, tohum) {
    const c = document.createElement('canvas'); c.width = c.height = boy; const x = c.getContext('2d');
    let s = tohum; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
    const k = document.createElement('canvas'); k.width = k.height = olcek; const kx = k.getContext('2d'), im = kx.createImageData(olcek, olcek);
    for (let i = 0; i < im.data.length; i += 4) { const v = r() * 255; im.data[i] = im.data[i + 1] = im.data[i + 2] = v; im.data[i + 3] = 255; }
    kx.putImageData(im, 0, 0); x.imageSmoothingEnabled = true; x.imageSmoothingQuality = 'high'; x.drawImage(k, 0, 0, boy, boy);
    return x.getImageData(0, 0, boy, boy).data;
  }
  function cimDokusu() {
    const N = 2048, c = document.createElement('canvas'); c.width = c.height = N; const x = c.getContext('2d');
    const W = 60, D = 40, px = v => (v + 30) / W * N, pz = v => (v + 10) / D * N, mx = N / W, mz = N / D;
    const n1 = gurultu(N, 24, 7), n2 = gurultu(N, 90, 13), n3 = gurultu(N, 300, 29);
    const im = x.createImageData(N, N), d = im.data;
    for (let j = 0; j < N; j++) {
      const z = j / N * D - 10, bant = Math.floor((z + 10) / 5.5) % 2, kenar = ((z + 10) % 5.5) / 5.5;
      const yumusak = Math.min(1, Math.min(kenar, 1 - kenar) * 40);
      const serit = bant ? 1.06 : .9 - (1 - yumusak) * .08;
      for (let i = 0; i < N; i++) {
        const k = (j * N + i) * 4, xx = i / N * W - 30;
        const leke = (n1[k] / 255 - .5) * .22 + (n2[k] / 255 - .5) * .14 + (n3[k] / 255 - .5) * .10;
        const sari = (n1[k + 0] / 255 - .5) * .5 + (n2[k] / 255 - .5) * .3;
        // kale ağzı ve penaltı noktası çevresi aşınması
        const ag = Math.exp(-((xx / 3.2) ** 2) - (((z - 1.4) / 1.6) ** 2)) * .9 + Math.exp(-((xx / .9) ** 2) - (((z - 11) / .9) ** 2)) * .55;
        const asin = Math.max(0, ag * (.55 + n2[k] / 255 * .9) - .25);
        let r = 34 + sari * 16, g = 82 + sari * 10, b = 30 - sari * 7;
        const p = serit * (1 + leke);
        r *= p; g *= p; b *= p;
        r += (128 - r) * asin * .55; g += (112 - g) * asin * .55; b += (70 - b) * asin * .55;
        d[k] = r; d[k + 1] = g; d[k + 2] = b; d[k + 3] = 255;
      }
    }
    x.putImageData(im, 0, 0);
    // boyalı çizgiler: kenarı yumuşak, otun içinden hafif görünür
    const cizgi = (pts, gen) => { x.beginPath(); pts.forEach((p, i) => i ? x.lineTo(px(p[0]), pz(p[1])) : x.moveTo(px(p[0]), pz(p[1]))); x.lineWidth = gen; x.stroke(); };
    const tum = gen => {
      cizgi([[-30, 0], [30, 0]], gen); cizgi([[-9.16, 0], [-9.16, 5.5], [9.16, 5.5], [9.16, 0]], gen); cizgi([[-20.16, 0], [-20.16, 16.5], [20.16, 16.5], [20.16, 0]], gen);
      x.beginPath(); x.ellipse(px(0), pz(11), mx * 9.15, mz * 9.15, 0, Math.asin(5.5 / 9.15) + .02, Math.PI - Math.asin(5.5 / 9.15) - .02); x.lineWidth = gen; x.stroke();
    };
    x.lineCap = 'butt'; x.strokeStyle = 'rgba(236,242,236,.30)'; tum(mx * .16); x.strokeStyle = 'rgba(240,245,240,.80)'; tum(mx * .115);
    const t = new T.CanvasTexture(c); t.anisotropy = 8; t.encoding = T.sRGBEncoding; return t;
  }
  // ot yaprakları: 512 px, sarmal (kenarlardan taşan yaprak karşı kenarda devam eder), ortalama ~0.5
  function otDokusu() {
    const N = 512, c = document.createElement('canvas'); c.width = c.height = N; const x = c.getContext('2d');
    let s = 101; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
    x.fillStyle = 'rgb(118,118,118)'; x.fillRect(0, 0, N, N);
    x.lineCap = 'round';
    for (let i = 0; i < 26000; i++) {
      const bx = r() * N, by = r() * N, boy = 5 + r() * 11, aci = -Math.PI / 2 + (r() - .5) * .9, v = 70 + r() * 120;
      const ex = bx + Math.cos(aci) * boy, ey = by + Math.sin(aci) * boy;
      x.strokeStyle = `rgb(${v},${v},${v})`; x.lineWidth = .8 + r() * 1.4;
      for (const ox of [-N, 0, N]) for (const oy of [-N, 0, N]) {
        if (bx + ox < -20 || bx + ox > N + 20 || by + oy < -20 || by + oy > N + 20) continue;
        x.beginPath(); x.moveTo(bx + ox, by + oy); x.lineTo(ex + ox, ey + oy); x.stroke();
      }
    }
    const t = new T.CanvasTexture(c); t.wrapS = t.wrapT = T.RepeatWrapping; t.anisotropy = 8; return t;
  }
  function cimMalzeme() {
    const m = new T.MeshStandardMaterial({ map: cimDokusu(), color: '#ffffff', roughness: .92 });
    const ot = otDokusu();
    m.onBeforeCompile = sh => {
      sh.uniforms.otDoku = { value: ot };
      sh.fragmentShader = 'uniform sampler2D otDoku;\n' + sh.fragmentShader.replace('#include <map_fragment>',
        '#include <map_fragment>\n' +
        'vec2 ou = vUv * vec2( 60., 40. ) / .55;\n' +
        'float o1 = texture2D( otDoku, ou ).r, o2 = texture2D( otDoku, ou * .37 + .21 ).r;\n' +
        'diffuseColor.rgb *= mix( 1., ( o1 * .65 + o2 * .35 ) / .46, .78 );');
    };
    m.customProgramCacheKey = () => 'cim-ot';
    return m;
  }
  // tribün düzlemi 40 x 18 m: alt duvar, alt kat seyirci + ortada CSC pankartı, LED kuşak, üst kat, çatı projektörleri
  function tribunDokusu() {
    const c = document.createElement('canvas'); c.width = 2048; c.height = 1024; const x = c.getContext('2d');
    const M = 2048 / 40, my = v => 1024 - (v + 1) / 18 * 1024;           // v: zeminden yükseklik (m), düzlem -1..17
    const tohum = (() => { let s = 11; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
    const g = x.createLinearGradient(0, 0, 0, 1024); g.addColorStop(0, '#020306'); g.addColorStop(.3, '#05070c'); g.addColorStop(1, '#0a0e14'); x.fillStyle = g; x.fillRect(0, 0, 2048, 1024);
    const kalabalik = (y0, y1, sira, isik) => {
      const o = document.createElement('canvas'); o.width = 2048; o.height = 1024; const ox = o.getContext('2d');
      const hy = (my(y0) - my(y1)) / sira;
      for (let r = 0; r < sira; r++) {
        const y = my(y1) + r * hy, ac = isik * (.55 + r / sira * .45);
        for (let i = 0; i < 2048 / 5.2; i++) {
          if (tohum() < .14) continue;
          const t2 = tohum(), l = 9 + tohum() * 20;
          ox.fillStyle = t2 < .1 ? `hsla(72,90%,${l + 18}%,${ac})` : t2 < .16 ? `hsla(45,90%,${l + 16}%,${ac})` : t2 < .22 ? `hsla(0,0%,${l + 30}%,${ac})` : `hsla(220,10%,${l}%,${ac})`;
          ox.fillRect(i * 5.2 + tohum() * 2, y + tohum() * hy * .3, 3.6, hy * .62);
        }
        ox.fillStyle = `rgba(0,0,0,${.35})`; ox.fillRect(0, y + hy * .82, 2048, hy * .18);
      }
      x.filter = 'blur(1.2px)'; x.drawImage(o, 0, 0); x.filter = 'none';
    };
    // alt duvar
    x.fillStyle = '#07090d'; x.fillRect(0, my(1.4), 2048, my(-1) - my(1.4));
    kalabalik(1.6, 6.6, 20, .95);
    // LED kuşak
    x.fillStyle = '#030405'; x.fillRect(0, my(7.3), 2048, my(6.6) - my(7.3));
    const lg = x.createLinearGradient(0, 0, 2048, 0); ['#00e676', '#00b0ff', '#ffd600', '#00e676'].forEach((r, i) => lg.addColorStop(i / 3, r));
    x.globalAlpha = .85; x.fillStyle = lg; x.fillRect(0, my(7.22), 2048, 3); x.fillRect(0, my(6.68), 2048, 2); x.globalAlpha = 1;
    x.font = '800 22px "Barlow Condensed", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
    for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? 'rgba(255,214,0,.9)' : 'rgba(0,230,118,.9)'; x.fillText(i % 2 ? 'PENALTI DÜELLOSU' : 'CITYSOCCER.CLUB', 128 + i * 256, my(6.95)); }
    kalabalik(7.5, 12.2, 18, .62);
    // çatı ve projektör sırası
    x.fillStyle = '#020304'; x.fillRect(0, my(13.4), 2048, my(12.3) - my(13.4));
    for (let i = 0; i < 46; i++) {
      const lx = 20 + i * 44.5, ly = my(12.75);
      const rg = x.createRadialGradient(lx, ly, 0, lx, ly, 26); rg.addColorStop(0, 'rgba(255,255,255,.95)'); rg.addColorStop(.18, 'rgba(230,240,255,.55)'); rg.addColorStop(1, 'rgba(200,220,255,0)');
      x.fillStyle = rg; x.fillRect(lx - 26, ly - 26, 52, 52);
    }
    // ortada asılı CSC pankartı
    const pw = 4.2 * M, ph = 1.8 * M, pcx = 1024, pcy = my(8.45);
    x.save(); x.translate(pcx, pcy);
    const pg = x.createLinearGradient(-pw / 2, 0, pw / 2, 0); pg.addColorStop(0, '#0b0d10'); pg.addColorStop(.5, '#16191e'); pg.addColorStop(1, '#0b0d10');
    x.fillStyle = pg; x.fillRect(-pw / 2, -ph / 2, pw, ph);
    logoCiz(x, 0, 0, ph * 1.18);
    for (let i = 0; i < 9; i++) { x.fillStyle = `rgba(255,255,255,${i % 2 ? .035 : 0})`; x.fillRect(-pw / 2 + i * pw / 9, -ph / 2, pw / 9, ph); }
    x.restore();
    // projektör buğusu
    [[-7.4, 12.9], [7.4, 12.9]].forEach(([vx, vy]) => { const lx = 1024 + vx * M, ly = my(vy), rg = x.createRadialGradient(lx, ly, 0, lx, ly, 330); rg.addColorStop(0, 'rgba(225,235,255,.30)'); rg.addColorStop(1, 'rgba(225,235,255,0)'); x.fillStyle = rg; x.fillRect(lx - 330, ly - 330, 660, 660); });
    return c;
  }
  // reklam panosu: 36 m LED şerit, kayarak akar
  function ledDokusu() {
    const c = document.createElement('canvas'); c.width = 4096; c.height = 112; const x = c.getContext('2d');
    const seg = 4096 / 6;
    for (let i = 0; i < 6; i++) {
      const gx = i * seg, tur = i % 3;
      const g = x.createLinearGradient(gx, 0, gx + seg, 0);
      if (tur === 0) { g.addColorStop(0, '#05140c'); g.addColorStop(1, '#0a2a18'); }
      else if (tur === 1) { g.addColorStop(0, '#181202'); g.addColorStop(1, '#2a1f02'); }
      else { g.addColorStop(0, '#03101a'); g.addColorStop(1, '#06223a'); }
      x.fillStyle = g; x.fillRect(gx, 0, seg, 112);
      x.textAlign = 'left'; x.textBaseline = 'middle';
      if (tur === 0) { logoCiz(x, gx + 80, 56, 118); x.font = '900 62px "Barlow Condensed", sans-serif'; x.fillStyle = '#ffffff'; x.fillText('CITYSOCCER.CLUB', gx + 156, 60); }
      else if (tur === 1) { x.font = '900 64px "Barlow Condensed", sans-serif'; x.fillStyle = '#ffd600'; x.fillText('PENALTI DÜELLOSU', gx + 70, 60); x.fillStyle = 'rgba(255,214,0,.5)'; x.fillRect(gx + 30, 30, 14, 52); }
      else { x.font = '900 64px "Barlow Condensed", sans-serif'; x.fillStyle = '#00e676'; x.fillText('CSC26', gx + 70, 60); x.font = '700 38px "Barlow Condensed", sans-serif'; x.fillStyle = '#9fe9ff'; x.fillText('PENALTI USTASI YARIŞI', gx + 270, 62); }
    }
    // LED piksel ızgarası
    x.fillStyle = 'rgba(0,0,0,.28)'; for (let i = 0; i < 4096; i += 4) x.fillRect(i, 0, 1, 112); for (let j = 0; j < 112; j += 4) x.fillRect(0, j, 4096, 1);
    return c;
  }
  function parilti(ic, dis, boy = 128) {
    const c = document.createElement('canvas'); c.width = c.height = boy; const x = c.getContext('2d');
    const g = x.createRadialGradient(boy / 2, boy / 2, 0, boy / 2, boy / 2, boy / 2); g.addColorStop(0, ic); g.addColorStop(.25, dis); g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.fillRect(0, 0, boy, boy); const t = new T.CanvasTexture(c); return t;
  }
  const katkiMalz = (map, renk = '#ffffff', op = 1) => new T.MeshBasicMaterial({ map, color: renk, transparent: true, opacity: op, blending: T.AdditiveBlending, depthWrite: false });

  // ── seçim ışıldağı: bölgeye inen ışık huzmesi + fileye vuran parıltı ──
  const isik = { hedef: null, renk: new T.Color('#00e676'), guc: 0, bolgeGuc: [0, 0, 0], parca: null };
  function isildakKur() {
    const vs = 'varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = uv.y; vec4 mv = modelViewMatrix * vec4(position, 1.); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }';
    const fs = 'uniform vec3 renk; uniform float guc; uniform float zaman; varying float vY; varying vec3 vN; varying vec3 vV;' +
      'void main(){ float k = pow(abs(dot(vN, vV)), 1.5); float b = smoothstep(0., .12, vY) * (.25 + .75 * (1. - vY));' +
      ' float toz = .82 + .18 * sin(vY * 38. - zaman * 2.6) * sin(vY * 13. + zaman * 1.3);' +
      ' gl_FragColor = vec4(renk * guc * k * b * toz * .85, 1.); }';
    const huzme = new T.Mesh(new T.CylinderGeometry(.06, 1.32, 1, 40, 1, true), new T.ShaderMaterial({
      uniforms: { renk: { value: isik.renk }, guc: { value: 0 }, zaman: { value: 0 } }, vertexShader: vs, fragmentShader: fs,
      transparent: true, blending: T.AdditiveBlending, depthWrite: false, side: T.DoubleSide }));
    huzme.frustumCulled = false; scene.add(huzme);
    const yuvarlak = parilti('rgba(255,255,255,1)', 'rgba(255,255,255,.55)');
    const fileIsik = [0, 1, 2].map(i => { const m = new T.Mesh(new T.PlaneGeometry(2.6, 2.6), katkiMalz(yuvarlak, '#ffffff', 0)); m.position.set(BOLGE_X[i], 1.22, -.55); scene.add(m); return m; });
    isik.fileIsik = fileIsik;
    const zemin = new T.Mesh(new T.PlaneGeometry(2.8, 1.5), katkiMalz(yuvarlak, '#ffffff', 0)); zemin.rotation.x = -Math.PI / 2; zemin.position.set(0, .012, -.2); scene.add(zemin);
    const spot = new T.SpotLight('#ffffff', 0, 22, .3, .75, 1.2); spot.position.set(0, 7.5, 5); scene.add(spot); scene.add(spot.target);
    isik.parca = { huzme, fileIsik, zemin, spot };
  }
  function isikla(bolge, renk) {
    isik.hedef = bolge; if (renk) isik.renk.set(renk);
    if (bolge == null) return;
    const { huzme, zemin, spot } = isik.parca, xz = BOLGE_X[bolge];
    const S = new T.Vector3(xz * .45, 7.6, 5.2), E = new T.Vector3(xz, 1.15, -.35), d = new T.Vector3().subVectors(S, E);
    huzme.scale.set(1, d.length(), 1); huzme.position.copy(E).addScaledVector(d, .5); huzme.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), d.normalize());
    zemin.position.x = xz; spot.position.copy(S); spot.target.position.copy(E); spot.color.copy(isik.renk);
  }
  function isikGuncelle(dt) {
    const p = isik.parca; if (!p) return;
    const yaklas = (a, b, h) => a + (b - a) * Math.min(1, dt * h);
    isik.guc = yaklas(isik.guc, isik.hedef == null ? 0 : 1, isik.hedef == null ? 2.5 : 5);
    const titre = .92 + .08 * Math.sin(zaman * 23) * Math.sin(zaman * 7.3);
    p.huzme.material.uniforms.guc.value = isik.guc * titre; p.huzme.material.uniforms.zaman.value = zaman; p.huzme.visible = isik.guc > .01;
    p.spot.intensity = isik.guc * 3.2 * titre;
    p.zemin.material.opacity = isik.guc * .8; p.zemin.material.color.copy(isik.renk);
    p.fileIsik.forEach((m, i) => {
      const bekle = isik.hedef == null && secimBekliyor ? .08 + .16 * Math.max(0, Math.sin(zaman * 2.4 - i * 1.25)) : 0;
      const hedef = isik.hedef === i ? .78 * titre : bekle;
      isik.bolgeGuc[i] = yaklas(isik.bolgeGuc[i], hedef, 7);
      m.material.opacity = isik.bolgeGuc[i]; m.material.color.copy(isik.hedef === i ? isik.renk : BEYAZ_R);
    });
  }
  const BEYAZ_R = new T.Color('#e8f4ff');
  let secimBekliyor = false;

  // ── stadyum ışıltısı: kayan LED, projektörler, flaşlar ──
  const atmosfer = { led: null, flas: null };
  function atmosferGuncelle(dt) {
    if (atmosfer.led) atmosfer.led.offset.x = (atmosfer.led.offset.x + dt * .018) % 1;
    const f = atmosfer.flas; if (!f) return;
    const r = f.geometry.attributes.color;
    for (let i = 0; i < r.count; i++) { let v = r.getX(i) * Math.pow(.02, dt); if (Math.random() < dt * .35) v = 1; r.setXYZ(i, v, v, v); }
    r.needsUpdate = true;
  }

  // ── kurulum ──
  function kur(kapsayici) {
    kap = kapsayici;
    renderer = new T.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.outputEncoding = T.sRGBEncoding;
    renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = .95;
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = T.PCFSoftShadowMap;
    kap.prepend(renderer.domElement);
    scene = new T.Scene();
    scene.background = new T.Color('#06080c');
    scene.fog = new T.Fog('#06080c', 26, 60);
    camera = new T.PerspectiveCamera(30, 1, .1, 200);
    camera.position.set(0, .9, 13.4);

    scene.add(new T.HemisphereLight(0xdfe9ff, 0x1d3a22, .62));
    const gun = new T.DirectionalLight(0xffffff, 1.35);
    gun.position.set(-6, 14, 12); gun.castShadow = true;
    gun.shadow.mapSize.set(1024, 1024); Object.assign(gun.shadow.camera, { left: -9, right: 9, top: 10, bottom: -8, near: 1, far: 50 }); gun.shadow.bias = -.0004;
    scene.add(gun);
    const arka = new T.DirectionalLight(0x9fc4ff, .35); arka.position.set(5, 6, -10); scene.add(arka);

    const cim = new T.Mesh(new T.PlaneGeometry(60, 40), cimMalzeme());
    cim.rotation.x = -Math.PI / 2; cim.position.set(0, 0, 10); cim.receiveShadow = true; scene.add(cim);
    const nokta = new T.Mesh(new T.CircleGeometry(.055, 28), new T.MeshStandardMaterial({ color: '#eef2f4', roughness: 1 }));
    nokta.rotation.x = -Math.PI / 2; nokta.position.set(0, .003, 11); nokta.receiveShadow = true; scene.add(nokta);
    const cimGeri = new T.Mesh(new T.PlaneGeometry(70, 9), new T.MeshStandardMaterial({ color: '#1f4f22', roughness: 1 }));
    cimGeri.rotation.x = -Math.PI / 2; cimGeri.position.set(0, -.01, -9.5); scene.add(cimGeri);
    // tribün
    const tc = tribunDokusu(), tt = new T.CanvasTexture(tc); tt.encoding = T.sRGBEncoding; tt.anisotropy = 4;
    const tribun = new T.Mesh(new T.PlaneGeometry(40, 18), new T.MeshBasicMaterial({ map: tt }));
    tribun.position.set(0, 8, -14); scene.add(tribun);
    // LED pano + çime düşen ışığı
    const lc = ledDokusu(), lt = new T.CanvasTexture(lc); lt.encoding = T.sRGBEncoding; lt.wrapS = T.RepeatWrapping; lt.anisotropy = 4;
    const reklam = new T.Mesh(new T.PlaneGeometry(36, .9), new T.MeshBasicMaterial({ map: lt, color: '#d6d6d6' }));
    reklam.position.set(0, .45, -6.5); scene.add(reklam); atmosfer.led = lt;
    const yansima = new T.Mesh(new T.PlaneGeometry(36, 1.6), katkiMalz(parilti('rgba(140,255,200,.9)', 'rgba(90,200,255,.35)', 64), '#ffffff', .2));
    yansima.rotation.x = -Math.PI / 2; yansima.position.set(0, .01, -5.9); yansima.scale.set(1, 1, 1); scene.add(yansima);
    logoBekleyen.push(() => { const yeniT = tribunDokusu(); tc.getContext('2d').drawImage(yeniT, 0, 0); tt.needsUpdate = true;
      const yeniL = ledDokusu(); lc.getContext('2d').drawImage(yeniL, 0, 0); lt.needsUpdate = true; });
    if (document.fonts) document.fonts.load('900 60px "Barlow Condensed"').then(() => { tc.getContext('2d').drawImage(tribunDokusu(), 0, 0); tt.needsUpdate = true; lc.getContext('2d').drawImage(ledDokusu(), 0, 0); lt.needsUpdate = true; }, () => {});
    // köşe projektörleri: parlama + aşağı süzülen buğulu huzme
    const pr = parilti('rgba(255,255,255,1)', 'rgba(210,228,255,.5)');
    [[-7.3, 9.6], [7.3, 9.6]].forEach(([px, py]) => {
      const sp = new T.Sprite(new T.SpriteMaterial({ map: pr, color: '#ffffff', transparent: true, opacity: .95, blending: T.AdditiveBlending, depthWrite: false }));
      sp.position.set(px, py, -12.8); sp.scale.set(4.2, 4.2, 1); scene.add(sp);
      const cizgi = new T.Sprite(new T.SpriteMaterial({ map: pr, color: '#cfe0ff', transparent: true, opacity: .55, blending: T.AdditiveBlending, depthWrite: false }));
      cizgi.position.set(px, py, -12.7); cizgi.scale.set(11, .35, 1); scene.add(cizgi);
    });
    // seyirci flaşları
    const fn = 140, fp = new Float32Array(fn * 3), fc = new Float32Array(fn * 3);
    for (let i = 0; i < fn; i++) { fp.set([(Math.random() - .5) * 26, 1.8 + Math.random() * 10, -13.9], i * 3); }
    const fg = new T.BufferGeometry(); fg.setAttribute('position', new T.BufferAttribute(fp, 3)); fg.setAttribute('color', new T.BufferAttribute(fc, 3));
    atmosfer.flas = new T.Points(fg, new T.PointsMaterial({ size: .32, map: parilti('rgba(255,255,255,1)', 'rgba(255,255,255,.4)', 32), vertexColors: true, transparent: true, blending: T.AdditiveBlending, depthWrite: false }));
    scene.add(atmosfer.flas);

    // kale çerçevesi
    const beyaz = malz('#f6f8fa', { roughness: .35 }), gri = malz('#aab1ba', { roughness: .32, metalness: .75 });
    const kaleGrup = new T.Group(); scene.add(kaleGrup);
    const boru = (a, b, r, m) => {
      const d = new T.Vector3().subVectors(b, a), g = new T.CylinderGeometry(r, r, d.length(), r < .01 ? 8 : 20);
      const ms = new T.Mesh(g, m); ms.position.copy(a).addScaledVector(d, .5);
      ms.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), d.clone().normalize()); ms.castShadow = true; kaleGrup.add(ms);
    };
    const X = KALE_G / 2, P = .06;
    boru(new T.Vector3(-X - P, 0, 0), new T.Vector3(-X - P, KALE_Y + P, 0), P, beyaz);
    boru(new T.Vector3(X + P, 0, 0), new T.Vector3(X + P, KALE_Y + P, 0), P, beyaz);
    boru(new T.Vector3(-X - P * 2, KALE_Y + P, 0), new T.Vector3(X + P * 2, KALE_Y + P, 0), P, beyaz);
    [-X, X].forEach(x => {
      boru(new T.Vector3(x, KALE_Y, -.05), new T.Vector3(x, KALE_Y, -CATI_D), .007, gri);
      boru(new T.Vector3(x, KALE_Y, -CATI_D), new T.Vector3(x, 0, -TABAN_D), .007, gri);
      boru(new T.Vector3(x, 0, -.05), new T.Vector3(x, 0, -TABAN_D), .006, gri);
    });
    boru(new T.Vector3(-X, 0, -TABAN_D), new T.Vector3(X, 0, -TABAN_D), .006, gri);
    boru(new T.Vector3(-X, KALE_Y, -CATI_D), new T.Vector3(X, KALE_Y, -CATI_D), .006, gri);
    ag = fileYap(); kaleGrup.add(ag);
    kaleModelYukle(yol('kale.glb'), yol('file-ag.bin'), kaleGrup, null);

    kaleci = kaleciYap(); kaleci.position.set(0, 0, .35); scene.add(kaleci);
    durusUygula(kaleci, DURUS.hazir, DURUS.hazir, 1);
    glbYukle(yol('kaleci.glb'), { taban: yol('kaleci-taban.jpg'), a: yol('kit-a.png'), b: yol('kit-b.png'), uv: yol('kit-uv.png') });
    isildakKur();
    LOGO.src = yol('csc-logo.webp');
    top = topYap(); scene.add(top); topSifirla();

    new ResizeObserver(boyut).observe(kap); boyut();
    renderer.setAnimationLoop(dongu);
  }
  function boyut() {
    const w = kap.clientWidth, h = kap.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); if (ag && ag.userData.serit) seritBoyut(); renderer.domElement.style.width = '100%'; renderer.domElement.style.height = '100%';
    camera.aspect = w / h;
    const yarimY = Math.atan((X_KENAR + .4) / camera.position.z);
    camera.fov = 2 * Math.atan(Math.tan(yarimY) / camera.aspect) * 180 / Math.PI;
    camera.updateProjectionMatrix();
    const ust = Math.atan((KALE_Y + .1 - camera.position.y) / camera.position.z);
    const egim = ust - Math.atan(.5 * Math.tan(camera.fov * Math.PI / 360));
    camera.lookAt(0, camera.position.y + Math.tan(egim) * camera.position.z, 0);
    camera.updateMatrixWorld();
    bolgeYerlestir();
  }
  const X_KENAR = KALE_G / 2;
  function ekranda(v) { const p = v.clone().project(camera); return [(p.x + 1) / 2 * kap.clientWidth, (1 - p.y) / 2 * kap.clientHeight]; }
  function bolgeYerlestir() {
    const b = kap.querySelector('.pd-bolgeler'); if (!b) return;
    const [x1, y1] = ekranda(new T.Vector3(-X_KENAR, KALE_Y, 0)), [x2, y2] = ekranda(new T.Vector3(X_KENAR, 0, 0));
    Object.assign(b.style, { left: x1 + 'px', top: y1 + 'px', width: (x2 - x1) + 'px', height: (y2 - y1) + 'px' });
  }
  function topSifirla() { FIZ.aktif = false; FIZ.v.set(0, 0, 0); FIZ.w.set(0, 0, 0); top.position.set(0, .11, 11); top.rotation.set(0, 0, 0); }

  // ── animasyon altyapısı ──
  const yumusak = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  function oynat(sure, f) { return new Promise(res => animler.push({ t0: zaman, sure, f, res })); }
  let elle = false;
  function adim(dt) {
    zaman += dt; isikGuncelle(dt); atmosferGuncelle(dt); fizikAdim(dt);
    for (let i = animler.length - 1; i >= 0; i--) {
      const a = animler[i], t = Math.min(1, (zaman - a.t0) / a.sure); a.f(t);
      if (t >= 1) { animler.splice(i, 1); a.res(); }
    }
    fileGuncelle(dt);
  }
  async function ileri(sn) { elle = true; for (let t = 0; t < sn; t += 1 / 60) { adim(1 / 60); for (let k = 0; k < 8; k++) await null; } renderer.render(scene, camera); }
  function dongu() {
    const simdi = performance.now(), dt = Math.min(.05, (simdi - son) / 1000); son = simdi;
    if (!kap.offsetParent) return;
    if (elle) { renderer.render(scene, camera); return; }
    zaman += dt; isikGuncelle(dt); atmosferGuncelle(dt); fizikAdim(dt);
    for (let i = animler.length - 1; i >= 0; i--) {
      const a = animler[i], t = Math.min(1, (zaman - a.t0) / a.sure); a.f(t);
      if (t >= 1) { animler.splice(i, 1); a.res(); }
    }
    fileGuncelle(dt);
    renderer.render(scene, camera);
  }

  // ── atış ──
  function sifirla() {
    animler.length = 0; fileSifirla();
    konumX = 0; poz('hazir', 'hazir', 1); topSifirla();
    isik.hedef = null; secimBekliyor = true;
  }
  async function atis(bolge, dalis, gol) {
    isik.hedef = null; secimBekliyor = false;
    const hedefY = !gol && bolge !== 1 ? .9 + Math.random() * .35 : (bolge === 1 ? 1.15 + Math.random() * .6 : .7 + Math.random() * 1.1);
    const hedef = new T.Vector3(BOLGE_X[bolge] + (Math.random() - .5) * .5, hedefY, 0);
    const dalisAd = ['sol', 'orta', 'sag'][dalis];
    // kaleci hazırlık + atlayış (top ile aynı anda)
    oynat(.16, t => poz('hazir', 'yuk', yumusak(t))).then(() =>
      oynat(.4, t => poz('yuk', dalisAd, 1 - Math.pow(1 - t, 2.2)))).then(() =>
      dalisAd === 'orta' ? oynat(.5, t => poz('orta', 'hazir', yumusak(t)))
                         : oynat(.55, t => poz(dalisAd, dalisAd + 'D', t * t))).then(() => tepki(dalisAd, gol));
    await oynat(.12, () => {});
    const ucus = .46, bas = top.position.clone();
    const spin = () => FIZ.w.set(-(16 + Math.random() * 10), (Math.random() - .5) * 8, (Math.random() - .5) * 5);
    if (gol) {
      FIZ.v.copy(atisHizi(bas, hedef, ucus)); spin(); FIZ.aktif = true;
      await oynat(ucus + .42, () => {});
    } else {
      const temas = .82, el = new T.Vector3(BOLGE_X[dalis] * .92, bolge === 1 ? 1.45 : 1.05, .45);
      const varis = bolge === 1 ? el : hedef.clone().setZ(.45);
      FIZ.v.copy(atisHizi(bas, varis, ucus * temas)); spin(); FIZ.aktif = true;
      await oynat(ucus * temas, () => {});
      // eldivenden seken top: yana ve sahaya doğru, biraz yukarı
      const yon = bolge === 0 ? -1 : bolge === 2 ? 1 : (Math.random() < .5 ? -1 : 1), r = Math.random;
      FIZ.v.set(yon * (bolge === 1 ? 1.6 + r() * 1.6 : 3 + r() * 2.5), bolge === 1 ? 4.2 + r() * 1.6 : 1.4 + r() * 2.2, 3.2 + r() * 2.6);
      FIZ.w.set(FIZ.v.z / R_TOP * .4, (r() - .5) * 20, -FIZ.v.x / R_TOP * .4);
      await oynat(.55, () => {});
    }
  }
  return { kur, atis, sifirla, bolgeYerlestir, ileri, isikla: (b, r) => { if (b != null) secimBekliyor = false; isikla(b, r); }, kaleciTakim, serbest: () => { elle = false; } };
})();
