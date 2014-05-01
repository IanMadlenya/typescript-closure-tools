// Generated Thu May  1 16:39:54 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/editor/plugins/undoredostate.d.ts" />

declare module goog.editor.plugins.UndoRedoManager {

    /**
     * Event types for the events dispatched by undo-redo manager.
     * @enum {string}
     */
    enum EventType { STATE_CHANGE, STATE_ADDED, BEFORE_UNDO, BEFORE_REDO } 
}

declare module goog.editor.plugins {

    /**
     * Manages undo and redo operations through a series of {@code UndoRedoState}s
     * maintained on undo and redo stacks.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class UndoRedoManager extends goog.events.EventTarget {
        /**
         * Manages undo and redo operations through a series of {@code UndoRedoState}s
         * maintained on undo and redo stacks.
         *
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor();
    
        /**
         * Set the max undo stack depth (not the real memory usage).
         * @param {number} depth Depth of the stack.
         */
        setMaxUndoDepth(depth: number): void;
    
        /**
         * Add state to the undo stack. This clears the redo stack.
         *
         * @param {goog.editor.plugins.UndoRedoState} state The state to add to the undo
         *     stack.
         */
        addState(state: goog.editor.plugins.UndoRedoState): void;
    
        /**
         * Performs the undo operation of the state at the top of the undo stack, moving
         * that state to the top of the redo stack. If the undo stack is empty, does
         * nothing.
         */
        undo(): void;
    
        /**
         * Performs the redo operation of the state at the top of the redo stack, moving
         * that state to the top of the undo stack. If redo undo stack is empty, does
         * nothing.
         */
        redo(): void;
    
        /**
         * @return {boolean} Wether the undo stack has items on it, i.e., if it is
         *     possible to perform an undo operation.
         */
        hasUndoState(): boolean;
    
        /**
         * @return {boolean} Wether the redo stack has items on it, i.e., if it is
         *     possible to perform a redo operation.
         */
        hasRedoState(): boolean;
    
        /**
         * Clears the undo and redo stacks.
         */
        clearHistory(): void;
    
        /**
         * @return {goog.editor.plugins.UndoRedoState|undefined} The state at the top of
         *     the undo stack without removing it from the stack.
         */
        undoPeek(): any /*goog.editor.plugins.UndoRedoState|any (undefined)*/;
    
        /**
         * @return {goog.editor.plugins.UndoRedoState|undefined} The state at the top of
         *     the redo stack without removing it from the stack.
         */
        redoPeek(): any /*goog.editor.plugins.UndoRedoState|any (undefined)*/;
    }
}
