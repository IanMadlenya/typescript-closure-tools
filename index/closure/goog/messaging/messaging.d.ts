// Generated Mon May  5 15:36:28 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/messaging/messagechannel.d.ts" />

declare module goog.messaging {

    /**
     * Creates a bidirectional pipe between two message channels.
     *
     * @param {goog.messaging.MessageChannel} channel1 The first channel.
     * @param {goog.messaging.MessageChannel} channel2 The second channel.
     */
    function pipe(channel1: goog.messaging.MessageChannel, channel2: goog.messaging.MessageChannel): void;
}

