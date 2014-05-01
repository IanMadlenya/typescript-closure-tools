// Generated Thu May  1 12:33:43 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/style/bidi.d.ts" />
/// <reference path="../../goog/positioning/positioning.d.ts" />
/// <reference path="../../goog/positioning/abstractposition.d.ts" />
/// <reference path="../../goog/positioning/clientposition.d.ts" />

declare module goog.positioning {

    /**
     * Encapsulates a popup position where the popup is positioned relative to the
     * window (client) coordinates, and made to stay within the viewport.
     *
     * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position if arg1 is a number representing the
     *     left position, ignored otherwise.
     * @constructor
     * @extends {goog.positioning.ClientPosition}
     */
    class ViewportClientPosition extends goog.positioning.ClientPosition {
        /**
         * Encapsulates a popup position where the popup is positioned relative to the
         * window (client) coordinates, and made to stay within the viewport.
         *
         * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position if arg1 is a number representing the
         *     left position, ignored otherwise.
         * @constructor
         * @extends {goog.positioning.ClientPosition}
         */
        constructor(arg1: any /*number|goog.math.Coordinate*/, opt_arg2?: number);
    
        /**
         * Set the last-resort overflow strategy, if the popup fails to fit.
         * @param {number} overflow A bitmask of goog.positioning.Overflow strategies.
         */
        setLastResortOverflow(overflow: number): void;
    }
}

