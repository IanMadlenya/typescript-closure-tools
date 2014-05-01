// Generated Thu May  1 16:44:39 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />

declare module goog.async.AnimationDelay {

    /**
     * Default wait timeout for animations (in milliseconds).  Only used for timed
     * animation, which uses a timer (setTimeout) to schedule animation.
     *
     * @type {number}
     * @const
     */
    var TIMEOUT: number;
}

declare module goog.async {

    /**
     * A delayed callback that pegs to the next animation frame
     * instead of a user configurable timeout. By design, this should have
     * the same interface as goog.async.Delay.
     *
     * Uses requestAnimationFrame and friends when available, but falls
     * back to a timeout of goog.async.AnimationDelay.TIMEOUT.
     *
     * For more on requestAnimationFrame and how you can use it to create smoother
     * animations, see:
     * @see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
     *
     * @param {function(number)} listener Function to call when the delay completes.
     *     Will be passed the timestamp when it's called, in unix ms.
     * @param {Window=} opt_window The window object to execute the delay in.
     *     Defaults to the global object.
     * @param {Object=} opt_handler The object scope to invoke the function in.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class AnimationDelay extends goog.Disposable {
        /**
         * A delayed callback that pegs to the next animation frame
         * instead of a user configurable timeout. By design, this should have
         * the same interface as goog.async.Delay.
         *
         * Uses requestAnimationFrame and friends when available, but falls
         * back to a timeout of goog.async.AnimationDelay.TIMEOUT.
         *
         * For more on requestAnimationFrame and how you can use it to create smoother
         * animations, see:
         * @see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
         *
         * @param {function(number)} listener Function to call when the delay completes.
         *     Will be passed the timestamp when it's called, in unix ms.
         * @param {Window=} opt_window The window object to execute the delay in.
         *     Defaults to the global object.
         * @param {Object=} opt_handler The object scope to invoke the function in.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(listener: (_0: number) => any /*missing*/, opt_window?: Window, opt_handler?: Object);
    
        /**
         * Starts the delay timer. The provided listener function will be called
         * before the next animation frame.
         */
        start(): void;
    
        /**
         * Stops the delay timer if it is active. No action is taken if the timer is not
         * in use.
         */
        stop(): void;
    
        /**
         * Fires delay's action even if timer has already gone off or has not been
         * started yet; guarantees action firing. Stops the delay timer.
         */
        fire(): void;
    
        /**
         * Fires delay's action only if timer is currently active. Stops the delay
         * timer.
         */
        fireIfActive(): void;
    
        /**
         * @return {boolean} True if the delay is currently active, false otherwise.
         */
        isActive(): boolean;
    }
}
