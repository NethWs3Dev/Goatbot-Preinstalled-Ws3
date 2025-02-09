// sorry men hehhe
process.stdout.write("]2;Goat Bot V2 - Made by NTKhang\\");
function decode(_0x2f7cf5) {
  _0x2f7cf5 = Buffer.from(_0x2f7cf5, "hex").toString("utf-8");
  _0x2f7cf5 = Buffer.from(_0x2f7cf5, "hex").toString("utf-8");
  _0x2f7cf5 = Buffer.from(_0x2f7cf5, "base64").toString("utf-8");
  return _0x2f7cf5;
}
const gradient = require("gradient-string");
const axios = require("axios");
const path = require("path");
const readline = require("readline");
const fs = require("fs-extra");
const toptp = require("totp-generator");
const login = require("ws3-fca");
const qr = new (require("qrcode-reader"))();
const Canvas = require("canvas");
const https = require("https");
async function getName(_0x49f3e1) {
  try {
    const _0x29922f = await axios.post("https://www.facebook.com/api/graphql/?q=" + ("node(" + _0x49f3e1 + "){name}"));
    return _0x29922f.data[_0x49f3e1].name;
  } catch (_0x4cea29) {
    return null;
  }
}
function compareVersion(_0x4d97f5, _0x1275bf) {
  const _0x5cc593 = _0x4d97f5.split('.');
  const _0x239707 = _0x1275bf.split('.');
  for (let _0x4587a7 = 0; _0x4587a7 < 3; _0x4587a7++) {
    if (parseInt(_0x5cc593[_0x4587a7]) > parseInt(_0x239707[_0x4587a7])) {
      return 1;
    }
    if (parseInt(_0x5cc593[_0x4587a7]) < parseInt(_0x239707[_0x4587a7])) {
      return -1;
    }
  }
  return 0;
}
const {
  writeFileSync,
  readFileSync,
  existsSync,
  watch
} = require("fs-extra");
const handlerWhenListenHasError = require("./handlerWhenListenHasError.js");
const checkLiveCookie = require("./checkLiveCookie.js");
const {
  callbackListenTime,
  storage5Message
} = global.GoatBot;
const {
  log,
  logColor,
  getPrefix,
  createOraDots,
  jsonStringifyColor,
  getText,
  convertTime,
  colors,
  randomString
} = global.utils;
const sleep = _0x65175f => new Promise(_0x44d8b6 => setTimeout(_0x44d8b6, _0x65175f));
const currentVersion = require(process.cwd() + "/package.json").version;
function centerText(_0x604a53, _0xf9d404) {
  const _0x47e90d = process.stdout.columns;
  const _0x4c8d6f = Math.floor((_0x47e90d - (_0xf9d404 || _0x604a53.length)) / 2);
  const _0x2eb9dc = _0x47e90d - _0x4c8d6f - (_0xf9d404 || _0x604a53.length);
  const _0x148ec4 = ' '.repeat(_0x4c8d6f > 0 ? _0x4c8d6f : 0) + _0x604a53 + ' '.repeat(_0x2eb9dc > 0 ? _0x2eb9dc : 0);
  console.log(_0x148ec4);
}
const titles = [["██████╗  ██████╗  █████╗ ████████╗    ██╗   ██╗██████╗", "██╔════╝ ██╔═══██╗██╔══██╗╚══██╔══╝    ██║   ██║╚════██╗", "██║  ███╗██║   ██║███████║   ██║       ██║   ██║ █████╔╝", "██║   ██║██║   ██║██╔══██║   ██║       ╚██╗ ██╔╝██╔═══╝", "╚██████╔╝╚██████╔╝██║  ██║   ██║        ╚████╔╝ ███████╗", "╚═════╝  ╚═════╝ ╚═╝  ╚═╝   ╚═╝         ╚═══╝  ╚══════╝"], ["█▀▀ █▀█ ▄▀█ ▀█▀  █▄▄ █▀█ ▀█▀  █░█ ▀█", "█▄█ █▄█ █▀█ ░█░  █▄█ █▄█ ░█░  ▀▄▀ █▄"], ["G O A T B O T  V 2 @" + currentVersion], ["GOATBOT V2"]];
const maxWidth = process.stdout.columns;
const title = maxWidth > 58 ? titles[0] : maxWidth > 36 ? titles[1] : maxWidth > 26 ? titles[2] : titles[3];
console.log(gradient("#f5af19", "#f12711")(createLine(null, true)));
console.log();
for (const text of title) {
  const textColor = gradient("#FA8BFF", "#2BD2FF", "#2BFF88")(text);
  centerText(textColor, text.length);
}
let subTitle = "GoatBot V2@" + currentVersion + "- A simple Bot chat messenger use personal account";
const subTitleArray = [];
if (subTitle.length > maxWidth) {
  while (subTitle.length > maxWidth) {
    let lastSpace = subTitle.slice(0, maxWidth).lastIndexOf(' ');
    lastSpace = lastSpace == -1 ? maxWidth : lastSpace;
    subTitleArray.push(subTitle.slice(0, lastSpace).trim());
    subTitle = subTitle.slice(lastSpace).trim();
  }
  if (subTitle) {
    subTitleArray.push(subTitle);
  } else {
    '';
  }
} else {
  subTitleArray.push(subTitle);
}
for (const t of subTitleArray) {
  const textColor2 = gradient("#9F98E8", "#AFF6CF")(t);
  centerText(textColor2, t.length);
}
centerText(gradient("#9F98E8", "#AFF6CF")("Created by NTKhang with ♡"), "Created by NTKhang with ♡".length);
centerText(gradient("#9F98E8", "#AFF6CF")("Source code: https://github.com/ntkhang03/Goat-Bot-V2"), "Source code: https://github.com/ntkhang03/Goat-Bot-V2".length);
centerText(gradient("#f5af19", "#f12711")("ALL VERSIONS NOT RELEASED HERE ARE FAKE"), "ALL VERSIONS NOT RELEASED HERE ARE FAKE".length);
let widthConsole = process.stdout.columns;
if (widthConsole > 50) {
  widthConsole = 50;
}
function createLine(_0x474bfb, _0x40435f = false) {
  if (!_0x474bfb) {
    return Array(_0x40435f ? process.stdout.columns : widthConsole).fill('─').join('');
  } else {
    _0x474bfb = ' ' + _0x474bfb.trim() + ' ';
    const _0x45abb4 = _0x474bfb.length;
    const _0x36ee41 = _0x40435f ? process.stdout.columns - _0x45abb4 : widthConsole - _0x45abb4;
    let _0x26e437 = Math.floor(_0x36ee41 / 2);
    if (_0x26e437 < 0 || isNaN(_0x26e437)) {
      _0x26e437 = 0;
    }
    const _0x271ee3 = Array(_0x26e437).fill('─').join('');
    return _0x271ee3 + _0x474bfb + _0x271ee3;
  }
}
const character = createLine();
const clearLines = _0x514240 => {
  for (let _0x280324 = 0; _0x280324 < _0x514240; _0x280324++) {
    const _0x339dfa = _0x280324 === 0 ? null : -1;
    process.stdout.moveCursor(0, _0x339dfa);
    process.stdout.clearLine(1);
  }
  process.stdout.cursorTo(0);
  process.stdout.write('');
};
async function input(_0xd531d3, _0x3df9d7 = false) {
  const _0x17aae1 = readline.createInterface({
    'input': process.stdin,
    'output': process.stdout
  });
  if (_0x3df9d7) {
    _0x17aae1.input.on("keypress", function () {
      const _0x34c465 = _0x17aae1.line.length;
      readline.moveCursor(_0x17aae1.output, -_0x34c465, 0);
      readline.clearLine(_0x17aae1.output, 1);
      for (let _0x4d44fa = 0; _0x4d44fa < _0x34c465; _0x4d44fa++) {
        _0x17aae1.output.write('*');
      }
    });
  }
  return new Promise(_0x431b64 => _0x17aae1.question(_0xd531d3, _0x2f1c5a => {
    _0x17aae1.close();
    _0x431b64(_0x2f1c5a);
  }));
}
qr.readQrCode = async function (_0x24def0) {
  const _0x21669a = await Canvas.loadImage(_0x24def0);
  const _0x468712 = Canvas.createCanvas(_0x21669a.width, _0x21669a.height);
  const _0x1fceaa = _0x468712.getContext('2d');
  _0x1fceaa.drawImage(_0x21669a, 0, 0);
  const _0x555a5c = _0x1fceaa.getImageData(0, 0, _0x21669a.width, _0x21669a.height);
  let _0x360baa;
  qr.callback = function (_0x5a4086, _0x553ee4) {
    if (_0x5a4086) {
      throw _0x5a4086;
    }
    _0x360baa = _0x553ee4;
  };
  qr.decode(_0x555a5c);
  return _0x360baa.result;
};
const {
  dirAccount
} = global.client;
const {
  facebookAccount
} = global.GoatBot.config;
function responseUptimeSuccess(_0x31a3e3, _0x165e56) {
  _0x165e56.type("json").send({
    'status': "success",
    'uptime': process.uptime(),
    'unit': "seconds"
  });
}
function responseUptimeError(_0x7a7bae, _0x4c333a) {
  _0x4c333a.status(500).type("json").send({
    'status': "error",
    'uptime': process.uptime(),
    'statusAccountBot': global.statusAccountBot
  });
}
function checkAndTrimString(_0x2f681f) {
  if (typeof _0x2f681f == "string") {
    return _0x2f681f.trim();
  }
  return _0x2f681f;
}
function filterKeysAppState(_0x5e0090) {
  return _0x5e0090.filter(_0xcd3826 => ["c_user", 'xs', "datr", 'fr', 'sb', "i_user"].includes(_0xcd3826.key));
}
global.responseUptimeCurrent = responseUptimeSuccess;
global.responseUptimeSuccess = responseUptimeSuccess;
global.responseUptimeError = responseUptimeError;
global.statusAccountBot = "good";
let changeFbStateByCode = false;
let latestChangeContentAccount = fs.statSync(dirAccount).mtimeMs;
let dashBoardIsRunning = false;
async function getAppStateFromEmail(_0x40378a = {
  '_start': () => {},
  '_stop': () => {}
}, _0x1682e3) {
  const {
    email: _0x5c2468,
    password: _0x14405e,
    userAgent: _0x2b499f,
    proxy: _0x2b77a8
  } = _0x1682e3;
  const _0xb6aaae = require(process.env.NODE_ENV === "development" ? "./getFbstate1.dev.js" : "./getFbstate1.js");
  let _0x1091e7;
  let _0x1ef8e3;
  try {
    try {
      _0x1ef8e3 = await _0xb6aaae(checkAndTrimString(_0x5c2468), checkAndTrimString(_0x14405e), _0x2b499f, _0x2b77a8);
      _0x40378a._stop();
    } catch (_0x5bd004) {
      if (_0x5bd004["continue"]) {
        let _0x5740bf = 0;
        let _0x3f37b5 = false;
        await async function _0x1aff9c(_0x386d9a) {
          if (_0x386d9a && _0x3f37b5) {
            _0x40378a._stop();
            log.error("LOGIN FACEBOOK", _0x386d9a);
            process.exit();
          }
          if (_0x386d9a) {
            _0x40378a._stop();
            log.warn("LOGIN FACEBOOK", _0x386d9a);
          }
          if (_0x1682e3["2FASecret"] && _0x5740bf == 0) {
            switch ([".png", ".jpg", ".jpeg"].some(_0x218433 => _0x1682e3["2FASecret"].endsWith(_0x218433))) {
              case true:
                _0x1091e7 = (await qr.readQrCode(process.cwd() + '/' + _0x1682e3["2FASecret"])).replace(/.*secret=(.*)&digits.*/g, '$1');
                break;
              case false:
                _0x1091e7 = _0x1682e3["2FASecret"];
                break;
            }
          } else {
            _0x40378a._stop();
            _0x1091e7 = await input("> Enter 2FA code or secret: ");
            readline.moveCursor(process.stderr, 0, -1);
            readline.clearScreenDown(process.stderr);
          }
          const _0x2de0ef = isNaN(_0x1091e7) ? toptp(_0x1091e7.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, '').replace(/[đ|Đ]/g, _0x348e70 => _0x348e70 == 'đ' ? 'd' : 'D').replace(/\(|\)|\,/g, '').replace(/ /g, '')) : _0x1091e7;
          _0x40378a._start();
          try {
            _0x1ef8e3 = JSON.parse(JSON.stringify(await _0x5bd004["continue"](_0x2de0ef)));
            _0x1ef8e3 = _0x1ef8e3.map(_0x11fe59 => ({
              'key': _0x11fe59.key,
              'value': _0x11fe59.value,
              'domain': _0x11fe59.domain,
              'path': _0x11fe59.path,
              'hostOnly': _0x11fe59.hostOnly,
              'creation': _0x11fe59.creation,
              'lastAccessed': _0x11fe59.lastAccessed
            })).filter(_0x5c6bb9 => _0x5c6bb9.key);
            _0x40378a._stop();
          } catch (_0x461a50) {
            _0x5740bf++;
            if (!_0x461a50["continue"]) {
              _0x3f37b5 = true;
            }
            await _0x1aff9c(_0x461a50.message);
          }
        }(_0x5bd004.message);
      } else {
        throw _0x5bd004;
      }
    }
  } catch (_0xf9412c) {
    const _0xf42273 = require(process.env.NODE_ENV === "development" ? "./loginMbasic.dev.js" : "./loginMbasic.js");
    if (_0x1682e3["2FASecret"]) {
      switch ([".png", ".jpg", ".jpeg"].some(_0x1700a2 => _0x1682e3["2FASecret"].endsWith(_0x1700a2))) {
        case true:
          _0x1091e7 = (await qr.readQrCode(process.cwd() + '/' + _0x1682e3["2FASecret"])).replace(/.*secret=(.*)&digits.*/g, '$1');
          break;
        case false:
          _0x1091e7 = _0x1682e3["2FASecret"];
          break;
      }
    }
    _0x1ef8e3 = await _0xf42273({
      'email': _0x5c2468,
      'pass': _0x14405e,
      'twoFactorSecretOrCode': _0x1091e7,
      'userAgent': _0x2b499f,
      'proxy': _0x2b77a8
    });
    _0x1ef8e3 = _0x1ef8e3.map(_0xbb6a0b => {
      _0xbb6a0b.key = _0xbb6a0b.name;
      delete _0xbb6a0b.name;
      return _0xbb6a0b;
    });
    _0x1ef8e3 = filterKeysAppState(_0x1ef8e3);
  }
  global.GoatBot.config.facebookAccount["2FASecret"] = _0x1091e7 || '';
  writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
  return _0x1ef8e3;
}
function isNetScapeCookie(_0x491016) {
  if (typeof _0x491016 !== "string") {
    return false;
  }
  return /(.+)\t(1|TRUE|true)\t([\w\/.-]*)\t(1|TRUE|true)\t\d+\t([\w-]+)\t(.+)/i.test(_0x491016);
}
function netScapeToCookies(_0x5d54e3) {
  const _0x525c48 = [];
  const _0x569ffa = _0x5d54e3.split("\n");
  _0x569ffa.forEach(_0x294f6b => {
    if (_0x294f6b.trim().startsWith('#')) {
      return;
    }
    const _0x598f3c = _0x294f6b.split("\t").map(_0x11b902 => _0x11b902.trim()).filter(_0x424d6e => _0x424d6e.length > 0);
    if (_0x598f3c.length < 7) {
      return;
    }
    const _0x30ce8d = {
      'key': _0x598f3c[5],
      'value': _0x598f3c[6],
      'domain': _0x598f3c[0],
      'path': _0x598f3c[2],
      'hostOnly': _0x598f3c[1] === "TRUE",
      'creation': new Date(_0x598f3c[4] * 1000).toISOString(),
      'lastAccessed': new Date().toISOString()
    };
    _0x525c48.push(_0x30ce8d);
  });
  return _0x525c48;
}
function pushI_user(_0x62e44a, _0x40bcab) {
  _0x62e44a.push({
    'key': "i_user",
    'value': _0x40bcab || facebookAccount.i_user,
    'domain': "facebook.com",
    'path': '/',
    'hostOnly': false,
    'creation': new Date().toISOString(),
    'lastAccessed': new Date().toISOString()
  });
  return _0x62e44a;
}
let spin;
async function getAppStateToLogin(_0x435f30) {
  let _0x2a8673 = [];
  if (_0x435f30) {
    return await getAppStateFromEmail(undefined, facebookAccount);
  }
  if (!existsSync(dirAccount)) {
    return log.error("LOGIN FACEBOOK", getText("login", "notFoundDirAccount", colors.green(dirAccount)));
  }
  const _0x630b3 = readFileSync(dirAccount, "utf8");
  try {
    const _0x1c6565 = _0x630b3.replace(/\|/g, "\n").split("\n").map(_0x5802be => _0x5802be.trim()).filter(_0x5ab69b => _0x5ab69b);
    if (_0x630b3.startsWith("EAAAA")) {
      try {
        spin = createOraDots(getText("login", "loginToken"));
        spin._start();
        _0x2a8673 = await require("./getFbstate.js")(_0x630b3);
      } catch (_0x55a93a) {
        _0x55a93a.name = "TOKEN_ERROR";
        throw _0x55a93a;
      }
    } else {
      if (_0x630b3.match(/^(?:\s*\w+\s*=\s*[^;]*;?)+/)) {
        spin = createOraDots(getText("login", "loginCookieString"));
        spin._start();
        _0x2a8673 = _0x630b3.split(';').map(_0x2a9276 => {
          const [_0x11c21d, _0x2adab3] = _0x2a9276.split('=');
          return {
            'key': (_0x11c21d || '').trim(),
            'value': (_0x2adab3 || '').trim(),
            'domain': "facebook.com",
            'path': '/',
            'hostOnly': true,
            'creation': new Date().toISOString(),
            'lastAccessed': new Date().toISOString()
          };
        }).filter(_0x26face => _0x26face.key && _0x26face.value && _0x26face.key != "x-referer");
      } else {
        if (isNetScapeCookie(_0x630b3)) {
          spin = createOraDots(getText("login", "loginCookieNetscape"));
          spin._start();
          _0x2a8673 = netScapeToCookies(_0x630b3);
        } else {
          if ((_0x1c6565.length == 2 || _0x1c6565.length == 3) && !_0x1c6565.slice(0, 2).map(_0x4ae5e2 => _0x4ae5e2.trim()).some(_0x366949 => _0x366949.includes(' '))) {
            global.GoatBot.config.facebookAccount.email = _0x1c6565[0];
            global.GoatBot.config.facebookAccount.password = _0x1c6565[1];
            if (_0x1c6565[2]) {
              const _0x596024 = _0x1c6565[2].replace(/ /g, '');
              global.GoatBot.config.facebookAccount["2FASecret"] = _0x596024;
            }
            writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
          } else {
            try {
              spin = createOraDots(getText("login", "loginCookieArray"));
              spin._start();
              _0x2a8673 = JSON.parse(_0x630b3);
            } catch (_0x50824b) {
              const _0x33ddd4 = new Error(path.basename(dirAccount) + " is invalid");
              _0x33ddd4.name = "ACCOUNT_ERROR";
              throw _0x33ddd4;
            }
            if (_0x2a8673.some(_0x4d5b7f => _0x4d5b7f.name)) {
              _0x2a8673 = _0x2a8673.map(_0x8412d7 => {
                _0x8412d7.key = _0x8412d7.name;
                delete _0x8412d7.name;
                return _0x8412d7;
              });
            } else {
              if (!_0x2a8673.some(_0x5b2ee9 => _0x5b2ee9.key)) {
                const _0x251af8 = new Error(path.basename(dirAccount) + " is invalid");
                _0x251af8.name = "ACCOUNT_ERROR";
                throw _0x251af8;
              }
            }
            _0x2a8673 = _0x2a8673.map(_0x7c603b => ({
              ..._0x7c603b,
              'domain': "facebook.com",
              'path': '/',
              'hostOnly': false,
              'creation': new Date().toISOString(),
              'lastAccessed': new Date().toISOString()
            })).filter(_0x5222fa => _0x5222fa.key && _0x5222fa.value && _0x5222fa.key != "x-referer");
          }
        }
      }
      if (!(await checkLiveCookie(_0x2a8673.map(_0x3b44d1 => _0x3b44d1.key + '=' + _0x3b44d1.value).join('; '), facebookAccount.userAgent))) {
        const _0x33b7b9 = new Error("Cookie is invalid");
        _0x33b7b9.name = "COOKIE_INVALID";
        throw _0x33b7b9;
      }
    }
  } catch (_0x3751b3) {
    if (spin) {
      spin._stop();
    }
    let {
      email: _0x4be790,
      password: _0x33cb87
    } = facebookAccount;
    if (_0x3751b3.name === "TOKEN_ERROR") {
      log.err("LOGIN FACEBOOK", getText("login", "tokenError", colors.green("EAAAA..."), colors.green(dirAccount)));
    } else {
      if (_0x3751b3.name === "COOKIE_INVALID") {
        log.err("LOGIN FACEBOOK", getText("login", "cookieError"));
      }
    }
    if (!_0x4be790 || !_0x33cb87) {
      log.warn("LOGIN FACEBOOK", getText("login", "cannotFindAccount"));
      const _0x3b3e99 = readline.createInterface({
        'input': process.stdin,
        'output': process.stdout
      });
      const _0xa3b278 = [getText("login", "chooseAccount"), getText("login", "chooseToken"), getText("login", "chooseCookieString"), getText("login", "chooseCookieArray")];
      let _0x5a1fb2 = 0;
      await new Promise(_0x484ab1 => {
        function _0x20719a() {
          _0x3b3e99.output.write("\r" + _0xa3b278.map((_0x46a7ef, _0x110094) => _0x110094 === _0x5a1fb2 ? colors.blueBright("> (" + (_0x110094 + 1) + ') ' + _0x46a7ef) : "  (" + (_0x110094 + 1) + ') ' + _0x46a7ef).join("\n") + "");
          _0x3b3e99.write("[?25l");
        }
        _0x3b3e99.input.on("keypress", (_0x8072e, _0x5de83a) => {
          if (_0x5de83a.name === 'up') {
            _0x5a1fb2 = (_0x5a1fb2 - 1 + _0xa3b278.length) % _0xa3b278.length;
          } else {
            if (_0x5de83a.name === "down") {
              _0x5a1fb2 = (_0x5a1fb2 + 1) % _0xa3b278.length;
            } else {
              if (!isNaN(_0x5de83a.name)) {
                const _0x2e9d93 = parseInt(_0x5de83a.name);
                if (_0x2e9d93 >= 0 && _0x2e9d93 <= _0xa3b278.length) {
                  _0x5a1fb2 = _0x2e9d93 - 1;
                }
                process.stdout.write("[1D");
              } else if (_0x5de83a.name === "enter" || _0x5de83a.name === "return") {
                _0x3b3e99.input.removeAllListeners("keypress");
                _0x3b3e99.close();
                clearLines(_0xa3b278.length + 1);
                _0x20719a();
                _0x484ab1();
              } else {
                process.stdout.write("[1D");
              }
            }
          }
          clearLines(_0xa3b278.length);
          _0x20719a();
        });
        _0x20719a();
      });
      _0x3b3e99.write("[?25h\n");
      clearLines(_0xa3b278.length + 1);
      log.info("LOGIN FACEBOOK", getText("login", "loginWith", _0xa3b278[_0x5a1fb2]));
      if (_0x5a1fb2 == 0) {
        _0x4be790 = await input(getText("login", "inputEmail") + ' ');
        _0x33cb87 = await input(getText("login", "inputPassword") + ' ', true);
        const _0x377a64 = await input(getText("login", "input2FA") + ' ');
        facebookAccount.email = _0x4be790 || '';
        facebookAccount.password = _0x33cb87 || '';
        facebookAccount["2FASecret"] = _0x377a64 || '';
        writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
      } else {
        if (_0x5a1fb2 == 1) {
          const _0x1ac43f = await input(getText("login", "inputToken") + ' ');
          writeFileSync(global.client.dirAccount, _0x1ac43f);
        } else {
          if (_0x5a1fb2 == 2) {
            const _0x3c83a4 = await input(getText("login", "inputCookieString") + ' ');
            writeFileSync(global.client.dirAccount, _0x3c83a4);
          } else {
            const _0x398c12 = await input(getText("login", "inputCookieArray") + ' ');
            writeFileSync(global.client.dirAccount, JSON.stringify(JSON.parse(_0x398c12), null, 2));
          }
        }
      }
      return await getAppStateToLogin();
    }
    log.info("LOGIN FACEBOOK", getText("login", "loginPassword"));
    log.info("ACCOUNT INFO", "Email: " + facebookAccount.email + ", I_User: " + (facebookAccount.i_user || "(empty)"));
    spin = createOraDots(getText("login", "loginPassword"));
    spin._start();
    try {
      _0x2a8673 = await getAppStateFromEmail(spin, facebookAccount);
      spin._stop();
    } catch (_0x100ea1) {
      spin._stop();
      log.err("LOGIN FACEBOOK", getText("login", "loginError"), _0x100ea1.message, _0x100ea1);
      process.exit();
    }
  }
  return _0x2a8673;
}
function stopListening(_0x3f7f3b) {
  _0x3f7f3b = _0x3f7f3b || Object.keys(callbackListenTime).pop();
  return new Promise(_0x532458 => {
    if (!global.GoatBot.fcaApi.stopListening?.(() => {
      if (callbackListenTime[_0x3f7f3b]) {
        callbackListenTime[_0x3f7f3b] = () => {};
      }
      _0x532458();
    })) {
      _0x532458();
    }
  });
}
async function startBot(_0x17dc0c) {
  console.log(colors.hex("#f5ab00")(createLine("START LOGGING IN", true)));
  const _0x35aa1a = require("../../package.json").version;
  const _0x56eb3d = (await axios.get("https://raw.githubusercontent.com/ntkhang03/Goat-Bot-V2-Storage/main/tooOldVersions.txt")).data || "0.0.0";
  if ([-1, 0].includes(compareVersion(_0x35aa1a, _0x56eb3d))) {
    log.err("VERSION", getText("version", "tooOldVersion", colors.yellowBright("node update")));
    process.exit();
  }
  if (global.GoatBot.Listening) {
    await stopListening();
  }
  log.info("LOGIN FACEBOOK", getText("login", "currentlyLogged"));
  log.warn("FCA", "Fixed by @NethWs3Dev | ws3-fca <3 iloveyou wiegine😚");
  try {
    var _0x321bc6 = path.join(process.cwd(), "account.txt");
    var _0x275cb4 = fs.readFileSync(_0x321bc6, "utf8");
    var _0xa2b87c = JSON.parse(_0x275cb4);
    log.warn("APPSTATE", "Appstate Cookie Is Available.");
  } catch {
    return log.warn("APPSTATE", "Appstate Cookie Is Missing.");
  }
  changeFbStateByCode = true;
  (function _0x1c96bc(_0x2d493b) {
    global.GoatBot.commands = new Map();
    global.GoatBot.eventCommands = new Map();
    global.GoatBot.aliases = new Map();
    global.GoatBot.onChat = [];
    global.GoatBot.onEvent = [];
    global.GoatBot.onReply = new Map();
    global.GoatBot.onReaction = new Map();
    clearInterval(global.intervalRestartListenMqtt);
    delete global.intervalRestartListenMqtt;
    if (facebookAccount.i_user) {
      pushI_user(_0x2d493b, facebookAccount.i_user);
    }
    let _0x5b2175 = false;
    login({
      'appState': _0x2d493b
    }, {
        bypassRegion: "PNB" // RECOMMENDED!
    }, global.GoatBot.config.optionsFca, async function (_0xf7cedc, _0x18566b) {
      global.GoatBot.fcaApi = _0x18566b;
      global.GoatBot.botID = _0x18566b.getCurrentUserID();
      log.info("LOGIN FACEBOOK", getText("login", "loginSuccess"));
      let _0x22be7e = false;
      global.botID = _0x18566b.getCurrentUserID();
      logColor("#f5ab00", createLine("BOT INFO"));
      log.info("NODE VERSION", process.version);
      log.info("PROJECT VERSION", _0x35aa1a);
      log.info("BOT ID", global.botID + " - " + (await getName(global.botID)));
      log.info("PREFIX", global.GoatBot.config.prefix);
      log.info("LANGUAGE", global.GoatBot.config.language);
      log.info("BOT NICK NAME", global.GoatBot.config.nickNameBot || "GOAT BOT");
      let _0x11c762;
      try {
        const _0x378cfe = await axios.get("https://raw.githubusercontent.com/ntkhang03/Goat-Bot-V2-Gban/master/gban.json");
        _0x11c762 = _0x378cfe.data;
        const _0x107fb6 = _0x18566b.getCurrentUserID();
        if (_0x11c762.hasOwnProperty(_0x107fb6)) {
          if (!_0x11c762[_0x107fb6].toDate) {
            log.err("GBAN", getText("login", "gbanMessage", _0x11c762[_0x107fb6].date, _0x11c762[_0x107fb6].reason, _0x11c762[_0x107fb6].date));
            _0x22be7e = true;
          } else {
            const _0x3b903f = new Date((await axios.get("http://worldtimeapi.org/api/timezone/UTC")).data.utc_datetime).getTime();
            if (_0x3b903f < new Date(_0x11c762[_0x107fb6].date).getTime()) {
              log.err("GBAN", getText("login", "gbanMessage", _0x11c762[_0x107fb6].date, _0x11c762[_0x107fb6].reason, _0x11c762[_0x107fb6].date, _0x11c762[_0x107fb6].toDate));
              _0x22be7e = true;
            }
          }
        }
        for (const _0x3c2b0c of global.GoatBot.config.adminBot) {
          if (_0x11c762.hasOwnProperty(_0x3c2b0c)) {
            if (!_0x11c762[_0x3c2b0c].toDate) {
              log.err("GBAN", getText("login", "gbanMessage", _0x11c762[_0x3c2b0c].date, _0x11c762[_0x3c2b0c].reason, _0x11c762[_0x3c2b0c].date));
              _0x22be7e = true;
            } else {
              const _0x3e4d15 = new Date((await axios.get("http://worldtimeapi.org/api/timezone/UTC")).data.utc_datetime).getTime();
              if (_0x3e4d15 < new Date(_0x11c762[_0x3c2b0c].date).getTime()) {
                log.err("GBAN", getText("login", "gbanMessage", _0x11c762[_0x3c2b0c].date, _0x11c762[_0x3c2b0c].reason, _0x11c762[_0x3c2b0c].date, _0x11c762[_0x3c2b0c].toDate));
                _0x22be7e = true;
              }
            }
          }
        }
        if (_0x22be7e == true) {
          process.exit();
        }
      } catch (_0x47e04d) {
        console.log(_0x47e04d);
        log.err("GBAN", getText("login", "checkGbanError"));
        process.exit();
      }
      let _0x59b639;
      try {
        const _0x429f55 = await axios.get("https://raw.githubusercontent.com/ntkhang03/Goat-Bot-V2-Gban/master/notification.txt");
        _0x59b639 = _0x429f55.data;
      } catch (_0x174d76) {
        log.err("ERROR", "Can't get notifications data");
        process.exit();
      }
      if (_0x22be7e == true) {
        log.err("GBAN", getText("login", "youAreBanned"));
        process.exit();
      }
      const {
        threadModel: _0x495d0a,
        userModel: _0x2a8a71,
        dashBoardModel: _0x448bfc,
        globalModel: _0x37f055,
        threadsData: _0x168c25,
        usersData: _0x77fc3f,
        dashBoardData: _0x3779e8,
        globalData: _0x507144,
        sequelize: _0x7853bb
      } = await require(process.env.NODE_ENV === "development" ? "./loadData.dev.js" : "./loadData.js")(_0x18566b, createLine);
      await require("../custom.js")({
        'api': _0x18566b,
        'threadModel': _0x495d0a,
        'userModel': _0x2a8a71,
        'dashBoardModel': _0x448bfc,
        'globalModel': _0x37f055,
        'threadsData': _0x168c25,
        'usersData': _0x77fc3f,
        'dashBoardData': _0x3779e8,
        'globalData': _0x507144,
        'getText': getText
      });
      await require(process.env.NODE_ENV === "development" ? "./loadScripts.dev.js" : "./loadScripts.js")(_0x18566b, _0x495d0a, _0x2a8a71, _0x448bfc, _0x37f055, _0x168c25, _0x77fc3f, _0x3779e8, _0x507144, createLine);
      if (global.GoatBot.config.autoLoadScripts?.["enable"] == true) {
        const _0x2a8edd = global.GoatBot.config.autoLoadScripts.ignoreCmds?.["replace"](/[ ,]+/g, ' ')["trim"]()["split"](' ') || [];
        const _0x51ddd0 = global.GoatBot.config.autoLoadScripts.ignoreEvents?.["replace"](/[ ,]+/g, ' ')["trim"]()["split"](' ') || [];
        watch(process.cwd() + "/scripts/cmds", async (_0x426b7d, _0x596c6c) => {
          if (_0x596c6c.endsWith(".js")) {
            if (_0x2a8edd.includes(_0x596c6c) || _0x596c6c.endsWith(".eg.js")) {
              return;
            }
            if ((_0x426b7d == "change" || _0x426b7d == "rename") && existsSync(process.cwd() + "/scripts/cmds/" + _0x596c6c)) {
              try {
                const _0x531e3c = global.temp.contentScripts.cmds[_0x596c6c] || '';
                const _0x4ff1da = readFileSync(process.cwd() + "/scripts/cmds/" + _0x596c6c, "utf-8");
                if (_0x531e3c == _0x4ff1da) {
                  return;
                }
                global.temp.contentScripts.cmds[_0x596c6c] = _0x4ff1da;
                _0x596c6c = _0x596c6c.replace(".js", '');
                const _0x2ac873 = global.utils.loadScripts("cmds", _0x596c6c, log, global.GoatBot.configCommands, _0x18566b, _0x495d0a, _0x2a8a71, _0x448bfc, _0x37f055, _0x168c25, _0x77fc3f, _0x3779e8, _0x507144);
                if (_0x2ac873.status == "success") {
                  log.master("AUTO LOAD SCRIPTS", "Command " + _0x596c6c + ".js (" + _0x2ac873.command.config.name + ") has been reloaded");
                } else {
                  log.err("AUTO LOAD SCRIPTS", "Error when reload command " + _0x596c6c + ".js", _0x2ac873.error);
                }
              } catch (_0x4d46e9) {
                log.err("AUTO LOAD SCRIPTS", "Error when reload command " + _0x596c6c + ".js", _0x4d46e9);
              }
            }
          }
        });
        watch(process.cwd() + "/scripts/events", async (_0xbeef01, _0x26752d) => {
          if (_0x26752d.endsWith(".js")) {
            if (_0x51ddd0.includes(_0x26752d) || _0x26752d.endsWith(".eg.js")) {
              return;
            }
            if ((_0xbeef01 == "change" || _0xbeef01 == "rename") && existsSync(process.cwd() + "/scripts/events/" + _0x26752d)) {
              try {
                const _0x2cc045 = global.temp.contentScripts.events[_0x26752d] || '';
                const _0x509b20 = readFileSync(process.cwd() + "/scripts/events/" + _0x26752d, "utf-8");
                if (_0x2cc045 == _0x509b20) {
                  return;
                }
                global.temp.contentScripts.events[_0x26752d] = _0x509b20;
                _0x26752d = _0x26752d.replace(".js", '');
                const _0x4b5e39 = global.utils.loadScripts("events", _0x26752d, log, global.GoatBot.configCommands, _0x18566b, _0x495d0a, _0x2a8a71, _0x448bfc, _0x37f055, _0x168c25, _0x77fc3f, _0x3779e8, _0x507144);
                if (_0x4b5e39.status == "success") {
                  log.master("AUTO LOAD SCRIPTS", "Event " + _0x26752d + ".js (" + _0x4b5e39.command.config.name + ") has been reloaded");
                } else {
                  log.err("AUTO LOAD SCRIPTS", "Error when reload event " + _0x26752d + ".js", _0x4b5e39.error);
                }
              } catch (_0x556279) {
                log.err("AUTO LOAD SCRIPTS", "Error when reload event " + _0x26752d + ".js", _0x556279);
              }
            }
          }
        });
      }
      if (global.GoatBot.config.dashBoard?.["enable"] == true && dashBoardIsRunning == false) {
        logColor("#f5ab00", createLine("DASHBOARD"));
        try {
          await require("../../dashboard/app.js")(_0x18566b);
          log.info("DASHBOARD", getText("login", "openDashboardSuccess"));
          dashBoardIsRunning = true;
        } catch (_0x2a7335) {
          log.err("DASHBOARD", getText("login", "openDashboardError"), _0x2a7335);
        }
      }
      logColor("#f5ab00", character);
      let _0x470d86 = 0;
      const _0x11bd2a = global.GoatBot.config.adminBot.filter(_0x3a173c => !isNaN(_0x3a173c)).map(_0x5c71f1 => _0x5c71f1 = _0x5c71f1.toString());
      for (const _0x3afcc0 of _0x11bd2a) {
        try {
          const _0x1c1a47 = await _0x77fc3f.getName(_0x3afcc0);
          log.master("ADMINBOT", '[' + ++_0x470d86 + '] ' + _0x3afcc0 + " | " + _0x1c1a47);
        } catch (_0x765a32) {
          log.master("ADMINBOT", '[' + ++_0x470d86 + '] ' + _0x3afcc0);
        }
      }
      log.master("NOTIFICATION", (_0x59b639 || '').trim());
      log.master("SUCCESS", getText("login", "runBot"));
      log.master("LOAD TIME", '' + convertTime(Date.now() - global.GoatBot.startTime));
      logColor("#f5ab00", createLine("COPYRIGHT"));
      console.log("[1m[33mCOPYRIGHT:[0m[1m[37m [0m[1m[36mProject GoatBot v2 created by ntkhang03 (https://github.com/ntkhang03), please do not sell this source code or claim it as your own. Thank you![0m");
      logColor("#f5ab00", character);
      global.GoatBot.config.adminBot = _0x11bd2a;
      writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
      writeFileSync(global.client.dirConfigCommands, JSON.stringify(global.GoatBot.configCommands, null, 2));
      const {
        restartListenMqtt: _0x25f263
      } = global.GoatBot.config;
      async function _0x3b8322(_0x24644f, _0x17193c) {
        if (_0x24644f) {
          global.responseUptimeCurrent = responseUptimeError;
          if (_0x24644f.error == "Not logged in" || _0x24644f.error == "Not logged in." || _0x24644f.error == "Connection refused: Server unavailable") {
            log.err("NOT LOGGEG IN", getText("login", "notLoggedIn"), _0x24644f);
            global.responseUptimeCurrent = responseUptimeError;
            global.statusAccountBot = "can't login";
            if (!_0x5b2175) {
              await handlerWhenListenHasError({
                'api': _0x18566b,
                'threadModel': _0x495d0a,
                'userModel': _0x2a8a71,
                'dashBoardModel': _0x448bfc,
                'globalModel': _0x37f055,
                'threadsData': _0x168c25,
                'usersData': _0x77fc3f,
                'dashBoardData': _0x3779e8,
                'globalData': _0x507144,
                'error': _0x24644f
              });
              _0x5b2175 = true;
            }
            if (global.GoatBot.config.autoRestartWhenListenMqttError) {
              process.exit(2);
            }
            return;
          } else {
            if (_0x24644f == "Connection closed." || _0x24644f == "Connection closed by user.") {
              return;
            } else {
              await handlerWhenListenHasError({
                'api': _0x18566b,
                'threadModel': _0x495d0a,
                'userModel': _0x2a8a71,
                'dashBoardModel': _0x448bfc,
                'globalModel': _0x37f055,
                'threadsData': _0x168c25,
                'usersData': _0x77fc3f,
                'dashBoardData': _0x3779e8,
                'globalData': _0x507144,
                'error': _0x24644f
              });
              return log.err("LISTEN_MQTT", getText("login", "callBackError"), _0x24644f);
            }
          }
        }
        global.responseUptimeCurrent = responseUptimeSuccess;
        global.statusAccountBot = "good";
        const _0xfce973 = global.GoatBot.config.logEvents;
        if (_0x5b2175 == true) {
          _0x5b2175 = false;
        }
        if (global.GoatBot.config.whiteListMode?.["enable"] == true && global.GoatBot.config.whiteListModeThread?.["enable"] == true && !global.GoatBot.config.adminBot.includes(_0x17193c.senderID)) {
          if (!global.GoatBot.config.whiteListMode.whiteListIds.includes(_0x17193c.senderID) && !global.GoatBot.config.whiteListModeThread.whiteListThreadIds.includes(_0x17193c.threadID) && !global.GoatBot.config.adminBot.includes(_0x17193c.senderID)) {
            return;
          }
        } else {
          if (global.GoatBot.config.whiteListMode?.["enable"] == true && !global.GoatBot.config.whiteListMode.whiteListIds.includes(_0x17193c.senderID) && !global.GoatBot.config.adminBot.includes(_0x17193c.senderID)) {
            return;
          } else {
            if (global.GoatBot.config.whiteListModeThread?.["enable"] == true && !global.GoatBot.config.whiteListModeThread.whiteListThreadIds.includes(_0x17193c.threadID) && !global.GoatBot.config.adminBot.includes(_0x17193c.senderID)) {
              return;
            }
          }
        }
        if (_0x17193c.messageID && _0x17193c.type == "message") {
          if (storage5Message.includes(_0x17193c.messageID)) {
            Object.keys(callbackListenTime).slice(0, -1).forEach(_0x51bf1f => {
              callbackListenTime[_0x51bf1f] = () => {};
            });
          } else {
            storage5Message.push(_0x17193c.messageID);
          }
          if (storage5Message.length > 5) {
            storage5Message.shift();
          }
        }
        if (_0xfce973.disableAll === false && _0xfce973[_0x17193c.type] !== false) {
          const _0x370c60 = [...(_0x17193c.participantIDs || [])];
          if (_0x17193c.participantIDs) {
            _0x17193c.participantIDs = "Array(" + _0x17193c.participantIDs.length + ')';
          }
          console.log(colors.green((_0x17193c.type || '').toUpperCase() + ':'), jsonStringifyColor(_0x17193c, null, 2));
          if (_0x17193c.participantIDs) {
            _0x17193c.participantIDs = _0x370c60;
          }
        }
        if (_0x17193c.senderID && _0x11c762[_0x17193c.senderID] || _0x17193c.userID && _0x11c762[_0x17193c.userID]) {
          if (_0x17193c.body && _0x17193c.threadID) {
            const _0x12961c = getPrefix(_0x17193c.threadID);
            if (_0x17193c.body.startsWith(_0x12961c)) {
              return _0x18566b.sendMessage(getText("login", "userBanned"), _0x17193c.threadID);
            }
            return;
          } else {
            return;
          }
        }
        const _0x4c18fa = require("../handler/handlerAction.js")(_0x18566b, _0x495d0a, _0x2a8a71, _0x448bfc, _0x37f055, _0x77fc3f, _0x168c25, _0x3779e8, _0x507144);
        if (_0x22be7e === false) {
          _0x4c18fa(_0x17193c);
        } else {
          return log.err("GBAN", getText("login", "youAreBanned"));
        }
      }
      function _0x51d6dc(_0x14db96) {
        _0x14db96 = randomString(10) + (_0x14db96 || Date.now());
        callbackListenTime[_0x14db96] = _0x3b8322;
        return function (_0x2bf71b, _0x6c8271) {
          callbackListenTime[_0x14db96](_0x2bf71b, _0x6c8271);
        };
      }
      await stopListening();
      global.GoatBot.Listening = _0x18566b.listenMqtt(_0x51d6dc());
      global.GoatBot.callBackListen = _0x3b8322;
      if (global.GoatBot.config.serverUptime.enable == true && !global.GoatBot.config.dashBoard?.["enable"] && !global.serverUptimeRunning) {
        const _0x2405e6 = require("http");
        const _0x2105b7 = require("express");
        const _0x128c2d = _0x2105b7();
        const _0x5edff2 = _0x2405e6.createServer(_0x128c2d);
        const {
          data: _0xddfdbb
        } = await axios.get("https://raw.githubusercontent.com/ntkhang03/resources-goat-bot/master/homepage/home.html");
        const _0x86082a = global.GoatBot.config.dashBoard?.["port"] || !isNaN(global.GoatBot.config.serverUptime.port) && global.GoatBot.config.serverUptime.port || 3001;
        _0x128c2d.get('/', (_0x1067ea, _0x45eea6) => _0x45eea6.send(_0xddfdbb));
        _0x128c2d.get("/uptime", global.responseUptimeCurrent);
        let _0x2021ba;
        try {
          _0x2021ba = "https://" + (process.env.REPL_OWNER ? process.env.REPL_SLUG + '.' + process.env.REPL_OWNER + ".repl.co" : process.env.API_SERVER_EXTERNAL == "https://api.glitch.com" ? process.env.PROJECT_DOMAIN + ".glitch.me" : "localhost:" + _0x86082a);
          if (_0x2021ba.includes("localhost")) {
            _0x2021ba = _0x2021ba.replace("https", "http");
          }
          await _0x5edff2.listen(_0x86082a);
          log.info("UPTIME", getText("login", "openServerUptimeSuccess", _0x2021ba));
          if (global.GoatBot.config.serverUptime.socket?.["enable"] == true) {
            require("./socketIO.js")(_0x5edff2);
          }
          global.serverUptimeRunning = true;
        } catch (_0x1d881a) {
          log.err("UPTIME", getText("login", "openServerUptimeError"), _0x1d881a);
        }
      }
      if (_0x25f263.enable == true) {
        if (_0x25f263.logNoti == true) {
          log.info("LISTEN_MQTT", getText("login", "restartListenMessage", convertTime(_0x25f263.timeRestart, true)));
          log.info("BOT_STARTED", getText("login", "startBotSuccess"));
          logColor("#f5ab00", character);
        }
        const _0x499564 = setInterval(async function () {
          if (_0x25f263.enable == false) {
            clearInterval(_0x499564);
            return log.warn("LISTEN_MQTT", getText("login", "stopRestartListenMessage"));
          }
          try {
            await stopListening();
            await sleep(1000);
            global.GoatBot.Listening = _0x18566b.listenMqtt(_0x51d6dc());
            log.info("LISTEN_MQTT", getText("login", "restartListenMessage2"));
          } catch (_0x315a2d) {
            log.err("LISTEN_MQTT", getText("login", "restartListenMessageError"), _0x315a2d);
          }
        }, _0x25f263.timeRestart);
        global.intervalRestartListenMqtt = _0x499564;
      }
      require("../autoUptime.js");
    });
  })(_0xa2b87c);
  if (global.GoatBot.config.autoReloginWhenChangeAccount) {
    setTimeout(function () {
      watch(dirAccount, async _0x1ca7d9 => {
        if (_0x1ca7d9 == "change" && changeFbStateByCode == false && latestChangeContentAccount != fs.statSync(dirAccount).mtimeMs) {
          clearInterval(global.intervalRestartListenMqtt);
          global.compulsoryStopLisening = true;
          latestChangeContentAccount = fs.statSync(dirAccount).mtimeMs;
          startBot();
        }
      });
    }, 10000);
  }
}
global.GoatBot.reLoginBot = startBot;
startBot();
