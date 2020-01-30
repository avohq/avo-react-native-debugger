// Generated by Avo VERSION 54.14.0, PLEASE EDIT WITH CARE
/* eslint-disable */

  var __AVO_DEV__ = false;
  var __AVO_ENV__ = null;
  var __REPORT_FAILURE_AS__ = null;
  var __STRICT__ = null;

  var __MOBILE_DEBUGGER__ = null;

  // polyfill Array.isArray
  if (!Array.isArray) {
    Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  }

  // polyfill Object.assign
  if (typeof Object.assign !== 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) { // .length of function is 2
        if (target == null) { // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }

  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  if (!Object.keys) {
    Object.keys = (function() {
      'use strict';
      var hasOwnProperty = Object.prototype.hasOwnProperty,
          hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
          dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
          ],
          dontEnumsLength = dontEnums.length;

      return function(obj) {
        if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
          throw new TypeError('Object.keys called on non-object');
        }

        var result = [], prop, i;

        for (prop in obj) {
          if (hasOwnProperty.call(obj, prop)) {
            result.push(prop);
          }
        }

        if (hasDontEnumBug) {
          for (i = 0; i < dontEnumsLength; i++) {
            if (hasOwnProperty.call(obj, dontEnums[i])) {
              result.push(dontEnums[i]);
            }
          }
        }
        return result;
      };
    }());
  }

  // polyfill Array.indexOf
  if (!Array.prototype.indexOf)  Array.prototype.indexOf = (function(Object, max, min){
    "use strict";
    return function indexOf(member, fromIndex) {
      if(this===null||this===undefined)throw TypeError("Array.prototype.indexOf called on null or undefined");

      var that = Object(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len);
      if (i < 0) i = max(0, Len+i); else if (i >= Len) return -1;

      if(member===void 0){ for(; i !== Len; ++i) if(that[i]===void 0 && i in that) return i; // undefined
      }else if(member !== member){   for(; i !== Len; ++i) if(that[i] !== that[i]) return i; // NaN
      }else                           for(; i !== Len; ++i) if(that[i] === member) return i; // all else

      return -1; // if the value was not found, then return -1
    };
  })(Object, Math.max, Math.min);

