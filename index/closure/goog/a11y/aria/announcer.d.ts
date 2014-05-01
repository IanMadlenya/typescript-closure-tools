// Generated Thu May  1 12:43:27 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />

declare module goog.a11y.aria {

    /**
     * Class that allows messages to be spoken by assistive technologies that the
     * user may have active.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class Announcer extends goog.Disposable {
        /**
         * Class that allows messages to be spoken by assistive technologies that the
         * user may have active.
         *
         * @param {goog.dom.DomHelper=} opt_domHelper DOM helper.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Announce a message to be read by any assistive technologies the user may
         * have active.
         * @param {string} message The message to announce to screen readers.
         * @param {goog.a11y.aria.LivePriority=} opt_priority The priority of the
         *     message. Defaults to POLITE.
         */
        say(message: string, opt_priority?: goog.a11y.aria.LivePriority): void;
    }
}

