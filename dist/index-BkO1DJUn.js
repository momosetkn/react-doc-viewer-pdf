var Pv = Object.defineProperty;
var Rv = (r, t, e) => t in r ? Pv(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var ht = (r, t, e) => (Rv(r, typeof t != "symbol" ? t + "" : t, e), e), Zf = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var a = (r, t, e) => (Zf(r, t, "read from private field"), e ? e.call(r) : t.get(r)), m = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, w = (r, t, e, n) => (Zf(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e);
var Ve = (r, t, e, n) => ({
  set _(i) {
    w(r, t, i, e);
  },
  get _() {
    return a(r, t, n);
  }
}), A = (r, t, e) => (Zf(r, t, "access private method"), e);
import { jsx as j, jsxs as ws, Fragment as kv } from "react/jsx-runtime";
import ll, { useRef as Cn, useDebugValue as _m, createElement as Lv, useContext as $i, useEffect as Pt, createContext as Af, useReducer as Gg, forwardRef as w0, useImperativeHandle as A0, useCallback as cl, useMemo as dn, useLayoutEffect as Iv, useState as up } from "react";
const _f = ({
  documentURI: r,
  signal: t,
  fileLoaderComplete: e,
  readerTypeFunction: n,
  headers: i
}) => fetch(r, { signal: t, headers: i }).then(async (s) => {
  const o = await s.blob(), l = new FileReader();
  switch (l.addEventListener(
    "loadend",
    () => e(l)
  ), n) {
    case "arrayBuffer":
      l.readAsArrayBuffer(o);
      break;
    case "binaryString":
      l.readAsBinaryString(o);
      break;
    case "dataURL":
      l.readAsDataURL(o);
      break;
    case "text":
      l.readAsText(o);
      break;
  }
}).catch((s) => s), Fv = (r) => _f({ ...r, readerTypeFunction: "arrayBuffer" }), _0 = (r) => _f({ ...r, readerTypeFunction: "dataURL" }), E0 = (r) => _f({ ...r, readerTypeFunction: "text" }), $T = (r) => _f({ ...r, readerTypeFunction: "binaryString" }), HT = _0, Mv = "Document {{ currentFileNo }} of {{ allFilesCount }}", Dv = "No renderer for file type: {{{ fileType }}}", Nv = "Download file", Ov = "Your file is broken. Please check it on your machine.", Bv = "Recipients", $v = "Sender", Hv = "Loading...", Uv = "Page {{ currentPage }}/{{ allPagesCount }}", zv = {
  documentNavInfo: Mv,
  noRendererMessage: Dv,
  downloadButtonLabel: Nv,
  brokenFile: Ov,
  msgPluginRecipients: Bv,
  msgPluginSender: $v,
  pdfPluginLoading: Hv,
  pdfPluginPageNumber: Uv
}, jv = "Dokument {{ currentFileNo }} z {{ allFilesCount }}", Gv = "Brak funckji renderującej dla: {{{ fileType }}}", Vv = "Pobierz plik", Wv = "Twój plik jest uszkodzony. Sprawdź go na swoim komputerze.", qv = "Odbiorcy", Xv = "Nadawca", Yv = "Wczytywanie...", Kv = "Strona {{ currentPage }}/{{ allPagesCount }}", Zv = {
  documentNavInfo: jv,
  noRendererMessage: Gv,
  downloadButtonLabel: Vv,
  brokenFile: Wv,
  msgPluginRecipients: qv,
  msgPluginSender: Xv,
  pdfPluginLoading: Yv,
  pdfPluginPageNumber: Kv
}, Jv = "Documento {{ currentFileNo }} de {{ allFilesCount }}", Qv = "No hay procesador para el tipo de archivo: {{{ fileType }}}", tw = "Descargar archivo", ew = "Tu archivo está roto. Compruébalo en tu máquina.", nw = "Destinatarios", iw = "Remitente", sw = "Cargando...", rw = "Página {{ currentPage }}/{{ allPagesCount }}", ow = {
  documentNavInfo: Jv,
  noRendererMessage: Qv,
  downloadButtonLabel: tw,
  brokenFile: ew,
  msgPluginRecipients: nw,
  msgPluginSender: iw,
  pdfPluginLoading: sw,
  pdfPluginPageNumber: rw
}, aw = "Dokument {{ currentFileNo }} von {{ allFilesCount }}", lw = "Kein Renderer für Dateityp: {{{ fileType }}}", cw = "Datei herunterladen", hw = "Ihre Datei ist defekt. Bitte überprüfen Sie sie auf Ihrem Rechner.", dw = "Empfänger", uw = "Absender", fw = "Wird geladen...", pw = "Seite {{ currentPage }}/{{ allPagesCount }}", gw = {
  documentNavInfo: aw,
  noRendererMessage: lw,
  downloadButtonLabel: cw,
  brokenFile: hw,
  msgPluginRecipients: dw,
  msgPluginSender: uw,
  pdfPluginLoading: fw,
  pdfPluginPageNumber: pw
}, mw = "Documento {{ currentFileNo }} di {{ allFilesCount }}", yw = "Nessun renderer per il tipo di file: {{{ fileType }}}", bw = "Scarica file", vw = "Il tuo file è danneggiato. Controllalo sul tuo computer.", ww = "Destinatari", Aw = "Mittente", _w = "Caricamento in corso...", Ew = "Pagina {{ currentPage }}/{{ allPagesCount }}", Sw = {
  documentNavInfo: mw,
  noRendererMessage: yw,
  downloadButtonLabel: bw,
  brokenFile: vw,
  msgPluginRecipients: ww,
  msgPluginSender: Aw,
  pdfPluginLoading: _w,
  pdfPluginPageNumber: Ew
}, xw = "Documento {{ currentFileNo }} de {{ allFilesCount }}", Cw = "Nenhum renderizador para o tipo de arquivo: {{{ fileType }}}", Tw = "Baixar arquivo", Pw = "Seu arquivo está quebrado. Por favor, verifique-o em sua máquina.", Rw = "Destinatários", kw = "Remetente", Lw = "Carregando...", Iw = "Página {{ currentPage }}/{{ allPagesCount }}", Fw = {
  documentNavInfo: xw,
  noRendererMessage: Cw,
  downloadButtonLabel: Tw,
  brokenFile: Pw,
  msgPluginRecipients: Rw,
  msgPluginSender: kw,
  pdfPluginLoading: Lw,
  pdfPluginPageNumber: Iw
}, Mw = "Document {{ currentFileNo }} de {{ allFilesCount }}", Dw = "Aucun moteur de rendu pour le type de fichier : {{{ fileType }}}", Nw = "Télécharger le fichier", Ow = "Votre fichier est cassé. Veuillez le vérifier sur votre machine.", Bw = "Destinataires", $w = "Expéditeur", Hw = "Chargement...", Uw = "Page {{ currentPage }}/{{ allPagesCount }}", zw = {
  documentNavInfo: Mw,
  noRendererMessage: Dw,
  downloadButtonLabel: Nw,
  brokenFile: Ow,
  msgPluginRecipients: Bw,
  msgPluginSender: $w,
  pdfPluginLoading: Hw,
  pdfPluginPageNumber: Uw
}, jw = "مستند {{ currentFileNo }} من {{ allFilesCount }}", Gw = "{{{ fileType }}} : لا يمكننا عرض هذا النوع من الملفات", Vw = "تحميل الملف", Ww = "الملف تالف، يرجى التحقق منه على جهازك الخاص.", qw = "المستلمين", Xw = "المرسل", Yw = "تحميل ...", Kw = " {{ allPagesCount }} \\ {{ currentPage }} صفحة ", Zw = {
  documentNavInfo: jw,
  noRendererMessage: Gw,
  downloadButtonLabel: Vw,
  brokenFile: Ww,
  msgPluginRecipients: qw,
  msgPluginSender: Xw,
  pdfPluginLoading: Yw,
  pdfPluginPageNumber: Kw
}, Jw = "Dokument {{ currentFileNo }} od {{ allFilesCount }}", Qw = "Ne postoji pregledač za tip fajla: {{ fileType }}", tA = "Preuzimanje fajla", eA = "Vaš fajl nije dobar. Molimo Vas da probate da ga otvorite na vašem računaru.", nA = "Primaoci", iA = "Pošiljalac", sA = "Učitavanje...", rA = "Strana {{ currentPage }}/{{ allPagesCount }}", oA = {
  documentNavInfo: Jw,
  noRendererMessage: Qw,
  downloadButtonLabel: tA,
  brokenFile: eA,
  msgPluginRecipients: nA,
  msgPluginSender: iA,
  pdfPluginLoading: sA,
  pdfPluginPageNumber: rA
}, aA = "Документ {{ currentFileNo }} od {{ allFilesCount }}", lA = "Не постоји прегледач за тип фајла: {{ fileType }}", cA = "Преузимање фајла", hA = "Ваш фајл није добар. Молимо Вас да пробате да га отворите на вашем рачунару.", dA = "Примаоци", uA = "Пошиљалац", fA = "Учитавање...", pA = "Страна {{ currentPage }}/{{ allPagesCount }}", gA = {
  documentNavInfo: aA,
  noRendererMessage: lA,
  downloadButtonLabel: cA,
  brokenFile: hA,
  msgPluginRecipients: dA,
  msgPluginSender: uA,
  pdfPluginLoading: fA,
  pdfPluginPageNumber: pA
}, mA = "ファイル {{ currentFileNo }} / {{ allFilesCount }}", yA = "ファイルタイプに対応したレンダラーはありません: {{ fileType }}", bA = "ダウンロード", vA = "ファイルが壊れています。あなたのマシンでファイルを確認してください。", wA = "受信者", AA = "送信者", _A = "ローティング中...", EA = "ページ {{ currentPage }}/{{ allPagesCount }}", SA = {
  documentNavInfo: mA,
  noRendererMessage: yA,
  downloadButtonLabel: bA,
  brokenFile: vA,
  msgPluginRecipients: wA,
  msgPluginSender: AA,
  pdfPluginLoading: _A,
  pdfPluginPageNumber: EA
}, xA = "Документ {{ currentFileNo }} из {{ allFilesCount }}", CA = "Данный тип файла не поддерживается рендером: {{{ fileType }}}", TA = "Скачать файл", PA = "Ваш файл сломан. Пожалуйста, проверьте его на своём комьютере.", RA = "Получатели", kA = "Отправитель", LA = "Загрузка...", IA = "Страница {{ currentPage }}/{{ allPagesCount }}", FA = {
  documentNavInfo: xA,
  noRendererMessage: CA,
  downloadButtonLabel: TA,
  brokenFile: PA,
  msgPluginRecipients: RA,
  msgPluginSender: kA,
  pdfPluginLoading: LA,
  pdfPluginPageNumber: IA
}, MA = "Dokument {{ currentFileNo }} av {{ allFilesCount }}", DA = "Ingen renderare för filtypen: {{{ fileType }}}", NA = "Ladda ner", OA = "Filen är trasig. Var vänlig kontrollera den på din maskin.", BA = "Mottagare", $A = "Avsändare", HA = "Laddar...", UA = "Sida {{ currentPage }}/{{ allPagesCount }}", zA = {
  documentNavInfo: MA,
  noRendererMessage: DA,
  downloadButtonLabel: NA,
  brokenFile: OA,
  msgPluginRecipients: BA,
  msgPluginSender: $A,
  pdfPluginLoading: HA,
  pdfPluginPageNumber: UA
}, jA = "Belge {{ currentFileNo }} / {{ allFilesCount }}", GA = "Dosya türü için görüntüleyici bulunamadı: {{{ fileType }}}", VA = "Dosyayı indir", WA = "Dosyanız bozuk. Lütfen kendi cihazınızda kontrol edin.", qA = "Alıcılar", XA = "Gönderen", YA = "Yükleniyor...", KA = "Sayfa {{ currentPage }}/{{ allPagesCount }}", ZA = {
  documentNavInfo: jA,
  noRendererMessage: GA,
  downloadButtonLabel: VA,
  brokenFile: WA,
  msgPluginRecipients: qA,
  msgPluginSender: XA,
  pdfPluginLoading: YA,
  pdfPluginPageNumber: KA
}, Td = {
  en: zv,
  pl: Zv,
  es: ow,
  de: gw,
  it: Sw,
  pt: Fw,
  fr: zw,
  ar: Zw,
  sr: oA,
  sr_cyr: gA,
  ja: SA,
  ru: FA,
  se: zA,
  tr: ZA
}, UT = Object.keys(Td), Vg = "en";
function JA(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var S0 = { exports: {} }, Qt = S0.exports = {}, Rn, kn;
function fp() {
  throw new Error("setTimeout has not been defined");
}
function pp() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Rn = setTimeout : Rn = fp;
  } catch {
    Rn = fp;
  }
  try {
    typeof clearTimeout == "function" ? kn = clearTimeout : kn = pp;
  } catch {
    kn = pp;
  }
})();
function x0(r) {
  if (Rn === setTimeout)
    return setTimeout(r, 0);
  if ((Rn === fp || !Rn) && setTimeout)
    return Rn = setTimeout, setTimeout(r, 0);
  try {
    return Rn(r, 0);
  } catch {
    try {
      return Rn.call(null, r, 0);
    } catch {
      return Rn.call(this, r, 0);
    }
  }
}
function QA(r) {
  if (kn === clearTimeout)
    return clearTimeout(r);
  if ((kn === pp || !kn) && clearTimeout)
    return kn = clearTimeout, clearTimeout(r);
  try {
    return kn(r);
  } catch {
    try {
      return kn.call(null, r);
    } catch {
      return kn.call(this, r);
    }
  }
}
var Mi = [], ro = !1, Ls, Kh = -1;
function t1() {
  !ro || !Ls || (ro = !1, Ls.length ? Mi = Ls.concat(Mi) : Kh = -1, Mi.length && C0());
}
function C0() {
  if (!ro) {
    var r = x0(t1);
    ro = !0;
    for (var t = Mi.length; t; ) {
      for (Ls = Mi, Mi = []; ++Kh < t; )
        Ls && Ls[Kh].run();
      Kh = -1, t = Mi.length;
    }
    Ls = null, ro = !1, QA(r);
  }
}
Qt.nextTick = function(r) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var e = 1; e < arguments.length; e++)
      t[e - 1] = arguments[e];
  Mi.push(new T0(r, t)), Mi.length === 1 && !ro && x0(C0);
};
function T0(r, t) {
  this.fun = r, this.array = t;
}
T0.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Qt.title = "browser";
Qt.browser = !0;
Qt.env = {};
Qt.argv = [];
Qt.version = "";
Qt.versions = {};
function Hi() {
}
Qt.on = Hi;
Qt.addListener = Hi;
Qt.once = Hi;
Qt.off = Hi;
Qt.removeListener = Hi;
Qt.removeAllListeners = Hi;
Qt.emit = Hi;
Qt.prependListener = Hi;
Qt.prependOnceListener = Hi;
Qt.listeners = function(r) {
  return [];
};
Qt.binding = function(r) {
  throw new Error("process.binding is not supported");
};
Qt.cwd = function() {
  return "/";
};
Qt.chdir = function(r) {
  throw new Error("process.chdir is not supported");
};
Qt.umask = function() {
  return 0;
};
var e1 = S0.exports;
const dt = /* @__PURE__ */ JA(e1);
var ze = function() {
  return ze = Object.assign || function(t) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, ze.apply(this, arguments);
};
function Ta(r, t, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = t.length, s; n < i; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return r.concat(s || Array.prototype.slice.call(t));
}
function n1(r) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(e) {
    return t[e] === void 0 && (t[e] = r(e)), t[e];
  };
}
var i1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, s1 = /* @__PURE__ */ n1(
  function(r) {
    return i1.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
  /* Z+1 */
), r1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function P0(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function zT(r) {
  if (r.__esModule)
    return r;
  var t = r.default;
  if (typeof t == "function") {
    var e = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(r, n);
    Object.defineProperty(e, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    });
  }), e;
}
var Ut = "-ms-", sl = "-moz-", Tt = "-webkit-", R0 = "comm", Ef = "rule", Wg = "decl", o1 = "@import", k0 = "@keyframes", a1 = "@layer", L0 = Math.abs, qg = String.fromCharCode, gp = Object.assign;
function l1(r, t) {
  return pe(r, 0) ^ 45 ? (((t << 2 ^ pe(r, 0)) << 2 ^ pe(r, 1)) << 2 ^ pe(r, 2)) << 2 ^ pe(r, 3) : 0;
}
function I0(r) {
  return r.trim();
}
function ni(r, t) {
  return (r = t.exec(r)) ? r[0] : r;
}
function pt(r, t, e) {
  return r.replace(t, e);
}
function Zh(r, t, e) {
  return r.indexOf(t, e);
}
function pe(r, t) {
  return r.charCodeAt(t) | 0;
}
function Pa(r, t, e) {
  return r.slice(t, e);
}
function Kn(r) {
  return r.length;
}
function F0(r) {
  return r.length;
}
function za(r, t) {
  return t.push(r), r;
}
function c1(r, t) {
  return r.map(t).join("");
}
function Em(r, t) {
  return r.filter(function(e) {
    return !ni(e, t);
  });
}
var Sf = 1, Ra = 1, M0 = 0, un = 0, ee = 0, Da = "";
function xf(r, t, e, n, i, s, o, l) {
  return { value: r, root: t, parent: e, type: n, props: i, children: s, line: Sf, column: Ra, length: o, return: "", siblings: l };
}
function Ui(r, t) {
  return gp(xf("", null, null, "", null, null, 0, r.siblings), r, { length: -r.length }, t);
}
function Kr(r) {
  for (; r.root; )
    r = Ui(r.root, { children: [r] });
  za(r, r.siblings);
}
function h1() {
  return ee;
}
function d1() {
  return ee = un > 0 ? pe(Da, --un) : 0, Ra--, ee === 10 && (Ra = 1, Sf--), ee;
}
function Tn() {
  return ee = un < M0 ? pe(Da, un++) : 0, Ra++, ee === 10 && (Ra = 1, Sf++), ee;
}
function Hr() {
  return pe(Da, un);
}
function Jh() {
  return un;
}
function Cf(r, t) {
  return Pa(Da, r, t);
}
function mp(r) {
  switch (r) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function u1(r) {
  return Sf = Ra = 1, M0 = Kn(Da = r), un = 0, [];
}
function f1(r) {
  return Da = "", r;
}
function Jf(r) {
  return I0(Cf(un - 1, yp(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function p1(r) {
  for (; (ee = Hr()) && ee < 33; )
    Tn();
  return mp(r) > 2 || mp(ee) > 3 ? "" : " ";
}
function g1(r, t) {
  for (; --t && Tn() && !(ee < 48 || ee > 102 || ee > 57 && ee < 65 || ee > 70 && ee < 97); )
    ;
  return Cf(r, Jh() + (t < 6 && Hr() == 32 && Tn() == 32));
}
function yp(r) {
  for (; Tn(); )
    switch (ee) {
      case r:
        return un;
      case 34:
      case 39:
        r !== 34 && r !== 39 && yp(ee);
        break;
      case 40:
        r === 41 && yp(r);
        break;
      case 92:
        Tn();
        break;
    }
  return un;
}
function m1(r, t) {
  for (; Tn() && r + ee !== 57; )
    if (r + ee === 84 && Hr() === 47)
      break;
  return "/*" + Cf(t, un - 1) + "*" + qg(r === 47 ? r : Tn());
}
function y1(r) {
  for (; !mp(Hr()); )
    Tn();
  return Cf(r, un);
}
function b1(r) {
  return f1(Qh("", null, null, null, [""], r = u1(r), 0, [0], r));
}
function Qh(r, t, e, n, i, s, o, l, c) {
  for (var d = 0, h = 0, f = o, g = 0, y = 0, b = 0, _ = 1, x = 1, E = 1, P = 0, k = "", L = i, F = s, I = n, M = k; x; )
    switch (b = P, P = Tn()) {
      case 40:
        if (b != 108 && pe(M, f - 1) == 58) {
          Zh(M += pt(Jf(P), "&", "&\f"), "&\f", L0(d ? l[d - 1] : 0)) != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        M += Jf(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        M += p1(b);
        break;
      case 92:
        M += g1(Jh() - 1, 7);
        continue;
      case 47:
        switch (Hr()) {
          case 42:
          case 47:
            za(v1(m1(Tn(), Jh()), t, e, c), c);
            break;
          default:
            M += "/";
        }
        break;
      case 123 * _:
        l[d++] = Kn(M) * E;
      case 125 * _:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            x = 0;
          case 59 + h:
            E == -1 && (M = pt(M, /\f/g, "")), y > 0 && Kn(M) - f && za(y > 32 ? xm(M + ";", n, e, f - 1, c) : xm(pt(M, " ", "") + ";", n, e, f - 2, c), c);
            break;
          case 59:
            M += ";";
          default:
            if (za(I = Sm(M, t, e, d, h, i, l, k, L = [], F = [], f, s), s), P === 123)
              if (h === 0)
                Qh(M, t, I, I, L, s, f, l, F);
              else
                switch (g === 99 && pe(M, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Qh(r, I, I, n && za(Sm(r, I, I, 0, 0, i, l, k, i, L = [], f, F), F), i, F, f, l, n ? L : F);
                    break;
                  default:
                    Qh(M, I, I, I, [""], F, 0, l, F);
                }
        }
        d = h = y = 0, _ = E = 1, k = M = "", f = o;
        break;
      case 58:
        f = 1 + Kn(M), y = b;
      default:
        if (_ < 1) {
          if (P == 123)
            --_;
          else if (P == 125 && _++ == 0 && d1() == 125)
            continue;
        }
        switch (M += qg(P), P * _) {
          case 38:
            E = h > 0 ? 1 : (M += "\f", -1);
            break;
          case 44:
            l[d++] = (Kn(M) - 1) * E, E = 1;
            break;
          case 64:
            Hr() === 45 && (M += Jf(Tn())), g = Hr(), h = f = Kn(k = M += y1(Jh())), P++;
            break;
          case 45:
            b === 45 && Kn(M) == 2 && (_ = 0);
        }
    }
  return s;
}
function Sm(r, t, e, n, i, s, o, l, c, d, h, f) {
  for (var g = i - 1, y = i === 0 ? s : [""], b = F0(y), _ = 0, x = 0, E = 0; _ < n; ++_)
    for (var P = 0, k = Pa(r, g + 1, g = L0(x = o[_])), L = r; P < b; ++P)
      (L = I0(x > 0 ? y[P] + " " + k : pt(k, /&\f/g, y[P]))) && (c[E++] = L);
  return xf(r, t, e, i === 0 ? Ef : l, c, d, h, f);
}
function v1(r, t, e, n) {
  return xf(r, t, e, R0, qg(h1()), Pa(r, 2, -2), 0, n);
}
function xm(r, t, e, n, i) {
  return xf(r, t, e, Wg, Pa(r, 0, n), Pa(r, n + 1, -1), n, i);
}
function D0(r, t, e) {
  switch (l1(r, t)) {
    case 5103:
      return Tt + "print-" + r + r;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Tt + r + r;
    case 4789:
      return sl + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Tt + r + sl + r + Ut + r + r;
    case 5936:
      switch (pe(r, t + 11)) {
        case 114:
          return Tt + r + Ut + pt(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        case 108:
          return Tt + r + Ut + pt(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        case 45:
          return Tt + r + Ut + pt(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
    case 6828:
    case 4268:
    case 2903:
      return Tt + r + Ut + r + r;
    case 6165:
      return Tt + r + Ut + "flex-" + r + r;
    case 5187:
      return Tt + r + pt(r, /(\w+).+(:[^]+)/, Tt + "box-$1$2" + Ut + "flex-$1$2") + r;
    case 5443:
      return Tt + r + Ut + "flex-item-" + pt(r, /flex-|-self/g, "") + (ni(r, /flex-|baseline/) ? "" : Ut + "grid-row-" + pt(r, /flex-|-self/g, "")) + r;
    case 4675:
      return Tt + r + Ut + "flex-line-pack" + pt(r, /align-content|flex-|-self/g, "") + r;
    case 5548:
      return Tt + r + Ut + pt(r, "shrink", "negative") + r;
    case 5292:
      return Tt + r + Ut + pt(r, "basis", "preferred-size") + r;
    case 6060:
      return Tt + "box-" + pt(r, "-grow", "") + Tt + r + Ut + pt(r, "grow", "positive") + r;
    case 4554:
      return Tt + pt(r, /([^-])(transform)/g, "$1" + Tt + "$2") + r;
    case 6187:
      return pt(pt(pt(r, /(zoom-|grab)/, Tt + "$1"), /(image-set)/, Tt + "$1"), r, "") + r;
    case 5495:
    case 3959:
      return pt(r, /(image-set\([^]*)/, Tt + "$1$`$1");
    case 4968:
      return pt(pt(r, /(.+:)(flex-)?(.*)/, Tt + "box-pack:$3" + Ut + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Tt + r + r;
    case 4200:
      if (!ni(r, /flex-|baseline/))
        return Ut + "grid-column-align" + Pa(r, t) + r;
      break;
    case 2592:
    case 3360:
      return Ut + pt(r, "template-", "") + r;
    case 4384:
    case 3616:
      return e && e.some(function(n, i) {
        return t = i, ni(n.props, /grid-\w+-end/);
      }) ? ~Zh(r + (e = e[t].value), "span", 0) ? r : Ut + pt(r, "-start", "") + r + Ut + "grid-row-span:" + (~Zh(e, "span", 0) ? ni(e, /\d+/) : +ni(e, /\d+/) - +ni(r, /\d+/)) + ";" : Ut + pt(r, "-start", "") + r;
    case 4896:
    case 4128:
      return e && e.some(function(n) {
        return ni(n.props, /grid-\w+-start/);
      }) ? r : Ut + pt(pt(r, "-end", "-span"), "span ", "") + r;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return pt(r, /(.+)-inline(.+)/, Tt + "$1$2") + r;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Kn(r) - 1 - t > 6)
        switch (pe(r, t + 1)) {
          case 109:
            if (pe(r, t + 4) !== 45)
              break;
          case 102:
            return pt(r, /(.+:)(.+)-([^]+)/, "$1" + Tt + "$2-$3$1" + sl + (pe(r, t + 3) == 108 ? "$3" : "$2-$3")) + r;
          case 115:
            return ~Zh(r, "stretch", 0) ? D0(pt(r, "stretch", "fill-available"), t, e) + r : r;
        }
      break;
    case 5152:
    case 5920:
      return pt(r, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, s, o, l, c, d) {
        return Ut + i + ":" + s + d + (o ? Ut + i + "-span:" + (l ? c : +c - +s) + d : "") + r;
      });
    case 4949:
      if (pe(r, t + 6) === 121)
        return pt(r, ":", ":" + Tt) + r;
      break;
    case 6444:
      switch (pe(r, pe(r, 14) === 45 ? 18 : 11)) {
        case 120:
          return pt(r, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Tt + (pe(r, 14) === 45 ? "inline-" : "") + "box$3$1" + Tt + "$2$3$1" + Ut + "$2box$3") + r;
        case 100:
          return pt(r, ":", ":" + Ut) + r;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return pt(r, "scroll-", "scroll-snap-") + r;
  }
  return r;
}
function Pd(r, t) {
  for (var e = "", n = 0; n < r.length; n++)
    e += t(r[n], n, r, t) || "";
  return e;
}
function w1(r, t, e, n) {
  switch (r.type) {
    case a1:
      if (r.children.length)
        break;
    case o1:
    case Wg:
      return r.return = r.return || r.value;
    case R0:
      return "";
    case k0:
      return r.return = r.value + "{" + Pd(r.children, n) + "}";
    case Ef:
      if (!Kn(r.value = r.props.join(",")))
        return "";
  }
  return Kn(e = Pd(r.children, n)) ? r.return = r.value + "{" + e + "}" : "";
}
function A1(r) {
  var t = F0(r);
  return function(e, n, i, s) {
    for (var o = "", l = 0; l < t; l++)
      o += r[l](e, n, i, s) || "";
    return o;
  };
}
function _1(r) {
  return function(t) {
    t.root || (t = t.return) && r(t);
  };
}
function E1(r, t, e, n) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Wg:
        r.return = D0(r.value, r.length, e);
        return;
      case k0:
        return Pd([Ui(r, { value: pt(r.value, "@", "@" + Tt) })], n);
      case Ef:
        if (r.length)
          return c1(e = r.props, function(i) {
            switch (ni(i, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Kr(Ui(r, { props: [pt(i, /:(read-\w+)/, ":" + sl + "$1")] })), Kr(Ui(r, { props: [i] })), gp(r, { props: Em(e, n) });
                break;
              case "::placeholder":
                Kr(Ui(r, { props: [pt(i, /:(plac\w+)/, ":" + Tt + "input-$1")] })), Kr(Ui(r, { props: [pt(i, /:(plac\w+)/, ":" + sl + "$1")] })), Kr(Ui(r, { props: [pt(i, /:(plac\w+)/, Ut + "input-$1")] })), Kr(Ui(r, { props: [i] })), gp(r, { props: Em(e, n) });
                break;
            }
            return "";
          });
    }
}
var S1 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, zr = typeof dt < "u" && dt.env !== void 0 && (dt.env.REACT_APP_SC_ATTR || dt.env.SC_ATTR) || "data-styled", N0 = "active", O0 = "data-styled-version", Tf = "6.1.11", Xg = `/*!sc*/
`, Yg = typeof window < "u" && "HTMLElement" in window, x1 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof dt < "u" && dt.env !== void 0 && dt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && dt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? dt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && dt.env.REACT_APP_SC_DISABLE_SPEEDY : typeof dt < "u" && dt.env !== void 0 && dt.env.SC_DISABLE_SPEEDY !== void 0 && dt.env.SC_DISABLE_SPEEDY !== "" ? dt.env.SC_DISABLE_SPEEDY !== "false" && dt.env.SC_DISABLE_SPEEDY : dt.env.NODE_ENV !== "production"), Cm = /invalid hook call/i, Hh = /* @__PURE__ */ new Set(), C1 = function(r, t) {
  if (dt.env.NODE_ENV !== "production") {
    var e = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(r).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var s = !0;
      console.error = function(o) {
        for (var l = [], c = 1; c < arguments.length; c++)
          l[c - 1] = arguments[c];
        Cm.test(o) ? (s = !1, Hh.delete(n)) : i.apply(void 0, Ta([o], l, !1));
      }, Cn(), s && !Hh.has(n) && (console.warn(n), Hh.add(n));
    } catch (o) {
      Cm.test(o.message) && Hh.delete(n);
    } finally {
      console.error = i;
    }
  }
}, Pf = Object.freeze([]), ka = Object.freeze({});
function T1(r, t, e) {
  return e === void 0 && (e = ka), r.theme !== e.theme && r.theme || t || e.theme;
}
var bp = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), P1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, R1 = /(^-|-$)/g;
function Tm(r) {
  return r.replace(P1, "-").replace(R1, "");
}
var k1 = /(a)(d)/gi, Uh = 52, Pm = function(r) {
  return String.fromCharCode(r + (r > 25 ? 39 : 97));
};
function vp(r) {
  var t, e = "";
  for (t = Math.abs(r); t > Uh; t = t / Uh | 0)
    e = Pm(t % Uh) + e;
  return (Pm(t % Uh) + e).replace(k1, "$1-$2");
}
var Qf, B0 = 5381, Ps = function(r, t) {
  for (var e = t.length; e; )
    r = 33 * r ^ t.charCodeAt(--e);
  return r;
}, $0 = function(r) {
  return Ps(B0, r);
};
function L1(r) {
  return vp($0(r) >>> 0);
}
function H0(r) {
  return dt.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function tp(r) {
  return typeof r == "string" && (dt.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
var U0 = typeof Symbol == "function" && Symbol.for, z0 = U0 ? Symbol.for("react.memo") : 60115, I1 = U0 ? Symbol.for("react.forward_ref") : 60112, F1 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, M1 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, j0 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, D1 = ((Qf = {})[I1] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Qf[z0] = j0, Qf);
function Rm(r) {
  return ("type" in (t = r) && t.type.$$typeof) === z0 ? j0 : "$$typeof" in r ? D1[r.$$typeof] : F1;
  var t;
}
var N1 = Object.defineProperty, O1 = Object.getOwnPropertyNames, km = Object.getOwnPropertySymbols, B1 = Object.getOwnPropertyDescriptor, $1 = Object.getPrototypeOf, Lm = Object.prototype;
function G0(r, t, e) {
  if (typeof t != "string") {
    if (Lm) {
      var n = $1(t);
      n && n !== Lm && G0(r, n, e);
    }
    var i = O1(t);
    km && (i = i.concat(km(t)));
    for (var s = Rm(r), o = Rm(t), l = 0; l < i.length; ++l) {
      var c = i[l];
      if (!(c in M1 || e && e[c] || o && c in o || s && c in s)) {
        var d = B1(t, c);
        try {
          N1(r, c, d);
        } catch {
        }
      }
    }
  }
  return r;
}
function La(r) {
  return typeof r == "function";
}
function Kg(r) {
  return typeof r == "object" && "styledComponentId" in r;
}
function Is(r, t) {
  return r && t ? "".concat(r, " ").concat(t) : r || t || "";
}
function Im(r, t) {
  if (r.length === 0)
    return "";
  for (var e = r[0], n = 1; n < r.length; n++)
    e += r[n];
  return e;
}
function Ia(r) {
  return r !== null && typeof r == "object" && r.constructor.name === Object.name && !("props" in r && r.$$typeof);
}
function wp(r, t, e) {
  if (e === void 0 && (e = !1), !e && !Ia(r) && !Array.isArray(r))
    return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      r[n] = wp(r[n], t[n]);
  else if (Ia(t))
    for (var n in t)
      r[n] = wp(r[n], t[n]);
  return r;
}
function Zg(r, t) {
  Object.defineProperty(r, "toString", { value: t });
}
var H1 = dt.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function U1() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  for (var e = r[0], n = [], i = 1, s = r.length; i < s; i += 1)
    n.push(r[i]);
  return n.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Na(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return dt.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(U1.apply(void 0, Ta([H1[r]], t, !1)).trim());
}
var z1 = function() {
  function r(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return r.prototype.indexOfGroup = function(t) {
    for (var e = 0, n = 0; n < t; n++)
      e += this.groupSizes[n];
    return e;
  }, r.prototype.insertRules = function(t, e) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, i = n.length, s = i; t >= s; )
        if ((s <<= 1) < 0)
          throw Na(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(n), this.length = s;
      for (var o = i; o < s; o++)
        this.groupSizes[o] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), c = (o = 0, e.length); o < c; o++)
      this.tag.insertRule(l, e[o]) && (this.groupSizes[t]++, l++);
  }, r.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var e = this.groupSizes[t], n = this.indexOfGroup(t), i = n + e;
      this.groupSizes[t] = 0;
      for (var s = n; s < i; s++)
        this.tag.deleteRule(n);
    }
  }, r.prototype.getGroup = function(t) {
    var e = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return e;
    for (var n = this.groupSizes[t], i = this.indexOfGroup(t), s = i + n, o = i; o < s; o++)
      e += "".concat(this.tag.getRule(o)).concat(Xg);
    return e;
  }, r;
}(), j1 = 1 << 30, td = /* @__PURE__ */ new Map(), Rd = /* @__PURE__ */ new Map(), ed = 1, zh = function(r) {
  if (td.has(r))
    return td.get(r);
  for (; Rd.has(ed); )
    ed++;
  var t = ed++;
  if (dt.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > j1))
    throw Na(16, "".concat(t));
  return td.set(r, t), Rd.set(t, r), t;
}, G1 = function(r, t) {
  ed = t + 1, td.set(r, t), Rd.set(t, r);
}, V1 = "style[".concat(zr, "][").concat(O0, '="').concat(Tf, '"]'), W1 = new RegExp("^".concat(zr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), q1 = function(r, t, e) {
  for (var n, i = e.split(","), s = 0, o = i.length; s < o; s++)
    (n = i[s]) && r.registerName(t, n);
}, X1 = function(r, t) {
  for (var e, n = ((e = t.textContent) !== null && e !== void 0 ? e : "").split(Xg), i = [], s = 0, o = n.length; s < o; s++) {
    var l = n[s].trim();
    if (l) {
      var c = l.match(W1);
      if (c) {
        var d = 0 | parseInt(c[1], 10), h = c[2];
        d !== 0 && (G1(h, d), q1(r, h, c[3]), r.getTag().insertRules(d, i)), i.length = 0;
      } else
        i.push(l);
    }
  }
};
function Y1() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var V0 = function(r) {
  var t = document.head, e = r || t, n = document.createElement("style"), i = function(l) {
    var c = Array.from(l.querySelectorAll("style[".concat(zr, "]")));
    return c[c.length - 1];
  }(e), s = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(zr, N0), n.setAttribute(O0, Tf);
  var o = Y1();
  return o && n.setAttribute("nonce", o), e.insertBefore(n, s), n;
}, K1 = function() {
  function r(t) {
    this.element = V0(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet)
        return e.sheet;
      for (var n = document.styleSheets, i = 0, s = n.length; i < s; i++) {
        var o = n[i];
        if (o.ownerNode === e)
          return o;
      }
      throw Na(17);
    }(this.element), this.length = 0;
  }
  return r.prototype.insertRule = function(t, e) {
    try {
      return this.sheet.insertRule(e, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.prototype.getRule = function(t) {
    var e = this.sheet.cssRules[t];
    return e && e.cssText ? e.cssText : "";
  }, r;
}(), Z1 = function() {
  function r(t) {
    this.element = V0(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return r.prototype.insertRule = function(t, e) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(e);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, r.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, r;
}(), J1 = function() {
  function r(t) {
    this.rules = [], this.length = 0;
  }
  return r.prototype.insertRule = function(t, e) {
    return t <= this.length && (this.rules.splice(t, 0, e), this.length++, !0);
  }, r.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, r;
}(), Fm = Yg, Q1 = { isServer: !Yg, useCSSOMInjection: !x1 }, W0 = function() {
  function r(t, e, n) {
    t === void 0 && (t = ka), e === void 0 && (e = {});
    var i = this;
    this.options = ze(ze({}, Q1), t), this.gs = e, this.names = new Map(n), this.server = !!t.isServer, !this.server && Yg && Fm && (Fm = !1, function(s) {
      for (var o = document.querySelectorAll(V1), l = 0, c = o.length; l < c; l++) {
        var d = o[l];
        d && d.getAttribute(zr) !== N0 && (X1(s, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this)), Zg(this, function() {
      return function(s) {
        for (var o = s.getTag(), l = o.length, c = "", d = function(f) {
          var g = function(E) {
            return Rd.get(E);
          }(f);
          if (g === void 0)
            return "continue";
          var y = s.names.get(g), b = o.getGroup(f);
          if (y === void 0 || b.length === 0)
            return "continue";
          var _ = "".concat(zr, ".g").concat(f, '[id="').concat(g, '"]'), x = "";
          y !== void 0 && y.forEach(function(E) {
            E.length > 0 && (x += "".concat(E, ","));
          }), c += "".concat(b).concat(_, '{content:"').concat(x, '"}').concat(Xg);
        }, h = 0; h < l; h++)
          d(h);
        return c;
      }(i);
    });
  }
  return r.registerId = function(t) {
    return zh(t);
  }, r.prototype.reconstructWithOptions = function(t, e) {
    return e === void 0 && (e = !0), new r(ze(ze({}, this.options), t), this.gs, e && this.names || void 0);
  }, r.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(e) {
      var n = e.useCSSOMInjection, i = e.target;
      return e.isServer ? new J1(i) : n ? new K1(i) : new Z1(i);
    }(this.options), new z1(t)));
    var t;
  }, r.prototype.hasNameForId = function(t, e) {
    return this.names.has(t) && this.names.get(t).has(e);
  }, r.prototype.registerName = function(t, e) {
    if (zh(t), this.names.has(t))
      this.names.get(t).add(e);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(e), this.names.set(t, n);
    }
  }, r.prototype.insertRules = function(t, e, n) {
    this.registerName(t, e), this.getTag().insertRules(zh(t), n);
  }, r.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.prototype.clearRules = function(t) {
    this.getTag().clearGroup(zh(t)), this.clearNames(t);
  }, r.prototype.clearTag = function() {
    this.tag = void 0;
  }, r;
}(), t_ = /&/g, e_ = /^\s*\/\/.*$/gm;
function q0(r, t) {
  return r.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(t, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(t, " ")), e.props = e.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = q0(e.children, t)), e;
  });
}
function n_(r) {
  var t, e, n, i = ka, s = i.options, o = s === void 0 ? ka : s, l = i.plugins, c = l === void 0 ? Pf : l, d = function(g, y, b) {
    return b.startsWith(e) && b.endsWith(e) && b.replaceAll(e, "").length > 0 ? ".".concat(t) : g;
  }, h = c.slice();
  h.push(function(g) {
    g.type === Ef && g.value.includes("&") && (g.props[0] = g.props[0].replace(t_, e).replace(n, d));
  }), o.prefix && h.push(E1), h.push(w1);
  var f = function(g, y, b, _) {
    y === void 0 && (y = ""), b === void 0 && (b = ""), _ === void 0 && (_ = "&"), t = _, e = y, n = new RegExp("\\".concat(e, "\\b"), "g");
    var x = g.replace(e_, ""), E = b1(b || y ? "".concat(b, " ").concat(y, " { ").concat(x, " }") : x);
    o.namespace && (E = q0(E, o.namespace));
    var P = [];
    return Pd(E, A1(h.concat(_1(function(k) {
      return P.push(k);
    })))), P;
  };
  return f.hash = c.length ? c.reduce(function(g, y) {
    return y.name || Na(15), Ps(g, y.name);
  }, B0).toString() : "", f;
}
var i_ = new W0(), Ap = n_(), X0 = ll.createContext({ shouldForwardProp: void 0, styleSheet: i_, stylis: Ap });
X0.Consumer;
ll.createContext(void 0);
function Mm() {
  return $i(X0);
}
var Dm = function() {
  function r(t, e) {
    var n = this;
    this.inject = function(i, s) {
      s === void 0 && (s = Ap);
      var o = n.name + s.hash;
      i.hasNameForId(n.id, o) || i.insertRules(n.id, o, s(n.rules, o, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = e, Zg(this, function() {
      throw Na(12, String(n.name));
    });
  }
  return r.prototype.getName = function(t) {
    return t === void 0 && (t = Ap), this.name + t.hash;
  }, r;
}(), s_ = function(r) {
  return r >= "A" && r <= "Z";
};
function Nm(r) {
  for (var t = "", e = 0; e < r.length; e++) {
    var n = r[e];
    if (e === 1 && n === "-" && r[0] === "-")
      return r;
    s_(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Y0 = function(r) {
  return r == null || r === !1 || r === "";
}, K0 = function(r) {
  var t, e, n = [];
  for (var i in r) {
    var s = r[i];
    r.hasOwnProperty(i) && !Y0(s) && (Array.isArray(s) && s.isCss || La(s) ? n.push("".concat(Nm(i), ":"), s, ";") : Ia(s) ? n.push.apply(n, Ta(Ta(["".concat(i, " {")], K0(s), !1), ["}"], !1)) : n.push("".concat(Nm(i), ": ").concat((t = i, (e = s) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || t in S1 || t.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return n;
};
function Ur(r, t, e, n) {
  if (Y0(r))
    return [];
  if (Kg(r))
    return [".".concat(r.styledComponentId)];
  if (La(r)) {
    if (!La(s = r) || s.prototype && s.prototype.isReactComponent || !t)
      return [r];
    var i = r(t);
    return dt.env.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof Dm || Ia(i) || i === null || console.error("".concat(H0(r), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ur(i, t, e, n);
  }
  var s;
  return r instanceof Dm ? e ? (r.inject(e, n), [r.getName(n)]) : [r] : Ia(r) ? K0(r) : Array.isArray(r) ? Array.prototype.concat.apply(Pf, r.map(function(o) {
    return Ur(o, t, e, n);
  })) : [r.toString()];
}
function r_(r) {
  for (var t = 0; t < r.length; t += 1) {
    var e = r[t];
    if (La(e) && !Kg(e))
      return !1;
  }
  return !0;
}
var o_ = $0(Tf), a_ = function() {
  function r(t, e, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = dt.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && r_(t), this.componentId = e, this.baseHash = Ps(o_, e), this.baseStyle = n, W0.registerId(e);
  }
  return r.prototype.generateAndInjectStyles = function(t, e, n) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, e, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId))
        i = Is(i, this.staticRulesId);
      else {
        var s = Im(Ur(this.rules, t, e, n)), o = vp(Ps(this.baseHash, s) >>> 0);
        if (!e.hasNameForId(this.componentId, o)) {
          var l = n(s, ".".concat(o), void 0, this.componentId);
          e.insertRules(this.componentId, o, l);
        }
        i = Is(i, o), this.staticRulesId = o;
      }
    else {
      for (var c = Ps(this.baseHash, n.hash), d = "", h = 0; h < this.rules.length; h++) {
        var f = this.rules[h];
        if (typeof f == "string")
          d += f, dt.env.NODE_ENV !== "production" && (c = Ps(c, f));
        else if (f) {
          var g = Im(Ur(f, t, e, n));
          c = Ps(c, g + h), d += g;
        }
      }
      if (d) {
        var y = vp(c >>> 0);
        e.hasNameForId(this.componentId, y) || e.insertRules(this.componentId, y, n(d, ".".concat(y), void 0, this.componentId)), i = Is(i, y);
      }
    }
    return i;
  }, r;
}(), Z0 = ll.createContext(void 0);
Z0.Consumer;
var ep = {}, Om = /* @__PURE__ */ new Set();
function l_(r, t, e) {
  var n = Kg(r), i = r, s = !tp(r), o = t.attrs, l = o === void 0 ? Pf : o, c = t.componentId, d = c === void 0 ? function(L, F) {
    var I = typeof L != "string" ? "sc" : Tm(L);
    ep[I] = (ep[I] || 0) + 1;
    var M = "".concat(I, "-").concat(L1(Tf + I + ep[I]));
    return F ? "".concat(F, "-").concat(M) : M;
  }(t.displayName, t.parentComponentId) : c, h = t.displayName, f = h === void 0 ? function(L) {
    return tp(L) ? "styled.".concat(L) : "Styled(".concat(H0(L), ")");
  }(r) : h, g = t.displayName && t.componentId ? "".concat(Tm(t.displayName), "-").concat(t.componentId) : t.componentId || d, y = n && i.attrs ? i.attrs.concat(l).filter(Boolean) : l, b = t.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var _ = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var x = t.shouldForwardProp;
      b = function(L, F) {
        return _(L, F) && x(L, F);
      };
    } else
      b = _;
  }
  var E = new a_(e, g, n ? i.componentStyle : void 0);
  function P(L, F) {
    return function(I, M, C) {
      var T = I.attrs, N = I.componentStyle, D = I.defaultProps, H = I.foldedComponentIds, U = I.styledComponentId, G = I.target, Y = ll.useContext(Z0), Z = Mm(), B = I.shouldForwardProp || Z.shouldForwardProp;
      dt.env.NODE_ENV !== "production" && _m(U);
      var V = T1(M, Y, D) || ka, W = function(et, lt, K) {
        for (var gt, q = ze(ze({}, lt), { className: void 0, theme: K }), J = 0; J < et.length; J += 1) {
          var ct = La(gt = et[J]) ? gt(q) : gt;
          for (var ft in ct)
            q[ft] = ft === "className" ? Is(q[ft], ct[ft]) : ft === "style" ? ze(ze({}, q[ft]), ct[ft]) : ct[ft];
        }
        return lt.className && (q.className = Is(q.className, lt.className)), q;
      }(T, M, V), bt = W.as || G, ut = {};
      for (var z in W)
        W[z] === void 0 || z[0] === "$" || z === "as" || z === "theme" && W.theme === V || (z === "forwardedAs" ? ut.as = W.forwardedAs : B && !B(z, bt) || (ut[z] = W[z], B || dt.env.NODE_ENV !== "development" || s1(z) || Om.has(z) || !bp.has(bt) || (Om.add(z), console.warn('styled-components: it looks like an unknown prop "'.concat(z, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var nt = function(et, lt) {
        var K = Mm(), gt = et.generateAndInjectStyles(lt, K.styleSheet, K.stylis);
        return dt.env.NODE_ENV !== "production" && _m(gt), gt;
      }(N, W);
      dt.env.NODE_ENV !== "production" && I.warnTooManyClasses && I.warnTooManyClasses(nt);
      var tt = Is(H, U);
      return nt && (tt += " " + nt), W.className && (tt += " " + W.className), ut[tp(bt) && !bp.has(bt) ? "class" : "className"] = tt, ut.ref = C, Lv(bt, ut);
    }(k, L, F);
  }
  P.displayName = f;
  var k = ll.forwardRef(P);
  return k.attrs = y, k.componentStyle = E, k.displayName = f, k.shouldForwardProp = b, k.foldedComponentIds = n ? Is(i.foldedComponentIds, i.styledComponentId) : "", k.styledComponentId = g, k.target = n ? i.target : r, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(L) {
    this._foldedDefaultProps = n ? function(F) {
      for (var I = [], M = 1; M < arguments.length; M++)
        I[M - 1] = arguments[M];
      for (var C = 0, T = I; C < T.length; C++)
        wp(F, T[C], !0);
      return F;
    }({}, i.defaultProps, L) : L;
  } }), dt.env.NODE_ENV !== "production" && (C1(f, g), k.warnTooManyClasses = /* @__PURE__ */ function(L, F) {
    var I = {}, M = !1;
    return function(C) {
      if (!M && (I[C] = !0, Object.keys(I).length >= 200)) {
        var T = F ? ' with the id of "'.concat(F, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(L).concat(T, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), M = !0, I = {};
      }
    };
  }(f, g)), Zg(k, function() {
    return ".".concat(k.styledComponentId);
  }), s && G0(k, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function Bm(r, t) {
  for (var e = [r[0]], n = 0, i = t.length; n < i; n += 1)
    e.push(t[n], r[n + 1]);
  return e;
}
var $m = function(r) {
  return Object.assign(r, { isCss: !0 });
};
function Jg(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  if (La(r) || Ia(r))
    return $m(Ur(Bm(Pf, Ta([r], t, !0))));
  var n = r;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? Ur(n) : $m(Ur(Bm(n, t)));
}
function _p(r, t, e) {
  if (e === void 0 && (e = ka), !t)
    throw Na(1, t);
  var n = function(i) {
    for (var s = [], o = 1; o < arguments.length; o++)
      s[o - 1] = arguments[o];
    return r(t, e, Jg.apply(void 0, Ta([i], s, !1)));
  };
  return n.attrs = function(i) {
    return _p(r, t, ze(ze({}, e), { attrs: Array.prototype.concat(e.attrs, i).filter(Boolean) }));
  }, n.withConfig = function(i) {
    return _p(r, t, ze(ze({}, e), i));
  }, n;
}
var J0 = function(r) {
  return _p(l_, r);
}, Ft = J0;
bp.forEach(function(r) {
  Ft[r] = J0(r);
});
dt.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var jh = "__sc-".concat(zr, "__");
dt.env.NODE_ENV !== "production" && dt.env.NODE_ENV !== "test" && typeof window < "u" && (window[jh] || (window[jh] = 0), window[jh] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[jh] += 1);
const Bi = ({
  mainState: { currentDocument: r },
  children: t,
  ...e
}) => r ? /* @__PURE__ */ j(c_, { id: "image-renderer", ...e, children: t || /* @__PURE__ */ j(h_, { id: "image-img", src: r.fileData }) }) : null;
Bi.fileTypes = [];
Bi.weight = 0;
const c_ = Ft.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
`, h_ = Ft.img`
  max-width: 95%;
  max-height: 95%;
`, Qg = (r) => /* @__PURE__ */ j(Bi, { ...r });
Qg.fileTypes = ["bmp", "image/bmp"];
Qg.weight = 0;
const Rf = ({ mainState: { currentDocument: r } }) => (Pt(() => {
  const t = r == null ? void 0 : r.fileData;
  let e = "";
  const n = t == null ? void 0 : t.replace(
    /^data:text\/html;(?:charset=([^;]*);)?base64,/,
    (d, h) => (e = h || "utf-8", "")
  );
  let i = window.atob(n);
  const s = Uint8Array.from(i, (d) => d.charCodeAt(0));
  i = new TextDecoder(e).decode(s);
  const o = document.getElementById(
    "html-body"
  ), l = (o == null ? void 0 : o.contentWindow) && o.contentWindow;
  if (!l)
    return;
  const c = l.document;
  c.open(), c.write(`${i}`), c.close();
}, [r]), /* @__PURE__ */ j(d_, { id: "html-renderer", children: /* @__PURE__ */ j(u_, { id: "html-body", sandbox: "allow-same-origin" }) }));
Rf.fileTypes = ["htm", "html", "text/htm", "text/html"];
Rf.weight = 0;
Rf.fileLoader = _0;
const d_ = Ft.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;
`, u_ = Ft.iframe`
  height: 100%;
  padding: 15px;
  margin: 20px 0 20px 0;
  border: 1px solid ${(r) => r.theme.secondary};
`, tm = (r) => /* @__PURE__ */ j(Bi, { ...r });
tm.fileTypes = ["jpg", "jpeg", "image/jpg", "image/jpeg"];
tm.weight = 0;
const kf = ({ mainState: { currentDocument: r } }) => r ? /* @__PURE__ */ j(f_, { id: "msdoc-renderer", children: /* @__PURE__ */ j(
  p_,
  {
    id: "msdoc-iframe",
    title: "msdoc-iframe",
    src: `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
      r.uri
    )}`,
    frameBorder: "0"
  }
) }) : null, _s = {
  odt: ["odt", "application/vnd.oasis.opendocument.text"],
  doc: ["doc", "application/msword"],
  docx: [
    "docx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/octet-stream"
  ],
  xls: ["xls", "application/vnd.ms-excel"],
  xlsx: [
    "xlsx",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ],
  ppt: ["ppt", "application/vnd.ms-powerpoint"],
  pptx: [
    "pptx",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  ]
};
kf.fileTypes = [
  ..._s.odt,
  ..._s.doc,
  ..._s.docx,
  ..._s.xls,
  ..._s.xlsx,
  ..._s.ppt,
  ..._s.pptx
];
kf.weight = 0;
kf.fileLoader = ({ fileLoaderComplete: r }) => r();
const f_ = Ft.div`
  width: 100%;
`, p_ = Ft.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;
var le = {}, Lf = {};
Lf.byteLength = y_;
Lf.toByteArray = v_;
Lf.fromByteArray = __;
var Zn = [], rn = [], g_ = typeof Uint8Array < "u" ? Uint8Array : Array, np = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Zr = 0, m_ = np.length; Zr < m_; ++Zr)
  Zn[Zr] = np[Zr], rn[np.charCodeAt(Zr)] = Zr;
rn[45] = 62;
rn[95] = 63;
function Q0(r) {
  var t = r.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e = r.indexOf("=");
  e === -1 && (e = t);
  var n = e === t ? 0 : 4 - e % 4;
  return [e, n];
}
function y_(r) {
  var t = Q0(r), e = t[0], n = t[1];
  return (e + n) * 3 / 4 - n;
}
function b_(r, t, e) {
  return (t + e) * 3 / 4 - e;
}
function v_(r) {
  var t, e = Q0(r), n = e[0], i = e[1], s = new g_(b_(r, n, i)), o = 0, l = i > 0 ? n - 4 : n, c;
  for (c = 0; c < l; c += 4)
    t = rn[r.charCodeAt(c)] << 18 | rn[r.charCodeAt(c + 1)] << 12 | rn[r.charCodeAt(c + 2)] << 6 | rn[r.charCodeAt(c + 3)], s[o++] = t >> 16 & 255, s[o++] = t >> 8 & 255, s[o++] = t & 255;
  return i === 2 && (t = rn[r.charCodeAt(c)] << 2 | rn[r.charCodeAt(c + 1)] >> 4, s[o++] = t & 255), i === 1 && (t = rn[r.charCodeAt(c)] << 10 | rn[r.charCodeAt(c + 1)] << 4 | rn[r.charCodeAt(c + 2)] >> 2, s[o++] = t >> 8 & 255, s[o++] = t & 255), s;
}
function w_(r) {
  return Zn[r >> 18 & 63] + Zn[r >> 12 & 63] + Zn[r >> 6 & 63] + Zn[r & 63];
}
function A_(r, t, e) {
  for (var n, i = [], s = t; s < e; s += 3)
    n = (r[s] << 16 & 16711680) + (r[s + 1] << 8 & 65280) + (r[s + 2] & 255), i.push(w_(n));
  return i.join("");
}
function __(r) {
  for (var t, e = r.length, n = e % 3, i = [], s = 16383, o = 0, l = e - n; o < l; o += s)
    i.push(A_(r, o, o + s > l ? l : o + s));
  return n === 1 ? (t = r[e - 1], i.push(
    Zn[t >> 2] + Zn[t << 4 & 63] + "=="
  )) : n === 2 && (t = (r[e - 2] << 8) + r[e - 1], i.push(
    Zn[t >> 10] + Zn[t >> 4 & 63] + Zn[t << 2 & 63] + "="
  )), i.join("");
}
var em = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
em.read = function(r, t, e, n, i) {
  var s, o, l = i * 8 - n - 1, c = (1 << l) - 1, d = c >> 1, h = -7, f = e ? i - 1 : 0, g = e ? -1 : 1, y = r[t + f];
  for (f += g, s = y & (1 << -h) - 1, y >>= -h, h += l; h > 0; s = s * 256 + r[t + f], f += g, h -= 8)
    ;
  for (o = s & (1 << -h) - 1, s >>= -h, h += n; h > 0; o = o * 256 + r[t + f], f += g, h -= 8)
    ;
  if (s === 0)
    s = 1 - d;
  else {
    if (s === c)
      return o ? NaN : (y ? -1 : 1) * (1 / 0);
    o = o + Math.pow(2, n), s = s - d;
  }
  return (y ? -1 : 1) * o * Math.pow(2, s - n);
};
em.write = function(r, t, e, n, i, s) {
  var o, l, c, d = s * 8 - i - 1, h = (1 << d) - 1, f = h >> 1, g = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, y = n ? 0 : s - 1, b = n ? 1 : -1, _ = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, o = h) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -o)) < 1 && (o--, c *= 2), o + f >= 1 ? t += g / c : t += g * Math.pow(2, 1 - f), t * c >= 2 && (o++, c /= 2), o + f >= h ? (l = 0, o = h) : o + f >= 1 ? (l = (t * c - 1) * Math.pow(2, i), o = o + f) : (l = t * Math.pow(2, f - 1) * Math.pow(2, i), o = 0)); i >= 8; r[e + y] = l & 255, y += b, l /= 256, i -= 8)
    ;
  for (o = o << i | l, d += i; d > 0; r[e + y] = o & 255, y += b, o /= 256, d -= 8)
    ;
  r[e + y - b] |= _ * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const t = Lf, e = em, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = h, r.SlowBuffer = F, r.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  r.kMaxLength = i;
  const { Uint8Array: s, ArrayBuffer: o, SharedArrayBuffer: l } = globalThis;
  h.TYPED_ARRAY_SUPPORT = c(), !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function c() {
    try {
      const v = new s(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, s.prototype), Object.setPrototypeOf(v, u), v.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(h.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (h.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(h.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (h.isBuffer(this))
        return this.byteOffset;
    }
  });
  function d(v) {
    if (v > i)
      throw new RangeError('The value "' + v + '" is invalid for option "size"');
    const u = new s(v);
    return Object.setPrototypeOf(u, h.prototype), u;
  }
  function h(v, u, p) {
    if (typeof v == "number") {
      if (typeof u == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return b(v);
    }
    return f(v, u, p);
  }
  h.poolSize = 8192;
  function f(v, u, p) {
    if (typeof v == "string")
      return _(v, u);
    if (o.isView(v))
      return E(v);
    if (v == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof v
      );
    if (ot(v, o) || v && ot(v.buffer, o) || typeof l < "u" && (ot(v, l) || v && ot(v.buffer, l)))
      return P(v, u, p);
    if (typeof v == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const S = v.valueOf && v.valueOf();
    if (S != null && S !== v)
      return h.from(S, u, p);
    const R = k(v);
    if (R)
      return R;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof v[Symbol.toPrimitive] == "function")
      return h.from(v[Symbol.toPrimitive]("string"), u, p);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof v
    );
  }
  h.from = function(v, u, p) {
    return f(v, u, p);
  }, Object.setPrototypeOf(h.prototype, s.prototype), Object.setPrototypeOf(h, s);
  function g(v) {
    if (typeof v != "number")
      throw new TypeError('"size" argument must be of type number');
    if (v < 0)
      throw new RangeError('The value "' + v + '" is invalid for option "size"');
  }
  function y(v, u, p) {
    return g(v), v <= 0 ? d(v) : u !== void 0 ? typeof p == "string" ? d(v).fill(u, p) : d(v).fill(u) : d(v);
  }
  h.alloc = function(v, u, p) {
    return y(v, u, p);
  };
  function b(v) {
    return g(v), d(v < 0 ? 0 : L(v) | 0);
  }
  h.allocUnsafe = function(v) {
    return b(v);
  }, h.allocUnsafeSlow = function(v) {
    return b(v);
  };
  function _(v, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !h.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
    const p = I(v, u) | 0;
    let S = d(p);
    const R = S.write(v, u);
    return R !== p && (S = S.slice(0, R)), S;
  }
  function x(v) {
    const u = v.length < 0 ? 0 : L(v.length) | 0, p = d(u);
    for (let S = 0; S < u; S += 1)
      p[S] = v[S] & 255;
    return p;
  }
  function E(v) {
    if (ot(v, s)) {
      const u = new s(v);
      return P(u.buffer, u.byteOffset, u.byteLength);
    }
    return x(v);
  }
  function P(v, u, p) {
    if (u < 0 || v.byteLength < u)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (v.byteLength < u + (p || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let S;
    return u === void 0 && p === void 0 ? S = new s(v) : p === void 0 ? S = new s(v, u) : S = new s(v, u, p), Object.setPrototypeOf(S, h.prototype), S;
  }
  function k(v) {
    if (h.isBuffer(v)) {
      const u = L(v.length) | 0, p = d(u);
      return p.length === 0 || v.copy(p, 0, 0, u), p;
    }
    if (v.length !== void 0)
      return typeof v.length != "number" || Pe(v.length) ? d(0) : x(v);
    if (v.type === "Buffer" && Array.isArray(v.data))
      return x(v.data);
  }
  function L(v) {
    if (v >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return v | 0;
  }
  function F(v) {
    return +v != v && (v = 0), h.alloc(+v);
  }
  h.isBuffer = function(u) {
    return u != null && u._isBuffer === !0 && u !== h.prototype;
  }, h.compare = function(u, p) {
    if (ot(u, s) && (u = h.from(u, u.offset, u.byteLength)), ot(p, s) && (p = h.from(p, p.offset, p.byteLength)), !h.isBuffer(u) || !h.isBuffer(p))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (u === p)
      return 0;
    let S = u.length, R = p.length;
    for (let O = 0, $ = Math.min(S, R); O < $; ++O)
      if (u[O] !== p[O]) {
        S = u[O], R = p[O];
        break;
      }
    return S < R ? -1 : R < S ? 1 : 0;
  }, h.isEncoding = function(u) {
    switch (String(u).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, h.concat = function(u, p) {
    if (!Array.isArray(u))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (u.length === 0)
      return h.alloc(0);
    let S;
    if (p === void 0)
      for (p = 0, S = 0; S < u.length; ++S)
        p += u[S].length;
    const R = h.allocUnsafe(p);
    let O = 0;
    for (S = 0; S < u.length; ++S) {
      let $ = u[S];
      if (ot($, s))
        O + $.length > R.length ? (h.isBuffer($) || ($ = h.from($)), $.copy(R, O)) : s.prototype.set.call(
          R,
          $,
          O
        );
      else if (h.isBuffer($))
        $.copy(R, O);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      O += $.length;
    }
    return R;
  };
  function I(v, u) {
    if (h.isBuffer(v))
      return v.length;
    if (o.isView(v) || ot(v, o))
      return v.byteLength;
    if (typeof v != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof v
      );
    const p = v.length, S = arguments.length > 2 && arguments[2] === !0;
    if (!S && p === 0)
      return 0;
    let R = !1;
    for (; ; )
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return p;
        case "utf8":
        case "utf-8":
          return Kt(v).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p * 2;
        case "hex":
          return p >>> 1;
        case "base64":
          return kt(v).length;
        default:
          if (R)
            return S ? -1 : Kt(v).length;
          u = ("" + u).toLowerCase(), R = !0;
      }
  }
  h.byteLength = I;
  function M(v, u, p) {
    let S = !1;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, u >>>= 0, p <= u))
      return "";
    for (v || (v = "utf8"); ; )
      switch (v) {
        case "hex":
          return z(this, u, p);
        case "utf8":
        case "utf-8":
          return B(this, u, p);
        case "ascii":
          return bt(this, u, p);
        case "latin1":
        case "binary":
          return ut(this, u, p);
        case "base64":
          return Z(this, u, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return nt(this, u, p);
        default:
          if (S)
            throw new TypeError("Unknown encoding: " + v);
          v = (v + "").toLowerCase(), S = !0;
      }
  }
  h.prototype._isBuffer = !0;
  function C(v, u, p) {
    const S = v[u];
    v[u] = v[p], v[p] = S;
  }
  h.prototype.swap16 = function() {
    const u = this.length;
    if (u % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let p = 0; p < u; p += 2)
      C(this, p, p + 1);
    return this;
  }, h.prototype.swap32 = function() {
    const u = this.length;
    if (u % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let p = 0; p < u; p += 4)
      C(this, p, p + 3), C(this, p + 1, p + 2);
    return this;
  }, h.prototype.swap64 = function() {
    const u = this.length;
    if (u % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let p = 0; p < u; p += 8)
      C(this, p, p + 7), C(this, p + 1, p + 6), C(this, p + 2, p + 5), C(this, p + 3, p + 4);
    return this;
  }, h.prototype.toString = function() {
    const u = this.length;
    return u === 0 ? "" : arguments.length === 0 ? B(this, 0, u) : M.apply(this, arguments);
  }, h.prototype.toLocaleString = h.prototype.toString, h.prototype.equals = function(u) {
    if (!h.isBuffer(u))
      throw new TypeError("Argument must be a Buffer");
    return this === u ? !0 : h.compare(this, u) === 0;
  }, h.prototype.inspect = function() {
    let u = "";
    const p = r.INSPECT_MAX_BYTES;
    return u = this.toString("hex", 0, p).replace(/(.{2})/g, "$1 ").trim(), this.length > p && (u += " ... "), "<Buffer " + u + ">";
  }, n && (h.prototype[n] = h.prototype.inspect), h.prototype.compare = function(u, p, S, R, O) {
    if (ot(u, s) && (u = h.from(u, u.offset, u.byteLength)), !h.isBuffer(u))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u
      );
    if (p === void 0 && (p = 0), S === void 0 && (S = u ? u.length : 0), R === void 0 && (R = 0), O === void 0 && (O = this.length), p < 0 || S > u.length || R < 0 || O > this.length)
      throw new RangeError("out of range index");
    if (R >= O && p >= S)
      return 0;
    if (R >= O)
      return -1;
    if (p >= S)
      return 1;
    if (p >>>= 0, S >>>= 0, R >>>= 0, O >>>= 0, this === u)
      return 0;
    let $ = O - R, wt = S - p;
    const qt = Math.min($, wt), jt = this.slice(R, O), Xt = u.slice(p, S);
    for (let Nt = 0; Nt < qt; ++Nt)
      if (jt[Nt] !== Xt[Nt]) {
        $ = jt[Nt], wt = Xt[Nt];
        break;
      }
    return $ < wt ? -1 : wt < $ ? 1 : 0;
  };
  function T(v, u, p, S, R) {
    if (v.length === 0)
      return -1;
    if (typeof p == "string" ? (S = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, Pe(p) && (p = R ? 0 : v.length - 1), p < 0 && (p = v.length + p), p >= v.length) {
      if (R)
        return -1;
      p = v.length - 1;
    } else if (p < 0)
      if (R)
        p = 0;
      else
        return -1;
    if (typeof u == "string" && (u = h.from(u, S)), h.isBuffer(u))
      return u.length === 0 ? -1 : N(v, u, p, S, R);
    if (typeof u == "number")
      return u = u & 255, typeof s.prototype.indexOf == "function" ? R ? s.prototype.indexOf.call(v, u, p) : s.prototype.lastIndexOf.call(v, u, p) : N(v, [u], p, S, R);
    throw new TypeError("val must be string, number or Buffer");
  }
  function N(v, u, p, S, R) {
    let O = 1, $ = v.length, wt = u.length;
    if (S !== void 0 && (S = String(S).toLowerCase(), S === "ucs2" || S === "ucs-2" || S === "utf16le" || S === "utf-16le")) {
      if (v.length < 2 || u.length < 2)
        return -1;
      O = 2, $ /= 2, wt /= 2, p /= 2;
    }
    function qt(Xt, Nt) {
      return O === 1 ? Xt[Nt] : Xt.readUInt16BE(Nt * O);
    }
    let jt;
    if (R) {
      let Xt = -1;
      for (jt = p; jt < $; jt++)
        if (qt(v, jt) === qt(u, Xt === -1 ? 0 : jt - Xt)) {
          if (Xt === -1 && (Xt = jt), jt - Xt + 1 === wt)
            return Xt * O;
        } else
          Xt !== -1 && (jt -= jt - Xt), Xt = -1;
    } else
      for (p + wt > $ && (p = $ - wt), jt = p; jt >= 0; jt--) {
        let Xt = !0;
        for (let Nt = 0; Nt < wt; Nt++)
          if (qt(v, jt + Nt) !== qt(u, Nt)) {
            Xt = !1;
            break;
          }
        if (Xt)
          return jt;
      }
    return -1;
  }
  h.prototype.includes = function(u, p, S) {
    return this.indexOf(u, p, S) !== -1;
  }, h.prototype.indexOf = function(u, p, S) {
    return T(this, u, p, S, !0);
  }, h.prototype.lastIndexOf = function(u, p, S) {
    return T(this, u, p, S, !1);
  };
  function D(v, u, p, S) {
    p = Number(p) || 0;
    const R = v.length - p;
    S ? (S = Number(S), S > R && (S = R)) : S = R;
    const O = u.length;
    S > O / 2 && (S = O / 2);
    let $;
    for ($ = 0; $ < S; ++$) {
      const wt = parseInt(u.substr($ * 2, 2), 16);
      if (Pe(wt))
        return $;
      v[p + $] = wt;
    }
    return $;
  }
  function H(v, u, p, S) {
    return Wt(Kt(u, v.length - p), v, p, S);
  }
  function U(v, u, p, S) {
    return Wt(Vt(u), v, p, S);
  }
  function G(v, u, p, S) {
    return Wt(kt(u), v, p, S);
  }
  function Y(v, u, p, S) {
    return Wt(Rt(u, v.length - p), v, p, S);
  }
  h.prototype.write = function(u, p, S, R) {
    if (p === void 0)
      R = "utf8", S = this.length, p = 0;
    else if (S === void 0 && typeof p == "string")
      R = p, S = this.length, p = 0;
    else if (isFinite(p))
      p = p >>> 0, isFinite(S) ? (S = S >>> 0, R === void 0 && (R = "utf8")) : (R = S, S = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const O = this.length - p;
    if ((S === void 0 || S > O) && (S = O), u.length > 0 && (S < 0 || p < 0) || p > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    R || (R = "utf8");
    let $ = !1;
    for (; ; )
      switch (R) {
        case "hex":
          return D(this, u, p, S);
        case "utf8":
        case "utf-8":
          return H(this, u, p, S);
        case "ascii":
        case "latin1":
        case "binary":
          return U(this, u, p, S);
        case "base64":
          return G(this, u, p, S);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Y(this, u, p, S);
        default:
          if ($)
            throw new TypeError("Unknown encoding: " + R);
          R = ("" + R).toLowerCase(), $ = !0;
      }
  }, h.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function Z(v, u, p) {
    return u === 0 && p === v.length ? t.fromByteArray(v) : t.fromByteArray(v.slice(u, p));
  }
  function B(v, u, p) {
    p = Math.min(v.length, p);
    const S = [];
    let R = u;
    for (; R < p; ) {
      const O = v[R];
      let $ = null, wt = O > 239 ? 4 : O > 223 ? 3 : O > 191 ? 2 : 1;
      if (R + wt <= p) {
        let qt, jt, Xt, Nt;
        switch (wt) {
          case 1:
            O < 128 && ($ = O);
            break;
          case 2:
            qt = v[R + 1], (qt & 192) === 128 && (Nt = (O & 31) << 6 | qt & 63, Nt > 127 && ($ = Nt));
            break;
          case 3:
            qt = v[R + 1], jt = v[R + 2], (qt & 192) === 128 && (jt & 192) === 128 && (Nt = (O & 15) << 12 | (qt & 63) << 6 | jt & 63, Nt > 2047 && (Nt < 55296 || Nt > 57343) && ($ = Nt));
            break;
          case 4:
            qt = v[R + 1], jt = v[R + 2], Xt = v[R + 3], (qt & 192) === 128 && (jt & 192) === 128 && (Xt & 192) === 128 && (Nt = (O & 15) << 18 | (qt & 63) << 12 | (jt & 63) << 6 | Xt & 63, Nt > 65535 && Nt < 1114112 && ($ = Nt));
        }
      }
      $ === null ? ($ = 65533, wt = 1) : $ > 65535 && ($ -= 65536, S.push($ >>> 10 & 1023 | 55296), $ = 56320 | $ & 1023), S.push($), R += wt;
    }
    return W(S);
  }
  const V = 4096;
  function W(v) {
    const u = v.length;
    if (u <= V)
      return String.fromCharCode.apply(String, v);
    let p = "", S = 0;
    for (; S < u; )
      p += String.fromCharCode.apply(
        String,
        v.slice(S, S += V)
      );
    return p;
  }
  function bt(v, u, p) {
    let S = "";
    p = Math.min(v.length, p);
    for (let R = u; R < p; ++R)
      S += String.fromCharCode(v[R] & 127);
    return S;
  }
  function ut(v, u, p) {
    let S = "";
    p = Math.min(v.length, p);
    for (let R = u; R < p; ++R)
      S += String.fromCharCode(v[R]);
    return S;
  }
  function z(v, u, p) {
    const S = v.length;
    (!u || u < 0) && (u = 0), (!p || p < 0 || p > S) && (p = S);
    let R = "";
    for (let O = u; O < p; ++O)
      R += Re[v[O]];
    return R;
  }
  function nt(v, u, p) {
    const S = v.slice(u, p);
    let R = "";
    for (let O = 0; O < S.length - 1; O += 2)
      R += String.fromCharCode(S[O] + S[O + 1] * 256);
    return R;
  }
  h.prototype.slice = function(u, p) {
    const S = this.length;
    u = ~~u, p = p === void 0 ? S : ~~p, u < 0 ? (u += S, u < 0 && (u = 0)) : u > S && (u = S), p < 0 ? (p += S, p < 0 && (p = 0)) : p > S && (p = S), p < u && (p = u);
    const R = this.subarray(u, p);
    return Object.setPrototypeOf(R, h.prototype), R;
  };
  function tt(v, u, p) {
    if (v % 1 !== 0 || v < 0)
      throw new RangeError("offset is not uint");
    if (v + u > p)
      throw new RangeError("Trying to access beyond buffer length");
  }
  h.prototype.readUintLE = h.prototype.readUIntLE = function(u, p, S) {
    u = u >>> 0, p = p >>> 0, S || tt(u, p, this.length);
    let R = this[u], O = 1, $ = 0;
    for (; ++$ < p && (O *= 256); )
      R += this[u + $] * O;
    return R;
  }, h.prototype.readUintBE = h.prototype.readUIntBE = function(u, p, S) {
    u = u >>> 0, p = p >>> 0, S || tt(u, p, this.length);
    let R = this[u + --p], O = 1;
    for (; p > 0 && (O *= 256); )
      R += this[u + --p] * O;
    return R;
  }, h.prototype.readUint8 = h.prototype.readUInt8 = function(u, p) {
    return u = u >>> 0, p || tt(u, 1, this.length), this[u];
  }, h.prototype.readUint16LE = h.prototype.readUInt16LE = function(u, p) {
    return u = u >>> 0, p || tt(u, 2, this.length), this[u] | this[u + 1] << 8;
  }, h.prototype.readUint16BE = h.prototype.readUInt16BE = function(u, p) {
    return u = u >>> 0, p || tt(u, 2, this.length), this[u] << 8 | this[u + 1];
  }, h.prototype.readUint32LE = h.prototype.readUInt32LE = function(u, p) {
    return u = u >>> 0, p || tt(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  }, h.prototype.readUint32BE = h.prototype.readUInt32BE = function(u, p) {
    return u = u >>> 0, p || tt(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  }, h.prototype.readBigUInt64LE = ce(function(u) {
    u = u >>> 0, X(u, "offset");
    const p = this[u], S = this[u + 7];
    (p === void 0 || S === void 0) && mt(u, this.length - 8);
    const R = p + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, O = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + S * 2 ** 24;
    return BigInt(R) + (BigInt(O) << BigInt(32));
  }), h.prototype.readBigUInt64BE = ce(function(u) {
    u = u >>> 0, X(u, "offset");
    const p = this[u], S = this[u + 7];
    (p === void 0 || S === void 0) && mt(u, this.length - 8);
    const R = p * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], O = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + S;
    return (BigInt(R) << BigInt(32)) + BigInt(O);
  }), h.prototype.readIntLE = function(u, p, S) {
    u = u >>> 0, p = p >>> 0, S || tt(u, p, this.length);
    let R = this[u], O = 1, $ = 0;
    for (; ++$ < p && (O *= 256); )
      R += this[u + $] * O;
    return O *= 128, R >= O && (R -= Math.pow(2, 8 * p)), R;
  }, h.prototype.readIntBE = function(u, p, S) {
    u = u >>> 0, p = p >>> 0, S || tt(u, p, this.length);
    let R = p, O = 1, $ = this[u + --R];
    for (; R > 0 && (O *= 256); )
      $ += this[u + --R] * O;
    return O *= 128, $ >= O && ($ -= Math.pow(2, 8 * p)), $;
  }, h.prototype.readInt8 = function(u, p) {
    return u = u >>> 0, p || tt(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
  }, h.prototype.readInt16LE = function(u, p) {
    u = u >>> 0, p || tt(u, 2, this.length);
    const S = this[u] | this[u + 1] << 8;
    return S & 32768 ? S | 4294901760 : S;
  }, h.prototype.readInt16BE = function(u, p) {
    u = u >>> 0, p || tt(u, 2, this.length);
    const S = this[u + 1] | this[u] << 8;
    return S & 32768 ? S | 4294901760 : S;
  }, h.prototype.readInt32LE = function(u, p) {
    return u = u >>> 0, p || tt(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  }, h.prototype.readInt32BE = function(u, p) {
    return u = u >>> 0, p || tt(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  }, h.prototype.readBigInt64LE = ce(function(u) {
    u = u >>> 0, X(u, "offset");
    const p = this[u], S = this[u + 7];
    (p === void 0 || S === void 0) && mt(u, this.length - 8);
    const R = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (S << 24);
    return (BigInt(R) << BigInt(32)) + BigInt(p + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24);
  }), h.prototype.readBigInt64BE = ce(function(u) {
    u = u >>> 0, X(u, "offset");
    const p = this[u], S = this[u + 7];
    (p === void 0 || S === void 0) && mt(u, this.length - 8);
    const R = (p << 24) + // Overflow
    this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
    return (BigInt(R) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + S);
  }), h.prototype.readFloatLE = function(u, p) {
    return u = u >>> 0, p || tt(u, 4, this.length), e.read(this, u, !0, 23, 4);
  }, h.prototype.readFloatBE = function(u, p) {
    return u = u >>> 0, p || tt(u, 4, this.length), e.read(this, u, !1, 23, 4);
  }, h.prototype.readDoubleLE = function(u, p) {
    return u = u >>> 0, p || tt(u, 8, this.length), e.read(this, u, !0, 52, 8);
  }, h.prototype.readDoubleBE = function(u, p) {
    return u = u >>> 0, p || tt(u, 8, this.length), e.read(this, u, !1, 52, 8);
  };
  function et(v, u, p, S, R, O) {
    if (!h.isBuffer(v))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > R || u < O)
      throw new RangeError('"value" argument is out of bounds');
    if (p + S > v.length)
      throw new RangeError("Index out of range");
  }
  h.prototype.writeUintLE = h.prototype.writeUIntLE = function(u, p, S, R) {
    if (u = +u, p = p >>> 0, S = S >>> 0, !R) {
      const wt = Math.pow(2, 8 * S) - 1;
      et(this, u, p, S, wt, 0);
    }
    let O = 1, $ = 0;
    for (this[p] = u & 255; ++$ < S && (O *= 256); )
      this[p + $] = u / O & 255;
    return p + S;
  }, h.prototype.writeUintBE = h.prototype.writeUIntBE = function(u, p, S, R) {
    if (u = +u, p = p >>> 0, S = S >>> 0, !R) {
      const wt = Math.pow(2, 8 * S) - 1;
      et(this, u, p, S, wt, 0);
    }
    let O = S - 1, $ = 1;
    for (this[p + O] = u & 255; --O >= 0 && ($ *= 256); )
      this[p + O] = u / $ & 255;
    return p + S;
  }, h.prototype.writeUint8 = h.prototype.writeUInt8 = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 1, 255, 0), this[p] = u & 255, p + 1;
  }, h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 2, 65535, 0), this[p] = u & 255, this[p + 1] = u >>> 8, p + 2;
  }, h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 2, 65535, 0), this[p] = u >>> 8, this[p + 1] = u & 255, p + 2;
  }, h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 4, 4294967295, 0), this[p + 3] = u >>> 24, this[p + 2] = u >>> 16, this[p + 1] = u >>> 8, this[p] = u & 255, p + 4;
  }, h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 4, 4294967295, 0), this[p] = u >>> 24, this[p + 1] = u >>> 16, this[p + 2] = u >>> 8, this[p + 3] = u & 255, p + 4;
  };
  function lt(v, u, p, S, R) {
    vt(u, S, R, v, p, 7);
    let O = Number(u & BigInt(4294967295));
    v[p++] = O, O = O >> 8, v[p++] = O, O = O >> 8, v[p++] = O, O = O >> 8, v[p++] = O;
    let $ = Number(u >> BigInt(32) & BigInt(4294967295));
    return v[p++] = $, $ = $ >> 8, v[p++] = $, $ = $ >> 8, v[p++] = $, $ = $ >> 8, v[p++] = $, p;
  }
  function K(v, u, p, S, R) {
    vt(u, S, R, v, p, 7);
    let O = Number(u & BigInt(4294967295));
    v[p + 7] = O, O = O >> 8, v[p + 6] = O, O = O >> 8, v[p + 5] = O, O = O >> 8, v[p + 4] = O;
    let $ = Number(u >> BigInt(32) & BigInt(4294967295));
    return v[p + 3] = $, $ = $ >> 8, v[p + 2] = $, $ = $ >> 8, v[p + 1] = $, $ = $ >> 8, v[p] = $, p + 8;
  }
  h.prototype.writeBigUInt64LE = ce(function(u, p = 0) {
    return lt(this, u, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), h.prototype.writeBigUInt64BE = ce(function(u, p = 0) {
    return K(this, u, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), h.prototype.writeIntLE = function(u, p, S, R) {
    if (u = +u, p = p >>> 0, !R) {
      const qt = Math.pow(2, 8 * S - 1);
      et(this, u, p, S, qt - 1, -qt);
    }
    let O = 0, $ = 1, wt = 0;
    for (this[p] = u & 255; ++O < S && ($ *= 256); )
      u < 0 && wt === 0 && this[p + O - 1] !== 0 && (wt = 1), this[p + O] = (u / $ >> 0) - wt & 255;
    return p + S;
  }, h.prototype.writeIntBE = function(u, p, S, R) {
    if (u = +u, p = p >>> 0, !R) {
      const qt = Math.pow(2, 8 * S - 1);
      et(this, u, p, S, qt - 1, -qt);
    }
    let O = S - 1, $ = 1, wt = 0;
    for (this[p + O] = u & 255; --O >= 0 && ($ *= 256); )
      u < 0 && wt === 0 && this[p + O + 1] !== 0 && (wt = 1), this[p + O] = (u / $ >> 0) - wt & 255;
    return p + S;
  }, h.prototype.writeInt8 = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[p] = u & 255, p + 1;
  }, h.prototype.writeInt16LE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 2, 32767, -32768), this[p] = u & 255, this[p + 1] = u >>> 8, p + 2;
  }, h.prototype.writeInt16BE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 2, 32767, -32768), this[p] = u >>> 8, this[p + 1] = u & 255, p + 2;
  }, h.prototype.writeInt32LE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 4, 2147483647, -2147483648), this[p] = u & 255, this[p + 1] = u >>> 8, this[p + 2] = u >>> 16, this[p + 3] = u >>> 24, p + 4;
  }, h.prototype.writeInt32BE = function(u, p, S) {
    return u = +u, p = p >>> 0, S || et(this, u, p, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[p] = u >>> 24, this[p + 1] = u >>> 16, this[p + 2] = u >>> 8, this[p + 3] = u & 255, p + 4;
  }, h.prototype.writeBigInt64LE = ce(function(u, p = 0) {
    return lt(this, u, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), h.prototype.writeBigInt64BE = ce(function(u, p = 0) {
    return K(this, u, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function gt(v, u, p, S, R, O) {
    if (p + S > v.length)
      throw new RangeError("Index out of range");
    if (p < 0)
      throw new RangeError("Index out of range");
  }
  function q(v, u, p, S, R) {
    return u = +u, p = p >>> 0, R || gt(v, u, p, 4), e.write(v, u, p, S, 23, 4), p + 4;
  }
  h.prototype.writeFloatLE = function(u, p, S) {
    return q(this, u, p, !0, S);
  }, h.prototype.writeFloatBE = function(u, p, S) {
    return q(this, u, p, !1, S);
  };
  function J(v, u, p, S, R) {
    return u = +u, p = p >>> 0, R || gt(v, u, p, 8), e.write(v, u, p, S, 52, 8), p + 8;
  }
  h.prototype.writeDoubleLE = function(u, p, S) {
    return J(this, u, p, !0, S);
  }, h.prototype.writeDoubleBE = function(u, p, S) {
    return J(this, u, p, !1, S);
  }, h.prototype.copy = function(u, p, S, R) {
    if (!h.isBuffer(u))
      throw new TypeError("argument should be a Buffer");
    if (S || (S = 0), !R && R !== 0 && (R = this.length), p >= u.length && (p = u.length), p || (p = 0), R > 0 && R < S && (R = S), R === S || u.length === 0 || this.length === 0)
      return 0;
    if (p < 0)
      throw new RangeError("targetStart out of bounds");
    if (S < 0 || S >= this.length)
      throw new RangeError("Index out of range");
    if (R < 0)
      throw new RangeError("sourceEnd out of bounds");
    R > this.length && (R = this.length), u.length - p < R - S && (R = u.length - p + S);
    const O = R - S;
    return this === u && typeof s.prototype.copyWithin == "function" ? this.copyWithin(p, S, R) : s.prototype.set.call(
      u,
      this.subarray(S, R),
      p
    ), O;
  }, h.prototype.fill = function(u, p, S, R) {
    if (typeof u == "string") {
      if (typeof p == "string" ? (R = p, p = 0, S = this.length) : typeof S == "string" && (R = S, S = this.length), R !== void 0 && typeof R != "string")
        throw new TypeError("encoding must be a string");
      if (typeof R == "string" && !h.isEncoding(R))
        throw new TypeError("Unknown encoding: " + R);
      if (u.length === 1) {
        const $ = u.charCodeAt(0);
        (R === "utf8" && $ < 128 || R === "latin1") && (u = $);
      }
    } else
      typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
    if (p < 0 || this.length < p || this.length < S)
      throw new RangeError("Out of range index");
    if (S <= p)
      return this;
    p = p >>> 0, S = S === void 0 ? this.length : S >>> 0, u || (u = 0);
    let O;
    if (typeof u == "number")
      for (O = p; O < S; ++O)
        this[O] = u;
    else {
      const $ = h.isBuffer(u) ? u : h.from(u, R), wt = $.length;
      if (wt === 0)
        throw new TypeError('The value "' + u + '" is invalid for argument "value"');
      for (O = 0; O < S - p; ++O)
        this[O + p] = $[O % wt];
    }
    return this;
  };
  const ct = {};
  function ft(v, u, p) {
    ct[v] = class extends p {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: u.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${v}]`, this.stack, delete this.name;
      }
      get code() {
        return v;
      }
      set code(R) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: R,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${v}]: ${this.message}`;
      }
    };
  }
  ft(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(v) {
      return v ? `${v} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), ft(
    "ERR_INVALID_ARG_TYPE",
    function(v, u) {
      return `The "${v}" argument must be of type number. Received type ${typeof u}`;
    },
    TypeError
  ), ft(
    "ERR_OUT_OF_RANGE",
    function(v, u, p) {
      let S = `The value of "${v}" is out of range.`, R = p;
      return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? R = rt(String(p)) : typeof p == "bigint" && (R = String(p), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (R = rt(R)), R += "n"), S += ` It must be ${u}. Received ${R}`, S;
    },
    RangeError
  );
  function rt(v) {
    let u = "", p = v.length;
    const S = v[0] === "-" ? 1 : 0;
    for (; p >= S + 4; p -= 3)
      u = `_${v.slice(p - 3, p)}${u}`;
    return `${v.slice(0, p)}${u}`;
  }
  function Et(v, u, p) {
    X(u, "offset"), (v[u] === void 0 || v[u + p] === void 0) && mt(u, v.length - (p + 1));
  }
  function vt(v, u, p, S, R, O) {
    if (v > p || v < u) {
      const $ = typeof u == "bigint" ? "n" : "";
      let wt;
      throw u === 0 || u === BigInt(0) ? wt = `>= 0${$} and < 2${$} ** ${(O + 1) * 8}${$}` : wt = `>= -(2${$} ** ${(O + 1) * 8 - 1}${$}) and < 2 ** ${(O + 1) * 8 - 1}${$}`, new ct.ERR_OUT_OF_RANGE("value", wt, v);
    }
    Et(S, R, O);
  }
  function X(v, u) {
    if (typeof v != "number")
      throw new ct.ERR_INVALID_ARG_TYPE(u, "number", v);
  }
  function mt(v, u, p) {
    throw Math.floor(v) !== v ? (X(v, p), new ct.ERR_OUT_OF_RANGE("offset", "an integer", v)) : u < 0 ? new ct.ERR_BUFFER_OUT_OF_BOUNDS() : new ct.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${u}`,
      v
    );
  }
  const Ct = /[^+/0-9A-Za-z-_]/g;
  function Ht(v) {
    if (v = v.split("=")[0], v = v.trim().replace(Ct, ""), v.length < 2)
      return "";
    for (; v.length % 4 !== 0; )
      v = v + "=";
    return v;
  }
  function Kt(v, u) {
    u = u || 1 / 0;
    let p;
    const S = v.length;
    let R = null;
    const O = [];
    for (let $ = 0; $ < S; ++$) {
      if (p = v.charCodeAt($), p > 55295 && p < 57344) {
        if (!R) {
          if (p > 56319) {
            (u -= 3) > -1 && O.push(239, 191, 189);
            continue;
          } else if ($ + 1 === S) {
            (u -= 3) > -1 && O.push(239, 191, 189);
            continue;
          }
          R = p;
          continue;
        }
        if (p < 56320) {
          (u -= 3) > -1 && O.push(239, 191, 189), R = p;
          continue;
        }
        p = (R - 55296 << 10 | p - 56320) + 65536;
      } else
        R && (u -= 3) > -1 && O.push(239, 191, 189);
      if (R = null, p < 128) {
        if ((u -= 1) < 0)
          break;
        O.push(p);
      } else if (p < 2048) {
        if ((u -= 2) < 0)
          break;
        O.push(
          p >> 6 | 192,
          p & 63 | 128
        );
      } else if (p < 65536) {
        if ((u -= 3) < 0)
          break;
        O.push(
          p >> 12 | 224,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else if (p < 1114112) {
        if ((u -= 4) < 0)
          break;
        O.push(
          p >> 18 | 240,
          p >> 12 & 63 | 128,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return O;
  }
  function Vt(v) {
    const u = [];
    for (let p = 0; p < v.length; ++p)
      u.push(v.charCodeAt(p) & 255);
    return u;
  }
  function Rt(v, u) {
    let p, S, R;
    const O = [];
    for (let $ = 0; $ < v.length && !((u -= 2) < 0); ++$)
      p = v.charCodeAt($), S = p >> 8, R = p % 256, O.push(R), O.push(S);
    return O;
  }
  function kt(v) {
    return t.toByteArray(Ht(v));
  }
  function Wt(v, u, p, S) {
    let R;
    for (R = 0; R < S && !(R + p >= u.length || R >= v.length); ++R)
      u[R + p] = v[R];
    return R;
  }
  function ot(v, u) {
    return v instanceof u || v != null && v.constructor != null && v.constructor.name != null && v.constructor.name === u.name;
  }
  function Pe(v) {
    return v !== v;
  }
  const Re = function() {
    const v = "0123456789abcdef", u = new Array(256);
    for (let p = 0; p < 16; ++p) {
      const S = p * 16;
      for (let R = 0; R < 16; ++R)
        u[S + R] = v[p] + v[R];
    }
    return u;
  }();
  function ce(v) {
    return typeof BigInt > "u" ? nn : v;
  }
  function nn() {
    throw new Error("BigInt not supported");
  }
})(le);
const Ep = le.Buffer, E_ = le.Blob, S_ = le.BlobOptions, x_ = le.Buffer, C_ = le.File, T_ = le.FileOptions, P_ = le.INSPECT_MAX_BYTES, R_ = le.SlowBuffer, k_ = le.TranscodeEncoding, L_ = le.atob, I_ = le.btoa, F_ = le.constants, M_ = le.isAscii, D_ = le.isUtf8, N_ = le.kMaxLength, O_ = le.kStringMaxLength, B_ = le.resolveObjectURL, $_ = le.transcode, GT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Blob: E_,
  BlobOptions: S_,
  Buffer: x_,
  File: C_,
  FileOptions: T_,
  INSPECT_MAX_BYTES: P_,
  SlowBuffer: R_,
  TranscodeEncoding: k_,
  atob: L_,
  btoa: I_,
  constants: F_,
  default: Ep,
  isAscii: M_,
  isUtf8: D_,
  kMaxLength: N_,
  kStringMaxLength: O_,
  resolveObjectURL: B_,
  transcode: $_
}, Symbol.toStringTag, { value: "Module" }));
var rl = {};
rl.d = (r, t) => {
  for (var e in t)
    rl.o(t, e) && !rl.o(r, e) && Object.defineProperty(r, e, { enumerable: !0, get: t[e] });
};
rl.o = (r, t) => Object.prototype.hasOwnProperty.call(r, t);
var st = globalThis.pdfjsLib = {};
rl.d(st, {
  AbortException: () => (
    /* reexport */
    Xr
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    Dg
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    at
  ),
  AnnotationEditorType: () => (
    /* reexport */
    _t
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    Gr
  ),
  AnnotationLayer: () => (
    /* reexport */
    OS
  ),
  AnnotationMode: () => (
    /* reexport */
    Vi
  ),
  CMapCompressionType: () => (
    /* reexport */
    xp
  ),
  ColorPicker: () => (
    /* reexport */
    Dd
  ),
  DOMSVGFactory: () => (
    /* reexport */
    sm
  ),
  DrawLayer: () => (
    /* reexport */
    $g
  ),
  FeatureTest: () => (
    /* reexport */
    je
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    Ni
  ),
  ImageKind: () => (
    /* reexport */
    nd
  ),
  InvalidPDFException: () => (
    /* reexport */
    ey
  ),
  MissingPDFException: () => (
    /* reexport */
    qr
  ),
  OPS: () => (
    /* reexport */
    pn
  ),
  Outliner: () => (
    /* reexport */
    mg
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    qy
  ),
  PDFDateString: () => (
    /* reexport */
    ly
  ),
  PDFWorker: () => (
    /* reexport */
    ao
  ),
  PasswordResponses: () => (
    /* reexport */
    j_
  ),
  PermissionFlag: () => (
    /* reexport */
    z_
  ),
  PixelsPerInch: () => (
    /* reexport */
    vs
  ),
  RenderingCancelledException: () => (
    /* reexport */
    rm
  ),
  TextLayer: () => (
    /* reexport */
    Fd
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    Df
  ),
  Util: () => (
    /* reexport */
    Q
  ),
  VerbosityLevel: () => (
    /* reexport */
    If
  ),
  XfaLayer: () => (
    /* reexport */
    Yy
  ),
  build: () => (
    /* reexport */
    yS
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    q_
  ),
  fetchData: () => (
    /* reexport */
    Uf
  ),
  getDocument: () => (
    /* reexport */
    lS
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    iE
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    sE
  ),
  getXfaPageViewport: () => (
    /* reexport */
    rE
  ),
  isDataScheme: () => (
    /* reexport */
    om
  ),
  isPdfFile: () => (
    /* reexport */
    am
  ),
  noContextMenu: () => (
    /* reexport */
    Ge
  ),
  normalizeUnicode: () => (
    /* reexport */
    Q_
  ),
  renderTextLayer: () => (
    /* reexport */
    QE
  ),
  setLayerDimensions: () => (
    /* reexport */
    jr
  ),
  shadow: () => (
    /* reexport */
    xt
  ),
  updateTextLayer: () => (
    /* reexport */
    tS
  ),
  version: () => (
    /* reexport */
    mS
  )
});
const Te = typeof dt == "object" && dt + "" == "[object process]" && !dt.versions.nw && !(dt.versions.electron && dt.type && dt.type !== "browser"), ty = [1, 0, 0, 1, 0, 0], Sp = [1e-3, 0, 0, 1e-3, 0, 0], H_ = 1e7, ip = 1.35, hn = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  SAVE: 8,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  OPLIST: 256
}, Vi = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, U_ = "pdfjs_internal_editor_", _t = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, at = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35
}, z_ = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, Ee = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, nd = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, ne = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
}, $a = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, If = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, xp = {
  NONE: 0,
  BINARY: 1
}, pn = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
}, j_ = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let Ff = If.WARNINGS;
function G_(r) {
  Number.isInteger(r) && (Ff = r);
}
function V_() {
  return Ff;
}
function Mf(r) {
  Ff >= If.INFOS && console.log(`Info: ${r}`);
}
function yt(r) {
  Ff >= If.WARNINGS && console.log(`Warning: ${r}`);
}
function Dt(r) {
  throw new Error(r);
}
function ae(r, t) {
  r || Dt(t);
}
function W_(r) {
  switch (r == null ? void 0 : r.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function q_(r, t = null, e = null) {
  if (!r)
    return null;
  try {
    if (e && typeof r == "string") {
      if (e.addDefaultProtocol && r.startsWith("www.")) {
        const i = r.match(/\./g);
        (i == null ? void 0 : i.length) >= 2 && (r = `http://${r}`);
      }
      if (e.tryConvertEncoding)
        try {
          r = J_(r);
        } catch {
        }
    }
    const n = t ? new URL(r, t) : new URL(r);
    if (W_(n))
      return n;
  } catch {
  }
  return null;
}
function xt(r, t, e, n = !1) {
  return Object.defineProperty(r, t, {
    value: e,
    enumerable: !n,
    configurable: !0,
    writable: !1
  }), e;
}
const As = function() {
  function t(e, n) {
    this.constructor === t && Dt("Cannot initialize BaseException."), this.message = e, this.name = n;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}();
class Cp extends As {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class Tp extends As {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class ey extends As {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class qr extends As {
  constructor(t) {
    super(t, "MissingPDFException");
  }
}
class Df extends As {
  constructor(t, e) {
    super(t, "UnexpectedResponseException"), this.status = e;
  }
}
class X_ extends As {
  constructor(t) {
    super(t, "FormatError");
  }
}
class Xr extends As {
  constructor(t) {
    super(t, "AbortException");
  }
}
function ny(r) {
  (typeof r != "object" || (r == null ? void 0 : r.length) === void 0) && Dt("Invalid argument for bytesToString");
  const t = r.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, r);
  const n = [];
  for (let i = 0; i < t; i += e) {
    const s = Math.min(i + e, t), o = r.subarray(i, s);
    n.push(String.fromCharCode.apply(null, o));
  }
  return n.join("");
}
function Nf(r) {
  typeof r != "string" && Dt("Invalid argument for stringToBytes");
  const t = r.length, e = new Uint8Array(t);
  for (let n = 0; n < t; ++n)
    e[n] = r.charCodeAt(n) & 255;
  return e;
}
function Y_(r) {
  return String.fromCharCode(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, r & 255);
}
function nm(r) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [e, n] of r)
    t[e] = n;
  return t;
}
function K_() {
  const r = new Uint8Array(4);
  return r[0] = 1, new Uint32Array(r.buffer, 0, 1)[0] === 1;
}
function Z_() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class je {
  static get isLittleEndian() {
    return xt(this, "isLittleEndian", K_());
  }
  static get isEvalSupported() {
    return xt(this, "isEvalSupported", Z_());
  }
  static get isOffscreenCanvasSupported() {
    return xt(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? xt(this, "platform", {
      isMac: navigator.platform.includes("Mac")
    }) : xt(this, "platform", {
      isMac: !1
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return xt(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const sp = Array.from(Array(256).keys(), (r) => r.toString(16).padStart(2, "0"));
var ho, id, ul, Pp;
class Q {
  static makeHexColor(t, e, n) {
    return `#${sp[t]}${sp[e]}${sp[n]}`;
  }
  static scaleMinMax(t, e) {
    let n;
    t[0] ? (t[0] < 0 && (n = e[0], e[0] = e[2], e[2] = n), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (n = e[1], e[1] = e[3], e[3] = n), e[1] *= t[3], e[3] *= t[3]) : (n = e[0], e[0] = e[1], e[1] = n, n = e[2], e[2] = e[3], e[3] = n, t[1] < 0 && (n = e[1], e[1] = e[3], e[3] = n), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (n = e[0], e[0] = e[2], e[2] = n), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static applyTransform(t, e) {
    const n = t[0] * e[0] + t[1] * e[2] + e[4], i = t[0] * e[1] + t[1] * e[3] + e[5];
    return [n, i];
  }
  static applyInverseTransform(t, e) {
    const n = e[0] * e[3] - e[1] * e[2], i = (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / n, s = (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / n;
    return [i, s];
  }
  static getAxialAlignedBoundingBox(t, e) {
    const n = this.applyTransform(t, e), i = this.applyTransform(t.slice(2, 4), e), s = this.applyTransform([t[0], t[3]], e), o = this.applyTransform([t[2], t[1]], e);
    return [Math.min(n[0], i[0], s[0], o[0]), Math.min(n[1], i[1], s[1], o[1]), Math.max(n[0], i[0], s[0], o[0]), Math.max(n[1], i[1], s[1], o[1])];
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t) {
    const e = [t[0], t[2], t[1], t[3]], n = t[0] * e[0] + t[1] * e[2], i = t[0] * e[1] + t[1] * e[3], s = t[2] * e[0] + t[3] * e[2], o = t[2] * e[1] + t[3] * e[3], l = (n + o) / 2, c = Math.sqrt((n + o) ** 2 - 4 * (n * o - s * i)) / 2, d = l + c || 1, h = l - c || 1;
    return [Math.sqrt(d), Math.sqrt(h)];
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const n = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (n > i)
      return null;
    const s = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), o = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return s > o ? null : [n, s, i, o];
  }
  static bezierBoundingBox(t, e, n, i, s, o, l, c, d) {
    return d ? (d[0] = Math.min(d[0], t, l), d[1] = Math.min(d[1], e, c), d[2] = Math.max(d[2], t, l), d[3] = Math.max(d[3], e, c)) : d = [Math.min(t, l), Math.min(e, c), Math.max(t, l), Math.max(e, c)], A(this, ul, Pp).call(this, t, n, s, l, e, i, o, c, 3 * (-t + 3 * (n - s) + l), 6 * (t - 2 * n + s), 3 * (n - t), d), A(this, ul, Pp).call(this, t, n, s, l, e, i, o, c, 3 * (-e + 3 * (i - o) + c), 6 * (e - 2 * i + o), 3 * (i - e), d), d;
  }
}
ho = new WeakSet(), id = function(t, e, n, i, s, o, l, c, d, h) {
  if (d <= 0 || d >= 1)
    return;
  const f = 1 - d, g = d * d, y = g * d, b = f * (f * (f * t + 3 * d * e) + 3 * g * n) + y * i, _ = f * (f * (f * s + 3 * d * o) + 3 * g * l) + y * c;
  h[0] = Math.min(h[0], b), h[1] = Math.min(h[1], _), h[2] = Math.max(h[2], b), h[3] = Math.max(h[3], _);
}, ul = new WeakSet(), Pp = function(t, e, n, i, s, o, l, c, d, h, f, g) {
  if (Math.abs(d) < 1e-12) {
    Math.abs(h) >= 1e-12 && A(this, ho, id).call(this, t, e, n, i, s, o, l, c, -f / h, g);
    return;
  }
  const y = h ** 2 - 4 * f * d;
  if (y < 0)
    return;
  const b = Math.sqrt(y), _ = 2 * d;
  A(this, ho, id).call(this, t, e, n, i, s, o, l, c, (-h + b) / _, g), A(this, ho, id).call(this, t, e, n, i, s, o, l, c, (-h - b) / _, g);
}, m(Q, ho), m(Q, ul);
function J_(r) {
  return decodeURIComponent(escape(r));
}
let rp = null, Hm = null;
function Q_(r) {
  return rp || (rp = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, Hm = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), r.replaceAll(rp, (t, e, n) => e ? e.normalize("NFKC") : Hm.get(n));
}
function tE() {
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function")
    return crypto.randomUUID();
  const r = new Uint8Array(32);
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function")
    crypto.getRandomValues(r);
  else
    for (let t = 0; t < 32; t++)
      r[t] = Math.floor(Math.random() * 255);
  return ny(r);
}
const iy = "pdfjs_internal_id_", Qn = {
  BEZIER_CURVE_TO: 0,
  MOVE_TO: 1,
  LINE_TO: 2,
  QUADRATIC_CURVE_TO: 3,
  RESTORE: 4,
  SAVE: 5,
  SCALE: 6,
  TRANSFORM: 7,
  TRANSLATE: 8
};
class Of {
  constructor() {
    this.constructor === Of && Dt("Cannot initialize BaseFilterFactory.");
  }
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, n, i, s) {
    return "none";
  }
  destroy(t = !1) {
  }
}
class Bf {
  constructor() {
    this.constructor === Bf && Dt("Cannot initialize BaseCanvasFactory.");
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const n = this._createCanvas(t, e);
    return {
      canvas: n,
      context: n.getContext("2d")
    };
  }
  reset(t, e, n) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    if (e <= 0 || n <= 0)
      throw new Error("Invalid canvas size");
    t.canvas.width = e, t.canvas.height = n;
  }
  destroy(t) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    Dt("Abstract method `_createCanvas` called.");
  }
}
class $f {
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0
  }) {
    this.constructor === $f && Dt("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = t, this.isCompressed = e;
  }
  async fetch({
    name: t
  }) {
    if (!this.baseUrl)
      throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
    if (!t)
      throw new Error("CMap name must be specified.");
    const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : ""), n = this.isCompressed ? xp.BINARY : xp.NONE;
    return this._fetchData(e, n).catch((i) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  _fetchData(t, e) {
    Dt("Abstract method `_fetchData` called.");
  }
}
class Hf {
  constructor({
    baseUrl: t = null
  }) {
    this.constructor === Hf && Dt("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
    if (!t)
      throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetchData(e).catch((n) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  _fetchData(t) {
    Dt("Abstract method `_fetchData` called.");
  }
}
class im {
  constructor() {
    this.constructor === im && Dt("Cannot initialize BaseSVGFactory.");
  }
  create(t, e, n = !1) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const i = this._createSVG("svg:svg");
    return i.setAttribute("version", "1.1"), n || (i.setAttribute("width", `${t}px`), i.setAttribute("height", `${e}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${t} ${e}`), i;
  }
  createElement(t) {
    if (typeof t != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    Dt("Abstract method `_createSVG` called.");
  }
}
const ei = "http://www.w3.org/2000/svg", Rs = class Rs {
};
ht(Rs, "CSS", 96), ht(Rs, "PDF", 72), ht(Rs, "PDF_TO_CSS_UNITS", Rs.CSS / Rs.PDF);
let vs = Rs;
var Fs, Ln, ai, Oe, $d, Ms, de, Se, qi, Jr, Xi, Qr, uo, sd, Hd, sy, fl, Rp, Yi, to, Ds, ja, Ns, Ga, pl, kp, Os, Va;
class eE extends Of {
  constructor({
    docId: e,
    ownerDocument: n = globalThis.document
  } = {}) {
    super();
    m(this, de);
    m(this, qi);
    m(this, Xi);
    m(this, uo);
    m(this, Hd);
    m(this, fl);
    m(this, Yi);
    m(this, Ds);
    m(this, Ns);
    m(this, pl);
    m(this, Os);
    m(this, Fs, void 0);
    m(this, Ln, void 0);
    m(this, ai, void 0);
    m(this, Oe, void 0);
    m(this, $d, void 0);
    m(this, Ms, 0);
    w(this, ai, e), w(this, Oe, n);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let n = a(this, de, Se).get(e);
    if (n)
      return n;
    const [i, s, o] = A(this, uo, sd).call(this, e), l = e.length === 1 ? i : `${i}${s}${o}`;
    if (n = a(this, de, Se).get(l), n)
      return a(this, de, Se).set(e, n), n;
    const c = `g_${a(this, ai)}_transfer_map_${Ve(this, Ms)._++}`, d = `url(#${c})`;
    a(this, de, Se).set(e, d), a(this, de, Se).set(l, d);
    const h = A(this, Yi, to).call(this, c);
    return A(this, Ns, Ga).call(this, i, s, o, h), d;
  }
  addHCMFilter(e, n) {
    var b;
    const i = `${e}-${n}`, s = "base";
    let o = a(this, qi, Jr).get(s);
    if ((o == null ? void 0 : o.key) === i || (o ? ((b = o.filter) == null || b.remove(), o.key = i, o.url = "none", o.filter = null) : (o = {
      key: i,
      url: "none",
      filter: null
    }, a(this, qi, Jr).set(s, o)), !e || !n))
      return o.url;
    const l = A(this, Os, Va).call(this, e);
    e = Q.makeHexColor(...l);
    const c = A(this, Os, Va).call(this, n);
    if (n = Q.makeHexColor(...c), a(this, Xi, Qr).style.color = "", e === "#000000" && n === "#ffffff" || e === n)
      return o.url;
    const d = new Array(256);
    for (let _ = 0; _ <= 255; _++) {
      const x = _ / 255;
      d[_] = x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
    }
    const h = d.join(","), f = `g_${a(this, ai)}_hcm_filter`, g = o.filter = A(this, Yi, to).call(this, f);
    A(this, Ns, Ga).call(this, h, h, h, g), A(this, fl, Rp).call(this, g);
    const y = (_, x) => {
      const E = l[_] / 255, P = c[_] / 255, k = new Array(x + 1);
      for (let L = 0; L <= x; L++)
        k[L] = E + L / x * (P - E);
      return k.join(",");
    };
    return A(this, Ns, Ga).call(this, y(0, 5), y(1, 5), y(2, 5), g), o.url = `url(#${f})`, o.url;
  }
  addAlphaFilter(e) {
    let n = a(this, de, Se).get(e);
    if (n)
      return n;
    const [i] = A(this, uo, sd).call(this, [e]), s = `alpha_${i}`;
    if (n = a(this, de, Se).get(s), n)
      return a(this, de, Se).set(e, n), n;
    const o = `g_${a(this, ai)}_alpha_map_${Ve(this, Ms)._++}`, l = `url(#${o})`;
    a(this, de, Se).set(e, l), a(this, de, Se).set(s, l);
    const c = A(this, Yi, to).call(this, o);
    return A(this, pl, kp).call(this, i, c), l;
  }
  addLuminosityFilter(e) {
    let n = a(this, de, Se).get(e || "luminosity");
    if (n)
      return n;
    let i, s;
    if (e ? ([i] = A(this, uo, sd).call(this, [e]), s = `luminosity_${i}`) : s = "luminosity", n = a(this, de, Se).get(s), n)
      return a(this, de, Se).set(e, n), n;
    const o = `g_${a(this, ai)}_luminosity_map_${Ve(this, Ms)._++}`, l = `url(#${o})`;
    a(this, de, Se).set(e, l), a(this, de, Se).set(s, l);
    const c = A(this, Yi, to).call(this, o);
    return A(this, Hd, sy).call(this, c), e && A(this, pl, kp).call(this, i, c), l;
  }
  addHighlightHCMFilter(e, n, i, s, o) {
    var P;
    const l = `${n}-${i}-${s}-${o}`;
    let c = a(this, qi, Jr).get(e);
    if ((c == null ? void 0 : c.key) === l || (c ? ((P = c.filter) == null || P.remove(), c.key = l, c.url = "none", c.filter = null) : (c = {
      key: l,
      url: "none",
      filter: null
    }, a(this, qi, Jr).set(e, c)), !n || !i))
      return c.url;
    const [d, h] = [n, i].map(A(this, Os, Va).bind(this));
    let f = Math.round(0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]), g = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), [y, b] = [s, o].map(A(this, Os, Va).bind(this));
    g < f && ([f, g, y, b] = [g, f, b, y]), a(this, Xi, Qr).style.color = "";
    const _ = (k, L, F) => {
      const I = new Array(256), M = (g - f) / F, C = k / 255, T = (L - k) / (255 * F);
      let N = 0;
      for (let D = 0; D <= F; D++) {
        const H = Math.round(f + D * M), U = C + D * T;
        for (let G = N; G <= H; G++)
          I[G] = U;
        N = H + 1;
      }
      for (let D = N; D < 256; D++)
        I[D] = I[N - 1];
      return I.join(",");
    }, x = `g_${a(this, ai)}_hcm_${e}_filter`, E = c.filter = A(this, Yi, to).call(this, x);
    return A(this, fl, Rp).call(this, E), A(this, Ns, Ga).call(this, _(y[0], b[0], 5), _(y[1], b[1], 5), _(y[2], b[2], 5), E), c.url = `url(#${x})`, c.url;
  }
  destroy(e = !1) {
    e && a(this, qi, Jr).size !== 0 || (a(this, Ln) && (a(this, Ln).parentNode.parentNode.remove(), w(this, Ln, null)), a(this, Fs) && (a(this, Fs).clear(), w(this, Fs, null)), w(this, Ms, 0));
  }
}
Fs = new WeakMap(), Ln = new WeakMap(), ai = new WeakMap(), Oe = new WeakMap(), $d = new WeakMap(), Ms = new WeakMap(), de = new WeakSet(), Se = function() {
  return a(this, Fs) || w(this, Fs, /* @__PURE__ */ new Map());
}, qi = new WeakSet(), Jr = function() {
  return a(this, $d) || w(this, $d, /* @__PURE__ */ new Map());
}, Xi = new WeakSet(), Qr = function() {
  if (!a(this, Ln)) {
    const e = a(this, Oe).createElement("div"), {
      style: n
    } = e;
    n.visibility = "hidden", n.contain = "strict", n.width = n.height = 0, n.position = "absolute", n.top = n.left = 0, n.zIndex = -1;
    const i = a(this, Oe).createElementNS(ei, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), w(this, Ln, a(this, Oe).createElementNS(ei, "defs")), e.append(i), i.append(a(this, Ln)), a(this, Oe).body.append(e);
  }
  return a(this, Ln);
}, uo = new WeakSet(), sd = function(e) {
  if (e.length === 1) {
    const d = e[0], h = new Array(256);
    for (let g = 0; g < 256; g++)
      h[g] = d[g] / 255;
    const f = h.join(",");
    return [f, f, f];
  }
  const [n, i, s] = e, o = new Array(256), l = new Array(256), c = new Array(256);
  for (let d = 0; d < 256; d++)
    o[d] = n[d] / 255, l[d] = i[d] / 255, c[d] = s[d] / 255;
  return [o.join(","), l.join(","), c.join(",")];
}, Hd = new WeakSet(), sy = function(e) {
  const n = a(this, Oe).createElementNS(ei, "feColorMatrix");
  n.setAttribute("type", "matrix"), n.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(n);
}, fl = new WeakSet(), Rp = function(e) {
  const n = a(this, Oe).createElementNS(ei, "feColorMatrix");
  n.setAttribute("type", "matrix"), n.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(n);
}, Yi = new WeakSet(), to = function(e) {
  const n = a(this, Oe).createElementNS(ei, "filter");
  return n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("id", e), a(this, Xi, Qr).append(n), n;
}, Ds = new WeakSet(), ja = function(e, n, i) {
  const s = a(this, Oe).createElementNS(ei, n);
  s.setAttribute("type", "discrete"), s.setAttribute("tableValues", i), e.append(s);
}, Ns = new WeakSet(), Ga = function(e, n, i, s) {
  const o = a(this, Oe).createElementNS(ei, "feComponentTransfer");
  s.append(o), A(this, Ds, ja).call(this, o, "feFuncR", e), A(this, Ds, ja).call(this, o, "feFuncG", n), A(this, Ds, ja).call(this, o, "feFuncB", i);
}, pl = new WeakSet(), kp = function(e, n) {
  const i = a(this, Oe).createElementNS(ei, "feComponentTransfer");
  n.append(i), A(this, Ds, ja).call(this, i, "feFuncA", e);
}, Os = new WeakSet(), Va = function(e) {
  return a(this, Xi, Qr).style.color = e, lm(getComputedStyle(a(this, Xi, Qr)).getPropertyValue("color"));
};
class nE extends Bf {
  constructor({
    ownerDocument: t = globalThis.document
  } = {}) {
    super(), this._document = t;
  }
  _createCanvas(t, e) {
    const n = this._document.createElement("canvas");
    return n.width = t, n.height = e, n;
  }
}
async function Uf(r, t = "text") {
  if (Wa(r, document.baseURI)) {
    const e = await fetch(r);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (t) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, n) => {
    const i = new XMLHttpRequest();
    i.open("GET", r, !0), i.responseType = t, i.onreadystatechange = () => {
      if (i.readyState === XMLHttpRequest.DONE) {
        if (i.status === 200 || i.status === 0) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              e(i.response);
              return;
          }
          e(i.responseText);
          return;
        }
        n(new Error(i.statusText));
      }
    }, i.send(null);
  });
}
class ry extends $f {
  _fetchData(t, e) {
    return Uf(t, this.isCompressed ? "arraybuffer" : "text").then((n) => ({
      cMapData: n instanceof ArrayBuffer ? new Uint8Array(n) : Nf(n),
      compressionType: e
    }));
  }
}
class oy extends Hf {
  _fetchData(t) {
    return Uf(t, "arraybuffer").then((e) => new Uint8Array(e));
  }
}
class sm extends im {
  _createSVG(t) {
    return document.createElementNS(ei, t);
  }
}
class Fh {
  constructor({
    viewBox: t,
    scale: e,
    rotation: n,
    offsetX: i = 0,
    offsetY: s = 0,
    dontFlip: o = !1
  }) {
    this.viewBox = t, this.scale = e, this.rotation = n, this.offsetX = i, this.offsetY = s;
    const l = (t[2] + t[0]) / 2, c = (t[3] + t[1]) / 2;
    let d, h, f, g;
    switch (n %= 360, n < 0 && (n += 360), n) {
      case 180:
        d = -1, h = 0, f = 0, g = 1;
        break;
      case 90:
        d = 0, h = 1, f = 1, g = 0;
        break;
      case 270:
        d = 0, h = -1, f = -1, g = 0;
        break;
      case 0:
        d = 1, h = 0, f = 0, g = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (f = -f, g = -g);
    let y, b, _, x;
    d === 0 ? (y = Math.abs(c - t[1]) * e + i, b = Math.abs(l - t[0]) * e + s, _ = (t[3] - t[1]) * e, x = (t[2] - t[0]) * e) : (y = Math.abs(l - t[0]) * e + i, b = Math.abs(c - t[1]) * e + s, _ = (t[2] - t[0]) * e, x = (t[3] - t[1]) * e), this.transform = [d * e, h * e, f * e, g * e, y - d * e * l - f * e * c, b - h * e * l - g * e * c], this.width = _, this.height = x;
  }
  get rawDims() {
    const {
      viewBox: t
    } = this;
    return xt(this, "rawDims", {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: n = this.offsetX,
    offsetY: i = this.offsetY,
    dontFlip: s = !1
  } = {}) {
    return new Fh({
      viewBox: this.viewBox.slice(),
      scale: t,
      rotation: e,
      offsetX: n,
      offsetY: i,
      dontFlip: s
    });
  }
  convertToViewportPoint(t, e) {
    return Q.applyTransform([t, e], this.transform);
  }
  convertToViewportRectangle(t) {
    const e = Q.applyTransform([t[0], t[1]], this.transform), n = Q.applyTransform([t[2], t[3]], this.transform);
    return [e[0], e[1], n[0], n[1]];
  }
  convertToPdfPoint(t, e) {
    return Q.applyInverseTransform([t, e], this.transform);
  }
}
class rm extends As {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function om(r) {
  const t = r.length;
  let e = 0;
  for (; e < t && r[e].trim() === ""; )
    e++;
  return r.substring(e, e + 5).toLowerCase() === "data:";
}
function am(r) {
  return typeof r == "string" && /\.pdf$/i.test(r);
}
function iE(r) {
  return [r] = r.split(/[#?]/, 1), r.substring(r.lastIndexOf("/") + 1);
}
function sE(r, t = "document.pdf") {
  if (typeof r != "string")
    return t;
  if (om(r))
    return yt('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, n = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, i = e.exec(r);
  let s = n.exec(i[1]) || n.exec(i[2]) || n.exec(i[3]);
  if (s && (s = s[0], s.includes("%")))
    try {
      s = n.exec(decodeURIComponent(s))[0];
    } catch {
    }
  return s || t;
}
class Um {
  constructor() {
    ht(this, "started", /* @__PURE__ */ Object.create(null));
    ht(this, "times", []);
  }
  time(t) {
    t in this.started && yt(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || yt(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now()
    }), delete this.started[t];
  }
  toString() {
    const t = [];
    let e = 0;
    for (const {
      name: n
    } of this.times)
      e = Math.max(n.length, e);
    for (const {
      name: n,
      start: i,
      end: s
    } of this.times)
      t.push(`${n.padEnd(e)} ${s - i}ms
`);
    return t.join("");
  }
}
function Wa(r, t) {
  try {
    const {
      protocol: e
    } = t ? new URL(r, t) : new URL(r);
    return e === "http:" || e === "https:";
  } catch {
    return !1;
  }
}
function Ge(r) {
  r.preventDefault();
}
function ay(r) {
  console.log("Deprecated API usage: " + r);
}
let zm;
class ly {
  static toDateObject(t) {
    if (!t || typeof t != "string")
      return null;
    zm || (zm = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = zm.exec(t);
    if (!e)
      return null;
    const n = parseInt(e[1], 10);
    let i = parseInt(e[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
    let s = parseInt(e[3], 10);
    s = s >= 1 && s <= 31 ? s : 1;
    let o = parseInt(e[4], 10);
    o = o >= 0 && o <= 23 ? o : 0;
    let l = parseInt(e[5], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    let c = parseInt(e[6], 10);
    c = c >= 0 && c <= 59 ? c : 0;
    const d = e[7] || "Z";
    let h = parseInt(e[8], 10);
    h = h >= 0 && h <= 23 ? h : 0;
    let f = parseInt(e[9], 10) || 0;
    return f = f >= 0 && f <= 59 ? f : 0, d === "-" ? (o += h, l += f) : d === "+" && (o -= h, l -= f), new Date(Date.UTC(n, i, s, o, l, c));
  }
}
function rE(r, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: n,
    height: i
  } = r.attributes.style, s = [0, 0, parseInt(n), parseInt(i)];
  return new Fh({
    viewBox: s,
    scale: t,
    rotation: e
  });
}
function lm(r) {
  if (r.startsWith("#")) {
    const t = parseInt(r.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return r.startsWith("rgb(") ? r.slice(4, -1).split(",").map((t) => parseInt(t)) : r.startsWith("rgba(") ? r.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (yt(`Not a valid color format: "${r}"`), [0, 0, 0]);
}
function oE(r) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", document.body.append(t);
  for (const e of r.keys()) {
    t.style.color = e;
    const n = window.getComputedStyle(t).color;
    r.set(e, lm(n));
  }
  t.remove();
}
function Gt(r) {
  const {
    a: t,
    b: e,
    c: n,
    d: i,
    e: s,
    f: o
  } = r.getTransform();
  return [t, e, n, i, s, o];
}
function ti(r) {
  const {
    a: t,
    b: e,
    c: n,
    d: i,
    e: s,
    f: o
  } = r.getTransform().invertSelf();
  return [t, e, n, i, s, o];
}
function jr(r, t, e = !1, n = !0) {
  if (t instanceof Fh) {
    const {
      pageWidth: i,
      pageHeight: s
    } = t.rawDims, {
      style: o
    } = r, l = je.isCSSRoundSupported, c = `var(--scale-factor) * ${i}px`, d = `var(--scale-factor) * ${s}px`, h = l ? `round(${c}, 1px)` : `calc(${c})`, f = l ? `round(${d}, 1px)` : `calc(${d})`;
    !e || t.rotation % 180 === 0 ? (o.width = h, o.height = f) : (o.width = f, o.height = h);
  }
  n && r.setAttribute("data-main-rotation", t.rotation);
}
var Bs, $s, In, Hs, Ud, cy, zd, hy, jd, dy, fo, rd, Gd, uy, gl, Ip;
const Vd = class Vd {
  constructor(t) {
    m(this, zd);
    m(this, jd);
    m(this, fo);
    m(this, Gd);
    m(this, gl);
    m(this, Bs, null);
    m(this, $s, null);
    m(this, In, void 0);
    m(this, Hs, null);
    w(this, In, t);
  }
  render() {
    const t = w(this, Bs, document.createElement("div"));
    t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", Ge), t.addEventListener("pointerdown", A(Vd, Ud, cy));
    const e = w(this, Hs, document.createElement("div"));
    e.className = "buttons", t.append(e);
    const n = a(this, In).toolbarPosition;
    if (n) {
      const {
        style: i
      } = t, s = a(this, In)._uiManager.direction === "ltr" ? 1 - n[0] : n[0];
      i.insetInlineEnd = `${100 * s}%`, i.top = `calc(${100 * n[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return A(this, Gd, uy).call(this), t;
  }
  hide() {
    var t;
    a(this, Bs).classList.add("hidden"), (t = a(this, $s)) == null || t.hideDropdown();
  }
  show() {
    a(this, Bs).classList.remove("hidden");
  }
  addAltTextButton(t) {
    A(this, fo, rd).call(this, t), a(this, Hs).prepend(t, a(this, gl, Ip));
  }
  addColorPicker(t) {
    w(this, $s, t);
    const e = t.renderButton();
    A(this, fo, rd).call(this, e), a(this, Hs).prepend(e, a(this, gl, Ip));
  }
  remove() {
    var t;
    a(this, Bs).remove(), (t = a(this, $s)) == null || t.destroy(), w(this, $s, null);
  }
};
Bs = new WeakMap(), $s = new WeakMap(), In = new WeakMap(), Hs = new WeakMap(), Ud = new WeakSet(), cy = function(t) {
  t.stopPropagation();
}, zd = new WeakSet(), hy = function(t) {
  a(this, In)._focusEventsAllowed = !1, t.preventDefault(), t.stopPropagation();
}, jd = new WeakSet(), dy = function(t) {
  a(this, In)._focusEventsAllowed = !0, t.preventDefault(), t.stopPropagation();
}, fo = new WeakSet(), rd = function(t) {
  t.addEventListener("focusin", A(this, zd, hy).bind(this), {
    capture: !0
  }), t.addEventListener("focusout", A(this, jd, dy).bind(this), {
    capture: !0
  }), t.addEventListener("contextmenu", Ge);
}, Gd = new WeakSet(), uy = function() {
  const t = document.createElement("button");
  t.className = "delete", t.tabIndex = 0, t.setAttribute("data-l10n-id", `pdfjs-editor-remove-${a(this, In).editorType}-button`), A(this, fo, rd).call(this, t), t.addEventListener("click", (e) => {
    a(this, In)._uiManager.delete();
  }), a(this, Hs).append(t);
}, gl = new WeakSet(), Ip = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, m(Vd, Ud);
let Lp = Vd;
var ml, Us, yl, Wd, fy, qd, py, Xd, gy;
class aE {
  constructor(t) {
    m(this, Wd);
    m(this, qd);
    m(this, Xd);
    m(this, ml, null);
    m(this, Us, null);
    m(this, yl, void 0);
    w(this, yl, t);
  }
  show(t, e, n) {
    const [i, s] = A(this, qd, py).call(this, e, n), {
      style: o
    } = a(this, Us) || w(this, Us, A(this, Wd, fy).call(this));
    t.append(a(this, Us)), o.insetInlineEnd = `${100 * i}%`, o.top = `calc(${100 * s}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    a(this, Us).remove();
  }
}
ml = new WeakMap(), Us = new WeakMap(), yl = new WeakMap(), Wd = new WeakSet(), fy = function() {
  const t = w(this, Us, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", Ge);
  const e = w(this, ml, document.createElement("div"));
  return e.className = "buttons", t.append(e), A(this, Xd, gy).call(this), t;
}, qd = new WeakSet(), py = function(t, e) {
  let n = 0, i = 0;
  for (const s of t) {
    const o = s.y + s.height;
    if (o < n)
      continue;
    const l = s.x + (e ? s.width : 0);
    if (o > n) {
      i = l, n = o;
      continue;
    }
    e ? l > i && (i = l) : l < i && (i = l);
  }
  return [e ? 1 - i : i, n];
}, Xd = new WeakSet(), gy = function() {
  const t = document.createElement("button");
  t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const e = document.createElement("span");
  t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label"), t.addEventListener("contextmenu", Ge), t.addEventListener("click", () => {
    a(this, yl).highlightSelection("floating_button");
  }), a(this, ml).append(t);
};
function kd(r, t, e) {
  for (const n of e)
    t.addEventListener(n, r[n].bind(r));
}
function lE(r) {
  return Math.round(Math.min(255, Math.max(1, 255 * r))).toString(16).padStart(2, "0");
}
var Yd;
class cE {
  constructor() {
    m(this, Yd, 0);
  }
  get id() {
    return `${U_}${Ve(this, Yd)._++}`;
  }
}
Yd = new WeakMap();
var bl, Kd, on, vl, Mp;
const vm = class vm {
  constructor() {
    m(this, vl);
    m(this, bl, tE());
    m(this, Kd, 0);
    m(this, on, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', n = new OffscreenCanvas(1, 3).getContext("2d"), i = new Image();
    i.src = t;
    const s = i.decode().then(() => (n.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(n.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return xt(this, "_isSVGFittingCanvas", s);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: n,
      size: i,
      type: s
    } = t;
    return A(this, vl, Mp).call(this, `${e}_${n}_${i}_${s}`, t);
  }
  async getFromUrl(t) {
    return A(this, vl, Mp).call(this, t, t);
  }
  async getFromId(t) {
    a(this, on) || w(this, on, /* @__PURE__ */ new Map());
    const e = a(this, on).get(t);
    return e ? e.bitmap ? (e.refCounter += 1, e) : e.file ? this.getFromFile(e.file) : this.getFromUrl(e.url) : null;
  }
  getSvgUrl(t) {
    const e = a(this, on).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    a(this, on) || w(this, on, /* @__PURE__ */ new Map());
    const e = a(this, on).get(t);
    e && (e.refCounter -= 1, e.refCounter === 0 && (e.bitmap = null));
  }
  isValidId(t) {
    return t.startsWith(`image_${a(this, bl)}_`);
  }
};
bl = new WeakMap(), Kd = new WeakMap(), on = new WeakMap(), vl = new WeakSet(), Mp = async function(t, e) {
  a(this, on) || w(this, on, /* @__PURE__ */ new Map());
  let n = a(this, on).get(t);
  if (n === null)
    return null;
  if (n != null && n.bitmap)
    return n.refCounter += 1, n;
  try {
    n || (n = {
      bitmap: null,
      id: `image_${a(this, bl)}_${Ve(this, Kd)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof e == "string" ? (n.url = e, i = await Uf(e, "blob")) : i = n.file = e, i.type === "image/svg+xml") {
      const s = vm._isSVGFittingCanvas, o = new FileReader(), l = new Image(), c = new Promise((d, h) => {
        l.onload = () => {
          n.bitmap = l, n.isSvg = !0, d();
        }, o.onload = async () => {
          const f = n.svgUrl = o.result;
          l.src = await s ? `${f}#svgView(preserveAspectRatio(none))` : f;
        }, l.onerror = o.onerror = h;
      });
      o.readAsDataURL(i), await c;
    } else
      n.bitmap = await createImageBitmap(i);
    n.refCounter = 1;
  } catch (i) {
    console.error(i), n = null;
  }
  return a(this, on).set(t, n), n && a(this, on).set(n.id, n), n;
};
let Fp = vm;
var ue, Ki, wl, fe;
class hE {
  constructor(t = 128) {
    m(this, ue, []);
    m(this, Ki, !1);
    m(this, wl, void 0);
    m(this, fe, -1);
    w(this, wl, t);
  }
  add({
    cmd: t,
    undo: e,
    post: n,
    mustExec: i,
    type: s = NaN,
    overwriteIfSameType: o = !1,
    keepUndo: l = !1
  }) {
    if (i && t(), a(this, Ki))
      return;
    const c = {
      cmd: t,
      undo: e,
      post: n,
      type: s
    };
    if (a(this, fe) === -1) {
      a(this, ue).length > 0 && (a(this, ue).length = 0), w(this, fe, 0), a(this, ue).push(c);
      return;
    }
    if (o && a(this, ue)[a(this, fe)].type === s) {
      l && (c.undo = a(this, ue)[a(this, fe)].undo), a(this, ue)[a(this, fe)] = c;
      return;
    }
    const d = a(this, fe) + 1;
    d === a(this, wl) ? a(this, ue).splice(0, 1) : (w(this, fe, d), d < a(this, ue).length && a(this, ue).splice(d)), a(this, ue).push(c);
  }
  undo() {
    if (a(this, fe) === -1)
      return;
    w(this, Ki, !0);
    const {
      undo: t,
      post: e
    } = a(this, ue)[a(this, fe)];
    t(), e == null || e(), w(this, Ki, !1), w(this, fe, a(this, fe) - 1);
  }
  redo() {
    if (a(this, fe) < a(this, ue).length - 1) {
      w(this, fe, a(this, fe) + 1), w(this, Ki, !0);
      const {
        cmd: t,
        post: e
      } = a(this, ue)[a(this, fe)];
      t(), e == null || e(), w(this, Ki, !1);
    }
  }
  hasSomethingToUndo() {
    return a(this, fe) !== -1;
  }
  hasSomethingToRedo() {
    return a(this, fe) < a(this, ue).length - 1;
  }
  destroy() {
    w(this, ue, null);
  }
}
ue = new WeakMap(), Ki = new WeakMap(), wl = new WeakMap(), fe = new WeakMap();
var Zd, my;
class Mh {
  constructor(t) {
    m(this, Zd);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = je.platform;
    for (const [n, i, s = {}] of t)
      for (const o of n) {
        const l = o.startsWith("mac+");
        e && l ? (this.callbacks.set(o.slice(4), {
          callback: i,
          options: s
        }), this.allKeys.add(o.split("+").at(-1))) : !e && !l && (this.callbacks.set(o, {
          callback: i,
          options: s
        }), this.allKeys.add(o.split("+").at(-1)));
      }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key))
      return;
    const n = this.callbacks.get(A(this, Zd, my).call(this, e));
    if (!n)
      return;
    const {
      callback: i,
      options: {
        bubbles: s = !1,
        args: o = [],
        checker: l = null
      }
    } = n;
    l && !l(t, e) || (i.bind(t, ...o, e)(), s || (e.stopPropagation(), e.preventDefault()));
  }
}
Zd = new WeakSet(), my = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const Jd = class Jd {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return oE(t), xt(this, "_colors", t);
  }
  convert(t) {
    const e = lm(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [n, i] of this._colors)
      if (i.every((s, o) => s === e[o]))
        return Jd._colorsMapping.get(n);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? Q.makeHexColor(...e) : t;
  }
};
ht(Jd, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let Dp = Jd;
var Xe, ie, me, po, li, go, gn, mo, zs, Fn, ci, js, Al, _l, Mn, yo, Zi, Dn, Qd, Ji, El, Gs, Sl, bo, ye, Lt, hi, Vs, xl, Cl, Tl, Pl, Rl, kl, Ll, Il, Fl, Ml, Dl, Nl, Ol, Bl, Qi, Nn, di, $l, vo, od, tu, yy, eu, by, wo, ad, nu, vy, iu, wy, su, Ay, Hl, Np, Ul, Op, zl, Bp, jl, $p, Gl, Hp, be, ke, On, zi, ru, _y, ou, Ey, Vl, Up, au, Sy, Ws, qa, Wl, zp;
const so = class so {
  constructor(t, e, n, i, s, o, l, c, d) {
    m(this, vo);
    m(this, tu);
    m(this, eu);
    m(this, wo);
    m(this, nu);
    m(this, iu);
    m(this, su);
    m(this, Hl);
    m(this, Ul);
    m(this, zl);
    m(this, jl);
    m(this, Gl);
    m(this, be);
    m(this, On);
    m(this, ru);
    m(this, ou);
    m(this, Vl);
    m(this, au);
    m(this, Ws);
    m(this, Wl);
    m(this, Xe, null);
    m(this, ie, /* @__PURE__ */ new Map());
    m(this, me, /* @__PURE__ */ new Map());
    m(this, po, null);
    m(this, li, null);
    m(this, go, null);
    m(this, gn, new hE());
    m(this, mo, 0);
    m(this, zs, /* @__PURE__ */ new Set());
    m(this, Fn, null);
    m(this, ci, null);
    m(this, js, /* @__PURE__ */ new Set());
    m(this, Al, !1);
    m(this, _l, null);
    m(this, Mn, null);
    m(this, yo, null);
    m(this, Zi, !1);
    m(this, Dn, null);
    m(this, Qd, new cE());
    m(this, Ji, !1);
    m(this, El, !1);
    m(this, Gs, null);
    m(this, Sl, null);
    m(this, bo, null);
    m(this, ye, _t.NONE);
    m(this, Lt, /* @__PURE__ */ new Set());
    m(this, hi, null);
    m(this, Vs, null);
    m(this, xl, null);
    m(this, Cl, this.blur.bind(this));
    m(this, Tl, this.focus.bind(this));
    m(this, Pl, this.copy.bind(this));
    m(this, Rl, this.cut.bind(this));
    m(this, kl, this.paste.bind(this));
    m(this, Ll, this.keydown.bind(this));
    m(this, Il, this.keyup.bind(this));
    m(this, Fl, this.onEditingAction.bind(this));
    m(this, Ml, this.onPageChanging.bind(this));
    m(this, Dl, this.onScaleChanging.bind(this));
    m(this, Nl, A(this, eu, by).bind(this));
    m(this, Ol, this.onRotationChanging.bind(this));
    m(this, Bl, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    m(this, Qi, [0, 0]);
    m(this, Nn, null);
    m(this, di, null);
    m(this, $l, null);
    w(this, di, t), w(this, $l, e), w(this, po, n), this._eventBus = i, this._eventBus._on("editingaction", a(this, Fl)), this._eventBus._on("pagechanging", a(this, Ml)), this._eventBus._on("scalechanging", a(this, Dl)), this._eventBus._on("rotationchanging", a(this, Ol)), A(this, nu, vy).call(this), A(this, Ul, Op).call(this), w(this, li, s.annotationStorage), w(this, _l, s.filterFactory), w(this, Vs, o), w(this, yo, l || null), w(this, Al, c), w(this, bo, d || null), this.viewParameters = {
      realScale: vs.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1;
  }
  static get _keyboardManager() {
    const t = so.prototype, e = (o) => a(o, di).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && o.hasSomethingToControl(), n = (o, {
      target: l
    }) => {
      if (l instanceof HTMLInputElement) {
        const {
          type: c
        } = l;
        return c !== "text" && c !== "number";
      }
      return !0;
    }, i = this.TRANSLATE_SMALL, s = this.TRANSLATE_BIG;
    return xt(this, "_keyboardManager", new Mh([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: n
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: n
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: n
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: n
    }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {
      checker: (o, {
        target: l
      }) => !(l instanceof HTMLButtonElement) && a(o, di).contains(l) && !o.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (o, {
        target: l
      }) => !(l instanceof HTMLButtonElement) && a(o, di).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
      args: [-i, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-s, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
      args: [i, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [s, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -i],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -s],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
      args: [0, i],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, s],
      checker: e
    }]]));
  }
  destroy() {
    var t, e;
    A(this, zl, Bp).call(this), A(this, Hl, Np).call(this), this._eventBus._off("editingaction", a(this, Fl)), this._eventBus._off("pagechanging", a(this, Ml)), this._eventBus._off("scalechanging", a(this, Dl)), this._eventBus._off("rotationchanging", a(this, Ol));
    for (const n of a(this, me).values())
      n.destroy();
    a(this, me).clear(), a(this, ie).clear(), a(this, js).clear(), w(this, Xe, null), a(this, Lt).clear(), a(this, gn).destroy(), (t = a(this, po)) == null || t.destroy(), (e = a(this, Dn)) == null || e.hide(), w(this, Dn, null), a(this, Mn) && (clearTimeout(a(this, Mn)), w(this, Mn, null)), a(this, Nn) && (clearTimeout(a(this, Nn)), w(this, Nn, null)), A(this, iu, wy).call(this);
  }
  async mlGuess(t) {
    var e;
    return ((e = a(this, bo)) == null ? void 0 : e.guess(t)) || null;
  }
  get hasMLManager() {
    return !!a(this, bo);
  }
  get hcmFilter() {
    return xt(this, "hcmFilter", a(this, Vs) ? a(this, _l).addHCMFilter(a(this, Vs).foreground, a(this, Vs).background) : "none");
  }
  get direction() {
    return xt(this, "direction", getComputedStyle(a(this, di)).direction);
  }
  get highlightColors() {
    return xt(this, "highlightColors", a(this, yo) ? new Map(a(this, yo).split(",").map((t) => t.split("=").map((e) => e.trim()))) : null);
  }
  get highlightColorNames() {
    return xt(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  setMainHighlightColorPicker(t) {
    w(this, Sl, t);
  }
  editAltText(t) {
    var e;
    (e = a(this, po)) == null || e.editAltText(this, t);
  }
  onPageChanging({
    pageNumber: t
  }) {
    w(this, mo, t - 1);
  }
  focusMainContainer() {
    a(this, di).focus();
  }
  findParent(t, e) {
    for (const n of a(this, me).values()) {
      const {
        x: i,
        y: s,
        width: o,
        height: l
      } = n.div.getBoundingClientRect();
      if (t >= i && t <= i + o && e >= s && e <= s + l)
        return n;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    a(this, $l).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    a(this, js).add(t);
  }
  removeShouldRescale(t) {
    a(this, js).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    this.commitOrRemove(), this.viewParameters.realScale = t * vs.PDF_TO_CSS_UNITS;
    for (const e of a(this, js))
      e.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "") {
    const e = document.getSelection();
    if (!e || e.isCollapsed)
      return;
    const {
      anchorNode: n,
      anchorOffset: i,
      focusNode: s,
      focusOffset: o
    } = e, l = e.toString(), d = A(this, vo, od).call(this, e).closest(".textLayer"), h = this.getSelectionBoxes(d);
    if (h) {
      e.empty(), a(this, ye) === _t.NONE && (this._eventBus.dispatch("showannotationeditorui", {
        source: this,
        mode: _t.HIGHLIGHT
      }), this.showAllEditors("highlight", !0, !0));
      for (const f of a(this, me).values())
        if (f.hasTextLayer(d)) {
          f.createAndAddNewEditor({
            x: 0,
            y: 0
          }, !1, {
            methodOfCreation: t,
            boxes: h,
            anchorNode: n,
            anchorOffset: i,
            focusNode: s,
            focusOffset: o,
            text: l
          });
          break;
        }
    }
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && a(this, li) && !a(this, li).has(t.id) && a(this, li).setValue(t.id, t);
  }
  blur() {
    if (this.isShiftKeyDown = !1, a(this, Zi) && (w(this, Zi, !1), A(this, wo, ad).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of a(this, Lt))
      if (e.div.contains(t)) {
        w(this, Gs, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!a(this, Gs))
      return;
    const [t, e] = a(this, Gs);
    w(this, Gs, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0
    }), e.focus();
  }
  addEditListeners() {
    A(this, Ul, Op).call(this), A(this, jl, $p).call(this);
  }
  removeEditListeners() {
    A(this, zl, Bp).call(this), A(this, Gl, Hp).call(this);
  }
  copy(t) {
    var n;
    if (t.preventDefault(), (n = a(this, Xe)) == null || n.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const i of a(this, Lt)) {
      const s = i.serialize(!0);
      s && e.push(s);
    }
    e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  paste(t) {
    t.preventDefault();
    const {
      clipboardData: e
    } = t;
    for (const s of e.items)
      for (const o of a(this, ci))
        if (o.isHandlingMimeForPasting(s.type)) {
          o.paste(s, this.currentLayer);
          return;
        }
    let n = e.getData("application/pdfjs");
    if (!n)
      return;
    try {
      n = JSON.parse(n);
    } catch (s) {
      yt(`paste: "${s.message}".`);
      return;
    }
    if (!Array.isArray(n))
      return;
    this.unselectAll();
    const i = this.currentLayer;
    try {
      const s = [];
      for (const c of n) {
        const d = i.deserialize(c);
        if (!d)
          return;
        s.push(d);
      }
      const o = () => {
        for (const c of s)
          A(this, Vl, Up).call(this, c);
        A(this, Wl, zp).call(this, s);
      }, l = () => {
        for (const c of s)
          c.remove();
      };
      this.addCommands({
        cmd: o,
        undo: l,
        mustExec: !0
      });
    } catch (s) {
      yt(`paste: "${s.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), a(this, ye) !== _t.NONE && !this.isEditorHandlingKeyboard && so._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, a(this, Zi) && (w(this, Zi, !1), A(this, wo, ad).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: t
  }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
    }
  }
  setEditingState(t) {
    t ? (A(this, su, Ay).call(this), A(this, jl, $p).call(this), A(this, be, ke).call(this, {
      isEditing: a(this, ye) !== _t.NONE,
      isEmpty: A(this, Ws, qa).call(this),
      hasSomethingToUndo: a(this, gn).hasSomethingToUndo(),
      hasSomethingToRedo: a(this, gn).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (A(this, Hl, Np).call(this), A(this, Gl, Hp).call(this), A(this, be, ke).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!a(this, ci)) {
      w(this, ci, t);
      for (const e of a(this, ci))
        A(this, On, zi).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return a(this, Qd).id;
  }
  get currentLayer() {
    return a(this, me).get(a(this, mo));
  }
  getLayer(t) {
    return a(this, me).get(t);
  }
  get currentPageIndex() {
    return a(this, mo);
  }
  addLayer(t) {
    a(this, me).set(t.pageIndex, t), a(this, Ji) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    a(this, me).delete(t.pageIndex);
  }
  updateMode(t, e = null, n = !1) {
    if (a(this, ye) !== t) {
      if (w(this, ye, t), t === _t.NONE) {
        this.setEditingState(!1), A(this, ou, Ey).call(this);
        return;
      }
      this.setEditingState(!0), A(this, ru, _y).call(this), this.unselectAll();
      for (const i of a(this, me).values())
        i.updateMode(t);
      if (!e && n) {
        this.addNewEditorFromKeyboard();
        return;
      }
      if (e) {
        for (const i of a(this, ie).values())
          if (i.annotationElementId === e) {
            this.setSelected(i), i.enterInEditMode();
            break;
          }
      }
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t !== a(this, ye) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: t
    });
  }
  updateParams(t, e) {
    var n;
    if (a(this, ci)) {
      switch (t) {
        case at.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case at.HIGHLIGHT_DEFAULT_COLOR:
          (n = a(this, Sl)) == null || n.updateColor(e);
          break;
        case at.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (a(this, xl) || w(this, xl, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      for (const i of a(this, Lt))
        i.updateParams(t, e);
      for (const i of a(this, ci))
        i.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, n = !1) {
    var s;
    for (const o of a(this, ie).values())
      o.editorType === t && o.show(e);
    (((s = a(this, xl)) == null ? void 0 : s.get(at.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && A(this, On, zi).call(this, [[at.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (a(this, El) !== t) {
      w(this, El, t);
      for (const e of a(this, me).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  getEditors(t) {
    const e = [];
    for (const n of a(this, ie).values())
      n.pageIndex === t && e.push(n);
    return e;
  }
  getEditor(t) {
    return a(this, ie).get(t);
  }
  addEditor(t) {
    a(this, ie).set(t.id, t);
  }
  removeEditor(t) {
    var e;
    t.div.contains(document.activeElement) && (a(this, Mn) && clearTimeout(a(this, Mn)), w(this, Mn, setTimeout(() => {
      this.focusMainContainer(), w(this, Mn, null);
    }, 0))), a(this, ie).delete(t.id), this.unselect(t), (!t.annotationElementId || !a(this, zs).has(t.annotationElementId)) && ((e = a(this, li)) == null || e.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    a(this, zs).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return a(this, zs).has(t);
  }
  removeDeletedAnnotationElement(t) {
    a(this, zs).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    a(this, Xe) !== t && (w(this, Xe, t), t && A(this, On, zi).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    a(this, au, Sy) === t && A(this, On, zi).call(this, t.propertiesToUpdate);
  }
  toggleSelected(t) {
    if (a(this, Lt).has(t)) {
      a(this, Lt).delete(t), t.unselect(), A(this, be, ke).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    a(this, Lt).add(t), t.select(), A(this, On, zi).call(this, t.propertiesToUpdate), A(this, be, ke).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    for (const e of a(this, Lt))
      e !== t && e.unselect();
    a(this, Lt).clear(), a(this, Lt).add(t), t.select(), A(this, On, zi).call(this, t.propertiesToUpdate), A(this, be, ke).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return a(this, Lt).has(t);
  }
  get firstSelectedEditor() {
    return a(this, Lt).values().next().value;
  }
  unselect(t) {
    t.unselect(), a(this, Lt).delete(t), A(this, be, ke).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return a(this, Lt).size !== 0;
  }
  get isEnterHandled() {
    return a(this, Lt).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    a(this, gn).undo(), A(this, be, ke).call(this, {
      hasSomethingToUndo: a(this, gn).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: A(this, Ws, qa).call(this)
    });
  }
  redo() {
    a(this, gn).redo(), A(this, be, ke).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: a(this, gn).hasSomethingToRedo(),
      isEmpty: A(this, Ws, qa).call(this)
    });
  }
  addCommands(t) {
    a(this, gn).add(t), A(this, be, ke).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: A(this, Ws, qa).call(this)
    });
  }
  delete() {
    if (this.commitOrRemove(), !this.hasSelection)
      return;
    const t = [...a(this, Lt)], e = () => {
      for (const i of t)
        i.remove();
    }, n = () => {
      for (const i of t)
        A(this, Vl, Up).call(this, i);
    };
    this.addCommands({
      cmd: e,
      undo: n,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = a(this, Xe)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return a(this, Xe) || this.hasSelection;
  }
  selectAll() {
    for (const t of a(this, Lt))
      t.commit();
    A(this, Wl, zp).call(this, a(this, ie).values());
  }
  unselectAll() {
    if (!(a(this, Xe) && (a(this, Xe).commitOrRemove(), a(this, ye) !== _t.NONE)) && this.hasSelection) {
      for (const t of a(this, Lt))
        t.unselect();
      a(this, Lt).clear(), A(this, be, ke).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, n = !1) {
    if (n || this.commitOrRemove(), !this.hasSelection)
      return;
    a(this, Qi)[0] += t, a(this, Qi)[1] += e;
    const [i, s] = a(this, Qi), o = [...a(this, Lt)], l = 1e3;
    a(this, Nn) && clearTimeout(a(this, Nn)), w(this, Nn, setTimeout(() => {
      w(this, Nn, null), a(this, Qi)[0] = a(this, Qi)[1] = 0, this.addCommands({
        cmd: () => {
          for (const c of o)
            a(this, ie).has(c.id) && c.translateInPage(i, s);
        },
        undo: () => {
          for (const c of o)
            a(this, ie).has(c.id) && c.translateInPage(-i, -s);
        },
        mustExec: !1
      });
    }, l));
    for (const c of o)
      c.translateInPage(t, e);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), w(this, Fn, /* @__PURE__ */ new Map());
      for (const t of a(this, Lt))
        a(this, Fn).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!a(this, Fn))
      return !1;
    this.disableUserSelect(!1);
    const t = a(this, Fn);
    w(this, Fn, null);
    let e = !1;
    for (const [{
      x: i,
      y: s,
      pageIndex: o
    }, l] of t)
      l.newX = i, l.newY = s, l.newPageIndex = o, e || (e = i !== l.savedX || s !== l.savedY || o !== l.savedPageIndex);
    if (!e)
      return !1;
    const n = (i, s, o, l) => {
      if (a(this, ie).has(i.id)) {
        const c = a(this, me).get(l);
        c ? i._setParentAndPosition(c, s, o) : (i.pageIndex = l, i.x = s, i.y = o);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [i, {
          newX: s,
          newY: o,
          newPageIndex: l
        }] of t)
          n(i, s, o, l);
      },
      undo: () => {
        for (const [i, {
          savedX: s,
          savedY: o,
          savedPageIndex: l
        }] of t)
          n(i, s, o, l);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (a(this, Fn))
      for (const n of a(this, Fn).keys())
        n.drag(t, e);
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else
      t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    var t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || a(this, Lt).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return a(this, Xe) === t;
  }
  getActive() {
    return a(this, Xe);
  }
  getMode() {
    return a(this, ye);
  }
  get imageManager() {
    return xt(this, "imageManager", new Fp());
  }
  getSelectionBoxes(t) {
    if (!t)
      return null;
    const e = document.getSelection();
    for (let d = 0, h = e.rangeCount; d < h; d++)
      if (!t.contains(e.getRangeAt(d).commonAncestorContainer))
        return null;
    const {
      x: n,
      y: i,
      width: s,
      height: o
    } = t.getBoundingClientRect();
    let l;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        l = (d, h, f, g) => ({
          x: (h - i) / o,
          y: 1 - (d + f - n) / s,
          width: g / o,
          height: f / s
        });
        break;
      case "180":
        l = (d, h, f, g) => ({
          x: 1 - (d + f - n) / s,
          y: 1 - (h + g - i) / o,
          width: f / s,
          height: g / o
        });
        break;
      case "270":
        l = (d, h, f, g) => ({
          x: 1 - (h + g - i) / o,
          y: (d - n) / s,
          width: g / o,
          height: f / s
        });
        break;
      default:
        l = (d, h, f, g) => ({
          x: (d - n) / s,
          y: (h - i) / o,
          width: f / s,
          height: g / o
        });
        break;
    }
    const c = [];
    for (let d = 0, h = e.rangeCount; d < h; d++) {
      const f = e.getRangeAt(d);
      if (!f.collapsed)
        for (const {
          x: g,
          y,
          width: b,
          height: _
        } of f.getClientRects())
          b === 0 || _ === 0 || c.push(l(g, y, b, _));
    }
    return c.length === 0 ? null : c;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (a(this, go) || w(this, go, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = a(this, go)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = a(this, go)) == null ? void 0 : i.get(t.data.id);
    if (!e)
      return;
    const n = a(this, li).getRawValue(e);
    n && (a(this, ye) === _t.NONE && !n.hasBeenModified || n.renderAnnotationElement(t));
  }
};
Xe = new WeakMap(), ie = new WeakMap(), me = new WeakMap(), po = new WeakMap(), li = new WeakMap(), go = new WeakMap(), gn = new WeakMap(), mo = new WeakMap(), zs = new WeakMap(), Fn = new WeakMap(), ci = new WeakMap(), js = new WeakMap(), Al = new WeakMap(), _l = new WeakMap(), Mn = new WeakMap(), yo = new WeakMap(), Zi = new WeakMap(), Dn = new WeakMap(), Qd = new WeakMap(), Ji = new WeakMap(), El = new WeakMap(), Gs = new WeakMap(), Sl = new WeakMap(), bo = new WeakMap(), ye = new WeakMap(), Lt = new WeakMap(), hi = new WeakMap(), Vs = new WeakMap(), xl = new WeakMap(), Cl = new WeakMap(), Tl = new WeakMap(), Pl = new WeakMap(), Rl = new WeakMap(), kl = new WeakMap(), Ll = new WeakMap(), Il = new WeakMap(), Fl = new WeakMap(), Ml = new WeakMap(), Dl = new WeakMap(), Nl = new WeakMap(), Ol = new WeakMap(), Bl = new WeakMap(), Qi = new WeakMap(), Nn = new WeakMap(), di = new WeakMap(), $l = new WeakMap(), vo = new WeakSet(), od = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, tu = new WeakSet(), yy = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const n = A(this, vo, od).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(n);
  i && (a(this, Dn) || w(this, Dn, new aE(this)), a(this, Dn).show(n, i, this.direction === "ltr"));
}, eu = new WeakSet(), by = function() {
  var s, o, l;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    a(this, hi) && ((s = a(this, Dn)) == null || s.hide(), w(this, hi, null), A(this, be, ke).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === a(this, hi))
    return;
  if (!A(this, vo, od).call(this, t).closest(".textLayer")) {
    a(this, hi) && ((o = a(this, Dn)) == null || o.hide(), w(this, hi, null), A(this, be, ke).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((l = a(this, Dn)) == null || l.hide(), w(this, hi, e), A(this, be, ke).call(this, {
    hasSelectedText: !0
  }), !(a(this, ye) !== _t.HIGHLIGHT && a(this, ye) !== _t.NONE) && (a(this, ye) === _t.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), w(this, Zi, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const c = (d) => {
      d.type === "pointerup" && d.button !== 0 || (window.removeEventListener("pointerup", c), window.removeEventListener("blur", c), d.type === "pointerup" && A(this, wo, ad).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", c), window.addEventListener("blur", c);
  }
}, wo = new WeakSet(), ad = function(t = "") {
  a(this, ye) === _t.HIGHLIGHT ? this.highlightSelection(t) : a(this, Al) && A(this, tu, yy).call(this);
}, nu = new WeakSet(), vy = function() {
  document.addEventListener("selectionchange", a(this, Nl));
}, iu = new WeakSet(), wy = function() {
  document.removeEventListener("selectionchange", a(this, Nl));
}, su = new WeakSet(), Ay = function() {
  window.addEventListener("focus", a(this, Tl)), window.addEventListener("blur", a(this, Cl));
}, Hl = new WeakSet(), Np = function() {
  window.removeEventListener("focus", a(this, Tl)), window.removeEventListener("blur", a(this, Cl));
}, Ul = new WeakSet(), Op = function() {
  window.addEventListener("keydown", a(this, Ll)), window.addEventListener("keyup", a(this, Il));
}, zl = new WeakSet(), Bp = function() {
  window.removeEventListener("keydown", a(this, Ll)), window.removeEventListener("keyup", a(this, Il));
}, jl = new WeakSet(), $p = function() {
  document.addEventListener("copy", a(this, Pl)), document.addEventListener("cut", a(this, Rl)), document.addEventListener("paste", a(this, kl));
}, Gl = new WeakSet(), Hp = function() {
  document.removeEventListener("copy", a(this, Pl)), document.removeEventListener("cut", a(this, Rl)), document.removeEventListener("paste", a(this, kl));
}, be = new WeakSet(), ke = function(t) {
  Object.entries(t).some(([n, i]) => a(this, Bl)[n] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(a(this, Bl), t)
  }), a(this, ye) === _t.HIGHLIGHT && t.hasSelectedEditor === !1 && A(this, On, zi).call(this, [[at.HIGHLIGHT_FREE, !0]]));
}, On = new WeakSet(), zi = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, ru = new WeakSet(), _y = function() {
  if (!a(this, Ji)) {
    w(this, Ji, !0);
    for (const t of a(this, me).values())
      t.enable();
    for (const t of a(this, ie).values())
      t.enable();
  }
}, ou = new WeakSet(), Ey = function() {
  if (this.unselectAll(), a(this, Ji)) {
    w(this, Ji, !1);
    for (const t of a(this, me).values())
      t.disable();
    for (const t of a(this, ie).values())
      t.disable();
  }
}, Vl = new WeakSet(), Up = function(t) {
  const e = a(this, me).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, au = new WeakSet(), Sy = function() {
  let t = null;
  for (t of a(this, Lt))
    ;
  return t;
}, Ws = new WeakSet(), qa = function() {
  if (a(this, ie).size === 0)
    return !0;
  if (a(this, ie).size === 1)
    for (const t of a(this, ie).values())
      return t.isEmpty();
  return !1;
}, Wl = new WeakSet(), zp = function(t) {
  for (const e of a(this, Lt))
    e.unselect();
  a(this, Lt).clear();
  for (const e of t)
    e.isEmpty() || (a(this, Lt).add(e), e.select());
  A(this, be, ke).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, ht(so, "TRANSLATE_SMALL", 1), ht(so, "TRANSLATE_BIG", 10);
let Gr = so;
var ui, fi, mn, pi, yn, Ao, gi, ql, jp;
const ii = class ii {
  constructor(t) {
    m(this, ql);
    m(this, ui, "");
    m(this, fi, !1);
    m(this, mn, null);
    m(this, pi, null);
    m(this, yn, null);
    m(this, Ao, !1);
    m(this, gi, null);
    w(this, gi, t);
  }
  static initialize(t) {
    ii._l10nPromise || (ii._l10nPromise = t);
  }
  async render() {
    const t = w(this, mn, document.createElement("button"));
    t.className = "altText";
    const e = await ii._l10nPromise.get("pdfjs-editor-alt-text-button-label");
    t.textContent = e, t.setAttribute("aria-label", e), t.tabIndex = "0", t.addEventListener("contextmenu", Ge), t.addEventListener("pointerdown", (i) => i.stopPropagation());
    const n = (i) => {
      i.preventDefault(), a(this, gi)._uiManager.editAltText(a(this, gi));
    };
    return t.addEventListener("click", n, {
      capture: !0
    }), t.addEventListener("keydown", (i) => {
      i.target === t && i.key === "Enter" && (w(this, Ao, !0), n(i));
    }), await A(this, ql, jp).call(this), t;
  }
  finish() {
    a(this, mn) && (a(this, mn).focus({
      focusVisible: a(this, Ao)
    }), w(this, Ao, !1));
  }
  isEmpty() {
    return !a(this, ui) && !a(this, fi);
  }
  get data() {
    return {
      altText: a(this, ui),
      decorative: a(this, fi)
    };
  }
  set data({
    altText: t,
    decorative: e
  }) {
    a(this, ui) === t && a(this, fi) === e || (w(this, ui, t), w(this, fi, e), A(this, ql, jp).call(this));
  }
  toggle(t = !1) {
    a(this, mn) && (!t && a(this, yn) && (clearTimeout(a(this, yn)), w(this, yn, null)), a(this, mn).disabled = !t);
  }
  destroy() {
    var t;
    (t = a(this, mn)) == null || t.remove(), w(this, mn, null), w(this, pi, null);
  }
};
ui = new WeakMap(), fi = new WeakMap(), mn = new WeakMap(), pi = new WeakMap(), yn = new WeakMap(), Ao = new WeakMap(), gi = new WeakMap(), ql = new WeakSet(), jp = async function() {
  var i;
  const t = a(this, mn);
  if (!t)
    return;
  if (!a(this, ui) && !a(this, fi)) {
    t.classList.remove("done"), (i = a(this, pi)) == null || i.remove();
    return;
  }
  t.classList.add("done"), ii._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then((s) => {
    t.setAttribute("aria-label", s);
  });
  let e = a(this, pi);
  if (!e) {
    w(this, pi, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip");
    const s = e.id = `alt-text-tooltip-${a(this, gi).id}`;
    t.setAttribute("aria-describedby", s);
    const o = 100;
    t.addEventListener("mouseenter", () => {
      w(this, yn, setTimeout(() => {
        w(this, yn, null), a(this, pi).classList.add("show"), a(this, gi)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }), t.addEventListener("mouseleave", () => {
      var l;
      a(this, yn) && (clearTimeout(a(this, yn)), w(this, yn, null)), (l = a(this, pi)) == null || l.classList.remove("show");
    });
  }
  e.innerText = a(this, fi) ? await ii._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : a(this, ui), e.parentNode || t.append(e);
  const n = a(this, gi).getImageForAltText();
  n == null || n.setAttribute("aria-describedby", e.id);
}, ht(ii, "_l10nPromise", null);
let Ld = ii;
var bn, Le, _o, qs, ve, Xs, Eo, So, xe, Xl, Ys, ts, Yl, Ks, mi, Bn, xo, Co, an, Kl, lu, Zl, Gp, Jl, Vp, Ql, Wp, cu, xy, hu, Cy, tc, qp, ec, Xp, nc, Yp, du, Ty, uu, Py, fu, Ry, pu, ky, ic, Kp, Zs, Xa;
const Ot = class Ot {
  constructor(t) {
    m(this, Zl);
    m(this, Ql);
    m(this, cu);
    m(this, hu);
    m(this, tc);
    m(this, ec);
    m(this, nc);
    m(this, du);
    m(this, uu);
    m(this, fu);
    m(this, pu);
    m(this, ic);
    m(this, Zs);
    m(this, bn, null);
    m(this, Le, null);
    m(this, _o, !1);
    m(this, qs, !1);
    m(this, ve, null);
    m(this, Xs, null);
    m(this, Eo, this.focusin.bind(this));
    m(this, So, this.focusout.bind(this));
    m(this, xe, null);
    m(this, Xl, "");
    m(this, Ys, !1);
    m(this, ts, null);
    m(this, Yl, !1);
    m(this, Ks, !1);
    m(this, mi, !1);
    m(this, Bn, null);
    m(this, xo, 0);
    m(this, Co, 0);
    m(this, an, null);
    ht(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    ht(this, "_isVisible", !0);
    ht(this, "_uiManager", null);
    ht(this, "_focusEventsAllowed", !0);
    ht(this, "_l10nPromise", null);
    m(this, Kl, !1);
    m(this, lu, Ot._zIndex++);
    this.constructor === Ot && Dt("Cannot initialize AnnotationEditor."), this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: n,
        pageHeight: i,
        pageX: s,
        pageY: o
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [n, i], this.pageTranslation = [s, o];
    const [l, c] = this.parentDimensions;
    this.x = t.x / l, this.y = t.y / c, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = Ot.prototype._resizeWithKeyboard, e = Gr.TRANSLATE_SMALL, n = Gr.TRANSLATE_BIG;
    return xt(this, "_resizerKeyboardManager", new Mh([[["ArrowLeft", "mac+ArrowLeft"], t, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-n, 0]
    }], [["ArrowRight", "mac+ArrowRight"], t, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [n, 0]
    }], [["ArrowUp", "mac+ArrowUp"], t, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -n]
    }], [["ArrowDown", "mac+ArrowDown"], t, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, n]
    }], [["Escape", "mac+Escape"], Ot.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get _defaultLineColor() {
    return xt(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new dE({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e, n) {
    if (Ot._l10nPromise || (Ot._l10nPromise = new Map(["pdfjs-editor-alt-text-button-label", "pdfjs-editor-alt-text-edit-button-label", "pdfjs-editor-alt-text-decorative-tooltip", "pdfjs-editor-resizer-label-topLeft", "pdfjs-editor-resizer-label-topMiddle", "pdfjs-editor-resizer-label-topRight", "pdfjs-editor-resizer-label-middleRight", "pdfjs-editor-resizer-label-bottomRight", "pdfjs-editor-resizer-label-bottomMiddle", "pdfjs-editor-resizer-label-bottomLeft", "pdfjs-editor-resizer-label-middleLeft"].map((s) => [s, t.get(s.replaceAll(/([A-Z])/g, (o) => `-${o.toLowerCase()}`))]))), n != null && n.strings)
      for (const s of n.strings)
        Ot._l10nPromise.set(s, t.get(s));
    if (Ot._borderLineWidth !== -1)
      return;
    const i = getComputedStyle(document.documentElement);
    Ot._borderLineWidth = parseFloat(i.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, e) {
    Dt("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return a(this, Kl);
  }
  set _isDraggable(t) {
    var e;
    w(this, Kl, t), (e = this.div) == null || e.classList.toggle("draggable", t);
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = a(this, lu);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : A(this, Zs, Xa).call(this), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (a(this, Ys) ? w(this, Ys, !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    var n;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const e = t.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (t.preventDefault(), (n = this.parent) != null && n.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, n, i) {
    const [s, o] = this.parentDimensions;
    [n, i] = this.screenToPageTranslation(n, i), this.x = (t + n) / s, this.y = (e + i) / o, this.fixAndSetPosition();
  }
  translate(t, e) {
    A(this, Zl, Gp).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    a(this, ts) || w(this, ts, [this.x, this.y]), A(this, Zl, Gp).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(t, e) {
    a(this, ts) || w(this, ts, [this.x, this.y]);
    const [n, i] = this.parentDimensions;
    if (this.x += t / n, this.y += e / i, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: d,
        y: h
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, d, h) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: s,
      y: o
    } = this;
    const [l, c] = this.getBaseTranslation();
    s += l, o += c, this.div.style.left = `${(100 * s).toFixed(2)}%`, this.div.style.top = `${(100 * o).toFixed(2)}%`, this.div.scrollIntoView({
      block: "nearest"
    });
  }
  get _hasBeenMoved() {
    return !!a(this, ts) && (a(this, ts)[0] !== this.x || a(this, ts)[1] !== this.y);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: n
    } = Ot, i = n / t, s = n / e;
    switch (this.rotation) {
      case 90:
        return [-i, s];
      case 180:
        return [i, s];
      case 270:
        return [i, -s];
      default:
        return [-i, -s];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const [e, n] = this.pageDimensions;
    let {
      x: i,
      y: s,
      width: o,
      height: l
    } = this;
    if (o *= e, l *= n, i *= e, s *= n, this._mustFixPosition)
      switch (t) {
        case 0:
          i = Math.max(0, Math.min(e - o, i)), s = Math.max(0, Math.min(n - l, s));
          break;
        case 90:
          i = Math.max(0, Math.min(e - l, i)), s = Math.min(n, Math.max(o, s));
          break;
        case 180:
          i = Math.min(e, Math.max(o, i)), s = Math.min(n, Math.max(l, s));
          break;
        case 270:
          i = Math.min(e, Math.max(l, i)), s = Math.max(0, Math.min(n - o, s));
          break;
      }
    this.x = i /= e, this.y = s /= n;
    const [c, d] = this.getBaseTranslation();
    i += c, s += d;
    const {
      style: h
    } = this.div;
    h.left = `${(100 * i).toFixed(2)}%`, h.top = `${(100 * s).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var n;
    return A(n = Ot, Jl, Vp).call(n, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var n;
    return A(n = Ot, Jl, Vp).call(n, t, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, n]
    } = this, i = e * t, s = n * t;
    return je.isCSSRoundSupported ? [Math.round(i), Math.round(s)] : [i, s];
  }
  setDims(t, e) {
    const [n, i] = this.parentDimensions;
    this.div.style.width = `${(100 * t / n).toFixed(2)}%`, a(this, qs) || (this.div.style.height = `${(100 * e / i).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: t
    } = this.div, {
      height: e,
      width: n
    } = t, i = n.endsWith("%"), s = !a(this, qs) && e.endsWith("%");
    if (i && s)
      return;
    const [o, l] = this.parentDimensions;
    i || (t.width = `${(100 * parseFloat(n) / o).toFixed(2)}%`), !a(this, qs) && !s && (t.height = `${(100 * parseFloat(e) / l).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  altTextFinish() {
    var t;
    (t = a(this, Le)) == null || t.finish();
  }
  async addEditToolbar() {
    return a(this, xe) || a(this, Ks) ? a(this, xe) : (w(this, xe, new Lp(this)), this.div.append(a(this, xe).render()), a(this, Le) && a(this, xe).addAltTextButton(await a(this, Le).render()), a(this, xe));
  }
  removeEditToolbar() {
    var t;
    a(this, xe) && (a(this, xe).remove(), w(this, xe, null), (t = a(this, Le)) == null || t.destroy());
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    a(this, Le) || (Ld.initialize(Ot._l10nPromise), w(this, Le, new Ld(this)), await this.addEditToolbar());
  }
  get altTextData() {
    var t;
    return (t = a(this, Le)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    a(this, Le) && (a(this, Le).data = t);
  }
  hasAltText() {
    var t;
    return !((t = a(this, Le)) != null && t.isEmpty());
  }
  render() {
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = a(this, _o) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), this.div.addEventListener("focusin", a(this, Eo)), this.div.addEventListener("focusout", a(this, So));
    const [t, e] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * e / t).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * t / e).toFixed(2)}%`);
    const [n, i] = this.getInitialTranslation();
    return this.translate(n, i), kd(this, this.div, ["pointerdown"]), this.div;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = je.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (w(this, Ys, !0), this._isDraggable) {
      A(this, du, Ty).call(this, t);
      return;
    }
    A(this, nc, Yp).call(this, t);
  }
  moveInDOM() {
    a(this, Bn) && clearTimeout(a(this, Bn)), w(this, Bn, setTimeout(() => {
      var t;
      w(this, Bn, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, n) {
    t.changeParent(this), this.x = e, this.y = n, this.fixAndSetPosition();
  }
  getRect(t, e, n = this.rotation) {
    const i = this.parentScale, [s, o] = this.pageDimensions, [l, c] = this.pageTranslation, d = t / i, h = e / i, f = this.x * s, g = this.y * o, y = this.width * s, b = this.height * o;
    switch (n) {
      case 0:
        return [f + d + l, o - g - h - b + c, f + d + y + l, o - g - h + c];
      case 90:
        return [f + h + l, o - g + d + c, f + h + b + l, o - g + d + y + c];
      case 180:
        return [f - d - y + l, o - g + h + c, f - d + l, o - g + h + b + c];
      case 270:
        return [f - h - b + l, o - g - d - y + c, f - h + l, o - g - d + c];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [n, i, s, o] = t, l = s - n, c = o - i;
    switch (this.rotation) {
      case 0:
        return [n, e - o, l, c];
      case 90:
        return [n, e - i, c, l];
      case 180:
        return [s, e - i, l, c];
      case 270:
        return [s, e - o, c, l];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded() {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    w(this, Ks, !0);
  }
  disableEditMode() {
    w(this, Ks, !1);
  }
  isInEditMode() {
    return a(this, Ks);
  }
  shouldGetKeyboardEvents() {
    return a(this, mi);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  rebuild() {
    var t, e;
    (t = this.div) == null || t.addEventListener("focusin", a(this, Eo)), (e = this.div) == null || e.addEventListener("focusout", a(this, So));
  }
  rotate(t) {
  }
  serialize(t = !1, e = null) {
    Dt("An editor must be serializable");
  }
  static deserialize(t, e, n) {
    const i = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: n
    });
    i.rotation = t.rotation;
    const [s, o] = i.pageDimensions, [l, c, d, h] = i.getRectInCurrentCoords(t.rect, o);
    return i.x = l / s, i.y = c / o, i.width = d / s, i.height = h / o, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    if (this.div.removeEventListener("focusin", a(this, Eo)), this.div.removeEventListener("focusout", a(this, So)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), a(this, Bn) && (clearTimeout(a(this, Bn)), w(this, Bn, null)), A(this, Zs, Xa).call(this), this.removeEditToolbar(), a(this, an)) {
      for (const t of a(this, an).values())
        clearTimeout(t);
      w(this, an, null);
    }
    this.parent = null;
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (A(this, cu, xy).call(this), a(this, ve).classList.remove("hidden"), kd(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), w(this, Xs, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = a(this, ve).children;
    if (!a(this, bn)) {
      w(this, bn, Array.from(e));
      const o = A(this, uu, Py).bind(this), l = A(this, fu, Ry).bind(this);
      for (const c of a(this, bn)) {
        const d = c.getAttribute("data-resizer-name");
        c.setAttribute("role", "spinbutton"), c.addEventListener("keydown", o), c.addEventListener("blur", l), c.addEventListener("focus", A(this, pu, ky).bind(this, d)), Ot._l10nPromise.get(`pdfjs-editor-resizer-label-${d}`).then((h) => c.setAttribute("aria-label", h));
      }
    }
    const n = a(this, bn)[0];
    let i = 0;
    for (const o of e) {
      if (o === n)
        break;
      i++;
    }
    const s = (360 - this.rotation + this.parentRotation) % 360 / 90 * (a(this, bn).length / 4);
    if (s !== i) {
      if (s < i)
        for (let l = 0; l < i - s; l++)
          a(this, ve).append(a(this, ve).firstChild);
      else if (s > i)
        for (let l = 0; l < s - i; l++)
          a(this, ve).firstChild.before(a(this, ve).lastChild);
      let o = 0;
      for (const l of e) {
        const d = a(this, bn)[o++].getAttribute("data-resizer-name");
        Ot._l10nPromise.get(`pdfjs-editor-resizer-label-${d}`).then((h) => l.setAttribute("aria-label", h));
      }
    }
    A(this, ic, Kp).call(this, 0), w(this, mi, !0), a(this, ve).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    a(this, mi) && A(this, ec, Xp).call(this, a(this, Xl), {
      movementX: t,
      movementY: e
    });
  }
  _stopResizingWithKeyboard() {
    A(this, Zs, Xa).call(this), this.div.focus();
  }
  select() {
    var t, e;
    if (this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !a(this, xe)) {
      this.addEditToolbar().then(() => {
        var n, i;
        (n = this.div) != null && n.classList.contains("selectedEditor") && ((i = a(this, xe)) == null || i.show());
      });
      return;
    }
    (e = a(this, xe)) == null || e.show();
  }
  unselect() {
    var t, e, n, i;
    (t = a(this, ve)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (n = this.div) != null && n.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = a(this, xe)) == null || i.hide();
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return a(this, Yl);
  }
  set isEditing(t) {
    w(this, Yl, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(t, e) {
    w(this, qs, !0);
    const n = t / e, {
      style: i
    } = this.div;
    i.aspectRatio = n, i.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = !1) {
    if (e) {
      a(this, an) || w(this, an, /* @__PURE__ */ new Map());
      const {
        action: n
      } = t;
      let i = a(this, an).get(n);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), a(this, an).delete(n), a(this, an).size === 0 && w(this, an, null);
      }, Ot._telemetryTimeout), a(this, an).set(n, i);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), w(this, _o, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), w(this, _o, !0);
  }
  renderAnnotationElement(t) {
    let e = t.container.querySelector(".annotationContent");
    if (!e)
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const n = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), n.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const {
      firstChild: e
    } = t.container;
    e.nodeName === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
bn = new WeakMap(), Le = new WeakMap(), _o = new WeakMap(), qs = new WeakMap(), ve = new WeakMap(), Xs = new WeakMap(), Eo = new WeakMap(), So = new WeakMap(), xe = new WeakMap(), Xl = new WeakMap(), Ys = new WeakMap(), ts = new WeakMap(), Yl = new WeakMap(), Ks = new WeakMap(), mi = new WeakMap(), Bn = new WeakMap(), xo = new WeakMap(), Co = new WeakMap(), an = new WeakMap(), Kl = new WeakMap(), lu = new WeakMap(), Zl = new WeakSet(), Gp = function([t, e], n, i) {
  [n, i] = this.screenToPageTranslation(n, i), this.x += n / t, this.y += i / e, this.fixAndSetPosition();
}, Jl = new WeakSet(), Vp = function(t, e, n) {
  switch (n) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, Ql = new WeakSet(), Wp = function(t) {
  switch (t) {
    case 90: {
      const [e, n] = this.pageDimensions;
      return [0, -e / n, n / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, n] = this.pageDimensions;
      return [0, e / n, -n / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, cu = new WeakSet(), xy = function() {
  if (a(this, ve))
    return;
  w(this, ve, document.createElement("div")), a(this, ve).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"];
  for (const e of t) {
    const n = document.createElement("div");
    a(this, ve).append(n), n.classList.add("resizer", e), n.setAttribute("data-resizer-name", e), n.addEventListener("pointerdown", A(this, hu, Cy).bind(this, e)), n.addEventListener("contextmenu", Ge), n.tabIndex = -1;
  }
  this.div.prepend(a(this, ve));
}, hu = new WeakSet(), Cy = function(t, e) {
  var b;
  e.preventDefault();
  const {
    isMac: n
  } = je.platform;
  if (e.button !== 0 || e.ctrlKey && n)
    return;
  (b = a(this, Le)) == null || b.toggle(!1);
  const i = A(this, ec, Xp).bind(this, t), s = this._isDraggable;
  this._isDraggable = !1;
  const o = {
    passive: !0,
    capture: !0
  };
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", i, o), window.addEventListener("contextmenu", Ge);
  const l = this.x, c = this.y, d = this.width, h = this.height, f = this.parent.div.style.cursor, g = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const y = () => {
    var _;
    this.parent.togglePointerEvents(!0), (_ = a(this, Le)) == null || _.toggle(!0), this._isDraggable = s, window.removeEventListener("pointerup", y), window.removeEventListener("blur", y), window.removeEventListener("pointermove", i, o), window.removeEventListener("contextmenu", Ge), this.parent.div.style.cursor = f, this.div.style.cursor = g, A(this, tc, qp).call(this, l, c, d, h);
  };
  window.addEventListener("pointerup", y), window.addEventListener("blur", y);
}, tc = new WeakSet(), qp = function(t, e, n, i) {
  const s = this.x, o = this.y, l = this.width, c = this.height;
  s === t && o === e && l === n && c === i || this.addCommands({
    cmd: () => {
      this.width = l, this.height = c, this.x = s, this.y = o;
      const [d, h] = this.parentDimensions;
      this.setDims(d * l, h * c), this.fixAndSetPosition();
    },
    undo: () => {
      this.width = n, this.height = i, this.x = t, this.y = e;
      const [d, h] = this.parentDimensions;
      this.setDims(d * n, h * i), this.fixAndSetPosition();
    },
    mustExec: !0
  });
}, ec = new WeakSet(), Xp = function(t, e) {
  const [n, i] = this.parentDimensions, s = this.x, o = this.y, l = this.width, c = this.height, d = Ot.MIN_SIZE / n, h = Ot.MIN_SIZE / i, f = (B) => Math.round(B * 1e4) / 1e4, g = A(this, Ql, Wp).call(this, this.rotation), y = (B, V) => [g[0] * B + g[2] * V, g[1] * B + g[3] * V], b = A(this, Ql, Wp).call(this, 360 - this.rotation), _ = (B, V) => [b[0] * B + b[2] * V, b[1] * B + b[3] * V];
  let x, E, P = !1, k = !1;
  switch (t) {
    case "topLeft":
      P = !0, x = (B, V) => [0, 0], E = (B, V) => [B, V];
      break;
    case "topMiddle":
      x = (B, V) => [B / 2, 0], E = (B, V) => [B / 2, V];
      break;
    case "topRight":
      P = !0, x = (B, V) => [B, 0], E = (B, V) => [0, V];
      break;
    case "middleRight":
      k = !0, x = (B, V) => [B, V / 2], E = (B, V) => [0, V / 2];
      break;
    case "bottomRight":
      P = !0, x = (B, V) => [B, V], E = (B, V) => [0, 0];
      break;
    case "bottomMiddle":
      x = (B, V) => [B / 2, V], E = (B, V) => [B / 2, 0];
      break;
    case "bottomLeft":
      P = !0, x = (B, V) => [0, V], E = (B, V) => [B, 0];
      break;
    case "middleLeft":
      k = !0, x = (B, V) => [0, V / 2], E = (B, V) => [B, V / 2];
      break;
  }
  const L = x(l, c), F = E(l, c);
  let I = y(...F);
  const M = f(s + I[0]), C = f(o + I[1]);
  let T = 1, N = 1, [D, H] = this.screenToPageTranslation(e.movementX, e.movementY);
  if ([D, H] = _(D / n, H / i), P) {
    const B = Math.hypot(l, c);
    T = N = Math.max(Math.min(Math.hypot(F[0] - L[0] - D, F[1] - L[1] - H) / B, 1 / l, 1 / c), d / l, h / c);
  } else
    k ? T = Math.max(d, Math.min(1, Math.abs(F[0] - L[0] - D))) / l : N = Math.max(h, Math.min(1, Math.abs(F[1] - L[1] - H))) / c;
  const U = f(l * T), G = f(c * N);
  I = y(...E(U, G));
  const Y = M - I[0], Z = C - I[1];
  this.width = U, this.height = G, this.x = Y, this.y = Z, this.setDims(n * U, i * G), this.fixAndSetPosition();
}, nc = new WeakSet(), Yp = function(t) {
  const {
    isMac: e
  } = je.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, du = new WeakSet(), Ty = function(t) {
  const e = this._uiManager.isSelected(this);
  this._uiManager.setUpDragSession();
  let n, i;
  e && (this.div.classList.add("moving"), n = {
    passive: !0,
    capture: !0
  }, w(this, xo, t.clientX), w(this, Co, t.clientY), i = (o) => {
    const {
      clientX: l,
      clientY: c
    } = o, [d, h] = this.screenToPageTranslation(l - a(this, xo), c - a(this, Co));
    w(this, xo, l), w(this, Co, c), this._uiManager.dragSelectedEditors(d, h);
  }, window.addEventListener("pointermove", i, n));
  const s = () => {
    window.removeEventListener("pointerup", s), window.removeEventListener("blur", s), e && (this.div.classList.remove("moving"), window.removeEventListener("pointermove", i, n)), w(this, Ys, !1), this._uiManager.endDragSession() || A(this, nc, Yp).call(this, t);
  };
  window.addEventListener("pointerup", s), window.addEventListener("blur", s);
}, uu = new WeakSet(), Py = function(t) {
  Ot._resizerKeyboardManager.exec(this, t);
}, fu = new WeakSet(), Ry = function(t) {
  var e;
  a(this, mi) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== a(this, ve) && A(this, Zs, Xa).call(this);
}, pu = new WeakSet(), ky = function(t) {
  w(this, Xl, a(this, mi) ? t : "");
}, ic = new WeakSet(), Kp = function(t) {
  if (a(this, bn))
    for (const e of a(this, bn))
      e.tabIndex = t;
}, Zs = new WeakSet(), Xa = function() {
  if (w(this, mi, !1), A(this, ic, Kp).call(this, -1), a(this, Xs)) {
    const {
      savedX: t,
      savedY: e,
      savedWidth: n,
      savedHeight: i
    } = a(this, Xs);
    A(this, tc, qp).call(this, t, e, n, i), w(this, Xs, null);
  }
}, m(Ot, Jl), ht(Ot, "_borderLineWidth", -1), ht(Ot, "_colorManager", new Dp()), ht(Ot, "_zIndex", 1), ht(Ot, "_telemetryTimeout", 1e3);
let It = Ot;
class dE extends It {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex
    };
  }
}
const jm = 3285377520, sn = 4294901760, Pn = 65535;
class Ly {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : jm, this.h2 = t ? t & 4294967295 : jm;
  }
  update(t) {
    let e, n;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), n = 0;
      for (let _ = 0, x = t.length; _ < x; _++) {
        const E = t.charCodeAt(_);
        E <= 255 ? e[n++] = E : (e[n++] = E >>> 8, e[n++] = E & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), n = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = n >> 2, s = n - i * 4, o = new Uint32Array(e.buffer, 0, i);
    let l = 0, c = 0, d = this.h1, h = this.h2;
    const f = 3432918353, g = 461845907, y = f & Pn, b = g & Pn;
    for (let _ = 0; _ < i; _++)
      _ & 1 ? (l = o[_], l = l * f & sn | l * y & Pn, l = l << 15 | l >>> 17, l = l * g & sn | l * b & Pn, d ^= l, d = d << 13 | d >>> 19, d = d * 5 + 3864292196) : (c = o[_], c = c * f & sn | c * y & Pn, c = c << 15 | c >>> 17, c = c * g & sn | c * b & Pn, h ^= c, h = h << 13 | h >>> 19, h = h * 5 + 3864292196);
    switch (l = 0, s) {
      case 3:
        l ^= e[i * 4 + 2] << 16;
      case 2:
        l ^= e[i * 4 + 1] << 8;
      case 1:
        l ^= e[i * 4], l = l * f & sn | l * y & Pn, l = l << 15 | l >>> 17, l = l * g & sn | l * b & Pn, i & 1 ? d ^= l : h ^= l;
    }
    this.h1 = d, this.h2 = h;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & sn | t * 36045 & Pn, e = e * 4283543511 & sn | ((e << 16 | t >>> 16) * 2950163797 & sn) >>> 16, t ^= e >>> 1, t = t * 444984403 & sn | t * 60499 & Pn, e = e * 3301882366 & sn | ((e << 16 | t >>> 16) * 3120437893 & sn) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const Zp = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var Js, we, gu, Iy;
class cm {
  constructor() {
    m(this, gu);
    m(this, Js, !1);
    m(this, we, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const n = a(this, we).get(t);
    return n === void 0 ? e : Object.assign(e, n);
  }
  getRawValue(t) {
    return a(this, we).get(t);
  }
  remove(t) {
    if (a(this, we).delete(t), a(this, we).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const e of a(this, we).values())
        if (e instanceof It)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const n = a(this, we).get(t);
    let i = !1;
    if (n !== void 0)
      for (const [s, o] of Object.entries(e))
        n[s] !== o && (i = !0, n[s] = o);
    else
      i = !0, a(this, we).set(t, e);
    i && A(this, gu, Iy).call(this), e instanceof It && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(t) {
    return a(this, we).has(t);
  }
  getAll() {
    return a(this, we).size > 0 ? nm(a(this, we)) : null;
  }
  setAll(t) {
    for (const [e, n] of Object.entries(t))
      this.setValue(e, n);
  }
  get size() {
    return a(this, we).size;
  }
  resetModified() {
    a(this, Js) && (w(this, Js, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new Fy(this);
  }
  get serializable() {
    if (a(this, we).size === 0)
      return Zp;
    const t = /* @__PURE__ */ new Map(), e = new Ly(), n = [], i = /* @__PURE__ */ Object.create(null);
    let s = !1;
    for (const [o, l] of a(this, we)) {
      const c = l instanceof It ? l.serialize(!1, i) : l;
      c && (t.set(o, c), e.update(`${o}:${JSON.stringify(c)}`), s || (s = !!c.bitmap));
    }
    if (s)
      for (const o of t.values())
        o.bitmap && n.push(o.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: n
    } : Zp;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    for (const n of a(this, we).values()) {
      if (!(n instanceof It))
        continue;
      const i = n.telemetryFinalData;
      if (!i)
        continue;
      const {
        type: s
      } = i;
      e.has(s) || e.set(s, Object.getPrototypeOf(n).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const o = t[s] || (t[s] = /* @__PURE__ */ new Map());
      for (const [l, c] of Object.entries(i)) {
        if (l === "type")
          continue;
        let d = o.get(l);
        d || (d = /* @__PURE__ */ new Map(), o.set(l, d));
        const h = d.get(c) ?? 0;
        d.set(c, h + 1);
      }
    }
    for (const [n, i] of e)
      t[n] = i.computeTelemetryFinalData(t[n]);
    return t;
  }
}
Js = new WeakMap(), we = new WeakMap(), gu = new WeakSet(), Iy = function() {
  a(this, Js) || (w(this, Js, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var sc;
class Fy extends cm {
  constructor(e) {
    super();
    m(this, sc, void 0);
    const {
      map: n,
      hash: i,
      transfer: s
    } = e.serializable, o = structuredClone(n, s ? {
      transfer: s
    } : null);
    w(this, sc, {
      map: o,
      hash: i,
      transfer: s
    });
  }
  get print() {
    Dt("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return a(this, sc);
  }
}
sc = new WeakMap();
var To;
class uE {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    m(this, To, /* @__PURE__ */ new Set());
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces)
      this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), a(this, To).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    _inspectFont: e
  }) {
    if (!(!t || a(this, To).has(t.loadedName))) {
      if (ae(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: n,
          src: i,
          style: s
        } = t, o = new FontFace(n, i, s);
        this.addNativeFontFace(o);
        try {
          await o.load(), a(this, To).add(n), e == null || e(t);
        } catch {
          yt(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(o);
        }
        return;
      }
      Dt("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo)
      return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const n = t.createNativeFontFace();
      if (n) {
        this.addNativeFontFace(n);
        try {
          await n.loaded;
        } catch (i) {
          throw yt(`Failed to load font '${n.family}': '${i}'.`), t.disableFontFace = !0, i;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await new Promise((n) => {
        const i = this._queueLoadingCallback(n);
        this._prepareFontLoadEvent(t, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var e;
    const t = !!((e = this._document) != null && e.fonts);
    return xt(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    let t = !1;
    return (Te || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (t = !0), xt(this, "isSyncFontLoadingSupported", t);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (ae(!i.done, "completeRequest() cannot be called twice."), i.done = !0; n.length > 0 && n[0].done; ) {
        const s = n.shift();
        setTimeout(s.callback, 0);
      }
    }
    const {
      loadingRequests: n
    } = this, i = {
      done: !1,
      complete: e,
      callback: t
    };
    return n.push(i), i;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return xt(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function n(L, F) {
      return L.charCodeAt(F) << 24 | L.charCodeAt(F + 1) << 16 | L.charCodeAt(F + 2) << 8 | L.charCodeAt(F + 3) & 255;
    }
    function i(L, F, I, M) {
      const C = L.substring(0, F), T = L.substring(F + I);
      return C + M + T;
    }
    let s, o;
    const l = this._document.createElement("canvas");
    l.width = 1, l.height = 1;
    const c = l.getContext("2d");
    let d = 0;
    function h(L, F) {
      if (++d > 30) {
        yt("Load test font never loaded."), F();
        return;
      }
      if (c.font = "30px " + L, c.fillText(".", 0, 20), c.getImageData(0, 0, 1, 1).data[3] > 0) {
        F();
        return;
      }
      setTimeout(h.bind(null, L, F));
    }
    const f = `lt${Date.now()}${this.loadTestFontId++}`;
    let g = this._loadTestFont;
    g = i(g, 976, f.length, f);
    const b = 16, _ = 1482184792;
    let x = n(g, b);
    for (s = 0, o = f.length - 3; s < o; s += 4)
      x = x - _ + n(f, s) | 0;
    s < f.length && (x = x - _ + n(f + "XXX", s) | 0), g = i(g, b, 4, Y_(x));
    const E = `url(data:font/opentype;base64,${btoa(g)});`, P = `@font-face {font-family:"${f}";src:${E}}`;
    this.insertRule(P);
    const k = this._document.createElement("div");
    k.style.visibility = "hidden", k.style.width = k.style.height = "10px", k.style.position = "absolute", k.style.top = k.style.left = "0px";
    for (const L of [t.loadedName, f]) {
      const F = this._document.createElement("span");
      F.textContent = "Hi", F.style.fontFamily = L, k.append(F);
    }
    this._document.body.append(k), h(f, () => {
      k.remove(), e.complete();
    });
  }
}
To = new WeakMap();
class fE {
  constructor(t, {
    disableFontFace: e = !1,
    inspectFont: n = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const i in t)
      this[i] = t[i];
    this.disableFontFace = e === !0, this._inspectFont = n;
  }
  createNativeFontFace() {
    var e;
    if (!this.data || this.disableFontFace)
      return null;
    let t;
    if (!this.cssFontInfo)
      t = new FontFace(this.loadedName, this.data, {});
    else {
      const n = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (n.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, n);
    }
    return (e = this._inspectFont) == null || e.call(this, this), t;
  }
  createFontFaceRule() {
    var i;
    if (!this.data || this.disableFontFace)
      return null;
    const t = ny(this.data), e = `url(data:${this.mimetype};base64,${btoa(t)});`;
    let n;
    if (!this.cssFontInfo)
      n = `@font-face {font-family:"${this.loadedName}";src:${e}}`;
    else {
      let s = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (s += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), n = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${s}src:${e}}`;
    }
    return (i = this._inspectFont) == null || i.call(this, this, e), n;
  }
  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0)
      return this.compiledGlyphs[e];
    let n;
    try {
      n = t.get(this.loadedName + "_path_" + e);
    } catch (s) {
      yt(`getPathGenerator - ignoring character: "${s}".`);
    }
    if (!Array.isArray(n) || n.length === 0)
      return this.compiledGlyphs[e] = function(s, o) {
      };
    const i = [];
    for (let s = 0, o = n.length; s < o; )
      switch (n[s++]) {
        case Qn.BEZIER_CURVE_TO:
          {
            const [l, c, d, h, f, g] = n.slice(s, s + 6);
            i.push((y) => y.bezierCurveTo(l, c, d, h, f, g)), s += 6;
          }
          break;
        case Qn.MOVE_TO:
          {
            const [l, c] = n.slice(s, s + 2);
            i.push((d) => d.moveTo(l, c)), s += 2;
          }
          break;
        case Qn.LINE_TO:
          {
            const [l, c] = n.slice(s, s + 2);
            i.push((d) => d.lineTo(l, c)), s += 2;
          }
          break;
        case Qn.QUADRATIC_CURVE_TO:
          {
            const [l, c, d, h] = n.slice(s, s + 4);
            i.push((f) => f.quadraticCurveTo(l, c, d, h)), s += 4;
          }
          break;
        case Qn.RESTORE:
          i.push((l) => l.restore());
          break;
        case Qn.SAVE:
          i.push((l) => l.save());
          break;
        case Qn.SCALE:
          ae(i.length === 2, "Scale command is only valid at the third position.");
          break;
        case Qn.TRANSFORM:
          {
            const [l, c, d, h, f, g] = n.slice(s, s + 6);
            i.push((y) => y.transform(l, c, d, h, f, g)), s += 6;
          }
          break;
        case Qn.TRANSLATE:
          {
            const [l, c] = n.slice(s, s + 2);
            i.push((d) => d.translate(l, c)), s += 2;
          }
          break;
      }
    return this.compiledGlyphs[e] = function(o, l) {
      i[0](o), i[1](o), o.scale(l, -l);
      for (let c = 2, d = i.length; c < d; c++)
        i[c](o);
    };
  }
}
if (Te) {
  var Jp = Promise.withResolvers(), ol = null;
  (async () => {
    const t = await import(
      /*webpackIgnore: true*/
      "./empty-GlqisfcO.js"
    ), e = await import(
      /*webpackIgnore: true*/
      "./index-L5WvzV3F.js"
    ).then((l) => l.i), n = await import(
      /*webpackIgnore: true*/
      "./index-CS1DSOJ3.js"
    ).then((l) => l.i), i = await import(
      /*webpackIgnore: true*/
      "./url-Ckbfw1FG.js"
    ).then((l) => l.u);
    let s, o;
    return new Map(Object.entries({
      fs: t,
      http: e,
      https: n,
      url: i,
      canvas: s,
      path2d: o
    }));
  })().then((t) => {
    ol = t, Jp.resolve();
  }, (t) => {
    yt(`loadPackages: ${t}`), ol = /* @__PURE__ */ new Map(), Jp.resolve();
  });
}
class Jn {
  static get promise() {
    return Jp.promise;
  }
  static get(t) {
    return ol == null ? void 0 : ol.get(t);
  }
}
const My = function(r) {
  return Jn.get("fs").promises.readFile(r).then((e) => new Uint8Array(e));
};
class pE extends Of {
}
class gE extends Bf {
  _createCanvas(t, e) {
    return Jn.get("canvas").createCanvas(t, e);
  }
}
class mE extends $f {
  _fetchData(t, e) {
    return My(t).then((n) => ({
      cMapData: n,
      compressionType: e
    }));
  }
}
class yE extends Hf {
  _fetchData(t) {
    return My(t);
  }
}
const Me = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function Qp(r, t) {
  if (!t)
    return;
  const e = t[2] - t[0], n = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, n), r.clip(i);
}
class Dh {
  constructor() {
    this.constructor === Dh && Dt("Cannot initialize BaseShadingPattern.");
  }
  getPattern() {
    Dt("Abstract method `getPattern` called.");
  }
}
class bE extends Dh {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  _createGradient(t) {
    let e;
    this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const n of this._colorStops)
      e.addColorStop(n[0], n[1]);
    return e;
  }
  getPattern(t, e, n, i) {
    let s;
    if (i === Me.STROKE || i === Me.FILL) {
      const o = e.current.getClippedPathBoundingBox(i, Gt(t)) || [0, 0, 0, 0], l = Math.ceil(o[2] - o[0]) || 1, c = Math.ceil(o[3] - o[1]) || 1, d = e.cachedCanvases.getCanvas("pattern", l, c, !0), h = d.context;
      h.clearRect(0, 0, h.canvas.width, h.canvas.height), h.beginPath(), h.rect(0, 0, h.canvas.width, h.canvas.height), h.translate(-o[0], -o[1]), n = Q.transform(n, [1, 0, 0, 1, o[0], o[1]]), h.transform(...e.baseTransform), this.matrix && h.transform(...this.matrix), Qp(h, this._bbox), h.fillStyle = this._createGradient(h), h.fill(), s = t.createPattern(d.canvas, "no-repeat");
      const f = new DOMMatrix(n);
      s.setTransform(f);
    } else
      Qp(t, this._bbox), s = this._createGradient(t);
    return s;
  }
}
function op(r, t, e, n, i, s, o, l) {
  const c = t.coords, d = t.colors, h = r.data, f = r.width * 4;
  let g;
  c[e + 1] > c[n + 1] && (g = e, e = n, n = g, g = s, s = o, o = g), c[n + 1] > c[i + 1] && (g = n, n = i, i = g, g = o, o = l, l = g), c[e + 1] > c[n + 1] && (g = e, e = n, n = g, g = s, s = o, o = g);
  const y = (c[e] + t.offsetX) * t.scaleX, b = (c[e + 1] + t.offsetY) * t.scaleY, _ = (c[n] + t.offsetX) * t.scaleX, x = (c[n + 1] + t.offsetY) * t.scaleY, E = (c[i] + t.offsetX) * t.scaleX, P = (c[i + 1] + t.offsetY) * t.scaleY;
  if (b >= P)
    return;
  const k = d[s], L = d[s + 1], F = d[s + 2], I = d[o], M = d[o + 1], C = d[o + 2], T = d[l], N = d[l + 1], D = d[l + 2], H = Math.round(b), U = Math.round(P);
  let G, Y, Z, B, V, W, bt, ut;
  for (let z = H; z <= U; z++) {
    if (z < x) {
      const K = z < b ? 0 : (b - z) / (b - x);
      G = y - (y - _) * K, Y = k - (k - I) * K, Z = L - (L - M) * K, B = F - (F - C) * K;
    } else {
      let K;
      z > P ? K = 1 : x === P ? K = 0 : K = (x - z) / (x - P), G = _ - (_ - E) * K, Y = I - (I - T) * K, Z = M - (M - N) * K, B = C - (C - D) * K;
    }
    let nt;
    z < b ? nt = 0 : z > P ? nt = 1 : nt = (b - z) / (b - P), V = y - (y - E) * nt, W = k - (k - T) * nt, bt = L - (L - N) * nt, ut = F - (F - D) * nt;
    const tt = Math.round(Math.min(G, V)), et = Math.round(Math.max(G, V));
    let lt = f * z + tt * 4;
    for (let K = tt; K <= et; K++)
      nt = (G - K) / (G - V), nt < 0 ? nt = 0 : nt > 1 && (nt = 1), h[lt++] = Y - (Y - W) * nt | 0, h[lt++] = Z - (Z - bt) * nt | 0, h[lt++] = B - (B - ut) * nt | 0, h[lt++] = 255;
  }
}
function vE(r, t, e) {
  const n = t.coords, i = t.colors;
  let s, o;
  switch (t.type) {
    case "lattice":
      const l = t.verticesPerRow, c = Math.floor(n.length / l) - 1, d = l - 1;
      for (s = 0; s < c; s++) {
        let h = s * l;
        for (let f = 0; f < d; f++, h++)
          op(r, e, n[h], n[h + 1], n[h + l], i[h], i[h + 1], i[h + l]), op(r, e, n[h + l + 1], n[h + 1], n[h + l], i[h + l + 1], i[h + 1], i[h + l]);
      }
      break;
    case "triangles":
      for (s = 0, o = n.length; s < o; s += 3)
        op(r, e, n[s], n[s + 1], n[s + 2], i[s], i[s + 1], i[s + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class wE extends Dh {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null;
  }
  _createMeshCanvas(t, e, n) {
    const l = Math.floor(this._bounds[0]), c = Math.floor(this._bounds[1]), d = Math.ceil(this._bounds[2]) - l, h = Math.ceil(this._bounds[3]) - c, f = Math.min(Math.ceil(Math.abs(d * t[0] * 1.1)), 3e3), g = Math.min(Math.ceil(Math.abs(h * t[1] * 1.1)), 3e3), y = d / f, b = h / g, _ = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -l,
      offsetY: -c,
      scaleX: 1 / y,
      scaleY: 1 / b
    }, x = f + 2 * 2, E = g + 2 * 2, P = n.getCanvas("mesh", x, E, !1), k = P.context, L = k.createImageData(f, g);
    if (e) {
      const I = L.data;
      for (let M = 0, C = I.length; M < C; M += 4)
        I[M] = e[0], I[M + 1] = e[1], I[M + 2] = e[2], I[M + 3] = 255;
    }
    for (const I of this._figures)
      vE(L, I, _);
    return k.putImageData(L, 2, 2), {
      canvas: P.canvas,
      offsetX: l - 2 * y,
      offsetY: c - 2 * b,
      scaleX: y,
      scaleY: b
    };
  }
  getPattern(t, e, n, i) {
    Qp(t, this._bbox);
    let s;
    if (i === Me.SHADING)
      s = Q.singularValueDecompose2dScale(Gt(t));
    else if (s = Q.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
      const l = Q.singularValueDecompose2dScale(this.matrix);
      s = [s[0] * l[0], s[1] * l[1]];
    }
    const o = this._createMeshCanvas(s, i === Me.SHADING ? null : this._background, e.cachedCanvases);
    return i !== Me.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(o.offsetX, o.offsetY), t.scale(o.scaleX, o.scaleY), t.createPattern(o.canvas, "no-repeat");
  }
}
class AE extends Dh {
  getPattern() {
    return "hotpink";
  }
}
function _E(r) {
  switch (r[0]) {
    case "RadialAxial":
      return new bE(r);
    case "Mesh":
      return new wE(r);
    case "Dummy":
      return new AE();
  }
  throw new Error(`Unknown IR type: ${r[0]}`);
}
const Gm = {
  COLORED: 1,
  UNCOLORED: 2
}, mu = class mu {
  constructor(t, e, n, i, s) {
    this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.ctx = n, this.canvasGraphicsFactory = i, this.baseTransform = s;
  }
  createPatternCanvas(t) {
    const e = this.operatorList, n = this.bbox, i = this.xstep, s = this.ystep, o = this.paintType, l = this.tilingType, c = this.color, d = this.canvasGraphicsFactory;
    Mf("TilingType: " + l);
    const h = n[0], f = n[1], g = n[2], y = n[3], b = Q.singularValueDecompose2dScale(this.matrix), _ = Q.singularValueDecompose2dScale(this.baseTransform), x = [b[0] * _[0], b[1] * _[1]], E = this.getSizeAndScale(i, this.ctx.canvas.width, x[0]), P = this.getSizeAndScale(s, this.ctx.canvas.height, x[1]), k = t.cachedCanvases.getCanvas("pattern", E.size, P.size, !0), L = k.context, F = d.createCanvasGraphics(L);
    F.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(F, o, c);
    let I = h, M = f, C = g, T = y;
    return h < 0 && (I = 0, C += Math.abs(h)), f < 0 && (M = 0, T += Math.abs(f)), L.translate(-(E.scale * I), -(P.scale * M)), F.transform(E.scale, 0, 0, P.scale, 0, 0), L.save(), this.clipBbox(F, I, M, C, T), F.baseTransform = Gt(F.ctx), F.executeOperatorList(e), F.endDrawing(), {
      canvas: k.canvas,
      scaleX: E.scale,
      scaleY: P.scale,
      offsetX: I,
      offsetY: M
    };
  }
  getSizeAndScale(t, e, n) {
    t = Math.abs(t);
    const i = Math.max(mu.MAX_PATTERN_SIZE, e);
    let s = Math.ceil(t * n);
    return s >= i ? s = i : n = s / t, {
      scale: n,
      size: s
    };
  }
  clipBbox(t, e, n, i, s) {
    const o = i - e, l = s - n;
    t.ctx.rect(e, n, o, l), t.current.updateRectMinMax(Gt(t.ctx), [e, n, i, s]), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, n) {
    const i = t.ctx, s = t.current;
    switch (e) {
      case Gm.COLORED:
        const o = this.ctx;
        i.fillStyle = o.fillStyle, i.strokeStyle = o.strokeStyle, s.fillColor = o.fillStyle, s.strokeColor = o.strokeStyle;
        break;
      case Gm.UNCOLORED:
        const l = Q.makeHexColor(n[0], n[1], n[2]);
        i.fillStyle = l, i.strokeStyle = l, s.fillColor = l, s.strokeColor = l;
        break;
      default:
        throw new X_(`Unsupported paint type: ${e}`);
    }
  }
  getPattern(t, e, n, i) {
    let s = n;
    i !== Me.SHADING && (s = Q.transform(s, e.baseTransform), this.matrix && (s = Q.transform(s, this.matrix)));
    const o = this.createPatternCanvas(e);
    let l = new DOMMatrix(s);
    l = l.translate(o.offsetX, o.offsetY), l = l.scale(1 / o.scaleX, 1 / o.scaleY);
    const c = t.createPattern(o.canvas, "repeat");
    return c.setTransform(l), c;
  }
};
ht(mu, "MAX_PATTERN_SIZE", 3e3);
let tg = mu;
function EE({
  src: r,
  srcPos: t = 0,
  dest: e,
  width: n,
  height: i,
  nonBlackColor: s = 4294967295,
  inverseDecode: o = !1
}) {
  const l = je.isLittleEndian ? 4278190080 : 255, [c, d] = o ? [s, l] : [l, s], h = n >> 3, f = n & 7, g = r.length;
  e = new Uint32Array(e.buffer);
  let y = 0;
  for (let b = 0; b < i; b++) {
    for (const x = t + h; t < x; t++) {
      const E = t < g ? r[t] : 255;
      e[y++] = E & 128 ? d : c, e[y++] = E & 64 ? d : c, e[y++] = E & 32 ? d : c, e[y++] = E & 16 ? d : c, e[y++] = E & 8 ? d : c, e[y++] = E & 4 ? d : c, e[y++] = E & 2 ? d : c, e[y++] = E & 1 ? d : c;
    }
    if (f === 0)
      continue;
    const _ = t < g ? r[t++] : 255;
    for (let x = 0; x < f; x++)
      e[y++] = _ & 1 << 7 - x ? d : c;
  }
  return {
    srcPos: t,
    destPos: y
  };
}
const Vm = 16, Wm = 100, SE = 15, qm = 10, Xm = 1e3, $e = 16;
function xE(r, t) {
  if (r._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  r.__originalSave = r.save, r.__originalRestore = r.restore, r.__originalRotate = r.rotate, r.__originalScale = r.scale, r.__originalTranslate = r.translate, r.__originalTransform = r.transform, r.__originalSetTransform = r.setTransform, r.__originalResetTransform = r.resetTransform, r.__originalClip = r.clip, r.__originalMoveTo = r.moveTo, r.__originalLineTo = r.lineTo, r.__originalBezierCurveTo = r.bezierCurveTo, r.__originalRect = r.rect, r.__originalClosePath = r.closePath, r.__originalBeginPath = r.beginPath, r._removeMirroring = () => {
    r.save = r.__originalSave, r.restore = r.__originalRestore, r.rotate = r.__originalRotate, r.scale = r.__originalScale, r.translate = r.__originalTranslate, r.transform = r.__originalTransform, r.setTransform = r.__originalSetTransform, r.resetTransform = r.__originalResetTransform, r.clip = r.__originalClip, r.moveTo = r.__originalMoveTo, r.lineTo = r.__originalLineTo, r.bezierCurveTo = r.__originalBezierCurveTo, r.rect = r.__originalRect, r.closePath = r.__originalClosePath, r.beginPath = r.__originalBeginPath, delete r._removeMirroring;
  }, r.save = function() {
    t.save(), this.__originalSave();
  }, r.restore = function() {
    t.restore(), this.__originalRestore();
  }, r.translate = function(n, i) {
    t.translate(n, i), this.__originalTranslate(n, i);
  }, r.scale = function(n, i) {
    t.scale(n, i), this.__originalScale(n, i);
  }, r.transform = function(n, i, s, o, l, c) {
    t.transform(n, i, s, o, l, c), this.__originalTransform(n, i, s, o, l, c);
  }, r.setTransform = function(n, i, s, o, l, c) {
    t.setTransform(n, i, s, o, l, c), this.__originalSetTransform(n, i, s, o, l, c);
  }, r.resetTransform = function() {
    t.resetTransform(), this.__originalResetTransform();
  }, r.rotate = function(n) {
    t.rotate(n), this.__originalRotate(n);
  }, r.clip = function(n) {
    t.clip(n), this.__originalClip(n);
  }, r.moveTo = function(e, n) {
    t.moveTo(e, n), this.__originalMoveTo(e, n);
  }, r.lineTo = function(e, n) {
    t.lineTo(e, n), this.__originalLineTo(e, n);
  }, r.bezierCurveTo = function(e, n, i, s, o, l) {
    t.bezierCurveTo(e, n, i, s, o, l), this.__originalBezierCurveTo(e, n, i, s, o, l);
  }, r.rect = function(e, n, i, s) {
    t.rect(e, n, i, s), this.__originalRect(e, n, i, s);
  }, r.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, r.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
class CE {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t, e, n) {
    let i;
    return this.cache[t] !== void 0 ? (i = this.cache[t], this.canvasFactory.reset(i, e, n)) : (i = this.canvasFactory.create(e, n), this.cache[t] = i), i;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e), delete this.cache[t];
    }
  }
}
function Gh(r, t, e, n, i, s, o, l, c, d) {
  const [h, f, g, y, b, _] = Gt(r);
  if (f === 0 && g === 0) {
    const P = o * h + b, k = Math.round(P), L = l * y + _, F = Math.round(L), I = (o + c) * h + b, M = Math.abs(Math.round(I) - k) || 1, C = (l + d) * y + _, T = Math.abs(Math.round(C) - F) || 1;
    return r.setTransform(Math.sign(h), 0, 0, Math.sign(y), k, F), r.drawImage(t, e, n, i, s, 0, 0, M, T), r.setTransform(h, f, g, y, b, _), [M, T];
  }
  if (h === 0 && y === 0) {
    const P = l * g + b, k = Math.round(P), L = o * f + _, F = Math.round(L), I = (l + d) * g + b, M = Math.abs(Math.round(I) - k) || 1, C = (o + c) * f + _, T = Math.abs(Math.round(C) - F) || 1;
    return r.setTransform(0, Math.sign(f), Math.sign(g), 0, k, F), r.drawImage(t, e, n, i, s, 0, 0, T, M), r.setTransform(h, f, g, y, b, _), [T, M];
  }
  r.drawImage(t, e, n, i, s, o, l, c, d);
  const x = Math.hypot(h, f), E = Math.hypot(g, y);
  return [x * c, E * d];
}
function TE(r) {
  const {
    width: t,
    height: e
  } = r;
  if (t > Xm || e > Xm)
    return null;
  const n = 1e3, i = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), s = t + 1;
  let o = new Uint8Array(s * (e + 1)), l, c, d;
  const h = t + 7 & -8;
  let f = new Uint8Array(h * e), g = 0;
  for (const E of r.data) {
    let P = 128;
    for (; P > 0; )
      f[g++] = E & P ? 0 : 255, P >>= 1;
  }
  let y = 0;
  for (g = 0, f[g] !== 0 && (o[0] = 1, ++y), c = 1; c < t; c++)
    f[g] !== f[g + 1] && (o[c] = f[g] ? 2 : 1, ++y), g++;
  for (f[g] !== 0 && (o[c] = 2, ++y), l = 1; l < e; l++) {
    g = l * h, d = l * s, f[g - h] !== f[g] && (o[d] = f[g] ? 1 : 8, ++y);
    let E = (f[g] ? 4 : 0) + (f[g - h] ? 8 : 0);
    for (c = 1; c < t; c++)
      E = (E >> 2) + (f[g + 1] ? 4 : 0) + (f[g - h + 1] ? 8 : 0), i[E] && (o[d + c] = i[E], ++y), g++;
    if (f[g - h] !== f[g] && (o[d + c] = f[g] ? 2 : 4, ++y), y > n)
      return null;
  }
  for (g = h * (e - 1), d = l * s, f[g] !== 0 && (o[d] = 8, ++y), c = 1; c < t; c++)
    f[g] !== f[g + 1] && (o[d + c] = f[g] ? 4 : 8, ++y), g++;
  if (f[g] !== 0 && (o[d + c] = 4, ++y), y > n)
    return null;
  const b = new Int32Array([0, s, -1, 0, -s, 0, 0, 0, 1]), _ = new Path2D();
  for (l = 0; y && l <= e; l++) {
    let E = l * s;
    const P = E + t;
    for (; E < P && !o[E]; )
      E++;
    if (E === P)
      continue;
    _.moveTo(E % s, l);
    const k = E;
    let L = o[E];
    do {
      const F = b[L];
      do
        E += F;
      while (!o[E]);
      const I = o[E];
      I !== 5 && I !== 10 ? (L = I, o[E] = 0) : (L = I & 51 * L >> 4, o[E] &= L >> 2 | L << 2), _.lineTo(E % s, E / s | 0), o[E] || --y;
    } while (k !== E);
    --l;
  }
  return f = null, o = null, function(E) {
    E.save(), E.scale(1 / t, -1 / e), E.translate(0, -e), E.fill(_), E.beginPath(), E.restore();
  };
}
class Ym {
  constructor(t, e) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = ty, this.textMatrixScale = 1, this.fontMatrix = Sp, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = Ee.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, t, e]);
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t;
  }
  setCurrentPoint(t, e) {
    this.x = t, this.y = e;
  }
  updatePathMinMax(t, e, n) {
    [e, n] = Q.applyTransform([e, n], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, n), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, n);
  }
  updateRectMinMax(t, e) {
    const n = Q.applyTransform(e, t), i = Q.applyTransform(e.slice(2), t), s = Q.applyTransform([e[0], e[3]], t), o = Q.applyTransform([e[2], e[1]], t);
    this.minX = Math.min(this.minX, n[0], i[0], s[0], o[0]), this.minY = Math.min(this.minY, n[1], i[1], s[1], o[1]), this.maxX = Math.max(this.maxX, n[0], i[0], s[0], o[0]), this.maxY = Math.max(this.maxY, n[1], i[1], s[1], o[1]);
  }
  updateScalingPathMinMax(t, e) {
    Q.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3]);
  }
  updateCurvePathMinMax(t, e, n, i, s, o, l, c, d, h) {
    const f = Q.bezierBoundingBox(e, n, i, s, o, l, c, d, h);
    h || this.updateRectMinMax(t, f);
  }
  getPathBoundingBox(t = Me.FILL, e = null) {
    const n = [this.minX, this.minY, this.maxX, this.maxY];
    if (t === Me.STROKE) {
      e || Dt("Stroke bounding box must include transform.");
      const i = Q.singularValueDecompose2dScale(e), s = i[0] * this.lineWidth / 2, o = i[1] * this.lineWidth / 2;
      n[0] -= s, n[1] -= o, n[2] += s, n[3] += o;
    }
    return n;
  }
  updateClipFromPath() {
    const t = Q.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(t = Me.FILL, e = null) {
    return Q.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function Km(r, t) {
  if (typeof ImageData < "u" && t instanceof ImageData) {
    r.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, n = t.width, i = e % $e, s = (e - i) / $e, o = i === 0 ? s : s + 1, l = r.createImageData(n, $e);
  let c = 0, d;
  const h = t.data, f = l.data;
  let g, y, b, _;
  if (t.kind === nd.GRAYSCALE_1BPP) {
    const x = h.byteLength, E = new Uint32Array(f.buffer, 0, f.byteLength >> 2), P = E.length, k = n + 7 >> 3, L = 4294967295, F = je.isLittleEndian ? 4278190080 : 255;
    for (g = 0; g < o; g++) {
      for (b = g < s ? $e : i, d = 0, y = 0; y < b; y++) {
        const I = x - c;
        let M = 0;
        const C = I > k ? n : I * 8 - 7, T = C & -8;
        let N = 0, D = 0;
        for (; M < T; M += 8)
          D = h[c++], E[d++] = D & 128 ? L : F, E[d++] = D & 64 ? L : F, E[d++] = D & 32 ? L : F, E[d++] = D & 16 ? L : F, E[d++] = D & 8 ? L : F, E[d++] = D & 4 ? L : F, E[d++] = D & 2 ? L : F, E[d++] = D & 1 ? L : F;
        for (; M < C; M++)
          N === 0 && (D = h[c++], N = 128), E[d++] = D & N ? L : F, N >>= 1;
      }
      for (; d < P; )
        E[d++] = 0;
      r.putImageData(l, 0, g * $e);
    }
  } else if (t.kind === nd.RGBA_32BPP) {
    for (y = 0, _ = n * $e * 4, g = 0; g < s; g++)
      f.set(h.subarray(c, c + _)), c += _, r.putImageData(l, 0, y), y += $e;
    g < o && (_ = n * i * 4, f.set(h.subarray(c, c + _)), r.putImageData(l, 0, y));
  } else if (t.kind === nd.RGB_24BPP)
    for (b = $e, _ = n * b, g = 0; g < o; g++) {
      for (g >= s && (b = i, _ = n * b), d = 0, y = _; y--; )
        f[d++] = h[c++], f[d++] = h[c++], f[d++] = h[c++], f[d++] = 255;
      r.putImageData(l, 0, g * $e);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function Zm(r, t) {
  if (t.bitmap) {
    r.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, n = t.width, i = e % $e, s = (e - i) / $e, o = i === 0 ? s : s + 1, l = r.createImageData(n, $e);
  let c = 0;
  const d = t.data, h = l.data;
  for (let f = 0; f < o; f++) {
    const g = f < s ? $e : i;
    ({
      srcPos: c
    } = EE({
      src: d,
      srcPos: c,
      dest: h,
      width: n,
      height: g,
      nonBlackColor: 0
    })), r.putImageData(l, 0, f * $e);
  }
}
function Ha(r, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const n of e)
    r[n] !== void 0 && (t[n] = r[n]);
  r.setLineDash !== void 0 && (t.setLineDash(r.getLineDash()), t.lineDashOffset = r.lineDashOffset);
}
function Vh(r) {
  if (r.strokeStyle = r.fillStyle = "#000000", r.fillRule = "nonzero", r.globalAlpha = 1, r.lineWidth = 1, r.lineCap = "butt", r.lineJoin = "miter", r.miterLimit = 10, r.globalCompositeOperation = "source-over", r.font = "10px sans-serif", r.setLineDash !== void 0 && (r.setLineDash([]), r.lineDashOffset = 0), !Te) {
    const {
      filter: t
    } = r;
    t !== "none" && t !== "" && (r.filter = "none");
  }
}
function Jm(r, t) {
  if (t)
    return !0;
  const e = Q.singularValueDecompose2dScale(r);
  e[0] = Math.fround(e[0]), e[1] = Math.fround(e[1]);
  const n = Math.fround((globalThis.devicePixelRatio || 1) * vs.PDF_TO_CSS_UNITS);
  return e[0] <= n && e[1] <= n;
}
const PE = ["butt", "round", "square"], RE = ["miter", "round", "bevel"], kE = {}, Qm = {};
var rc, eg, oc, ng;
const wm = class wm {
  constructor(t, e, n, i, s, {
    optionalContentConfig: o,
    markedContentStack: l = null
  }, c, d) {
    m(this, rc);
    m(this, oc);
    this.ctx = t, this.current = new Ym(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = n, this.canvasFactory = i, this.filterFactory = s, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = l || [], this.optionalContentConfig = o, this.cachedCanvases = new CE(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = c, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = d, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(t, e = null) {
    return typeof t == "string" ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: n = !1,
    background: i = null
  }) {
    const s = this.ctx.canvas.width, o = this.ctx.canvas.height, l = this.ctx.fillStyle;
    if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, s, o), this.ctx.fillStyle = l, n) {
      const c = this.cachedCanvases.getCanvas("transparent", s, o);
      this.compositeCtx = this.ctx, this.transparentCanvas = c.canvas, this.ctx = c.context, this.ctx.save(), this.ctx.transform(...Gt(this.compositeCtx));
    }
    this.ctx.save(), Vh(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = Gt(this.ctx);
  }
  executeOperatorList(t, e, n, i) {
    const s = t.argsArray, o = t.fnArray;
    let l = e || 0;
    const c = s.length;
    if (c === l)
      return l;
    const d = c - l > qm && typeof n == "function", h = d ? Date.now() + SE : 0;
    let f = 0;
    const g = this.commonObjs, y = this.objs;
    let b;
    for (; ; ) {
      if (i !== void 0 && l === i.nextBreakPoint)
        return i.breakIt(l, n), l;
      if (b = o[l], b !== pn.dependency)
        this[b].apply(this, s[l]);
      else
        for (const _ of s[l]) {
          const x = _.startsWith("g_") ? g : y;
          if (!x.has(_))
            return x.get(_, n), l;
        }
      if (l++, l === c)
        return l;
      if (d && ++f > qm) {
        if (Date.now() > h)
          return n(), l;
        f = 0;
      }
    }
  }
  endDrawing() {
    A(this, rc, eg).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), A(this, oc, ng).call(this);
  }
  _scaleImage(t, e) {
    const n = t.width, i = t.height;
    let s = Math.max(Math.hypot(e[0], e[1]), 1), o = Math.max(Math.hypot(e[2], e[3]), 1), l = n, c = i, d = "prescale1", h, f;
    for (; s > 2 && l > 1 || o > 2 && c > 1; ) {
      let g = l, y = c;
      s > 2 && l > 1 && (g = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l / 2), s /= l / g), o > 2 && c > 1 && (y = c >= 16384 ? Math.floor(c / 2) - 1 || 1 : Math.ceil(c) / 2, o /= c / y), h = this.cachedCanvases.getCanvas(d, g, y), f = h.context, f.clearRect(0, 0, g, y), f.drawImage(t, 0, 0, l, c, 0, 0, g, y), t = h.canvas, l = g, c = y, d = d === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: t,
      paintWidth: l,
      paintHeight: c
    };
  }
  _createMaskCanvas(t) {
    const e = this.ctx, {
      width: n,
      height: i
    } = t, s = this.current.fillColor, o = this.current.patternFill, l = Gt(e);
    let c, d, h, f;
    if ((t.bitmap || t.data) && t.count > 1) {
      const C = t.bitmap || t.data.buffer;
      d = JSON.stringify(o ? l : [l.slice(0, 4), s]), c = this._cachedBitmapsMap.get(C), c || (c = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(C, c));
      const T = c.get(d);
      if (T && !o) {
        const N = Math.round(Math.min(l[0], l[2]) + l[4]), D = Math.round(Math.min(l[1], l[3]) + l[5]);
        return {
          canvas: T,
          offsetX: N,
          offsetY: D
        };
      }
      h = T;
    }
    h || (f = this.cachedCanvases.getCanvas("maskCanvas", n, i), Zm(f.context, t));
    let g = Q.transform(l, [1 / n, 0, 0, -1 / i, 0, 0]);
    g = Q.transform(g, [1, 0, 0, 1, 0, -i]);
    const [y, b, _, x] = Q.getAxialAlignedBoundingBox([0, 0, n, i], g), E = Math.round(_ - y) || 1, P = Math.round(x - b) || 1, k = this.cachedCanvases.getCanvas("fillCanvas", E, P), L = k.context, F = y, I = b;
    L.translate(-F, -I), L.transform(...g), h || (h = this._scaleImage(f.canvas, ti(L)), h = h.img, c && o && c.set(d, h)), L.imageSmoothingEnabled = Jm(Gt(L), t.interpolate), Gh(L, h, 0, 0, h.width, h.height, 0, 0, n, i), L.globalCompositeOperation = "source-in";
    const M = Q.transform(ti(L), [1, 0, 0, 1, -F, -I]);
    return L.fillStyle = o ? s.getPattern(e, this, M, Me.FILL) : s, L.fillRect(0, 0, n, i), c && !o && (this.cachedCanvases.delete("fillCanvas"), c.set(d, k.canvas)), {
      canvas: k.canvas,
      offsetX: Math.round(F),
      offsetY: Math.round(I)
    };
  }
  setLineWidth(t) {
    t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
  }
  setLineCap(t) {
    this.ctx.lineCap = PE[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = RE[t];
  }
  setMiterLimit(t) {
    this.ctx.miterLimit = t;
  }
  setDash(t, e) {
    const n = this.ctx;
    n.setLineDash !== void 0 && (n.setLineDash(t), n.lineDashOffset = e);
  }
  setRenderingIntent(t) {
  }
  setFlatness(t) {
  }
  setGState(t) {
    for (const [e, n] of t)
      switch (e) {
        case "LW":
          this.setLineWidth(n);
          break;
        case "LC":
          this.setLineCap(n);
          break;
        case "LJ":
          this.setLineJoin(n);
          break;
        case "ML":
          this.setMiterLimit(n);
          break;
        case "D":
          this.setDash(n[0], n[1]);
          break;
        case "RI":
          this.setRenderingIntent(n);
          break;
        case "FL":
          this.setFlatness(n);
          break;
        case "Font":
          this.setFont(n[0], n[1]);
          break;
        case "CA":
          this.current.strokeAlpha = n;
          break;
        case "ca":
          this.current.fillAlpha = n, this.ctx.globalAlpha = n;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = n;
          break;
        case "SMask":
          this.current.activeSMask = n ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(n);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
  }
  beginSMaskMode() {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const t = this.ctx.canvas.width, e = this.ctx.canvas.height, n = "smaskGroupAt" + this.groupLevel, i = this.cachedCanvases.getCanvas(n, t, e);
    this.suspendedCtx = this.ctx, this.ctx = i.context;
    const s = this.ctx;
    s.setTransform(...Gt(this.suspendedCtx)), Ha(this.suspendedCtx, s), xE(s, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Ha(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, n = this.suspendedCtx;
    this.composeSMask(n, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, n, i) {
    const s = i[0], o = i[1], l = i[2] - s, c = i[3] - o;
    l === 0 || c === 0 || (this.genericComposeSMask(e.context, n, l, c, e.subtype, e.backdrop, e.transferMap, s, o, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(n.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, n, i, s, o, l, c, d, h, f) {
    let g = t.canvas, y = c - h, b = d - f;
    if (o) {
      if (y < 0 || b < 0 || y + n > g.width || b + i > g.height) {
        const x = this.cachedCanvases.getCanvas("maskExtension", n, i), E = x.context;
        E.drawImage(g, -y, -b), o.some((P) => P !== 0) && (E.globalCompositeOperation = "destination-atop", E.fillStyle = Q.makeHexColor(...o), E.fillRect(0, 0, n, i), E.globalCompositeOperation = "source-over"), g = x.canvas, y = b = 0;
      } else if (o.some((x) => x !== 0)) {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const x = new Path2D();
        x.rect(y, b, n, i), t.clip(x), t.globalCompositeOperation = "destination-atop", t.fillStyle = Q.makeHexColor(...o), t.fillRect(y, b, n, i), t.restore();
      }
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), s === "Alpha" && l ? e.filter = this.filterFactory.addAlphaFilter(l) : s === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(l));
    const _ = new Path2D();
    _.rect(c, d, n, i), e.clip(_), e.globalCompositeOperation = "destination-in", e.drawImage(g, y, b, n, i, c, d, n, i), e.restore();
  }
  save() {
    this.inSMaskMode ? (Ha(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const t = this.current;
    this.stateStack.push(t), this.current = t.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), Ha(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(t, e, n, i, s, o) {
    this.ctx.transform(t, e, n, i, s, o), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, n) {
    const i = this.ctx, s = this.current;
    let o = s.x, l = s.y, c, d;
    const h = Gt(i), f = h[0] === 0 && h[3] === 0 || h[1] === 0 && h[2] === 0, g = f ? n.slice(0) : null;
    for (let y = 0, b = 0, _ = t.length; y < _; y++)
      switch (t[y] | 0) {
        case pn.rectangle:
          o = e[b++], l = e[b++];
          const x = e[b++], E = e[b++], P = o + x, k = l + E;
          i.moveTo(o, l), x === 0 || E === 0 ? i.lineTo(P, k) : (i.lineTo(P, l), i.lineTo(P, k), i.lineTo(o, k)), f || s.updateRectMinMax(h, [o, l, P, k]), i.closePath();
          break;
        case pn.moveTo:
          o = e[b++], l = e[b++], i.moveTo(o, l), f || s.updatePathMinMax(h, o, l);
          break;
        case pn.lineTo:
          o = e[b++], l = e[b++], i.lineTo(o, l), f || s.updatePathMinMax(h, o, l);
          break;
        case pn.curveTo:
          c = o, d = l, o = e[b + 4], l = e[b + 5], i.bezierCurveTo(e[b], e[b + 1], e[b + 2], e[b + 3], o, l), s.updateCurvePathMinMax(h, c, d, e[b], e[b + 1], e[b + 2], e[b + 3], o, l, g), b += 6;
          break;
        case pn.curveTo2:
          c = o, d = l, i.bezierCurveTo(o, l, e[b], e[b + 1], e[b + 2], e[b + 3]), s.updateCurvePathMinMax(h, c, d, o, l, e[b], e[b + 1], e[b + 2], e[b + 3], g), o = e[b + 2], l = e[b + 3], b += 4;
          break;
        case pn.curveTo3:
          c = o, d = l, o = e[b + 2], l = e[b + 3], i.bezierCurveTo(e[b], e[b + 1], o, l, o, l), s.updateCurvePathMinMax(h, c, d, e[b], e[b + 1], o, l, o, l, g), b += 4;
          break;
        case pn.closePath:
          i.closePath();
          break;
      }
    f && s.updateScalingPathMinMax(h, g), s.setCurrentPoint(o, l);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(t = !0) {
    const e = this.ctx, n = this.current.strokeColor;
    e.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof n == "object" && (n != null && n.getPattern) ? (e.save(), e.strokeStyle = n.getPattern(e, this, ti(e), Me.STROKE), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(t = !0) {
    const e = this.ctx, n = this.current.fillColor, i = this.current.patternFill;
    let s = !1;
    i && (e.save(), e.fillStyle = n.getPattern(e, this, ti(e), Me.FILL), s = !0);
    const o = this.current.getClippedPathBoundingBox();
    this.contentVisible && o !== null && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill()), s && e.restore(), t && this.consumePath(o);
  }
  eoFill() {
    this.pendingEOFill = !0, this.fill();
  }
  fillStroke() {
    this.fill(!1), this.stroke(!1), this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = !0, this.fillStroke();
  }
  closeFillStroke() {
    this.closePath(), this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = !0, this.closePath(), this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = kE;
  }
  eoClip() {
    this.pendingClip = Qm;
  }
  beginText() {
    this.current.textMatrix = ty, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const t = this.pendingTextPaths, e = this.ctx;
    if (t === void 0) {
      e.beginPath();
      return;
    }
    e.save(), e.beginPath();
    for (const n of t)
      e.setTransform(...n.transform), e.translate(n.x, n.y), n.addToPath(e, n.fontSize);
    e.restore(), e.clip(), e.beginPath(), delete this.pendingTextPaths;
  }
  setCharSpacing(t) {
    this.current.charSpacing = t;
  }
  setWordSpacing(t) {
    this.current.wordSpacing = t;
  }
  setHScale(t) {
    this.current.textHScale = t / 100;
  }
  setLeading(t) {
    this.current.leading = -t;
  }
  setFont(t, e) {
    var h;
    const n = this.commonObjs.get(t), i = this.current;
    if (!n)
      throw new Error(`Can't find font for ${t}`);
    if (i.fontMatrix = n.fontMatrix || Sp, (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && yt("Invalid font matrix for font " + t), e < 0 ? (e = -e, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = n, this.current.fontSize = e, n.isType3Font)
      return;
    const s = n.loadedName || "sans-serif", o = ((h = n.systemFontInfo) == null ? void 0 : h.css) || `"${s}", ${n.fallbackName}`;
    let l = "normal";
    n.black ? l = "900" : n.bold && (l = "bold");
    const c = n.italic ? "italic" : "normal";
    let d = e;
    e < Vm ? d = Vm : e > Wm && (d = Wm), this.current.fontSizeScale = e / d, this.ctx.font = `${c} ${l} ${d}px ${o}`;
  }
  setTextRenderingMode(t) {
    this.current.textRenderingMode = t;
  }
  setTextRise(t) {
    this.current.textRise = t;
  }
  moveText(t, e) {
    this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e;
  }
  setLeadingMoveText(t, e) {
    this.setLeading(-e), this.moveText(t, e);
  }
  setTextMatrix(t, e, n, i, s, o) {
    this.current.textMatrix = [t, e, n, i, s, o], this.current.textMatrixScale = Math.hypot(t, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(t, e, n, i) {
    const s = this.ctx, o = this.current, l = o.font, c = o.textRenderingMode, d = o.fontSize / o.fontSizeScale, h = c & Ee.FILL_STROKE_MASK, f = !!(c & Ee.ADD_TO_PATH_FLAG), g = o.patternFill && !l.missingFile;
    let y;
    (l.disableFontFace || f || g) && (y = l.getPathGenerator(this.commonObjs, t)), l.disableFontFace || g ? (s.save(), s.translate(e, n), s.beginPath(), y(s, d), i && s.setTransform(...i), (h === Ee.FILL || h === Ee.FILL_STROKE) && s.fill(), (h === Ee.STROKE || h === Ee.FILL_STROKE) && s.stroke(), s.restore()) : ((h === Ee.FILL || h === Ee.FILL_STROKE) && s.fillText(t, e, n), (h === Ee.STROKE || h === Ee.FILL_STROKE) && s.strokeText(t, e, n)), f && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: Gt(s),
      x: e,
      y: n,
      fontSize: d,
      addToPath: y
    });
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: t
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t.scale(1.5, 1), t.fillText("I", 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let n = !1;
    for (let i = 3; i < e.length; i += 4)
      if (e[i] > 0 && e[i] < 255) {
        n = !0;
        break;
      }
    return xt(this, "isFontSubpixelAAEnabled", n);
  }
  showText(t) {
    const e = this.current, n = e.font;
    if (n.isType3Font)
      return this.showType3Text(t);
    const i = e.fontSize;
    if (i === 0)
      return;
    const s = this.ctx, o = e.fontSizeScale, l = e.charSpacing, c = e.wordSpacing, d = e.fontDirection, h = e.textHScale * d, f = t.length, g = n.vertical, y = g ? 1 : -1, b = n.defaultVMetrics, _ = i * e.fontMatrix[0], x = e.textRenderingMode === Ee.FILL && !n.disableFontFace && !e.patternFill;
    s.save(), s.transform(...e.textMatrix), s.translate(e.x, e.y + e.textRise), d > 0 ? s.scale(h, -1) : s.scale(h, 1);
    let E;
    if (e.patternFill) {
      s.save();
      const I = e.fillColor.getPattern(s, this, ti(s), Me.FILL);
      E = Gt(s), s.restore(), s.fillStyle = I;
    }
    let P = e.lineWidth;
    const k = e.textMatrixScale;
    if (k === 0 || P === 0) {
      const I = e.textRenderingMode & Ee.FILL_STROKE_MASK;
      (I === Ee.STROKE || I === Ee.FILL_STROKE) && (P = this.getSinglePixelWidth());
    } else
      P /= k;
    if (o !== 1 && (s.scale(o, o), P /= o), s.lineWidth = P, n.isInvalidPDFjsFont) {
      const I = [];
      let M = 0;
      for (const C of t)
        I.push(C.unicode), M += C.width;
      s.fillText(I.join(""), 0, 0), e.x += M * _ * h, s.restore(), this.compose();
      return;
    }
    let L = 0, F;
    for (F = 0; F < f; ++F) {
      const I = t[F];
      if (typeof I == "number") {
        L += y * I * i / 1e3;
        continue;
      }
      let M = !1;
      const C = (I.isSpace ? c : 0) + l, T = I.fontChar, N = I.accent;
      let D, H, U = I.width;
      if (g) {
        const Y = I.vmetric || b, Z = -(I.vmetric ? Y[1] : U * 0.5) * _, B = Y[2] * _;
        U = Y ? -Y[0] : U, D = Z / o, H = (L + B) / o;
      } else
        D = L / o, H = 0;
      if (n.remeasure && U > 0) {
        const Y = s.measureText(T).width * 1e3 / i * o;
        if (U < Y && this.isFontSubpixelAAEnabled) {
          const Z = U / Y;
          M = !0, s.save(), s.scale(Z, 1), D /= Z;
        } else
          U !== Y && (D += (U - Y) / 2e3 * i / o);
      }
      if (this.contentVisible && (I.isInFont || n.missingFile)) {
        if (x && !N)
          s.fillText(T, D, H);
        else if (this.paintChar(T, D, H, E), N) {
          const Y = D + i * N.offset.x / o, Z = H - i * N.offset.y / o;
          this.paintChar(N.fontChar, Y, Z, E);
        }
      }
      const G = g ? U * _ - C * d : U * _ + C * d;
      L += G, M && s.restore();
    }
    g ? e.y -= L : e.x += L * h, s.restore(), this.compose();
  }
  showType3Text(t) {
    const e = this.ctx, n = this.current, i = n.font, s = n.fontSize, o = n.fontDirection, l = i.vertical ? 1 : -1, c = n.charSpacing, d = n.wordSpacing, h = n.textHScale * o, f = n.fontMatrix || Sp, g = t.length, y = n.textRenderingMode === Ee.INVISIBLE;
    let b, _, x, E;
    if (!(y || s === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...n.textMatrix), e.translate(n.x, n.y), e.scale(h, o), b = 0; b < g; ++b) {
        if (_ = t[b], typeof _ == "number") {
          E = l * _ * s / 1e3, this.ctx.translate(E, 0), n.x += E * h;
          continue;
        }
        const P = (_.isSpace ? d : 0) + c, k = i.charProcOperatorList[_.operatorListId];
        if (!k) {
          yt(`Type3 character "${_.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = _, this.save(), e.scale(s, s), e.transform(...f), this.executeOperatorList(k), this.restore()), x = Q.applyTransform([_.width, 0], f)[0] * s + P, e.translate(x, 0), n.x += x * h;
      }
      e.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(t, e) {
  }
  setCharWidthAndBounds(t, e, n, i, s, o) {
    this.ctx.rect(n, i, s - n, o - i), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(t) {
    let e;
    if (t[0] === "TilingPattern") {
      const n = t[1], i = this.baseTransform || Gt(this.ctx), s = {
        createCanvasGraphics: (o) => new wm(o, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      e = new tg(t, n, this.ctx, s, i);
    } else
      e = this._getPattern(t[1], t[2]);
    return e;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments);
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
  }
  setStrokeRGBColor(t, e, n) {
    const i = Q.makeHexColor(t, e, n);
    this.ctx.strokeStyle = i, this.current.strokeColor = i;
  }
  setFillRGBColor(t, e, n) {
    const i = Q.makeHexColor(t, e, n);
    this.ctx.fillStyle = i, this.current.fillColor = i, this.current.patternFill = !1;
  }
  _getPattern(t, e = null) {
    let n;
    return this.cachedPatterns.has(t) ? n = this.cachedPatterns.get(t) : (n = _E(this.getObject(t)), this.cachedPatterns.set(t, n)), e && (n.matrix = e), n;
  }
  shadingFill(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx;
    this.save();
    const n = this._getPattern(t);
    e.fillStyle = n.getPattern(e, this, ti(e), Me.SHADING);
    const i = ti(e);
    if (i) {
      const {
        width: s,
        height: o
      } = e.canvas, [l, c, d, h] = Q.getAxialAlignedBoundingBox([0, 0, s, o], i);
      this.ctx.fillRect(l, c, d - l, h - c);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    Dt("Should not call beginInlineImage");
  }
  beginImageData() {
    Dt("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = Gt(this.ctx), e)) {
      const n = e[2] - e[0], i = e[3] - e[1];
      this.ctx.rect(e[0], e[1], n, i), this.current.updateRectMinMax(Gt(this.ctx), e), this.clip(), this.endPath();
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t) {
    if (!this.contentVisible)
      return;
    this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const e = this.ctx;
    t.isolated || Mf("TODO: Support non-isolated groups."), t.knockout && yt("Knockout groups not supported.");
    const n = Gt(e);
    if (t.matrix && e.transform(...t.matrix), !t.bbox)
      throw new Error("Bounding box is required.");
    let i = Q.getAxialAlignedBoundingBox(t.bbox, Gt(e));
    const s = [0, 0, e.canvas.width, e.canvas.height];
    i = Q.intersect(i, s) || [0, 0, 0, 0];
    const o = Math.floor(i[0]), l = Math.floor(i[1]), c = Math.max(Math.ceil(i[2]) - o, 1), d = Math.max(Math.ceil(i[3]) - l, 1);
    this.current.startNewPathAndClipBox([0, 0, c, d]);
    let h = "groupAt" + this.groupLevel;
    t.smask && (h += "_smask_" + this.smaskCounter++ % 2);
    const f = this.cachedCanvases.getCanvas(h, c, d), g = f.context;
    g.translate(-o, -l), g.transform(...n), t.smask ? this.smaskStack.push({
      canvas: f.canvas,
      context: g,
      offsetX: o,
      offsetY: l,
      subtype: t.smask.subtype,
      backdrop: t.smask.backdrop,
      transferMap: t.smask.transferMap || null,
      startTransformInverse: null
    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(o, l), e.save()), Ha(e, g), this.ctx = g, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++;
  }
  endGroup(t) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const e = this.ctx, n = this.groupStack.pop();
    if (this.ctx = n, this.ctx.imageSmoothingEnabled = !1, t.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const i = Gt(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
      const s = Q.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], i);
      this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(s);
    }
  }
  beginAnnotation(t, e, n, i, s) {
    if (A(this, rc, eg).call(this), Vh(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
      const o = e[2] - e[0], l = e[3] - e[1];
      if (s && this.annotationCanvasMap) {
        n = n.slice(), n[4] -= e[0], n[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = o, e[3] = l;
        const [c, d] = Q.singularValueDecompose2dScale(Gt(this.ctx)), {
          viewportScale: h
        } = this, f = Math.ceil(o * this.outputScaleX * h), g = Math.ceil(l * this.outputScaleY * h);
        this.annotationCanvas = this.canvasFactory.create(f, g);
        const {
          canvas: y,
          context: b
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(t, y), this.annotationCanvas.savedCtx = this.ctx, this.ctx = b, this.ctx.save(), this.ctx.setTransform(c, 0, 0, -d, 0, l * d), Vh(this.ctx);
      } else
        Vh(this.ctx), this.ctx.rect(e[0], e[1], o, l), this.ctx.clip(), this.endPath();
    }
    this.current = new Ym(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...n), this.transform(...i);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), A(this, oc, ng).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.count;
    t = this.getObject(t.data, t), t.count = e;
    const n = this.ctx, i = this.processingType3;
    if (i && (i.compiled === void 0 && (i.compiled = TE(t)), i.compiled)) {
      i.compiled(n);
      return;
    }
    const s = this._createMaskCanvas(t), o = s.canvas;
    n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(o, s.offsetX, s.offsetY), n.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, n = 0, i = 0, s, o) {
    if (!this.contentVisible)
      return;
    t = this.getObject(t.data, t);
    const l = this.ctx;
    l.save();
    const c = Gt(l);
    l.transform(e, n, i, s, 0, 0);
    const d = this._createMaskCanvas(t);
    l.setTransform(1, 0, 0, 1, d.offsetX - c[4], d.offsetY - c[5]);
    for (let h = 0, f = o.length; h < f; h += 2) {
      const g = Q.transform(c, [e, n, i, s, o[h], o[h + 1]]), [y, b] = Q.applyTransform([0, 0], g);
      l.drawImage(d.canvas, y, b);
    }
    l.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx, n = this.current.fillColor, i = this.current.patternFill;
    for (const s of t) {
      const {
        data: o,
        width: l,
        height: c,
        transform: d
      } = s, h = this.cachedCanvases.getCanvas("maskCanvas", l, c), f = h.context;
      f.save();
      const g = this.getObject(o, s);
      Zm(f, g), f.globalCompositeOperation = "source-in", f.fillStyle = i ? n.getPattern(f, this, ti(e), Me.FILL) : n, f.fillRect(0, 0, l, c), f.restore(), e.save(), e.transform(...d), e.scale(1, -1), Gh(e, h.canvas, 0, 0, l, c, 0, -1, 1, 1), e.restore();
    }
    this.compose();
  }
  paintImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = this.getObject(t);
    if (!e) {
      yt("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(e);
  }
  paintImageXObjectRepeat(t, e, n, i) {
    if (!this.contentVisible)
      return;
    const s = this.getObject(t);
    if (!s) {
      yt("Dependent image isn't ready yet");
      return;
    }
    const o = s.width, l = s.height, c = [];
    for (let d = 0, h = i.length; d < h; d += 2)
      c.push({
        transform: [e, 0, 0, n, i[d], i[d + 1]],
        x: 0,
        y: 0,
        w: o,
        h: l
      });
    this.paintInlineImageXObjectGroup(s, c);
  }
  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none")
      return t.bitmap;
    const {
      bitmap: e,
      width: n,
      height: i
    } = t, s = this.cachedCanvases.getCanvas("inlineImage", n, i), o = s.context;
    return o.filter = this.current.transferMaps, o.drawImage(e, 0, 0), o.filter = "none", s.canvas;
  }
  paintInlineImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.width, n = t.height, i = this.ctx;
    if (this.save(), !Te) {
      const {
        filter: l
      } = i;
      l !== "none" && l !== "" && (i.filter = "none");
    }
    i.scale(1 / e, -1 / n);
    let s;
    if (t.bitmap)
      s = this.applyTransferMapsToBitmap(t);
    else if (typeof HTMLElement == "function" && t instanceof HTMLElement || !t.data)
      s = t;
    else {
      const c = this.cachedCanvases.getCanvas("inlineImage", e, n).context;
      Km(c, t), s = this.applyTransferMapsToCanvas(c);
    }
    const o = this._scaleImage(s, ti(i));
    i.imageSmoothingEnabled = Jm(Gt(i), t.interpolate), Gh(i, o.img, 0, 0, o.paintWidth, o.paintHeight, 0, -n, e, n), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(t, e) {
    if (!this.contentVisible)
      return;
    const n = this.ctx;
    let i;
    if (t.bitmap)
      i = t.bitmap;
    else {
      const s = t.width, o = t.height, c = this.cachedCanvases.getCanvas("inlineImage", s, o).context;
      Km(c, t), i = this.applyTransferMapsToCanvas(c);
    }
    for (const s of e)
      n.save(), n.transform(...s.transform), n.scale(1, -1), Gh(n, i, s.x, s.y, s.w, s.h, 0, -1, 1, 1), n.restore();
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t) {
  }
  markPointProps(t, e) {
  }
  beginMarkedContent(t) {
    this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e) {
    t === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(e)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(t) {
    const e = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
    const n = this.ctx;
    this.pendingClip && (e || (this.pendingClip === Qm ? n.clip("evenodd") : n.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), n.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = Gt(this.ctx);
      if (t[1] === 0 && t[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]), n = Math.hypot(t[0], t[2]), i = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(n, i) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t
      } = this.current, {
        a: e,
        b: n,
        c: i,
        d: s
      } = this.ctx.getTransform();
      let o, l;
      if (n === 0 && i === 0) {
        const c = Math.abs(e), d = Math.abs(s);
        if (c === d)
          if (t === 0)
            o = l = 1 / c;
          else {
            const h = c * t;
            o = l = h < 1 ? 1 / h : 1;
          }
        else if (t === 0)
          o = 1 / c, l = 1 / d;
        else {
          const h = c * t, f = d * t;
          o = h < 1 ? 1 / h : 1, l = f < 1 ? 1 / f : 1;
        }
      } else {
        const c = Math.abs(e * s - n * i), d = Math.hypot(e, n), h = Math.hypot(i, s);
        if (t === 0)
          o = h / c, l = d / c;
        else {
          const f = t * c;
          o = h > f ? h / f : 1, l = d > f ? d / f : 1;
        }
      }
      this._cachedScaleForStroking[0] = o, this._cachedScaleForStroking[1] = l;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t) {
    const {
      ctx: e
    } = this, {
      lineWidth: n
    } = this.current, [i, s] = this.getScaleForStroking();
    if (e.lineWidth = n || 1, i === 1 && s === 1) {
      e.stroke();
      return;
    }
    const o = e.getLineDash();
    if (t && e.save(), e.scale(i, s), o.length > 0) {
      const l = Math.max(i, s);
      e.setLineDash(o.map((c) => c / l)), e.lineDashOffset /= l;
    }
    e.stroke(), t && e.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
rc = new WeakSet(), eg = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, oc = new WeakSet(), ng = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
};
let oo = wm;
for (const r in pn)
  oo.prototype[r] !== void 0 && (oo.prototype[pn[r]] = oo.prototype[r]);
var ac, lc;
class Ni {
  static get workerPort() {
    return a(this, ac);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    w(this, ac, t);
  }
  static get workerSrc() {
    return a(this, lc);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    w(this, lc, t);
  }
}
ac = new WeakMap(), lc = new WeakMap(), m(Ni, ac, null), m(Ni, lc, "");
const Wh = {
  UNKNOWN: 0,
  DATA: 1,
  ERROR: 2
}, te = {
  UNKNOWN: 0,
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function We(r) {
  switch (r instanceof Error || typeof r == "object" && r !== null || Dt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), r.name) {
    case "AbortException":
      return new Xr(r.message);
    case "MissingPDFException":
      return new qr(r.message);
    case "PasswordException":
      return new Cp(r.message, r.code);
    case "UnexpectedResponseException":
      return new Df(r.message, r.status);
    case "UnknownErrorException":
      return new Tp(r.message, r.details);
    default:
      return new Tp(r.message, r.toString());
  }
}
var yu, Dy, bu, Ny, Po, ld;
class Ya {
  constructor(t, e, n) {
    m(this, yu);
    m(this, bu);
    m(this, Po);
    this.sourceName = t, this.targetName = e, this.comObj = n, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (i) => {
      const s = i.data;
      if (s.targetName !== this.sourceName)
        return;
      if (s.stream) {
        A(this, bu, Ny).call(this, s);
        return;
      }
      if (s.callback) {
        const l = s.callbackId, c = this.callbackCapabilities[l];
        if (!c)
          throw new Error(`Cannot resolve callback ${l}`);
        if (delete this.callbackCapabilities[l], s.callback === Wh.DATA)
          c.resolve(s.data);
        else if (s.callback === Wh.ERROR)
          c.reject(We(s.reason));
        else
          throw new Error("Unexpected callback case");
        return;
      }
      const o = this.actionHandler[s.action];
      if (!o)
        throw new Error(`Unknown action from worker: ${s.action}`);
      if (s.callbackId) {
        const l = this.sourceName, c = s.sourceName;
        new Promise(function(d) {
          d(o(s.data));
        }).then(function(d) {
          n.postMessage({
            sourceName: l,
            targetName: c,
            callback: Wh.DATA,
            callbackId: s.callbackId,
            data: d
          });
        }, function(d) {
          n.postMessage({
            sourceName: l,
            targetName: c,
            callback: Wh.ERROR,
            callbackId: s.callbackId,
            reason: We(d)
          });
        });
        return;
      }
      if (s.streamId) {
        A(this, yu, Dy).call(this, s);
        return;
      }
      o(s.data);
    }, n.addEventListener("message", this._onComObjOnMessage);
  }
  on(t, e) {
    const n = this.actionHandler;
    if (n[t])
      throw new Error(`There is already an actionName called "${t}"`);
    n[t] = e;
  }
  send(t, e, n) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e
    }, n);
  }
  sendWithPromise(t, e, n) {
    const i = this.callbackId++, s = Promise.withResolvers();
    this.callbackCapabilities[i] = s;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: i,
        data: e
      }, n);
    } catch (o) {
      s.reject(o);
    }
    return s.promise;
  }
  sendWithStream(t, e, n, i) {
    const s = this.streamId++, o = this.sourceName, l = this.targetName, c = this.comObj;
    return new ReadableStream({
      start: (d) => {
        const h = Promise.withResolvers();
        return this.streamControllers[s] = {
          controller: d,
          startCall: h,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, c.postMessage({
          sourceName: o,
          targetName: l,
          action: t,
          streamId: s,
          data: e,
          desiredSize: d.desiredSize
        }, i), h.promise;
      },
      pull: (d) => {
        const h = Promise.withResolvers();
        return this.streamControllers[s].pullCall = h, c.postMessage({
          sourceName: o,
          targetName: l,
          stream: te.PULL,
          streamId: s,
          desiredSize: d.desiredSize
        }), h.promise;
      },
      cancel: (d) => {
        ae(d instanceof Error, "cancel must have a valid reason");
        const h = Promise.withResolvers();
        return this.streamControllers[s].cancelCall = h, this.streamControllers[s].isClosed = !0, c.postMessage({
          sourceName: o,
          targetName: l,
          stream: te.CANCEL,
          streamId: s,
          reason: We(d)
        }), h.promise;
      }
    }, n);
  }
  destroy() {
    this.comObj.removeEventListener("message", this._onComObjOnMessage);
  }
}
yu = new WeakSet(), Dy = function(t) {
  const e = t.streamId, n = this.sourceName, i = t.sourceName, s = this.comObj, o = this, l = this.actionHandler[t.action], c = {
    enqueue(d, h = 1, f) {
      if (this.isCancelled)
        return;
      const g = this.desiredSize;
      this.desiredSize -= h, g > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), s.postMessage({
        sourceName: n,
        targetName: i,
        stream: te.ENQUEUE,
        streamId: e,
        chunk: d
      }, f);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, s.postMessage({
        sourceName: n,
        targetName: i,
        stream: te.CLOSE,
        streamId: e
      }), delete o.streamSinks[e]);
    },
    error(d) {
      ae(d instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, s.postMessage({
        sourceName: n,
        targetName: i,
        stream: te.ERROR,
        streamId: e,
        reason: We(d)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: t.desiredSize,
    ready: null
  };
  c.sinkCapability.resolve(), c.ready = c.sinkCapability.promise, this.streamSinks[e] = c, new Promise(function(d) {
    d(l(t.data, c));
  }).then(function() {
    s.postMessage({
      sourceName: n,
      targetName: i,
      stream: te.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(d) {
    s.postMessage({
      sourceName: n,
      targetName: i,
      stream: te.START_COMPLETE,
      streamId: e,
      reason: We(d)
    });
  });
}, bu = new WeakSet(), Ny = function(t) {
  const e = t.streamId, n = this.sourceName, i = t.sourceName, s = this.comObj, o = this.streamControllers[e], l = this.streamSinks[e];
  switch (t.stream) {
    case te.START_COMPLETE:
      t.success ? o.startCall.resolve() : o.startCall.reject(We(t.reason));
      break;
    case te.PULL_COMPLETE:
      t.success ? o.pullCall.resolve() : o.pullCall.reject(We(t.reason));
      break;
    case te.PULL:
      if (!l) {
        s.postMessage({
          sourceName: n,
          targetName: i,
          stream: te.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      l.desiredSize <= 0 && t.desiredSize > 0 && l.sinkCapability.resolve(), l.desiredSize = t.desiredSize, new Promise(function(c) {
        var d;
        c((d = l.onPull) == null ? void 0 : d.call(l));
      }).then(function() {
        s.postMessage({
          sourceName: n,
          targetName: i,
          stream: te.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(c) {
        s.postMessage({
          sourceName: n,
          targetName: i,
          stream: te.PULL_COMPLETE,
          streamId: e,
          reason: We(c)
        });
      });
      break;
    case te.ENQUEUE:
      if (ae(o, "enqueue should have stream controller"), o.isClosed)
        break;
      o.controller.enqueue(t.chunk);
      break;
    case te.CLOSE:
      if (ae(o, "close should have stream controller"), o.isClosed)
        break;
      o.isClosed = !0, o.controller.close(), A(this, Po, ld).call(this, o, e);
      break;
    case te.ERROR:
      ae(o, "error should have stream controller"), o.controller.error(We(t.reason)), A(this, Po, ld).call(this, o, e);
      break;
    case te.CANCEL_COMPLETE:
      t.success ? o.cancelCall.resolve() : o.cancelCall.reject(We(t.reason)), A(this, Po, ld).call(this, o, e);
      break;
    case te.CANCEL:
      if (!l)
        break;
      new Promise(function(c) {
        var d;
        c((d = l.onCancel) == null ? void 0 : d.call(l, We(t.reason)));
      }).then(function() {
        s.postMessage({
          sourceName: n,
          targetName: i,
          stream: te.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(c) {
        s.postMessage({
          sourceName: n,
          targetName: i,
          stream: te.CANCEL_COMPLETE,
          streamId: e,
          reason: We(c)
        });
      }), l.sinkCapability.reject(We(t.reason)), l.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, Po = new WeakSet(), ld = async function(t, e) {
  var n, i, s;
  await Promise.allSettled([(n = t.startCall) == null ? void 0 : n.promise, (i = t.pullCall) == null ? void 0 : i.promise, (s = t.cancelCall) == null ? void 0 : s.promise]), delete this.streamControllers[e];
};
var Qs, cc;
class LE {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    m(this, Qs, void 0);
    m(this, cc, void 0);
    w(this, Qs, t), w(this, cc, e);
  }
  getRaw() {
    return a(this, cc);
  }
  get(t) {
    return a(this, Qs).get(t) ?? null;
  }
  getAll() {
    return nm(a(this, Qs));
  }
  has(t) {
    return a(this, Qs).has(t);
  }
}
Qs = new WeakMap(), cc = new WeakMap();
const ji = Symbol("INTERNAL");
var hc, dc, uc, Ro;
class IE {
  constructor(t, {
    name: e,
    intent: n,
    usage: i
  }) {
    m(this, hc, !1);
    m(this, dc, !1);
    m(this, uc, !1);
    m(this, Ro, !0);
    w(this, hc, !!(t & hn.DISPLAY)), w(this, dc, !!(t & hn.PRINT)), this.name = e, this.intent = n, this.usage = i;
  }
  get visible() {
    if (a(this, uc))
      return a(this, Ro);
    if (!a(this, Ro))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return a(this, hc) ? (e == null ? void 0 : e.viewState) !== "OFF" : a(this, dc) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, n = !1) {
    t !== ji && Dt("Internal method `_setVisible` called."), w(this, uc, n), w(this, Ro, e);
  }
}
hc = new WeakMap(), dc = new WeakMap(), uc = new WeakMap(), Ro = new WeakMap();
var es, Mt, ko, Lo, fc, ig;
class FE {
  constructor(t, e = hn.DISPLAY) {
    m(this, fc);
    m(this, es, null);
    m(this, Mt, /* @__PURE__ */ new Map());
    m(this, ko, null);
    m(this, Lo, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, w(this, Lo, t.order);
      for (const n of t.groups)
        a(this, Mt).set(n.id, new IE(e, n));
      if (t.baseState === "OFF")
        for (const n of a(this, Mt).values())
          n._setVisible(ji, !1);
      for (const n of t.on)
        a(this, Mt).get(n)._setVisible(ji, !0);
      for (const n of t.off)
        a(this, Mt).get(n)._setVisible(ji, !1);
      w(this, ko, this.getHash());
    }
  }
  isVisible(t) {
    if (a(this, Mt).size === 0)
      return !0;
    if (!t)
      return Mf("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return a(this, Mt).has(t.id) ? a(this, Mt).get(t.id).visible : (yt(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return A(this, fc, ig).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!a(this, Mt).has(e))
            return yt(`Optional content group not found: ${e}`), !0;
          if (a(this, Mt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!a(this, Mt).has(e))
            return yt(`Optional content group not found: ${e}`), !0;
          if (!a(this, Mt).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!a(this, Mt).has(e))
            return yt(`Optional content group not found: ${e}`), !0;
          if (!a(this, Mt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!a(this, Mt).has(e))
            return yt(`Optional content group not found: ${e}`), !0;
          if (a(this, Mt).get(e).visible)
            return !1;
        }
        return !0;
      }
      return yt(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return yt(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0) {
    const n = a(this, Mt).get(t);
    if (!n) {
      yt(`Optional content group not found: ${t}`);
      return;
    }
    n._setVisible(ji, !!e, !0), w(this, es, null);
  }
  setOCGState({
    state: t,
    preserveRB: e
  }) {
    let n;
    for (const i of t) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          n = i;
          continue;
      }
      const s = a(this, Mt).get(i);
      if (s)
        switch (n) {
          case "ON":
            s._setVisible(ji, !0);
            break;
          case "OFF":
            s._setVisible(ji, !1);
            break;
          case "Toggle":
            s._setVisible(ji, !s.visible);
            break;
        }
    }
    w(this, es, null);
  }
  get hasInitialVisibility() {
    return a(this, ko) === null || this.getHash() === a(this, ko);
  }
  getOrder() {
    return a(this, Mt).size ? a(this, Lo) ? a(this, Lo).slice() : [...a(this, Mt).keys()] : null;
  }
  getGroups() {
    return a(this, Mt).size > 0 ? nm(a(this, Mt)) : null;
  }
  getGroup(t) {
    return a(this, Mt).get(t) || null;
  }
  getHash() {
    if (a(this, es) !== null)
      return a(this, es);
    const t = new Ly();
    for (const [e, n] of a(this, Mt))
      t.update(`${e}:${n.visible}`);
    return w(this, es, t.hexdigest());
  }
}
es = new WeakMap(), Mt = new WeakMap(), ko = new WeakMap(), Lo = new WeakMap(), fc = new WeakSet(), ig = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const n = t[0];
  for (let i = 1; i < e; i++) {
    const s = t[i];
    let o;
    if (Array.isArray(s))
      o = A(this, fc, ig).call(this, s);
    else if (a(this, Mt).has(s))
      o = a(this, Mt).get(s).visible;
    else
      return yt(`Optional content group not found: ${s}`), !0;
    switch (n) {
      case "And":
        if (!o)
          return !1;
        break;
      case "Or":
        if (o)
          return !0;
        break;
      case "Not":
        return !o;
      default:
        return !0;
    }
  }
  return n === "And";
};
class ME {
  constructor(t, {
    disableRange: e = !1,
    disableStream: n = !1
  }) {
    ae(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: i,
      initialData: s,
      progressiveDone: o,
      contentDispositionFilename: l
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = o, this._contentDispositionFilename = l, (s == null ? void 0 : s.length) > 0) {
      const c = s instanceof Uint8Array && s.byteLength === s.buffer.byteLength ? s.buffer : new Uint8Array(s).buffer;
      this._queuedChunks.push(c);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !n, this._isRangeSupported = !e, this._contentLength = i, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((c, d) => {
      this._onReceiveData({
        begin: c,
        chunk: d
      });
    }), t.addProgressListener((c, d) => {
      this._onProgress({
        loaded: c,
        total: d
      });
    }), t.addProgressiveReadListener((c) => {
      this._onReceiveData({
        chunk: c
      });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }
  _onReceiveData({
    begin: t,
    chunk: e
  }) {
    const n = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(n) : this._queuedChunks.push(n);
    else {
      const i = this._rangeReaders.some(function(s) {
        return s._begin !== t ? !1 : (s._enqueue(n), !0);
      });
      ae(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  _onProgress(t) {
    var e, n, i, s;
    t.total === void 0 ? (n = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || n.call(e, {
      loaded: t.loaded
    }) : (s = (i = this._fullRequestReader) == null ? void 0 : i.onProgress) == null || s.call(i, {
      loaded: t.loaded,
      total: t.total
    });
  }
  _onProgressiveDone() {
    var t;
    (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    ae(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new DE(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const n = new NE(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(n), n;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const n of this._rangeReaders.slice(0))
      n.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class DE {
  constructor(t, e, n = !1, i = null) {
    this._stream = t, this._done = n || !1, this._filename = am(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const s of this._queuedChunks)
      this._loaded += s.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class NE {
  constructor(t, e, n) {
    this._stream = t, this._begin = e, this._end = n, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = t;
      else {
        this._requests.shift().resolve({
          value: t,
          done: !1
        });
        for (const n of this._requests)
          n.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function OE(r) {
  let t = !0, e = n("filename\\*", "i").exec(r);
  if (e) {
    e = e[1];
    let h = l(e);
    return h = unescape(h), h = c(h), h = d(h), s(h);
  }
  if (e = o(r), e) {
    const h = d(e);
    return s(h);
  }
  if (e = n("filename", "i").exec(r), e) {
    e = e[1];
    let h = l(e);
    return h = d(h), s(h);
  }
  function n(h, f) {
    return new RegExp("(?:^|;)\\s*" + h + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', f);
  }
  function i(h, f) {
    if (h) {
      if (!/^[\x00-\xFF]+$/.test(f))
        return f;
      try {
        const g = new TextDecoder(h, {
          fatal: !0
        }), y = Nf(f);
        f = g.decode(y), t = !1;
      } catch {
      }
    }
    return f;
  }
  function s(h) {
    return t && /[\x80-\xff]/.test(h) && (h = i("utf-8", h), t && (h = i("iso-8859-1", h))), h;
  }
  function o(h) {
    const f = [];
    let g;
    const y = n("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (g = y.exec(h)) !== null; ) {
      let [, _, x, E] = g;
      if (_ = parseInt(_, 10), _ in f) {
        if (_ === 0)
          break;
        continue;
      }
      f[_] = [x, E];
    }
    const b = [];
    for (let _ = 0; _ < f.length && _ in f; ++_) {
      let [x, E] = f[_];
      E = l(E), x && (E = unescape(E), _ === 0 && (E = c(E))), b.push(E);
    }
    return b.join("");
  }
  function l(h) {
    if (h.startsWith('"')) {
      const f = h.slice(1).split('\\"');
      for (let g = 0; g < f.length; ++g) {
        const y = f[g].indexOf('"');
        y !== -1 && (f[g] = f[g].slice(0, y), f.length = g + 1), f[g] = f[g].replaceAll(/\\(.)/g, "$1");
      }
      h = f.join('"');
    }
    return h;
  }
  function c(h) {
    const f = h.indexOf("'");
    if (f === -1)
      return h;
    const g = h.slice(0, f), b = h.slice(f + 1).replace(/^[^']*'/, "");
    return i(g, b);
  }
  function d(h) {
    return !h.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(h) ? h : h.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(f, g, y, b) {
      if (y === "q" || y === "Q")
        return b = b.replaceAll("_", " "), b = b.replaceAll(/=([0-9a-fA-F]{2})/g, function(_, x) {
          return String.fromCharCode(parseInt(x, 16));
        }), i(g, b);
      try {
        b = atob(b);
      } catch {
      }
      return i(g, b);
    });
  }
  return "";
}
function hm({
  getResponseHeader: r,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: n
}) {
  const i = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, s = parseInt(r("Content-Length"), 10);
  return !Number.isInteger(s) || (i.suggestedLength = s, s <= 2 * e) || n || !t || r("Accept-Ranges") !== "bytes" || (r("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = !0), i;
}
function dm(r) {
  const t = r("Content-Disposition");
  if (t) {
    let e = OE(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (am(e))
      return e;
  }
  return null;
}
function zf(r, t) {
  return r === 404 || r === 0 && t.startsWith("file:") ? new qr('Missing PDF "' + t + '".') : new Df(`Unexpected server response (${r}) while retrieving PDF "${t}".`, r);
}
function Oy(r) {
  return r === 200 || r === 206;
}
function By(r, t, e) {
  return {
    method: "GET",
    headers: r,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function $y(r) {
  const t = new Headers();
  for (const e in r) {
    const n = r[e];
    n !== void 0 && t.append(e, n);
  }
  return t;
}
function Hy(r) {
  return r instanceof Uint8Array ? r.buffer : r instanceof ArrayBuffer ? r : (yt(`getArrayBuffer - unexpected data format: ${r}`), new Uint8Array(r).buffer);
}
class t0 {
  constructor(t) {
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.httpHeaders = this.isHttp && t.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return ae(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new BE(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const n = new $E(this, t, e);
    return this._rangeRequestReaders.push(n), n;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const n of this._rangeRequestReaders.slice(0))
      n.cancel(t);
  }
}
class BE {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._headers = $y(this._stream.httpHeaders);
    const n = e.url;
    fetch(n, By(this._headers, this._withCredentials, this._abortController)).then((i) => {
      if (!Oy(i.status))
        throw zf(i.status, n);
      this._reader = i.body.getReader(), this._headersCapability.resolve();
      const s = (c) => i.headers.get(c), {
        allowRangeRequests: o,
        suggestedLength: l
      } = hm({
        getResponseHeader: s,
        isHttp: this._stream.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = dm(s), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Xr("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var n;
    await this._headersCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (n = this.onProgress) == null || n.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: Hy(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class $E {
  constructor(t, e, n) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController(), this._headers = $y(this._stream.httpHeaders), this._headers.append("Range", `bytes=${e}-${n - 1}`);
    const s = i.url;
    fetch(s, By(this._headers, this._withCredentials, this._abortController)).then((o) => {
      if (!Oy(o.status))
        throw zf(o.status, s);
      this._readCapability.resolve(), this._reader = o.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var n;
    await this._readCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (n = this.onProgress) == null || n.call(this, {
      loaded: this._loaded
    }), {
      value: Hy(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const ap = 200, lp = 206;
function HE(r) {
  const t = r.response;
  return typeof t != "string" ? t : Nf(t).buffer;
}
class UE {
  constructor(t, e = {}) {
    this.url = t, this.isHttp = /^https?:/i.test(t), this.httpHeaders = this.isHttp && e.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = e.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  requestRange(t, e, n) {
    const i = {
      begin: t,
      end: e
    };
    for (const s in n)
      i[s] = n[s];
    return this.request(i);
  }
  requestFull(t) {
    return this.request(t);
  }
  request(t) {
    const e = new XMLHttpRequest(), n = this.currXhrId++, i = this.pendingRequests[n] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const s in this.httpHeaders) {
      const o = this.httpHeaders[s];
      o !== void 0 && e.setRequestHeader(s, o);
    }
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = lp) : i.expectedStatus = ap, e.responseType = "arraybuffer", t.onError && (e.onerror = function(s) {
      t.onError(e.status);
    }), e.onreadystatechange = this.onStateChange.bind(this, n), e.onprogress = this.onProgress.bind(this, n), i.onHeadersReceived = t.onHeadersReceived, i.onDone = t.onDone, i.onError = t.onError, i.onProgress = t.onProgress, e.send(null), n;
  }
  onProgress(t, e) {
    var i;
    const n = this.pendingRequests[t];
    n && ((i = n.onProgress) == null || i.call(n, e));
  }
  onStateChange(t, e) {
    var c, d, h;
    const n = this.pendingRequests[t];
    if (!n)
      return;
    const i = n.xhr;
    if (i.readyState >= 2 && n.onHeadersReceived && (n.onHeadersReceived(), delete n.onHeadersReceived), i.readyState !== 4 || !(t in this.pendingRequests))
      return;
    if (delete this.pendingRequests[t], i.status === 0 && this.isHttp) {
      (c = n.onError) == null || c.call(n, i.status);
      return;
    }
    const s = i.status || ap;
    if (!(s === ap && n.expectedStatus === lp) && s !== n.expectedStatus) {
      (d = n.onError) == null || d.call(n, i.status);
      return;
    }
    const l = HE(i);
    if (s === lp) {
      const f = i.getResponseHeader("Content-Range"), g = /bytes (\d+)-(\d+)\/(\d+)/.exec(f);
      n.onDone({
        begin: parseInt(g[1], 10),
        chunk: l
      });
    } else
      l ? n.onDone({
        begin: 0,
        chunk: l
      }) : (h = n.onError) == null || h.call(n, i.status);
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t], e.abort();
  }
}
class zE {
  constructor(t) {
    this._source = t, this._manager = new UE(t.url, {
      httpHeaders: t.httpHeaders,
      withCredentials: t.withCredentials
    }), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return ae(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new jE(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const n = new GE(this._manager, t, e);
    return n.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(n), n;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const n of this._rangeRequestReaders.slice(0))
      n.cancel(t);
  }
}
class jE {
  constructor(t, e) {
    this._manager = t;
    const n = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = e.url, this._fullRequestId = t.requestFull(n), this._headersReceivedCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const t = this._fullRequestId, e = this._manager.getRequestXhr(t), n = (o) => e.getResponseHeader(o), {
      allowRangeRequests: i,
      suggestedLength: s
    } = hm({
      getResponseHeader: n,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    i && (this._isRangeSupported = !0), this._contentLength = s || this._contentLength, this._filename = dm(n), this._isRangeSupported && this._manager.abortRequest(t), this._headersReceivedCapability.resolve();
  }
  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: !1
    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests)
        e.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(t) {
    this._storedError = zf(t, this._url), this._headersReceivedCapability.reject(this._storedError);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    var e;
    (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersReceivedCapability.promise;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this._headersReceivedCapability.reject(t);
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class GE {
  constructor(t, e, n) {
    this._manager = t;
    const i = {
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = t.url, this._requestId = t.requestRange(e, n, i), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _close() {
    var t;
    (t = this.onClosed) == null || t.call(this, this);
  }
  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunk = e, this._done = !0;
    for (const n of this._requests)
      n.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(t) {
    this._storedError = zf(t, this._url);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(t) {
    var e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const Uy = /^file:\/\/\/[a-zA-Z]:\//;
function VE(r) {
  const t = Jn.get("url"), e = t.parse(r);
  return e.protocol === "file:" || e.host ? e : /^[a-z]:[/\\]/i.test(r) ? t.parse(`file:///${r}`) : (e.host || (e.protocol = "file:"), e);
}
class WE {
  constructor(t) {
    this.source = t, this.url = VE(t.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && t.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return ae(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new YE(this) : new qE(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const n = this.isFsUrl ? new KE(this, t, e) : new XE(this, t, e);
    return this._rangeRequestReaders.push(n), n;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const n of this._rangeRequestReaders.slice(0))
      n.cancel(t);
  }
}
class zy {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var n;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (n = this.onProgress) == null || n.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new Xr("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class jy {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const e = t.source;
    this._isStreamingSupported = !e.disableStream;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var n;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (n = this.onProgress) == null || n.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
function Id(r, t) {
  return {
    protocol: r.protocol,
    auth: r.auth,
    host: r.hostname,
    port: r.port,
    path: r.path,
    method: "GET",
    headers: t
  };
}
class qE extends zy {
  constructor(t) {
    super(t);
    const e = (n) => {
      if (n.statusCode === 404) {
        const l = new qr(`Missing PDF "${this._url}".`);
        this._storedError = l, this._headersCapability.reject(l);
        return;
      }
      this._headersCapability.resolve(), this._setReadableStream(n);
      const i = (l) => this._readableStream.headers[l.toLowerCase()], {
        allowRangeRequests: s,
        suggestedLength: o
      } = hm({
        getResponseHeader: i,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = s, this._contentLength = o || this._contentLength, this._filename = dm(i);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const n = Jn.get("http");
      this._request = n.request(Id(this._url, t.httpHeaders), e);
    } else {
      const n = Jn.get("https");
      this._request = n.request(Id(this._url, t.httpHeaders), e);
    }
    this._request.on("error", (n) => {
      this._storedError = n, this._headersCapability.reject(n);
    }), this._request.end();
  }
}
class XE extends jy {
  constructor(t, e, n) {
    super(t), this._httpHeaders = {};
    for (const s in t.httpHeaders) {
      const o = t.httpHeaders[s];
      o !== void 0 && (this._httpHeaders[s] = o);
    }
    this._httpHeaders.Range = `bytes=${e}-${n - 1}`;
    const i = (s) => {
      if (s.statusCode === 404) {
        const o = new qr(`Missing PDF "${this._url}".`);
        this._storedError = o;
        return;
      }
      this._setReadableStream(s);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const s = Jn.get("http");
      this._request = s.request(Id(this._url, this._httpHeaders), i);
    } else {
      const s = Jn.get("https");
      this._request = s.request(Id(this._url, this._httpHeaders), i);
    }
    this._request.on("error", (s) => {
      this._storedError = s;
    }), this._request.end();
  }
}
class YE extends zy {
  constructor(t) {
    super(t);
    let e = decodeURIComponent(this._url.path);
    Uy.test(this._url.href) && (e = e.replace(/^\//, ""));
    const n = Jn.get("fs");
    n.promises.lstat(e).then((i) => {
      this._contentLength = i.size, this._setReadableStream(n.createReadStream(e)), this._headersCapability.resolve();
    }, (i) => {
      i.code === "ENOENT" && (i = new qr(`Missing PDF "${e}".`)), this._storedError = i, this._headersCapability.reject(i);
    });
  }
}
class KE extends jy {
  constructor(t, e, n) {
    super(t);
    let i = decodeURIComponent(this._url.path);
    Uy.test(this._url.href) && (i = i.replace(/^\//, ""));
    const s = Jn.get("fs");
    this._setReadableStream(s.createReadStream(i, {
      start: e,
      end: n - 1
    }));
  }
}
const ZE = 1e5, Ne = 30, JE = 0.8;
var b0, ns, Be, pc, gc, tr, yi, mc, yc, er, Io, Fo, is, Mo, bc, Do, nr, vc, wc, He, ir, sr, No, vu, Gy, wu, Vy, Ac, sg, Oo, cd, Au, Wy;
let Fd = (He = class {
  constructor({
    textContentSource: t,
    container: e,
    viewport: n
  }) {
    m(this, vu);
    m(this, wu);
    m(this, Ac);
    m(this, ns, Promise.withResolvers());
    m(this, Be, null);
    m(this, pc, !1);
    m(this, gc, !!((b0 = globalThis.FontInspector) != null && b0.enabled));
    m(this, tr, null);
    m(this, yi, null);
    m(this, mc, 0);
    m(this, yc, 0);
    m(this, er, null);
    m(this, Io, null);
    m(this, Fo, 0);
    m(this, is, 0);
    m(this, Mo, /* @__PURE__ */ Object.create(null));
    m(this, bc, []);
    m(this, Do, null);
    m(this, nr, []);
    m(this, vc, /* @__PURE__ */ new WeakMap());
    m(this, wc, null);
    if (t instanceof ReadableStream)
      w(this, Do, t);
    else if (typeof t == "object")
      w(this, Do, new ReadableStream({
        start(c) {
          c.enqueue(t), c.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    w(this, Be, w(this, Io, e)), w(this, is, n.scale * (globalThis.devicePixelRatio || 1)), w(this, Fo, n.rotation), w(this, yi, {
      prevFontSize: null,
      prevFontFamily: null,
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: i,
      pageHeight: s,
      pageX: o,
      pageY: l
    } = n.rawDims;
    w(this, wc, [1, 0, 0, -1, -o, l + s]), w(this, yc, i), w(this, mc, s), jr(e, n), a(this, ns).promise.catch(() => {
    }).then(() => {
      a(He, No).delete(this), w(this, yi, null), w(this, Mo, null);
    });
  }
  render() {
    const t = () => {
      a(this, er).read().then(({
        value: e,
        done: n
      }) => {
        if (n) {
          a(this, ns).resolve();
          return;
        }
        a(this, tr) ?? w(this, tr, e.lang), Object.assign(a(this, Mo), e.styles), A(this, vu, Gy).call(this, e.items), t();
      }, a(this, ns).reject);
    };
    return w(this, er, a(this, Do).getReader()), a(He, No).add(this), t(), a(this, ns).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var s;
    const n = t.scale * (globalThis.devicePixelRatio || 1), i = t.rotation;
    if (i !== a(this, Fo) && (e == null || e(), w(this, Fo, i), jr(a(this, Io), {
      rotation: i
    })), n !== a(this, is)) {
      e == null || e(), w(this, is, n);
      const o = {
        prevFontSize: null,
        prevFontFamily: null,
        div: null,
        properties: null,
        ctx: A(s = He, Oo, cd).call(s, a(this, tr))
      };
      for (const l of a(this, nr))
        o.properties = a(this, vc).get(l), o.div = l, A(this, Ac, sg).call(this, o);
    }
  }
  cancel() {
    var e;
    const t = new Xr("TextLayer task cancelled.");
    (e = a(this, er)) == null || e.cancel(t).catch(() => {
    }), w(this, er, null), a(this, ns).reject(t);
  }
  get textDivs() {
    return a(this, nr);
  }
  get textContentItemsStr() {
    return a(this, bc);
  }
  static cleanup() {
    if (!(a(this, No).size > 0)) {
      a(this, ir).clear();
      for (const {
        canvas: t
      } of a(this, sr).values())
        t.remove();
      a(this, sr).clear();
    }
  }
}, ns = new WeakMap(), Be = new WeakMap(), pc = new WeakMap(), gc = new WeakMap(), tr = new WeakMap(), yi = new WeakMap(), mc = new WeakMap(), yc = new WeakMap(), er = new WeakMap(), Io = new WeakMap(), Fo = new WeakMap(), is = new WeakMap(), Mo = new WeakMap(), bc = new WeakMap(), Do = new WeakMap(), nr = new WeakMap(), vc = new WeakMap(), wc = new WeakMap(), ir = new WeakMap(), sr = new WeakMap(), No = new WeakMap(), vu = new WeakSet(), Gy = function(t) {
  var i, s;
  if (a(this, pc))
    return;
  (s = a(this, yi)).ctx || (s.ctx = A(i = He, Oo, cd).call(i, a(this, tr)));
  const e = a(this, nr), n = a(this, bc);
  for (const o of t) {
    if (e.length > ZE) {
      yt("Ignoring additional textDivs for performance reasons."), w(this, pc, !0);
      return;
    }
    if (o.str === void 0) {
      if (o.type === "beginMarkedContentProps" || o.type === "beginMarkedContent") {
        const l = a(this, Be);
        w(this, Be, document.createElement("span")), a(this, Be).classList.add("markedContent"), o.id !== null && a(this, Be).setAttribute("id", `${o.id}`), l.append(a(this, Be));
      } else
        o.type === "endMarkedContent" && w(this, Be, a(this, Be).parentNode);
      continue;
    }
    n.push(o.str), A(this, wu, Vy).call(this, o);
  }
}, wu = new WeakSet(), Vy = function(t) {
  var _;
  const e = document.createElement("span"), n = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  a(this, nr).push(e);
  const i = Q.transform(a(this, wc), t.transform);
  let s = Math.atan2(i[1], i[0]);
  const o = a(this, Mo)[t.fontName];
  o.vertical && (s += Math.PI / 2);
  const l = a(this, gc) && o.fontSubstitution || o.fontFamily, c = Math.hypot(i[2], i[3]), d = c * A(_ = He, Au, Wy).call(_, l, a(this, tr));
  let h, f;
  s === 0 ? (h = i[4], f = i[5] - d) : (h = i[4] + d * Math.sin(s), f = i[5] - d * Math.cos(s));
  const g = "calc(var(--scale-factor)*", y = e.style;
  a(this, Be) === a(this, Io) ? (y.left = `${(100 * h / a(this, yc)).toFixed(2)}%`, y.top = `${(100 * f / a(this, mc)).toFixed(2)}%`) : (y.left = `${g}${h.toFixed(2)}px)`, y.top = `${g}${f.toFixed(2)}px)`), y.fontSize = `${g}${c.toFixed(2)}px)`, y.fontFamily = l, n.fontSize = c, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, a(this, gc) && (e.dataset.fontName = o.fontSubstitutionLoadedName || t.fontName), s !== 0 && (n.angle = s * (180 / Math.PI));
  let b = !1;
  if (t.str.length > 1)
    b = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const x = Math.abs(t.transform[0]), E = Math.abs(t.transform[3]);
    x !== E && Math.max(x, E) / Math.min(x, E) > 1.5 && (b = !0);
  }
  if (b && (n.canvasWidth = o.vertical ? t.height : t.width), a(this, vc).set(e, n), a(this, yi).div = e, a(this, yi).properties = n, A(this, Ac, sg).call(this, a(this, yi)), n.hasText && a(this, Be).append(e), n.hasEOL) {
    const x = document.createElement("br");
    x.setAttribute("role", "presentation"), a(this, Be).append(x);
  }
}, Ac = new WeakSet(), sg = function(t) {
  const {
    div: e,
    properties: n,
    ctx: i,
    prevFontSize: s,
    prevFontFamily: o
  } = t, {
    style: l
  } = e;
  let c = "";
  if (n.canvasWidth !== 0 && n.hasText) {
    const {
      fontFamily: d
    } = l, {
      canvasWidth: h,
      fontSize: f
    } = n;
    (s !== f || o !== d) && (i.font = `${f * a(this, is)}px ${d}`, t.prevFontSize = f, t.prevFontFamily = d);
    const {
      width: g
    } = i.measureText(e.textContent);
    g > 0 && (c = `scaleX(${h * a(this, is) / g})`);
  }
  n.angle !== 0 && (c = `rotate(${n.angle}deg) ${c}`), c.length > 0 && (l.transform = c);
}, Oo = new WeakSet(), cd = function(t = null) {
  let e = a(this, sr).get(t || (t = ""));
  if (!e) {
    const n = document.createElement("canvas");
    n.className = "hiddenCanvasElement", n.lang = t, document.body.append(n), e = n.getContext("2d", {
      alpha: !1
    }), a(this, sr).set(t, e);
  }
  return e;
}, Au = new WeakSet(), Wy = function(t, e) {
  const n = a(this, ir).get(t);
  if (n)
    return n;
  const i = A(this, Oo, cd).call(this, e), s = i.font;
  i.canvas.width = i.canvas.height = Ne, i.font = `${Ne}px ${t}`;
  const o = i.measureText("");
  let l = o.fontBoundingBoxAscent, c = Math.abs(o.fontBoundingBoxDescent);
  if (l) {
    const f = l / (l + c);
    return a(this, ir).set(t, f), i.canvas.width = i.canvas.height = 0, i.font = s, f;
  }
  i.strokeStyle = "red", i.clearRect(0, 0, Ne, Ne), i.strokeText("g", 0, 0);
  let d = i.getImageData(0, 0, Ne, Ne).data;
  c = 0;
  for (let f = d.length - 1 - 3; f >= 0; f -= 4)
    if (d[f] > 0) {
      c = Math.ceil(f / 4 / Ne);
      break;
    }
  i.clearRect(0, 0, Ne, Ne), i.strokeText("A", 0, Ne), d = i.getImageData(0, 0, Ne, Ne).data, l = 0;
  for (let f = 0, g = d.length; f < g; f += 4)
    if (d[f] > 0) {
      l = Ne - Math.floor(f / 4 / Ne);
      break;
    }
  i.canvas.width = i.canvas.height = 0, i.font = s;
  const h = l ? l / (l + c) : JE;
  return a(this, ir).set(t, h), h;
}, m(He, Oo), m(He, Au), m(He, ir, /* @__PURE__ */ new Map()), m(He, sr, /* @__PURE__ */ new Map()), m(He, No, /* @__PURE__ */ new Set()), He);
function QE() {
  ay("`renderTextLayer`, please use `TextLayer` instead.");
  const {
    textContentSource: r,
    container: t,
    viewport: e,
    ...n
  } = arguments[0], i = Object.keys(n);
  i.length > 0 && yt("Ignoring `renderTextLayer` parameters: " + i.join(", "));
  const s = new Fd({
    textContentSource: r,
    container: t,
    viewport: e
  }), {
    textDivs: o,
    textContentItemsStr: l
  } = s;
  return {
    promise: s.render(),
    textDivs: o,
    textContentItemsStr: l
  };
}
function tS() {
  ay("`updateTextLayer`, please use `TextLayer` instead.");
}
class hl {
  static textContent(t) {
    const e = [], n = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function i(s) {
      var c;
      if (!s)
        return;
      let o = null;
      const l = s.name;
      if (l === "#text")
        o = s.value;
      else if (hl.shouldBuildText(l))
        (c = s == null ? void 0 : s.attributes) != null && c.textContent ? o = s.attributes.textContent : s.value && (o = s.value);
      else
        return;
      if (o !== null && e.push({
        str: o
      }), !!s.children)
        for (const d of s.children)
          i(d);
    }
    return i(t), n;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
const eS = 65536, nS = 100, iS = 5e3, sS = Te ? gE : nE, rS = Te ? mE : ry, oS = Te ? pE : eE, aS = Te ? yE : oy;
function lS(r) {
  if (typeof r == "string" || r instanceof URL ? r = {
    url: r
  } : (r instanceof ArrayBuffer || ArrayBuffer.isView(r)) && (r = {
    data: r
  }), typeof r != "object")
    throw new Error("Invalid parameter in getDocument, need parameter object.");
  if (!r.url && !r.data && !r.range)
    throw new Error("Invalid parameter object: need either .data, .range or .url");
  const t = new rg(), {
    docId: e
  } = t, n = r.url ? cS(r.url) : null, i = r.data ? hS(r.data) : null, s = r.httpHeaders || null, o = r.withCredentials === !0, l = r.password ?? null, c = r.range instanceof qy ? r.range : null, d = Number.isInteger(r.rangeChunkSize) && r.rangeChunkSize > 0 ? r.rangeChunkSize : eS;
  let h = r.worker instanceof ao ? r.worker : null;
  const f = r.verbosity, g = typeof r.docBaseUrl == "string" && !om(r.docBaseUrl) ? r.docBaseUrl : null, y = typeof r.cMapUrl == "string" ? r.cMapUrl : null, b = r.cMapPacked !== !1, _ = r.CMapReaderFactory || rS, x = typeof r.standardFontDataUrl == "string" ? r.standardFontDataUrl : null, E = r.StandardFontDataFactory || aS, P = r.stopAtErrors !== !0, k = Number.isInteger(r.maxImageSize) && r.maxImageSize > -1 ? r.maxImageSize : -1, L = r.isEvalSupported !== !1, F = typeof r.isOffscreenCanvasSupported == "boolean" ? r.isOffscreenCanvasSupported : !Te, I = Number.isInteger(r.canvasMaxAreaInBytes) ? r.canvasMaxAreaInBytes : -1, M = typeof r.disableFontFace == "boolean" ? r.disableFontFace : Te, C = r.fontExtraProperties === !0, T = r.enableXfa === !0, N = r.ownerDocument || globalThis.document, D = r.disableRange === !0, H = r.disableStream === !0, U = r.disableAutoFetch === !0, G = r.pdfBug === !0, Y = c ? c.length : r.length ?? NaN, Z = typeof r.useSystemFonts == "boolean" ? r.useSystemFonts : !Te && !M, B = typeof r.useWorkerFetch == "boolean" ? r.useWorkerFetch : _ === ry && E === oy && y && x && Wa(y, document.baseURI) && Wa(x, document.baseURI), V = r.canvasFactory || new sS({
    ownerDocument: N
  }), W = r.filterFactory || new oS({
    docId: e,
    ownerDocument: N
  }), bt = null;
  G_(f);
  const ut = {
    canvasFactory: V,
    filterFactory: W
  };
  if (B || (ut.cMapReaderFactory = new _({
    baseUrl: y,
    isCompressed: b
  }), ut.standardFontDataFactory = new E({
    baseUrl: x
  })), !h) {
    const tt = {
      verbosity: f,
      port: Ni.workerPort
    };
    h = tt.port ? ao.fromPort(tt) : new ao(tt), t._worker = h;
  }
  const z = {
    docId: e,
    apiVersion: "4.3.136",
    data: i,
    password: l,
    disableAutoFetch: U,
    rangeChunkSize: d,
    length: Y,
    docBaseUrl: g,
    enableXfa: T,
    evaluatorOptions: {
      maxImageSize: k,
      disableFontFace: M,
      ignoreErrors: P,
      isEvalSupported: L,
      isOffscreenCanvasSupported: F,
      canvasMaxAreaInBytes: I,
      fontExtraProperties: C,
      useSystemFonts: Z,
      cMapUrl: B ? y : null,
      standardFontDataUrl: B ? x : null
    }
  }, nt = {
    disableFontFace: M,
    fontExtraProperties: C,
    ownerDocument: N,
    pdfBug: G,
    styleElement: bt,
    loadingParams: {
      disableAutoFetch: U,
      enableXfa: T
    }
  };
  return h.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (h.destroyed)
      throw new Error("Worker was destroyed");
    const tt = h.messageHandler.sendWithPromise("GetDocRequest", z, i ? [i.buffer] : null);
    let et;
    return c ? et = new ME(c, {
      disableRange: D,
      disableStream: H
    }) : i || (et = ((K) => Te ? function() {
      return typeof fetch < "u" && typeof Response < "u" && "body" in Response.prototype;
    }() && Wa(K.url) ? new t0(K) : new WE(K) : Wa(K.url) ? new t0(K) : new zE(K))({
      url: n,
      length: Y,
      httpHeaders: s,
      withCredentials: o,
      rangeChunkSize: d,
      disableRange: D,
      disableStream: H
    })), tt.then((lt) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (h.destroyed)
        throw new Error("Worker was destroyed");
      const K = new Ya(e, lt, h.port), gt = new pS(K, t, et, nt, ut);
      t._transport = gt, K.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
function cS(r) {
  if (r instanceof URL)
    return r.href;
  try {
    return new URL(r, window.location).href;
  } catch {
    if (Te && typeof r == "string")
      return r;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function hS(r) {
  if (Te && typeof Ep < "u" && r instanceof Ep)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (r instanceof Uint8Array && r.byteLength === r.buffer.byteLength)
    return r;
  if (typeof r == "string")
    return Nf(r);
  if (r instanceof ArrayBuffer || ArrayBuffer.isView(r) || typeof r == "object" && !isNaN(r == null ? void 0 : r.length))
    return new Uint8Array(r);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function e0(r) {
  return typeof r == "object" && Number.isInteger(r == null ? void 0 : r.num) && r.num >= 0 && Number.isInteger(r == null ? void 0 : r.gen) && r.gen >= 0;
}
var _u;
const Eu = class Eu {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${Ve(Eu, _u)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var t, e, n;
    this.destroyed = !0;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (i) {
      throw (n = this._worker) != null && n.port && delete this._worker._pendingDestroy, i;
    }
    this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
  }
};
_u = new WeakMap(), m(Eu, _u, 0);
let rg = Eu, qy = class {
  constructor(t, e, n = !1, i = null) {
    this.length = t, this.initialData = e, this.progressiveDone = n, this.contentDispositionFilename = i, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(t) {
    this._rangeListeners.push(t);
  }
  addProgressListener(t) {
    this._progressListeners.push(t);
  }
  addProgressiveReadListener(t) {
    this._progressiveReadListeners.push(t);
  }
  addProgressiveDoneListener(t) {
    this._progressiveDoneListeners.push(t);
  }
  onDataRange(t, e) {
    for (const n of this._rangeListeners)
      n(t, e);
  }
  onDataProgress(t, e) {
    this._readyCapability.promise.then(() => {
      for (const n of this._progressListeners)
        n(t, e);
    });
  }
  onDataProgressiveRead(t) {
    this._readyCapability.promise.then(() => {
      for (const e of this._progressiveReadListeners)
        e(t);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const t of this._progressiveDoneListeners)
        t();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(t, e) {
    Dt("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
};
class dS {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return xt(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var ss, bi, rs, eo, Bo, hd;
class uS {
  constructor(t, e, n, i = !1) {
    m(this, rs);
    m(this, Bo);
    m(this, ss, null);
    m(this, bi, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = n, this._stats = i ? new Um() : null, this._pdfBug = i, this.commonObjs = n.commonObjs, this.objs = new Xy(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: n = 0,
    offsetY: i = 0,
    dontFlip: s = !1
  } = {}) {
    return new Fh({
      viewBox: this.view,
      scale: t,
      rotation: e,
      offsetX: n,
      offsetY: i,
      dontFlip: s
    });
  }
  getAnnotations({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return xt(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    viewport: e,
    intent: n = "display",
    annotationMode: i = Vi.ENABLE,
    transform: s = null,
    background: o = null,
    optionalContentConfigPromise: l = null,
    annotationCanvasMap: c = null,
    pageColors: d = null,
    printAnnotationStorage: h = null
  }) {
    var k, L;
    (k = this._stats) == null || k.time("Overall");
    const f = this._transport.getRenderingIntent(n, i, h), {
      renderingIntent: g,
      cacheKey: y
    } = f;
    w(this, bi, !1), A(this, Bo, hd).call(this), l || (l = this._transport.getOptionalContentConfig(g));
    let b = this._intentStates.get(y);
    b || (b = /* @__PURE__ */ Object.create(null), this._intentStates.set(y, b)), b.streamReaderCancelTimeout && (clearTimeout(b.streamReaderCancelTimeout), b.streamReaderCancelTimeout = null);
    const _ = !!(g & hn.PRINT);
    b.displayReadyCapability || (b.displayReadyCapability = Promise.withResolvers(), b.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (L = this._stats) == null || L.time("Page Request"), this._pumpOperatorList(f));
    const x = (F) => {
      var I;
      b.renderTasks.delete(E), (this._maybeCleanupAfterRender || _) && w(this, bi, !0), A(this, rs, eo).call(this, !_), F ? (E.capability.reject(F), this._abortOperatorList({
        intentState: b,
        reason: F instanceof Error ? F : new Error(F)
      })) : E.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (I = globalThis.Stats) != null && I.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, E = new ag({
      callback: x,
      params: {
        canvasContext: t,
        viewport: e,
        transform: s,
        background: o
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: c,
      operatorList: b.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !_,
      pdfBug: this._pdfBug,
      pageColors: d
    });
    (b.renderTasks || (b.renderTasks = /* @__PURE__ */ new Set())).add(E);
    const P = E.task;
    return Promise.all([b.displayReadyCapability.promise, l]).then(([F, I]) => {
      var M;
      if (this.destroyed) {
        x();
        return;
      }
      if ((M = this._stats) == null || M.time("Rendering"), !(I.renderingIntent & g))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      E.initializeGraphics({
        transparency: F,
        optionalContentConfig: I
      }), E.operatorListChanged();
    }).catch(x), P;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = Vi.ENABLE,
    printAnnotationStorage: n = null
  } = {}) {
    var c;
    function i() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
    }
    const s = this._transport.getRenderingIntent(t, e, n, !0);
    let o = this._intentStates.get(s.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(s.cacheKey, o));
    let l;
    return o.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = i, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(l), o.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (c = this._stats) == null || c.time("Page Request"), this._pumpOperatorList(s)), o.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size(i) {
        return i.items.length;
      }
    });
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((n) => hl.textContent(n));
    const e = this.streamTextContent(t);
    return new Promise(function(n, i) {
      function s() {
        o.read().then(function({
          value: c,
          done: d
        }) {
          if (d) {
            n(l);
            return;
          }
          l.lang ?? (l.lang = c.lang), Object.assign(l.styles, c.styles), l.items.push(...c.items), s();
        }, i);
      }
      const o = e.getReader(), l = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      s();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !e.opListReadCapability)
        for (const n of e.renderTasks)
          t.push(n.completed), n.cancel();
    return this.objs.clear(), w(this, bi, !1), A(this, Bo, hd).call(this), Promise.all(t);
  }
  cleanup(t = !1) {
    w(this, bi, !0);
    const e = A(this, rs, eo).call(this, !1);
    return t && e && this._stats && (this._stats = new Um()), e;
  }
  _startRenderPage(t, e) {
    var i, s;
    const n = this._intentStates.get(e);
    n && ((i = this._stats) == null || i.timeEnd("Page Request"), (s = n.displayReadyCapability) == null || s.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let n = 0, i = t.length; n < i; n++)
      e.operatorList.fnArray.push(t.fnArray[n]), e.operatorList.argsArray.push(t.argsArray[n]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const n of e.renderTasks)
      n.operatorListChanged();
    t.lastChunk && A(this, rs, eo).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: n
  }) {
    const {
      map: i,
      transfer: s
    } = n, l = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: i
    }, s).getReader(), c = this._intentStates.get(e);
    c.streamReader = l;
    const d = () => {
      l.read().then(({
        value: h,
        done: f
      }) => {
        if (f) {
          c.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(h, c), d());
      }, (h) => {
        if (c.streamReader = null, !this._transport.destroyed) {
          if (c.operatorList) {
            c.operatorList.lastChunk = !0;
            for (const f of c.renderTasks)
              f.operatorListChanged();
            A(this, rs, eo).call(this, !0);
          }
          if (c.displayReadyCapability)
            c.displayReadyCapability.reject(h);
          else if (c.opListReadCapability)
            c.opListReadCapability.reject(h);
          else
            throw h;
        }
      });
    };
    d();
  }
  _abortOperatorList({
    intentState: t,
    reason: e,
    force: n = !1
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !n) {
        if (t.renderTasks.size > 0)
          return;
        if (e instanceof rm) {
          let i = nS;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0
            });
          }, i);
          return;
        }
      }
      if (t.streamReader.cancel(new Xr(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [i, s] of this._intentStates)
          if (s === t) {
            this._intentStates.delete(i);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
ss = new WeakMap(), bi = new WeakMap(), rs = new WeakSet(), eo = function(t = !1) {
  if (A(this, Bo, hd).call(this), !a(this, bi) || this.destroyed)
    return !1;
  if (t)
    return w(this, ss, setTimeout(() => {
      w(this, ss, null), A(this, rs, eo).call(this, !1);
    }, iS)), !1;
  for (const {
    renderTasks: e,
    operatorList: n
  } of this._intentStates.values())
    if (e.size > 0 || !n.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), w(this, bi, !1), !0;
}, Bo = new WeakSet(), hd = function() {
  a(this, ss) && (clearTimeout(a(this, ss)), w(this, ss, null));
};
var rr, Su;
class fS {
  constructor() {
    m(this, rr, /* @__PURE__ */ new Set());
    m(this, Su, Promise.resolve());
  }
  postMessage(t, e) {
    const n = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    a(this, Su).then(() => {
      for (const i of a(this, rr))
        i.call(this, n);
    });
  }
  addEventListener(t, e) {
    a(this, rr).add(e);
  }
  removeEventListener(t, e) {
    a(this, rr).delete(e);
  }
  terminate() {
    a(this, rr).clear();
  }
}
rr = new WeakMap(), Su = new WeakMap();
const oi = {
  isWorkerDisabled: !1,
  fakeWorkerId: 0
};
Te && (oi.isWorkerDisabled = !0, Ni.workerSrc || (Ni.workerSrc = "./pdf.worker.mjs")), oi.isSameOrigin = function(r, t) {
  let e;
  try {
    if (e = new URL(r), !e.origin || e.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const n = new URL(t, e);
  return e.origin === n.origin;
}, oi.createCDNWrapper = function(r) {
  const t = `await import("${r}");`;
  return URL.createObjectURL(new Blob([t], {
    type: "text/javascript"
  }));
};
var or, $o, dd;
const qe = class qe {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: n = V_()
  } = {}) {
    var i;
    if (this.name = t, this.destroyed = !1, this.verbosity = n, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
      if ((i = a(qe, or)) != null && i.has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (a(qe, or) || w(qe, or, /* @__PURE__ */ new WeakMap())).set(e, this), this._initializeFromPort(e);
      return;
    }
    this._initialize();
  }
  get promise() {
    return Te ? Promise.all([Jn.promise, this._readyCapability.promise]) : this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(t) {
    this._port = t, this._messageHandler = new Ya("main", "worker", t), this._messageHandler.on("ready", function() {
    }), this._readyCapability.resolve(), this._messageHandler.send("configure", {
      verbosity: this.verbosity
    });
  }
  _initialize() {
    if (!oi.isWorkerDisabled && !a(qe, $o, dd)) {
      let {
        workerSrc: t
      } = qe;
      try {
        oi.isSameOrigin(window.location.href, t) || (t = oi.createCDNWrapper(new URL(t, window.location).href));
        const e = new Worker(t, {
          type: "module"
        }), n = new Ya("main", "worker", e), i = () => {
          e.removeEventListener("error", s), n.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
        }, s = () => {
          this._webWorker || i();
        };
        e.addEventListener("error", s), n.on("test", (l) => {
          if (e.removeEventListener("error", s), this.destroyed) {
            i();
            return;
          }
          l ? (this._messageHandler = n, this._port = e, this._webWorker = e, this._readyCapability.resolve(), n.send("configure", {
            verbosity: this.verbosity
          })) : (this._setupFakeWorker(), n.destroy(), e.terminate());
        }), n.on("ready", (l) => {
          if (e.removeEventListener("error", s), this.destroyed) {
            i();
            return;
          }
          try {
            o();
          } catch {
            this._setupFakeWorker();
          }
        });
        const o = () => {
          const l = new Uint8Array();
          n.send("test", l, [l.buffer]);
        };
        o();
        return;
      } catch {
        Mf("The worker has been disabled.");
      }
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    oi.isWorkerDisabled || (yt("Setting up fake worker."), oi.isWorkerDisabled = !0), qe._setupFakeWorkerGlobal.then((t) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const e = new fS();
      this._port = e;
      const n = `fake${oi.fakeWorkerId++}`, i = new Ya(n + "_worker", n, e);
      t.setup(i, e);
      const s = new Ya(n, n + "_worker", e);
      this._messageHandler = s, this._readyCapability.resolve(), s.send("configure", {
        verbosity: this.verbosity
      });
    }).catch((t) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
    });
  }
  destroy() {
    var t;
    this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (t = a(qe, or)) == null || t.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
  }
  static fromPort(t) {
    var n;
    if (!(t != null && t.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const e = (n = a(this, or)) == null ? void 0 : n.get(t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new qe(t);
  }
  static get workerSrc() {
    if (Ni.workerSrc)
      return Ni.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return xt(this, "_setupFakeWorkerGlobal", (async () => a(this, $o, dd) ? a(this, $o, dd) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
or = new WeakMap(), $o = new WeakSet(), dd = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, m(qe, $o), m(qe, or, void 0);
let ao = qe;
var vi, $n, Ho, Uo, Hn, ar, Ka;
class pS {
  constructor(t, e, n, i, s) {
    m(this, ar);
    m(this, vi, /* @__PURE__ */ new Map());
    m(this, $n, /* @__PURE__ */ new Map());
    m(this, Ho, /* @__PURE__ */ new Map());
    m(this, Uo, /* @__PURE__ */ new Map());
    m(this, Hn, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new Xy(), this.fontLoader = new uE({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = s.canvasFactory, this.filterFactory = s.filterFactory, this.cMapReaderFactory = s.cMapReaderFactory, this.standardFontDataFactory = s.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = n, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return xt(this, "annotationStorage", new cm());
  }
  getRenderingIntent(t, e = Vi.ENABLE, n = null, i = !1) {
    let s = hn.DISPLAY, o = Zp;
    switch (t) {
      case "any":
        s = hn.ANY;
        break;
      case "display":
        break;
      case "print":
        s = hn.PRINT;
        break;
      default:
        yt(`getRenderingIntent - invalid intent: ${t}`);
    }
    switch (e) {
      case Vi.DISABLE:
        s += hn.ANNOTATIONS_DISABLE;
        break;
      case Vi.ENABLE:
        break;
      case Vi.ENABLE_FORMS:
        s += hn.ANNOTATIONS_FORMS;
        break;
      case Vi.ENABLE_STORAGE:
        s += hn.ANNOTATIONS_STORAGE, o = (s & hn.PRINT && n instanceof Fy ? n : this.annotationStorage).serializable;
        break;
      default:
        yt(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    return i && (s += hn.OPLIST), {
      renderingIntent: s,
      cacheKey: `${s}_${o.hash}`,
      annotationStorageSerializable: o
    };
  }
  destroy() {
    var n;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (n = a(this, Hn)) == null || n.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const i of a(this, $n).values())
      t.push(i._destroy());
    a(this, $n).clear(), a(this, Ho).clear(), a(this, Uo).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i;
      this.commonObjs.clear(), this.fontLoader.clear(), a(this, vi).clear(), this.filterFactory.destroy(), Fd.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new Xr("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (n, i) => {
      ae(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (s) => {
        this._lastProgress = {
          loaded: s.loaded,
          total: s.total
        };
      }, i.onPull = () => {
        this._fullReader.read().then(function({
          value: s,
          done: o
        }) {
          if (o) {
            i.close();
            return;
          }
          ae(s instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(s), 1, [s]);
        }).catch((s) => {
          i.error(s);
        });
      }, i.onCancel = (s) => {
        this._fullReader.cancel(s), i.ready.catch((o) => {
          if (!this.destroyed)
            throw o;
        });
      };
    }), t.on("ReaderHeadersReady", (n) => {
      const i = Promise.withResolvers(), s = this._fullReader;
      return s.headersReady.then(() => {
        var o;
        (!s.isStreamingSupported || !s.isRangeSupported) && (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)), s.onProgress = (l) => {
          var c;
          (c = e.onProgress) == null || c.call(e, {
            loaded: l.loaded,
            total: l.total
          });
        }), i.resolve({
          isStreamingSupported: s.isStreamingSupported,
          isRangeSupported: s.isRangeSupported,
          contentLength: s.contentLength
        });
      }, i.reject), i.promise;
    }), t.on("GetRangeReader", (n, i) => {
      ae(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const s = this._networkStream.getRangeReader(n.begin, n.end);
      if (!s) {
        i.close();
        return;
      }
      i.onPull = () => {
        s.read().then(function({
          value: o,
          done: l
        }) {
          if (l) {
            i.close();
            return;
          }
          ae(o instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(o), 1, [o]);
        }).catch((o) => {
          i.error(o);
        });
      }, i.onCancel = (o) => {
        s.cancel(o), i.ready.catch((l) => {
          if (!this.destroyed)
            throw l;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: n
    }) => {
      this._numPages = n.numPages, this._htmlForXfa = n.htmlForXfa, delete n.htmlForXfa, e._capability.resolve(new dS(n, this));
    }), t.on("DocException", function(n) {
      let i;
      switch (n.name) {
        case "PasswordException":
          i = new Cp(n.message, n.code);
          break;
        case "InvalidPDFException":
          i = new ey(n.message);
          break;
        case "MissingPDFException":
          i = new qr(n.message);
          break;
        case "UnexpectedResponseException":
          i = new Df(n.message, n.status);
          break;
        case "UnknownErrorException":
          i = new Tp(n.message, n.details);
          break;
        default:
          Dt("DocException - expected a valid Error.");
      }
      e._capability.reject(i);
    }), t.on("PasswordRequest", (n) => {
      if (w(this, Hn, Promise.withResolvers()), e.onPassword) {
        const i = (s) => {
          s instanceof Error ? a(this, Hn).reject(s) : a(this, Hn).resolve({
            password: s
          });
        };
        try {
          e.onPassword(i, n.code);
        } catch (s) {
          a(this, Hn).reject(s);
        }
      } else
        a(this, Hn).reject(new Cp(n.message, n.code));
      return a(this, Hn).promise;
    }), t.on("DataLoaded", (n) => {
      var i;
      (i = e.onProgress) == null || i.call(e, {
        loaded: n.length,
        total: n.length
      }), this.downloadInfoCapability.resolve(n);
    }), t.on("StartRenderPage", (n) => {
      if (this.destroyed)
        return;
      a(this, $n).get(n.pageIndex)._startRenderPage(n.transparency, n.cacheKey);
    }), t.on("commonobj", ([n, i, s]) => {
      var o;
      if (this.destroyed || this.commonObjs.has(n))
        return null;
      switch (i) {
        case "Font":
          const {
            disableFontFace: l,
            fontExtraProperties: c,
            pdfBug: d
          } = this._params;
          if ("error" in s) {
            const y = s.error;
            yt(`Error during font loading: ${y}`), this.commonObjs.resolve(n, y);
            break;
          }
          const h = d && ((o = globalThis.FontInspector) != null && o.enabled) ? (y, b) => globalThis.FontInspector.fontAdded(y, b) : null, f = new fE(s, {
            disableFontFace: l,
            inspectFont: h
          });
          this.fontLoader.bind(f).catch(() => t.sendWithPromise("FontFallback", {
            id: n
          })).finally(() => {
            !c && f.data && (f.data = null), this.commonObjs.resolve(n, f);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: g
          } = s;
          ae(g, "The imageRef must be defined.");
          for (const y of a(this, $n).values())
            for (const [, b] of y.objs)
              if ((b == null ? void 0 : b.ref) === g)
                return b.dataLen ? (this.commonObjs.resolve(n, structuredClone(b)), b.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(n, s);
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    }), t.on("obj", ([n, i, s, o]) => {
      var c;
      if (this.destroyed)
        return;
      const l = a(this, $n).get(i);
      if (!l.objs.has(n)) {
        if (l._intentStates.size === 0) {
          (c = o == null ? void 0 : o.bitmap) == null || c.close();
          return;
        }
        switch (s) {
          case "Image":
            l.objs.resolve(n, o), (o == null ? void 0 : o.dataLen) > H_ && (l._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            l.objs.resolve(n, o);
            break;
          default:
            throw new Error(`Got unknown object type ${s}`);
        }
      }
    }), t.on("DocProgress", (n) => {
      var i;
      this.destroyed || (i = e.onProgress) == null || i.call(e, {
        loaded: n.loaded,
        total: n.total
      });
    }), t.on("FetchBuiltInCMap", (n) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(n) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), t.on("FetchStandardFontData", (n) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(n) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var n;
    this.annotationStorage.size <= 0 && yt("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: t,
      transfer: e
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: ((n = this._fullReader) == null ? void 0 : n.filename) ?? null
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, n = a(this, Ho).get(e);
    if (n)
      return n;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((s) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      s.refStr && a(this, Uo).set(s.refStr, t);
      const o = new uS(e, s, this, this._params.pdfBug);
      return a(this, $n).set(e, o), o;
    });
    return a(this, Ho).set(e, i), i;
  }
  getPageIndex(t) {
    return e0(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent: e
    });
  }
  getFieldObjects() {
    return A(this, ar, Ka).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return A(this, ar, Ka).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return A(this, ar, Ka).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return A(this, ar, Ka).call(this, "GetOptionalContentConfig").then((e) => new FE(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = a(this, vi).get(t);
    if (e)
      return e;
    const n = this.messageHandler.sendWithPromise(t, null).then((i) => {
      var s, o;
      return {
        info: i[0],
        metadata: i[1] ? new LE(i[1]) : null,
        contentDispositionFilename: ((s = this._fullReader) == null ? void 0 : s.filename) ?? null,
        contentLength: ((o = this._fullReader) == null ? void 0 : o.contentLength) ?? null
      };
    });
    return a(this, vi).set(t, n), n;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of a(this, $n).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), a(this, vi).clear(), this.filterFactory.destroy(!0), Fd.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!e0(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return a(this, Uo).get(e) ?? null;
  }
}
vi = new WeakMap(), $n = new WeakMap(), Ho = new WeakMap(), Uo = new WeakMap(), Hn = new WeakMap(), ar = new WeakSet(), Ka = function(t, e = null) {
  const n = a(this, vi).get(t);
  if (n)
    return n;
  const i = this.messageHandler.sendWithPromise(t, e);
  return a(this, vi).set(t, i), i;
};
const qh = Symbol("INITIAL_DATA");
var vn, _c, og;
class Xy {
  constructor() {
    m(this, _c);
    m(this, vn, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = A(this, _c, og).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const n = a(this, vn)[t];
    if (!n || n.data === qh)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return n.data;
  }
  has(t) {
    const e = a(this, vn)[t];
    return !!e && e.data !== qh;
  }
  resolve(t, e = null) {
    const n = A(this, _c, og).call(this, t);
    n.data = e, n.resolve();
  }
  clear() {
    var t;
    for (const e in a(this, vn)) {
      const {
        data: n
      } = a(this, vn)[e];
      (t = n == null ? void 0 : n.bitmap) == null || t.close();
    }
    w(this, vn, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in a(this, vn)) {
      const {
        data: e
      } = a(this, vn)[t];
      e !== qh && (yield [t, e]);
    }
  }
}
vn = new WeakMap(), _c = new WeakSet(), og = function(t) {
  var e;
  return (e = a(this, vn))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: qh
  });
};
var os;
class gS {
  constructor(t) {
    m(this, os, null);
    w(this, os, t), this.onContinue = null;
  }
  get promise() {
    return a(this, os).capability.promise;
  }
  cancel(t = 0) {
    a(this, os).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = a(this, os).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = a(this, os);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
os = new WeakMap();
var lr;
const ks = class ks {
  constructor({
    callback: t,
    params: e,
    objs: n,
    commonObjs: i,
    annotationCanvasMap: s,
    operatorList: o,
    pageIndex: l,
    canvasFactory: c,
    filterFactory: d,
    useRequestAnimationFrame: h = !1,
    pdfBug: f = !1,
    pageColors: g = null
  }) {
    this.callback = t, this.params = e, this.objs = n, this.commonObjs = i, this.annotationCanvasMap = s, this.operatorListIdx = null, this.operatorList = o, this._pageIndex = l, this.canvasFactory = c, this.filterFactory = d, this._pdfBug = f, this.pageColors = g, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = h === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new gS(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }) {
    var l, c;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (a(ks, lr).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      a(ks, lr).add(this._canvas);
    }
    this._pdfBug && ((l = globalThis.StepperManager) != null && l.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: n,
      viewport: i,
      transform: s,
      background: o
    } = this.params;
    this.gfx = new oo(n, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: s,
      viewport: i,
      transparency: t,
      background: o
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (c = this.graphicsReadyCallback) == null || c.call(this);
  }
  cancel(t = null, e = 0) {
    var n;
    this.running = !1, this.cancelled = !0, (n = this.gfx) == null || n.endDrawing(), a(ks, lr).delete(this._canvas), this.callback(t || new rm(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
  }
  operatorListChanged() {
    var t;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (t = this.stepper) == null || t.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
      this._nextBound().catch(this._cancelBound);
    }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), a(ks, lr).delete(this._canvas), this.callback())));
  }
};
lr = new WeakMap(), m(ks, lr, /* @__PURE__ */ new WeakSet());
let ag = ks;
const mS = "4.3.136", yS = "0cec64437";
function n0(r) {
  return Math.floor(Math.max(0, Math.min(1, r)) * 255).toString(16).padStart(2, "0");
}
function Ua(r) {
  return Math.max(0, Math.min(255, 255 * r));
}
class i0 {
  static CMYK_G([t, e, n, i]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * n + 0.11 * e + i)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = Ua(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = n0(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, n]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * n];
  }
  static RGB_rgb(t) {
    return t.map(Ua);
  }
  static RGB_HTML(t) {
    return `#${t.map(n0).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, n, i]) {
    return ["RGB", 1 - Math.min(1, t + i), 1 - Math.min(1, n + i), 1 - Math.min(1, e + i)];
  }
  static CMYK_rgb([t, e, n, i]) {
    return [Ua(1 - Math.min(1, t + i)), Ua(1 - Math.min(1, n + i)), Ua(1 - Math.min(1, e + i))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, n]) {
    const i = 1 - t, s = 1 - e, o = 1 - n, l = Math.min(i, s, o);
    return ["CMYK", i, s, o, l];
  }
}
class Yy {
  static setupStorage(t, e, n, i, s) {
    const o = i.getValue(e, {
      value: null
    });
    switch (n.name) {
      case "textarea":
        if (o.value !== null && (t.textContent = o.value), s === "print")
          break;
        t.addEventListener("input", (l) => {
          i.setValue(e, {
            value: l.target.value
          });
        });
        break;
      case "input":
        if (n.attributes.type === "radio" || n.attributes.type === "checkbox") {
          if (o.value === n.attributes.xfaOn ? t.setAttribute("checked", !0) : o.value === n.attributes.xfaOff && t.removeAttribute("checked"), s === "print")
            break;
          t.addEventListener("change", (l) => {
            i.setValue(e, {
              value: l.target.checked ? l.target.getAttribute("xfaOn") : l.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (o.value !== null && t.setAttribute("value", o.value), s === "print")
            break;
          t.addEventListener("input", (l) => {
            i.setValue(e, {
              value: l.target.value
            });
          });
        }
        break;
      case "select":
        if (o.value !== null) {
          t.setAttribute("value", o.value);
          for (const l of n.children)
            l.attributes.value === o.value ? l.attributes.selected = !0 : l.attributes.hasOwnProperty("selected") && delete l.attributes.selected;
        }
        t.addEventListener("input", (l) => {
          const c = l.target.options, d = c.selectedIndex === -1 ? "" : c[c.selectedIndex].value;
          i.setValue(e, {
            value: d
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: n = null,
    intent: i,
    linkService: s
  }) {
    const {
      attributes: o
    } = e, l = t instanceof HTMLAnchorElement;
    o.type === "radio" && (o.name = `${o.name}-${i}`);
    for (const [c, d] of Object.entries(o))
      if (d != null)
        switch (c) {
          case "class":
            d.length && t.setAttribute(c, d.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", d);
            break;
          case "style":
            Object.assign(t.style, d);
            break;
          case "textContent":
            t.textContent = d;
            break;
          default:
            (!l || c !== "href" && c !== "newWindow") && t.setAttribute(c, d);
        }
    l && s.addLinkAttributes(t, o.href, o.newWindow), n && o.dataId && this.setupStorage(t, o.dataId, e, n);
  }
  static render(t) {
    var f, g;
    const e = t.annotationStorage, n = t.linkService, i = t.xfaHtml, s = t.intent || "display", o = document.createElement(i.name);
    i.attributes && this.setAttributes({
      html: o,
      element: i,
      intent: s,
      linkService: n
    });
    const l = s !== "richText", c = t.div;
    if (c.append(o), t.viewport) {
      const y = `matrix(${t.viewport.transform.join(",")})`;
      c.style.transform = y;
    }
    l && c.setAttribute("class", "xfaLayer xfaFont");
    const d = [];
    if (i.children.length === 0) {
      if (i.value) {
        const y = document.createTextNode(i.value);
        o.append(y), l && hl.shouldBuildText(i.name) && d.push(y);
      }
      return {
        textDivs: d
      };
    }
    const h = [[i, -1, o]];
    for (; h.length > 0; ) {
      const [y, b, _] = h.at(-1);
      if (b + 1 === y.children.length) {
        h.pop();
        continue;
      }
      const x = y.children[++h.at(-1)[1]];
      if (x === null)
        continue;
      const {
        name: E
      } = x;
      if (E === "#text") {
        const k = document.createTextNode(x.value);
        d.push(k), _.append(k);
        continue;
      }
      const P = (f = x == null ? void 0 : x.attributes) != null && f.xmlns ? document.createElementNS(x.attributes.xmlns, E) : document.createElement(E);
      if (_.append(P), x.attributes && this.setAttributes({
        html: P,
        element: x,
        storage: e,
        intent: s,
        linkService: n
      }), ((g = x.children) == null ? void 0 : g.length) > 0)
        h.push([x, -1, P]);
      else if (x.value) {
        const k = document.createTextNode(x.value);
        l && hl.shouldBuildText(E) && d.push(k), P.append(k);
      }
    }
    for (const y of c.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      y.setAttribute("readOnly", !0);
    return {
      textDivs: d
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const Nh = 1e3, bS = 9, Vr = /* @__PURE__ */ new WeakSet();
function Oi(r) {
  return {
    width: r[2] - r[0],
    height: r[3] - r[1]
  };
}
class vS {
  static create(t) {
    switch (t.data.annotationType) {
      case ne.LINK:
        return new Ky(t);
      case ne.TEXT:
        return new wS(t);
      case ne.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new AS(t);
          case "Btn":
            return t.data.radioButton ? new Qy(t) : t.data.checkBox ? new ES(t) : new SS(t);
          case "Ch":
            return new xS(t);
          case "Sig":
            return new _S(t);
        }
        return new Yr(t);
      case ne.POPUP:
        return new cg(t);
      case ne.FREETEXT:
        return new sb(t);
      case ne.LINE:
        return new TS(t);
      case ne.SQUARE:
        return new PS(t);
      case ne.CIRCLE:
        return new RS(t);
      case ne.POLYLINE:
        return new rb(t);
      case ne.CARET:
        return new LS(t);
      case ne.INK:
        return new ob(t);
      case ne.POLYGON:
        return new kS(t);
      case ne.HIGHLIGHT:
        return new IS(t);
      case ne.UNDERLINE:
        return new FS(t);
      case ne.SQUIGGLY:
        return new MS(t);
      case ne.STRIKEOUT:
        return new DS(t);
      case ne.STAMP:
        return new ab(t);
      case ne.FILEATTACHMENT:
        return new NS(t);
      default:
        return new Jt(t);
    }
  }
}
var cr, zo, jo, Ec, lg;
const Am = class Am {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: n = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    m(this, Ec);
    m(this, cr, null);
    m(this, zo, !1);
    m(this, jo, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(n)), i && this._createQuadrilaterals();
  }
  static _hasPopupData({
    titleObj: t,
    contentsObj: e,
    richText: n
  }) {
    return !!(t != null && t.str || e != null && e.str || n != null && n.str);
  }
  get hasPopupData() {
    return Am._hasPopupData(this.data);
  }
  updateEdited(t) {
    var n;
    if (!this.container)
      return;
    a(this, cr) || w(this, cr, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: e
    } = t;
    e && A(this, Ec, lg).call(this, e), (n = a(this, jo)) == null || n.popup.updateEdited(t);
  }
  resetEdited() {
    var t;
    a(this, cr) && (A(this, Ec, lg).call(this, a(this, cr).rect), (t = a(this, jo)) == null || t.popup.resetEdited(), w(this, cr, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: n,
        viewport: i
      }
    } = this, s = document.createElement("section");
    s.setAttribute("data-annotation-id", e.id), this instanceof Yr || (s.tabIndex = Nh);
    const {
      style: o
    } = s;
    if (o.zIndex = this.parent.zIndex++, e.popupRef && s.setAttribute("aria-haspopup", "dialog"), e.alternativeText && (s.title = e.alternativeText), e.noRotate && s.classList.add("norotate"), !e.rect || this instanceof cg) {
      const {
        rotation: _
      } = e;
      return !e.hasOwnCanvas && _ !== 0 && this.setRotation(_, s), s;
    }
    const {
      width: l,
      height: c
    } = Oi(e.rect);
    if (!t && e.borderStyle.width > 0) {
      o.borderWidth = `${e.borderStyle.width}px`;
      const _ = e.borderStyle.horizontalCornerRadius, x = e.borderStyle.verticalCornerRadius;
      if (_ > 0 || x > 0) {
        const P = `calc(${_}px * var(--scale-factor)) / calc(${x}px * var(--scale-factor))`;
        o.borderRadius = P;
      } else if (this instanceof Qy) {
        const P = `calc(${l}px * var(--scale-factor)) / calc(${c}px * var(--scale-factor))`;
        o.borderRadius = P;
      }
      switch (e.borderStyle.style) {
        case $a.SOLID:
          o.borderStyle = "solid";
          break;
        case $a.DASHED:
          o.borderStyle = "dashed";
          break;
        case $a.BEVELED:
          yt("Unimplemented border style: beveled");
          break;
        case $a.INSET:
          yt("Unimplemented border style: inset");
          break;
        case $a.UNDERLINE:
          o.borderBottomStyle = "solid";
          break;
      }
      const E = e.borderColor || null;
      E ? (w(this, zo, !0), o.borderColor = Q.makeHexColor(E[0] | 0, E[1] | 0, E[2] | 0)) : o.borderWidth = 0;
    }
    const d = Q.normalizeRect([e.rect[0], n.view[3] - e.rect[1] + n.view[1], e.rect[2], n.view[3] - e.rect[3] + n.view[1]]), {
      pageWidth: h,
      pageHeight: f,
      pageX: g,
      pageY: y
    } = i.rawDims;
    o.left = `${100 * (d[0] - g) / h}%`, o.top = `${100 * (d[1] - y) / f}%`;
    const {
      rotation: b
    } = e;
    return e.hasOwnCanvas || b === 0 ? (o.width = `${100 * l / h}%`, o.height = `${100 * c / f}%`) : this.setRotation(b, s), s;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: n,
      pageHeight: i
    } = this.parent.viewport.rawDims, {
      width: s,
      height: o
    } = Oi(this.data.rect);
    let l, c;
    t % 180 === 0 ? (l = 100 * s / n, c = 100 * o / i) : (l = 100 * o / n, c = 100 * s / i), e.style.width = `${l}%`, e.style.height = `${c}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, n, i) => {
      const s = i.detail[e], o = s[0], l = s.slice(1);
      i.target.style[n] = i0[`${o}_HTML`](l), this.annotationStorage.setValue(this.data.id, {
        [n]: i0[`${o}_rgb`](l)
      });
    };
    return xt(this, "_commonActions", {
      display: (e) => {
        const {
          display: n
        } = e.detail, i = n % 2 === 1;
        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: i,
          noPrint: n === 1 || n === 2
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      },
      hidden: (e) => {
        const {
          hidden: n
        } = e.detail;
        this.container.style.visibility = n ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: n,
          noView: n
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (e) => {
        e.target.title = e.detail.userName;
      },
      readonly: (e) => {
        e.target.disabled = e.detail.readonly;
      },
      required: (e) => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: (e) => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        t("fgColor", "color", e);
      },
      textColor: (e) => {
        t("textColor", "color", e);
      },
      borderColor: (e) => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        t("strokeColor", "borderColor", e);
      },
      rotation: (e) => {
        const n = e.detail.rotation;
        this.setRotation(n), this.annotationStorage.setValue(this.data.id, {
          rotation: n
        });
      }
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const n = this._commonActions;
    for (const i of Object.keys(e.detail)) {
      const s = t[i] || n[i];
      s == null || s(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const n = this._commonActions;
    for (const [i, s] of Object.entries(e)) {
      const o = n[i];
      if (o) {
        const l = {
          detail: {
            [i]: s
          },
          target: t
        };
        o(l), delete e[i];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: t
    } = this.data;
    if (!t)
      return;
    const [e, n, i, s] = this.data.rect;
    if (t.length === 1) {
      const [, {
        x: _,
        y: x
      }, {
        x: E,
        y: P
      }] = t[0];
      if (i === _ && s === x && e === E && n === P)
        return;
    }
    const {
      style: o
    } = this.container;
    let l;
    if (a(this, zo)) {
      const {
        borderColor: _,
        borderWidth: x
      } = o;
      o.borderWidth = 0, l = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${_}" stroke-width="${x}">`], this.container.classList.add("hasBorder");
    }
    const c = i - e, d = s - n, {
      svgFactory: h
    } = this, f = h.createElement("svg");
    f.classList.add("quadrilateralsContainer"), f.setAttribute("width", 0), f.setAttribute("height", 0);
    const g = h.createElement("defs");
    f.append(g);
    const y = h.createElement("clipPath"), b = `clippath_${this.data.id}`;
    y.setAttribute("id", b), y.setAttribute("clipPathUnits", "objectBoundingBox"), g.append(y);
    for (const [, {
      x: _,
      y: x
    }, {
      x: E,
      y: P
    }] of t) {
      const k = h.createElement("rect"), L = (E - e) / c, F = (s - x) / d, I = (_ - E) / c, M = (x - P) / d;
      k.setAttribute("x", L), k.setAttribute("y", F), k.setAttribute("width", I), k.setAttribute("height", M), y.append(k), l == null || l.push(`<rect vector-effect="non-scaling-stroke" x="${L}" y="${F}" width="${I}" height="${M}"/>`);
    }
    a(this, zo) && (l.push("</g></svg>')"), o.backgroundImage = l.join("")), this.container.append(f), this.container.style.clipPath = `url(#${b})`;
  }
  _createPopup() {
    const {
      container: t,
      data: e
    } = this;
    t.setAttribute("aria-haspopup", "dialog");
    const n = w(this, jo, new cg({
      data: {
        color: e.color,
        titleObj: e.titleObj,
        modificationDate: e.modificationDate,
        contentsObj: e.contentsObj,
        richText: e.richText,
        parentRect: e.rect,
        borderStyle: 0,
        id: `popup_${e.id}`,
        rotation: e.rotation
      },
      parent: this.parent,
      elements: [this]
    }));
    this.parent.div.append(n.render());
  }
  render() {
    Dt("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const n = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects[t];
      if (i)
        for (const {
          page: s,
          id: o,
          exportValues: l
        } of i) {
          if (s === -1 || o === e)
            continue;
          const c = typeof l == "string" ? l : null, d = document.querySelector(`[data-element-id="${o}"]`);
          if (d && !Vr.has(d)) {
            yt(`_getElementsByName - element not allowed: ${o}`);
            continue;
          }
          n.push({
            id: o,
            exportValue: c,
            domElement: d
          });
        }
      return n;
    }
    for (const i of document.getElementsByName(t)) {
      const {
        exportValue: s
      } = i, o = i.getAttribute("data-element-id");
      o !== e && Vr.has(i) && n.push({
        id: o,
        exportValue: s,
        domElement: i
      });
    }
    return n;
  }
  show() {
    var t;
    this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
  }
  hide() {
    var t;
    this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t))
      for (const e of t)
        e.classList.add("highlightArea");
    else
      t.classList.add("highlightArea");
  }
  get _isEditable() {
    return !1;
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: t,
      data: {
        id: e
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var n;
      (n = this.linkService.eventBus) == null || n.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e
      });
    });
  }
};
cr = new WeakMap(), zo = new WeakMap(), jo = new WeakMap(), Ec = new WeakSet(), lg = function(t) {
  const {
    container: {
      style: e
    },
    data: {
      rect: n,
      rotation: i
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: s,
          pageHeight: o,
          pageX: l,
          pageY: c
        }
      }
    }
  } = this;
  n == null || n.splice(0, 4, ...t);
  const {
    width: d,
    height: h
  } = Oi(t);
  e.left = `${100 * (t[0] - l) / s}%`, e.top = `${100 * (o - t[3] + c) / o}%`, i === 0 ? (e.width = `${100 * d / s}%`, e.height = `${100 * h / o}%`) : this.setRotation(i);
};
let Jt = Am;
var wi, xs, xu, Zy, Cu, Jy;
class Ky extends Jt {
  constructor(e, n = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(n != null && n.ignoreBorder),
      createQuadrilaterals: !0
    });
    m(this, wi);
    m(this, xu);
    m(this, Cu);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: n
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let s = !1;
    return e.url ? (n.addLinkAttributes(i, e.url, e.newWindow), s = !0) : e.action ? (this._bindNamedAction(i, e.action), s = !0) : e.attachment ? (A(this, xu, Zy).call(this, i, e.attachment, e.attachmentDest), s = !0) : e.setOCGState ? (A(this, Cu, Jy).call(this, i, e.setOCGState), s = !0) : e.dest ? (this._bindLink(i, e.dest), s = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), s = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), s = !0) : this.isTooltipOnly && !s && (this._bindLink(i, ""), s = !0)), this.container.classList.add("linkAnnotation"), s && this.container.append(i), this.container;
  }
  _bindLink(e, n) {
    e.href = this.linkService.getDestinationHash(n), e.onclick = () => (n && this.linkService.goToDestination(n), !1), (n || n === "") && A(this, wi, xs).call(this);
  }
  _bindNamedAction(e, n) {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(n), !1), A(this, wi, xs).call(this);
  }
  _bindJSAction(e, n) {
    e.href = this.linkService.getAnchorUrl("");
    const i = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const s of Object.keys(n.actions)) {
      const o = i.get(s);
      o && (e[o] = () => {
        var l;
        return (l = this.linkService.eventBus) == null || l.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: n.id,
            name: s
          }
        }), !1;
      });
    }
    e.onclick || (e.onclick = () => !1), A(this, wi, xs).call(this);
  }
  _bindResetFormAction(e, n) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), A(this, wi, xs).call(this), !this._fieldObjects) {
      yt('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var f;
      i == null || i();
      const {
        fields: s,
        refs: o,
        include: l
      } = n, c = [];
      if (s.length !== 0 || o.length !== 0) {
        const g = new Set(o);
        for (const y of s) {
          const b = this._fieldObjects[y] || [];
          for (const {
            id: _
          } of b)
            g.add(_);
        }
        for (const y of Object.values(this._fieldObjects))
          for (const b of y)
            g.has(b.id) === l && c.push(b);
      } else
        for (const g of Object.values(this._fieldObjects))
          c.push(...g);
      const d = this.annotationStorage, h = [];
      for (const g of c) {
        const {
          id: y
        } = g;
        switch (h.push(y), g.type) {
          case "text": {
            const _ = g.defaultValue || "";
            d.setValue(y, {
              value: _
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const _ = g.defaultValue === g.exportValues;
            d.setValue(y, {
              value: _
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const _ = g.defaultValue || "";
            d.setValue(y, {
              value: _
            });
            break;
          }
          default:
            continue;
        }
        const b = document.querySelector(`[data-element-id="${y}"]`);
        if (b) {
          if (!Vr.has(b)) {
            yt(`_bindResetFormAction - element not allowed: ${y}`);
            continue;
          }
        } else
          continue;
        b.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((f = this.linkService.eventBus) == null || f.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: h,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
wi = new WeakSet(), xs = function() {
  this.container.setAttribute("data-internal-link", "");
}, xu = new WeakSet(), Zy = function(e, n, i = null) {
  e.href = this.linkService.getAnchorUrl(""), n.description && (e.title = n.description), e.onclick = () => {
    var s;
    return (s = this.downloadManager) == null || s.openOrDownloadData(n.content, n.filename, i), !1;
  }, A(this, wi, xs).call(this);
}, Cu = new WeakSet(), Jy = function(e, n) {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(n), !1), A(this, wi, xs).call(this);
};
class wS extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
}
class Yr extends Jt {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return je.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, n, i, s) {
    n.includes("mouse") ? t.addEventListener(n, (o) => {
      var l;
      (l = this.linkService.eventBus) == null || l.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: s(o),
          shift: o.shiftKey,
          modifier: this._getKeyModifier(o)
        }
      });
    }) : t.addEventListener(n, (o) => {
      var l;
      if (n === "blur") {
        if (!e.focused || !o.relatedTarget)
          return;
        e.focused = !1;
      } else if (n === "focus") {
        if (e.focused)
          return;
        e.focused = !0;
      }
      s && ((l = this.linkService.eventBus) == null || l.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: s(o)
        }
      }));
    });
  }
  _setEventListeners(t, e, n, i) {
    var s, o, l;
    for (const [c, d] of n)
      (d === "Action" || (s = this.data.actions) != null && s[d]) && ((d === "Focus" || d === "Blur") && (e || (e = {
        focused: !1
      })), this._setEventListener(t, e, c, d, i), d === "Focus" && !((o = this.data.actions) != null && o.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : d === "Blur" && !((l = this.data.actions) != null && l.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : Q.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: n
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || bS, s = t.style;
    let o;
    const l = 2, c = (d) => Math.round(10 * d) / 10;
    if (this.data.multiLine) {
      const d = Math.abs(this.data.rect[3] - this.data.rect[1] - l), h = Math.round(d / (ip * i)) || 1, f = d / h;
      o = Math.min(i, c(f / ip));
    } else {
      const d = Math.abs(this.data.rect[3] - this.data.rect[1] - l);
      o = Math.min(i, c(d / ip));
    }
    s.fontSize = `calc(${o}px * var(--scale-factor))`, s.color = Q.makeHexColor(n[0], n[1], n[2]), this.data.textAlignment !== null && (s.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class AS extends Yr {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, n, i) {
    const s = this.annotationStorage;
    for (const o of this._getElementsByName(t.name, t.id))
      o.domElement && (o.domElement[e] = n), s.setValue(o.id, {
        [i]: n
      });
  }
  render() {
    var i, s;
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let n = null;
    if (this.renderForms) {
      const o = t.getValue(e, {
        value: this.data.fieldValue
      });
      let l = o.value || "";
      const c = t.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      c && l.length > c && (l = l.slice(0, c));
      let d = o.formattedValue || ((i = this.data.textContent) == null ? void 0 : i.join(`
`)) || null;
      d && this.data.comb && (d = d.replaceAll(/\s+/g, ""));
      const h = {
        userValue: l,
        formattedValue: d,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (n = document.createElement("textarea"), n.textContent = d ?? l, this.data.doNotScroll && (n.style.overflowY = "hidden")) : (n = document.createElement("input"), n.type = "text", n.setAttribute("value", d ?? l), this.data.doNotScroll && (n.style.overflowX = "hidden")), this.data.hasOwnCanvas && (n.hidden = !0), Vr.add(n), n.setAttribute("data-element-id", e), n.disabled = this.data.readOnly, n.name = this.data.fieldName, n.tabIndex = Nh, this._setRequired(n, this.data.required), c && (n.maxLength = c), n.addEventListener("input", (g) => {
        t.setValue(e, {
          value: g.target.value
        }), this.setPropertyOnSiblings(n, "value", g.target.value, "value"), h.formattedValue = null;
      }), n.addEventListener("resetform", (g) => {
        const y = this.data.defaultFieldValue ?? "";
        n.value = h.userValue = y, h.formattedValue = null;
      });
      let f = (g) => {
        const {
          formattedValue: y
        } = h;
        y != null && (g.target.value = y), g.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        n.addEventListener("focus", (y) => {
          var _;
          if (h.focused)
            return;
          const {
            target: b
          } = y;
          h.userValue && (b.value = h.userValue), h.lastCommittedValue = b.value, h.commitKey = 1, (_ = this.data.actions) != null && _.Focus || (h.focused = !0);
        }), n.addEventListener("updatefromsandbox", (y) => {
          this.showElementAndHideCanvas(y.target);
          const b = {
            value(_) {
              h.userValue = _.detail.value ?? "", t.setValue(e, {
                value: h.userValue.toString()
              }), _.target.value = h.userValue;
            },
            formattedValue(_) {
              const {
                formattedValue: x
              } = _.detail;
              h.formattedValue = x, x != null && _.target !== document.activeElement && (_.target.value = x), t.setValue(e, {
                formattedValue: x
              });
            },
            selRange(_) {
              _.target.setSelectionRange(..._.detail.selRange);
            },
            charLimit: (_) => {
              var k;
              const {
                charLimit: x
              } = _.detail, {
                target: E
              } = _;
              if (x === 0) {
                E.removeAttribute("maxLength");
                return;
              }
              E.setAttribute("maxLength", x);
              let P = h.userValue;
              !P || P.length <= x || (P = P.slice(0, x), E.value = h.userValue = P, t.setValue(e, {
                value: P
              }), (k = this.linkService.eventBus) == null || k.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: P,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: E.selectionStart,
                  selEnd: E.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(b, y);
        }), n.addEventListener("keydown", (y) => {
          var x;
          h.commitKey = 1;
          let b = -1;
          if (y.key === "Escape" ? b = 0 : y.key === "Enter" && !this.data.multiLine ? b = 2 : y.key === "Tab" && (h.commitKey = 3), b === -1)
            return;
          const {
            value: _
          } = y.target;
          h.lastCommittedValue !== _ && (h.lastCommittedValue = _, h.userValue = _, (x = this.linkService.eventBus) == null || x.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: _,
              willCommit: !0,
              commitKey: b,
              selStart: y.target.selectionStart,
              selEnd: y.target.selectionEnd
            }
          }));
        });
        const g = f;
        f = null, n.addEventListener("blur", (y) => {
          var _, x;
          if (!h.focused || !y.relatedTarget)
            return;
          (_ = this.data.actions) != null && _.Blur || (h.focused = !1);
          const {
            value: b
          } = y.target;
          h.userValue = b, h.lastCommittedValue !== b && ((x = this.linkService.eventBus) == null || x.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: b,
              willCommit: !0,
              commitKey: h.commitKey,
              selStart: y.target.selectionStart,
              selEnd: y.target.selectionEnd
            }
          })), g(y);
        }), (s = this.data.actions) != null && s.Keystroke && n.addEventListener("beforeinput", (y) => {
          var F;
          h.lastCommittedValue = null;
          const {
            data: b,
            target: _
          } = y, {
            value: x,
            selectionStart: E,
            selectionEnd: P
          } = _;
          let k = E, L = P;
          switch (y.inputType) {
            case "deleteWordBackward": {
              const I = x.substring(0, E).match(/\w*[^\w]*$/);
              I && (k -= I[0].length);
              break;
            }
            case "deleteWordForward": {
              const I = x.substring(E).match(/^[^\w]*\w*/);
              I && (L += I[0].length);
              break;
            }
            case "deleteContentBackward":
              E === P && (k -= 1);
              break;
            case "deleteContentForward":
              E === P && (L += 1);
              break;
          }
          y.preventDefault(), (F = this.linkService.eventBus) == null || F.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: x,
              change: b || "",
              willCommit: !1,
              selStart: k,
              selEnd: L
            }
          });
        }), this._setEventListeners(n, h, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (y) => y.target.value);
      }
      if (f && n.addEventListener("blur", f), this.data.comb) {
        const y = (this.data.rect[2] - this.data.rect[0]) / c;
        n.classList.add("comb"), n.style.letterSpacing = `calc(${y}px * var(--scale-factor) - 1ch)`;
      }
    } else
      n = document.createElement("div"), n.textContent = this.data.fieldValue, n.style.verticalAlign = "middle", n.style.display = "table-cell", this.data.hasOwnCanvas && (n.hidden = !0);
    return this._setTextStyle(n), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class _S extends Yr {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class ES extends Yr {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, e = this.data, n = e.id;
    let i = t.getValue(n, {
      value: e.exportValue === e.fieldValue
    }).value;
    typeof i == "string" && (i = i !== "Off", t.setValue(n, {
      value: i
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const s = document.createElement("input");
    return Vr.add(s), s.setAttribute("data-element-id", n), s.disabled = e.readOnly, this._setRequired(s, this.data.required), s.type = "checkbox", s.name = e.fieldName, i && s.setAttribute("checked", !0), s.setAttribute("exportValue", e.exportValue), s.tabIndex = Nh, s.addEventListener("change", (o) => {
      const {
        name: l,
        checked: c
      } = o.target;
      for (const d of this._getElementsByName(l, n)) {
        const h = c && d.exportValue === e.exportValue;
        d.domElement && (d.domElement.checked = h), t.setValue(d.id, {
          value: h
        });
      }
      t.setValue(n, {
        value: c
      });
    }), s.addEventListener("resetform", (o) => {
      const l = e.defaultFieldValue || "Off";
      o.target.checked = l === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (s.addEventListener("updatefromsandbox", (o) => {
      const l = {
        value(c) {
          c.target.checked = c.detail.value !== "Off", t.setValue(n, {
            value: c.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(l, o);
    }), this._setEventListeners(s, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (o) => o.target.checked)), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class Qy extends Yr {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, n = e.id;
    let i = t.getValue(n, {
      value: e.fieldValue === e.buttonValue
    }).value;
    if (typeof i == "string" && (i = i !== e.buttonValue, t.setValue(n, {
      value: i
    })), i)
      for (const o of this._getElementsByName(e.fieldName, n))
        t.setValue(o.id, {
          value: !1
        });
    const s = document.createElement("input");
    if (Vr.add(s), s.setAttribute("data-element-id", n), s.disabled = e.readOnly, this._setRequired(s, this.data.required), s.type = "radio", s.name = e.fieldName, i && s.setAttribute("checked", !0), s.tabIndex = Nh, s.addEventListener("change", (o) => {
      const {
        name: l,
        checked: c
      } = o.target;
      for (const d of this._getElementsByName(l, n))
        t.setValue(d.id, {
          value: !1
        });
      t.setValue(n, {
        value: c
      });
    }), s.addEventListener("resetform", (o) => {
      const l = e.defaultFieldValue;
      o.target.checked = l != null && l === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const o = e.buttonValue;
      s.addEventListener("updatefromsandbox", (l) => {
        const c = {
          value: (d) => {
            const h = o === d.detail.value;
            for (const f of this._getElementsByName(d.target.name)) {
              const g = h && f.id === n;
              f.domElement && (f.domElement.checked = g), t.setValue(f.id, {
                value: g
              });
            }
          }
        };
        this._dispatchEventFromSandbox(c, l);
      }), this._setEventListeners(s, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (l) => l.target.checked);
    }
    return this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class SS extends Ky {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (n) => {
      this._dispatchEventFromSandbox({}, n);
    })), t;
  }
}
class xS extends Yr {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, n = t.getValue(e, {
      value: this.data.fieldValue
    }), i = document.createElement("select");
    Vr.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = Nh;
    let s = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (h) => {
      const f = this.data.defaultFieldValue;
      for (const g of i.options)
        g.selected = g.value === f;
    });
    for (const h of this.data.options) {
      const f = document.createElement("option");
      f.textContent = h.displayValue, f.value = h.exportValue, n.value.includes(h.exportValue) && (f.setAttribute("selected", !0), s = !1), i.append(f);
    }
    let o = null;
    if (s) {
      const h = document.createElement("option");
      h.value = " ", h.setAttribute("hidden", !0), h.setAttribute("selected", !0), i.prepend(h), o = () => {
        h.remove(), i.removeEventListener("input", o), o = null;
      }, i.addEventListener("input", o);
    }
    const l = (h) => {
      const f = h ? "value" : "textContent", {
        options: g,
        multiple: y
      } = i;
      return y ? Array.prototype.filter.call(g, (b) => b.selected).map((b) => b[f]) : g.selectedIndex === -1 ? null : g[g.selectedIndex][f];
    };
    let c = l(!1);
    const d = (h) => {
      const f = h.target.options;
      return Array.prototype.map.call(f, (g) => ({
        displayValue: g.textContent,
        exportValue: g.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (h) => {
      const f = {
        value(g) {
          o == null || o();
          const y = g.detail.value, b = new Set(Array.isArray(y) ? y : [y]);
          for (const _ of i.options)
            _.selected = b.has(_.value);
          t.setValue(e, {
            value: l(!0)
          }), c = l(!1);
        },
        multipleSelection(g) {
          i.multiple = !0;
        },
        remove(g) {
          const y = i.options, b = g.detail.remove;
          y[b].selected = !1, i.remove(b), y.length > 0 && Array.prototype.findIndex.call(y, (x) => x.selected) === -1 && (y[0].selected = !0), t.setValue(e, {
            value: l(!0),
            items: d(g)
          }), c = l(!1);
        },
        clear(g) {
          for (; i.length !== 0; )
            i.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), c = l(!1);
        },
        insert(g) {
          const {
            index: y,
            displayValue: b,
            exportValue: _
          } = g.detail.insert, x = i.children[y], E = document.createElement("option");
          E.textContent = b, E.value = _, x ? x.before(E) : i.append(E), t.setValue(e, {
            value: l(!0),
            items: d(g)
          }), c = l(!1);
        },
        items(g) {
          const {
            items: y
          } = g.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const b of y) {
            const {
              displayValue: _,
              exportValue: x
            } = b, E = document.createElement("option");
            E.textContent = _, E.value = x, i.append(E);
          }
          i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
            value: l(!0),
            items: d(g)
          }), c = l(!1);
        },
        indices(g) {
          const y = new Set(g.detail.indices);
          for (const b of g.target.options)
            b.selected = y.has(b.index);
          t.setValue(e, {
            value: l(!0)
          }), c = l(!1);
        },
        editable(g) {
          g.target.disabled = !g.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(f, h);
    }), i.addEventListener("input", (h) => {
      var y;
      const f = l(!0), g = l(!1);
      t.setValue(e, {
        value: f
      }), h.preventDefault(), (y = this.linkService.eventBus) == null || y.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: c,
          change: g,
          changeEx: f,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (h) => h.target.value)) : i.addEventListener("input", function(h) {
      t.setValue(e, {
        value: l(!0)
      });
    }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class cg extends Jt {
  constructor(t) {
    const {
      data: e,
      elements: n
    } = t;
    super(t, {
      isRenderable: Jt._hasPopupData(e)
    }), this.elements = n, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const t = this.popup = new CS({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    }), e = [];
    for (const n of this.elements)
      n.popup = t, e.push(n.data.id), n.addHighlightArea();
    return this.container.setAttribute("aria-controls", e.map((n) => `${iy}${n}`).join(",")), this.container;
  }
}
var Go, Tu, Pu, Vo, hr, Yt, Ai, dr, Sc, xc, Wo, _i, wn, Ei, Cc, Si, Tc, ur, fr, qo, ud, Pc, hg, Ru, tb, ku, eb, Lu, nb, Iu, ib, Xo, fd, Yo, pd, Rc, dg;
class CS {
  constructor({
    container: t,
    color: e,
    elements: n,
    titleObj: i,
    modificationDate: s,
    contentsObj: o,
    richText: l,
    parent: c,
    rect: d,
    parentRect: h,
    open: f
  }) {
    m(this, qo);
    m(this, Pc);
    m(this, Ru);
    m(this, ku);
    m(this, Lu);
    m(this, Iu);
    m(this, Xo);
    m(this, Yo);
    m(this, Rc);
    m(this, Go, A(this, Lu, nb).bind(this));
    m(this, Tu, A(this, Rc, dg).bind(this));
    m(this, Pu, A(this, Yo, pd).bind(this));
    m(this, Vo, A(this, Xo, fd).bind(this));
    m(this, hr, null);
    m(this, Yt, null);
    m(this, Ai, null);
    m(this, dr, null);
    m(this, Sc, null);
    m(this, xc, null);
    m(this, Wo, null);
    m(this, _i, !1);
    m(this, wn, null);
    m(this, Ei, null);
    m(this, Cc, null);
    m(this, Si, null);
    m(this, Tc, null);
    m(this, ur, null);
    m(this, fr, !1);
    var g;
    w(this, Yt, t), w(this, Tc, i), w(this, Ai, o), w(this, Si, l), w(this, xc, c), w(this, hr, e), w(this, Cc, d), w(this, Wo, h), w(this, Sc, n), w(this, dr, ly.toDateObject(s)), this.trigger = n.flatMap((y) => y.getElementsToTriggerPopup());
    for (const y of this.trigger)
      y.addEventListener("click", a(this, Vo)), y.addEventListener("mouseenter", a(this, Pu)), y.addEventListener("mouseleave", a(this, Tu)), y.classList.add("popupTriggerArea");
    for (const y of n)
      (g = y.container) == null || g.addEventListener("keydown", a(this, Go));
    a(this, Yt).hidden = !0, f && A(this, Xo, fd).call(this);
  }
  render() {
    if (a(this, wn))
      return;
    const t = w(this, wn, document.createElement("div"));
    if (t.className = "popup", a(this, hr)) {
      const s = t.style.outlineColor = Q.makeHexColor(...a(this, hr));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? t.style.backgroundColor = `color-mix(in srgb, ${s} 30%, white)` : t.style.backgroundColor = Q.makeHexColor(...a(this, hr).map((l) => Math.floor(0.7 * (255 - l) + l)));
    }
    const e = document.createElement("span");
    e.className = "header";
    const n = document.createElement("h1");
    if (e.append(n), {
      dir: n.dir,
      str: n.textContent
    } = a(this, Tc), t.append(e), a(this, dr)) {
      const s = document.createElement("span");
      s.classList.add("popupDate"), s.setAttribute("data-l10n-id", "pdfjs-annotation-date-string"), s.setAttribute("data-l10n-args", JSON.stringify({
        date: a(this, dr).toLocaleDateString(),
        time: a(this, dr).toLocaleTimeString()
      })), e.append(s);
    }
    const i = a(this, qo, ud);
    if (i)
      Yy.render({
        xfaHtml: i,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
    else {
      const s = this._formatContents(a(this, Ai));
      t.append(s);
    }
    a(this, Yt).append(t);
  }
  _formatContents({
    str: t,
    dir: e
  }) {
    const n = document.createElement("p");
    n.classList.add("popupContent"), n.dir = e;
    const i = t.split(/(?:\r\n?|\n)/);
    for (let s = 0, o = i.length; s < o; ++s) {
      const l = i[s];
      n.append(document.createTextNode(l)), s < o - 1 && n.append(document.createElement("br"));
    }
    return n;
  }
  updateEdited({
    rect: t,
    popupContent: e
  }) {
    var n;
    a(this, ur) || w(this, ur, {
      contentsObj: a(this, Ai),
      richText: a(this, Si)
    }), t && w(this, Ei, null), e && (w(this, Si, A(this, ku, eb).call(this, e)), w(this, Ai, null)), (n = a(this, wn)) == null || n.remove(), w(this, wn, null);
  }
  resetEdited() {
    var t;
    a(this, ur) && ({
      contentsObj: Ve(this, Ai)._,
      richText: Ve(this, Si)._
    } = a(this, ur), w(this, ur, null), (t = a(this, wn)) == null || t.remove(), w(this, wn, null), w(this, Ei, null));
  }
  forceHide() {
    w(this, fr, this.isVisible), a(this, fr) && (a(this, Yt).hidden = !0);
  }
  maybeShow() {
    a(this, fr) && (a(this, wn) || A(this, Yo, pd).call(this), w(this, fr, !1), a(this, Yt).hidden = !1);
  }
  get isVisible() {
    return a(this, Yt).hidden === !1;
  }
}
Go = new WeakMap(), Tu = new WeakMap(), Pu = new WeakMap(), Vo = new WeakMap(), hr = new WeakMap(), Yt = new WeakMap(), Ai = new WeakMap(), dr = new WeakMap(), Sc = new WeakMap(), xc = new WeakMap(), Wo = new WeakMap(), _i = new WeakMap(), wn = new WeakMap(), Ei = new WeakMap(), Cc = new WeakMap(), Si = new WeakMap(), Tc = new WeakMap(), ur = new WeakMap(), fr = new WeakMap(), qo = new WeakSet(), ud = function() {
  const t = a(this, Si), e = a(this, Ai);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && a(this, Si).html || null;
}, Pc = new WeakSet(), hg = function() {
  var t, e, n;
  return ((n = (e = (t = a(this, qo, ud)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : n.fontSize) || 0;
}, Ru = new WeakSet(), tb = function() {
  var t, e, n;
  return ((n = (e = (t = a(this, qo, ud)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : n.color) || null;
}, ku = new WeakSet(), eb = function(t) {
  const e = [], n = {
    str: t,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: e
      }]
    }
  }, i = {
    style: {
      color: a(this, Ru, tb),
      fontSize: a(this, Pc, hg) ? `calc(${a(this, Pc, hg)}px * var(--scale-factor))` : ""
    }
  };
  for (const s of t.split(`
`))
    e.push({
      name: "span",
      value: s,
      attributes: i
    });
  return n;
}, Lu = new WeakSet(), nb = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && a(this, _i)) && A(this, Xo, fd).call(this);
}, Iu = new WeakSet(), ib = function() {
  if (a(this, Ei) !== null)
    return;
  const {
    page: {
      view: t
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: n,
        pageX: i,
        pageY: s
      }
    }
  } = a(this, xc);
  let o = !!a(this, Wo), l = o ? a(this, Wo) : a(this, Cc);
  for (const b of a(this, Sc))
    if (!l || Q.intersect(b.data.rect, l) !== null) {
      l = b.data.rect, o = !0;
      break;
    }
  const c = Q.normalizeRect([l[0], t[3] - l[1] + t[1], l[2], t[3] - l[3] + t[1]]), h = o ? l[2] - l[0] + 5 : 0, f = c[0] + h, g = c[1];
  w(this, Ei, [100 * (f - i) / e, 100 * (g - s) / n]);
  const {
    style: y
  } = a(this, Yt);
  y.left = `${a(this, Ei)[0]}%`, y.top = `${a(this, Ei)[1]}%`;
}, Xo = new WeakSet(), fd = function() {
  w(this, _i, !a(this, _i)), a(this, _i) ? (A(this, Yo, pd).call(this), a(this, Yt).addEventListener("click", a(this, Vo)), a(this, Yt).addEventListener("keydown", a(this, Go))) : (A(this, Rc, dg).call(this), a(this, Yt).removeEventListener("click", a(this, Vo)), a(this, Yt).removeEventListener("keydown", a(this, Go)));
}, Yo = new WeakSet(), pd = function() {
  a(this, wn) || this.render(), this.isVisible ? a(this, _i) && a(this, Yt).classList.add("focused") : (A(this, Iu, ib).call(this), a(this, Yt).hidden = !1, a(this, Yt).style.zIndex = parseInt(a(this, Yt).style.zIndex) + 1e3);
}, Rc = new WeakSet(), dg = function() {
  a(this, Yt).classList.remove("focused"), !(a(this, _i) || !this.isVisible) && (a(this, Yt).hidden = !0, a(this, Yt).style.zIndex = parseInt(a(this, Yt).style.zIndex) - 1e3);
};
class sb extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = _t.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const n = document.createElement("span");
        n.textContent = e, t.append(n);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
  get _isEditable() {
    return this.data.hasOwnCanvas;
  }
}
var kc;
class TS extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, kc, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const e = this.data, {
      width: n,
      height: i
    } = Oi(e.rect), s = this.svgFactory.create(n, i, !0), o = w(this, kc, this.svgFactory.createElement("svg:line"));
    return o.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), o.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), o.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), o.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), o.setAttribute("stroke-width", e.borderStyle.width || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), s.append(o), this.container.append(s), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, kc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
kc = new WeakMap();
var Lc;
class PS extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Lc, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const e = this.data, {
      width: n,
      height: i
    } = Oi(e.rect), s = this.svgFactory.create(n, i, !0), o = e.borderStyle.width, l = w(this, Lc, this.svgFactory.createElement("svg:rect"));
    return l.setAttribute("x", o / 2), l.setAttribute("y", o / 2), l.setAttribute("width", n - o), l.setAttribute("height", i - o), l.setAttribute("stroke-width", o || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), s.append(l), this.container.append(s), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, Lc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Lc = new WeakMap();
var Ic;
class RS extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Ic, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const e = this.data, {
      width: n,
      height: i
    } = Oi(e.rect), s = this.svgFactory.create(n, i, !0), o = e.borderStyle.width, l = w(this, Ic, this.svgFactory.createElement("svg:ellipse"));
    return l.setAttribute("cx", n / 2), l.setAttribute("cy", i / 2), l.setAttribute("rx", n / 2 - o / 2), l.setAttribute("ry", i / 2 - o / 2), l.setAttribute("stroke-width", o || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), s.append(l), this.container.append(s), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, Ic);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Ic = new WeakMap();
var Fc;
class rb extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Fc, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const e = this.data, {
      width: n,
      height: i
    } = Oi(e.rect), s = this.svgFactory.create(n, i, !0);
    let o = [];
    for (const c of e.vertices) {
      const d = c.x - e.rect[0], h = e.rect[3] - c.y;
      o.push(d + "," + h);
    }
    o = o.join(" ");
    const l = w(this, Fc, this.svgFactory.createElement(this.svgElementName));
    return l.setAttribute("points", o), l.setAttribute("stroke-width", e.borderStyle.width || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), s.append(l), this.container.append(s), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, Fc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Fc = new WeakMap();
class kS extends rb {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class LS extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var Mc;
class ob extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Mc, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = _t.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const e = this.data, {
      width: n,
      height: i
    } = Oi(e.rect), s = this.svgFactory.create(n, i, !0);
    for (const o of e.inkLists) {
      let l = [];
      for (const d of o) {
        const h = d.x - e.rect[0], f = e.rect[3] - d.y;
        l.push(`${h},${f}`);
      }
      l = l.join(" ");
      const c = this.svgFactory.createElement(this.svgElementName);
      a(this, Mc).push(c), c.setAttribute("points", l), c.setAttribute("stroke-width", e.borderStyle.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), !e.popupRef && this.hasPopupData && this._createPopup(), s.append(c);
    }
    return this.container.append(s), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, Mc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Mc = new WeakMap();
class IS extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this.container;
  }
}
class FS extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
  }
}
class MS extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
  }
}
class DS extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
  }
}
class ab extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("stampAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var Dc, Nc, ug;
class NS extends Jt {
  constructor(e) {
    var i;
    super(e, {
      isRenderable: !0
    });
    m(this, Nc);
    m(this, Dc, null);
    const {
      file: n
    } = this.data;
    this.filename = n.filename, this.content = n.content, (i = this.linkService.eventBus) == null || i.dispatch("fileattachmentannotation", {
      source: this,
      ...n
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: e,
      data: n
    } = this;
    let i;
    n.hasAppearance || n.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(n.name) ? "paperclip" : "pushpin"}.svg`, n.fillAlpha && n.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(n.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", A(this, Nc, ug).bind(this)), w(this, Dc, i);
    const {
      isMac: s
    } = je.platform;
    return e.addEventListener("keydown", (o) => {
      o.key === "Enter" && (s ? o.metaKey : o.ctrlKey) && A(this, Nc, ug).call(this);
    }), !n.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return a(this, Dc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Dc = new WeakMap(), Nc = new WeakSet(), ug = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var Oc, pr, Ko, Fu, lb, Bc, fg, v0;
let OS = (v0 = class {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: n,
    annotationEditorUIManager: i,
    page: s,
    viewport: o
  }) {
    m(this, Fu);
    m(this, Bc);
    m(this, Oc, null);
    m(this, pr, null);
    m(this, Ko, /* @__PURE__ */ new Map());
    this.div = t, w(this, Oc, e), w(this, pr, n), this.page = s, this.viewport = o, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  async render(t) {
    var o;
    const {
      annotations: e
    } = t, n = this.div;
    jr(n, this.viewport);
    const i = /* @__PURE__ */ new Map(), s = {
      data: null,
      layer: n,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new sm(),
      annotationStorage: t.annotationStorage || new cm(),
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const l of e) {
      if (l.noHTML)
        continue;
      const c = l.annotationType === ne.POPUP;
      if (c) {
        const f = i.get(l.id);
        if (!f)
          continue;
        s.elements = f;
      } else {
        const {
          width: f,
          height: g
        } = Oi(l.rect);
        if (f <= 0 || g <= 0)
          continue;
      }
      s.data = l;
      const d = vS.create(s);
      if (!d.isRenderable)
        continue;
      if (!c && l.popupRef) {
        const f = i.get(l.popupRef);
        f ? f.push(d) : i.set(l.popupRef, [d]);
      }
      const h = d.render();
      l.hidden && (h.style.visibility = "hidden"), A(this, Fu, lb).call(this, h, l.id), d.annotationEditorType > 0 && (a(this, Ko).set(d.data.id, d), (o = this._annotationEditorUIManager) == null || o.renderAnnotationElement(d));
    }
    A(this, Bc, fg).call(this);
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, jr(e, {
      rotation: t.rotation
    }), A(this, Bc, fg).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(a(this, Ko).values());
  }
  getEditableAnnotation(t) {
    return a(this, Ko).get(t);
  }
}, Oc = new WeakMap(), pr = new WeakMap(), Ko = new WeakMap(), Fu = new WeakSet(), lb = function(t, e) {
  var i;
  const n = t.firstChild || t;
  n.id = `${iy}${e}`, this.div.append(t), (i = a(this, Oc)) == null || i.moveElementInDOM(this.div, t, n, !1);
}, Bc = new WeakSet(), fg = function() {
  if (!a(this, pr))
    return;
  const t = this.div;
  for (const [e, n] of a(this, pr)) {
    const i = t.querySelector(`[data-annotation-id="${e}"]`);
    if (!i)
      continue;
    n.className = "annotationContent";
    const {
      firstChild: s
    } = i;
    s ? s.nodeName === "CANVAS" ? s.replaceWith(n) : s.classList.contains("annotationContent") ? s.after(n) : s.before(n) : i.append(n);
  }
  a(this, pr).clear();
}, v0);
const Xh = /\r\n?|\n/g;
var $c, Hc, Uc, zc, jc, An, Ye, Gc, Ke, Zo, Mu, cb, Du, hb, Nu, db, Jo, gd, Qo, md, ta, yd, Ou, ub, Vc, gg, Bu, fb;
const Bt = class Bt extends It {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    m(this, Mu);
    m(this, Du);
    m(this, Nu);
    m(this, Jo);
    m(this, ta);
    m(this, Ou);
    m(this, Bu);
    m(this, $c, this.editorDivBlur.bind(this));
    m(this, Hc, this.editorDivFocus.bind(this));
    m(this, Uc, this.editorDivInput.bind(this));
    m(this, zc, this.editorDivKeydown.bind(this));
    m(this, jc, this.editorDivPaste.bind(this));
    m(this, An, void 0);
    m(this, Ye, "");
    m(this, Gc, `${this.id}-editor`);
    m(this, Ke, void 0);
    m(this, Zo, null);
    w(this, An, e.color || Bt._defaultColor || It._defaultLineColor), w(this, Ke, e.fontSize || Bt._defaultFontSize);
  }
  static get _keyboardManager() {
    const e = Bt.prototype, n = (o) => o.isEmpty(), i = Gr.TRANSLATE_SMALL, s = Gr.TRANSLATE_BIG;
    return xt(this, "_keyboardManager", new Mh([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
      args: [-i, 0],
      checker: n
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-s, 0],
      checker: n
    }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
      args: [i, 0],
      checker: n
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [s, 0],
      checker: n
    }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
      args: [0, -i],
      checker: n
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -s],
      checker: n
    }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
      args: [0, i],
      checker: n
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, s],
      checker: n
    }]]));
  }
  static initialize(e, n) {
    It.initialize(e, n, {
      strings: ["pdfjs-free-text-default-content"]
    });
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, n) {
    switch (e) {
      case at.FREETEXT_SIZE:
        Bt._defaultFontSize = n;
        break;
      case at.FREETEXT_COLOR:
        Bt._defaultColor = n;
        break;
    }
  }
  updateParams(e, n) {
    switch (e) {
      case at.FREETEXT_SIZE:
        A(this, Mu, cb).call(this, n);
        break;
      case at.FREETEXT_COLOR:
        A(this, Du, hb).call(this, n);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[at.FREETEXT_SIZE, Bt._defaultFontSize], [at.FREETEXT_COLOR, Bt._defaultColor || It._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[at.FREETEXT_SIZE, a(this, Ke)], [at.FREETEXT_COLOR, a(this, An)]];
  }
  _translateEmpty(e, n) {
    this._uiManager.translateSelectedEditors(e, n, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-Bt._internalPadding * e, -(Bt._internalPadding + a(this, Ke)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    this.isInEditMode() || (this.parent.setEditingState(!1), this.parent.updateToolbar(_t.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", a(this, zc)), this.editorDiv.addEventListener("focus", a(this, Hc)), this.editorDiv.addEventListener("blur", a(this, $c)), this.editorDiv.addEventListener("input", a(this, Uc)), this.editorDiv.addEventListener("paste", a(this, jc)));
  }
  disableEditMode() {
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", a(this, Gc)), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", a(this, zc)), this.editorDiv.removeEventListener("focus", a(this, Hc)), this.editorDiv.removeEventListener("blur", a(this, $c)), this.editorDiv.removeEventListener("input", a(this, Uc)), this.editorDiv.removeEventListener("paste", a(this, jc)), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"));
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded() {
    var e;
    this.width || (this.enableEditMode(), this.editorDiv.focus(), (e = this._initialOptions) != null && e.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const e = a(this, Ye), n = w(this, Ye, A(this, Nu, db).call(this).trimEnd());
    if (e === n)
      return;
    const i = (s) => {
      if (w(this, Ye, s), !s) {
        this.remove();
        return;
      }
      A(this, ta, yd).call(this), this._uiManager.rebuild(this), A(this, Jo, gd).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(n);
      },
      undo: () => {
        i(e);
      },
      mustExec: !1
    }), A(this, Jo, gd).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  dblclick(e) {
    this.enterInEditMode();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    Bt._keyboardManager.exec(this, e);
  }
  editorDivFocus(e) {
    this.isEditing = !0;
  }
  editorDivBlur(e) {
    this.isEditing = !1;
  }
  editorDivInput(e) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  render() {
    if (this.div)
      return this.div;
    let e, n;
    this.width && (e = this.x, n = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", a(this, Gc)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text"), this.enableEditing(), It._l10nPromise.get("pdfjs-free-text-default-content").then((s) => {
      var o;
      return (o = this.editorDiv) == null ? void 0 : o.setAttribute("default-content", s);
    }), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${a(this, Ke)}px * var(--scale-factor))`, i.color = a(this, An), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), kd(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [s, o] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: l
        } = a(this, Zo);
        let [c, d] = this.getInitialTranslation();
        [c, d] = this.pageTranslationToScreen(c, d);
        const [h, f] = this.pageDimensions, [g, y] = this.pageTranslation;
        let b, _;
        switch (this.rotation) {
          case 0:
            b = e + (l[0] - g) / h, _ = n + this.height - (l[1] - y) / f;
            break;
          case 90:
            b = e + (l[0] - g) / h, _ = n - (l[1] - y) / f, [c, d] = [d, -c];
            break;
          case 180:
            b = e - this.width + (l[0] - g) / h, _ = n - (l[1] - y) / f, [c, d] = [-c, -d];
            break;
          case 270:
            b = e + (l[0] - g - this.height * f) / h, _ = n + (l[1] - y - this.width * h) / f, [c, d] = [-d, c];
            break;
        }
        this.setAt(b * s, _ * o, c, d);
      } else
        this.setAt(e * s, n * o, this.width * s, this.height * o);
      A(this, ta, yd).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var b, _, x;
    const n = e.clipboardData || window.clipboardData, {
      types: i
    } = n;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    e.preventDefault();
    const s = A(b = Bt, Vc, gg).call(b, n.getData("text") || "").replaceAll(Xh, `
`);
    if (!s)
      return;
    const o = window.getSelection();
    if (!o.rangeCount)
      return;
    this.editorDiv.normalize(), o.deleteFromDocument();
    const l = o.getRangeAt(0);
    if (!s.includes(`
`)) {
      l.insertNode(document.createTextNode(s)), this.editorDiv.normalize(), o.collapseToStart();
      return;
    }
    const {
      startContainer: c,
      startOffset: d
    } = l, h = [], f = [];
    if (c.nodeType === Node.TEXT_NODE) {
      const E = c.parentElement;
      if (f.push(c.nodeValue.slice(d).replaceAll(Xh, "")), E !== this.editorDiv) {
        let P = h;
        for (const k of this.editorDiv.childNodes) {
          if (k === E) {
            P = f;
            continue;
          }
          P.push(A(_ = Bt, Qo, md).call(_, k));
        }
      }
      h.push(c.nodeValue.slice(0, d).replaceAll(Xh, ""));
    } else if (c === this.editorDiv) {
      let E = h, P = 0;
      for (const k of this.editorDiv.childNodes)
        P++ === d && (E = f), E.push(A(x = Bt, Qo, md).call(x, k));
    }
    w(this, Ye, `${h.join(`
`)}${s}${f.join(`
`)}`), A(this, ta, yd).call(this);
    const g = new Range();
    let y = h.reduce((E, P) => E + P.length, 0);
    for (const {
      firstChild: E
    } of this.editorDiv.childNodes)
      if (E.nodeType === Node.TEXT_NODE) {
        const P = E.nodeValue.length;
        if (y <= P) {
          g.setStart(E, y), g.setEnd(E, y);
          break;
        }
        y -= P;
      }
    o.removeAllRanges(), o.addRange(g);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static deserialize(e, n, i) {
    var l;
    let s = null;
    if (e instanceof sb) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: c,
            fontColor: d
          },
          rect: h,
          rotation: f,
          id: g
        },
        textContent: y,
        textPosition: b,
        parent: {
          page: {
            pageNumber: _
          }
        }
      } = e;
      if (!y || y.length === 0)
        return null;
      s = e = {
        annotationType: _t.FREETEXT,
        color: Array.from(d),
        fontSize: c,
        value: y.join(`
`),
        position: b,
        pageIndex: _ - 1,
        rect: h.slice(0),
        rotation: f,
        id: g,
        deleted: !1
      };
    }
    const o = super.deserialize(e, n, i);
    return w(o, Ke, e.fontSize), w(o, An, Q.makeHexColor(...e.color)), w(o, Ye, A(l = Bt, Vc, gg).call(l, e.value)), o.annotationElementId = e.id || null, w(o, Zo, s), o;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return {
        pageIndex: this.pageIndex,
        id: this.annotationElementId,
        deleted: !0
      };
    const n = Bt._internalPadding * this.parentScale, i = this.getRect(n, n), s = It._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : a(this, An)), o = {
      annotationType: _t.FREETEXT,
      color: s,
      fontSize: a(this, Ke),
      value: A(this, Ou, ub).call(this),
      pageIndex: this.pageIndex,
      rect: i,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? o : this.annotationElementId && !A(this, Bu, fb).call(this, o) ? null : (o.id = this.annotationElementId, o);
  }
  renderAnnotationElement(e) {
    const n = super.renderAnnotationElement(e);
    if (this.deleted)
      return n;
    const {
      style: i
    } = n;
    i.fontSize = `calc(${a(this, Ke)}px * var(--scale-factor))`, i.color = a(this, An), n.replaceChildren();
    for (const o of a(this, Ye).split(`
`)) {
      const l = document.createElement("div");
      l.append(o ? document.createTextNode(o) : document.createElement("br")), n.append(l);
    }
    const s = Bt._internalPadding * this.parentScale;
    return e.updateEdited({
      rect: this.getRect(s, s),
      popupContent: a(this, Ye)
    }), n;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
$c = new WeakMap(), Hc = new WeakMap(), Uc = new WeakMap(), zc = new WeakMap(), jc = new WeakMap(), An = new WeakMap(), Ye = new WeakMap(), Gc = new WeakMap(), Ke = new WeakMap(), Zo = new WeakMap(), Mu = new WeakSet(), cb = function(e) {
  const n = (s) => {
    this.editorDiv.style.fontSize = `calc(${s}px * var(--scale-factor))`, this.translate(0, -(s - a(this, Ke)) * this.parentScale), w(this, Ke, s), A(this, Jo, gd).call(this);
  }, i = a(this, Ke);
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Du = new WeakSet(), hb = function(e) {
  const n = (s) => {
    w(this, An, this.editorDiv.style.color = s);
  }, i = a(this, An);
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Nu = new WeakSet(), db = function() {
  var n;
  const e = [];
  this.editorDiv.normalize();
  for (const i of this.editorDiv.childNodes)
    e.push(A(n = Bt, Qo, md).call(n, i));
  return e.join(`
`);
}, Jo = new WeakSet(), gd = function() {
  const [e, n] = this.parentDimensions;
  let i;
  if (this.isAttachedToDOM)
    i = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: s,
      div: o
    } = this, l = o.style.display, c = o.classList.contains("hidden");
    o.classList.remove("hidden"), o.style.display = "hidden", s.div.append(this.div), i = o.getBoundingClientRect(), o.remove(), o.style.display = l, o.classList.toggle("hidden", c);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / e, this.height = i.height / n) : (this.width = i.height / e, this.height = i.width / n), this.fixAndSetPosition();
}, Qo = new WeakSet(), md = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Xh, "");
}, ta = new WeakSet(), yd = function() {
  if (this.editorDiv.replaceChildren(), !!a(this, Ye))
    for (const e of a(this, Ye).split(`
`)) {
      const n = document.createElement("div");
      n.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(n);
    }
}, Ou = new WeakSet(), ub = function() {
  return a(this, Ye).replaceAll(" ", " ");
}, Vc = new WeakSet(), gg = function(e) {
  return e.replaceAll(" ", " ");
}, Bu = new WeakSet(), fb = function(e) {
  const {
    value: n,
    fontSize: i,
    color: s,
    pageIndex: o
  } = a(this, Zo);
  return this._hasBeenMoved || e.value !== n || e.fontSize !== i || e.color.some((l, c) => l !== s[c]) || e.pageIndex !== o;
}, m(Bt, Qo), m(Bt, Vc), ht(Bt, "_freeTextDefaultContent", ""), ht(Bt, "_internalPadding", 0), ht(Bt, "_defaultColor", null), ht(Bt, "_defaultFontSize", 10), ht(Bt, "_type", "freetext"), ht(Bt, "_editorType", _t.FREETEXT);
let pg = Bt;
var Wc, as, _n, $u, pb, ea, bd, Hu, gb, Uu, mb, qc, yg;
class mg {
  constructor(t, e = 0, n = 0, i = !0) {
    m(this, $u);
    m(this, ea);
    m(this, Hu);
    m(this, Uu);
    m(this, qc);
    m(this, Wc, void 0);
    m(this, as, []);
    m(this, _n, []);
    let s = 1 / 0, o = -1 / 0, l = 1 / 0, c = -1 / 0;
    const h = 10 ** -4;
    for (const {
      x: E,
      y: P,
      width: k,
      height: L
    } of t) {
      const F = Math.floor((E - e) / h) * h, I = Math.ceil((E + k + e) / h) * h, M = Math.floor((P - e) / h) * h, C = Math.ceil((P + L + e) / h) * h, T = [F, M, C, !0], N = [I, M, C, !1];
      a(this, as).push(T, N), s = Math.min(s, F), o = Math.max(o, I), l = Math.min(l, M), c = Math.max(c, C);
    }
    const f = o - s + 2 * n, g = c - l + 2 * n, y = s - n, b = l - n, _ = a(this, as).at(i ? -1 : -2), x = [_[0], _[2]];
    for (const E of a(this, as)) {
      const [P, k, L] = E;
      E[0] = (P - y) / f, E[1] = (k - b) / g, E[2] = (L - b) / g;
    }
    w(this, Wc, {
      x: y,
      y: b,
      width: f,
      height: g,
      lastPoint: x
    });
  }
  getOutlines() {
    a(this, as).sort((e, n) => e[0] - n[0] || e[1] - n[1] || e[2] - n[2]);
    const t = [];
    for (const e of a(this, as))
      e[3] ? (t.push(...A(this, qc, yg).call(this, e)), A(this, Hu, gb).call(this, e)) : (A(this, Uu, mb).call(this, e), t.push(...A(this, qc, yg).call(this, e)));
    return A(this, $u, pb).call(this, t);
  }
}
Wc = new WeakMap(), as = new WeakMap(), _n = new WeakMap(), $u = new WeakSet(), pb = function(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  for (const o of t) {
    const [l, c, d] = o;
    e.push([l, c, o], [l, d, o]);
  }
  e.sort((o, l) => o[1] - l[1] || o[0] - l[0]);
  for (let o = 0, l = e.length; o < l; o += 2) {
    const c = e[o][2], d = e[o + 1][2];
    c.push(d), d.push(c), n.add(c), n.add(d);
  }
  const i = [];
  let s;
  for (; n.size > 0; ) {
    const o = n.values().next().value;
    let [l, c, d, h, f] = o;
    n.delete(o);
    let g = l, y = c;
    for (s = [l, d], i.push(s); ; ) {
      let b;
      if (n.has(h))
        b = h;
      else if (n.has(f))
        b = f;
      else
        break;
      n.delete(b), [l, c, d, h, f] = b, g !== l && (s.push(g, y, l, y === c ? c : d), g = l), y = y === c ? d : c;
    }
    s.push(g, y);
  }
  return new BS(i, a(this, Wc));
}, ea = new WeakSet(), bd = function(t) {
  const e = a(this, _n);
  let n = 0, i = e.length - 1;
  for (; n <= i; ) {
    const s = n + i >> 1, o = e[s][0];
    if (o === t)
      return s;
    o < t ? n = s + 1 : i = s - 1;
  }
  return i + 1;
}, Hu = new WeakSet(), gb = function([, t, e]) {
  const n = A(this, ea, bd).call(this, t);
  a(this, _n).splice(n, 0, [t, e]);
}, Uu = new WeakSet(), mb = function([, t, e]) {
  const n = A(this, ea, bd).call(this, t);
  for (let i = n; i < a(this, _n).length; i++) {
    const [s, o] = a(this, _n)[i];
    if (s !== t)
      break;
    if (s === t && o === e) {
      a(this, _n).splice(i, 1);
      return;
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    const [s, o] = a(this, _n)[i];
    if (s !== t)
      break;
    if (s === t && o === e) {
      a(this, _n).splice(i, 1);
      return;
    }
  }
}, qc = new WeakSet(), yg = function(t) {
  const [e, n, i] = t, s = [[e, n, i]], o = A(this, ea, bd).call(this, i);
  for (let l = 0; l < o; l++) {
    const [c, d] = a(this, _n)[l];
    for (let h = 0, f = s.length; h < f; h++) {
      const [, g, y] = s[h];
      if (!(d <= g || y <= c)) {
        if (g >= c) {
          if (y > d)
            s[h][1] = d;
          else {
            if (f === 1)
              return [];
            s.splice(h, 1), h--, f--;
          }
          continue;
        }
        s[h][2] = c, y > d && s.push([e, d, y]);
      }
    }
  }
  return s;
};
class yb {
  toSVGPath() {
    throw new Error("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    throw new Error("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    throw new Error("Abstract method `serialize` must be implemented.");
  }
  get free() {
    return this instanceof vg;
  }
}
var Xc, na;
class BS extends yb {
  constructor(e, n) {
    super();
    m(this, Xc, void 0);
    m(this, na, void 0);
    w(this, na, e), w(this, Xc, n);
  }
  toSVGPath() {
    const e = [];
    for (const n of a(this, na)) {
      let [i, s] = n;
      e.push(`M${i} ${s}`);
      for (let o = 2; o < n.length; o += 2) {
        const l = n[o], c = n[o + 1];
        l === i ? (e.push(`V${c}`), s = c) : c === s && (e.push(`H${l}`), i = l);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, n, i, s], o) {
    const l = [], c = i - e, d = s - n;
    for (const h of a(this, na)) {
      const f = new Array(h.length);
      for (let g = 0; g < h.length; g += 2)
        f[g] = e + h[g] * c, f[g + 1] = s - h[g + 1] * d;
      l.push(f);
    }
    return l;
  }
  get box() {
    return a(this, Xc);
  }
}
Xc = new WeakMap(), na = new WeakMap();
var Un, xi, ia, sa, zn, At, gr, mr, Yc, Kc, ra, oa, ls, Zc, zu, ju, Jc, bg;
const si = class si {
  constructor({
    x: t,
    y: e
  }, n, i, s, o, l = 0) {
    m(this, Jc);
    m(this, Un, void 0);
    m(this, xi, []);
    m(this, ia, void 0);
    m(this, sa, void 0);
    m(this, zn, []);
    m(this, At, new Float64Array(18));
    m(this, gr, void 0);
    m(this, mr, void 0);
    m(this, Yc, void 0);
    m(this, Kc, void 0);
    m(this, ra, void 0);
    m(this, oa, void 0);
    m(this, ls, []);
    w(this, Un, n), w(this, oa, s * i), w(this, sa, o), a(this, At).set([NaN, NaN, NaN, NaN, t, e], 6), w(this, ia, l), w(this, Kc, a(si, Zc) * i), w(this, Yc, a(si, ju) * i), w(this, ra, i), a(this, ls).push(t, e);
  }
  get free() {
    return !0;
  }
  isEmpty() {
    return isNaN(a(this, At)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var T;
    w(this, gr, t), w(this, mr, e);
    const [n, i, s, o] = a(this, Un);
    let [l, c, d, h] = a(this, At).subarray(8, 12);
    const f = t - d, g = e - h, y = Math.hypot(f, g);
    if (y < a(this, Yc))
      return !1;
    const b = y - a(this, Kc), _ = b / y, x = _ * f, E = _ * g;
    let P = l, k = c;
    l = d, c = h, d += x, h += E, (T = a(this, ls)) == null || T.push(t, e);
    const L = -E / b, F = x / b, I = L * a(this, oa), M = F * a(this, oa);
    return a(this, At).set(a(this, At).subarray(2, 8), 0), a(this, At).set([d + I, h + M], 4), a(this, At).set(a(this, At).subarray(14, 18), 12), a(this, At).set([d - I, h - M], 16), isNaN(a(this, At)[6]) ? (a(this, zn).length === 0 && (a(this, At).set([l + I, c + M], 2), a(this, zn).push(NaN, NaN, NaN, NaN, (l + I - n) / s, (c + M - i) / o), a(this, At).set([l - I, c - M], 14), a(this, xi).push(NaN, NaN, NaN, NaN, (l - I - n) / s, (c - M - i) / o)), a(this, At).set([P, k, l, c, d, h], 6), !this.isEmpty()) : (a(this, At).set([P, k, l, c, d, h], 6), Math.abs(Math.atan2(k - c, P - l) - Math.atan2(E, x)) < Math.PI / 2 ? ([l, c, d, h] = a(this, At).subarray(2, 6), a(this, zn).push(NaN, NaN, NaN, NaN, ((l + d) / 2 - n) / s, ((c + h) / 2 - i) / o), [l, c, P, k] = a(this, At).subarray(14, 18), a(this, xi).push(NaN, NaN, NaN, NaN, ((P + l) / 2 - n) / s, ((k + c) / 2 - i) / o), !0) : ([P, k, l, c, d, h] = a(this, At).subarray(0, 6), a(this, zn).push(((P + 5 * l) / 6 - n) / s, ((k + 5 * c) / 6 - i) / o, ((5 * l + d) / 6 - n) / s, ((5 * c + h) / 6 - i) / o, ((l + d) / 2 - n) / s, ((c + h) / 2 - i) / o), [d, h, l, c, P, k] = a(this, At).subarray(12, 18), a(this, xi).push(((P + 5 * l) / 6 - n) / s, ((k + 5 * c) / 6 - i) / o, ((5 * l + d) / 6 - n) / s, ((5 * c + h) / 6 - i) / o, ((l + d) / 2 - n) / s, ((c + h) / 2 - i) / o), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = a(this, zn), e = a(this, xi), n = a(this, At).subarray(4, 6), i = a(this, At).subarray(16, 18), [s, o, l, c] = a(this, Un), [d, h, f, g] = A(this, Jc, bg).call(this);
    if (isNaN(a(this, At)[6]) && !this.isEmpty())
      return `M${(a(this, At)[2] - s) / l} ${(a(this, At)[3] - o) / c} L${(a(this, At)[4] - s) / l} ${(a(this, At)[5] - o) / c} L${d} ${h} L${f} ${g} L${(a(this, At)[16] - s) / l} ${(a(this, At)[17] - o) / c} L${(a(this, At)[14] - s) / l} ${(a(this, At)[15] - o) / c} Z`;
    const y = [];
    y.push(`M${t[4]} ${t[5]}`);
    for (let b = 6; b < t.length; b += 6)
      isNaN(t[b]) ? y.push(`L${t[b + 4]} ${t[b + 5]}`) : y.push(`C${t[b]} ${t[b + 1]} ${t[b + 2]} ${t[b + 3]} ${t[b + 4]} ${t[b + 5]}`);
    y.push(`L${(n[0] - s) / l} ${(n[1] - o) / c} L${d} ${h} L${f} ${g} L${(i[0] - s) / l} ${(i[1] - o) / c}`);
    for (let b = e.length - 6; b >= 6; b -= 6)
      isNaN(e[b]) ? y.push(`L${e[b + 4]} ${e[b + 5]}`) : y.push(`C${e[b]} ${e[b + 1]} ${e[b + 2]} ${e[b + 3]} ${e[b + 4]} ${e[b + 5]}`);
    return y.push(`L${e[4]} ${e[5]} Z`), y.join(" ");
  }
  getOutlines() {
    var E;
    const t = a(this, zn), e = a(this, xi), n = a(this, At), i = n.subarray(4, 6), s = n.subarray(16, 18), [o, l, c, d] = a(this, Un), h = new Float64Array((((E = a(this, ls)) == null ? void 0 : E.length) ?? 0) + 2);
    for (let P = 0, k = h.length - 2; P < k; P += 2)
      h[P] = (a(this, ls)[P] - o) / c, h[P + 1] = (a(this, ls)[P + 1] - l) / d;
    h[h.length - 2] = (a(this, gr) - o) / c, h[h.length - 1] = (a(this, mr) - l) / d;
    const [f, g, y, b] = A(this, Jc, bg).call(this);
    if (isNaN(n[6]) && !this.isEmpty()) {
      const P = new Float64Array(36);
      return P.set([NaN, NaN, NaN, NaN, (n[2] - o) / c, (n[3] - l) / d, NaN, NaN, NaN, NaN, (n[4] - o) / c, (n[5] - l) / d, NaN, NaN, NaN, NaN, f, g, NaN, NaN, NaN, NaN, y, b, NaN, NaN, NaN, NaN, (n[16] - o) / c, (n[17] - l) / d, NaN, NaN, NaN, NaN, (n[14] - o) / c, (n[15] - l) / d], 0), new vg(P, h, a(this, Un), a(this, ra), a(this, ia), a(this, sa));
    }
    const _ = new Float64Array(a(this, zn).length + 24 + a(this, xi).length);
    let x = t.length;
    for (let P = 0; P < x; P += 2) {
      if (isNaN(t[P])) {
        _[P] = _[P + 1] = NaN;
        continue;
      }
      _[P] = t[P], _[P + 1] = t[P + 1];
    }
    _.set([NaN, NaN, NaN, NaN, (i[0] - o) / c, (i[1] - l) / d, NaN, NaN, NaN, NaN, f, g, NaN, NaN, NaN, NaN, y, b, NaN, NaN, NaN, NaN, (s[0] - o) / c, (s[1] - l) / d], x), x += 24;
    for (let P = e.length - 6; P >= 6; P -= 6)
      for (let k = 0; k < 6; k += 2) {
        if (isNaN(e[P + k])) {
          _[x] = _[x + 1] = NaN, x += 2;
          continue;
        }
        _[x] = e[P + k], _[x + 1] = e[P + k + 1], x += 2;
      }
    return _.set([NaN, NaN, NaN, NaN, e[4], e[5]], x), new vg(_, h, a(this, Un), a(this, ra), a(this, ia), a(this, sa));
  }
};
Un = new WeakMap(), xi = new WeakMap(), ia = new WeakMap(), sa = new WeakMap(), zn = new WeakMap(), At = new WeakMap(), gr = new WeakMap(), mr = new WeakMap(), Yc = new WeakMap(), Kc = new WeakMap(), ra = new WeakMap(), oa = new WeakMap(), ls = new WeakMap(), Zc = new WeakMap(), zu = new WeakMap(), ju = new WeakMap(), Jc = new WeakSet(), bg = function() {
  const t = a(this, At).subarray(4, 6), e = a(this, At).subarray(16, 18), [n, i, s, o] = a(this, Un);
  return [(a(this, gr) + (t[0] - e[0]) / 2 - n) / s, (a(this, mr) + (t[1] - e[1]) / 2 - i) / o, (a(this, gr) + (e[0] - t[0]) / 2 - n) / s, (a(this, mr) + (e[1] - t[1]) / 2 - i) / o];
}, m(si, Zc, 8), m(si, zu, 2), m(si, ju, a(si, Zc) + a(si, zu));
let Md = si;
var aa, yr, Ci, Qc, Ze, th, Zt, br, Za, vr, Ja, Gu, bb;
class vg extends yb {
  constructor(e, n, i, s, o, l) {
    super();
    m(this, br);
    m(this, vr);
    m(this, Gu);
    m(this, aa, void 0);
    m(this, yr, null);
    m(this, Ci, void 0);
    m(this, Qc, void 0);
    m(this, Ze, void 0);
    m(this, th, void 0);
    m(this, Zt, void 0);
    w(this, Zt, e), w(this, Ze, n), w(this, aa, i), w(this, th, s), w(this, Ci, o), w(this, Qc, l), A(this, Gu, bb).call(this, l);
    const {
      x: c,
      y: d,
      width: h,
      height: f
    } = a(this, yr);
    for (let g = 0, y = e.length; g < y; g += 2)
      e[g] = (e[g] - c) / h, e[g + 1] = (e[g + 1] - d) / f;
    for (let g = 0, y = n.length; g < y; g += 2)
      n[g] = (n[g] - c) / h, n[g + 1] = (n[g + 1] - d) / f;
  }
  toSVGPath() {
    const e = [`M${a(this, Zt)[4]} ${a(this, Zt)[5]}`];
    for (let n = 6, i = a(this, Zt).length; n < i; n += 6) {
      if (isNaN(a(this, Zt)[n])) {
        e.push(`L${a(this, Zt)[n + 4]} ${a(this, Zt)[n + 5]}`);
        continue;
      }
      e.push(`C${a(this, Zt)[n]} ${a(this, Zt)[n + 1]} ${a(this, Zt)[n + 2]} ${a(this, Zt)[n + 3]} ${a(this, Zt)[n + 4]} ${a(this, Zt)[n + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, n, i, s], o) {
    const l = i - e, c = s - n;
    let d, h;
    switch (o) {
      case 0:
        d = A(this, br, Za).call(this, a(this, Zt), e, s, l, -c), h = A(this, br, Za).call(this, a(this, Ze), e, s, l, -c);
        break;
      case 90:
        d = A(this, vr, Ja).call(this, a(this, Zt), e, n, l, c), h = A(this, vr, Ja).call(this, a(this, Ze), e, n, l, c);
        break;
      case 180:
        d = A(this, br, Za).call(this, a(this, Zt), i, n, -l, c), h = A(this, br, Za).call(this, a(this, Ze), i, n, -l, c);
        break;
      case 270:
        d = A(this, vr, Ja).call(this, a(this, Zt), i, s, -l, -c), h = A(this, vr, Ja).call(this, a(this, Ze), i, s, -l, -c);
        break;
    }
    return {
      outline: Array.from(d),
      points: [Array.from(h)]
    };
  }
  get box() {
    return a(this, yr);
  }
  getNewOutline(e, n) {
    const {
      x: i,
      y: s,
      width: o,
      height: l
    } = a(this, yr), [c, d, h, f] = a(this, aa), g = o * h, y = l * f, b = i * h + c, _ = s * f + d, x = new Md({
      x: a(this, Ze)[0] * g + b,
      y: a(this, Ze)[1] * y + _
    }, a(this, aa), a(this, th), e, a(this, Qc), n ?? a(this, Ci));
    for (let E = 2; E < a(this, Ze).length; E += 2)
      x.add({
        x: a(this, Ze)[E] * g + b,
        y: a(this, Ze)[E + 1] * y + _
      });
    return x.getOutlines();
  }
}
aa = new WeakMap(), yr = new WeakMap(), Ci = new WeakMap(), Qc = new WeakMap(), Ze = new WeakMap(), th = new WeakMap(), Zt = new WeakMap(), br = new WeakSet(), Za = function(e, n, i, s, o) {
  const l = new Float64Array(e.length);
  for (let c = 0, d = e.length; c < d; c += 2)
    l[c] = n + e[c] * s, l[c + 1] = i + e[c + 1] * o;
  return l;
}, vr = new WeakSet(), Ja = function(e, n, i, s, o) {
  const l = new Float64Array(e.length);
  for (let c = 0, d = e.length; c < d; c += 2)
    l[c] = n + e[c + 1] * s, l[c + 1] = i + e[c] * o;
  return l;
}, Gu = new WeakSet(), bb = function(e) {
  const n = a(this, Zt);
  let i = n[4], s = n[5], o = i, l = s, c = i, d = s, h = i, f = s;
  const g = e ? Math.max : Math.min;
  for (let E = 6, P = n.length; E < P; E += 6) {
    if (isNaN(n[E]))
      o = Math.min(o, n[E + 4]), l = Math.min(l, n[E + 5]), c = Math.max(c, n[E + 4]), d = Math.max(d, n[E + 5]), f < n[E + 5] ? (h = n[E + 4], f = n[E + 5]) : f === n[E + 5] && (h = g(h, n[E + 4]));
    else {
      const k = Q.bezierBoundingBox(i, s, ...n.slice(E, E + 6));
      o = Math.min(o, k[0]), l = Math.min(l, k[1]), c = Math.max(c, k[2]), d = Math.max(d, k[3]), f < k[3] ? (h = k[2], f = k[3]) : f === k[3] && (h = g(h, k[2]));
    }
    i = n[E + 4], s = n[E + 5];
  }
  const y = o - a(this, Ci), b = l - a(this, Ci), _ = c - o + 2 * a(this, Ci), x = d - l + 2 * a(this, Ci);
  w(this, yr, {
    x: y,
    y: b,
    width: _,
    height: x,
    lastPoint: [h, f]
  });
};
var eh, nh, En, wr, la, se, ih, ca, sh, rh, cs, ha, oh, wg, ah, Ag, Vu, vb, Ti, Cs, Wu, wb, jn, Gi;
const ri = class ri {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    m(this, oh);
    m(this, ah);
    m(this, Vu);
    m(this, Ti);
    m(this, Wu);
    m(this, jn);
    m(this, eh, A(this, Vu, vb).bind(this));
    m(this, nh, A(this, Wu, wb).bind(this));
    m(this, En, null);
    m(this, wr, null);
    m(this, la, void 0);
    m(this, se, null);
    m(this, ih, !1);
    m(this, ca, !1);
    m(this, sh, null);
    m(this, rh, void 0);
    m(this, cs, null);
    m(this, ha, void 0);
    var n;
    t ? (w(this, ca, !1), w(this, ha, at.HIGHLIGHT_COLOR), w(this, sh, t)) : (w(this, ca, !0), w(this, ha, at.HIGHLIGHT_DEFAULT_COLOR)), w(this, cs, (t == null ? void 0 : t._uiManager) || e), w(this, rh, a(this, cs)._eventBus), w(this, la, (t == null ? void 0 : t.color) || ((n = a(this, cs)) == null ? void 0 : n.highlightColors.values().next().value) || "#FFFF98");
  }
  static get _keyboardManager() {
    return xt(this, "_keyboardManager", new Mh([[["Escape", "mac+Escape"], ri.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], ri.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], ri.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], ri.prototype._moveToPrevious], [["Home", "mac+Home"], ri.prototype._moveToBeginning], [["End", "mac+End"], ri.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = w(this, En, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0), t.addEventListener("click", A(this, Ti, Cs).bind(this)), t.addEventListener("keydown", a(this, eh));
    const e = w(this, wr, document.createElement("span"));
    return e.className = "swatch", e.setAttribute("aria-hidden", !0), e.style.backgroundColor = a(this, la), t.append(e), t;
  }
  renderMainDropdown() {
    const t = w(this, se, A(this, oh, wg).call(this));
    return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === a(this, En)) {
      A(this, Ti, Cs).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && A(this, ah, Ag).call(this, e, t);
  }
  _moveToNext(t) {
    var e, n;
    if (!a(this, jn, Gi)) {
      A(this, Ti, Cs).call(this, t);
      return;
    }
    if (t.target === a(this, En)) {
      (e = a(this, se).firstChild) == null || e.focus();
      return;
    }
    (n = t.target.nextSibling) == null || n.focus();
  }
  _moveToPrevious(t) {
    var e, n;
    if (t.target === ((e = a(this, se)) == null ? void 0 : e.firstChild) || t.target === a(this, En)) {
      a(this, jn, Gi) && this._hideDropdownFromKeyboard();
      return;
    }
    a(this, jn, Gi) || A(this, Ti, Cs).call(this, t), (n = t.target.previousSibling) == null || n.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!a(this, jn, Gi)) {
      A(this, Ti, Cs).call(this, t);
      return;
    }
    (e = a(this, se).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!a(this, jn, Gi)) {
      A(this, Ti, Cs).call(this, t);
      return;
    }
    (e = a(this, se).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t;
    (t = a(this, se)) == null || t.classList.add("hidden"), window.removeEventListener("pointerdown", a(this, nh));
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!a(this, ca)) {
      if (!a(this, jn, Gi)) {
        (t = a(this, sh)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), a(this, En).focus({
        preventScroll: !0,
        focusVisible: a(this, ih)
      });
    }
  }
  updateColor(t) {
    if (a(this, wr) && (a(this, wr).style.backgroundColor = t), !a(this, se))
      return;
    const e = a(this, cs).highlightColors.values();
    for (const n of a(this, se).children)
      n.setAttribute("aria-selected", e.next().value === t);
  }
  destroy() {
    var t, e;
    (t = a(this, En)) == null || t.remove(), w(this, En, null), w(this, wr, null), (e = a(this, se)) == null || e.remove(), w(this, se, null);
  }
};
eh = new WeakMap(), nh = new WeakMap(), En = new WeakMap(), wr = new WeakMap(), la = new WeakMap(), se = new WeakMap(), ih = new WeakMap(), ca = new WeakMap(), sh = new WeakMap(), rh = new WeakMap(), cs = new WeakMap(), ha = new WeakMap(), oh = new WeakSet(), wg = function() {
  const t = document.createElement("div");
  t.addEventListener("contextmenu", Ge), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", !1), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [e, n] of a(this, cs).highlightColors) {
    const i = document.createElement("button");
    i.tabIndex = "0", i.role = "option", i.setAttribute("data-color", n), i.title = e, i.setAttribute("data-l10n-id", `pdfjs-editor-colorpicker-${e}`);
    const s = document.createElement("span");
    i.append(s), s.className = "swatch", s.style.backgroundColor = n, i.setAttribute("aria-selected", n === a(this, la)), i.addEventListener("click", A(this, ah, Ag).bind(this, n)), t.append(i);
  }
  return t.addEventListener("keydown", a(this, eh)), t;
}, ah = new WeakSet(), Ag = function(t, e) {
  e.stopPropagation(), a(this, rh).dispatch("switchannotationeditorparams", {
    source: this,
    type: a(this, ha),
    value: t
  });
}, Vu = new WeakSet(), vb = function(t) {
  ri._keyboardManager.exec(this, t);
}, Ti = new WeakSet(), Cs = function(t) {
  if (a(this, jn, Gi)) {
    this.hideDropdown();
    return;
  }
  if (w(this, ih, t.detail === 0), window.addEventListener("pointerdown", a(this, nh)), a(this, se)) {
    a(this, se).classList.remove("hidden");
    return;
  }
  const e = w(this, se, A(this, oh, wg).call(this));
  a(this, En).append(e);
}, Wu = new WeakSet(), wb = function(t) {
  var e;
  (e = a(this, se)) != null && e.contains(t.target) || this.hideDropdown();
}, jn = new WeakSet(), Gi = function() {
  return a(this, se) && !a(this, se).classList.contains("hidden");
};
let Dd = ri;
var da, lh, hs, Ar, ua, ln, ch, hh, _r, Sn, Ie, Je, qu, fa, Er, re, pa, Gn, dh, uh, _g, fh, Eg, Xu, Ab, Yu, _b, Ku, Eb, ph, Sg, Sr, Qa, ds, no, Zu, Sb, ga, vd, xr, tl, Ju, xb, Qu, Cb, tf, Tb, ef, Pb;
const St = class St extends It {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    m(this, uh);
    m(this, fh);
    m(this, Xu);
    m(this, Yu);
    m(this, Ku);
    m(this, ph);
    m(this, Sr);
    m(this, Zu);
    m(this, ga);
    m(this, xr);
    m(this, Ju);
    m(this, Qu);
    m(this, da, null);
    m(this, lh, 0);
    m(this, hs, void 0);
    m(this, Ar, null);
    m(this, ua, null);
    m(this, ln, null);
    m(this, ch, null);
    m(this, hh, 0);
    m(this, _r, null);
    m(this, Sn, null);
    m(this, Ie, null);
    m(this, Je, !1);
    m(this, qu, A(this, Zu, Sb).bind(this));
    m(this, fa, null);
    m(this, Er, void 0);
    m(this, re, null);
    m(this, pa, "");
    m(this, Gn, void 0);
    m(this, dh, "");
    this.color = e.color || St._defaultColor, w(this, Gn, e.thickness || St._defaultThickness), w(this, Er, e.opacity || St._defaultOpacity), w(this, hs, e.boxes || null), w(this, dh, e.methodOfCreation || ""), w(this, pa, e.text || ""), this._isDraggable = !1, e.highlightId > -1 ? (w(this, Je, !0), A(this, fh, Eg).call(this, e), A(this, Sr, Qa).call(this)) : (w(this, da, e.anchorNode), w(this, lh, e.anchorOffset), w(this, ch, e.focusNode), w(this, hh, e.focusOffset), A(this, uh, _g).call(this), A(this, Sr, Qa).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const e = St.prototype;
    return xt(this, "_keyboardManager", new Mh([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], e._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], e._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], e._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: a(this, Je) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: a(this, Gn),
      methodOfCreation: a(this, dh)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  static initialize(e, n) {
    var i;
    It.initialize(e, n), St._defaultColor || (St._defaultColor = ((i = n.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, n) {
    switch (e) {
      case at.HIGHLIGHT_DEFAULT_COLOR:
        St._defaultColor = n;
        break;
      case at.HIGHLIGHT_THICKNESS:
        St._defaultThickness = n;
        break;
    }
  }
  translateInPage(e, n) {
  }
  get toolbarPosition() {
    return a(this, fa);
  }
  updateParams(e, n) {
    switch (e) {
      case at.HIGHLIGHT_COLOR:
        A(this, Xu, Ab).call(this, n);
        break;
      case at.HIGHLIGHT_THICKNESS:
        A(this, Yu, _b).call(this, n);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[at.HIGHLIGHT_DEFAULT_COLOR, St._defaultColor], [at.HIGHLIGHT_THICKNESS, St._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[at.HIGHLIGHT_COLOR, this.color || St._defaultColor], [at.HIGHLIGHT_THICKNESS, a(this, Gn) || St._defaultThickness], [at.HIGHLIGHT_FREE, a(this, Je)]];
  }
  async addEditToolbar() {
    const e = await super.addEditToolbar();
    return e ? (this._uiManager.highlightColors && (w(this, ua, new Dd({
      editor: this
    })), e.addColorPicker(a(this, ua))), e) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(A(this, xr, tl).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, n) {
    return super.getRect(e, n, A(this, xr, tl).call(this));
  }
  onceAdded() {
    this.parent.addUndoableEditor(this), this.div.focus();
  }
  remove() {
    A(this, ph, Sg).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (A(this, Sr, Qa).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let n = !1;
    this.parent && !e ? A(this, ph, Sg).call(this) : e && (A(this, Sr, Qa).call(this, e), n = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), n && this.select();
  }
  rotate(e) {
    var s, o, l;
    const {
      drawLayer: n
    } = this.parent;
    let i;
    a(this, Je) ? (e = (e - this.rotation + 360) % 360, i = A(s = St, ds, no).call(s, a(this, Sn).box, e)) : i = A(o = St, ds, no).call(o, this, e), n.rotate(a(this, Ie), e), n.rotate(a(this, re), e), n.updateBox(a(this, Ie), i), n.updateBox(a(this, re), A(l = St, ds, no).call(l, a(this, ln).box, e));
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    a(this, pa) && (e.setAttribute("aria-label", a(this, pa)), e.setAttribute("role", "mark")), a(this, Je) ? e.classList.add("free") : this.div.addEventListener("keydown", a(this, qu));
    const n = w(this, _r, document.createElement("div"));
    e.append(n), n.setAttribute("aria-hidden", "true"), n.className = "internal", n.style.clipPath = a(this, Ar);
    const [i, s] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * s), kd(this, a(this, _r), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    this.parent.drawLayer.addClass(a(this, re), "hovered");
  }
  pointerleave() {
    this.parent.drawLayer.removeClass(a(this, re), "hovered");
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        A(this, ga, vd).call(this, !0);
        break;
      case 1:
      case 3:
        A(this, ga, vd).call(this, !1);
        break;
    }
  }
  select() {
    var e, n;
    super.select(), a(this, re) && ((e = this.parent) == null || e.drawLayer.removeClass(a(this, re), "hovered"), (n = this.parent) == null || n.drawLayer.addClass(a(this, re), "selected"));
  }
  unselect() {
    var e;
    super.unselect(), a(this, re) && ((e = this.parent) == null || e.drawLayer.removeClass(a(this, re), "selected"), a(this, Je) || A(this, ga, vd).call(this, !1));
  }
  get _mustFixPosition() {
    return !a(this, Je);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.show(a(this, Ie), e), this.parent.drawLayer.show(a(this, re), e));
  }
  static startHighlighting(e, n, {
    target: i,
    x: s,
    y: o
  }) {
    const {
      x: l,
      y: c,
      width: d,
      height: h
    } = i.getBoundingClientRect(), f = (_) => {
      A(this, tf, Tb).call(this, e, _);
    }, g = {
      capture: !0,
      passive: !1
    }, y = (_) => {
      _.preventDefault(), _.stopPropagation();
    }, b = (_) => {
      i.removeEventListener("pointermove", f), window.removeEventListener("blur", b), window.removeEventListener("pointerup", b), window.removeEventListener("pointerdown", y, g), window.removeEventListener("contextmenu", Ge), A(this, ef, Pb).call(this, e, _);
    };
    window.addEventListener("blur", b), window.addEventListener("pointerup", b), window.addEventListener("pointerdown", y, g), window.addEventListener("contextmenu", Ge), i.addEventListener("pointermove", f), this._freeHighlight = new Md({
      x: s,
      y: o
    }, [l, c, d, h], e.scale, this._defaultThickness / 2, n, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = e.drawLayer.highlight(this._freeHighlight, this._defaultColor, this._defaultOpacity, !0);
  }
  static deserialize(e, n, i) {
    var _;
    const s = super.deserialize(e, n, i), {
      rect: [o, l, c, d],
      color: h,
      quadPoints: f
    } = e;
    s.color = Q.makeHexColor(...h), w(s, Er, e.opacity);
    const [g, y] = s.pageDimensions;
    s.width = (c - o) / g, s.height = (d - l) / y;
    const b = w(s, hs, []);
    for (let x = 0; x < f.length; x += 8)
      b.push({
        x: (f[4] - c) / g,
        y: (d - (1 - f[x + 5])) / y,
        width: (f[x + 2] - f[x]) / g,
        height: (f[x + 5] - f[x + 1]) / y
      });
    return A(_ = s, uh, _g).call(_), s;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    const n = this.getRect(0, 0), i = It._colorManager.convert(this.color);
    return {
      annotationType: _t.HIGHLIGHT,
      color: i,
      opacity: a(this, Er),
      thickness: a(this, Gn),
      quadPoints: A(this, Ju, xb).call(this),
      outlines: A(this, Qu, Cb).call(this, n),
      pageIndex: this.pageIndex,
      rect: n,
      rotation: A(this, xr, tl).call(this),
      structTreeParentId: this._structTreeParentId
    };
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
da = new WeakMap(), lh = new WeakMap(), hs = new WeakMap(), Ar = new WeakMap(), ua = new WeakMap(), ln = new WeakMap(), ch = new WeakMap(), hh = new WeakMap(), _r = new WeakMap(), Sn = new WeakMap(), Ie = new WeakMap(), Je = new WeakMap(), qu = new WeakMap(), fa = new WeakMap(), Er = new WeakMap(), re = new WeakMap(), pa = new WeakMap(), Gn = new WeakMap(), dh = new WeakMap(), uh = new WeakSet(), _g = function() {
  const e = new mg(a(this, hs), 1e-3);
  w(this, Sn, e.getOutlines()), {
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  } = a(this, Sn).box;
  const n = new mg(a(this, hs), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  w(this, ln, n.getOutlines());
  const {
    lastPoint: i
  } = a(this, ln).box;
  w(this, fa, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, fh = new WeakSet(), Eg = function({
  highlightOutlines: e,
  highlightId: n,
  clipPathId: i
}) {
  var f, g;
  if (w(this, Sn, e), w(this, ln, e.getNewOutline(a(this, Gn) / 2 + 1.5, 25e-4)), n >= 0)
    w(this, Ie, n), w(this, Ar, i), this.parent.drawLayer.finalizeLine(n, e), w(this, re, this.parent.drawLayer.highlightOutline(a(this, ln)));
  else if (this.parent) {
    const y = this.parent.viewport.rotation;
    this.parent.drawLayer.updateLine(a(this, Ie), e), this.parent.drawLayer.updateBox(a(this, Ie), A(f = St, ds, no).call(f, a(this, Sn).box, (y - this.rotation + 360) % 360)), this.parent.drawLayer.updateLine(a(this, re), a(this, ln)), this.parent.drawLayer.updateBox(a(this, re), A(g = St, ds, no).call(g, a(this, ln).box, y));
  }
  const {
    x: o,
    y: l,
    width: c,
    height: d
  } = e.box;
  switch (this.rotation) {
    case 0:
      this.x = o, this.y = l, this.width = c, this.height = d;
      break;
    case 90: {
      const [y, b] = this.parentDimensions;
      this.x = l, this.y = 1 - o, this.width = c * b / y, this.height = d * y / b;
      break;
    }
    case 180:
      this.x = 1 - o, this.y = 1 - l, this.width = c, this.height = d;
      break;
    case 270: {
      const [y, b] = this.parentDimensions;
      this.x = 1 - l, this.y = o, this.width = c * b / y, this.height = d * y / b;
      break;
    }
  }
  const {
    lastPoint: h
  } = a(this, ln).box;
  w(this, fa, [(h[0] - o) / c, (h[1] - l) / d]);
}, Xu = new WeakSet(), Ab = function(e) {
  const n = (s) => {
    var o, l;
    this.color = s, (o = this.parent) == null || o.drawLayer.changeColor(a(this, Ie), s), (l = a(this, ua)) == null || l.updateColor(s);
  }, i = this.color;
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(e)
  }, !0);
}, Yu = new WeakSet(), _b = function(e) {
  const n = a(this, Gn), i = (s) => {
    w(this, Gn, s), A(this, Ku, Eb).call(this, s);
  };
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, Ku = new WeakSet(), Eb = function(e) {
  if (!a(this, Je))
    return;
  A(this, fh, Eg).call(this, {
    highlightOutlines: a(this, Sn).getNewOutline(e / 2)
  }), this.fixAndSetPosition();
  const [n, i] = this.parentDimensions;
  this.setDims(this.width * n, this.height * i);
}, ph = new WeakSet(), Sg = function() {
  a(this, Ie) === null || !this.parent || (this.parent.drawLayer.remove(a(this, Ie)), w(this, Ie, null), this.parent.drawLayer.remove(a(this, re)), w(this, re, null));
}, Sr = new WeakSet(), Qa = function(e = this.parent) {
  a(this, Ie) === null && ({
    id: Ve(this, Ie)._,
    clipPathId: Ve(this, Ar)._
  } = e.drawLayer.highlight(a(this, Sn), this.color, a(this, Er)), w(this, re, e.drawLayer.highlightOutline(a(this, ln))), a(this, _r) && (a(this, _r).style.clipPath = a(this, Ar)));
}, ds = new WeakSet(), no = function({
  x: e,
  y: n,
  width: i,
  height: s
}, o) {
  switch (o) {
    case 90:
      return {
        x: 1 - n - s,
        y: e,
        width: s,
        height: i
      };
    case 180:
      return {
        x: 1 - e - i,
        y: 1 - n - s,
        width: i,
        height: s
      };
    case 270:
      return {
        x: n,
        y: 1 - e - i,
        width: s,
        height: i
      };
  }
  return {
    x: e,
    y: n,
    width: i,
    height: s
  };
}, Zu = new WeakSet(), Sb = function(e) {
  St._keyboardManager.exec(this, e);
}, ga = new WeakSet(), vd = function(e) {
  if (!a(this, da))
    return;
  const n = window.getSelection();
  e ? n.setPosition(a(this, da), a(this, lh)) : n.setPosition(a(this, ch), a(this, hh));
}, xr = new WeakSet(), tl = function() {
  return a(this, Je) ? this.rotation : 0;
}, Ju = new WeakSet(), xb = function() {
  if (a(this, Je))
    return null;
  const [e, n] = this.pageDimensions, i = a(this, hs), s = new Array(i.length * 8);
  let o = 0;
  for (const {
    x: l,
    y: c,
    width: d,
    height: h
  } of i) {
    const f = l * e, g = (1 - c - h) * n;
    s[o] = s[o + 4] = f, s[o + 1] = s[o + 3] = g, s[o + 2] = s[o + 6] = f + d * e, s[o + 5] = s[o + 7] = g + h * n, o += 8;
  }
  return s;
}, Qu = new WeakSet(), Cb = function(e) {
  return a(this, Sn).serialize(e, A(this, xr, tl).call(this));
}, tf = new WeakSet(), Tb = function(e, n) {
  this._freeHighlight.add(n) && e.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
}, ef = new WeakSet(), Pb = function(e, n) {
  this._freeHighlight.isEmpty() ? e.drawLayer.removeFreeHighlight(this._freeHighlightId) : e.createAndAddNewEditor(n, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, m(St, ds), m(St, tf), m(St, ef), ht(St, "_defaultColor", null), ht(St, "_defaultOpacity", 1), ht(St, "_defaultThickness", 12), ht(St, "_l10nPromise"), ht(St, "_type", "highlight"), ht(St, "_editorType", _t.HIGHLIGHT), ht(St, "_freeHighlightId", -1), ht(St, "_freeHighlight", null), ht(St, "_freeHighlightClipId", "");
let Nd = St;
var Cr, Tr, gh, mh, yh, Pr, Vn, Pi, cn, Rr, kr, Lr, Ir, Fr, us, nf, Rb, sf, kb, rf, Lb, of, Ib, bh, Cg, af, Fb, vh, Tg, lf, Mb, cf, Db, hf, Nb, df, Ob, uf, Bb, Ri, Ts, wh, Pg, ma, wd, ya, Ad, fs, io, Ah, Rg, ba, _d, ff, $b, _h, kg, pf, Hb, gf, Ub, Eh, Lg, va, Ed, Mr, el;
const zt = class zt extends It {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    m(this, nf);
    m(this, sf);
    m(this, rf);
    m(this, of);
    m(this, bh);
    m(this, af);
    m(this, vh);
    m(this, lf);
    m(this, cf);
    m(this, hf);
    m(this, df);
    m(this, uf);
    m(this, Ri);
    m(this, wh);
    m(this, ma);
    m(this, ya);
    m(this, fs);
    m(this, Ah);
    m(this, ba);
    m(this, gf);
    m(this, Eh);
    m(this, va);
    m(this, Mr);
    m(this, Cr, 0);
    m(this, Tr, 0);
    m(this, gh, this.canvasPointermove.bind(this));
    m(this, mh, this.canvasPointerleave.bind(this));
    m(this, yh, this.canvasPointerup.bind(this));
    m(this, Pr, this.canvasPointerdown.bind(this));
    m(this, Vn, null);
    m(this, Pi, new Path2D());
    m(this, cn, !1);
    m(this, Rr, !1);
    m(this, kr, !1);
    m(this, Lr, null);
    m(this, Ir, 0);
    m(this, Fr, 0);
    m(this, us, null);
    this.color = e.color || null, this.thickness = e.thickness || null, this.opacity = e.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
  }
  static initialize(e, n) {
    It.initialize(e, n);
  }
  static updateDefaultParams(e, n) {
    switch (e) {
      case at.INK_THICKNESS:
        zt._defaultThickness = n;
        break;
      case at.INK_COLOR:
        zt._defaultColor = n;
        break;
      case at.INK_OPACITY:
        zt._defaultOpacity = n / 100;
        break;
    }
  }
  updateParams(e, n) {
    switch (e) {
      case at.INK_THICKNESS:
        A(this, nf, Rb).call(this, n);
        break;
      case at.INK_COLOR:
        A(this, sf, kb).call(this, n);
        break;
      case at.INK_OPACITY:
        A(this, rf, Lb).call(this, n);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[at.INK_THICKNESS, zt._defaultThickness], [at.INK_COLOR, zt._defaultColor || It._defaultLineColor], [at.INK_OPACITY, Math.round(zt._defaultOpacity * 100)]];
  }
  get propertiesToUpdate() {
    return [[at.INK_THICKNESS, this.thickness || zt._defaultThickness], [at.INK_COLOR, this.color || zt._defaultColor || It._defaultLineColor], [at.INK_OPACITY, Math.round(100 * (this.opacity ?? zt._defaultOpacity))]];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.canvas || (A(this, ma, wd).call(this), A(this, ya, Ad).call(this)), this.isAttachedToDOM || (this.parent.add(this), A(this, fs, io).call(this)), A(this, Mr, el).call(this)));
  }
  remove() {
    this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, a(this, Vn) && (clearTimeout(a(this, Vn)), w(this, Vn, null)), a(this, Lr).disconnect(), w(this, Lr, null), super.remove());
  }
  setParent(e) {
    !this.parent && e ? this._uiManager.removeShouldRescale(this) : this.parent && e === null && this._uiManager.addShouldRescale(this), super.setParent(e);
  }
  onScaleChanging() {
    const [e, n] = this.parentDimensions, i = this.width * e, s = this.height * n;
    this.setDimensions(i, s);
  }
  enableEditMode() {
    a(this, cn) || this.canvas === null || (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", a(this, Pr)));
  }
  disableEditMode() {
    !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", a(this, Pr)));
  }
  onceAdded() {
    this._isDraggable = !this.isEmpty();
  }
  isEmpty() {
    return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
  }
  commit() {
    a(this, cn) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), w(this, cn, !0), this.div.classList.add("disabled"), A(this, Mr, el).call(this, !0), this.select(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({
      preventScroll: !0
    }));
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), this.enableEditMode());
  }
  canvasPointerdown(e) {
    e.button !== 0 || !this.isInEditMode() || a(this, cn) || (this.setInForeground(), e.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({
      preventScroll: !0
    }), A(this, af, Fb).call(this, e.offsetX, e.offsetY));
  }
  canvasPointermove(e) {
    e.preventDefault(), A(this, vh, Tg).call(this, e.offsetX, e.offsetY);
  }
  canvasPointerup(e) {
    e.preventDefault(), A(this, wh, Pg).call(this, e);
  }
  canvasPointerleave(e) {
    A(this, wh, Pg).call(this, e);
  }
  get isResizable() {
    return !this.isEmpty() && a(this, cn);
  }
  render() {
    if (this.div)
      return this.div;
    let e, n;
    this.width && (e = this.x, n = this.y), super.render(), this.div.setAttribute("data-l10n-id", "pdfjs-ink");
    const [i, s, o, l] = A(this, of, Ib).call(this);
    if (this.setAt(i, s, 0, 0), this.setDims(o, l), A(this, ma, wd).call(this), this.width) {
      const [c, d] = this.parentDimensions;
      this.setAspectRatio(this.width * c, this.height * d), this.setAt(e * c, n * d, this.width * c, this.height * d), w(this, kr, !0), A(this, fs, io).call(this), this.setDims(this.width * c, this.height * d), A(this, Ri, Ts).call(this), this.div.classList.add("disabled");
    } else
      this.div.classList.add("editing"), this.enableEditMode();
    return A(this, ya, Ad).call(this), this.div;
  }
  setDimensions(e, n) {
    const i = Math.round(e), s = Math.round(n);
    if (a(this, Ir) === i && a(this, Fr) === s)
      return;
    w(this, Ir, i), w(this, Fr, s), this.canvas.style.visibility = "hidden";
    const [o, l] = this.parentDimensions;
    this.width = e / o, this.height = n / l, this.fixAndSetPosition(), a(this, cn) && A(this, Ah, Rg).call(this, e, n), A(this, fs, io).call(this), A(this, Ri, Ts).call(this), this.canvas.style.visibility = "visible", this.fixDims();
  }
  static deserialize(e, n, i) {
    var x, E, P;
    if (e instanceof ob)
      return null;
    const s = super.deserialize(e, n, i);
    s.thickness = e.thickness, s.color = Q.makeHexColor(...e.color), s.opacity = e.opacity;
    const [o, l] = s.pageDimensions, c = s.width * o, d = s.height * l, h = s.parentScale, f = e.thickness / 2;
    w(s, cn, !0), w(s, Ir, Math.round(c)), w(s, Fr, Math.round(d));
    const {
      paths: g,
      rect: y,
      rotation: b
    } = e;
    for (let {
      bezier: k
    } of g) {
      k = A(x = zt, pf, Hb).call(x, k, y, b);
      const L = [];
      s.paths.push(L);
      let F = h * (k[0] - f), I = h * (k[1] - f);
      for (let C = 2, T = k.length; C < T; C += 6) {
        const N = h * (k[C] - f), D = h * (k[C + 1] - f), H = h * (k[C + 2] - f), U = h * (k[C + 3] - f), G = h * (k[C + 4] - f), Y = h * (k[C + 5] - f);
        L.push([[F, I], [N, D], [H, U], [G, Y]]), F = G, I = Y;
      }
      const M = A(this, ff, $b).call(this, L);
      s.bezierPath2D.push(M);
    }
    const _ = A(E = s, Eh, Lg).call(E);
    return w(s, Tr, Math.max(It.MIN_SIZE, _[2] - _[0])), w(s, Cr, Math.max(It.MIN_SIZE, _[3] - _[1])), A(P = s, Ah, Rg).call(P, c, d), s;
  }
  serialize() {
    if (this.isEmpty())
      return null;
    const e = this.getRect(0, 0), n = It._colorManager.convert(this.ctx.strokeStyle);
    return {
      annotationType: _t.INK,
      color: n,
      thickness: this.thickness,
      opacity: this.opacity,
      paths: A(this, gf, Ub).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, e),
      pageIndex: this.pageIndex,
      rect: e,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
  }
};
Cr = new WeakMap(), Tr = new WeakMap(), gh = new WeakMap(), mh = new WeakMap(), yh = new WeakMap(), Pr = new WeakMap(), Vn = new WeakMap(), Pi = new WeakMap(), cn = new WeakMap(), Rr = new WeakMap(), kr = new WeakMap(), Lr = new WeakMap(), Ir = new WeakMap(), Fr = new WeakMap(), us = new WeakMap(), nf = new WeakSet(), Rb = function(e) {
  const n = (s) => {
    this.thickness = s, A(this, Mr, el).call(this);
  }, i = this.thickness;
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, sf = new WeakSet(), kb = function(e) {
  const n = (s) => {
    this.color = s, A(this, Ri, Ts).call(this);
  }, i = this.color;
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.INK_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, rf = new WeakSet(), Lb = function(e) {
  const n = (s) => {
    this.opacity = s, A(this, Ri, Ts).call(this);
  };
  e /= 100;
  const i = this.opacity;
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: at.INK_OPACITY,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, of = new WeakSet(), Ib = function() {
  const {
    parentRotation: e,
    parentDimensions: [n, i]
  } = this;
  switch (e) {
    case 90:
      return [0, i, i, n];
    case 180:
      return [n, i, n, i];
    case 270:
      return [n, 0, i, n];
    default:
      return [0, 0, n, i];
  }
}, bh = new WeakSet(), Cg = function() {
  const {
    ctx: e,
    color: n,
    opacity: i,
    thickness: s,
    parentScale: o,
    scaleFactor: l
  } = this;
  e.lineWidth = s * o / l, e.lineCap = "round", e.lineJoin = "round", e.miterLimit = 10, e.strokeStyle = `${n}${lE(i)}`;
}, af = new WeakSet(), Fb = function(e, n) {
  this.canvas.addEventListener("contextmenu", Ge), this.canvas.addEventListener("pointerleave", a(this, mh)), this.canvas.addEventListener("pointermove", a(this, gh)), this.canvas.addEventListener("pointerup", a(this, yh)), this.canvas.removeEventListener("pointerdown", a(this, Pr)), this.isEditing = !0, a(this, kr) || (w(this, kr, !0), A(this, fs, io).call(this), this.thickness || (this.thickness = zt._defaultThickness), this.color || (this.color = zt._defaultColor || It._defaultLineColor), this.opacity ?? (this.opacity = zt._defaultOpacity)), this.currentPath.push([e, n]), w(this, Rr, !1), A(this, bh, Cg).call(this), w(this, us, () => {
    A(this, hf, Nb).call(this), a(this, us) && window.requestAnimationFrame(a(this, us));
  }), window.requestAnimationFrame(a(this, us));
}, vh = new WeakSet(), Tg = function(e, n) {
  const [i, s] = this.currentPath.at(-1);
  if (this.currentPath.length > 1 && e === i && n === s)
    return;
  const o = this.currentPath;
  let l = a(this, Pi);
  if (o.push([e, n]), w(this, Rr, !0), o.length <= 2) {
    l.moveTo(...o[0]), l.lineTo(e, n);
    return;
  }
  o.length === 3 && (w(this, Pi, l = new Path2D()), l.moveTo(...o[0])), A(this, df, Ob).call(this, l, ...o.at(-3), ...o.at(-2), e, n);
}, lf = new WeakSet(), Mb = function() {
  if (this.currentPath.length === 0)
    return;
  const e = this.currentPath.at(-1);
  a(this, Pi).lineTo(...e);
}, cf = new WeakSet(), Db = function(e, n) {
  w(this, us, null), e = Math.min(Math.max(e, 0), this.canvas.width), n = Math.min(Math.max(n, 0), this.canvas.height), A(this, vh, Tg).call(this, e, n), A(this, lf, Mb).call(this);
  let i;
  if (this.currentPath.length !== 1)
    i = A(this, uf, Bb).call(this);
  else {
    const d = [e, n];
    i = [[d, d.slice(), d.slice(), d]];
  }
  const s = a(this, Pi), o = this.currentPath;
  this.currentPath = [], w(this, Pi, new Path2D());
  const l = () => {
    this.allRawPaths.push(o), this.paths.push(i), this.bezierPath2D.push(s), this._uiManager.rebuild(this);
  }, c = () => {
    this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (A(this, ma, wd).call(this), A(this, ya, Ad).call(this)), A(this, Mr, el).call(this));
  };
  this.addCommands({
    cmd: l,
    undo: c,
    mustExec: !0
  });
}, hf = new WeakSet(), Nb = function() {
  if (!a(this, Rr))
    return;
  w(this, Rr, !1);
  const e = Math.ceil(this.thickness * this.parentScale), n = this.currentPath.slice(-3), i = n.map((l) => l[0]), s = n.map((l) => l[1]);
  Math.min(...i) - e, Math.max(...i) + e, Math.min(...s) - e, Math.max(...s) + e;
  const {
    ctx: o
  } = this;
  o.save(), o.clearRect(0, 0, this.canvas.width, this.canvas.height);
  for (const l of this.bezierPath2D)
    o.stroke(l);
  o.stroke(a(this, Pi)), o.restore();
}, df = new WeakSet(), Ob = function(e, n, i, s, o, l, c) {
  const d = (n + s) / 2, h = (i + o) / 2, f = (s + l) / 2, g = (o + c) / 2;
  e.bezierCurveTo(d + 2 * (s - d) / 3, h + 2 * (o - h) / 3, f + 2 * (s - f) / 3, g + 2 * (o - g) / 3, f, g);
}, uf = new WeakSet(), Bb = function() {
  const e = this.currentPath;
  if (e.length <= 2)
    return [[e[0], e[0], e.at(-1), e.at(-1)]];
  const n = [];
  let i, [s, o] = e[0];
  for (i = 1; i < e.length - 2; i++) {
    const [y, b] = e[i], [_, x] = e[i + 1], E = (y + _) / 2, P = (b + x) / 2, k = [s + 2 * (y - s) / 3, o + 2 * (b - o) / 3], L = [E + 2 * (y - E) / 3, P + 2 * (b - P) / 3];
    n.push([[s, o], k, L, [E, P]]), [s, o] = [E, P];
  }
  const [l, c] = e[i], [d, h] = e[i + 1], f = [s + 2 * (l - s) / 3, o + 2 * (c - o) / 3], g = [d + 2 * (l - d) / 3, h + 2 * (c - h) / 3];
  return n.push([[s, o], f, g, [d, h]]), n;
}, Ri = new WeakSet(), Ts = function() {
  if (this.isEmpty()) {
    A(this, ba, _d).call(this);
    return;
  }
  A(this, bh, Cg).call(this);
  const {
    canvas: e,
    ctx: n
  } = this;
  n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, e.width, e.height), A(this, ba, _d).call(this);
  for (const i of this.bezierPath2D)
    n.stroke(i);
}, wh = new WeakSet(), Pg = function(e) {
  this.canvas.removeEventListener("pointerleave", a(this, mh)), this.canvas.removeEventListener("pointermove", a(this, gh)), this.canvas.removeEventListener("pointerup", a(this, yh)), this.canvas.addEventListener("pointerdown", a(this, Pr)), a(this, Vn) && clearTimeout(a(this, Vn)), w(this, Vn, setTimeout(() => {
    w(this, Vn, null), this.canvas.removeEventListener("contextmenu", Ge);
  }, 10)), A(this, cf, Db).call(this, e.offsetX, e.offsetY), this.addToAnnotationStorage(), this.setInBackground();
}, ma = new WeakSet(), wd = function() {
  this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
}, ya = new WeakSet(), Ad = function() {
  w(this, Lr, new ResizeObserver((e) => {
    const n = e[0].contentRect;
    n.width && n.height && this.setDimensions(n.width, n.height);
  })), a(this, Lr).observe(this.div);
}, fs = new WeakSet(), io = function() {
  if (!a(this, kr))
    return;
  const [e, n] = this.parentDimensions;
  this.canvas.width = Math.ceil(this.width * e), this.canvas.height = Math.ceil(this.height * n), A(this, ba, _d).call(this);
}, Ah = new WeakSet(), Rg = function(e, n) {
  const i = A(this, va, Ed).call(this), s = (e - i) / a(this, Tr), o = (n - i) / a(this, Cr);
  this.scaleFactor = Math.min(s, o);
}, ba = new WeakSet(), _d = function() {
  const e = A(this, va, Ed).call(this) / 2;
  this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + e, this.translationY * this.scaleFactor + e);
}, ff = new WeakSet(), $b = function(e) {
  const n = new Path2D();
  for (let i = 0, s = e.length; i < s; i++) {
    const [o, l, c, d] = e[i];
    i === 0 && n.moveTo(...o), n.bezierCurveTo(l[0], l[1], c[0], c[1], d[0], d[1]);
  }
  return n;
}, _h = new WeakSet(), kg = function(e, n, i) {
  const [s, o, l, c] = n;
  switch (i) {
    case 0:
      for (let d = 0, h = e.length; d < h; d += 2)
        e[d] += s, e[d + 1] = c - e[d + 1];
      break;
    case 90:
      for (let d = 0, h = e.length; d < h; d += 2) {
        const f = e[d];
        e[d] = e[d + 1] + s, e[d + 1] = f + o;
      }
      break;
    case 180:
      for (let d = 0, h = e.length; d < h; d += 2)
        e[d] = l - e[d], e[d + 1] += o;
      break;
    case 270:
      for (let d = 0, h = e.length; d < h; d += 2) {
        const f = e[d];
        e[d] = l - e[d + 1], e[d + 1] = c - f;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return e;
}, pf = new WeakSet(), Hb = function(e, n, i) {
  const [s, o, l, c] = n;
  switch (i) {
    case 0:
      for (let d = 0, h = e.length; d < h; d += 2)
        e[d] -= s, e[d + 1] = c - e[d + 1];
      break;
    case 90:
      for (let d = 0, h = e.length; d < h; d += 2) {
        const f = e[d];
        e[d] = e[d + 1] - o, e[d + 1] = f - s;
      }
      break;
    case 180:
      for (let d = 0, h = e.length; d < h; d += 2)
        e[d] = l - e[d], e[d + 1] -= o;
      break;
    case 270:
      for (let d = 0, h = e.length; d < h; d += 2) {
        const f = e[d];
        e[d] = c - e[d + 1], e[d + 1] = l - f;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return e;
}, gf = new WeakSet(), Ub = function(e, n, i, s) {
  var h, f;
  const o = [], l = this.thickness / 2, c = e * n + l, d = e * i + l;
  for (const g of this.paths) {
    const y = [], b = [];
    for (let _ = 0, x = g.length; _ < x; _++) {
      const [E, P, k, L] = g[_];
      if (E[0] === L[0] && E[1] === L[1] && x === 1) {
        const U = e * E[0] + c, G = e * E[1] + d;
        y.push(U, G), b.push(U, G);
        break;
      }
      const F = e * E[0] + c, I = e * E[1] + d, M = e * P[0] + c, C = e * P[1] + d, T = e * k[0] + c, N = e * k[1] + d, D = e * L[0] + c, H = e * L[1] + d;
      _ === 0 && (y.push(F, I), b.push(F, I)), y.push(M, C, T, N, D, H), b.push(M, C), _ === x - 1 && b.push(D, H);
    }
    o.push({
      bezier: A(h = zt, _h, kg).call(h, y, s, this.rotation),
      points: A(f = zt, _h, kg).call(f, b, s, this.rotation)
    });
  }
  return o;
}, Eh = new WeakSet(), Lg = function() {
  let e = 1 / 0, n = -1 / 0, i = 1 / 0, s = -1 / 0;
  for (const o of this.paths)
    for (const [l, c, d, h] of o) {
      const f = Q.bezierBoundingBox(...l, ...c, ...d, ...h);
      e = Math.min(e, f[0]), i = Math.min(i, f[1]), n = Math.max(n, f[2]), s = Math.max(s, f[3]);
    }
  return [e, i, n, s];
}, va = new WeakSet(), Ed = function() {
  return a(this, cn) ? Math.ceil(this.thickness * this.parentScale) : 0;
}, Mr = new WeakSet(), el = function(e = !1) {
  if (this.isEmpty())
    return;
  if (!a(this, cn)) {
    A(this, Ri, Ts).call(this);
    return;
  }
  const n = A(this, Eh, Lg).call(this), i = A(this, va, Ed).call(this);
  w(this, Tr, Math.max(It.MIN_SIZE, n[2] - n[0])), w(this, Cr, Math.max(It.MIN_SIZE, n[3] - n[1]));
  const s = Math.ceil(i + a(this, Tr) * this.scaleFactor), o = Math.ceil(i + a(this, Cr) * this.scaleFactor), [l, c] = this.parentDimensions;
  this.width = s / l, this.height = o / c, this.setAspectRatio(s, o);
  const d = this.translationX, h = this.translationY;
  this.translationX = -n[0], this.translationY = -n[1], A(this, fs, io).call(this), A(this, Ri, Ts).call(this), w(this, Ir, s), w(this, Fr, o), this.setDims(s, o);
  const f = e ? i / this.scaleFactor / 2 : 0;
  this.translate(d - this.translationX - f, h - this.translationY - f);
}, m(zt, ff), m(zt, _h), m(zt, pf), ht(zt, "_defaultColor", null), ht(zt, "_defaultOpacity", 1), ht(zt, "_defaultThickness", 1), ht(zt, "_type", "ink"), ht(zt, "_editorType", _t.INK);
let xg = zt;
var Ae, _e, ps, ki, gs, wa, Wn, Dr, qn, xn, Sh, Nr, nl, Or, il, Aa, Sd, xh, Fg, mf, zb, yf, jb, Ch, Mg, _a, xd, bf, Gb;
const al = class al extends It {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    m(this, Nr);
    m(this, Or);
    m(this, Aa);
    m(this, xh);
    m(this, mf);
    m(this, yf);
    m(this, Ch);
    m(this, _a);
    m(this, bf);
    m(this, Ae, null);
    m(this, _e, null);
    m(this, ps, null);
    m(this, ki, null);
    m(this, gs, null);
    m(this, wa, "");
    m(this, Wn, null);
    m(this, Dr, null);
    m(this, qn, null);
    m(this, xn, !1);
    m(this, Sh, !1);
    w(this, ki, e.bitmapUrl), w(this, gs, e.bitmapFile);
  }
  static initialize(e, n) {
    It.initialize(e, n);
  }
  static get supportedTypes() {
    return xt(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((n) => `image/${n}`));
  }
  static get supportedTypesStr() {
    return xt(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(e) {
    return this.supportedTypes.includes(e);
  }
  static paste(e, n) {
    n.pasteEditor(_t.STAMP, {
      bitmapFile: e.getAsFile()
    });
  }
  remove() {
    var e, n;
    a(this, _e) && (w(this, Ae, null), this._uiManager.imageManager.deleteId(a(this, _e)), (e = a(this, Wn)) == null || e.remove(), w(this, Wn, null), (n = a(this, Dr)) == null || n.disconnect(), w(this, Dr, null), a(this, qn) && (clearTimeout(a(this, qn)), w(this, qn, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      a(this, _e) && A(this, Aa, Sd).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (a(this, _e) && a(this, Wn) === null && A(this, Aa, Sd).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded() {
    this._isDraggable = !0, this.div.focus();
  }
  isEmpty() {
    return !(a(this, ps) || a(this, Ae) || a(this, ki) || a(this, gs) || a(this, _e));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, n;
    if (this.width && (e = this.x, n = this.y), super.render(), this.div.hidden = !0, this.addAltTextButton(), a(this, Ae) ? A(this, xh, Fg).call(this) : A(this, Aa, Sd).call(this), this.width) {
      const [i, s] = this.parentDimensions;
      this.setAt(e * i, n * s, this.width * i, this.height * s);
    }
    return this.div;
  }
  getImageForAltText() {
    return a(this, Wn);
  }
  static deserialize(e, n, i) {
    if (e instanceof ab)
      return null;
    const s = super.deserialize(e, n, i), {
      rect: o,
      bitmapUrl: l,
      bitmapId: c,
      isSvg: d,
      accessibilityData: h
    } = e;
    c && i.imageManager.isValidId(c) ? w(s, _e, c) : w(s, ki, l), w(s, xn, d);
    const [f, g] = s.pageDimensions;
    return s.width = (o[2] - o[0]) / f, s.height = (o[3] - o[1]) / g, h && (s.altTextData = h), s;
  }
  serialize(e = !1, n = null) {
    if (this.isEmpty())
      return null;
    const i = {
      annotationType: _t.STAMP,
      bitmapId: a(this, _e),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: a(this, xn),
      structTreeParentId: this._structTreeParentId
    };
    if (e)
      return i.bitmapUrl = A(this, _a, xd).call(this, !0), i.accessibilityData = this.altTextData, i;
    const {
      decorative: s,
      altText: o
    } = this.altTextData;
    if (!s && o && (i.accessibilityData = {
      type: "Figure",
      alt: o
    }), n === null)
      return i;
    n.stamps || (n.stamps = /* @__PURE__ */ new Map());
    const l = a(this, xn) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!n.stamps.has(a(this, _e)))
      n.stamps.set(a(this, _e), {
        area: l,
        serialized: i
      }), i.bitmap = A(this, _a, xd).call(this, !1);
    else if (a(this, xn)) {
      const c = n.stamps.get(a(this, _e));
      l > c.area && (c.area = l, c.serialized.bitmap.close(), c.serialized.bitmap = A(this, _a, xd).call(this, !1));
    }
    return i;
  }
};
Ae = new WeakMap(), _e = new WeakMap(), ps = new WeakMap(), ki = new WeakMap(), gs = new WeakMap(), wa = new WeakMap(), Wn = new WeakMap(), Dr = new WeakMap(), qn = new WeakMap(), xn = new WeakMap(), Sh = new WeakMap(), Nr = new WeakSet(), nl = function(e, n = !1) {
  if (!e) {
    this.remove();
    return;
  }
  w(this, Ae, e.bitmap), n || (w(this, _e, e.id), w(this, xn, e.isSvg)), e.file && w(this, wa, e.file.name), A(this, xh, Fg).call(this);
}, Or = new WeakSet(), il = function() {
  w(this, ps, null), this._uiManager.enableWaiting(!1), a(this, Wn) && this.div.focus();
}, Aa = new WeakSet(), Sd = function() {
  if (a(this, _e)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(a(this, _e)).then((n) => A(this, Nr, nl).call(this, n, !0)).finally(() => A(this, Or, il).call(this));
    return;
  }
  if (a(this, ki)) {
    const n = a(this, ki);
    w(this, ki, null), this._uiManager.enableWaiting(!0), w(this, ps, this._uiManager.imageManager.getFromUrl(n).then((i) => A(this, Nr, nl).call(this, i)).finally(() => A(this, Or, il).call(this)));
    return;
  }
  if (a(this, gs)) {
    const n = a(this, gs);
    w(this, gs, null), this._uiManager.enableWaiting(!0), w(this, ps, this._uiManager.imageManager.getFromFile(n).then((i) => A(this, Nr, nl).call(this, i)).finally(() => A(this, Or, il).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = al.supportedTypesStr, w(this, ps, new Promise((n) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const i = await this._uiManager.imageManager.getFromFile(e.files[0]);
        A(this, Nr, nl).call(this, i);
      }
      n();
    }), e.addEventListener("cancel", () => {
      this.remove(), n();
    });
  }).finally(() => A(this, Or, il).call(this))), e.click();
}, xh = new WeakSet(), Fg = function() {
  const {
    div: e
  } = this;
  let {
    width: n,
    height: i
  } = a(this, Ae);
  const [s, o] = this.pageDimensions, l = 0.75;
  if (this.width)
    n = this.width * s, i = this.height * o;
  else if (n > l * s || i > l * o) {
    const f = Math.min(l * s / n, l * o / i);
    n *= f, i *= f;
  }
  const [c, d] = this.parentDimensions;
  this.setDims(n * c / s, i * d / o), this._uiManager.enableWaiting(!1);
  const h = w(this, Wn, document.createElement("canvas"));
  e.append(h), e.hidden = !1, A(this, Ch, Mg).call(this, n, i), A(this, bf, Gb).call(this), a(this, Sh) || (this.parent.addUndoableEditor(this), w(this, Sh, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), a(this, wa) && h.setAttribute("aria-label", a(this, wa));
}, mf = new WeakSet(), zb = function(e, n) {
  var l;
  const [i, s] = this.parentDimensions;
  this.width = e / i, this.height = n / s, this.setDims(e, n), (l = this._initialOptions) != null && l.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, a(this, qn) !== null && clearTimeout(a(this, qn)), w(this, qn, setTimeout(() => {
    w(this, qn, null), A(this, Ch, Mg).call(this, e, n);
  }, 200));
}, yf = new WeakSet(), jb = function(e, n) {
  const {
    width: i,
    height: s
  } = a(this, Ae);
  let o = i, l = s, c = a(this, Ae);
  for (; o > 2 * e || l > 2 * n; ) {
    const d = o, h = l;
    o > 2 * e && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2)), l > 2 * n && (l = l >= 16384 ? Math.floor(l / 2) - 1 : Math.ceil(l / 2));
    const f = new OffscreenCanvas(o, l);
    f.getContext("2d").drawImage(c, 0, 0, d, h, 0, 0, o, l), c = f.transferToImageBitmap();
  }
  return c;
}, Ch = new WeakSet(), Mg = function(e, n) {
  e = Math.ceil(e), n = Math.ceil(n);
  const i = a(this, Wn);
  if (!i || i.width === e && i.height === n)
    return;
  i.width = e, i.height = n;
  const s = a(this, xn) ? a(this, Ae) : A(this, yf, jb).call(this, e, n);
  if (this._uiManager.hasMLManager && !this.hasAltText()) {
    const c = new OffscreenCanvas(e, n).getContext("2d");
    c.drawImage(s, 0, 0, s.width, s.height, 0, 0, e, n), this._uiManager.mlGuess({
      service: "image-to-text",
      request: {
        data: c.getImageData(0, 0, e, n).data,
        width: e,
        height: n,
        channels: 4
      }
    }).then((d) => {
      const h = (d == null ? void 0 : d.output) || "";
      this.parent && h && !this.hasAltText() && (this.altTextData = {
        altText: h,
        decorative: !1
      });
    });
  }
  const o = i.getContext("2d");
  o.filter = this._uiManager.hcmFilter, o.drawImage(s, 0, 0, s.width, s.height, 0, 0, e, n);
}, _a = new WeakSet(), xd = function(e) {
  if (e) {
    if (a(this, xn)) {
      const s = this._uiManager.imageManager.getSvgUrl(a(this, _e));
      if (s)
        return s;
    }
    const n = document.createElement("canvas");
    return {
      width: n.width,
      height: n.height
    } = a(this, Ae), n.getContext("2d").drawImage(a(this, Ae), 0, 0), n.toDataURL();
  }
  if (a(this, xn)) {
    const [n, i] = this.pageDimensions, s = Math.round(this.width * n * vs.PDF_TO_CSS_UNITS), o = Math.round(this.height * i * vs.PDF_TO_CSS_UNITS), l = new OffscreenCanvas(s, o);
    return l.getContext("2d").drawImage(a(this, Ae), 0, 0, a(this, Ae).width, a(this, Ae).height, 0, 0, s, o), l.transferToImageBitmap();
  }
  return structuredClone(a(this, Ae));
}, bf = new WeakSet(), Gb = function() {
  w(this, Dr, new ResizeObserver((e) => {
    const n = e[0].contentRect;
    n.width && n.height && A(this, mf, zb).call(this, n.width, n.height);
  })), a(this, Dr).observe(this.div);
}, ht(al, "_type", "stamp"), ht(al, "_editorType", _t.STAMP);
let Ig = al;
var Br, Ea, Xn, $r, Li, Ii, Fi, Qe, ms, Sa, xa, Fe, it, ys, vf, Vb, Th, Ng, Ph, Og, Rh, Bg, Ca, Cd;
const fn = class fn {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: n,
    accessibilityManager: i,
    annotationLayer: s,
    drawLayer: o,
    textLayer: l,
    viewport: c,
    l10n: d
  }) {
    m(this, vf);
    m(this, Th);
    m(this, Ph);
    m(this, Rh);
    m(this, Ca);
    m(this, Br, void 0);
    m(this, Ea, !1);
    m(this, Xn, null);
    m(this, $r, null);
    m(this, Li, null);
    m(this, Ii, null);
    m(this, Fi, null);
    m(this, Qe, /* @__PURE__ */ new Map());
    m(this, ms, !1);
    m(this, Sa, !1);
    m(this, xa, !1);
    m(this, Fe, null);
    m(this, it, void 0);
    const h = [...a(fn, ys).values()];
    if (!fn._initialized) {
      fn._initialized = !0;
      for (const f of h)
        f.initialize(d, t);
    }
    t.registerEditorTypes(h), w(this, it, t), this.pageIndex = e, this.div = n, w(this, Br, i), w(this, Xn, s), this.viewport = c, w(this, Fe, l), this.drawLayer = o, a(this, it).addLayer(this);
  }
  get isEmpty() {
    return a(this, Qe).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && a(this, it).getMode() === _t.NONE;
  }
  updateToolbar(t) {
    a(this, it).updateToolbar(t);
  }
  updateMode(t = a(this, it).getMode()) {
    switch (A(this, Ca, Cd).call(this), t) {
      case _t.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case _t.INK:
        this.addInkEditorIfNeeded(!1), this.disableTextSelection(), this.togglePointerEvents(!0), this.disableClick();
        break;
      case _t.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    for (const n of a(fn, ys).values())
      e.toggle(`${n._type}Editing`, t === n._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = a(this, Fe)) == null ? void 0 : e.div);
  }
  addInkEditorIfNeeded(t) {
    if (a(this, it).getMode() !== _t.INK)
      return;
    if (!t) {
      for (const n of a(this, Qe).values())
        if (n.isEmpty()) {
          n.setInBackground();
          return;
        }
    }
    this.createAndAddNewEditor({
      offsetX: 0,
      offsetY: 0
    }, !1).setInBackground();
  }
  setEditingState(t) {
    a(this, it).setEditingState(t);
  }
  addCommands(t) {
    a(this, it).addCommands(t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = a(this, Xn)) == null || e.div.classList.toggle("disabled", !t);
  }
  enable() {
    this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const t = /* @__PURE__ */ new Set();
    for (const n of a(this, Qe).values())
      n.enableEditing(), n.show(!0), n.annotationElementId && (a(this, it).removeChangedExistingAnnotation(n), t.add(n.annotationElementId));
    if (!a(this, Xn))
      return;
    const e = a(this, Xn).getEditableAnnotations();
    for (const n of e) {
      if (n.hide(), a(this, it).isDeletedAnnotationElement(n.data.id) || t.has(n.data.id))
        continue;
      const i = this.deserialize(n);
      i && (this.addOrRebuild(i), i.enableEditing());
    }
  }
  disable() {
    var i;
    w(this, xa, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const s of a(this, Qe).values())
      if (s.disableEditing(), !!s.annotationElementId) {
        if (s.serialize() !== null) {
          t.set(s.annotationElementId, s);
          continue;
        } else
          e.set(s.annotationElementId, s);
        (i = this.getEditableAnnotation(s.annotationElementId)) == null || i.show(), s.remove();
      }
    if (a(this, Xn)) {
      const s = a(this, Xn).getEditableAnnotations();
      for (const o of s) {
        const {
          id: l
        } = o.data;
        if (a(this, it).isDeletedAnnotationElement(l))
          continue;
        let c = e.get(l);
        if (c) {
          c.resetAnnotationElement(o), c.show(!1), o.show();
          continue;
        }
        c = t.get(l), c && (a(this, it).addChangedExistingAnnotation(c), c.renderAnnotationElement(o), c.show(!1)), o.show();
      }
    }
    A(this, Ca, Cd).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: n
    } = this.div;
    for (const s of a(fn, ys).values())
      n.remove(`${s._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), w(this, xa, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = a(this, Xn)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    a(this, it).getActive() !== t && a(this, it).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    this.div.tabIndex = -1, (t = a(this, Fe)) != null && t.div && !a(this, Ii) && (w(this, Ii, A(this, vf, Vb).bind(this)), a(this, Fe).div.addEventListener("pointerdown", a(this, Ii)), a(this, Fe).div.classList.add("highlighting"));
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = a(this, Fe)) != null && t.div && a(this, Ii) && (a(this, Fe).div.removeEventListener("pointerdown", a(this, Ii)), w(this, Ii, null), a(this, Fe).div.classList.remove("highlighting"));
  }
  enableClick() {
    a(this, Li) || (w(this, Li, this.pointerdown.bind(this)), w(this, $r, this.pointerup.bind(this)), this.div.addEventListener("pointerdown", a(this, Li)), this.div.addEventListener("pointerup", a(this, $r)));
  }
  disableClick() {
    a(this, Li) && (this.div.removeEventListener("pointerdown", a(this, Li)), this.div.removeEventListener("pointerup", a(this, $r)), w(this, Li, null), w(this, $r, null));
  }
  attach(t) {
    a(this, Qe).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && a(this, it).isDeletedAnnotationElement(e) && a(this, it).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    a(this, Qe).delete(t.id), (e = a(this, Br)) == null || e.removePointerInTextLayer(t.contentDiv), !a(this, xa) && t.annotationElementId && a(this, it).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), a(this, it).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1, a(this, Sa) || this.addInkEditorIfNeeded(!1);
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (a(this, it).addDeletedAnnotationElement(t.annotationElementId), It.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), a(this, it).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(), a(this, it).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var n;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !a(this, Fi) && (t._focusEventsAllowed = !1, w(this, Fi, setTimeout(() => {
      w(this, Fi, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0
      }), e.focus());
    }, 0))), t._structTreeParentId = (n = a(this, Br)) == null ? void 0 : n.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t), n = () => {
      t.remove();
    };
    this.addCommands({
      cmd: e,
      undo: n,
      mustExec: !1
    });
  }
  getNextId() {
    return a(this, it).getId();
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = a(this, Th, Ng)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  pasteEditor(t, e) {
    a(this, it).updateToolbar(t), a(this, it).updateMode(t);
    const {
      offsetX: n,
      offsetY: i
    } = A(this, Rh, Bg).call(this), s = this.getNextId(), o = A(this, Ph, Og).call(this, {
      parent: this,
      id: s,
      x: n,
      y: i,
      uiManager: a(this, it),
      isCentered: !0,
      ...e
    });
    o && this.add(o);
  }
  deserialize(t) {
    var e;
    return ((e = a(fn, ys).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, a(this, it))) || null;
  }
  createAndAddNewEditor(t, e, n = {}) {
    const i = this.getNextId(), s = A(this, Ph, Og).call(this, {
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: a(this, it),
      isCentered: e,
      ...n
    });
    return s && this.add(s), s;
  }
  addNewEditor() {
    this.createAndAddNewEditor(A(this, Rh, Bg).call(this), !0);
  }
  setSelected(t) {
    a(this, it).setSelected(t);
  }
  toggleSelected(t) {
    a(this, it).toggleSelected(t);
  }
  isSelected(t) {
    return a(this, it).isSelected(t);
  }
  unselect(t) {
    a(this, it).unselect(t);
  }
  pointerup(t) {
    const {
      isMac: e
    } = je.platform;
    if (!(t.button !== 0 || t.ctrlKey && e) && t.target === this.div && a(this, ms)) {
      if (w(this, ms, !1), !a(this, Ea)) {
        w(this, Ea, !0);
        return;
      }
      if (a(this, it).getMode() === _t.STAMP) {
        a(this, it).unselectAll();
        return;
      }
      this.createAndAddNewEditor(t, !1);
    }
  }
  pointerdown(t) {
    if (a(this, it).getMode() === _t.HIGHLIGHT && this.enableTextSelection(), a(this, ms)) {
      w(this, ms, !1);
      return;
    }
    const {
      isMac: e
    } = je.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    w(this, ms, !0);
    const n = a(this, it).getActive();
    w(this, Ea, !n || n.isEmpty());
  }
  findNewParent(t, e, n) {
    const i = a(this, it).findParent(e, n);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  destroy() {
    var t, e;
    ((t = a(this, it).getActive()) == null ? void 0 : t.parent) === this && (a(this, it).commitOrRemove(), a(this, it).setActiveEditor(null)), a(this, Fi) && (clearTimeout(a(this, Fi)), w(this, Fi, null));
    for (const n of a(this, Qe).values())
      (e = a(this, Br)) == null || e.removePointerInTextLayer(n.contentDiv), n.setParent(null), n.isAttachedToDOM = !1, n.div.remove();
    this.div = null, a(this, Qe).clear(), a(this, it).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, jr(this.div, t);
    for (const e of a(this, it).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    a(this, it).commitOrRemove(), A(this, Ca, Cd).call(this);
    const e = this.viewport.rotation, n = t.rotation;
    if (this.viewport = t, jr(this.div, {
      rotation: n
    }), e !== n)
      for (const i of a(this, Qe).values())
        i.rotate(n);
    this.addInkEditorIfNeeded(!1);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e
    } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return a(this, it).viewParameters.realScale;
  }
};
Br = new WeakMap(), Ea = new WeakMap(), Xn = new WeakMap(), $r = new WeakMap(), Li = new WeakMap(), Ii = new WeakMap(), Fi = new WeakMap(), Qe = new WeakMap(), ms = new WeakMap(), Sa = new WeakMap(), xa = new WeakMap(), Fe = new WeakMap(), it = new WeakMap(), ys = new WeakMap(), vf = new WeakSet(), Vb = function(t) {
  if (a(this, it).unselectAll(), t.target === a(this, Fe).div) {
    const {
      isMac: e
    } = je.platform;
    if (t.button !== 0 || t.ctrlKey && e)
      return;
    a(this, it).showAllEditors("highlight", !0, !0), a(this, Fe).div.classList.add("free"), Nd.startHighlighting(this, a(this, it).direction === "ltr", t), a(this, Fe).div.addEventListener("pointerup", () => {
      a(this, Fe).div.classList.remove("free");
    }, {
      once: !0
    }), t.preventDefault();
  }
}, Th = new WeakSet(), Ng = function() {
  return a(fn, ys).get(a(this, it).getMode());
}, Ph = new WeakSet(), Og = function(t) {
  const e = a(this, Th, Ng);
  return e ? new e.prototype.constructor(t) : null;
}, Rh = new WeakSet(), Bg = function() {
  const {
    x: t,
    y: e,
    width: n,
    height: i
  } = this.div.getBoundingClientRect(), s = Math.max(0, t), o = Math.max(0, e), l = Math.min(window.innerWidth, t + n), c = Math.min(window.innerHeight, e + i), d = (s + l) / 2 - t, h = (o + c) / 2 - e, [f, g] = this.viewport.rotation % 180 === 0 ? [d, h] : [h, d];
  return {
    offsetX: f,
    offsetY: g
  };
}, Ca = new WeakSet(), Cd = function() {
  w(this, Sa, !0);
  for (const t of a(this, Qe).values())
    t.isEmpty() && t.remove();
  w(this, Sa, !1);
}, ht(fn, "_initialized", !1), m(fn, ys, new Map([pg, xg, Ig, Nd].map((t) => [t._editorType, t])));
let Dg = fn;
var Yn, kh, oe, bs, Lh, Hg, Ih, Ug, wf, Wb;
const ge = class ge {
  constructor({
    pageIndex: t
  }) {
    m(this, Ih);
    m(this, wf);
    m(this, Yn, null);
    m(this, kh, 0);
    m(this, oe, /* @__PURE__ */ new Map());
    m(this, bs, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!a(this, Yn)) {
      w(this, Yn, t);
      return;
    }
    if (a(this, Yn) !== t) {
      if (a(this, oe).size > 0)
        for (const e of a(this, oe).values())
          e.remove(), t.append(e);
      w(this, Yn, t);
    }
  }
  static get _svgFactory() {
    return xt(this, "_svgFactory", new sm());
  }
  highlight(t, e, n, i = !1) {
    const s = Ve(this, kh)._++, o = A(this, Ih, Ug).call(this, t.box);
    o.classList.add("highlight"), t.free && o.classList.add("free");
    const l = ge._svgFactory.createElement("defs");
    o.append(l);
    const c = ge._svgFactory.createElement("path");
    l.append(c);
    const d = `path_p${this.pageIndex}_${s}`;
    c.setAttribute("id", d), c.setAttribute("d", t.toSVGPath()), i && a(this, bs).set(s, c);
    const h = A(this, wf, Wb).call(this, l, d), f = ge._svgFactory.createElement("use");
    return o.append(f), o.setAttribute("fill", e), o.setAttribute("fill-opacity", n), f.setAttribute("href", `#${d}`), a(this, oe).set(s, o), {
      id: s,
      clipPathId: `url(#${h})`
    };
  }
  highlightOutline(t) {
    const e = Ve(this, kh)._++, n = A(this, Ih, Ug).call(this, t.box);
    n.classList.add("highlightOutline");
    const i = ge._svgFactory.createElement("defs");
    n.append(i);
    const s = ge._svgFactory.createElement("path");
    i.append(s);
    const o = `path_p${this.pageIndex}_${e}`;
    s.setAttribute("id", o), s.setAttribute("d", t.toSVGPath()), s.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (t.free) {
      n.classList.add("free");
      const h = ge._svgFactory.createElement("mask");
      i.append(h), l = `mask_p${this.pageIndex}_${e}`, h.setAttribute("id", l), h.setAttribute("maskUnits", "objectBoundingBox");
      const f = ge._svgFactory.createElement("rect");
      h.append(f), f.setAttribute("width", "1"), f.setAttribute("height", "1"), f.setAttribute("fill", "white");
      const g = ge._svgFactory.createElement("use");
      h.append(g), g.setAttribute("href", `#${o}`), g.setAttribute("stroke", "none"), g.setAttribute("fill", "black"), g.setAttribute("fill-rule", "nonzero"), g.classList.add("mask");
    }
    const c = ge._svgFactory.createElement("use");
    n.append(c), c.setAttribute("href", `#${o}`), l && c.setAttribute("mask", `url(#${l})`);
    const d = c.cloneNode();
    return n.append(d), c.classList.add("mainOutline"), d.classList.add("secondaryOutline"), a(this, oe).set(e, n), e;
  }
  finalizeLine(t, e) {
    const n = a(this, bs).get(t);
    a(this, bs).delete(t), this.updateBox(t, e.box), n.setAttribute("d", e.toSVGPath());
  }
  updateLine(t, e) {
    a(this, oe).get(t).firstChild.firstChild.setAttribute("d", e.toSVGPath());
  }
  removeFreeHighlight(t) {
    this.remove(t), a(this, bs).delete(t);
  }
  updatePath(t, e) {
    a(this, bs).get(t).setAttribute("d", e.toSVGPath());
  }
  updateBox(t, e) {
    var n;
    A(n = ge, Lh, Hg).call(n, a(this, oe).get(t), e);
  }
  show(t, e) {
    a(this, oe).get(t).classList.toggle("hidden", !e);
  }
  rotate(t, e) {
    a(this, oe).get(t).setAttribute("data-main-rotation", e);
  }
  changeColor(t, e) {
    a(this, oe).get(t).setAttribute("fill", e);
  }
  changeOpacity(t, e) {
    a(this, oe).get(t).setAttribute("fill-opacity", e);
  }
  addClass(t, e) {
    a(this, oe).get(t).classList.add(e);
  }
  removeClass(t, e) {
    a(this, oe).get(t).classList.remove(e);
  }
  remove(t) {
    a(this, Yn) !== null && (a(this, oe).get(t).remove(), a(this, oe).delete(t));
  }
  destroy() {
    w(this, Yn, null);
    for (const t of a(this, oe).values())
      t.remove();
    a(this, oe).clear();
  }
};
Yn = new WeakMap(), kh = new WeakMap(), oe = new WeakMap(), bs = new WeakMap(), Lh = new WeakSet(), Hg = function(t, {
  x: e = 0,
  y: n = 0,
  width: i = 1,
  height: s = 1
} = {}) {
  const {
    style: o
  } = t;
  o.top = `${100 * n}%`, o.left = `${100 * e}%`, o.width = `${100 * i}%`, o.height = `${100 * s}%`;
}, Ih = new WeakSet(), Ug = function(t) {
  var n;
  const e = ge._svgFactory.create(1, 1, !0);
  return a(this, Yn).append(e), e.setAttribute("aria-hidden", !0), A(n = ge, Lh, Hg).call(n, e, t), e;
}, wf = new WeakSet(), Wb = function(t, e) {
  const n = ge._svgFactory.createElement("clipPath");
  t.append(n);
  const i = `clip_${e}`;
  n.setAttribute("id", i), n.setAttribute("clipPathUnits", "objectBoundingBox");
  const s = ge._svgFactory.createElement("use");
  return n.append(s), s.setAttribute("href", `#${e}`), s.classList.add("clip"), i;
}, m(ge, Lh);
let $g = ge;
var $S = st.AbortException, HS = st.AnnotationEditorLayer, US = st.AnnotationEditorParamsType, zS = st.AnnotationEditorType, jS = st.AnnotationEditorUIManager, qb = st.AnnotationLayer, Xb = st.AnnotationMode, GS = st.CMapCompressionType, VS = st.ColorPicker, WS = st.DOMSVGFactory, qS = st.DrawLayer, XS = st.FeatureTest, um = st.GlobalWorkerOptions, YS = st.ImageKind, KS = st.InvalidPDFException, ZS = st.MissingPDFException, JS = st.OPS, QS = st.Outliner, tx = st.PDFDataRangeTransport, ex = st.PDFDateString, nx = st.PDFWorker, ix = st.PasswordResponses, sx = st.PermissionFlag, rx = st.PixelsPerInch, ox = st.RenderingCancelledException, Yb = st.TextLayer, ax = st.UnexpectedResponseException, lx = st.Util, cx = st.VerbosityLevel, hx = st.XfaLayer, dx = st.build, ux = st.createValidAbsoluteUrl, fx = st.fetchData, Kb = st.getDocument, px = st.getFilenameFromUrl, gx = st.getPdfFilenameFromUrl, mx = st.getXfaPageViewport, yx = st.isDataScheme, bx = st.isPdfFile, vx = st.noContextMenu, wx = st.normalizeUnicode, Ax = st.renderTextLayer, _x = st.setLayerDimensions, Ex = st.shadow, Sx = st.updateTextLayer, Zb = st.version;
const xx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbortException: $S,
  AnnotationEditorLayer: HS,
  AnnotationEditorParamsType: US,
  AnnotationEditorType: zS,
  AnnotationEditorUIManager: jS,
  AnnotationLayer: qb,
  AnnotationMode: Xb,
  CMapCompressionType: GS,
  ColorPicker: VS,
  DOMSVGFactory: WS,
  DrawLayer: qS,
  FeatureTest: XS,
  GlobalWorkerOptions: um,
  ImageKind: YS,
  InvalidPDFException: KS,
  MissingPDFException: ZS,
  OPS: JS,
  Outliner: QS,
  PDFDataRangeTransport: tx,
  PDFDateString: ex,
  PDFWorker: nx,
  PasswordResponses: ix,
  PermissionFlag: sx,
  PixelsPerInch: rx,
  RenderingCancelledException: ox,
  TextLayer: Yb,
  UnexpectedResponseException: ax,
  Util: lx,
  VerbosityLevel: cx,
  XfaLayer: hx,
  build: dx,
  createValidAbsoluteUrl: ux,
  fetchData: fx,
  getDocument: Kb,
  getFilenameFromUrl: px,
  getPdfFilenameFromUrl: gx,
  getXfaPageViewport: mx,
  isDataScheme: yx,
  isPdfFile: bx,
  noContextMenu: vx,
  normalizeUnicode: wx,
  renderTextLayer: Ax,
  setLayerDimensions: _x,
  shadow: Ex,
  updateTextLayer: Sx,
  version: Zb
}, Symbol.toStringTag, { value: "Module" }));
var he = function(r, t, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = t.length, s; n < i; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return r.concat(s || Array.prototype.slice.call(t));
}, Cx = ["onCopy", "onCut", "onPaste"], Tx = [
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate"
], Px = ["onFocus", "onBlur"], Rx = ["onInput", "onInvalid", "onReset", "onSubmit"], kx = ["onLoad", "onError"], Lx = ["onKeyDown", "onKeyPress", "onKeyUp"], Ix = [
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onError",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting"
], Fx = [
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp"
], Mx = [
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop"
], Dx = ["onSelect"], Nx = ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"], Ox = [
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut"
], Bx = ["onScroll"], $x = ["onWheel"], Hx = [
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration"
], Ux = ["onTransitionEnd"], zx = ["onToggle"], jx = ["onChange"], Gx = he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he([], Cx, !0), Tx, !0), Px, !0), Rx, !0), kx, !0), Lx, !0), Ix, !0), Fx, !0), Mx, !0), Dx, !0), Nx, !0), Ox, !0), Bx, !0), $x, !0), Hx, !0), Ux, !0), jx, !0), zx, !0);
function Jb(r, t) {
  var e = {};
  return Gx.forEach(function(n) {
    var i = r[n];
    i && (t ? e[n] = function(s) {
      return i(s, t(n));
    } : e[n] = i);
  }), e;
}
function Oh(r) {
  var t = !1, e = new Promise(function(n, i) {
    r.then(function(s) {
      return !t && n(s);
    }).catch(function(s) {
      return !t && i(s);
    });
  });
  return {
    promise: e,
    cancel: function() {
      t = !0;
    }
  };
}
function Qb(r) {
  var t, e, n = "";
  if (typeof r == "string" || typeof r == "number")
    n += r;
  else if (typeof r == "object")
    if (Array.isArray(r))
      for (t = 0; t < r.length; t++)
        r[t] && (e = Qb(r[t])) && (n && (n += " "), n += e);
    else
      for (t in r)
        r[t] && (n && (n += " "), n += t);
  return n;
}
function jf() {
  for (var r, t, e = 0, n = ""; e < arguments.length; )
    (r = arguments[e++]) && (t = Qb(r)) && (n && (n += " "), n += t);
  return n;
}
var Vx = dt.env.NODE_ENV === "production", cp = "Invariant failed";
function $t(r, t) {
  if (!r) {
    if (Vx)
      throw new Error(cp);
    var e = typeof t == "function" ? t() : t, n = e ? "".concat(cp, ": ").concat(e) : cp;
    throw new Error(n);
  }
}
var Wx = dt.env.NODE_ENV !== "production", tv = function() {
};
if (Wx) {
  var qx = function(t, e) {
    var n = arguments.length;
    e = new Array(n > 1 ? n - 1 : 0);
    for (var i = 1; i < n; i++)
      e[i - 1] = arguments[i];
    var s = 0, o = "Warning: " + t.replace(/%s/g, function() {
      return e[s++];
    });
    typeof console < "u" && console.error(o);
    try {
      throw new Error(o);
    } catch {
    }
  };
  tv = function(r, t, e) {
    var n = arguments.length;
    e = new Array(n > 2 ? n - 2 : 0);
    for (var i = 2; i < n; i++)
      e[i - 2] = arguments[i];
    if (t === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    r || qx.apply(null, [t].concat(e));
  };
}
var Xx = tv;
const Ce = /* @__PURE__ */ P0(Xx);
var s0 = Object.prototype.hasOwnProperty;
function r0(r, t, e) {
  for (e of r.keys())
    if (lo(e, t))
      return e;
}
function lo(r, t) {
  var e, n, i;
  if (r === t)
    return !0;
  if (r && t && (e = r.constructor) === t.constructor) {
    if (e === Date)
      return r.getTime() === t.getTime();
    if (e === RegExp)
      return r.toString() === t.toString();
    if (e === Array) {
      if ((n = r.length) === t.length)
        for (; n-- && lo(r[n], t[n]); )
          ;
      return n === -1;
    }
    if (e === Set) {
      if (r.size !== t.size)
        return !1;
      for (n of r)
        if (i = n, i && typeof i == "object" && (i = r0(t, i), !i) || !t.has(i))
          return !1;
      return !0;
    }
    if (e === Map) {
      if (r.size !== t.size)
        return !1;
      for (n of r)
        if (i = n[0], i && typeof i == "object" && (i = r0(t, i), !i) || !lo(n[1], t.get(i)))
          return !1;
      return !0;
    }
    if (e === ArrayBuffer)
      r = new Uint8Array(r), t = new Uint8Array(t);
    else if (e === DataView) {
      if ((n = r.byteLength) === t.byteLength)
        for (; n-- && r.getInt8(n) === t.getInt8(n); )
          ;
      return n === -1;
    }
    if (ArrayBuffer.isView(r)) {
      if ((n = r.byteLength) === t.byteLength)
        for (; n-- && r[n] === t[n]; )
          ;
      return n === -1;
    }
    if (!e || typeof r == "object") {
      n = 0;
      for (e in r)
        if (s0.call(r, e) && ++n && !s0.call(t, e) || !(e in t) || !lo(r[e], t[e]))
          return !1;
      return Object.keys(t).length === n;
    }
  }
  return r !== r && t !== t;
}
const ev = Af(null);
function co({ children: r, type: t }) {
  return j("div", { className: `react-pdf__message react-pdf__message--${t}`, children: r });
}
const Yx = "noopener noreferrer nofollow";
class Kx {
  constructor() {
    this.externalLinkEnabled = !0, this.externalLinkRel = void 0, this.externalLinkTarget = void 0, this.isInPresentationMode = !1, this.pdfDocument = void 0, this.pdfViewer = void 0;
  }
  setDocument(t) {
    this.pdfDocument = t;
  }
  setViewer(t) {
    this.pdfViewer = t;
  }
  setExternalLinkRel(t) {
    this.externalLinkRel = t;
  }
  setExternalLinkTarget(t) {
    this.externalLinkTarget = t;
  }
  setHistory() {
  }
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }
  get page() {
    return $t(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber || 0;
  }
  set page(t) {
    $t(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber = t;
  }
  // eslint-disable-next-line @typescript-eslint/class-literal-property-style
  get rotation() {
    return 0;
  }
  set rotation(t) {
  }
  goToDestination(t) {
    return new Promise((e) => {
      $t(this.pdfDocument, "PDF document not loaded."), $t(t, "Destination is not specified."), typeof t == "string" ? this.pdfDocument.getDestination(t).then(e) : Array.isArray(t) ? e(t) : t.then(e);
    }).then((e) => {
      $t(Array.isArray(e), `"${e}" is not a valid destination array.`);
      const n = e[0];
      new Promise((i) => {
        $t(this.pdfDocument, "PDF document not loaded."), n instanceof Object ? this.pdfDocument.getPageIndex(n).then((s) => {
          i(s);
        }).catch(() => {
          $t(!1, `"${n}" is not a valid page reference.`);
        }) : typeof n == "number" ? i(n) : $t(!1, `"${n}" is not a valid destination reference.`);
      }).then((i) => {
        const s = i + 1;
        $t(this.pdfViewer, "PDF viewer is not initialized."), $t(s >= 1 && s <= this.pagesCount, `"${s}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
          dest: e,
          pageIndex: i,
          pageNumber: s
        });
      });
    });
  }
  navigateTo(t) {
    this.goToDestination(t);
  }
  goToPage(t) {
    const e = t - 1;
    $t(this.pdfViewer, "PDF viewer is not initialized."), $t(t >= 1 && t <= this.pagesCount, `"${t}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
      pageIndex: e,
      pageNumber: t
    });
  }
  addLinkAttributes(t, e, n) {
    t.href = e, t.rel = this.externalLinkRel || Yx, t.target = n ? "_blank" : this.externalLinkTarget || "";
  }
  getDestinationHash() {
    return "#";
  }
  getAnchorUrl() {
    return "#";
  }
  setHash() {
  }
  executeNamedAction() {
  }
  cachePageRef() {
  }
  isPageVisible() {
    return !0;
  }
  isPageCached() {
    return !0;
  }
  executeSetOCGState() {
  }
}
const o0 = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
}, Gf = typeof document < "u", nv = Gf && window.location.protocol === "file:";
function Zx(r) {
  return typeof r < "u";
}
function Es(r) {
  return Zx(r) && r !== null;
}
function Jx(r) {
  return typeof r == "string";
}
function Qx(r) {
  return r instanceof ArrayBuffer;
}
function tC(r) {
  return $t(Gf, "isBlob can only be used in a browser environment"), r instanceof Blob;
}
function zg(r) {
  return Jx(r) && /^data:/.test(r);
}
function a0(r) {
  $t(zg(r), "Invalid data URI.");
  const [t = "", e = ""] = r.split(",");
  return t.split(";").indexOf("base64") !== -1 ? atob(e) : unescape(e);
}
function eC() {
  return Gf && window.devicePixelRatio || 1;
}
const iv = "On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";
function l0() {
  Ce(!nv, `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${iv}`);
}
function nC() {
  Ce(!nv, `Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${iv}`);
}
function Wr(r) {
  r && r.cancel && r.cancel();
}
function jg(r, t) {
  return Object.defineProperty(r, "width", {
    get() {
      return this.view[2] * t;
    },
    configurable: !0
  }), Object.defineProperty(r, "height", {
    get() {
      return this.view[3] * t;
    },
    configurable: !0
  }), Object.defineProperty(r, "originalWidth", {
    get() {
      return this.view[2];
    },
    configurable: !0
  }), Object.defineProperty(r, "originalHeight", {
    get() {
      return this.view[3];
    },
    configurable: !0
  }), r;
}
function iC(r) {
  return r.name === "RenderingCancelledException";
}
function sC(r) {
  return new Promise((t, e) => {
    const n = new FileReader();
    n.onload = () => {
      if (!n.result)
        return e(new Error("Error while reading a file."));
      t(n.result);
    }, n.onerror = (i) => {
      if (!i.target)
        return e(new Error("Error while reading a file."));
      const { error: s } = i.target;
      if (!s)
        return e(new Error("Error while reading a file."));
      switch (s.code) {
        case s.NOT_FOUND_ERR:
          return e(new Error("Error while reading a file: File not found."));
        case s.SECURITY_ERR:
          return e(new Error("Error while reading a file: Security error."));
        case s.ABORT_ERR:
          return e(new Error("Error while reading a file: Aborted."));
        default:
          return e(new Error("Error while reading a file."));
      }
    }, n.readAsArrayBuffer(r);
  });
}
function rC(r, t) {
  switch (t.type) {
    case "RESOLVE":
      return { value: t.value, error: void 0 };
    case "REJECT":
      return { value: !1, error: t.error };
    case "RESET":
      return { value: void 0, error: void 0 };
    default:
      return r;
  }
}
function Fa() {
  return Gg(rC, { value: void 0, error: void 0 });
}
var oC = function(r, t, e, n) {
  function i(s) {
    return s instanceof e ? s : new e(function(o) {
      o(s);
    });
  }
  return new (e || (e = Promise))(function(s, o) {
    function l(h) {
      try {
        d(n.next(h));
      } catch (f) {
        o(f);
      }
    }
    function c(h) {
      try {
        d(n.throw(h));
      } catch (f) {
        o(f);
      }
    }
    function d(h) {
      h.done ? s(h.value) : i(h.value).then(l, c);
    }
    d((n = n.apply(r, t || [])).next());
  });
}, c0 = function(r, t) {
  var e = {};
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (e[n[i]] = r[n[i]]);
  return e;
};
const { PDFDataRangeTransport: aC } = xx, lC = (r, t) => {
  switch (t) {
    case o0.NEED_PASSWORD: {
      const e = prompt("Enter the password to open this PDF file.");
      r(e);
      break;
    }
    case o0.INCORRECT_PASSWORD: {
      const e = prompt("Invalid password. Please try again.");
      r(e);
      break;
    }
  }
};
function h0(r) {
  return typeof r == "object" && r !== null && ("data" in r || "range" in r || "url" in r);
}
const cC = w0(function(t, e) {
  var { children: n, className: i, error: s = "Failed to load PDF file.", externalLinkRel: o, externalLinkTarget: l, file: c, inputRef: d, imageResourcesPath: h, loading: f = "Loading PDF…", noData: g = "No PDF file specified.", onItemClick: y, onLoadError: b, onLoadProgress: _, onLoadSuccess: x, onPassword: E = lC, onSourceError: P, onSourceSuccess: k, options: L, renderMode: F, rotate: I } = t, M = c0(t, ["children", "className", "error", "externalLinkRel", "externalLinkTarget", "file", "inputRef", "imageResourcesPath", "loading", "noData", "onItemClick", "onLoadError", "onLoadProgress", "onLoadSuccess", "onPassword", "onSourceError", "onSourceSuccess", "options", "renderMode", "rotate"]);
  const [C, T] = Fa(), { value: N, error: D } = C, [H, U] = Fa(), { value: G, error: Y } = H, Z = Cn(new Kx()), B = Cn([]), V = Cn(void 0), W = Cn(void 0);
  c && c !== V.current && h0(c) && (Ce(!lo(c, V.current), `File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.`), V.current = c), L && L !== W.current && (Ce(!lo(L, W.current), `Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.`), W.current = L);
  const bt = Cn({
    // Handling jumping to internal links target
    scrollPageIntoView: (X) => {
      const { dest: mt, pageNumber: Ct, pageIndex: Ht = Ct - 1 } = X;
      if (y) {
        y({ dest: mt, pageIndex: Ht, pageNumber: Ct });
        return;
      }
      const Kt = B.current[Ht];
      if (Kt) {
        Kt.scrollIntoView();
        return;
      }
      Ce(!1, `An internal link leading to page ${Ct} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`);
    }
  });
  A0(e, () => ({
    linkService: Z,
    pages: B,
    viewer: bt
  }), []);
  function ut() {
    k && k();
  }
  function z() {
    D && (Ce(!1, D.toString()), P && P(D));
  }
  function nt() {
    T({ type: "RESET" });
  }
  Pt(nt, [c, T]);
  const tt = cl(() => oC(this, void 0, void 0, function* () {
    if (!c)
      return null;
    if (typeof c == "string")
      return zg(c) ? { data: a0(c) } : (l0(), { url: c });
    if (c instanceof aC)
      return { range: c };
    if (Qx(c))
      return { data: c };
    if (Gf && tC(c))
      return { data: yield sC(c) };
    if ($t(typeof c == "object", "Invalid parameter in file, need either Uint8Array, string or a parameter object"), $t(h0(c), "Invalid parameter object: need either .data, .range or .url"), "url" in c && typeof c.url == "string") {
      if (zg(c.url)) {
        const { url: X } = c, mt = c0(c, ["url"]), Ct = a0(X);
        return Object.assign({ data: Ct }, mt);
      }
      l0();
    }
    return c;
  }), [c]);
  Pt(() => {
    const X = Oh(tt());
    return X.promise.then((mt) => {
      T({ type: "RESOLVE", value: mt });
    }).catch((mt) => {
      T({ type: "REJECT", error: mt });
    }), () => {
      Wr(X);
    };
  }, [tt, T]), Pt(
    () => {
      if (!(typeof N > "u")) {
        if (N === !1) {
          z();
          return;
        }
        ut();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [N]
  );
  function et() {
    G && (x && x(G), B.current = new Array(G.numPages), Z.current.setDocument(G));
  }
  function lt() {
    Y && (Ce(!1, Y.toString()), b && b(Y));
  }
  function K() {
    U({ type: "RESET" });
  }
  Pt(K, [U, N]);
  function gt() {
    if (!N)
      return;
    const X = Object.assign(Object.assign({}, N), L), mt = Kb(X);
    _ && (mt.onProgress = _), E && (mt.onPassword = E);
    const Ct = mt;
    return Ct.promise.then((Ht) => {
      U({ type: "RESOLVE", value: Ht });
    }).catch((Ht) => {
      Ct.destroyed || U({ type: "REJECT", error: Ht });
    }), () => {
      Ct.destroy();
    };
  }
  Pt(
    gt,
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [L, U, N]
  ), Pt(
    () => {
      if (!(typeof G > "u")) {
        if (G === !1) {
          lt();
          return;
        }
        et();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [G]
  );
  function q() {
    Z.current.setViewer(bt.current), Z.current.setExternalLinkRel(o), Z.current.setExternalLinkTarget(l);
  }
  Pt(q, [o, l]);
  function J(X, mt) {
    B.current[X] = mt;
  }
  function ct(X) {
    delete B.current[X];
  }
  const ft = dn(() => ({
    imageResourcesPath: h,
    linkService: Z.current,
    onItemClick: y,
    pdf: G,
    registerPage: J,
    renderMode: F,
    rotate: I,
    unregisterPage: ct
  }), [h, y, G, F, I]), rt = dn(() => Jb(M, () => G), [M, G]);
  function Et() {
    return j(ev.Provider, { value: ft, children: n });
  }
  function vt() {
    return c ? G == null ? j(co, { type: "loading", children: typeof f == "function" ? f() : f }) : G === !1 ? j(co, { type: "error", children: typeof s == "function" ? s() : s }) : Et() : j(co, { type: "no-data", children: typeof g == "function" ? g() : g });
  }
  return j("div", Object.assign({
    className: jf("react-pdf__Document", i),
    // Assertion is needed for React 18 compatibility
    ref: d,
    style: {
      "--scale-factor": "1"
    }
  }, rt, { children: vt() }));
});
function sv() {
  return $i(ev);
}
function rv() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  var e = r.filter(Boolean);
  if (e.length <= 1) {
    var n = e[0];
    return n || null;
  }
  return function(s) {
    e.forEach(function(o) {
      typeof o == "function" ? o(s) : o && (o.current = s);
    });
  };
}
const ov = Af(null), av = {
  // Document level structure types
  Document: null,
  // There's a "document" role, but it doesn't make sense here.
  DocumentFragment: null,
  // Grouping level structure types
  Part: "group",
  Sect: "group",
  // XXX: There's a "section" role, but it's abstract.
  Div: "group",
  Aside: "note",
  NonStruct: "none",
  // Block level structure types
  P: null,
  // H<n>,
  H: "heading",
  Title: null,
  FENote: "note",
  // Sub-block level structure type
  Sub: "group",
  // General inline level structure types
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: "link",
  Annot: "note",
  Form: "form",
  // Ruby and Warichu structure types
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  // List standard structure types
  L: "list",
  LI: "listitem",
  LBody: null,
  // Table standard structure types
  Table: "table",
  TR: "row",
  TH: "columnheader",
  TD: "cell",
  THead: "columnheader",
  TBody: null,
  TFoot: null,
  // Standard structure type Caption
  Caption: null,
  // Standard structure type Figure
  Figure: "figure",
  // Standard structure type Formula
  Formula: null,
  // standard structure type Artifact
  Artifact: null
}, hC = /^H(\d+)$/;
function dC(r) {
  return r in av;
}
function Vf(r) {
  return "children" in r;
}
function lv(r) {
  return Vf(r) ? r.children.length === 1 && 0 in r.children && "id" in r.children[0] : !1;
}
function uC(r) {
  const t = {};
  if (Vf(r)) {
    const { role: e } = r, n = e.match(hC);
    if (n)
      t.role = "heading", t["aria-level"] = Number(n[1]);
    else if (dC(e)) {
      const i = av[e];
      i && (t.role = i);
    }
  }
  return t;
}
function cv(r) {
  const t = {};
  if (Vf(r)) {
    if (r.alt !== void 0 && (t["aria-label"] = r.alt), r.lang !== void 0 && (t.lang = r.lang), lv(r)) {
      const [e] = r.children;
      if (e) {
        const n = cv(e);
        return Object.assign(Object.assign({}, t), n);
      }
    }
  } else
    "id" in r && (t["aria-owns"] = r.id);
  return t;
}
function fC(r) {
  return r ? Object.assign(Object.assign({}, uC(r)), cv(r)) : null;
}
function hv({ className: r, node: t }) {
  const e = dn(() => fC(t), [t]), n = dn(() => !Vf(t) || lv(t) ? null : t.children.map((i, s) => (
    // eslint-disable-next-line react/no-array-index-key
    j(hv, { node: i }, s)
  )), [t]);
  return j("span", Object.assign({ className: r }, e, { children: n }));
}
function Wf() {
  return $i(ov);
}
function pC() {
  const r = Wf();
  $t(r, "Unable to find Page context.");
  const { onGetStructTreeError: t, onGetStructTreeSuccess: e } = r, [n, i] = Fa(), { value: s, error: o } = n, { customTextRenderer: l, page: c } = r;
  function d() {
    s && e && e(s);
  }
  function h() {
    o && (Ce(!1, o.toString()), t && t(o));
  }
  function f() {
    i({ type: "RESET" });
  }
  Pt(f, [i, c]);
  function g() {
    if (l || !c)
      return;
    const y = Oh(c.getStructTree()), b = y;
    return y.promise.then((_) => {
      i({ type: "RESOLVE", value: _ });
    }).catch((_) => {
      i({ type: "REJECT", error: _ });
    }), () => Wr(b);
  }
  return Pt(g, [l, c, i]), Pt(
    () => {
      if (s !== void 0) {
        if (s === !1) {
          h();
          return;
        }
        d();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s]
  ), s ? j(hv, { className: "react-pdf__Page__structTree structTree", node: s }) : null;
}
const d0 = Xb;
function gC(r) {
  const t = Wf();
  $t(t, "Unable to find Page context.");
  const e = Object.assign(Object.assign({}, t), r), { _className: n, canvasBackground: i, devicePixelRatio: s = eC(), onRenderError: o, onRenderSuccess: l, page: c, renderForms: d, renderTextLayer: h, rotate: f, scale: g } = e, { canvasRef: y } = r;
  $t(c, "Attempted to render page canvas, but no page was specified.");
  const b = Cn(null);
  function _() {
    c && l && l(jg(c, g));
  }
  function x(F) {
    iC(F) || (Ce(!1, F.toString()), o && o(F));
  }
  const E = dn(() => c.getViewport({ scale: g * s, rotation: f }), [s, c, f, g]), P = dn(() => c.getViewport({ scale: g, rotation: f }), [c, f, g]);
  function k() {
    if (!c)
      return;
    c.cleanup();
    const { current: F } = b;
    if (!F)
      return;
    F.width = E.width, F.height = E.height, F.style.width = `${Math.floor(P.width)}px`, F.style.height = `${Math.floor(P.height)}px`, F.style.visibility = "hidden";
    const I = {
      annotationMode: d ? d0.ENABLE_FORMS : d0.ENABLE,
      canvasContext: F.getContext("2d", { alpha: !1 }),
      viewport: E
    };
    i && (I.background = i);
    const M = c.render(I), C = M;
    return M.promise.then(() => {
      F.style.visibility = "", _();
    }).catch(x), () => Wr(C);
  }
  Pt(
    k,
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      i,
      b,
      s,
      c,
      d,
      E,
      P
    ]
  );
  const L = cl(() => {
    const { current: F } = b;
    F && (F.width = 0, F.height = 0);
  }, [b]);
  return Pt(() => L, [L]), j("canvas", { className: `${n}__canvas`, dir: "ltr", ref: rv(y, b), style: {
    display: "block",
    userSelect: "none"
  }, children: h ? j(pC, {}) : null });
}
function mC(r) {
  return "str" in r;
}
function yC() {
  const r = Wf();
  $t(r, "Unable to find Page context.");
  const { customTextRenderer: t, onGetTextError: e, onGetTextSuccess: n, onRenderTextLayerError: i, onRenderTextLayerSuccess: s, page: o, pageIndex: l, pageNumber: c, rotate: d, scale: h } = r;
  $t(o, "Attempted to load page text content, but no page was specified.");
  const [f, g] = Fa(), { value: y, error: b } = f, _ = Cn(null), x = Cn(void 0);
  Ce(parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"), 10) === 1, "TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer");
  function E() {
    y && n && n(y);
  }
  function P() {
    b && (Ce(!1, b.toString()), e && e(b));
  }
  function k() {
    g({ type: "RESET" });
  }
  Pt(k, [o, g]);
  function L() {
    if (!o)
      return;
    const D = Oh(o.getTextContent()), H = D;
    return D.promise.then((U) => {
      g({ type: "RESOLVE", value: U });
    }).catch((U) => {
      g({ type: "REJECT", error: U });
    }), () => Wr(H);
  }
  Pt(L, [o, g]), Pt(
    () => {
      if (y !== void 0) {
        if (y === !1) {
          P();
          return;
        }
        E();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y]
  );
  const F = cl(() => {
    s && s();
  }, [s]), I = cl((D) => {
    Ce(!1, D.toString()), i && i(D);
  }, [i]);
  function M() {
    const D = x.current;
    D && D.classList.add("active");
  }
  function C() {
    const D = x.current;
    D && D.classList.remove("active");
  }
  const T = dn(() => o.getViewport({ scale: h, rotation: d }), [o, d, h]);
  function N() {
    if (!o || !y)
      return;
    const { current: D } = _;
    if (!D)
      return;
    D.innerHTML = "";
    const H = o.streamTextContent({ includeMarkedContent: !0 }), U = {
      container: D,
      textContentSource: H,
      viewport: T
    }, G = new Yb(U), Y = G;
    return G.render().then(() => {
      const Z = document.createElement("div");
      Z.className = "endOfContent", D.append(Z), x.current = Z;
      const B = D.querySelectorAll('[role="presentation"]');
      if (t) {
        let V = 0;
        y.items.forEach((W, bt) => {
          if (!mC(W))
            return;
          const ut = B[V];
          if (!ut)
            return;
          const z = t(Object.assign({
            pageIndex: l,
            pageNumber: c,
            itemIndex: bt
          }, W));
          ut.innerHTML = z, V += W.str && W.hasEOL ? 2 : 1;
        });
      }
      F();
    }).catch(I), () => Wr(Y);
  }
  return Iv(N, [
    t,
    I,
    F,
    o,
    l,
    c,
    y,
    T
  ]), // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  j("div", { className: jf("react-pdf__Page__textContent", "textLayer"), onMouseUp: C, onMouseDown: M, ref: _ });
}
function bC() {
  const r = sv(), t = Wf();
  $t(t, "Unable to find Page context.");
  const e = Object.assign(Object.assign({}, r), t), { imageResourcesPath: n, linkService: i, onGetAnnotationsError: s, onGetAnnotationsSuccess: o, onRenderAnnotationLayerError: l, onRenderAnnotationLayerSuccess: c, page: d, pdf: h, renderForms: f, rotate: g, scale: y = 1 } = e;
  $t(h, "Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop."), $t(d, "Attempted to load page annotations, but no page was specified."), $t(i, "Attempted to load page annotations, but no linkService was specified.");
  const [b, _] = Fa(), { value: x, error: E } = b, P = Cn(null);
  Ce(parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"), 10) === 1, "AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations");
  function k() {
    x && o && o(x);
  }
  function L() {
    E && (Ce(!1, E.toString()), s && s(E));
  }
  function F() {
    _({ type: "RESET" });
  }
  Pt(F, [_, d]);
  function I() {
    if (!d)
      return;
    const D = Oh(d.getAnnotations()), H = D;
    return D.promise.then((U) => {
      _({ type: "RESOLVE", value: U });
    }).catch((U) => {
      _({ type: "REJECT", error: U });
    }), () => {
      Wr(H);
    };
  }
  Pt(I, [_, d, f]), Pt(
    () => {
      if (x !== void 0) {
        if (x === !1) {
          L();
          return;
        }
        k();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [x]
  );
  function M() {
    c && c();
  }
  function C(D) {
    Ce(!1, `${D}`), l && l(D);
  }
  const T = dn(() => d.getViewport({ scale: y, rotation: g }), [d, g, y]);
  function N() {
    if (!h || !d || !i || !x)
      return;
    const { current: D } = P;
    if (!D)
      return;
    const H = T.clone({ dontFlip: !0 }), U = {
      accessibilityManager: null,
      // TODO: Implement this
      annotationCanvasMap: null,
      // TODO: Implement this
      annotationEditorUIManager: null,
      // TODO: Implement this
      div: D,
      l10n: null,
      // TODO: Implement this
      page: d,
      viewport: H
    }, G = {
      annotations: x,
      annotationStorage: h.annotationStorage,
      div: D,
      imageResourcesPath: n,
      linkService: i,
      page: d,
      renderForms: f,
      viewport: H
    };
    D.innerHTML = "";
    try {
      new qb(U).render(G), M();
    } catch (Y) {
      C(Y);
    }
    return () => {
    };
  }
  return Pt(
    N,
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [x, n, i, d, f, T]
  ), j("div", { className: jf("react-pdf__Page__annotations", "annotationLayer"), ref: P });
}
var vC = function(r, t) {
  var e = {};
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (e[n[i]] = r[n[i]]);
  return e;
};
const u0 = 1;
function wC(r) {
  const t = sv(), e = Object.assign(Object.assign({}, t), r), { _className: n = "react-pdf__Page", _enableRegisterUnregisterPage: i = !0, canvasBackground: s, canvasRef: o, children: l, className: c, customRenderer: d, customTextRenderer: h, devicePixelRatio: f, error: g = "Failed to load the page.", height: y, inputRef: b, loading: _ = "Loading page…", noData: x = "No page specified.", onGetAnnotationsError: E, onGetAnnotationsSuccess: P, onGetStructTreeError: k, onGetStructTreeSuccess: L, onGetTextError: F, onGetTextSuccess: I, onLoadError: M, onLoadSuccess: C, onRenderAnnotationLayerError: T, onRenderAnnotationLayerSuccess: N, onRenderError: D, onRenderSuccess: H, onRenderTextLayerError: U, onRenderTextLayerSuccess: G, pageIndex: Y, pageNumber: Z, pdf: B, registerPage: V, renderAnnotationLayer: W = !0, renderForms: bt = !1, renderMode: ut = "canvas", renderTextLayer: z = !0, rotate: nt, scale: tt = u0, unregisterPage: et, width: lt } = e, K = vC(e, ["_className", "_enableRegisterUnregisterPage", "canvasBackground", "canvasRef", "children", "className", "customRenderer", "customTextRenderer", "devicePixelRatio", "error", "height", "inputRef", "loading", "noData", "onGetAnnotationsError", "onGetAnnotationsSuccess", "onGetStructTreeError", "onGetStructTreeSuccess", "onGetTextError", "onGetTextSuccess", "onLoadError", "onLoadSuccess", "onRenderAnnotationLayerError", "onRenderAnnotationLayerSuccess", "onRenderError", "onRenderSuccess", "onRenderTextLayerError", "onRenderTextLayerSuccess", "pageIndex", "pageNumber", "pdf", "registerPage", "renderAnnotationLayer", "renderForms", "renderMode", "renderTextLayer", "rotate", "scale", "unregisterPage", "width"]), [gt, q] = Fa(), { value: J, error: ct } = gt, ft = Cn(null);
  $t(B, "Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.");
  const rt = Es(Z) ? Z - 1 : Y ?? null, Et = Z ?? (Es(Y) ? Y + 1 : null), vt = nt ?? (J ? J.rotate : null), X = dn(() => {
    if (!J)
      return null;
    let v = 1;
    const u = tt ?? u0;
    if (lt || y) {
      const p = J.getViewport({ scale: 1, rotation: vt });
      lt ? v = lt / p.width : y && (v = y / p.height);
    }
    return u * v;
  }, [y, J, vt, tt, lt]);
  function mt() {
    return () => {
      Es(rt) && i && et && et(rt);
    };
  }
  Pt(mt, [i, B, rt, et]);
  function Ct() {
    if (C) {
      if (!J || !X)
        return;
      C(jg(J, X));
    }
    if (i && V) {
      if (!Es(rt) || !ft.current)
        return;
      V(rt, ft.current);
    }
  }
  function Ht() {
    ct && (Ce(!1, ct.toString()), M && M(ct));
  }
  function Kt() {
    q({ type: "RESET" });
  }
  Pt(Kt, [q, B, rt]);
  function Vt() {
    if (!B || !Et)
      return;
    const v = Oh(B.getPage(Et)), u = v;
    return v.promise.then((p) => {
      q({ type: "RESOLVE", value: p });
    }).catch((p) => {
      q({ type: "REJECT", error: p });
    }), () => Wr(u);
  }
  Pt(Vt, [q, B, rt, Et, V]), Pt(
    () => {
      if (J !== void 0) {
        if (J === !1) {
          Ht();
          return;
        }
        Ct();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [J, X]
  );
  const Rt = dn(() => (
    // Technically there cannot be page without pageIndex, pageNumber, rotate and scale, but TypeScript doesn't know that
    J && Es(rt) && Et && Es(vt) && Es(X) ? {
      _className: n,
      canvasBackground: s,
      customTextRenderer: h,
      devicePixelRatio: f,
      onGetAnnotationsError: E,
      onGetAnnotationsSuccess: P,
      onGetStructTreeError: k,
      onGetStructTreeSuccess: L,
      onGetTextError: F,
      onGetTextSuccess: I,
      onRenderAnnotationLayerError: T,
      onRenderAnnotationLayerSuccess: N,
      onRenderError: D,
      onRenderSuccess: H,
      onRenderTextLayerError: U,
      onRenderTextLayerSuccess: G,
      page: J,
      pageIndex: rt,
      pageNumber: Et,
      renderForms: bt,
      renderTextLayer: z,
      rotate: vt,
      scale: X
    } : null
  ), [
    n,
    s,
    h,
    f,
    E,
    P,
    k,
    L,
    F,
    I,
    T,
    N,
    D,
    H,
    U,
    G,
    J,
    rt,
    Et,
    bt,
    z,
    vt,
    X
  ]), kt = dn(() => Jb(K, () => J && (X ? jg(J, X) : void 0)), [K, J, X]), Wt = `${rt}@${X}/${vt}`;
  function ot() {
    switch (ut) {
      case "custom":
        return $t(d, 'renderMode was set to "custom", but no customRenderer was passed.'), j(d, {}, `${Wt}_custom`);
      case "none":
        return null;
      case "canvas":
      default:
        return j(gC, { canvasRef: o }, `${Wt}_canvas`);
    }
  }
  function Pe() {
    return z ? j(yC, {}, `${Wt}_text`) : null;
  }
  function Re() {
    return W ? j(bC, {}, `${Wt}_annotations`) : null;
  }
  function ce() {
    return ws(ov.Provider, { value: Rt, children: [ot(), Pe(), Re(), l] });
  }
  function nn() {
    return Et ? B === null || J === void 0 || J === null ? j(co, { type: "loading", children: typeof _ == "function" ? _() : _ }) : B === !1 || J === !1 ? j(co, { type: "error", children: typeof g == "function" ? g() : g }) : ce() : j(co, { type: "no-data", children: typeof x == "function" ? x() : x });
  }
  return j("div", Object.assign({
    className: jf(n, c),
    "data-page-number": Et,
    // Assertion is needed for React 18 compatibility
    ref: rv(b, ft),
    style: {
      "--scale-factor": `${X}`,
      backgroundColor: s || "white",
      position: "relative",
      minWidth: "min-content",
      minHeight: "min-content"
    }
  }, kt, { children: nn() }));
}
nC();
um.workerSrc = "pdf.worker.mjs";
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var AC = Object.prototype.toString, Oa = Array.isArray || function(t) {
  return AC.call(t) === "[object Array]";
};
function fm(r) {
  return typeof r == "function";
}
function _C(r) {
  return Oa(r) ? "array" : typeof r;
}
function hp(r) {
  return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function f0(r, t) {
  return r != null && typeof r == "object" && t in r;
}
function EC(r, t) {
  return r != null && typeof r != "object" && r.hasOwnProperty && r.hasOwnProperty(t);
}
var SC = RegExp.prototype.test;
function xC(r, t) {
  return SC.call(r, t);
}
var CC = /\S/;
function TC(r) {
  return !xC(CC, r);
}
var PC = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;"
};
function RC(r) {
  return String(r).replace(/[&<>"'`=\/]/g, function(e) {
    return PC[e];
  });
}
var kC = /\s*/, LC = /\s+/, p0 = /\s*=/, IC = /\s*\}/, FC = /#|\^|\/|>|\{|&|=|!/;
function MC(r, t) {
  if (!r)
    return [];
  var e = !1, n = [], i = [], s = [], o = !1, l = !1, c = "", d = 0;
  function h() {
    if (o && !l)
      for (; s.length; )
        delete i[s.pop()];
    else
      s = [];
    o = !1, l = !1;
  }
  var f, g, y;
  function b(C) {
    if (typeof C == "string" && (C = C.split(LC, 2)), !Oa(C) || C.length !== 2)
      throw new Error("Invalid tags: " + C);
    f = new RegExp(hp(C[0]) + "\\s*"), g = new RegExp("\\s*" + hp(C[1])), y = new RegExp("\\s*" + hp("}" + C[1]));
  }
  b(t || en.tags);
  for (var _ = new Bh(r), x, E, P, k, L, F; !_.eos(); ) {
    if (x = _.pos, P = _.scanUntil(f), P)
      for (var I = 0, M = P.length; I < M; ++I)
        k = P.charAt(I), TC(k) ? (s.push(i.length), c += k) : (l = !0, e = !0, c += " "), i.push(["text", k, x, x + 1]), x += 1, k === `
` && (h(), c = "", d = 0, e = !1);
    if (!_.scan(f))
      break;
    if (o = !0, E = _.scan(FC) || "name", _.scan(kC), E === "=" ? (P = _.scanUntil(p0), _.scan(p0), _.scanUntil(g)) : E === "{" ? (P = _.scanUntil(y), _.scan(IC), _.scanUntil(g), E = "&") : P = _.scanUntil(g), !_.scan(g))
      throw new Error("Unclosed tag at " + _.pos);
    if (E == ">" ? L = [E, P, x, _.pos, c, d, e] : L = [E, P, x, _.pos], d++, i.push(L), E === "#" || E === "^")
      n.push(L);
    else if (E === "/") {
      if (F = n.pop(), !F)
        throw new Error('Unopened section "' + P + '" at ' + x);
      if (F[1] !== P)
        throw new Error('Unclosed section "' + F[1] + '" at ' + x);
    } else
      E === "name" || E === "{" || E === "&" ? l = !0 : E === "=" && b(P);
  }
  if (h(), F = n.pop(), F)
    throw new Error('Unclosed section "' + F[1] + '" at ' + _.pos);
  return NC(DC(i));
}
function DC(r) {
  for (var t = [], e, n, i = 0, s = r.length; i < s; ++i)
    e = r[i], e && (e[0] === "text" && n && n[0] === "text" ? (n[1] += e[1], n[3] = e[3]) : (t.push(e), n = e));
  return t;
}
function NC(r) {
  for (var t = [], e = t, n = [], i, s, o = 0, l = r.length; o < l; ++o)
    switch (i = r[o], i[0]) {
      case "#":
      case "^":
        e.push(i), n.push(i), e = i[4] = [];
        break;
      case "/":
        s = n.pop(), s[5] = i[2], e = n.length > 0 ? n[n.length - 1][4] : t;
        break;
      default:
        e.push(i);
    }
  return t;
}
function Bh(r) {
  this.string = r, this.tail = r, this.pos = 0;
}
Bh.prototype.eos = function() {
  return this.tail === "";
};
Bh.prototype.scan = function(t) {
  var e = this.tail.match(t);
  if (!e || e.index !== 0)
    return "";
  var n = e[0];
  return this.tail = this.tail.substring(n.length), this.pos += n.length, n;
};
Bh.prototype.scanUntil = function(t) {
  var e = this.tail.search(t), n;
  switch (e) {
    case -1:
      n = this.tail, this.tail = "";
      break;
    case 0:
      n = "";
      break;
    default:
      n = this.tail.substring(0, e), this.tail = this.tail.substring(e);
  }
  return this.pos += n.length, n;
};
function Ma(r, t) {
  this.view = r, this.cache = { ".": this.view }, this.parent = t;
}
Ma.prototype.push = function(t) {
  return new Ma(t, this);
};
Ma.prototype.lookup = function(t) {
  var e = this.cache, n;
  if (e.hasOwnProperty(t))
    n = e[t];
  else {
    for (var i = this, s, o, l, c = !1; i; ) {
      if (t.indexOf(".") > 0)
        for (s = i.view, o = t.split("."), l = 0; s != null && l < o.length; )
          l === o.length - 1 && (c = f0(s, o[l]) || EC(s, o[l])), s = s[o[l++]];
      else
        s = i.view[t], c = f0(i.view, t);
      if (c) {
        n = s;
        break;
      }
      i = i.parent;
    }
    e[t] = n;
  }
  return fm(n) && (n = n.call(this.view)), n;
};
function De() {
  this.templateCache = {
    _cache: {},
    set: function(t, e) {
      this._cache[t] = e;
    },
    get: function(t) {
      return this._cache[t];
    },
    clear: function() {
      this._cache = {};
    }
  };
}
De.prototype.clearCache = function() {
  typeof this.templateCache < "u" && this.templateCache.clear();
};
De.prototype.parse = function(t, e) {
  var n = this.templateCache, i = t + ":" + (e || en.tags).join(":"), s = typeof n < "u", o = s ? n.get(i) : void 0;
  return o == null && (o = MC(t, e), s && n.set(i, o)), o;
};
De.prototype.render = function(t, e, n, i) {
  var s = this.getConfigTags(i), o = this.parse(t, s), l = e instanceof Ma ? e : new Ma(e, void 0);
  return this.renderTokens(o, l, n, t, i);
};
De.prototype.renderTokens = function(t, e, n, i, s) {
  for (var o = "", l, c, d, h = 0, f = t.length; h < f; ++h)
    d = void 0, l = t[h], c = l[0], c === "#" ? d = this.renderSection(l, e, n, i, s) : c === "^" ? d = this.renderInverted(l, e, n, i, s) : c === ">" ? d = this.renderPartial(l, e, n, s) : c === "&" ? d = this.unescapedValue(l, e) : c === "name" ? d = this.escapedValue(l, e, s) : c === "text" && (d = this.rawValue(l)), d !== void 0 && (o += d);
  return o;
};
De.prototype.renderSection = function(t, e, n, i, s) {
  var o = this, l = "", c = e.lookup(t[1]);
  function d(g) {
    return o.render(g, e, n, s);
  }
  if (c) {
    if (Oa(c))
      for (var h = 0, f = c.length; h < f; ++h)
        l += this.renderTokens(t[4], e.push(c[h]), n, i, s);
    else if (typeof c == "object" || typeof c == "string" || typeof c == "number")
      l += this.renderTokens(t[4], e.push(c), n, i, s);
    else if (fm(c)) {
      if (typeof i != "string")
        throw new Error("Cannot use higher-order sections without the original template");
      c = c.call(e.view, i.slice(t[3], t[5]), d), c != null && (l += c);
    } else
      l += this.renderTokens(t[4], e, n, i, s);
    return l;
  }
};
De.prototype.renderInverted = function(t, e, n, i, s) {
  var o = e.lookup(t[1]);
  if (!o || Oa(o) && o.length === 0)
    return this.renderTokens(t[4], e, n, i, s);
};
De.prototype.indentPartial = function(t, e, n) {
  for (var i = e.replace(/[^ \t]/g, ""), s = t.split(`
`), o = 0; o < s.length; o++)
    s[o].length && (o > 0 || !n) && (s[o] = i + s[o]);
  return s.join(`
`);
};
De.prototype.renderPartial = function(t, e, n, i) {
  if (n) {
    var s = this.getConfigTags(i), o = fm(n) ? n(t[1]) : n[t[1]];
    if (o != null) {
      var l = t[6], c = t[5], d = t[4], h = o;
      c == 0 && d && (h = this.indentPartial(o, d, l));
      var f = this.parse(h, s);
      return this.renderTokens(f, e, n, h, i);
    }
  }
};
De.prototype.unescapedValue = function(t, e) {
  var n = e.lookup(t[1]);
  if (n != null)
    return n;
};
De.prototype.escapedValue = function(t, e, n) {
  var i = this.getConfigEscape(n) || en.escape, s = e.lookup(t[1]);
  if (s != null)
    return typeof s == "number" && i === en.escape ? String(s) : i(s);
};
De.prototype.rawValue = function(t) {
  return t[1];
};
De.prototype.getConfigTags = function(t) {
  return Oa(t) ? t : t && typeof t == "object" ? t.tags : void 0;
};
De.prototype.getConfigEscape = function(t) {
  if (t && typeof t == "object" && !Oa(t))
    return t.escape;
};
var en = {
  name: "mustache.js",
  version: "4.2.0",
  tags: ["{{", "}}"],
  clearCache: void 0,
  escape: void 0,
  parse: void 0,
  render: void 0,
  Scanner: void 0,
  Context: void 0,
  Writer: void 0,
  /**
   * Allows a user to override the default caching strategy, by providing an
   * object with set, get and clear methods. This can also be used to disable
   * the cache by setting it to the literal `undefined`.
   */
  set templateCache(r) {
    dl.templateCache = r;
  },
  /**
   * Gets the default or overridden caching object from the default writer.
   */
  get templateCache() {
    return dl.templateCache;
  }
}, dl = new De();
en.clearCache = function() {
  return dl.clearCache();
};
en.parse = function(t, e) {
  return dl.parse(t, e);
};
en.render = function(t, e, n, i) {
  if (typeof t != "string")
    throw new TypeError('Invalid template! Template should be a "string" but "' + _C(t) + '" was given as the first argument for mustache#render(template, view, partials)');
  return dl.render(t, e, n, i);
};
en.escape = RC;
en.Scanner = Bh;
en.Context = Ma;
en.Writer = De;
const dv = "SET_ALL_DOCUMENTS", OC = "SET_DOCUMENT_LOADING", uv = "NEXT_DOCUMENT", fv = "PREVIOUS_DOCUMENT", pv = "UPDATE_CURRENT_DOCUMENT", BC = "SET_RENDERER_RECT", gv = "SET_MAIN_CONFIG", $C = (r, t) => ({
  type: dv,
  documents: r,
  initialActiveDocument: t
}), HC = () => ({ type: uv }), UC = () => ({
  type: fv
}), zC = (r) => ({ type: pv, document: r }), jC = (r) => ({
  type: gv,
  config: r
}), Od = {
  currentFileNo: 0,
  documents: [],
  documentLoading: !0,
  currentDocument: void 0,
  rendererRect: void 0,
  config: {},
  pluginRenderers: [],
  language: Vg
}, GC = (r = Od, t) => {
  switch (t.type) {
    case dv: {
      const { documents: e, initialActiveDocument: n } = t;
      return {
        ...r,
        documents: e,
        currentDocument: n || e[0] || null,
        currentFileNo: n && e.includes(n) ? e.indexOf(n) : Od.currentFileNo
      };
    }
    case OC: {
      const { value: e } = t;
      return { ...r, documentLoading: e };
    }
    case uv: {
      if (r.currentFileNo >= r.documents.length - 1)
        return r;
      const e = r.currentFileNo + 1;
      return r.onDocumentChange && r.onDocumentChange(r.documents[e]), {
        ...r,
        currentFileNo: e,
        currentDocument: r.documents[e],
        documentLoading: !0
      };
    }
    case fv: {
      if (r.currentFileNo <= 0)
        return r;
      const e = r.currentFileNo - 1;
      return r.onDocumentChange && r.onDocumentChange(r.documents[e]), {
        ...r,
        currentFileNo: r.currentFileNo - 1,
        currentDocument: r.documents[e],
        documentLoading: !0
      };
    }
    case pv: {
      const { document: e } = t;
      return {
        ...r,
        currentDocument: e,
        currentFileNo: r.documents.findIndex(
          (n) => n.uri === e.uri
        )
      };
    }
    case BC: {
      const { rect: e } = t;
      return {
        ...r,
        rendererRect: e
      };
    }
    case gv: {
      const { config: e } = t;
      return {
        ...r,
        config: e
      };
    }
    default:
      return r;
  }
}, mv = Af({ state: Od, dispatch: () => null });
w0((r, t) => {
  const {
    children: e,
    documents: n,
    config: i,
    pluginRenderers: s,
    prefetchMethod: o,
    requestHeaders: l,
    initialActiveDocument: c,
    language: d,
    activeDocument: h,
    onDocumentChange: f
  } = r, [g, y] = Gg(GC, {
    ...Od,
    documents: n || [],
    currentDocument: n && n.length ? c || n[0] : void 0,
    config: i,
    pluginRenderers: s,
    prefetchMethod: o,
    requestHeaders: l,
    currentFileNo: c ? n.findIndex((b) => b === c) ?? 0 : 0,
    language: d && Td[d] ? d : Vg,
    activeDocument: h,
    onDocumentChange: f
  });
  return Pt(() => {
    y($C(n, c)), i && y(jC(i));
  }, [n, i, c]), Pt(() => {
    h && y(zC(h));
  }, [h]), A0(
    t,
    () => ({
      prev() {
        y(UC());
      },
      next() {
        y(HC());
      }
    }),
    [y]
  ), /* @__PURE__ */ j(mv.Provider, { value: { state: g, dispatch: y }, children: e });
});
const $h = () => {
  const {
    state: { language: r }
  } = $i(mv), t = Td[Vg];
  return {
    t: cl(
      (n, i) => {
        const s = Td[r];
        return s[n] ? en.render(s[n], i) : t[n] ? en.render(t[n], i) : n;
      },
      [r, t]
    )
  };
}, yv = "SET_ZOOM_LEVEL", dp = (r) => ({
  type: yv,
  value: r
}), bv = "SET_PDF_PAGINATED", VC = (r) => ({
  type: bv,
  value: r
}), vv = "SET_NUM_PAGES", g0 = (r) => ({
  type: vv,
  value: r
}), wv = "SET_CURRENT_PAGE", Av = "SET_CURRENT_MAIN_STATE", m0 = (r) => ({
  type: wv,
  value: r
}), Wi = {
  defaultZoomLevel: 1,
  zoomLevel: 1,
  zoomJump: 0.1,
  paginated: !0,
  numPages: 0,
  currentPage: 1
}, WC = (r = Wi, t) => {
  switch (t.type) {
    case yv: {
      const { value: e } = t;
      return { ...r, zoomLevel: e };
    }
    case bv: {
      const { value: e } = t;
      return { ...r, paginated: e };
    }
    case vv: {
      const { value: e } = t;
      return { ...r, numPages: e };
    }
    case wv: {
      const { value: e } = t;
      return { ...r, currentPage: e };
    }
    case Av: {
      const { value: e } = t;
      return { ...r, mainState: e };
    }
    default:
      return r;
  }
}, Ba = Af({ state: Wi, dispatch: () => null }), qC = ({
  children: r,
  mainState: t
}) => {
  var i, s, o, l, c, d, h;
  const [e, n] = Gg(WC, {
    ...Wi,
    defaultZoomLevel: ((s = (i = t.config) == null ? void 0 : i.pdfZoom) == null ? void 0 : s.defaultZoom) ?? Wi.defaultZoomLevel,
    zoomLevel: ((l = (o = t.config) == null ? void 0 : o.pdfZoom) == null ? void 0 : l.defaultZoom) ?? Wi.zoomLevel,
    zoomJump: ((d = (c = t.config) == null ? void 0 : c.pdfZoom) == null ? void 0 : d.zoomJump) ?? Wi.zoomJump,
    paginated: (h = t.config) != null && h.pdfVerticalScrollByDefault ? !1 : Wi.paginated,
    mainState: t
  });
  return Pt(() => {
    n({
      type: Av,
      value: t
    });
  }, [t]), /* @__PURE__ */ j(Ba.Provider, { value: { state: e, dispatch: n }, children: r });
}, _v = ({ pageNum: r }) => {
  const {
    state: { mainState: t, paginated: e, zoomLevel: n, numPages: i, currentPage: s }
  } = $i(Ba), { t: o } = $h(), l = (t == null ? void 0 : t.rendererRect) || null, c = r ?? s;
  return /* @__PURE__ */ ws(XC, { id: "pdf-page-wrapper", $lastPage: c >= i, children: [
    !e && /* @__PURE__ */ j(YC, { id: "pdf-page-info", children: o("pdfPluginPageNumber", {
      currentPage: c,
      allPagesCount: i
    }) }),
    /* @__PURE__ */ j(
      wC,
      {
        pageNumber: c || s,
        scale: n,
        height: ((l == null ? void 0 : l.height) ?? 100) - 100,
        width: ((l == null ? void 0 : l.width) ?? 100) - 100,
        loading: o("pdfPluginLoading")
      }
    )
  ] });
}, XC = Ft.div`
  margin: ${(r) => r.$lastPage ? "20px 0" : void 0};
`, YC = Ft.div`
  padding: 0 0 10px 10px;
  color: ${(r) => r.theme.textTertiary};
  font-size: 14px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`, KC = () => {
  const {
    state: { numPages: r }
  } = $i(Ba), t = [];
  for (let e = 0; e < r; e++)
    t.push(/* @__PURE__ */ j(_v, { pageNum: e + 1 }, e + 1));
  return /* @__PURE__ */ j(kv, { children: t });
}, ZC = new URL("./dist/cmaps/", import.meta.url).toString(), JC = new URL("./dist/standard_fonts/", import.meta.url).toString(), QC = () => {
  const {
    state: { mainState: r, paginated: t },
    dispatch: e
  } = $i(Ba), { t: n } = $h(), i = (r == null ? void 0 : r.currentDocument) || null;
  if (Pt(() => {
    e(g0(Wi.numPages));
  }, [i]), !i || i.fileData === void 0)
    return null;
  const s = dn(
    () => ({
      cMapUrl: ZC,
      cMapPacked: !0,
      standardFontDataUrl: JC
    }),
    []
    // 依存なしなら一度だけ生成
  );
  return /* @__PURE__ */ j(
    tT,
    {
      file: i.fileData,
      onLoadSuccess: ({ numPages: o }) => e(g0(o)),
      loading: /* @__PURE__ */ j("span", { children: n("pdfPluginLoading") }),
      options: s,
      children: t ? /* @__PURE__ */ j(_v, {}) : /* @__PURE__ */ j(KC, {})
    }
  );
}, tT = Ft(cC)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`, eT = Jg`
  background-color: ${(r) => r.theme.primary};
  color: ${(r) => r.theme.textPrimary};
`, nT = Jg`
  background-color: ${(r) => r.theme.secondary};
  color: ${(r) => r.theme.textSecondary};
`, qf = Ft.button`
  ${eT}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  padding: 0;
  margin: 0 0 0 5px;
  text-align: center;
  font-size: 18px;
  border: 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 35px;
  opacity: ${(r) => r.disabled ? 0.4 : 1};
  pointer-events: ${(r) => r.disabled ? "none" : "all"};
  box-shadow: 2px 2px 3px #00000033;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`, iT = Ft.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 35px;
  background-color: ${(r) => r.theme.primary};
  color: ${(r) => r.theme.textPrimary};
  box-shadow: 2px 2px 3px #00000033;

  width: 35px;
  height: 35px;
  font-size: 18px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`;
Ft(qf)``;
Ft(qf)`
  ${nT}
`;
const sT = (r) => /* @__PURE__ */ j(Ev, { ...r, reverse: !0 }), rT = (r) => /* @__PURE__ */ j(Ev, { ...r }), Ev = (r) => {
  const { color: t, size: e, reverse: n } = r;
  return /* @__PURE__ */ j(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      style: { transform: `${n ? "rotate(180deg)" : ""}` },
      viewBox: "0 0 12 12",
      version: "1.1",
      children: /* @__PURE__ */ j(
        "g",
        {
          id: "Icons",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ j("g", { id: "Rounded", transform: "translate(-548.000000, -1000.000000)", children: /* @__PURE__ */ j("g", { id: "AV", transform: "translate(100.000000, 852.000000)", children: /* @__PURE__ */ j(
            "g",
            {
              id: "-Round-/-AV-/-skip_next",
              transform: "translate(442.000000, 142.000000)",
              children: /* @__PURE__ */ ws("g", { children: [
                /* @__PURE__ */ j(
                  "rect",
                  {
                    id: "Rectangle-Copy-52",
                    x: "0",
                    y: "0",
                    width: "24",
                    height: "24"
                  }
                ),
                /* @__PURE__ */ j(
                  "path",
                  {
                    d: "M7.58,16.89 L13.35,12.82 C13.91,12.42 13.91,11.58 13.35,11.19 L7.58,7.11 C6.91,6.65 6,7.12 6,7.93 L6,16.07 C6,16.88 6.91,17.35 7.58,16.89 Z M16,7 L16,17 C16,17.55 16.45,18 17,18 C17.55,18 18,17.55 18,17 L18,7 C18,6.45 17.55,6 17,6 C16.45,6 16,6.45 16,7 Z",
                    id: "icon_color",
                    fill: t || "#aaa"
                  }
                )
              ] })
            }
          ) }) })
        }
      )
    }
  );
}, oT = (r) => {
  const { color: t, size: e, reverse: n } = r;
  return /* @__PURE__ */ ws(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      style: { transform: `${n ? "rotate(180deg)" : ""}` },
      id: "Layer_1",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ j(
          "path",
          {
            d: "M20.57,9.43A8,8,0,0,0,5.26,10,5,5,0,1,0,5,20h5V18H5a3,3,0,0,1,0-6,3.1,3.1,0,0,1,.79.12l1.12.31.14-1.15a6,6,0,0,1,11.74-.82l.15.54.54.16A3.46,3.46,0,0,1,22,14.5,3.5,3.5,0,0,1,18.5,18H16v2h2.5A5.48,5.48,0,0,0,20.57,9.43Z",
            fill: t || "#aaa"
          }
        ),
        /* @__PURE__ */ j(
          "polygon",
          {
            points: "12 11 12 15.59 10.71 14.29 9.29 15.71 13 19.41 16.71 15.71 15.29 14.29 14 15.59 14 11 12 11",
            fill: t || "#aaa"
          }
        )
      ]
    }
  );
}, aT = (r) => /* @__PURE__ */ j(Sv, { ...r }), lT = (r) => /* @__PURE__ */ j(Sv, { ...r, reverse: !0 }), Sv = (r) => {
  const { color: t, size: e, reverse: n } = r;
  return /* @__PURE__ */ j(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      viewBox: "0 0 32 32",
      version: "1.1",
      children: /* @__PURE__ */ j(
        "g",
        {
          id: "Page-1",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ j("g", { id: "search-plus-icon", fill: t || "#aaa", children: /* @__PURE__ */ j(
            "path",
            {
              id: "search-plus",
              d: n ? "M 13 13 L 16 13 L 19 13 L 19 16 L 16 16 L 13 16 L 10 16 L 10 13 Z M 19.4271 21.4271 C 18.0372 22.4175 16.3367 23 14.5 23 C 9.8056 23 6 19.1944 6 14.5 C 6 9.8056 9.8056 6 14.5 6 C 19.1944 6 23 9.8056 23 14.5 C 23 16.3367 22.4175 18.0372 21.4271 19.4271 L 27.0119 25.0119 C 27.5621 25.5621 27.5575 26.4425 27.0117 26.9883 L 26.9883 27.0117 C 26.4439 27.5561 25.5576 27.5576 25.0119 27.0119 L 19.4271 21.4271 L 19.4271 21.4271 L 19.4271 21.4271 Z M 14.5 21 C 18.0899 21 21 18.0899 21 14.5 C 21 10.9101 18.0899 8 14.5 8 C 10.9101 8 8 10.9101 8 14.5 C 8 18.0899 10.9101 21 14.5 21 L 14.5 21 Z" : "M 13 13 L 13 10 L 16 10 L 16 13 L 19 13 L 19 16 L 16 16 L 16 19 L 13 19 L 13 16 L 10 16 L 10 13 Z M 19.4271 21.4271 C 18.0372 22.4175 16.3367 23 14.5 23 C 9.8056 23 6 19.1944 6 14.5 C 6 9.8056 9.8056 6 14.5 6 C 19.1944 6 23 9.8056 23 14.5 C 23 16.3367 22.4175 18.0372 21.4271 19.4271 L 27.0119 25.0119 C 27.5621 25.5621 27.5575 26.4425 27.0117 26.9883 L 26.9883 27.0117 C 26.4439 27.5561 25.5576 27.5576 25.0119 27.0119 L 19.4271 21.4271 L 19.4271 21.4271 L 19.4271 21.4271 Z M 14.5 21 C 18.0899 21 21 18.0899 21 14.5 C 21 10.9101 18.0899 8 14.5 8 C 10.9101 8 8 10.9101 8 14.5 C 8 18.0899 10.9101 21 14.5 21 L 14.5 21 Z"
            }
          ) })
        }
      )
    }
  );
}, cT = (r) => {
  const { color: t, size: e } = r;
  return /* @__PURE__ */ j("svg", { width: e || "100%", height: e || "100%", viewBox: "0 0 24 24", children: /* @__PURE__ */ j(
    "path",
    {
      fill: t || "#aaa",
      d: "M9.29,13.29,4,18.59V17a1,1,0,0,0-2,0v4a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,3,22H7a1,1,0,0,0,0-2H5.41l5.3-5.29a1,1,0,0,0-1.42-1.42ZM5.41,4H7A1,1,0,0,0,7,2H3a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54A1,1,0,0,0,2,3V7A1,1,0,0,0,4,7V5.41l5.29,5.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM21,16a1,1,0,0,0-1,1v1.59l-5.29-5.3a1,1,0,0,0-1.42,1.42L18.59,20H17a1,1,0,0,0,0,2h4a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,22,21V17A1,1,0,0,0,21,16Zm.92-13.38a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H17a1,1,0,0,0,0,2h1.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V7a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"
    }
  ) });
}, hT = (r) => {
  const { color: t, size: e, reverse: n } = r;
  return /* @__PURE__ */ j(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      style: { transform: `${n ? "rotate(90deg)" : ""}` },
      version: "1.1",
      id: "Scroll_1",
      viewBox: "0 0 297 297",
      xmlSpace: "preserve",
      children: /* @__PURE__ */ j(
        "path",
        {
          fill: t || "#aaa",
          d: `M206.004,200.723h-31.231V96.277h31.231c0.005,0,0.014,0,0.019,0c5.289,0,9.575-4.287,9.575-9.574
  c0-2.342-0.841-4.488-2.236-6.151L156.168,3.851C154.36,1.428,151.515,0,148.492,0c-3.023,0-5.868,1.428-7.675,3.851L83.302,80.98
  c-2.166,2.902-2.507,6.779-0.883,10.017c1.624,3.236,4.936,5.28,8.559,5.28h31.231v104.445H90.978c-3.623,0-6.934,2.044-8.559,5.28
  c-1.624,3.237-1.283,7.114,0.883,10.017l57.513,77.129c1.808,2.424,4.652,3.852,7.675,3.852c3.023,0,5.868-1.428,7.676-3.852
  l57.514-77.129c2.164-2.902,2.507-6.779,0.883-10.017C212.938,202.767,209.627,200.723,206.004,200.723z`
        }
      )
    }
  );
}, dT = () => {
  const {
    state: { currentPage: r, numPages: t },
    dispatch: e
  } = $i(Ba), { t: n } = $h();
  return /* @__PURE__ */ ws(uT, { id: "pdf-pagination", children: [
    /* @__PURE__ */ j(
      xv,
      {
        id: "pdf-pagination-prev",
        onClick: () => e(m0(r - 1)),
        disabled: r === 1,
        children: /* @__PURE__ */ j(sT, { color: "#000", size: "50%" })
      }
    ),
    /* @__PURE__ */ j(pT, { id: "pdf-pagination-info", children: n("pdfPluginPageNumber", {
      currentPage: r,
      allPagesCount: t
    }) }),
    /* @__PURE__ */ j(
      fT,
      {
        id: "pdf-pagination-next",
        onClick: () => e(m0(r + 1)),
        disabled: r >= t,
        children: /* @__PURE__ */ j(rT, { color: "#000", size: "50%" })
      }
    )
  ] });
}, uT = Ft.div`
  display: flex;
  align-items: center;
`, xv = Ft(qf)`
  width: 30px;
  height: 30px;
  margin: 0 5px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`, fT = Ft(xv)`
  margin: 0 20px 0 5px;
`, pT = Ft.div`
  color: ${(r) => r.theme.textPrimary};
  font-size: 14px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`, gT = () => {
  const { t: r } = $h(), {
    state: {
      mainState: t,
      paginated: e,
      zoomLevel: n,
      numPages: i,
      zoomJump: s,
      defaultZoomLevel: o
    },
    dispatch: l
  } = $i(Ba), c = (t == null ? void 0 : t.currentDocument) || null;
  return /* @__PURE__ */ ws(mT, { id: "pdf-controls", children: [
    e && i > 1 && /* @__PURE__ */ j(dT, {}),
    (c == null ? void 0 : c.fileData) && /* @__PURE__ */ j(
      yT,
      {
        id: "pdf-download",
        href: c == null ? void 0 : c.fileData,
        download: (c == null ? void 0 : c.fileName) || (c == null ? void 0 : c.uri),
        title: r("downloadButtonLabel"),
        children: /* @__PURE__ */ j(oT, { color: "#000", size: "75%" })
      }
    ),
    /* @__PURE__ */ j(
      Yh,
      {
        id: "pdf-zoom-out",
        onMouseDown: () => l(dp(n - s)),
        children: /* @__PURE__ */ j(lT, { color: "#000", size: "80%" })
      }
    ),
    /* @__PURE__ */ j(
      Yh,
      {
        id: "pdf-zoom-in",
        onMouseDown: () => l(dp(n + s)),
        children: /* @__PURE__ */ j(aT, { color: "#000", size: "80%" })
      }
    ),
    /* @__PURE__ */ j(
      Yh,
      {
        id: "pdf-zoom-reset",
        onMouseDown: () => l(dp(o)),
        disabled: n === o,
        children: /* @__PURE__ */ j(cT, { color: "#000", size: "70%" })
      }
    ),
    i > 1 && /* @__PURE__ */ j(
      Yh,
      {
        id: "pdf-toggle-pagination",
        onMouseDown: () => l(VC(!e)),
        children: /* @__PURE__ */ j(
          hT,
          {
            color: "#000",
            size: "70%",
            reverse: e
          }
        )
      }
    )
  ] });
}, mT = Ft.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: flex-end;
  padding: 8px;
  background-color: ${(r) => r.theme.tertiary};
  box-shadow: 0px 2px 3px #00000033;

  @media (max-width: 768px) {
    padding: 6px;
  }
`, Yh = Ft(qf)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`, yT = Ft(iT)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
um.workerSrc = new URL(
  `https://unpkg.com/pdfjs-dist@${Zb}/build/pdf.worker.min.mjs`
).toString();
const pm = ({ mainState: r }) => /* @__PURE__ */ j(qC, { mainState: r, children: /* @__PURE__ */ ws(bT, { id: "pdf-renderer", "data-testid": "pdf-renderer", children: [
  /* @__PURE__ */ j(gT, {}),
  /* @__PURE__ */ j(QC, {})
] }) });
pm.fileTypes = ["pdf", "application/pdf"];
pm.weight = 0;
const bT = Ft.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  /* width */
  &::-webkit-scrollbar {
    ${(r) => r.theme.disableThemeScrollbar ? "" : "width: 10px"};
  }
  /* Track */
  &::-webkit-scrollbar-track {
    /* background: ${(r) => r.theme.secondary}; */
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(r) => r.theme.tertiary};
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${(r) => r.theme.primary};
  }
`, vT = Ft(Bi)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: white;
  background-image: linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e0e0e0 75%),
    linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
  background-size: 20px 20px;
  background-position:
    0 0,
    0 10px,
    10px -10px,
    -10px 0px;
`, gm = (r) => /* @__PURE__ */ j(vT, { ...r });
gm.fileTypes = ["png", "image/png"];
gm.weight = 0;
let Di, tn, Bd = [];
const wT = () => {
  var r = Ue(2, 0);
  if (r === 18761)
    tn = !0;
  else if (r === 19789)
    tn = !1;
  else
    throw TypeError("Invalid byte order value.");
  return tn;
}, AT = () => {
  if (Ue(2, 2) !== 42)
    throw RangeError("You forgot your towel!");
  return !0;
}, _T = (r) => {
  var t = {
    // TIFF Baseline
    315: "Artist",
    258: "BitsPerSample",
    265: "CellLength",
    264: "CellWidth",
    320: "ColorMap",
    259: "Compression",
    33432: "Copyright",
    306: "DateTime",
    338: "ExtraSamples",
    266: "FillOrder",
    289: "FreeByteCounts",
    288: "FreeOffsets",
    291: "GrayResponseCurve",
    290: "GrayResponseUnit",
    316: "HostComputer",
    270: "ImageDescription",
    257: "ImageLength",
    256: "ImageWidth",
    271: "Make",
    281: "MaxSampleValue",
    280: "MinSampleValue",
    272: "Model",
    254: "NewSubfileType",
    274: "Orientation",
    262: "PhotometricInterpretation",
    284: "PlanarConfiguration",
    296: "ResolutionUnit",
    278: "RowsPerStrip",
    277: "SamplesPerPixel",
    305: "Software",
    279: "StripByteCounts",
    273: "StripOffsets",
    255: "SubfileType",
    263: "Threshholding",
    282: "XResolution",
    283: "YResolution",
    // TIFF Extended
    326: "BadFaxLines",
    327: "CleanFaxData",
    343: "ClipPath",
    328: "ConsecutiveBadFaxLines",
    433: "Decode",
    434: "DefaultImageColor",
    269: "DocumentName",
    336: "DotRange",
    321: "HalftoneHints",
    346: "Indexed",
    347: "JPEGTables",
    285: "PageName",
    297: "PageNumber",
    317: "Predictor",
    319: "PrimaryChromaticities",
    532: "ReferenceBlackWhite",
    339: "SampleFormat",
    559: "StripRowCounts",
    330: "SubIFDs",
    292: "T4Options",
    293: "T6Options",
    325: "TileByteCounts",
    323: "TileLength",
    324: "TileOffsets",
    322: "TileWidth",
    301: "TransferFunction",
    318: "WhitePoint",
    344: "XClipPathUnits",
    286: "XPosition",
    529: "YCbCrCoefficients",
    531: "YCbCrPositioning",
    530: "YCbCrSubSampling",
    345: "YClipPathUnits",
    287: "YPosition",
    // EXIF
    37378: "ApertureValue",
    40961: "ColorSpace",
    36868: "DateTimeDigitized",
    36867: "DateTimeOriginal",
    34665: "Exif IFD",
    36864: "ExifVersion",
    33434: "ExposureTime",
    41728: "FileSource",
    37385: "Flash",
    40960: "FlashpixVersion",
    33437: "FNumber",
    42016: "ImageUniqueID",
    37384: "LightSource",
    37500: "MakerNote",
    37377: "ShutterSpeedValue",
    37510: "UserComment",
    // IPTC
    33723: "IPTC",
    // ICC
    34675: "ICC Profile",
    // XMP
    700: "XMP",
    // GDAL
    42112: "GDAL_METADATA",
    42113: "GDAL_NODATA",
    // Photoshop
    34377: "Photoshop"
  }, e;
  return r in t ? e = t[r] : e = "Tag" + r, e;
}, ET = (r) => {
  var t = {
    1: "BYTE",
    2: "ASCII",
    3: "SHORT",
    4: "LONG",
    5: "RATIONAL",
    6: "SBYTE",
    7: "UNDEFINED",
    8: "SSHORT",
    9: "SLONG",
    10: "SRATIONAL",
    11: "FLOAT",
    12: "DOUBLE"
  }, e;
  return r in t && (e = t[r]), e;
}, ST = (r) => {
  var t;
  return ["BYTE", "ASCII", "SBYTE", "UNDEFINED"].indexOf(r) !== -1 ? t = 1 : ["SHORT", "SSHORT"].indexOf(r) !== -1 ? t = 2 : ["LONG", "SLONG", "FLOAT"].indexOf(r) !== -1 ? t = 4 : ["RATIONAL", "SRATIONAL", "DOUBLE"].indexOf(r) !== -1 && (t = 8), t;
}, xT = (r, t, e) => {
  e = e || 0;
  var n = Math.floor(e / 8), i = t + n, s = e + r, o = 32 - r;
  if (s <= 0)
    throw RangeError("No bits requested");
  if (s <= 8)
    var l = 24 + e, c = Di.getUint8(i, tn);
  else if (s <= 16)
    var l = 16 + e, c = Di.getUint16(i, tn);
  else if (s <= 32)
    var l = e, c = Di.getUint32(i, tn);
  else
    throw RangeError("Too many bits requested");
  var d = {
    bits: c << l >>> o,
    byteOffset: i + Math.floor(s / 8),
    bitOffset: s % 8
  };
  return d;
}, Ue = (r, t) => {
  if (r <= 0)
    throw RangeError("No bytes requested");
  if (r <= 1)
    return Di.getUint8(t, tn);
  if (r <= 2)
    return Di.getUint16(t, tn);
  if (r <= 3)
    return Di.getUint32(t, tn) >>> 8;
  if (r <= 4)
    return Di.getUint32(t, tn);
  throw RangeError("Too many bytes requested");
}, CT = (r, t, e, n) => {
  var i = [], s = ST(t), o = s * e;
  if (o <= 4) {
    if (tn === !1)
      var l = n >>> (4 - s) * 8;
    else
      var l = n;
    i.push(l);
  } else
    for (var c = 0; c < e; c++) {
      var d = s * c;
      if (s >= 8)
        if (["RATIONAL", "SRATIONAL"].indexOf(t) !== -1)
          i.push(Ue(4, n + d)), i.push(Ue(4, n + d + 4));
        else
          throw TypeError("Can't handle this field type or size");
      else
        i.push(Ue(s, n + d));
    }
  return t === "ASCII" && i.forEach(function(h, f, g) {
    g[f] = String.fromCharCode(h);
  }), i;
}, Ss = (r, t) => {
  var e = Math.pow(2, 8 - t);
  return Math.floor(r * e + (e - 1));
}, y0 = (r, t, e, n) => (typeof n > "u" && (n = 1), "rgba(" + r + ", " + t + ", " + e + ", " + n + ")"), Cv = (r) => {
  for (var t = Ue(2, r), e = [], n = r + 2, i = 0; i < t; n += 12, i++) {
    var s = Ue(2, n), o = Ue(2, n + 2), l = Ue(4, n + 4), c = Ue(4, n + 8), d = _T(s), h = ET(o), f = CT(
      d,
      h,
      l,
      c
    );
    e[d] = { type: h, values: f };
  }
  Bd.push(e);
  var g = Ue(4, n);
  return g === 0 ? Bd : Cv(g);
}, TT = (r, t) => {
  let e = t || document.createElement("canvas");
  if (r && (Di = new DataView(r), tn = wT(), !!AT())) {
    var n = Ue(4, 4);
    Bd = Cv(n);
    var i = Bd[0], s = i.ImageWidth.values[0], o = i.ImageLength.values[0];
    e.width = s, e.height = o;
    var l = [], c = i.Compression ? i.Compression.values[0] : 1, d = i.SamplesPerPixel.values[0], h = [], f = 0, g = !1;
    if (i.BitsPerSample.values.forEach(function(Wt, ot, Pe) {
      h[ot] = {
        bitsPerSample: Wt,
        hasBytesPerSample: !1,
        bytesPerSample: void 0
      }, Wt % 8 === 0 && (h[ot].hasBytesPerSample = !0, h[ot].bytesPerSample = Wt / 8), f += Wt;
    }, void 0), f % 8 === 0) {
      g = !0;
      var y = f / 8;
    }
    var b = i.StripOffsets.values, _ = b.length;
    if (i.StripByteCounts)
      var x = i.StripByteCounts.values;
    else if (_ === 1)
      var x = [
        Math.ceil(s * o * f / 8)
      ];
    else
      throw Error("Cannot recover from missing StripByteCounts");
    for (var E = 0; E < _; E++) {
      var P = b[E];
      l[E] = [];
      for (var k = x[E], L = 0, F = 0, I = 1, M = !0, C = [], T = 0, N = 0, D = 0; L < k; L += I)
        switch (c) {
          case 1:
            for (var H = 0, C = []; H < d; H++)
              if (h[H].hasBytesPerSample) {
                var U = h[H].bytesPerSample * H;
                C.push(
                  Ue(
                    h[H].bytesPerSample,
                    P + L + U
                  )
                );
              } else {
                var G = xT(
                  h[H].bitsPerSample,
                  P + L,
                  F
                );
                throw C.push(G.bits), L = G.byteOffset - P, F = G.bitOffset, RangeError("Cannot handle sub-byte bits per sample");
              }
            if (l[E].push(C), g)
              I = y;
            else
              throw I = 0, RangeError("Cannot handle sub-byte bits per pixel");
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            break;
          case 5:
            break;
          case 6:
            break;
          case 7:
            break;
          case 32773:
            if (M) {
              M = !1;
              var Y = 1, Z = 1, B = Di.getInt8(
                P + L,
                tn
              );
              B >= 0 && B <= 127 ? Y = B + 1 : B >= -127 && B <= -1 ? Z = -B + 1 : M = !0;
            } else {
              for (var V = Ue(1, P + L), H = 0; H < Z; H++) {
                if (h[N].hasBytesPerSample)
                  D = D << 8 * T | V, T++, T === h[N].bytesPerSample && (C.push(D), D = T = 0, N++);
                else
                  throw RangeError("Cannot handle sub-byte bits per sample");
                N === d && (l[E].push(C), C = [], N = 0);
              }
              Y--, Y === 0 && (M = !0);
            }
            I = 1;
            break;
        }
    }
    if (e.getContext) {
      var W = e.getContext("2d");
      if (W.fillStyle = y0(255, 255, 255, 0), i.RowsPerStrip)
        var bt = i.RowsPerStrip.values[0];
      else
        var bt = o;
      var ut = l.length, z = o % bt, nt = z === 0 ? bt : z, tt = bt, et = 0, lt = i.PhotometricInterpretation.values[0], K = [], gt = 0;
      if (i.ExtraSamples && (K = i.ExtraSamples.values, gt = K.length), i.ColorMap)
        var q = i.ColorMap.values, J = Math.pow(2, h[0].bitsPerSample);
      for (var E = 0; E < ut; E++) {
        E + 1 === ut && (tt = nt);
        for (var ct = l[E].length, ft = et * E, rt = 0, Et = 0; Et < ct; rt++)
          for (var vt = 0; vt < s; vt++, Et++) {
            var X = l[E][Et], mt = 0, Ct = 0, Ht = 0, Kt = 1;
            if (gt > 0) {
              for (var Vt = 0; Vt < gt; Vt++)
                if (K[Vt] === 1 || K[Vt] === 2) {
                  Kt = X[3 + Vt] / 256;
                  break;
                }
            }
            switch (lt) {
              case 0:
                if (h[0].hasBytesPerSample)
                  var Rt = Math.pow(
                    16,
                    h[0].bytesPerSample * 2
                  );
                X.forEach(function(ot, Pe, Re) {
                  Re[Pe] = Rt - ot;
                });
              case 1:
                mt = Ct = Ht = Ss(
                  X[0],
                  h[0].bitsPerSample
                );
                break;
              case 2:
                mt = Ss(
                  X[0],
                  h[0].bitsPerSample
                ), Ct = Ss(
                  X[1],
                  h[1].bitsPerSample
                ), Ht = Ss(
                  X[2],
                  h[2].bitsPerSample
                );
                break;
              case 3:
                if (q === void 0)
                  throw Error("Palette image missing color map");
                var kt = X[0];
                mt = Ss(q[kt], 16), Ct = Ss(
                  q[J + kt],
                  16
                ), Ht = Ss(
                  q[2 * J + kt],
                  16
                );
                break;
              case 4:
                throw RangeError("Not Yet Implemented: Transparency mask");
              case 5:
                throw RangeError("Not Yet Implemented: CMYK");
              case 6:
                throw RangeError("Not Yet Implemented: YCbCr");
              case 8:
                throw RangeError("Not Yet Implemented: CIELab");
              default:
                throw RangeError(
                  "Unknown Photometric Interpretation:",
                  lt
                );
            }
            W.fillStyle = y0(mt, Ct, Ht, Kt), W.fillRect(vt, ft + rt, 1, 1);
          }
        et = tt;
      }
    }
    return e;
  }
}, Xf = (r) => {
  const {
    mainState: { currentDocument: t }
  } = r, { t: e } = $h(), [n, i] = up(!1), [s, o] = up(!1);
  return Pt(() => {
    if (!t || n)
      return;
    const l = document.getElementById("tiff-img");
    try {
      l && TT(t.fileData, l), i(!0);
    } catch {
      o(!0);
    }
  }, [t, n]), s ? /* @__PURE__ */ j(Bi, { ...r, children: /* @__PURE__ */ j("div", { children: e("brokenFile") }) }) : /* @__PURE__ */ j(Bi, { ...r, children: /* @__PURE__ */ j(PT, { id: "tiff-img" }) });
};
Xf.fileTypes = ["tif", "tiff", "image/tif", "image/tiff"];
Xf.weight = 0;
Xf.fileLoader = Fv;
const PT = Ft.canvas`
  max-width: 95%;
  max-height: 95%;
`, Yf = ({ mainState: { currentDocument: r } }) => /* @__PURE__ */ j(RT, { id: "txt-renderer", children: r == null ? void 0 : r.fileData });
Yf.fileTypes = ["txt", "text/plain"];
Yf.weight = 0;
Yf.fileLoader = E0;
const RT = Ft.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`;
var Tv = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(r, t) {
  (function(e, n) {
    r.exports = n();
  })(r1, function e() {
    var n = typeof self < "u" ? self : typeof window < "u" ? window : n !== void 0 ? n : {}, i = !n.document && !!n.postMessage, s = n.IS_PAPA_WORKER || !1, o = {}, l = 0, c = { parse: function(C, T) {
      var N = (T = T || {}).dynamicTyping || !1;
      if (M(N) && (T.dynamicTypingFunction = N, N = {}), T.dynamicTyping = N, T.transform = !!M(T.transform) && T.transform, T.worker && c.WORKERS_SUPPORTED) {
        var D = function() {
          if (!c.WORKERS_SUPPORTED)
            return !1;
          var U = (Y = n.URL || n.webkitURL || null, Z = e.toString(), c.BLOB_URL || (c.BLOB_URL = Y.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", Z, ")();"], { type: "text/javascript" })))), G = new n.Worker(U), Y, Z;
          return G.onmessage = P, G.id = l++, o[G.id] = G;
        }();
        return D.userStep = T.step, D.userChunk = T.chunk, D.userComplete = T.complete, D.userError = T.error, T.step = M(T.step), T.chunk = M(T.chunk), T.complete = M(T.complete), T.error = M(T.error), delete T.worker, void D.postMessage({ input: C, config: T, workerId: D.id });
      }
      var H = null;
      return c.NODE_STREAM_INPUT, typeof C == "string" ? (C = function(U) {
        return U.charCodeAt(0) === 65279 ? U.slice(1) : U;
      }(C), H = T.download ? new f(T) : new y(T)) : C.readable === !0 && M(C.read) && M(C.on) ? H = new b(T) : (n.File && C instanceof File || C instanceof Object) && (H = new g(T)), H.stream(C);
    }, unparse: function(C, T) {
      var N = !1, D = !0, H = ",", U = `\r
`, G = '"', Y = G + G, Z = !1, B = null, V = !1;
      (function() {
        if (typeof T == "object") {
          if (typeof T.delimiter != "string" || c.BAD_DELIMITERS.filter(function(z) {
            return T.delimiter.indexOf(z) !== -1;
          }).length || (H = T.delimiter), (typeof T.quotes == "boolean" || typeof T.quotes == "function" || Array.isArray(T.quotes)) && (N = T.quotes), typeof T.skipEmptyLines != "boolean" && typeof T.skipEmptyLines != "string" || (Z = T.skipEmptyLines), typeof T.newline == "string" && (U = T.newline), typeof T.quoteChar == "string" && (G = T.quoteChar), typeof T.header == "boolean" && (D = T.header), Array.isArray(T.columns)) {
            if (T.columns.length === 0)
              throw new Error("Option columns is empty");
            B = T.columns;
          }
          T.escapeChar !== void 0 && (Y = T.escapeChar + G), (typeof T.escapeFormulae == "boolean" || T.escapeFormulae instanceof RegExp) && (V = T.escapeFormulae instanceof RegExp ? T.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var W = new RegExp(x(G), "g");
      if (typeof C == "string" && (C = JSON.parse(C)), Array.isArray(C)) {
        if (!C.length || Array.isArray(C[0]))
          return bt(null, C, Z);
        if (typeof C[0] == "object")
          return bt(B || Object.keys(C[0]), C, Z);
      } else if (typeof C == "object")
        return typeof C.data == "string" && (C.data = JSON.parse(C.data)), Array.isArray(C.data) && (C.fields || (C.fields = C.meta && C.meta.fields || B), C.fields || (C.fields = Array.isArray(C.data[0]) ? C.fields : typeof C.data[0] == "object" ? Object.keys(C.data[0]) : []), Array.isArray(C.data[0]) || typeof C.data[0] == "object" || (C.data = [C.data])), bt(C.fields || [], C.data || [], Z);
      throw new Error("Unable to serialize unrecognized input");
      function bt(z, nt, tt) {
        var et = "";
        typeof z == "string" && (z = JSON.parse(z)), typeof nt == "string" && (nt = JSON.parse(nt));
        var lt = Array.isArray(z) && 0 < z.length, K = !Array.isArray(nt[0]);
        if (lt && D) {
          for (var gt = 0; gt < z.length; gt++)
            0 < gt && (et += H), et += ut(z[gt], gt);
          0 < nt.length && (et += U);
        }
        for (var q = 0; q < nt.length; q++) {
          var J = lt ? z.length : nt[q].length, ct = !1, ft = lt ? Object.keys(nt[q]).length === 0 : nt[q].length === 0;
          if (tt && !lt && (ct = tt === "greedy" ? nt[q].join("").trim() === "" : nt[q].length === 1 && nt[q][0].length === 0), tt === "greedy" && lt) {
            for (var rt = [], Et = 0; Et < J; Et++) {
              var vt = K ? z[Et] : Et;
              rt.push(nt[q][vt]);
            }
            ct = rt.join("").trim() === "";
          }
          if (!ct) {
            for (var X = 0; X < J; X++) {
              0 < X && !ft && (et += H);
              var mt = lt && K ? z[X] : X;
              et += ut(nt[q][mt], X);
            }
            q < nt.length - 1 && (!tt || 0 < J && !ft) && (et += U);
          }
        }
        return et;
      }
      function ut(z, nt) {
        if (z == null)
          return "";
        if (z.constructor === Date)
          return JSON.stringify(z).slice(1, 25);
        var tt = !1;
        V && typeof z == "string" && V.test(z) && (z = "'" + z, tt = !0);
        var et = z.toString().replace(W, Y);
        return (tt = tt || N === !0 || typeof N == "function" && N(z, nt) || Array.isArray(N) && N[nt] || function(lt, K) {
          for (var gt = 0; gt < K.length; gt++)
            if (-1 < lt.indexOf(K[gt]))
              return !0;
          return !1;
        }(et, c.BAD_DELIMITERS) || -1 < et.indexOf(H) || et.charAt(0) === " " || et.charAt(et.length - 1) === " ") ? G + et + G : et;
      }
    } };
    if (c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !i && !!n.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = E, c.ParserHandle = _, c.NetworkStreamer = f, c.FileStreamer = g, c.StringStreamer = y, c.ReadableStreamStreamer = b, n.jQuery) {
      var d = n.jQuery;
      d.fn.parse = function(C) {
        var T = C.config || {}, N = [];
        return this.each(function(U) {
          if (!(d(this).prop("tagName").toUpperCase() === "INPUT" && d(this).attr("type").toLowerCase() === "file" && n.FileReader) || !this.files || this.files.length === 0)
            return !0;
          for (var G = 0; G < this.files.length; G++)
            N.push({ file: this.files[G], inputElem: this, instanceConfig: d.extend({}, T) });
        }), D(), this;
        function D() {
          if (N.length !== 0) {
            var U, G, Y, Z, B = N[0];
            if (M(C.before)) {
              var V = C.before(B.file, B.inputElem);
              if (typeof V == "object") {
                if (V.action === "abort")
                  return U = "AbortError", G = B.file, Y = B.inputElem, Z = V.reason, void (M(C.error) && C.error({ name: U }, G, Y, Z));
                if (V.action === "skip")
                  return void H();
                typeof V.config == "object" && (B.instanceConfig = d.extend(B.instanceConfig, V.config));
              } else if (V === "skip")
                return void H();
            }
            var W = B.instanceConfig.complete;
            B.instanceConfig.complete = function(bt) {
              M(W) && W(bt, B.file, B.inputElem), H();
            }, c.parse(B.file, B.instanceConfig);
          } else
            M(C.complete) && C.complete();
        }
        function H() {
          N.splice(0, 1), D();
        }
      };
    }
    function h(C) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(T) {
        var N = F(T);
        N.chunkSize = parseInt(N.chunkSize), T.step || T.chunk || (N.chunkSize = null), this._handle = new _(N), (this._handle.streamer = this)._config = N;
      }).call(this, C), this.parseChunk = function(T, N) {
        if (this.isFirstChunk && M(this._config.beforeFirstChunk)) {
          var D = this._config.beforeFirstChunk(T);
          D !== void 0 && (T = D);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var H = this._partialLine + T;
        this._partialLine = "";
        var U = this._handle.parse(H, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var G = U.meta.cursor;
          this._finished || (this._partialLine = H.substring(G - this._baseIndex), this._baseIndex = G), U && U.data && (this._rowCount += U.data.length);
          var Y = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (s)
            n.postMessage({ results: U, workerId: c.WORKER_ID, finished: Y });
          else if (M(this._config.chunk) && !N) {
            if (this._config.chunk(U, this._handle), this._handle.paused() || this._handle.aborted())
              return void (this._halted = !0);
            U = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(U.data), this._completeResults.errors = this._completeResults.errors.concat(U.errors), this._completeResults.meta = U.meta), this._completed || !Y || !M(this._config.complete) || U && U.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), Y || U && U.meta.paused || this._nextChunk(), U;
        }
        this._halted = !0;
      }, this._sendError = function(T) {
        M(this._config.error) ? this._config.error(T) : s && this._config.error && n.postMessage({ workerId: c.WORKER_ID, error: T, finished: !1 });
      };
    }
    function f(C) {
      var T;
      (C = C || {}).chunkSize || (C.chunkSize = c.RemoteChunkSize), h.call(this, C), this._nextChunk = i ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(N) {
        this._input = N, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished)
          this._chunkLoaded();
        else {
          if (T = new XMLHttpRequest(), this._config.withCredentials && (T.withCredentials = this._config.withCredentials), i || (T.onload = I(this._chunkLoaded, this), T.onerror = I(this._chunkError, this)), T.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
            var N = this._config.downloadRequestHeaders;
            for (var D in N)
              T.setRequestHeader(D, N[D]);
          }
          if (this._config.chunkSize) {
            var H = this._start + this._config.chunkSize - 1;
            T.setRequestHeader("Range", "bytes=" + this._start + "-" + H);
          }
          try {
            T.send(this._config.downloadRequestBody);
          } catch (U) {
            this._chunkError(U.message);
          }
          i && T.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        T.readyState === 4 && (T.status < 200 || 400 <= T.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : T.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(N) {
          var D = N.getResponseHeader("Content-Range");
          return D === null ? -1 : parseInt(D.substring(D.lastIndexOf("/") + 1));
        }(T), this.parseChunk(T.responseText)));
      }, this._chunkError = function(N) {
        var D = T.statusText || N;
        this._sendError(new Error(D));
      };
    }
    function g(C) {
      var T, N;
      (C = C || {}).chunkSize || (C.chunkSize = c.LocalChunkSize), h.call(this, C);
      var D = typeof FileReader < "u";
      this.stream = function(H) {
        this._input = H, N = H.slice || H.webkitSlice || H.mozSlice, D ? ((T = new FileReader()).onload = I(this._chunkLoaded, this), T.onerror = I(this._chunkError, this)) : T = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var H = this._input;
        if (this._config.chunkSize) {
          var U = Math.min(this._start + this._config.chunkSize, this._input.size);
          H = N.call(H, this._start, U);
        }
        var G = T.readAsText(H, this._config.encoding);
        D || this._chunkLoaded({ target: { result: G } });
      }, this._chunkLoaded = function(H) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(H.target.result);
      }, this._chunkError = function() {
        this._sendError(T.error);
      };
    }
    function y(C) {
      var T;
      h.call(this, C = C || {}), this.stream = function(N) {
        return T = N, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var N, D = this._config.chunkSize;
          return D ? (N = T.substring(0, D), T = T.substring(D)) : (N = T, T = ""), this._finished = !T, this.parseChunk(N);
        }
      };
    }
    function b(C) {
      h.call(this, C = C || {});
      var T = [], N = !0, D = !1;
      this.pause = function() {
        h.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        h.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(H) {
        this._input = H, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        D && T.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), T.length ? this.parseChunk(T.shift()) : N = !0;
      }, this._streamData = I(function(H) {
        try {
          T.push(typeof H == "string" ? H : H.toString(this._config.encoding)), N && (N = !1, this._checkIsFinished(), this.parseChunk(T.shift()));
        } catch (U) {
          this._streamError(U);
        }
      }, this), this._streamError = I(function(H) {
        this._streamCleanUp(), this._sendError(H);
      }, this), this._streamEnd = I(function() {
        this._streamCleanUp(), D = !0, this._streamData("");
      }, this), this._streamCleanUp = I(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function _(C) {
      var T, N, D, H = Math.pow(2, 53), U = -H, G = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Y = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, Z = this, B = 0, V = 0, W = !1, bt = !1, ut = [], z = { data: [], errors: [], meta: {} };
      if (M(C.step)) {
        var nt = C.step;
        C.step = function(q) {
          if (z = q, lt())
            et();
          else {
            if (et(), z.data.length === 0)
              return;
            B += q.data.length, C.preview && B > C.preview ? N.abort() : (z.data = z.data[0], nt(z, Z));
          }
        };
      }
      function tt(q) {
        return C.skipEmptyLines === "greedy" ? q.join("").trim() === "" : q.length === 1 && q[0].length === 0;
      }
      function et() {
        return z && D && (gt("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), D = !1), C.skipEmptyLines && (z.data = z.data.filter(function(q) {
          return !tt(q);
        })), lt() && function() {
          if (!z)
            return;
          function q(ct, ft) {
            M(C.transformHeader) && (ct = C.transformHeader(ct, ft)), ut.push(ct);
          }
          if (Array.isArray(z.data[0])) {
            for (var J = 0; lt() && J < z.data.length; J++)
              z.data[J].forEach(q);
            z.data.splice(0, 1);
          } else
            z.data.forEach(q);
        }(), function() {
          if (!z || !C.header && !C.dynamicTyping && !C.transform)
            return z;
          function q(ct, ft) {
            var rt, Et = C.header ? {} : [];
            for (rt = 0; rt < ct.length; rt++) {
              var vt = rt, X = ct[rt];
              C.header && (vt = rt >= ut.length ? "__parsed_extra" : ut[rt]), C.transform && (X = C.transform(X, vt)), X = K(vt, X), vt === "__parsed_extra" ? (Et[vt] = Et[vt] || [], Et[vt].push(X)) : Et[vt] = X;
            }
            return C.header && (rt > ut.length ? gt("FieldMismatch", "TooManyFields", "Too many fields: expected " + ut.length + " fields but parsed " + rt, V + ft) : rt < ut.length && gt("FieldMismatch", "TooFewFields", "Too few fields: expected " + ut.length + " fields but parsed " + rt, V + ft)), Et;
          }
          var J = 1;
          return !z.data.length || Array.isArray(z.data[0]) ? (z.data = z.data.map(q), J = z.data.length) : z.data = q(z.data, 0), C.header && z.meta && (z.meta.fields = ut), V += J, z;
        }();
      }
      function lt() {
        return C.header && ut.length === 0;
      }
      function K(q, J) {
        return ct = q, C.dynamicTypingFunction && C.dynamicTyping[ct] === void 0 && (C.dynamicTyping[ct] = C.dynamicTypingFunction(ct)), (C.dynamicTyping[ct] || C.dynamicTyping) === !0 ? J === "true" || J === "TRUE" || J !== "false" && J !== "FALSE" && (function(ft) {
          if (G.test(ft)) {
            var rt = parseFloat(ft);
            if (U < rt && rt < H)
              return !0;
          }
          return !1;
        }(J) ? parseFloat(J) : Y.test(J) ? new Date(J) : J === "" ? null : J) : J;
        var ct;
      }
      function gt(q, J, ct, ft) {
        var rt = { type: q, code: J, message: ct };
        ft !== void 0 && (rt.row = ft), z.errors.push(rt);
      }
      this.parse = function(q, J, ct) {
        var ft = C.quoteChar || '"';
        if (C.newline || (C.newline = function(vt, X) {
          vt = vt.substring(0, 1048576);
          var mt = new RegExp(x(X) + "([^]*?)" + x(X), "gm"), Ct = (vt = vt.replace(mt, "")).split("\r"), Ht = vt.split(`
`), Kt = 1 < Ht.length && Ht[0].length < Ct[0].length;
          if (Ct.length === 1 || Kt)
            return `
`;
          for (var Vt = 0, Rt = 0; Rt < Ct.length; Rt++)
            Ct[Rt][0] === `
` && Vt++;
          return Vt >= Ct.length / 2 ? `\r
` : "\r";
        }(q, ft)), D = !1, C.delimiter)
          M(C.delimiter) && (C.delimiter = C.delimiter(q), z.meta.delimiter = C.delimiter);
        else {
          var rt = function(vt, X, mt, Ct, Ht) {
            var Kt, Vt, Rt, kt;
            Ht = Ht || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var Wt = 0; Wt < Ht.length; Wt++) {
              var ot = Ht[Wt], Pe = 0, Re = 0, ce = 0;
              Rt = void 0;
              for (var nn = new E({ comments: Ct, delimiter: ot, newline: X, preview: 10 }).parse(vt), v = 0; v < nn.data.length; v++)
                if (mt && tt(nn.data[v]))
                  ce++;
                else {
                  var u = nn.data[v].length;
                  Re += u, Rt !== void 0 ? 0 < u && (Pe += Math.abs(u - Rt), Rt = u) : Rt = u;
                }
              0 < nn.data.length && (Re /= nn.data.length - ce), (Vt === void 0 || Pe <= Vt) && (kt === void 0 || kt < Re) && 1.99 < Re && (Vt = Pe, Kt = ot, kt = Re);
            }
            return { successful: !!(C.delimiter = Kt), bestDelimiter: Kt };
          }(q, C.newline, C.skipEmptyLines, C.comments, C.delimitersToGuess);
          rt.successful ? C.delimiter = rt.bestDelimiter : (D = !0, C.delimiter = c.DefaultDelimiter), z.meta.delimiter = C.delimiter;
        }
        var Et = F(C);
        return C.preview && C.header && Et.preview++, T = q, N = new E(Et), z = N.parse(T, J, ct), et(), W ? { meta: { paused: !0 } } : z || { meta: { paused: !1 } };
      }, this.paused = function() {
        return W;
      }, this.pause = function() {
        W = !0, N.abort(), T = M(C.chunk) ? "" : T.substring(N.getCharIndex());
      }, this.resume = function() {
        Z.streamer._halted ? (W = !1, Z.streamer.parseChunk(T, !0)) : setTimeout(Z.resume, 3);
      }, this.aborted = function() {
        return bt;
      }, this.abort = function() {
        bt = !0, N.abort(), z.meta.aborted = !0, M(C.complete) && C.complete(z), T = "";
      };
    }
    function x(C) {
      return C.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function E(C) {
      var T, N = (C = C || {}).delimiter, D = C.newline, H = C.comments, U = C.step, G = C.preview, Y = C.fastMode, Z = T = C.quoteChar === void 0 || C.quoteChar === null ? '"' : C.quoteChar;
      if (C.escapeChar !== void 0 && (Z = C.escapeChar), (typeof N != "string" || -1 < c.BAD_DELIMITERS.indexOf(N)) && (N = ","), H === N)
        throw new Error("Comment character same as delimiter");
      H === !0 ? H = "#" : (typeof H != "string" || -1 < c.BAD_DELIMITERS.indexOf(H)) && (H = !1), D !== `
` && D !== "\r" && D !== `\r
` && (D = `
`);
      var B = 0, V = !1;
      this.parse = function(W, bt, ut) {
        if (typeof W != "string")
          throw new Error("Input must be a string");
        var z = W.length, nt = N.length, tt = D.length, et = H.length, lt = M(U), K = [], gt = [], q = [], J = B = 0;
        if (!W)
          return p();
        if (C.header && !bt) {
          var ct = W.split(D)[0].split(N), ft = [], rt = {}, Et = !1;
          for (var vt in ct) {
            var X = ct[vt];
            M(C.transformHeader) && (X = C.transformHeader(X, vt));
            var mt = X, Ct = rt[X] || 0;
            for (0 < Ct && (Et = !0, mt = X + "_" + Ct), rt[X] = Ct + 1; ft.includes(mt); )
              mt = mt + "_" + Ct;
            ft.push(mt);
          }
          if (Et) {
            var Ht = W.split(D);
            Ht[0] = ft.join(N), W = Ht.join(D);
          }
        }
        if (Y || Y !== !1 && W.indexOf(T) === -1) {
          for (var Kt = W.split(D), Vt = 0; Vt < Kt.length; Vt++) {
            if (q = Kt[Vt], B += q.length, Vt !== Kt.length - 1)
              B += D.length;
            else if (ut)
              return p();
            if (!H || q.substring(0, et) !== H) {
              if (lt) {
                if (K = [], ce(q.split(N)), S(), V)
                  return p();
              } else
                ce(q.split(N));
              if (G && G <= Vt)
                return K = K.slice(0, G), p(!0);
            }
          }
          return p();
        }
        for (var Rt = W.indexOf(N, B), kt = W.indexOf(D, B), Wt = new RegExp(x(Z) + x(T), "g"), ot = W.indexOf(T, B); ; )
          if (W[B] !== T)
            if (H && q.length === 0 && W.substring(B, B + et) === H) {
              if (kt === -1)
                return p();
              B = kt + tt, kt = W.indexOf(D, B), Rt = W.indexOf(N, B);
            } else if (Rt !== -1 && (Rt < kt || kt === -1))
              q.push(W.substring(B, Rt)), B = Rt + nt, Rt = W.indexOf(N, B);
            else {
              if (kt === -1)
                break;
              if (q.push(W.substring(B, kt)), u(kt + tt), lt && (S(), V))
                return p();
              if (G && K.length >= G)
                return p(!0);
            }
          else
            for (ot = B, B++; ; ) {
              if ((ot = W.indexOf(T, ot + 1)) === -1)
                return ut || gt.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: K.length, index: B }), v();
              if (ot === z - 1)
                return v(W.substring(B, ot).replace(Wt, T));
              if (T !== Z || W[ot + 1] !== Z) {
                if (T === Z || ot === 0 || W[ot - 1] !== Z) {
                  Rt !== -1 && Rt < ot + 1 && (Rt = W.indexOf(N, ot + 1)), kt !== -1 && kt < ot + 1 && (kt = W.indexOf(D, ot + 1));
                  var Pe = nn(kt === -1 ? Rt : Math.min(Rt, kt));
                  if (W.substr(ot + 1 + Pe, nt) === N) {
                    q.push(W.substring(B, ot).replace(Wt, T)), W[B = ot + 1 + Pe + nt] !== T && (ot = W.indexOf(T, B)), Rt = W.indexOf(N, B), kt = W.indexOf(D, B);
                    break;
                  }
                  var Re = nn(kt);
                  if (W.substring(ot + 1 + Re, ot + 1 + Re + tt) === D) {
                    if (q.push(W.substring(B, ot).replace(Wt, T)), u(ot + 1 + Re + tt), Rt = W.indexOf(N, B), ot = W.indexOf(T, B), lt && (S(), V))
                      return p();
                    if (G && K.length >= G)
                      return p(!0);
                    break;
                  }
                  gt.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: K.length, index: B }), ot++;
                }
              } else
                ot++;
            }
        return v();
        function ce(R) {
          K.push(R), J = B;
        }
        function nn(R) {
          var O = 0;
          if (R !== -1) {
            var $ = W.substring(ot + 1, R);
            $ && $.trim() === "" && (O = $.length);
          }
          return O;
        }
        function v(R) {
          return ut || (R === void 0 && (R = W.substring(B)), q.push(R), B = z, ce(q), lt && S()), p();
        }
        function u(R) {
          B = R, ce(q), q = [], kt = W.indexOf(D, B);
        }
        function p(R) {
          return { data: K, errors: gt, meta: { delimiter: N, linebreak: D, aborted: V, truncated: !!R, cursor: J + (bt || 0) } };
        }
        function S() {
          U(p()), K = [], gt = [];
        }
      }, this.abort = function() {
        V = !0;
      }, this.getCharIndex = function() {
        return B;
      };
    }
    function P(C) {
      var T = C.data, N = o[T.workerId], D = !1;
      if (T.error)
        N.userError(T.error, T.file);
      else if (T.results && T.results.data) {
        var H = { abort: function() {
          D = !0, k(T.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: L, resume: L };
        if (M(N.userStep)) {
          for (var U = 0; U < T.results.data.length && (N.userStep({ data: T.results.data[U], errors: T.results.errors, meta: T.results.meta }, H), !D); U++)
            ;
          delete T.results;
        } else
          M(N.userChunk) && (N.userChunk(T.results, H, T.file), delete T.results);
      }
      T.finished && !D && k(T.workerId, T.results);
    }
    function k(C, T) {
      var N = o[C];
      M(N.userComplete) && N.userComplete(T), N.terminate(), delete o[C];
    }
    function L() {
      throw new Error("Not implemented.");
    }
    function F(C) {
      if (typeof C != "object" || C === null)
        return C;
      var T = Array.isArray(C) ? [] : {};
      for (var N in C)
        T[N] = F(C[N]);
      return T;
    }
    function I(C, T) {
      return function() {
        C.apply(T, arguments);
      };
    }
    function M(C) {
      return typeof C == "function";
    }
    return s && (n.onmessage = function(C) {
      var T = C.data;
      if (c.WORKER_ID === void 0 && T && (c.WORKER_ID = T.workerId), typeof T.input == "string")
        n.postMessage({ workerId: c.WORKER_ID, results: c.parse(T.input, T.config), finished: !0 });
      else if (n.File && T.input instanceof File || T.input instanceof Object) {
        var N = c.parse(T.input, T.config);
        N && n.postMessage({ workerId: c.WORKER_ID, results: N, finished: !0 });
      }
    }), (f.prototype = Object.create(h.prototype)).constructor = f, (g.prototype = Object.create(h.prototype)).constructor = g, (y.prototype = Object.create(y.prototype)).constructor = y, (b.prototype = Object.create(h.prototype)).constructor = b, c;
  });
})(Tv);
var kT = Tv.exports;
const LT = /* @__PURE__ */ P0(kT), Kf = ({
  mainState: { currentDocument: r, config: t }
}) => {
  const [e, n] = up([]);
  return Pt(() => {
    var i;
    if (r != null && r.fileData) {
      const s = LT.parse(r.fileData, {
        delimiter: (t == null ? void 0 : t.csvDelimiter) ?? ","
      });
      !((i = s.errors) != null && i.length) && s.data && n(s.data);
    }
  }, [r, t == null ? void 0 : t.csvDelimiter]), e.length ? /* @__PURE__ */ j(IT, { children: /* @__PURE__ */ ws(FT, { children: [
    /* @__PURE__ */ j("thead", { children: /* @__PURE__ */ j("tr", { children: e[0].map((i) => /* @__PURE__ */ j("th", { children: i }, i)) }) }),
    /* @__PURE__ */ j("tbody", { children: e.slice(1, e.length).map((i) => /* @__PURE__ */ j("tr", { children: i.map((s) => /* @__PURE__ */ j("td", { children: s }, s)) }, i.join(""))) })
  ] }) }) : null;
};
Kf.fileTypes = ["csv", "text/csv"];
Kf.weight = 0;
Kf.fileLoader = E0;
const IT = Ft.div`
  width: 100%;
`, FT = Ft.table`
  width: 100%;
  text-align: left;

  th,
  td {
    padding: 5px 10px;

    &:empty {
      display: none;
    }
  }
`, mm = (r) => /* @__PURE__ */ j(Bi, { ...r });
mm.fileTypes = ["gif", "image/gif"];
mm.weight = 0;
const ym = ({ mainState: { currentDocument: r } }) => r ? /* @__PURE__ */ j(MT, { id: "video-renderer", children: /* @__PURE__ */ j(DT, { controls: !0, src: r.uri }) }) : null;
ym.fileTypes = ["video/mp4", "video/quicktime", "video/x-msvideo"];
ym.weight = 0;
const MT = Ft.div`
  width: 100%;
`, DT = Ft.video`
  width: 100%;
  height: 100%;
  border: 0;
`, bm = (r) => /* @__PURE__ */ j(Bi, { ...r });
bm.fileTypes = ["webp", "image/webp"];
bm.weight = 0;
const qT = [
  Qg,
  Rf,
  tm,
  kf,
  pm,
  gm,
  Xf,
  Yf,
  Kf,
  mm,
  ym,
  bm
];
export {
  Ep as B,
  Kf as C,
  qT as D,
  pm as F,
  Rf as H,
  tm as J,
  kf as M,
  gm as P,
  Xf as T,
  ym as V,
  bm as W,
  zT as a,
  Fv as b,
  r1 as c,
  GT as d,
  _0 as e,
  $T as f,
  P0 as g,
  HT as h,
  Qg as i,
  Yf as j,
  mm as k,
  dt as p,
  UT as s,
  E0 as t
};