var array_difference, AvoAssert, AvoLogger;
if (process.env.NODE_ENV !== 'production') {
  array_difference = function array_difference(a1, a2) {
    var result = [];
    for (var i = 0; i < a1.length; i++) {
      if (a2.indexOf(a1[i]) === -1) {
        result.push(a1[i]);
      }
    }
    return result;
  }

  AvoAssert = {
    assertObject: function assertObject(propertyId, propName, obj) {
      if (typeof obj !== 'object') {
        var message = propName +
          ' should be of type object but you provided type ' +
          typeof obj +
          ' with value ' +
          JSON.stringify(obj);
        return [{tag: 'expectedObjectType', propertyId: propertyId, message: message, actualType: typeof obj}];
      } else {
        return [];
      }
    },

    assertString: function assertString(propertyId, propName, str) {
      if (typeof str !== 'string') {
        var message = propName +
          ' should be of type string but you provided type ' +
          typeof str +
          ' with value ' +
          JSON.stringify(str);
        return [{tag: 'expectedStringType', propertyId: propertyId, message: message, actualType: typeof str}];
      } else {
        return [];
      }
    },

    assertInt: function assertInt(propertyId, propName, int) {
      if (typeof int === 'number' && int !== Math.round(int)) {
        var message = propName +
          ' should be of type int but you provided type float with value ' +
          JSON.stringify(int);
        return [{tag: 'expectedIntType', propertyId: propertyId, actualType: 'float'}];
      } else if (typeof int !== 'number') {
        var message = propName +
          ' should be of type int but you provided type ' +
          typeof int +
          ' with value ' +
          JSON.stringify(int);
        return [{tag: 'expectedIntType', propertyId: propertyId, message: message, actualType: typeof int}];
      } else {
        return [];
      }
    },

    assertLong: function assertLong(propertyId, propName, long) {
      if (typeof long === 'number' && long !== Math.round(long)) {
        var message = propName +
          ' should be of type long but you provided type float with value ' +
          JSON.stringify(long);
        return [{tag: 'expectedLongType', propertyId: propertyId, actualType: 'float'}];
      } else if (typeof long !== 'number') {
        var message = propName +
          ' should be of type long but you provided type ' +
          typeof long +
          ' with value ' +
          JSON.stringify(long);
        return [{tag: 'expectedLongType', propertyId: propertyId, message: message, actualType: typeof long}];
      } else {
        return [];
      }
    },

    assertFloat: function assertFloat(propertyId, propName, float) {
      if (typeof float !== 'number') {
        var message = propName +
          ' should be of type float but you provided type ' +
          typeof float +
          ' with value ' +
          JSON.stringify(float);
        return [{tag: 'expectedFloatType', propertyId: propertyId, message: message, actualType: typeof float}];
      } else {
        return [];
      }
    },

    assertBool: function assertBool(propertyId, propName, bool) {
      if (typeof bool !== 'boolean') {
        var message = propName +
          ' should be of type boolean but you provided type ' +
          typeof bool +
          ' with value ' +
          JSON.stringify(bool);
        return [{tag: 'expectedBoolType', propertyId: propertyId, message: message, actualType: typeof bool}];
      } else {
        return [];
      }
    },

    assertMax: function assertMax(propertyId, propName, max, value) {
      if (value > max) {
        var message = propName +
          ' has a maximum value of ' +
          max +
          ' but you provided the value ' +
          JSON.stringify(value);
        return [{tag: 'expectedMax', propertyId: propertyId, message: message}];
      } else {
        return [];
      }
    },

    assertMin: function assertMin(propertyId, propName, min, value) {
      if (value < min) {
        var message = propName +
          ' has a minimum value of ' +
          min +
          ' but you provided the value ' +
          JSON.stringify(value);
        return [{tag: 'expectedMin', propertyId: propertyId, message: message}];
      } else {
        return [];
      }
    },

    assertList: function assertList(propertyId, propName, value) {
      if (!Array.isArray(value)) {
        var message = propName + ' should be of type list but you provided type ' + typeof value;
        return [{tag: 'expectedList', propertyId: propertyId, message: message, actualType: typeof value}];
      } else {
        return [];
      }
    },

    assertNoAdditionalProperties: function assertNoAdditionalProperties(eventName, input, spec) {
      var additionalKeys = array_difference(input, spec);
      if (additionalKeys.length) {
        var message = "Additional properties when sending event " + eventName + ": " + JSON.stringify(additionalKeys);
        return [{tag: 'expectedNoAdditionalProperties', additionalProperties: additionalKeys, message: message}];
      } else {
        return [];
      }
    },

    assertNoAdditionalUserProperties: function assertNoAdditionalProperties(eventName, input, spec) {
      var additionalKeys = array_difference(input, spec);
      if (additionalKeys.length) {
        var message = "Additional user properties when sending event " + eventName + ": " + JSON.stringify(additionalKeys);
        return [{tag: 'expectedNoAdditionalUserProperties', additionalProperties: additionalKeys, message: message}];
      } else {
        return [];
      }
    }
  };

  AvoLogger = {
    logEventSent: function logEventSent(eventName, eventProperties, userProperties) {
      console.log("[avo] Event Sent:", eventName, "Event Props:", eventProperties, "User Props:", userProperties);
    }
    };

}
var _avo_invoke, _avo_invoke_meta;
if (process.env.NODE_ENV !== 'production') {
var _avo_sampling_rate = 1.0;
function _avo_invoke_payload(body) {
  if (typeof window === 'undefined') { return; }
  if (_avo_sampling_rate > 0) {
    if (Math.random() < _avo_sampling_rate) {
      fetch("https://api.avo.app/i", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      }).then(function(res) { return res.json(); }).then(function(data) { _avo_sampling_rate = data.sa; }).catch(function() {});
    }
  }
}

