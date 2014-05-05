// Generated Mon May  5 15:41:18 PDT 2014

/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/storage/mechanism/mechanism.d.ts" />

declare module goog.storage.mechanism {

    /**
     * Interface for all iterable storage mechanisms.
     *
     * @constructor
     * @extends {goog.storage.mechanism.Mechanism}
     */
    class IterableMechanism extends goog.storage.mechanism.Mechanism {
        /**
         * Interface for all iterable storage mechanisms.
         *
         * @constructor
         * @extends {goog.storage.mechanism.Mechanism}
         */
        constructor();
    
        /**
         * Get the number of stored key-value pairs.
         *
         * Could be overridden in a subclass, as the default implementation is not very
         * efficient - it iterates over all keys.
         *
         * @return {number} Number of stored elements.
         */
        getCount(): number;
    
        /**
         * Returns an iterator that iterates over the elements in the storage. Will
         * throw goog.iter.StopIteration after the last element.
         *
         * @param {boolean=} opt_keys True to iterate over the keys. False to iterate
         *     over the values.  The default value is false.
         * @return {!goog.iter.Iterator} The iterator.
         */
        __iterator__(opt_keys?: boolean): goog.iter.Iterator;
    
        /**
         * Remove all key-value pairs.
         *
         * Could be overridden in a subclass, as the default implementation is not very
         * efficient - it iterates over all keys.
         */
        clear(): void;
    }
}

