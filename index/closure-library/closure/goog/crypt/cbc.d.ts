/// <reference path="../../../globals.d.ts" />
/// <reference path="./blockcipher.d.ts" />

declare module goog.crypt {

    class Cbc extends Cbc__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Cbc__Class  { 
    
            /**
             * Implements the CBC mode for block ciphers. See
             * http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation
             * #Cipher-block_chaining_.28CBC.29
             *
             * @param {!goog.crypt.BlockCipher} cipher The block cipher to use.
             * @param {number=} opt_blockSize The block size of the cipher in bytes.
             *     Defaults to 16 bytes.
             * @constructor
             * @final
             * @struct
             */
            constructor(cipher: goog.crypt.BlockCipher, opt_blockSize?: number);
    
            /**
             * Encrypt a message.
             *
             * @param {!Array.<number>} plainText Message to encrypt. An array of bytes.
             *     The length should be a multiple of the block size.
             * @param {!Array.<number>} initialVector Initial vector for the CBC mode.
             *     An array of bytes with the same length as the block size.
             * @return {!Array.<number>} Encrypted message.
             */
            encrypt(plainText: number[], initialVector: number[]): number[];
    
            /**
             * Decrypt a message.
             *
             * @param {!Array.<number>} cipherText Message to decrypt. An array of bytes.
             *     The length should be a multiple of the block size.
             * @param {!Array.<number>} initialVector Initial vector for the CBC mode.
             *     An array of bytes with the same length as the block size.
             * @return {!Array.<number>} Decrypted message.
             */
            decrypt(cipherText: number[], initialVector: number[]): number[];
    } 
    
}
