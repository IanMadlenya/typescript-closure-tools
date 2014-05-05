// Generated Mon May  5 15:35:21 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../closure/goog/promise/promise.d.ts" />

declare module goog.net.jsloader {

    /**
     * A jsloader error.
     *
     * @param {goog.net.jsloader.ErrorCode} code The error code.
     * @param {string=} opt_message Additional message.
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class Error extends goog.debug.Error {
        /**
         * A jsloader error.
         *
         * @param {goog.net.jsloader.ErrorCode} code The error code.
         * @param {string=} opt_message Additional message.
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         */
        constructor(code: goog.net.jsloader.ErrorCode, opt_message?: string);
    }

    /**
     * The default length of time, in milliseconds, we are prepared to wait for a
     * load request to complete.
     * @type {number}
     */
    var DEFAULT_TIMEOUT: number;

    /**
     * Optional parameters for goog.net.jsloader.send.
     * timeout: The length of time, in milliseconds, we are prepared to wait
     *     for a load request to complete. Default it 5 seconds.
     * document: The HTML document under which to load the JavaScript. Default is
     *     the current document.
     * cleanupWhenDone: If true clean up the script tag after script completes to
     *     load. This is important if you just want to read data from the JavaScript
     *     and then throw it away. Default is false.
     *
     * @typedef {{
     *   timeout: (number|undefined),
     *   document: (HTMLDocument|undefined),
     *   cleanupWhenDone: (boolean|undefined)
     * }}
     */
    interface Options {
        timeout: any /*number|any (undefined)*/;
        document: any /*HTMLDocument|any (undefined)*/;
        cleanupWhenDone: any /*boolean|any (undefined)*/
    }

    /**
     * Loads and evaluates the JavaScript files at the specified URIs, guaranteeing
     * the order of script loads.
     *
     * Because we have to load the scripts in serial (load script 1, exec script 1,
     * load script 2, exec script 2, and so on), this will be slower than doing
     * the network fetches in parallel.
     *
     * If you need to load a large number of scripts but dependency order doesn't
     * matter, you should just call goog.net.jsloader.load N times.
     *
     * If you need to load a large number of scripts on the same domain,
     * you may want to use goog.module.ModuleLoader.
     *
     * @param {Array.<string>} uris The URIs to load.
     * @param {goog.net.jsloader.Options=} opt_options Optional parameters. See
     *     goog.net.jsloader.options documentation for details.
     */
    function loadMany(uris: string[], opt_options?: goog.net.jsloader.Options): void;

    /**
     * Loads and evaluates a JavaScript file.
     * When the script loads, a user callback is called.
     * It is the client's responsibility to verify that the script ran successfully.
     *
     * @param {string} uri The URI of the JavaScript.
     * @param {goog.net.jsloader.Options=} opt_options Optional parameters. See
     *     goog.net.jsloader.Options documentation for details.
     * @return {!goog.async.Deferred} The deferred result, that may be used to add
     *     callbacks and/or cancel the transmission.
     *     The error callback will be called with a single goog.net.jsloader.Error
     *     parameter.
     */
    function load(uri: string, opt_options?: goog.net.jsloader.Options): goog.async.Deferred;

    /**
     * Loads a JavaScript file and verifies it was evaluated successfully, using a
     * verification object.
     * The verification object is set by the loaded JavaScript at the end of the
     * script.
     * We verify this object was set and return its value in the success callback.
     * If the object is not defined we trigger an error callback.
     *
     * @param {string} uri The URI of the JavaScript.
     * @param {string} verificationObjName The name of the verification object that
     *     the loaded script should set.
     * @param {goog.net.jsloader.Options} options Optional parameters. See
     *     goog.net.jsloader.Options documentation for details.
     * @return {!goog.async.Deferred} The deferred result, that may be used to add
     *     callbacks and/or cancel the transmission.
     *     The success callback will be called with a single parameter containing
     *     the value of the verification object.
     *     The error callback will be called with a single goog.net.jsloader.Error
     *     parameter.
     */
    function loadAndVerify(uri: string, verificationObjName: string, options: goog.net.jsloader.Options): goog.async.Deferred;

    /**
     * Cancels a given request.
     * @this {{script_: Element, timeout_: number}} The request context.
     * @private
     */
    function cancel_(): void;

    /**
     * Possible error codes for jsloader.
     * @enum {number}
     */
    enum ErrorCode { LOAD_ERROR, TIMEOUT, VERIFY_ERROR, VERIFY_OBJECT_ALREADY_EXISTS } 
}