_avo_invoke = function _avo_invoke(env, eventId, hash, messages, origin) {
  _avo_invoke_payload({
    "ac": "q8F7xkT80zm8TfHbsiLZ",
    "br": "master",
    "en": env,
    "ev": eventId,
    "ha": hash,
    "sc": "0cd8DLUxoxnhXaqRxL6O",
    "se": (new Date()).toISOString(),
    "so": "c-DxL7zXD",
    "va": messages.length === 0,
    "me": messages,
    "or": origin
  });
}

_avo_invoke_meta = function _avo_invoke_meta(env, type, messages, origin) {
  _avo_invoke_payload({
    "ac": "q8F7xkT80zm8TfHbsiLZ",
    "br": "master",
    "en": env,
    "ty": type,
    "sc": "0cd8DLUxoxnhXaqRxL6O",
    "se": (new Date()).toISOString(),
    "so": "c-DxL7zXD",
    "va": messages.length === 0,
    "me": messages,
    "or": origin
  });
}


}
var assertUpcomingTrackName;
var assertCurrentSongName;
if (process.env.NODE_ENV !== 'production') {
  assertUpcomingTrackName = function assertUpcomingTrackName(
    upcomingTrackName, label_) {
    var messages = [];
    messages = messages.concat(AvoAssert.assertString("Lvi0sAE1Am", label_ ? 'Upcoming Track Name' + ': ' + label_ : 'Upcoming Track Name', upcomingTrackName));
    return messages;
  }

  assertCurrentSongName = function assertCurrentSongName(currentSongName,
    label_) {
    var messages = [];
    messages = messages.concat(AvoAssert.assertString("kwANmf381A", label_ ? 'Current Song Name' + ': ' + label_ : 'Current Song Name', currentSongName));
    return messages;
  }

}
function setup_(options, systemProperties, destinationOptions) {
  if (options.validateProperties === true) {
    __AVO_DEV__ = true;
  }

  destinationOptions = destinationOptions || {};

  if (options.useProductionKey) {
  } else {
  }
  if (__AVO_DEV__) {
    // debug console in Avo
    _avo_invoke_meta(__AVO_ENV__, 'setup', [], 'setup');
  }
}

function initAvo(options, systemProperties, destinationOptions) {
  if (__AVO_ENV__ !== null) {
    return;
  }
  __AVO_ENV__ = options.env.toLowerCase();
  if (options.strict !== undefined) {
    __STRICT__ = options.strict !== false;
  }
  if (options.reportFailureAs !== undefined) {
    __REPORT_FAILURE_AS__ = options.reportFailureAs;
  }
  if (process.env.NODE_ENV !== 'production') {
    if (options.debugger !== undefined) {
      __MOBILE_DEBUGGER__ = options.debugger;
      __MOBILE_DEBUGGER__.schemaId = "0cd8DLUxoxnhXaqRxL6O";
    }
  }
  if (__AVO_ENV__ !== 'prod') {
    if (process.env.NODE_ENV !== 'production') {
      __AVO_DEV__ = true;
    }
  }

  destinationOptions = destinationOptions || {};

  if (__AVO_ENV__ === 'prod') {
  }
  if (__AVO_ENV__ === 'dev') {
  }
  if (__AVO_DEV__) {
    // debug console in Avo
    _avo_invoke_meta(__AVO_ENV__, 'init', [], 'init');
  }
}

/**
 * App Opened: No description
 *
 * @see {@link https://www.avo.app/schemas/0cd8DLUxoxnhXaqRxL6O/events/oZvpnm2MM}
 */
