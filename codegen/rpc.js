/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.app = (function() {

    /**
     * Namespace app.
     * @exports app
     * @namespace
     */
    var app = {};

    app.RefreshTokenRequest = (function() {

        /**
         * Properties of a RefreshTokenRequest.
         * @memberof app
         * @interface IRefreshTokenRequest
         * @property {string|null} [token] RefreshTokenRequest token
         * @property {string|null} [tokenRefresh] RefreshTokenRequest tokenRefresh
         */

        /**
         * Constructs a new RefreshTokenRequest.
         * @memberof app
         * @classdesc Represents a RefreshTokenRequest.
         * @implements IRefreshTokenRequest
         * @constructor
         * @param {app.IRefreshTokenRequest=} [properties] Properties to set
         */
        function RefreshTokenRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RefreshTokenRequest token.
         * @member {string} token
         * @memberof app.RefreshTokenRequest
         * @instance
         */
        RefreshTokenRequest.prototype.token = "";

        /**
         * RefreshTokenRequest tokenRefresh.
         * @member {string} tokenRefresh
         * @memberof app.RefreshTokenRequest
         * @instance
         */
        RefreshTokenRequest.prototype.tokenRefresh = "";

        /**
         * Creates a new RefreshTokenRequest instance using the specified properties.
         * @function create
         * @memberof app.RefreshTokenRequest
         * @static
         * @param {app.IRefreshTokenRequest=} [properties] Properties to set
         * @returns {app.RefreshTokenRequest} RefreshTokenRequest instance
         */
        RefreshTokenRequest.create = function create(properties) {
            return new RefreshTokenRequest(properties);
        };

        /**
         * Encodes the specified RefreshTokenRequest message. Does not implicitly {@link app.RefreshTokenRequest.verify|verify} messages.
         * @function encode
         * @memberof app.RefreshTokenRequest
         * @static
         * @param {app.IRefreshTokenRequest} message RefreshTokenRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshTokenRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.tokenRefresh != null && Object.hasOwnProperty.call(message, "tokenRefresh"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tokenRefresh);
            return writer;
        };

        /**
         * Encodes the specified RefreshTokenRequest message, length delimited. Does not implicitly {@link app.RefreshTokenRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.RefreshTokenRequest
         * @static
         * @param {app.IRefreshTokenRequest} message RefreshTokenRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshTokenRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RefreshTokenRequest message from the specified reader or buffer.
         * @function decode
         * @memberof app.RefreshTokenRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.RefreshTokenRequest} RefreshTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshTokenRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.RefreshTokenRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.tokenRefresh = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RefreshTokenRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.RefreshTokenRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.RefreshTokenRequest} RefreshTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshTokenRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RefreshTokenRequest message.
         * @function verify
         * @memberof app.RefreshTokenRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RefreshTokenRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.tokenRefresh != null && message.hasOwnProperty("tokenRefresh"))
                if (!$util.isString(message.tokenRefresh))
                    return "tokenRefresh: string expected";
            return null;
        };

        /**
         * Creates a RefreshTokenRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.RefreshTokenRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.RefreshTokenRequest} RefreshTokenRequest
         */
        RefreshTokenRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.app.RefreshTokenRequest)
                return object;
            var message = new $root.app.RefreshTokenRequest();
            if (object.token != null)
                message.token = String(object.token);
            if (object.tokenRefresh != null)
                message.tokenRefresh = String(object.tokenRefresh);
            return message;
        };

        /**
         * Creates a plain object from a RefreshTokenRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.RefreshTokenRequest
         * @static
         * @param {app.RefreshTokenRequest} message RefreshTokenRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RefreshTokenRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.token = "";
                object.tokenRefresh = "";
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.tokenRefresh != null && message.hasOwnProperty("tokenRefresh"))
                object.tokenRefresh = message.tokenRefresh;
            return object;
        };

        /**
         * Converts this RefreshTokenRequest to JSON.
         * @function toJSON
         * @memberof app.RefreshTokenRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RefreshTokenRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RefreshTokenRequest;
    })();

    app.RefreshTokenResponse = (function() {

        /**
         * Properties of a RefreshTokenResponse.
         * @memberof app
         * @interface IRefreshTokenResponse
         * @property {string|null} [token] RefreshTokenResponse token
         * @property {string|null} [refreshToken] RefreshTokenResponse refreshToken
         */

        /**
         * Constructs a new RefreshTokenResponse.
         * @memberof app
         * @classdesc Represents a RefreshTokenResponse.
         * @implements IRefreshTokenResponse
         * @constructor
         * @param {app.IRefreshTokenResponse=} [properties] Properties to set
         */
        function RefreshTokenResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RefreshTokenResponse token.
         * @member {string} token
         * @memberof app.RefreshTokenResponse
         * @instance
         */
        RefreshTokenResponse.prototype.token = "";

        /**
         * RefreshTokenResponse refreshToken.
         * @member {string} refreshToken
         * @memberof app.RefreshTokenResponse
         * @instance
         */
        RefreshTokenResponse.prototype.refreshToken = "";

        /**
         * Creates a new RefreshTokenResponse instance using the specified properties.
         * @function create
         * @memberof app.RefreshTokenResponse
         * @static
         * @param {app.IRefreshTokenResponse=} [properties] Properties to set
         * @returns {app.RefreshTokenResponse} RefreshTokenResponse instance
         */
        RefreshTokenResponse.create = function create(properties) {
            return new RefreshTokenResponse(properties);
        };

        /**
         * Encodes the specified RefreshTokenResponse message. Does not implicitly {@link app.RefreshTokenResponse.verify|verify} messages.
         * @function encode
         * @memberof app.RefreshTokenResponse
         * @static
         * @param {app.IRefreshTokenResponse} message RefreshTokenResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshTokenResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.refreshToken);
            return writer;
        };

        /**
         * Encodes the specified RefreshTokenResponse message, length delimited. Does not implicitly {@link app.RefreshTokenResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.RefreshTokenResponse
         * @static
         * @param {app.IRefreshTokenResponse} message RefreshTokenResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshTokenResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RefreshTokenResponse message from the specified reader or buffer.
         * @function decode
         * @memberof app.RefreshTokenResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.RefreshTokenResponse} RefreshTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshTokenResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.RefreshTokenResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.refreshToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RefreshTokenResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.RefreshTokenResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.RefreshTokenResponse} RefreshTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshTokenResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RefreshTokenResponse message.
         * @function verify
         * @memberof app.RefreshTokenResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RefreshTokenResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
            return null;
        };

        /**
         * Creates a RefreshTokenResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.RefreshTokenResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.RefreshTokenResponse} RefreshTokenResponse
         */
        RefreshTokenResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.app.RefreshTokenResponse)
                return object;
            var message = new $root.app.RefreshTokenResponse();
            if (object.token != null)
                message.token = String(object.token);
            if (object.refreshToken != null)
                message.refreshToken = String(object.refreshToken);
            return message;
        };

        /**
         * Creates a plain object from a RefreshTokenResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.RefreshTokenResponse
         * @static
         * @param {app.RefreshTokenResponse} message RefreshTokenResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RefreshTokenResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.token = "";
                object.refreshToken = "";
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                object.refreshToken = message.refreshToken;
            return object;
        };

        /**
         * Converts this RefreshTokenResponse to JSON.
         * @function toJSON
         * @memberof app.RefreshTokenResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RefreshTokenResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RefreshTokenResponse;
    })();

    app.SignInRequest = (function() {

        /**
         * Properties of a SignInRequest.
         * @memberof app
         * @interface ISignInRequest
         * @property {string|null} [login] SignInRequest login
         * @property {string|null} [password] SignInRequest password
         */

        /**
         * Constructs a new SignInRequest.
         * @memberof app
         * @classdesc Represents a SignInRequest.
         * @implements ISignInRequest
         * @constructor
         * @param {app.ISignInRequest=} [properties] Properties to set
         */
        function SignInRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignInRequest login.
         * @member {string} login
         * @memberof app.SignInRequest
         * @instance
         */
        SignInRequest.prototype.login = "";

        /**
         * SignInRequest password.
         * @member {string} password
         * @memberof app.SignInRequest
         * @instance
         */
        SignInRequest.prototype.password = "";

        /**
         * Creates a new SignInRequest instance using the specified properties.
         * @function create
         * @memberof app.SignInRequest
         * @static
         * @param {app.ISignInRequest=} [properties] Properties to set
         * @returns {app.SignInRequest} SignInRequest instance
         */
        SignInRequest.create = function create(properties) {
            return new SignInRequest(properties);
        };

        /**
         * Encodes the specified SignInRequest message. Does not implicitly {@link app.SignInRequest.verify|verify} messages.
         * @function encode
         * @memberof app.SignInRequest
         * @static
         * @param {app.ISignInRequest} message SignInRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.login != null && Object.hasOwnProperty.call(message, "login"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified SignInRequest message, length delimited. Does not implicitly {@link app.SignInRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.SignInRequest
         * @static
         * @param {app.ISignInRequest} message SignInRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignInRequest message from the specified reader or buffer.
         * @function decode
         * @memberof app.SignInRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.SignInRequest} SignInRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.SignInRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignInRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.SignInRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.SignInRequest} SignInRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignInRequest message.
         * @function verify
         * @memberof app.SignInRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignInRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.login != null && message.hasOwnProperty("login"))
                if (!$util.isString(message.login))
                    return "login: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a SignInRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.SignInRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.SignInRequest} SignInRequest
         */
        SignInRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.app.SignInRequest)
                return object;
            var message = new $root.app.SignInRequest();
            if (object.login != null)
                message.login = String(object.login);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a SignInRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.SignInRequest
         * @static
         * @param {app.SignInRequest} message SignInRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignInRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.login = "";
                object.password = "";
            }
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this SignInRequest to JSON.
         * @function toJSON
         * @memberof app.SignInRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignInRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignInRequest;
    })();

    app.SignInResponse = (function() {

        /**
         * Properties of a SignInResponse.
         * @memberof app
         * @interface ISignInResponse
         * @property {string|null} [token] SignInResponse token
         * @property {string|null} [refreshToken] SignInResponse refreshToken
         */

        /**
         * Constructs a new SignInResponse.
         * @memberof app
         * @classdesc Represents a SignInResponse.
         * @implements ISignInResponse
         * @constructor
         * @param {app.ISignInResponse=} [properties] Properties to set
         */
        function SignInResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignInResponse token.
         * @member {string} token
         * @memberof app.SignInResponse
         * @instance
         */
        SignInResponse.prototype.token = "";

        /**
         * SignInResponse refreshToken.
         * @member {string} refreshToken
         * @memberof app.SignInResponse
         * @instance
         */
        SignInResponse.prototype.refreshToken = "";

        /**
         * Creates a new SignInResponse instance using the specified properties.
         * @function create
         * @memberof app.SignInResponse
         * @static
         * @param {app.ISignInResponse=} [properties] Properties to set
         * @returns {app.SignInResponse} SignInResponse instance
         */
        SignInResponse.create = function create(properties) {
            return new SignInResponse(properties);
        };

        /**
         * Encodes the specified SignInResponse message. Does not implicitly {@link app.SignInResponse.verify|verify} messages.
         * @function encode
         * @memberof app.SignInResponse
         * @static
         * @param {app.ISignInResponse} message SignInResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.refreshToken);
            return writer;
        };

        /**
         * Encodes the specified SignInResponse message, length delimited. Does not implicitly {@link app.SignInResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.SignInResponse
         * @static
         * @param {app.ISignInResponse} message SignInResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignInResponse message from the specified reader or buffer.
         * @function decode
         * @memberof app.SignInResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.SignInResponse} SignInResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.SignInResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.refreshToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignInResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.SignInResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.SignInResponse} SignInResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignInResponse message.
         * @function verify
         * @memberof app.SignInResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignInResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
            return null;
        };

        /**
         * Creates a SignInResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.SignInResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.SignInResponse} SignInResponse
         */
        SignInResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.app.SignInResponse)
                return object;
            var message = new $root.app.SignInResponse();
            if (object.token != null)
                message.token = String(object.token);
            if (object.refreshToken != null)
                message.refreshToken = String(object.refreshToken);
            return message;
        };

        /**
         * Creates a plain object from a SignInResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.SignInResponse
         * @static
         * @param {app.SignInResponse} message SignInResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignInResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.token = "";
                object.refreshToken = "";
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                object.refreshToken = message.refreshToken;
            return object;
        };

        /**
         * Converts this SignInResponse to JSON.
         * @function toJSON
         * @memberof app.SignInResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignInResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignInResponse;
    })();

    app.SignUpRequest = (function() {

        /**
         * Properties of a SignUpRequest.
         * @memberof app
         * @interface ISignUpRequest
         * @property {string|null} [login] SignUpRequest login
         * @property {string|null} [password] SignUpRequest password
         */

        /**
         * Constructs a new SignUpRequest.
         * @memberof app
         * @classdesc Represents a SignUpRequest.
         * @implements ISignUpRequest
         * @constructor
         * @param {app.ISignUpRequest=} [properties] Properties to set
         */
        function SignUpRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignUpRequest login.
         * @member {string} login
         * @memberof app.SignUpRequest
         * @instance
         */
        SignUpRequest.prototype.login = "";

        /**
         * SignUpRequest password.
         * @member {string} password
         * @memberof app.SignUpRequest
         * @instance
         */
        SignUpRequest.prototype.password = "";

        /**
         * Creates a new SignUpRequest instance using the specified properties.
         * @function create
         * @memberof app.SignUpRequest
         * @static
         * @param {app.ISignUpRequest=} [properties] Properties to set
         * @returns {app.SignUpRequest} SignUpRequest instance
         */
        SignUpRequest.create = function create(properties) {
            return new SignUpRequest(properties);
        };

        /**
         * Encodes the specified SignUpRequest message. Does not implicitly {@link app.SignUpRequest.verify|verify} messages.
         * @function encode
         * @memberof app.SignUpRequest
         * @static
         * @param {app.ISignUpRequest} message SignUpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignUpRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.login != null && Object.hasOwnProperty.call(message, "login"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified SignUpRequest message, length delimited. Does not implicitly {@link app.SignUpRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.SignUpRequest
         * @static
         * @param {app.ISignUpRequest} message SignUpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignUpRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignUpRequest message from the specified reader or buffer.
         * @function decode
         * @memberof app.SignUpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.SignUpRequest} SignUpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignUpRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.SignUpRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignUpRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.SignUpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.SignUpRequest} SignUpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignUpRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignUpRequest message.
         * @function verify
         * @memberof app.SignUpRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignUpRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.login != null && message.hasOwnProperty("login"))
                if (!$util.isString(message.login))
                    return "login: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a SignUpRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.SignUpRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.SignUpRequest} SignUpRequest
         */
        SignUpRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.app.SignUpRequest)
                return object;
            var message = new $root.app.SignUpRequest();
            if (object.login != null)
                message.login = String(object.login);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a SignUpRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.SignUpRequest
         * @static
         * @param {app.SignUpRequest} message SignUpRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignUpRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.login = "";
                object.password = "";
            }
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this SignUpRequest to JSON.
         * @function toJSON
         * @memberof app.SignUpRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignUpRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignUpRequest;
    })();

    app.ConfirmRequest = (function() {

        /**
         * Properties of a ConfirmRequest.
         * @memberof app
         * @interface IConfirmRequest
         * @property {string|null} [login] ConfirmRequest login
         * @property {string|null} [uuidConfirm] ConfirmRequest uuidConfirm
         */

        /**
         * Constructs a new ConfirmRequest.
         * @memberof app
         * @classdesc Represents a ConfirmRequest.
         * @implements IConfirmRequest
         * @constructor
         * @param {app.IConfirmRequest=} [properties] Properties to set
         */
        function ConfirmRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConfirmRequest login.
         * @member {string} login
         * @memberof app.ConfirmRequest
         * @instance
         */
        ConfirmRequest.prototype.login = "";

        /**
         * ConfirmRequest uuidConfirm.
         * @member {string} uuidConfirm
         * @memberof app.ConfirmRequest
         * @instance
         */
        ConfirmRequest.prototype.uuidConfirm = "";

        /**
         * Creates a new ConfirmRequest instance using the specified properties.
         * @function create
         * @memberof app.ConfirmRequest
         * @static
         * @param {app.IConfirmRequest=} [properties] Properties to set
         * @returns {app.ConfirmRequest} ConfirmRequest instance
         */
        ConfirmRequest.create = function create(properties) {
            return new ConfirmRequest(properties);
        };

        /**
         * Encodes the specified ConfirmRequest message. Does not implicitly {@link app.ConfirmRequest.verify|verify} messages.
         * @function encode
         * @memberof app.ConfirmRequest
         * @static
         * @param {app.IConfirmRequest} message ConfirmRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConfirmRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.login != null && Object.hasOwnProperty.call(message, "login"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            if (message.uuidConfirm != null && Object.hasOwnProperty.call(message, "uuidConfirm"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uuidConfirm);
            return writer;
        };

        /**
         * Encodes the specified ConfirmRequest message, length delimited. Does not implicitly {@link app.ConfirmRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.ConfirmRequest
         * @static
         * @param {app.IConfirmRequest} message ConfirmRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConfirmRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConfirmRequest message from the specified reader or buffer.
         * @function decode
         * @memberof app.ConfirmRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.ConfirmRequest} ConfirmRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConfirmRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.ConfirmRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                case 2:
                    message.uuidConfirm = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConfirmRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.ConfirmRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.ConfirmRequest} ConfirmRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConfirmRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConfirmRequest message.
         * @function verify
         * @memberof app.ConfirmRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConfirmRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.login != null && message.hasOwnProperty("login"))
                if (!$util.isString(message.login))
                    return "login: string expected";
            if (message.uuidConfirm != null && message.hasOwnProperty("uuidConfirm"))
                if (!$util.isString(message.uuidConfirm))
                    return "uuidConfirm: string expected";
            return null;
        };

        /**
         * Creates a ConfirmRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.ConfirmRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.ConfirmRequest} ConfirmRequest
         */
        ConfirmRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.app.ConfirmRequest)
                return object;
            var message = new $root.app.ConfirmRequest();
            if (object.login != null)
                message.login = String(object.login);
            if (object.uuidConfirm != null)
                message.uuidConfirm = String(object.uuidConfirm);
            return message;
        };

        /**
         * Creates a plain object from a ConfirmRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.ConfirmRequest
         * @static
         * @param {app.ConfirmRequest} message ConfirmRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConfirmRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.login = "";
                object.uuidConfirm = "";
            }
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            if (message.uuidConfirm != null && message.hasOwnProperty("uuidConfirm"))
                object.uuidConfirm = message.uuidConfirm;
            return object;
        };

        /**
         * Converts this ConfirmRequest to JSON.
         * @function toJSON
         * @memberof app.ConfirmRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConfirmRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConfirmRequest;
    })();

    app.RestoreRequest = (function() {

        /**
         * Properties of a RestoreRequest.
         * @memberof app
         * @interface IRestoreRequest
         * @property {string|null} [token] RestoreRequest token
         * @property {string|null} [login] RestoreRequest login
         * @property {string|null} [newPassword] RestoreRequest newPassword
         */

        /**
         * Constructs a new RestoreRequest.
         * @memberof app
         * @classdesc Represents a RestoreRequest.
         * @implements IRestoreRequest
         * @constructor
         * @param {app.IRestoreRequest=} [properties] Properties to set
         */
        function RestoreRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RestoreRequest token.
         * @member {string} token
         * @memberof app.RestoreRequest
         * @instance
         */
        RestoreRequest.prototype.token = "";

        /**
         * RestoreRequest login.
         * @member {string} login
         * @memberof app.RestoreRequest
         * @instance
         */
        RestoreRequest.prototype.login = "";

        /**
         * RestoreRequest newPassword.
         * @member {string} newPassword
         * @memberof app.RestoreRequest
         * @instance
         */
        RestoreRequest.prototype.newPassword = "";

        /**
         * Creates a new RestoreRequest instance using the specified properties.
         * @function create
         * @memberof app.RestoreRequest
         * @static
         * @param {app.IRestoreRequest=} [properties] Properties to set
         * @returns {app.RestoreRequest} RestoreRequest instance
         */
        RestoreRequest.create = function create(properties) {
            return new RestoreRequest(properties);
        };

        /**
         * Encodes the specified RestoreRequest message. Does not implicitly {@link app.RestoreRequest.verify|verify} messages.
         * @function encode
         * @memberof app.RestoreRequest
         * @static
         * @param {app.IRestoreRequest} message RestoreRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RestoreRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.login != null && Object.hasOwnProperty.call(message, "login"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.login);
            if (message.newPassword != null && Object.hasOwnProperty.call(message, "newPassword"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.newPassword);
            return writer;
        };

        /**
         * Encodes the specified RestoreRequest message, length delimited. Does not implicitly {@link app.RestoreRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.RestoreRequest
         * @static
         * @param {app.IRestoreRequest} message RestoreRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RestoreRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RestoreRequest message from the specified reader or buffer.
         * @function decode
         * @memberof app.RestoreRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.RestoreRequest} RestoreRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RestoreRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.RestoreRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.login = reader.string();
                    break;
                case 3:
                    message.newPassword = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RestoreRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.RestoreRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.RestoreRequest} RestoreRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RestoreRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RestoreRequest message.
         * @function verify
         * @memberof app.RestoreRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RestoreRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.login != null && message.hasOwnProperty("login"))
                if (!$util.isString(message.login))
                    return "login: string expected";
            if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                if (!$util.isString(message.newPassword))
                    return "newPassword: string expected";
            return null;
        };

        /**
         * Creates a RestoreRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.RestoreRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.RestoreRequest} RestoreRequest
         */
        RestoreRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.app.RestoreRequest)
                return object;
            var message = new $root.app.RestoreRequest();
            if (object.token != null)
                message.token = String(object.token);
            if (object.login != null)
                message.login = String(object.login);
            if (object.newPassword != null)
                message.newPassword = String(object.newPassword);
            return message;
        };

        /**
         * Creates a plain object from a RestoreRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.RestoreRequest
         * @static
         * @param {app.RestoreRequest} message RestoreRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RestoreRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.token = "";
                object.login = "";
                object.newPassword = "";
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                object.newPassword = message.newPassword;
            return object;
        };

        /**
         * Converts this RestoreRequest to JSON.
         * @function toJSON
         * @memberof app.RestoreRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RestoreRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RestoreRequest;
    })();

    app.DeleteRequest = (function() {

        /**
         * Properties of a DeleteRequest.
         * @memberof app
         * @interface IDeleteRequest
         * @property {string|null} [login] DeleteRequest login
         */

        /**
         * Constructs a new DeleteRequest.
         * @memberof app
         * @classdesc Represents a DeleteRequest.
         * @implements IDeleteRequest
         * @constructor
         * @param {app.IDeleteRequest=} [properties] Properties to set
         */
        function DeleteRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteRequest login.
         * @member {string} login
         * @memberof app.DeleteRequest
         * @instance
         */
        DeleteRequest.prototype.login = "";

        /**
         * Creates a new DeleteRequest instance using the specified properties.
         * @function create
         * @memberof app.DeleteRequest
         * @static
         * @param {app.IDeleteRequest=} [properties] Properties to set
         * @returns {app.DeleteRequest} DeleteRequest instance
         */
        DeleteRequest.create = function create(properties) {
            return new DeleteRequest(properties);
        };

        /**
         * Encodes the specified DeleteRequest message. Does not implicitly {@link app.DeleteRequest.verify|verify} messages.
         * @function encode
         * @memberof app.DeleteRequest
         * @static
         * @param {app.IDeleteRequest} message DeleteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.login != null && Object.hasOwnProperty.call(message, "login"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            return writer;
        };

        /**
         * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link app.DeleteRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.DeleteRequest
         * @static
         * @param {app.IDeleteRequest} message DeleteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer.
         * @function decode
         * @memberof app.DeleteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.DeleteRequest} DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.DeleteRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.DeleteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.DeleteRequest} DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteRequest message.
         * @function verify
         * @memberof app.DeleteRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.login != null && message.hasOwnProperty("login"))
                if (!$util.isString(message.login))
                    return "login: string expected";
            return null;
        };

        /**
         * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.DeleteRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.DeleteRequest} DeleteRequest
         */
        DeleteRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.app.DeleteRequest)
                return object;
            var message = new $root.app.DeleteRequest();
            if (object.login != null)
                message.login = String(object.login);
            return message;
        };

        /**
         * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.DeleteRequest
         * @static
         * @param {app.DeleteRequest} message DeleteRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.login = "";
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            return object;
        };

        /**
         * Converts this DeleteRequest to JSON.
         * @function toJSON
         * @memberof app.DeleteRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteRequest;
    })();

    app.EmptyResponse = (function() {

        /**
         * Properties of an EmptyResponse.
         * @memberof app
         * @interface IEmptyResponse
         */

        /**
         * Constructs a new EmptyResponse.
         * @memberof app
         * @classdesc Represents an EmptyResponse.
         * @implements IEmptyResponse
         * @constructor
         * @param {app.IEmptyResponse=} [properties] Properties to set
         */
        function EmptyResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new EmptyResponse instance using the specified properties.
         * @function create
         * @memberof app.EmptyResponse
         * @static
         * @param {app.IEmptyResponse=} [properties] Properties to set
         * @returns {app.EmptyResponse} EmptyResponse instance
         */
        EmptyResponse.create = function create(properties) {
            return new EmptyResponse(properties);
        };

        /**
         * Encodes the specified EmptyResponse message. Does not implicitly {@link app.EmptyResponse.verify|verify} messages.
         * @function encode
         * @memberof app.EmptyResponse
         * @static
         * @param {app.IEmptyResponse} message EmptyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified EmptyResponse message, length delimited. Does not implicitly {@link app.EmptyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.EmptyResponse
         * @static
         * @param {app.IEmptyResponse} message EmptyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EmptyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof app.EmptyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.EmptyResponse} EmptyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.EmptyResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EmptyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.EmptyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.EmptyResponse} EmptyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EmptyResponse message.
         * @function verify
         * @memberof app.EmptyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EmptyResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an EmptyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.EmptyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.EmptyResponse} EmptyResponse
         */
        EmptyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.app.EmptyResponse)
                return object;
            return new $root.app.EmptyResponse();
        };

        /**
         * Creates a plain object from an EmptyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.EmptyResponse
         * @static
         * @param {app.EmptyResponse} message EmptyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmptyResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this EmptyResponse to JSON.
         * @function toJSON
         * @memberof app.EmptyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmptyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EmptyResponse;
    })();

    app.ValidateToken = (function() {

        /**
         * Properties of a ValidateToken.
         * @memberof app
         * @interface IValidateToken
         * @property {string|null} [token] ValidateToken token
         */

        /**
         * Constructs a new ValidateToken.
         * @memberof app
         * @classdesc Represents a ValidateToken.
         * @implements IValidateToken
         * @constructor
         * @param {app.IValidateToken=} [properties] Properties to set
         */
        function ValidateToken(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ValidateToken token.
         * @member {string} token
         * @memberof app.ValidateToken
         * @instance
         */
        ValidateToken.prototype.token = "";

        /**
         * Creates a new ValidateToken instance using the specified properties.
         * @function create
         * @memberof app.ValidateToken
         * @static
         * @param {app.IValidateToken=} [properties] Properties to set
         * @returns {app.ValidateToken} ValidateToken instance
         */
        ValidateToken.create = function create(properties) {
            return new ValidateToken(properties);
        };

        /**
         * Encodes the specified ValidateToken message. Does not implicitly {@link app.ValidateToken.verify|verify} messages.
         * @function encode
         * @memberof app.ValidateToken
         * @static
         * @param {app.IValidateToken} message ValidateToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidateToken.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified ValidateToken message, length delimited. Does not implicitly {@link app.ValidateToken.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.ValidateToken
         * @static
         * @param {app.IValidateToken} message ValidateToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidateToken.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ValidateToken message from the specified reader or buffer.
         * @function decode
         * @memberof app.ValidateToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.ValidateToken} ValidateToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidateToken.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.ValidateToken();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ValidateToken message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.ValidateToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.ValidateToken} ValidateToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidateToken.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ValidateToken message.
         * @function verify
         * @memberof app.ValidateToken
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ValidateToken.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a ValidateToken message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.ValidateToken
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.ValidateToken} ValidateToken
         */
        ValidateToken.fromObject = function fromObject(object) {
            if (object instanceof $root.app.ValidateToken)
                return object;
            var message = new $root.app.ValidateToken();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a ValidateToken message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.ValidateToken
         * @static
         * @param {app.ValidateToken} message ValidateToken
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ValidateToken.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this ValidateToken to JSON.
         * @function toJSON
         * @memberof app.ValidateToken
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ValidateToken.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ValidateToken;
    })();

    app.ForgotPasswordRequest = (function() {

        /**
         * Properties of a ForgotPasswordRequest.
         * @memberof app
         * @interface IForgotPasswordRequest
         * @property {string|null} [login] ForgotPasswordRequest login
         */

        /**
         * Constructs a new ForgotPasswordRequest.
         * @memberof app
         * @classdesc Represents a ForgotPasswordRequest.
         * @implements IForgotPasswordRequest
         * @constructor
         * @param {app.IForgotPasswordRequest=} [properties] Properties to set
         */
        function ForgotPasswordRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ForgotPasswordRequest login.
         * @member {string} login
         * @memberof app.ForgotPasswordRequest
         * @instance
         */
        ForgotPasswordRequest.prototype.login = "";

        /**
         * Creates a new ForgotPasswordRequest instance using the specified properties.
         * @function create
         * @memberof app.ForgotPasswordRequest
         * @static
         * @param {app.IForgotPasswordRequest=} [properties] Properties to set
         * @returns {app.ForgotPasswordRequest} ForgotPasswordRequest instance
         */
        ForgotPasswordRequest.create = function create(properties) {
            return new ForgotPasswordRequest(properties);
        };

        /**
         * Encodes the specified ForgotPasswordRequest message. Does not implicitly {@link app.ForgotPasswordRequest.verify|verify} messages.
         * @function encode
         * @memberof app.ForgotPasswordRequest
         * @static
         * @param {app.IForgotPasswordRequest} message ForgotPasswordRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForgotPasswordRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.login != null && Object.hasOwnProperty.call(message, "login"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            return writer;
        };

        /**
         * Encodes the specified ForgotPasswordRequest message, length delimited. Does not implicitly {@link app.ForgotPasswordRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.ForgotPasswordRequest
         * @static
         * @param {app.IForgotPasswordRequest} message ForgotPasswordRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForgotPasswordRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ForgotPasswordRequest message from the specified reader or buffer.
         * @function decode
         * @memberof app.ForgotPasswordRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.ForgotPasswordRequest} ForgotPasswordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForgotPasswordRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.ForgotPasswordRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ForgotPasswordRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.ForgotPasswordRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.ForgotPasswordRequest} ForgotPasswordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForgotPasswordRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ForgotPasswordRequest message.
         * @function verify
         * @memberof app.ForgotPasswordRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ForgotPasswordRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.login != null && message.hasOwnProperty("login"))
                if (!$util.isString(message.login))
                    return "login: string expected";
            return null;
        };

        /**
         * Creates a ForgotPasswordRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.ForgotPasswordRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.ForgotPasswordRequest} ForgotPasswordRequest
         */
        ForgotPasswordRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.app.ForgotPasswordRequest)
                return object;
            var message = new $root.app.ForgotPasswordRequest();
            if (object.login != null)
                message.login = String(object.login);
            return message;
        };

        /**
         * Creates a plain object from a ForgotPasswordRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.ForgotPasswordRequest
         * @static
         * @param {app.ForgotPasswordRequest} message ForgotPasswordRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ForgotPasswordRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.login = "";
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            return object;
        };

        /**
         * Converts this ForgotPasswordRequest to JSON.
         * @function toJSON
         * @memberof app.ForgotPasswordRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ForgotPasswordRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ForgotPasswordRequest;
    })();

    app.AuthService = (function() {

        /**
         * Constructs a new AuthService service.
         * @memberof app
         * @classdesc Represents an AuthService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AuthService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (AuthService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AuthService;

        /**
         * Creates new AuthService service using the specified rpc implementation.
         * @function create
         * @memberof app.AuthService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {AuthService} RPC service. Useful where requests and/or responses are streamed.
         */
        AuthService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link app.AuthService#signIn}.
         * @memberof app.AuthService
         * @typedef SignInCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {app.SignInResponse} [response] SignInResponse
         */

        /**
         * Calls SignIn.
         * @function signIn
         * @memberof app.AuthService
         * @instance
         * @param {app.ISignInRequest} request SignInRequest message or plain object
         * @param {app.AuthService.SignInCallback} callback Node-style callback called with the error, if any, and SignInResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AuthService.prototype.signIn = function signIn(request, callback) {
            return this.rpcCall(signIn, $root.app.SignInRequest, $root.app.SignInResponse, request, callback);
        }, "name", { value: "SignIn" });

        /**
         * Calls SignIn.
         * @function signIn
         * @memberof app.AuthService
         * @instance
         * @param {app.ISignInRequest} request SignInRequest message or plain object
         * @returns {Promise<app.SignInResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link app.AuthService#signUp}.
         * @memberof app.AuthService
         * @typedef SignUpCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {app.EmptyResponse} [response] EmptyResponse
         */

        /**
         * Calls SignUp.
         * @function signUp
         * @memberof app.AuthService
         * @instance
         * @param {app.ISignUpRequest} request SignUpRequest message or plain object
         * @param {app.AuthService.SignUpCallback} callback Node-style callback called with the error, if any, and EmptyResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AuthService.prototype.signUp = function signUp(request, callback) {
            return this.rpcCall(signUp, $root.app.SignUpRequest, $root.app.EmptyResponse, request, callback);
        }, "name", { value: "SignUp" });

        /**
         * Calls SignUp.
         * @function signUp
         * @memberof app.AuthService
         * @instance
         * @param {app.ISignUpRequest} request SignUpRequest message or plain object
         * @returns {Promise<app.EmptyResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link app.AuthService#delete_}.
         * @memberof app.AuthService
         * @typedef DeleteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {app.EmptyResponse} [response] EmptyResponse
         */

        /**
         * Calls Delete.
         * @function delete
         * @memberof app.AuthService
         * @instance
         * @param {app.IDeleteRequest} request DeleteRequest message or plain object
         * @param {app.AuthService.DeleteCallback} callback Node-style callback called with the error, if any, and EmptyResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AuthService.prototype["delete"] = function delete_(request, callback) {
            return this.rpcCall(delete_, $root.app.DeleteRequest, $root.app.EmptyResponse, request, callback);
        }, "name", { value: "Delete" });

        /**
         * Calls Delete.
         * @function delete
         * @memberof app.AuthService
         * @instance
         * @param {app.IDeleteRequest} request DeleteRequest message or plain object
         * @returns {Promise<app.EmptyResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link app.AuthService#refreshToken}.
         * @memberof app.AuthService
         * @typedef RefreshTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {app.RefreshTokenResponse} [response] RefreshTokenResponse
         */

        /**
         * Calls RefreshToken.
         * @function refreshToken
         * @memberof app.AuthService
         * @instance
         * @param {app.IRefreshTokenRequest} request RefreshTokenRequest message or plain object
         * @param {app.AuthService.RefreshTokenCallback} callback Node-style callback called with the error, if any, and RefreshTokenResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AuthService.prototype.refreshToken = function refreshToken(request, callback) {
            return this.rpcCall(refreshToken, $root.app.RefreshTokenRequest, $root.app.RefreshTokenResponse, request, callback);
        }, "name", { value: "RefreshToken" });

        /**
         * Calls RefreshToken.
         * @function refreshToken
         * @memberof app.AuthService
         * @instance
         * @param {app.IRefreshTokenRequest} request RefreshTokenRequest message or plain object
         * @returns {Promise<app.RefreshTokenResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link app.AuthService#confirm}.
         * @memberof app.AuthService
         * @typedef ConfirmCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {app.EmptyResponse} [response] EmptyResponse
         */

        /**
         * Calls Confirm.
         * @function confirm
         * @memberof app.AuthService
         * @instance
         * @param {app.IConfirmRequest} request ConfirmRequest message or plain object
         * @param {app.AuthService.ConfirmCallback} callback Node-style callback called with the error, if any, and EmptyResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AuthService.prototype.confirm = function confirm(request, callback) {
            return this.rpcCall(confirm, $root.app.ConfirmRequest, $root.app.EmptyResponse, request, callback);
        }, "name", { value: "Confirm" });

        /**
         * Calls Confirm.
         * @function confirm
         * @memberof app.AuthService
         * @instance
         * @param {app.IConfirmRequest} request ConfirmRequest message or plain object
         * @returns {Promise<app.EmptyResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link app.AuthService#restore}.
         * @memberof app.AuthService
         * @typedef RestoreCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {app.EmptyResponse} [response] EmptyResponse
         */

        /**
         * Calls Restore.
         * @function restore
         * @memberof app.AuthService
         * @instance
         * @param {app.IRestoreRequest} request RestoreRequest message or plain object
         * @param {app.AuthService.RestoreCallback} callback Node-style callback called with the error, if any, and EmptyResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AuthService.prototype.restore = function restore(request, callback) {
            return this.rpcCall(restore, $root.app.RestoreRequest, $root.app.EmptyResponse, request, callback);
        }, "name", { value: "Restore" });

        /**
         * Calls Restore.
         * @function restore
         * @memberof app.AuthService
         * @instance
         * @param {app.IRestoreRequest} request RestoreRequest message or plain object
         * @returns {Promise<app.EmptyResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link app.AuthService#forgotPassword}.
         * @memberof app.AuthService
         * @typedef ForgotPasswordCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {app.EmptyResponse} [response] EmptyResponse
         */

        /**
         * Calls ForgotPassword.
         * @function forgotPassword
         * @memberof app.AuthService
         * @instance
         * @param {app.IForgotPasswordRequest} request ForgotPasswordRequest message or plain object
         * @param {app.AuthService.ForgotPasswordCallback} callback Node-style callback called with the error, if any, and EmptyResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AuthService.prototype.forgotPassword = function forgotPassword(request, callback) {
            return this.rpcCall(forgotPassword, $root.app.ForgotPasswordRequest, $root.app.EmptyResponse, request, callback);
        }, "name", { value: "ForgotPassword" });

        /**
         * Calls ForgotPassword.
         * @function forgotPassword
         * @memberof app.AuthService
         * @instance
         * @param {app.IForgotPasswordRequest} request ForgotPasswordRequest message or plain object
         * @returns {Promise<app.EmptyResponse>} Promise
         * @variation 2
         */

        return AuthService;
    })();

    return app;
})();

