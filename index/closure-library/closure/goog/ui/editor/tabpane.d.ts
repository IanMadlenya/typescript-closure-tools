/// <reference path="../../../../globals.d.ts" />
/// <reference path="../component.d.ts" />
/// <reference path="../../dom/dom.d.ts" />

declare module goog.ui.editor {

    class TabPane extends TabPane__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class TabPane__Class extends goog.ui.Component__Class  { 
    
            /**
             * Creates a new Editor-style tab pane.
             * @param {goog.dom.DomHelper} dom The dom helper for the window to create this
             *     tab pane in.
             * @param {string=} opt_caption Optional caption of the tab pane.
             * @constructor
             * @extends {goog.ui.Component}
             * @final
             */
            constructor(dom: goog.dom.DomHelper, opt_caption?: string);
    
            /**
             * @return {string} The ID of the content element for the current tab.
             */
            getCurrentTabId(): string;
    
            /**
             * Selects the tab with the given id.
             * @param {string} id Id of the tab to select.
             */
            setSelectedTabId(id: string): void;
    
            /**
             * Adds a tab to the tab pane.
             * @param {string} id The id of the tab to add.
             * @param {string} caption The caption of the tab.
             * @param {string} tooltip The tooltip for the tab.
             * @param {string} groupName for the radio button group.
             * @param {Element} content The content element to show when this tab is
             *     selected.
             */
            addTab(id: string, caption: string, tooltip: string, groupName: string, content: Element): void;
    } 
    
}
