// Generated Thu May  1 16:42:08 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />

declare module goog.ui.DrilldownRow {

    /**
     * Example object with properties of the form accepted by the class
     * constructor.  These are educational and show the compiler that
     * these properties can be set so it doesn't emit warnings.
     */
    var sampleProperties: any /*missing*/;

    /**
     * This static function is a default decorator that adds HTML at the
     * beginning of the first cell to display indentation and an expander
     * image; sets up a click handler on the toggler; initializes a class
     * for the row: either goog-drilldown-expanded or
     * goog-drilldown-collapsed, depending on the initial state of the
     * DrilldownRow; and sets up a click event handler on the toggler
     * element.
     *
     * This creates a DIV with class=toggle.  Your application can set up
     * CSS style rules something like this:
     *
     * tr.goog-drilldown-expanded .toggle {
     *   background-image: url('minus.png');
     * }
     *
     * tr.goog-drilldown-collapsed .toggle {
     *   background-image: url('plus.png');
     * }
     *
     * These background images show whether the DrilldownRow is expanded.
     *
     * @param {goog.ui.DrilldownRow} selfObj DrilldownRow to be decorated.
     */
    function decorate(selfObj: goog.ui.DrilldownRow): void;
}

declare module goog.ui {

    /**
     * Builds a DrilldownRow component, which can overlay a tree
     * structure onto sections of an HTML table.
     *
     * @param {Object=} opt_properties This parameter can contain:
     *   contents:  if present, user data identifying
     *     the information loaded into the row and its children.
     *   loaded: initializes the isLoaded property, defaults to true.
     *   expanded: DrilldownRow expanded or not, default is true.
     *   html: String of HTML, relevant and required for DrilldownRows to be
     *     added as children.  Ignored when decorating an existing table row.
     *   decorator: Function that accepts one DrilldownRow argument, and
     *     should customize and style the row.  The default is to call
     *     goog.ui.DrilldownRow.decorator.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class DrilldownRow extends goog.ui.Component {
        /**
         * Builds a DrilldownRow component, which can overlay a tree
         * structure onto sections of an HTML table.
         *
         * @param {Object=} opt_properties This parameter can contain:
         *   contents:  if present, user data identifying
         *     the information loaded into the row and its children.
         *   loaded: initializes the isLoaded property, defaults to true.
         *   expanded: DrilldownRow expanded or not, default is true.
         *   html: String of HTML, relevant and required for DrilldownRows to be
         *     added as children.  Ignored when decorating an existing table row.
         *   decorator: Function that accepts one DrilldownRow argument, and
         *     should customize and style the row.  The default is to call
         *     goog.ui.DrilldownRow.decorator.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         * @final
         */
        constructor(opt_properties?: Object, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Finds the numeric index of this child within its parent Component.
         * Throws an exception if it has no parent.
         *
         * @return {number} index of this within the children of the parent Component.
         */
        findIndex(): number;
    
        /**
         * Returns the expanded state of the DrilldownRow.
         *
         * @return {boolean} true iff this is expanded.
         */
        isExpanded(): boolean;
    
        /**
         * Sets the expanded state of this DrilldownRow: makes all children
         * displayable or not displayable corresponding to the expanded state.
         *
         * @param {boolean} expanded whether this should be expanded or not.
         */
        setExpanded(expanded: boolean): void;
    
        /**
         * Returns this DrilldownRow's level in the tree.  Top level is 1.
         *
         * @return {number} depth of this DrilldownRow in its tree of drilldowns.
         */
        getDepth(): number;
    }
}