$root.claims = (function() {

    /**
     * Namespace claims.
     * @exports claims
     * @namespace
     */
    var claims = {};

    claims.Claims = (function() {

        /**
         * Properties of a Claims.
         * @memberof claims
         * @interface IClaims
         * @property {string|null} [login] Claims login
         * @property {string|null} [description] Claims description
         * @property {string|null} [value] Claims value
         */

        /**
         * Constructs a new Claims.
         * @memberof claims
         * @classdesc Represents a Claims.
         * @implements IClaims
         * @constructor
         * @param {claims.IClaims=} [properties] Properties to set
         */
        function Claims(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Claims login.
         * @member {string} login
         * @memberof claims.Claims
         * @instance
         */
        Claims.prototype.login = "";

        /**
         * Claims description.
         * @member {string} description
         * @memberof claims.Claims
         * @instance
         */
        Claims.prototype.description = "";

        /**
         * Claims value.
         * @member {string} value
         * @memberof claims.Claims
         * @instance
         */
        Claims.prototype.value = "";

        /**
         * Creates a new Claims instance using the specified properties.
         * @function create
         * @memberof claims.Claims
         * @static
         * @param {claims.IClaims=} [properties] Properties to set
         * @returns {claims.Claims} Claims instance
         */
        Claims.create = function create(properties) {
            return new Claims(properties);
        };

        /**
         * Encodes the specified Claims message. Does not implicitly {@link claims.Claims.verify|verify} messages.
         * @function encode
         * @memberof claims.Claims
         * @static
         * @param {claims.IClaims} message Claims message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Claims.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.login != null && Object.hasOwnProperty.call(message, "login"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified Claims message, length delimited. Does not implicitly {@link claims.Claims.verify|verify} messages.
         * @function encodeDelimited
         * @memberof claims.Claims
         * @static
         * @param {claims.IClaims} message Claims message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Claims.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Claims message from the specified reader or buffer.
         * @function decode
         * @memberof claims.Claims
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {claims.Claims} Claims
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Claims.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.claims.Claims();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Claims message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof claims.Claims
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {claims.Claims} Claims
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Claims.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Claims message.
         * @function verify
         * @memberof claims.Claims
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Claims.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.login != null && message.hasOwnProperty("login"))
                if (!$util.isString(message.login))
                    return "login: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a Claims message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof claims.Claims
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {claims.Claims} Claims
         */
        Claims.fromObject = function fromObject(object) {
            if (object instanceof $root.claims.Claims)
                return object;
            var message = new $root.claims.Claims();
            if (object.login != null)
                message.login = String(object.login);
            if (object.description != null)
                message.description = String(object.description);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a Claims message. Also converts values to other types if specified.
         * @function toObject
         * @memberof claims.Claims
         * @static
         * @param {claims.Claims} message Claims
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Claims.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.login = "";
                object.description = "";
                object.value = "";
            }
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this Claims to JSON.
         * @function toJSON
         * @memberof claims.Claims
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Claims.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Claims;
    })();

    claims.AddClaimsRequest = (function() {

        /**
         * Properties of an AddClaimsRequest.
         * @memberof claims
         * @interface IAddClaimsRequest
         * @property {string|null} [login] AddClaimsRequest login
         * @property {Object.<string,string>|null} [claims] AddClaimsRequest claims
         */

        /**
         * Constructs a new AddClaimsRequest.
         * @memberof claims
         * @classdesc Represents an AddClaimsRequest.
         * @implements IAddClaimsRequest
         * @constructor
         * @param {claims.IAddClaimsRequest=} [properties] Properties to set
         */
        function AddClaimsRequest(properties) {
            this.claims = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddClaimsRequest login.
         * @member {string} login
         * @memberof claims.AddClaimsRequest
         * @instance
         */
        AddClaimsRequest.prototype.login = "";

        /**
         * AddClaimsRequest claims.
         * @member {Object.<string,string>} claims
         * @memberof claims.AddClaimsRequest
         * @instance
         */
        AddClaimsRequest.prototype.claims = $util.emptyObject;

        /**
         * Creates a new AddClaimsRequest instance using the specified properties.
         * @function create
         * @memberof claims.AddClaimsRequest
         * @static
         * @param {claims.IAddClaimsRequest=} [properties] Properties to set
         * @returns {claims.AddClaimsRequest} AddClaimsRequest instance
         */
        AddClaimsRequest.create = function create(properties) {
            return new AddClaimsRequest(properties);
        };

        /**
         * Encodes the specified AddClaimsRequest message. Does not implicitly {@link claims.AddClaimsRequest.verify|verify} messages.
         * @function encode
         * @memberof claims.AddClaimsRequest
         * @static
         * @param {claims.IAddClaimsRequest} message AddClaimsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddClaimsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.login != null && Object.hasOwnProperty.call(message, "login"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            if (message.claims != null && Object.hasOwnProperty.call(message, "claims"))
                for (var keys = Object.keys(message.claims), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.claims[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddClaimsRequest message, length delimited. Does not implicitly {@link claims.AddClaimsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof claims.AddClaimsRequest
         * @static
         * @param {claims.IAddClaimsRequest} message AddClaimsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddClaimsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddClaimsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof claims.AddClaimsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {claims.AddClaimsRequest} AddClaimsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddClaimsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.claims.AddClaimsRequest(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                case 2:
                    if (message.claims === $util.emptyObject)
                        message.claims = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = "";
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.string();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.claims[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddClaimsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof claims.AddClaimsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {claims.AddClaimsRequest} AddClaimsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddClaimsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddClaimsRequest message.
         * @function verify
         * @memberof claims.AddClaimsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddClaimsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.login != null && message.hasOwnProperty("login"))
                if (!$util.isString(message.login))
                    return "login: string expected";
            if (message.claims != null && message.hasOwnProperty("claims")) {
                if (!$util.isObject(message.claims))
                    return "claims: object expected";
                var key = Object.keys(message.claims);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.claims[key[i]]))
                        return "claims: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates an AddClaimsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof claims.AddClaimsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {claims.AddClaimsRequest} AddClaimsRequest
         */
        AddClaimsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.claims.AddClaimsRequest)
                return object;
            var message = new $root.claims.AddClaimsRequest();
            if (object.login != null)
                message.login = String(object.login);
            if (object.claims) {
                if (typeof object.claims !== "object")
                    throw TypeError(".claims.AddClaimsRequest.claims: object expected");
                message.claims = {};
                for (var keys = Object.keys(object.claims), i = 0; i < keys.length; ++i)
                    message.claims[keys[i]] = String(object.claims[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from an AddClaimsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof claims.AddClaimsRequest
         * @static
         * @param {claims.AddClaimsRequest} message AddClaimsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddClaimsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.claims = {};
            if (options.defaults)
                object.login = "";
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            var keys2;
            if (message.claims && (keys2 = Object.keys(message.claims)).length) {
                object.claims = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.claims[keys2[j]] = message.claims[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this AddClaimsRequest to JSON.
         * @function toJSON
         * @memberof claims.AddClaimsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddClaimsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddClaimsRequest;
    })();

    claims.EmptyResponse = (function() {

        /**
         * Properties of an EmptyResponse.
         * @memberof claims
         * @interface IEmptyResponse
         */

        /**
         * Constructs a new EmptyResponse.
         * @memberof claims
         * @classdesc Represents an EmptyResponse.
         * @implements IEmptyResponse
         * @constructor
         * @param {claims.IEmptyResponse=} [properties] Properties to set
         */
        function EmptyResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new EmptyResponse instance using the specified properties.
         * @function create
         * @memberof claims.EmptyResponse
         * @static
         * @param {claims.IEmptyResponse=} [properties] Properties to set
         * @returns {claims.EmptyResponse} EmptyResponse instance
         */
        EmptyResponse.create = function create(properties) {
            return new EmptyResponse(properties);
        };

        /**
         * Encodes the specified EmptyResponse message. Does not implicitly {@link claims.EmptyResponse.verify|verify} messages.
         * @function encode
         * @memberof claims.EmptyResponse
         * @static
         * @param {claims.IEmptyResponse} message EmptyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified EmptyResponse message, length delimited. Does not implicitly {@link claims.EmptyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof claims.EmptyResponse
         * @static
         * @param {claims.IEmptyResponse} message EmptyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EmptyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof claims.EmptyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {claims.EmptyResponse} EmptyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.claims.EmptyResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EmptyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof claims.EmptyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {claims.EmptyResponse} EmptyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EmptyResponse message.
         * @function verify
         * @memberof claims.EmptyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EmptyResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an EmptyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof claims.EmptyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {claims.EmptyResponse} EmptyResponse
         */
        EmptyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.claims.EmptyResponse)
                return object;
            return new $root.claims.EmptyResponse();
        };

        /**
         * Creates a plain object from an EmptyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof claims.EmptyResponse
         * @static
         * @param {claims.EmptyResponse} message EmptyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmptyResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this EmptyResponse to JSON.
         * @function toJSON
         * @memberof claims.EmptyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmptyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EmptyResponse;
    })();

    claims.EmptyRequest = (function() {

        /**
         * Properties of an EmptyRequest.
         * @memberof claims
         * @interface IEmptyRequest
         */

        /**
         * Constructs a new EmptyRequest.
         * @memberof claims
         * @classdesc Represents an EmptyRequest.
         * @implements IEmptyRequest
         * @constructor
         * @param {claims.IEmptyRequest=} [properties] Properties to set
         */
        function EmptyRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new EmptyRequest instance using the specified properties.
         * @function create
         * @memberof claims.EmptyRequest
         * @static
         * @param {claims.IEmptyRequest=} [properties] Properties to set
         * @returns {claims.EmptyRequest} EmptyRequest instance
         */
        EmptyRequest.create = function create(properties) {
            return new EmptyRequest(properties);
        };

        /**
         * Encodes the specified EmptyRequest message. Does not implicitly {@link claims.EmptyRequest.verify|verify} messages.
         * @function encode
         * @memberof claims.EmptyRequest
         * @static
         * @param {claims.IEmptyRequest} message EmptyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified EmptyRequest message, length delimited. Does not implicitly {@link claims.EmptyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof claims.EmptyRequest
         * @static
         * @param {claims.IEmptyRequest} message EmptyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EmptyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof claims.EmptyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {claims.EmptyRequest} EmptyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.claims.EmptyRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EmptyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof claims.EmptyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {claims.EmptyRequest} EmptyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EmptyRequest message.
         * @function verify
         * @memberof claims.EmptyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EmptyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an EmptyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof claims.EmptyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {claims.EmptyRequest} EmptyRequest
         */
        EmptyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.claims.EmptyRequest)
                return object;
            return new $root.claims.EmptyRequest();
        };

        /**
         * Creates a plain object from an EmptyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof claims.EmptyRequest
         * @static
         * @param {claims.EmptyRequest} message EmptyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmptyRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this EmptyRequest to JSON.
         * @function toJSON
         * @memberof claims.EmptyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmptyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EmptyRequest;
    })();

    claims.GetClaimsResponse = (function() {

        /**
         * Properties of a GetClaimsResponse.
         * @memberof claims
         * @interface IGetClaimsResponse
         * @property {Array.<claims.IClaims>|null} [claims] GetClaimsResponse claims
         */

        /**
         * Constructs a new GetClaimsResponse.
         * @memberof claims
         * @classdesc Represents a GetClaimsResponse.
         * @implements IGetClaimsResponse
         * @constructor
         * @param {claims.IGetClaimsResponse=} [properties] Properties to set
         */
        function GetClaimsResponse(properties) {
            this.claims = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetClaimsResponse claims.
         * @member {Array.<claims.IClaims>} claims
         * @memberof claims.GetClaimsResponse
         * @instance
         */
        GetClaimsResponse.prototype.claims = $util.emptyArray;

        /**
         * Creates a new GetClaimsResponse instance using the specified properties.
         * @function create
         * @memberof claims.GetClaimsResponse
         * @static
         * @param {claims.IGetClaimsResponse=} [properties] Properties to set
         * @returns {claims.GetClaimsResponse} GetClaimsResponse instance
         */
        GetClaimsResponse.create = function create(properties) {
            return new GetClaimsResponse(properties);
        };

        /**
         * Encodes the specified GetClaimsResponse message. Does not implicitly {@link claims.GetClaimsResponse.verify|verify} messages.
         * @function encode
         * @memberof claims.GetClaimsResponse
         * @static
         * @param {claims.IGetClaimsResponse} message GetClaimsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetClaimsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.claims != null && message.claims.length)
                for (var i = 0; i < message.claims.length; ++i)
                    $root.claims.Claims.encode(message.claims[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetClaimsResponse message, length delimited. Does not implicitly {@link claims.GetClaimsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof claims.GetClaimsResponse
         * @static
         * @param {claims.IGetClaimsResponse} message GetClaimsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetClaimsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetClaimsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof claims.GetClaimsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {claims.GetClaimsResponse} GetClaimsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetClaimsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.claims.GetClaimsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.claims && message.claims.length))
                        message.claims = [];
                    message.claims.push($root.claims.Claims.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetClaimsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof claims.GetClaimsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {claims.GetClaimsResponse} GetClaimsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetClaimsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetClaimsResponse message.
         * @function verify
         * @memberof claims.GetClaimsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetClaimsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.claims != null && message.hasOwnProperty("claims")) {
                if (!Array.isArray(message.claims))
                    return "claims: array expected";
                for (var i = 0; i < message.claims.length; ++i) {
                    var error = $root.claims.Claims.verify(message.claims[i]);
                    if (error)
                        return "claims." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetClaimsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof claims.GetClaimsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {claims.GetClaimsResponse} GetClaimsResponse
         */
        GetClaimsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.claims.GetClaimsResponse)
                return object;
            var message = new $root.claims.GetClaimsResponse();
            if (object.claims) {
                if (!Array.isArray(object.claims))
                    throw TypeError(".claims.GetClaimsResponse.claims: array expected");
                message.claims = [];
                for (var i = 0; i < object.claims.length; ++i) {
                    if (typeof object.claims[i] !== "object")
                        throw TypeError(".claims.GetClaimsResponse.claims: object expected");
                    message.claims[i] = $root.claims.Claims.fromObject(object.claims[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetClaimsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof claims.GetClaimsResponse
         * @static
         * @param {claims.GetClaimsResponse} message GetClaimsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetClaimsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.claims = [];
            if (message.claims && message.claims.length) {
                object.claims = [];
                for (var j = 0; j < message.claims.length; ++j)
                    object.claims[j] = $root.claims.Claims.toObject(message.claims[j], options);
            }
            return object;
        };

        /**
         * Converts this GetClaimsResponse to JSON.
         * @function toJSON
         * @memberof claims.GetClaimsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetClaimsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetClaimsResponse;
    })();

    claims.DeleteClaimsRequest = (function() {

        /**
         * Properties of a DeleteClaimsRequest.
         * @memberof claims
         * @interface IDeleteClaimsRequest
         * @property {string|null} [login] DeleteClaimsRequest login
         * @property {Object.<string,string>|null} [claims] DeleteClaimsRequest claims
         */

        /**
         * Constructs a new DeleteClaimsRequest.
         * @memberof claims
         * @classdesc Represents a DeleteClaimsRequest.
         * @implements IDeleteClaimsRequest
         * @constructor
         * @param {claims.IDeleteClaimsRequest=} [properties] Properties to set
         */
        function DeleteClaimsRequest(properties) {
            this.claims = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteClaimsRequest login.
         * @member {string} login
         * @memberof claims.DeleteClaimsRequest
         * @instance
         */
        DeleteClaimsRequest.prototype.login = "";

        /**
         * DeleteClaimsRequest claims.
         * @member {Object.<string,string>} claims
         * @memberof claims.DeleteClaimsRequest
         * @instance
         */
        DeleteClaimsRequest.prototype.claims = $util.emptyObject;

        /**
         * Creates a new DeleteClaimsRequest instance using the specified properties.
         * @function create
         * @memberof claims.DeleteClaimsRequest
         * @static
         * @param {claims.IDeleteClaimsRequest=} [properties] Properties to set
         * @returns {claims.DeleteClaimsRequest} DeleteClaimsRequest instance
         */
        DeleteClaimsRequest.create = function create(properties) {
            return new DeleteClaimsRequest(properties);
        };

        /**
         * Encodes the specified DeleteClaimsRequest message. Does not implicitly {@link claims.DeleteClaimsRequest.verify|verify} messages.
         * @function encode
         * @memberof claims.DeleteClaimsRequest
         * @static
         * @param {claims.IDeleteClaimsRequest} message DeleteClaimsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteClaimsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.login != null && Object.hasOwnProperty.call(message, "login"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            if (message.claims != null && Object.hasOwnProperty.call(message, "claims"))
                for (var keys = Object.keys(message.claims), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.claims[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DeleteClaimsRequest message, length delimited. Does not implicitly {@link claims.DeleteClaimsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof claims.DeleteClaimsRequest
         * @static
         * @param {claims.IDeleteClaimsRequest} message DeleteClaimsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteClaimsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteClaimsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof claims.DeleteClaimsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {claims.DeleteClaimsRequest} DeleteClaimsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteClaimsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.claims.DeleteClaimsRequest(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                case 2:
                    if (message.claims === $util.emptyObject)
                        message.claims = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = "";
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.string();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.claims[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteClaimsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof claims.DeleteClaimsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {claims.DeleteClaimsRequest} DeleteClaimsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteClaimsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteClaimsRequest message.
         * @function verify
         * @memberof claims.DeleteClaimsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteClaimsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.login != null && message.hasOwnProperty("login"))
                if (!$util.isString(message.login))
                    return "login: string expected";
            if (message.claims != null && message.hasOwnProperty("claims")) {
                if (!$util.isObject(message.claims))
                    return "claims: object expected";
                var key = Object.keys(message.claims);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.claims[key[i]]))
                        return "claims: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a DeleteClaimsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof claims.DeleteClaimsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {claims.DeleteClaimsRequest} DeleteClaimsRequest
         */
        DeleteClaimsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.claims.DeleteClaimsRequest)
                return object;
            var message = new $root.claims.DeleteClaimsRequest();
            if (object.login != null)
                message.login = String(object.login);
            if (object.claims) {
                if (typeof object.claims !== "object")
                    throw TypeError(".claims.DeleteClaimsRequest.claims: object expected");
                message.claims = {};
                for (var keys = Object.keys(object.claims), i = 0; i < keys.length; ++i)
                    message.claims[keys[i]] = String(object.claims[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a DeleteClaimsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof claims.DeleteClaimsRequest
         * @static
         * @param {claims.DeleteClaimsRequest} message DeleteClaimsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteClaimsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.claims = {};
            if (options.defaults)
                object.login = "";
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            var keys2;
            if (message.claims && (keys2 = Object.keys(message.claims)).length) {
                object.claims = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.claims[keys2[j]] = message.claims[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this DeleteClaimsRequest to JSON.
         * @function toJSON
         * @memberof claims.DeleteClaimsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteClaimsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteClaimsRequest;
    })();

    claims.IfExistClaimsRequest = (function() {

        /**
         * Properties of an IfExistClaimsRequest.
         * @memberof claims
         * @interface IIfExistClaimsRequest
         * @property {string|null} [login] IfExistClaimsRequest login
         */

        /**
         * Constructs a new IfExistClaimsRequest.
         * @memberof claims
         * @classdesc Represents an IfExistClaimsRequest.
         * @implements IIfExistClaimsRequest
         * @constructor
         * @param {claims.IIfExistClaimsRequest=} [properties] Properties to set
         */
        function IfExistClaimsRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IfExistClaimsRequest login.
         * @member {string} login
         * @memberof claims.IfExistClaimsRequest
         * @instance
         */
        IfExistClaimsRequest.prototype.login = "";

        /**
         * Creates a new IfExistClaimsRequest instance using the specified properties.
         * @function create
         * @memberof claims.IfExistClaimsRequest
         * @static
         * @param {claims.IIfExistClaimsRequest=} [properties] Properties to set
         * @returns {claims.IfExistClaimsRequest} IfExistClaimsRequest instance
         */
        IfExistClaimsRequest.create = function create(properties) {
            return new IfExistClaimsRequest(properties);
        };

        /**
         * Encodes the specified IfExistClaimsRequest message. Does not implicitly {@link claims.IfExistClaimsRequest.verify|verify} messages.
         * @function encode
         * @memberof claims.IfExistClaimsRequest
         * @static
         * @param {claims.IIfExistClaimsRequest} message IfExistClaimsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IfExistClaimsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.login != null && Object.hasOwnProperty.call(message, "login"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            return writer;
        };

        /**
         * Encodes the specified IfExistClaimsRequest message, length delimited. Does not implicitly {@link claims.IfExistClaimsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof claims.IfExistClaimsRequest
         * @static
         * @param {claims.IIfExistClaimsRequest} message IfExistClaimsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IfExistClaimsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IfExistClaimsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof claims.IfExistClaimsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {claims.IfExistClaimsRequest} IfExistClaimsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IfExistClaimsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.claims.IfExistClaimsRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IfExistClaimsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof claims.IfExistClaimsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {claims.IfExistClaimsRequest} IfExistClaimsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IfExistClaimsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IfExistClaimsRequest message.
         * @function verify
         * @memberof claims.IfExistClaimsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IfExistClaimsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.login != null && message.hasOwnProperty("login"))
                if (!$util.isString(message.login))
                    return "login: string expected";
            return null;
        };

        /**
         * Creates an IfExistClaimsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof claims.IfExistClaimsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {claims.IfExistClaimsRequest} IfExistClaimsRequest
         */
        IfExistClaimsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.claims.IfExistClaimsRequest)
                return object;
            var message = new $root.claims.IfExistClaimsRequest();
            if (object.login != null)
                message.login = String(object.login);
            return message;
        };

        /**
         * Creates a plain object from an IfExistClaimsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof claims.IfExistClaimsRequest
         * @static
         * @param {claims.IfExistClaimsRequest} message IfExistClaimsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IfExistClaimsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.login = "";
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            return object;
        };

        /**
         * Converts this IfExistClaimsRequest to JSON.
         * @function toJSON
         * @memberof claims.IfExistClaimsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IfExistClaimsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IfExistClaimsRequest;
    })();

    claims.IfExistClaimsResponse = (function() {

        /**
         * Properties of an IfExistClaimsResponse.
         * @memberof claims
         * @interface IIfExistClaimsResponse
         * @property {claims.IClaims|null} [claim] IfExistClaimsResponse claim
         */

        /**
         * Constructs a new IfExistClaimsResponse.
         * @memberof claims
         * @classdesc Represents an IfExistClaimsResponse.
         * @implements IIfExistClaimsResponse
         * @constructor
         * @param {claims.IIfExistClaimsResponse=} [properties] Properties to set
         */
        function IfExistClaimsResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IfExistClaimsResponse claim.
         * @member {claims.IClaims|null|undefined} claim
         * @memberof claims.IfExistClaimsResponse
         * @instance
         */
        IfExistClaimsResponse.prototype.claim = null;

        /**
         * Creates a new IfExistClaimsResponse instance using the specified properties.
         * @function create
         * @memberof claims.IfExistClaimsResponse
         * @static
         * @param {claims.IIfExistClaimsResponse=} [properties] Properties to set
         * @returns {claims.IfExistClaimsResponse} IfExistClaimsResponse instance
         */
        IfExistClaimsResponse.create = function create(properties) {
            return new IfExistClaimsResponse(properties);
        };

        /**
         * Encodes the specified IfExistClaimsResponse message. Does not implicitly {@link claims.IfExistClaimsResponse.verify|verify} messages.
         * @function encode
         * @memberof claims.IfExistClaimsResponse
         * @static
         * @param {claims.IIfExistClaimsResponse} message IfExistClaimsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IfExistClaimsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.claim != null && Object.hasOwnProperty.call(message, "claim"))
                $root.claims.Claims.encode(message.claim, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IfExistClaimsResponse message, length delimited. Does not implicitly {@link claims.IfExistClaimsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof claims.IfExistClaimsResponse
         * @static
         * @param {claims.IIfExistClaimsResponse} message IfExistClaimsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IfExistClaimsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IfExistClaimsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof claims.IfExistClaimsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {claims.IfExistClaimsResponse} IfExistClaimsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IfExistClaimsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.claims.IfExistClaimsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.claim = $root.claims.Claims.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IfExistClaimsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof claims.IfExistClaimsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {claims.IfExistClaimsResponse} IfExistClaimsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IfExistClaimsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IfExistClaimsResponse message.
         * @function verify
         * @memberof claims.IfExistClaimsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IfExistClaimsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.claim != null && message.hasOwnProperty("claim")) {
                var error = $root.claims.Claims.verify(message.claim);
                if (error)
                    return "claim." + error;
            }
            return null;
        };

        /**
         * Creates an IfExistClaimsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof claims.IfExistClaimsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {claims.IfExistClaimsResponse} IfExistClaimsResponse
         */
        IfExistClaimsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.claims.IfExistClaimsResponse)
                return object;
            var message = new $root.claims.IfExistClaimsResponse();
            if (object.claim != null) {
                if (typeof object.claim !== "object")
                    throw TypeError(".claims.IfExistClaimsResponse.claim: object expected");
                message.claim = $root.claims.Claims.fromObject(object.claim);
            }
            return message;
        };

        /**
         * Creates a plain object from an IfExistClaimsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof claims.IfExistClaimsResponse
         * @static
         * @param {claims.IfExistClaimsResponse} message IfExistClaimsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IfExistClaimsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.claim = null;
            if (message.claim != null && message.hasOwnProperty("claim"))
                object.claim = $root.claims.Claims.toObject(message.claim, options);
            return object;
        };

        /**
         * Converts this IfExistClaimsResponse to JSON.
         * @function toJSON
         * @memberof claims.IfExistClaimsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IfExistClaimsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IfExistClaimsResponse;
    })();

    claims.ClaimsService = (function() {

        /**
         * Constructs a new ClaimsService service.
         * @memberof claims
         * @classdesc Represents a ClaimsService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ClaimsService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (ClaimsService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ClaimsService;

        /**
         * Creates new ClaimsService service using the specified rpc implementation.
         * @function create
         * @memberof claims.ClaimsService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {ClaimsService} RPC service. Useful where requests and/or responses are streamed.
         */
        ClaimsService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link claims.ClaimsService#deleteClaims}.
         * @memberof claims.ClaimsService
         * @typedef DeleteClaimsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {claims.EmptyResponse} [response] EmptyResponse
         */

        /**
         * Calls DeleteClaims.
         * @function deleteClaims
         * @memberof claims.ClaimsService
         * @instance
         * @param {claims.IDeleteClaimsRequest} request DeleteClaimsRequest message or plain object
         * @param {claims.ClaimsService.DeleteClaimsCallback} callback Node-style callback called with the error, if any, and EmptyResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClaimsService.prototype.deleteClaims = function deleteClaims(request, callback) {
            return this.rpcCall(deleteClaims, $root.claims.DeleteClaimsRequest, $root.claims.EmptyResponse, request, callback);
        }, "name", { value: "DeleteClaims" });

        /**
         * Calls DeleteClaims.
         * @function deleteClaims
         * @memberof claims.ClaimsService
         * @instance
         * @param {claims.IDeleteClaimsRequest} request DeleteClaimsRequest message or plain object
         * @returns {Promise<claims.EmptyResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link claims.ClaimsService#addClaims}.
         * @memberof claims.ClaimsService
         * @typedef AddClaimsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {claims.EmptyResponse} [response] EmptyResponse
         */

        /**
         * Calls AddClaims.
         * @function addClaims
         * @memberof claims.ClaimsService
         * @instance
         * @param {claims.IAddClaimsRequest} request AddClaimsRequest message or plain object
         * @param {claims.ClaimsService.AddClaimsCallback} callback Node-style callback called with the error, if any, and EmptyResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClaimsService.prototype.addClaims = function addClaims(request, callback) {
            return this.rpcCall(addClaims, $root.claims.AddClaimsRequest, $root.claims.EmptyResponse, request, callback);
        }, "name", { value: "AddClaims" });

        /**
         * Calls AddClaims.
         * @function addClaims
         * @memberof claims.ClaimsService
         * @instance
         * @param {claims.IAddClaimsRequest} request AddClaimsRequest message or plain object
         * @returns {Promise<claims.EmptyResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link claims.ClaimsService#getClaims}.
         * @memberof claims.ClaimsService
         * @typedef GetClaimsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {claims.GetClaimsResponse} [response] GetClaimsResponse
         */

        /**
         * Calls GetClaims.
         * @function getClaims
         * @memberof claims.ClaimsService
         * @instance
         * @param {claims.IEmptyRequest} request EmptyRequest message or plain object
         * @param {claims.ClaimsService.GetClaimsCallback} callback Node-style callback called with the error, if any, and GetClaimsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClaimsService.prototype.getClaims = function getClaims(request, callback) {
            return this.rpcCall(getClaims, $root.claims.EmptyRequest, $root.claims.GetClaimsResponse, request, callback);
        }, "name", { value: "GetClaims" });

        /**
         * Calls GetClaims.
         * @function getClaims
         * @memberof claims.ClaimsService
         * @instance
         * @param {claims.IEmptyRequest} request EmptyRequest message or plain object
         * @returns {Promise<claims.GetClaimsResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link claims.ClaimsService#ifExistClaims}.
         * @memberof claims.ClaimsService
         * @typedef IfExistClaimsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {claims.IfExistClaimsResponse} [response] IfExistClaimsResponse
         */

        /**
         * Calls IfExistClaims.
         * @function ifExistClaims
         * @memberof claims.ClaimsService
         * @instance
         * @param {claims.IIfExistClaimsRequest} request IfExistClaimsRequest message or plain object
         * @param {claims.ClaimsService.IfExistClaimsCallback} callback Node-style callback called with the error, if any, and IfExistClaimsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClaimsService.prototype.ifExistClaims = function ifExistClaims(request, callback) {
            return this.rpcCall(ifExistClaims, $root.claims.IfExistClaimsRequest, $root.claims.IfExistClaimsResponse, request, callback);
        }, "name", { value: "IfExistClaims" });

        /**
         * Calls IfExistClaims.
         * @function ifExistClaims
         * @memberof claims.ClaimsService
         * @instance
         * @param {claims.IIfExistClaimsRequest} request IfExistClaimsRequest message or plain object
         * @returns {Promise<claims.IfExistClaimsResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link claims.ClaimsService#deleteAllClaims}.
         * @memberof claims.ClaimsService
         * @typedef DeleteAllClaimsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {claims.EmptyResponse} [response] EmptyResponse
         */

        /**
         * Calls DeleteAllClaims.
         * @function deleteAllClaims
         * @memberof claims.ClaimsService
         * @instance
         * @param {claims.IEmptyRequest} request EmptyRequest message or plain object
         * @param {claims.ClaimsService.DeleteAllClaimsCallback} callback Node-style callback called with the error, if any, and EmptyResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClaimsService.prototype.deleteAllClaims = function deleteAllClaims(request, callback) {
            return this.rpcCall(deleteAllClaims, $root.claims.EmptyRequest, $root.claims.EmptyResponse, request, callback);
        }, "name", { value: "DeleteAllClaims" });

        /**
         * Calls DeleteAllClaims.
         * @function deleteAllClaims
         * @memberof claims.ClaimsService
         * @instance
         * @param {claims.IEmptyRequest} request EmptyRequest message or plain object
         * @returns {Promise<claims.EmptyResponse>} Promise
         * @variation 2
         */

        return ClaimsService;
    })();

    return claims;
})();

module.exports = $root;
