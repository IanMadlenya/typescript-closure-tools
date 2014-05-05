// Generated Mon May  5 15:33:24 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />

declare module goog.structs {

    /**
     * A set that can contain both primitives and objects.  Adding and removing
     * elements is O(1).  Primitives are treated as identical if they have the same
     * type and convert to the same string.  Objects are treated as identical only
     * if they are references to the same object.  WARNING: A goog.structs.Set can
     * contain both 1 and (new Number(1)), because they are not the same.  WARNING:
     * Adding (new Number(1)) twice will yield two distinct elements, because they
     * are two different objects.  WARNING: Any object that is added to a
     * goog.structs.Set will be modified!  Because goog.getUid() is used to
     * identify objects, every object in the set will be mutated.
     * @param {Array.<T>|Object.<?,T>=} opt_values Initial values to start with.
     * @constructor
     * @implements {goog.structs.Collection.<T>}
     * @final
     * @template T
     */
    class Set<T> implements goog.structs.Collection<T> {
        /**
         * A set that can contain both primitives and objects.  Adding and removing
         * elements is O(1).  Primitives are treated as identical if they have the same
         * type and convert to the same string.  Objects are treated as identical only
         * if they are references to the same object.  WARNING: A goog.structs.Set can
         * contain both 1 and (new Number(1)), because they are not the same.  WARNING:
         * Adding (new Number(1)) twice will yield two distinct elements, because they
         * are two different objects.  WARNING: Any object that is added to a
         * goog.structs.Set will be modified!  Because goog.getUid() is used to
         * identify objects, every object in the set will be mutated.
         * @param {Array.<T>|Object.<?,T>=} opt_values Initial values to start with.
         * @constructor
         * @implements {goog.structs.Collection.<T>}
         * @final
         * @template T
         */
        constructor(opt_values?: any /*T[]|{ [key: string]: T }*/);
    
        /**
         * @return {number} The number of values stored in the collection.
         */
        getCount(): number;
    
        /**
         * @param {T} value Value to add to the collection.
         */
        add(value: T): void;
    
        /**
         * Adds all the values in the given collection to this set.
         * @param {Array.<T>|goog.structs.Collection.<T>|Object.<?,T>} col A collection
         *     containing the elements to add.
         */
        addAll(col: any /*T[]|goog.structs.Collection<T>|{ [key: string]: T }*/): void;
    
        /**
         * Removes all values in the given collection from this set.
         * @param {Array.<T>|goog.structs.Collection.<T>|Object.<?,T>} col A collection
         *     containing the elements to remove.
         */
        removeAll(col: any /*T[]|goog.structs.Collection<T>|{ [key: string]: T }*/): void;
    
        /**
         * @param {T} value Value to remove from the collection.
         */
        remove(value: T): void;
    
        /**
         * Removes all elements from this set.
         */
        clear(): void;
    
        /**
         * Tests whether this set is empty.
         * @return {boolean} True if there are no elements in this set.
         */
        isEmpty(): boolean;
    
        /**
         * @param {T} value Value to find in the collection.
         * @return {boolean} Whether the collection contains the specified value.
         */
        contains(value: T): boolean;
    
        /**
         * Tests whether this set contains all the values in a given collection.
         * Repeated elements in the collection are ignored, e.g.  (new
         * goog.structs.Set([1, 2])).containsAll([1, 1]) is True.
         * @param {goog.structs.Collection.<T>|Object} col A collection-like object.
         * @return {boolean} True if the set contains all elements.
         */
        containsAll(col: any /*goog.structs.Collection<T>|Object*/): boolean;
    
        /**
         * Finds all values that are present in both this set and the given collection.
         * @param {Array.<S>|Object.<?,S>} col A collection.
         * @return {!goog.structs.Set.<T|S>} A new set containing all the values
         *     (primitives or objects) present in both this set and the given
         *     collection.
         * @template S
         */
        intersection<S>(col: any /*S[]|{ [key: string]: S }*/): goog.structs.Set<any /*T|S*/>;
    
        /**
         * Finds all values that are present in this set and not in the given
         * collection.
         * @param {Array.<T>|goog.structs.Collection.<T>|Object.<?,T>} col A collection.
         * @return {!goog.structs.Set} A new set containing all the values
         *     (primitives or objects) present in this set but not in the given
         *     collection.
         */
        difference(col: any /*T[]|goog.structs.Collection<T>|{ [key: string]: T }*/): goog.structs.Set;
    
        /**
         * Returns an array containing all the elements in this set.
         * @return {!Array.<T>} An array containing all the elements in this set.
         */
        getValues(): T[];
    
        /**
         * Creates a shallow clone of this set.
         * @return {!goog.structs.Set.<T>} A new set containing all the same elements as
         *     this set.
         */
        clone(): goog.structs.Set<T>;
    
        /**
         * Tests whether the given collection consists of the same elements as this set,
         * regardless of order, without repetition.  Primitives are treated as equal if
         * they have the same type and convert to the same string; objects are treated
         * as equal if they are references to the same object.  This operation is O(n).
         * @param {goog.structs.Collection.<T>|Object} col A collection.
         * @return {boolean} True if the given collection consists of the same elements
         *     as this set, regardless of order, without repetition.
         */
        equals(col: any /*goog.structs.Collection<T>|Object*/): boolean;
    
        /**
         * Tests whether the given collection contains all the elements in this set.
         * Primitives are treated as equal if they have the same type and convert to the
         * same string; objects are treated as equal if they are references to the same
         * object.  This operation is O(n).
         * @param {goog.structs.Collection.<T>|Object} col A collection.
         * @return {boolean} True if this set is a subset of the given collection.
         */
        isSubsetOf(col: any /*goog.structs.Collection<T>|Object*/): boolean;
    
        /**
         * Returns an iterator that iterates over the elements in this set.
         * @param {boolean=} opt_keys This argument is ignored.
         * @return {!goog.iter.Iterator} An iterator over the elements in this set.
         */
        __iterator__(opt_keys?: boolean): goog.iter.Iterator;
    }
}