function appOpened(properties) {
  properties = properties || {};
  if (process.env.NODE_ENV !== 'production') {
    if ((__AVO_DEV__) || (!__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) {
      // assert properties
      var messages = [];
      messages = messages.concat(AvoAssert.assertNoAdditionalProperties("App Opened", Object.keys(properties), [
      ]));
      // debug console in Avo
      _avo_invoke(__AVO_ENV__, "oZvpnm2MM", "6571ce159c4dea8a493fd7bf35a3daa79355f01f2698ab2240c7a09b5b932126", messages.map(function(m) { return Object.assign({}, {tag: m.tag, propertyId: m.propertyId, additionalProperties: m.additionalProperties, actualType: m.actualType}); }), 'event');

      AvoLogger.logEventSent("App Opened", {}, {});
      if ((__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null) || (!__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) {
        // Avo mobile debugger
        __MOBILE_DEBUGGER__.postEvent("oZvpnm2MM", Date.now(), "App Opened", messages, [], []);
      }
      if (__AVO_DEV__ && ((__STRICT__ === null && !(__MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) || __STRICT__)) {
        // throw exception if messages is not empty
        if (messages.length !== 0) {
          throw new Error("Error sending event 'App Opened': " + messages[0].message)
        }
      } else {
        messages.forEach(function(m) {
          console[__REPORT_FAILURE_AS__ || (__MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled() ? 'log' : 'error')]("[avo] " + m.message);
        });
      }
    }
  }

}

/**
 * Play: Sent when the user plays a track.
 *
 * @param {object} properties - the properties associatied with this event
 * @param {string} properties.currentSongName - The name of the song that's currently playing.
 *
 * @see {@link https://www.avo.app/schemas/0cd8DLUxoxnhXaqRxL6O/events/6p9dLEHQVr}
 */
function play(properties) {
  properties = properties || {};
  if (process.env.NODE_ENV !== 'production') {
    if ((__AVO_DEV__) || (!__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) {
      // assert properties
      var messages = [];
      messages = messages.concat(assertCurrentSongName(properties.currentSongName));
      messages = messages.concat(AvoAssert.assertNoAdditionalProperties("Play", Object.keys(properties), [
        "currentSongName"
      ]));
      // debug console in Avo
      _avo_invoke(__AVO_ENV__, "6p9dLEHQVr", "23b2dc3fc5bcf7090cb4c38f4748f94de6908ad59472a47858b9a149ae2c6dbf", messages.map(function(m) { return Object.assign({}, {tag: m.tag, propertyId: m.propertyId, additionalProperties: m.additionalProperties, actualType: m.actualType}); }), 'event');

      AvoLogger.logEventSent("Play", {
        "Current Song Name": properties.currentSongName,
        }, {});
      if ((__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null) || (!__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) {
        // Avo mobile debugger
        __MOBILE_DEBUGGER__.postEvent("6p9dLEHQVr", Date.now(), "Play", messages, [
        {id: "kwANmf381A", name: "Current Song Name", value: properties.currentSongName},
        ], []);
      }
      if (__AVO_DEV__ && ((__STRICT__ === null && !(__MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) || __STRICT__)) {
        // throw exception if messages is not empty
        if (messages.length !== 0) {
          throw new Error("Error sending event 'Play': " + messages[0].message)
        }
      } else {
        messages.forEach(function(m) {
          console[__REPORT_FAILURE_AS__ || (__MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled() ? 'log' : 'error')]("[avo] " + m.message);
        });
      }
    }
  }

}

/**
 * Pause: Sent when the user pauses a track.
 *
 * @param {object} properties - the properties associatied with this event
 * @param {string} properties.currentSongName - The name of the song that's currently playing.
 *
 * @see {@link https://www.avo.app/schemas/0cd8DLUxoxnhXaqRxL6O/events/Ei7HeAerpy}
 */
function pause(properties) {
  properties = properties || {};
  if (process.env.NODE_ENV !== 'production') {
    if ((__AVO_DEV__) || (!__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) {
      // assert properties
      var messages = [];
      messages = messages.concat(assertCurrentSongName(properties.currentSongName));
      messages = messages.concat(AvoAssert.assertNoAdditionalProperties("Pause", Object.keys(properties), [
        "currentSongName"
      ]));
      // debug console in Avo
      _avo_invoke(__AVO_ENV__, "Ei7HeAerpy", "e465331ac49429540789a2f1ce3719227cea4eda4e550ed315196379a117d9b7", messages.map(function(m) { return Object.assign({}, {tag: m.tag, propertyId: m.propertyId, additionalProperties: m.additionalProperties, actualType: m.actualType}); }), 'event');

      AvoLogger.logEventSent("Pause", {
        "Current Song Name": properties.currentSongName,
        }, {});
      if ((__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null) || (!__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) {
        // Avo mobile debugger
        __MOBILE_DEBUGGER__.postEvent("Ei7HeAerpy", Date.now(), "Pause", messages, [
        {id: "kwANmf381A", name: "Current Song Name", value: properties.currentSongName},
        ], []);
      }
      if (__AVO_DEV__ && ((__STRICT__ === null && !(__MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) || __STRICT__)) {
        // throw exception if messages is not empty
        if (messages.length !== 0) {
          throw new Error("Error sending event 'Pause': " + messages[0].message)
        }
      } else {
        messages.forEach(function(m) {
          console[__REPORT_FAILURE_AS__ || (__MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled() ? 'log' : 'error')]("[avo] " + m.message);
        });
      }
    }
  }

}

/**
 * Play Next Track: Sent when the user plays next track.
 *
 * @param {object} properties - the properties associatied with this event
 * @param {string} properties.currentSongName - The name of the song that's currently playing.
 * @param {string} properties.upcomingTrackName - The name of the upcoming track.
 *
 * @see {@link https://www.avo.app/schemas/0cd8DLUxoxnhXaqRxL6O/events/rQvcOWggzs}
 */
function playNextTrack(properties) {
  properties = properties || {};
  if (process.env.NODE_ENV !== 'production') {
    if ((__AVO_DEV__) || (!__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) {
      // assert properties
      var messages = [];
      messages = messages.concat(assertCurrentSongName(properties.currentSongName));
      messages = messages.concat(assertUpcomingTrackName(properties.upcomingTrackName));
      messages = messages.concat(AvoAssert.assertNoAdditionalProperties("Play Next Track", Object.keys(properties), [
        "currentSongName",
        "upcomingTrackName"
      ]));
      // debug console in Avo
      _avo_invoke(__AVO_ENV__, "rQvcOWggzs", "b82d1ab42bebef553938bd6f38aa00b1ff65a6b297ffe3d2d464d3c3d470b34e", messages.map(function(m) { return Object.assign({}, {tag: m.tag, propertyId: m.propertyId, additionalProperties: m.additionalProperties, actualType: m.actualType}); }), 'event');

      AvoLogger.logEventSent("Play Next Track", {
        "Current Song Name": properties.currentSongName,
        "Upcoming Track Name": properties.upcomingTrackName,
        }, {});
      if ((__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null) || (!__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) {
        // Avo mobile debugger
        __MOBILE_DEBUGGER__.postEvent("rQvcOWggzs", Date.now(), "Play Next Track", messages, [
        {id: "Lvi0sAE1Am", name: "Upcoming Track Name", value: properties.upcomingTrackName},
        {id: "kwANmf381A", name: "Current Song Name", value: properties.currentSongName},
        ], []);
      }
      if (__AVO_DEV__ && ((__STRICT__ === null && !(__MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) || __STRICT__)) {
        // throw exception if messages is not empty
        if (messages.length !== 0) {
          throw new Error("Error sending event 'Play Next Track': " + messages[0].message)
        }
      } else {
        messages.forEach(function(m) {
          console[__REPORT_FAILURE_AS__ || (__MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled() ? 'log' : 'error')]("[avo] " + m.message);
        });
      }
    }
  }

}

/**
 * Play Previous Track: Sent when the user plays previous track.
 *
 * @param {object} properties - the properties associatied with this event
 * @param {string} properties.currentSongName - The name of the song that's currently playing.
 * @param {string} properties.upcomingTrackName - The name of the upcoming track.
 *
 * @see {@link https://www.avo.app/schemas/0cd8DLUxoxnhXaqRxL6O/events/xBjjLugyOM}
 */
function playPreviousTrack(properties) {
  properties = properties || {};
  if (process.env.NODE_ENV !== 'production') {
    if ((__AVO_DEV__) || (!__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) {
      // assert properties
      var messages = [];
      messages = messages.concat(assertCurrentSongName(properties.currentSongName));
      messages = messages.concat(assertUpcomingTrackName(properties.upcomingTrackName));
      messages = messages.concat(AvoAssert.assertNoAdditionalProperties("Play Previous Track", Object.keys(properties), [
        "currentSongName",
        "upcomingTrackName"
      ]));
      // debug console in Avo
      _avo_invoke(__AVO_ENV__, "xBjjLugyOM", "a234fb293133b46a44683b6cd01a2382e826a08dbd81132683aa2fa182808baa", messages.map(function(m) { return Object.assign({}, {tag: m.tag, propertyId: m.propertyId, additionalProperties: m.additionalProperties, actualType: m.actualType}); }), 'event');

      AvoLogger.logEventSent("Play Previous Track", {
        "Current Song Name": properties.currentSongName,
        "Upcoming Track Name": properties.upcomingTrackName,
        }, {});
      if ((__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null) || (!__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) {
        // Avo mobile debugger
        __MOBILE_DEBUGGER__.postEvent("xBjjLugyOM", Date.now(), "Play Previous Track", messages, [
        {id: "Lvi0sAE1Am", name: "Upcoming Track Name", value: properties.upcomingTrackName},
        {id: "kwANmf381A", name: "Current Song Name", value: properties.currentSongName},
        ], []);
      }
      if (__AVO_DEV__ && ((__STRICT__ === null && !(__MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) || __STRICT__)) {
        // throw exception if messages is not empty
        if (messages.length !== 0) {
          throw new Error("Error sending event 'Play Previous Track': " + messages[0].message)
        }
      } else {
        messages.forEach(function(m) {
          console[__REPORT_FAILURE_AS__ || (__MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled() ? 'log' : 'error')]("[avo] " + m.message);
        });
      }
    }
  }

}

/**
 * Play Async: No description
 *
 * @see {@link https://www.avo.app/schemas/0cd8DLUxoxnhXaqRxL6O/events/XDrzT4wo3i}
 */
function playAsync(properties) {
  properties = properties || {};
  if (process.env.NODE_ENV !== 'production') {
    if ((__AVO_DEV__) || (!__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) {
      // assert properties
      var messages = [];
      messages = messages.concat(AvoAssert.assertNoAdditionalProperties("Play Async", Object.keys(properties), [
      ]));
      // debug console in Avo
      _avo_invoke(__AVO_ENV__, "XDrzT4wo3i", "74194297650148bf486fd372a94bb3ba5d3ef89f6ca8f825ecfa0437d294a36b", messages.map(function(m) { return Object.assign({}, {tag: m.tag, propertyId: m.propertyId, additionalProperties: m.additionalProperties, actualType: m.actualType}); }), 'event');

      AvoLogger.logEventSent("Play Async", {}, {});
      if ((__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null) || (!__AVO_DEV__ && __MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) {
        // Avo mobile debugger
        __MOBILE_DEBUGGER__.postEvent("XDrzT4wo3i", Date.now(), "Play Async", messages, [], []);
      }
      if (__AVO_DEV__ && ((__STRICT__ === null && !(__MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled())) || __STRICT__)) {
        // throw exception if messages is not empty
        if (messages.length !== 0) {
          throw new Error("Error sending event 'Play Async': " + messages[0].message)
        }
      } else {
        messages.forEach(function(m) {
          console[__REPORT_FAILURE_AS__ || (__MOBILE_DEBUGGER__ !== null && __MOBILE_DEBUGGER__.isEnabled() ? 'log' : 'error')]("[avo] " + m.message);
        });
      }
    }
  }

}

export default {
  appOpened: appOpened,
  play: play,
  pause: pause,
  playNextTrack: playNextTrack,
  playPreviousTrack: playPreviousTrack,
  playAsync: playAsync,
  initAvo: initAvo,
}

// AVOMODULEMAP:"Avo"
// AVOEVENTMAP:["appOpened","play","pause","playNextTrack","playPreviousTrack","playAsync"]
