import * as $protobuf from "protobufjs";
/** Namespace app. */
export namespace app {

    /** Properties of a RefreshTokenRequest. */
    interface IRefreshTokenRequest {

        /** RefreshTokenRequest token */
        token?: (string|null);

        /** RefreshTokenRequest tokenRefresh */
        tokenRefresh?: (string|null);
    }

    /** Represents a RefreshTokenRequest. */
    class RefreshTokenRequest implements IRefreshTokenRequest {

        /**
         * Constructs a new RefreshTokenRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: app.IRefreshTokenRequest);

        /** RefreshTokenRequest token. */
        public token: string;

        /** RefreshTokenRequest tokenRefresh. */
        public tokenRefresh: string;

        /**
         * Creates a new RefreshTokenRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RefreshTokenRequest instance
         */
        public static create(properties?: app.IRefreshTokenRequest): app.RefreshTokenRequest;

        /**
         * Encodes the specified RefreshTokenRequest message. Does not implicitly {@link app.RefreshTokenRequest.verify|verify} messages.
         * @param message RefreshTokenRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: app.IRefreshTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RefreshTokenRequest message, length delimited. Does not implicitly {@link app.RefreshTokenRequest.verify|verify} messages.
         * @param message RefreshTokenRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: app.IRefreshTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RefreshTokenRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RefreshTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.RefreshTokenRequest;

        /**
         * Decodes a RefreshTokenRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RefreshTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.RefreshTokenRequest;

        /**
         * Verifies a RefreshTokenRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RefreshTokenRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RefreshTokenRequest
         */
        public static fromObject(object: { [k: string]: any }): app.RefreshTokenRequest;

        /**
         * Creates a plain object from a RefreshTokenRequest message. Also converts values to other types if specified.
         * @param message RefreshTokenRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: app.RefreshTokenRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RefreshTokenRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RefreshTokenResponse. */
    interface IRefreshTokenResponse {

        /** RefreshTokenResponse token */
        token?: (string|null);

        /** RefreshTokenResponse refreshToken */
        refreshToken?: (string|null);
    }

    /** Represents a RefreshTokenResponse. */
    class RefreshTokenResponse implements IRefreshTokenResponse {

        /**
         * Constructs a new RefreshTokenResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: app.IRefreshTokenResponse);

        /** RefreshTokenResponse token. */
        public token: string;

        /** RefreshTokenResponse refreshToken. */
        public refreshToken: string;

        /**
         * Creates a new RefreshTokenResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RefreshTokenResponse instance
         */
        public static create(properties?: app.IRefreshTokenResponse): app.RefreshTokenResponse;

        /**
         * Encodes the specified RefreshTokenResponse message. Does not implicitly {@link app.RefreshTokenResponse.verify|verify} messages.
         * @param message RefreshTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: app.IRefreshTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RefreshTokenResponse message, length delimited. Does not implicitly {@link app.RefreshTokenResponse.verify|verify} messages.
         * @param message RefreshTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: app.IRefreshTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RefreshTokenResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RefreshTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.RefreshTokenResponse;

        /**
         * Decodes a RefreshTokenResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RefreshTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.RefreshTokenResponse;

        /**
         * Verifies a RefreshTokenResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RefreshTokenResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RefreshTokenResponse
         */
        public static fromObject(object: { [k: string]: any }): app.RefreshTokenResponse;

        /**
         * Creates a plain object from a RefreshTokenResponse message. Also converts values to other types if specified.
         * @param message RefreshTokenResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: app.RefreshTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RefreshTokenResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignInRequest. */
    interface ISignInRequest {

        /** SignInRequest login */
        login?: (string|null);

        /** SignInRequest password */
        password?: (string|null);
    }

    /** Represents a SignInRequest. */
    class SignInRequest implements ISignInRequest {

        /**
         * Constructs a new SignInRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: app.ISignInRequest);

        /** SignInRequest login. */
        public login: string;

        /** SignInRequest password. */
        public password: string;

        /**
         * Creates a new SignInRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignInRequest instance
         */
        public static create(properties?: app.ISignInRequest): app.SignInRequest;

        /**
         * Encodes the specified SignInRequest message. Does not implicitly {@link app.SignInRequest.verify|verify} messages.
         * @param message SignInRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: app.ISignInRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignInRequest message, length delimited. Does not implicitly {@link app.SignInRequest.verify|verify} messages.
         * @param message SignInRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: app.ISignInRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignInRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignInRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.SignInRequest;

        /**
         * Decodes a SignInRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignInRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.SignInRequest;

        /**
         * Verifies a SignInRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignInRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignInRequest
         */
        public static fromObject(object: { [k: string]: any }): app.SignInRequest;

        /**
         * Creates a plain object from a SignInRequest message. Also converts values to other types if specified.
         * @param message SignInRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: app.SignInRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignInRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignInResponse. */
    interface ISignInResponse {

        /** SignInResponse token */
        token?: (string|null);

        /** SignInResponse refreshToken */
        refreshToken?: (string|null);
    }

    /** Represents a SignInResponse. */
    class SignInResponse implements ISignInResponse {

        /**
         * Constructs a new SignInResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: app.ISignInResponse);

        /** SignInResponse token. */
        public token: string;

        /** SignInResponse refreshToken. */
        public refreshToken: string;

        /**
         * Creates a new SignInResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignInResponse instance
         */
        public static create(properties?: app.ISignInResponse): app.SignInResponse;

        /**
         * Encodes the specified SignInResponse message. Does not implicitly {@link app.SignInResponse.verify|verify} messages.
         * @param message SignInResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: app.ISignInResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignInResponse message, length delimited. Does not implicitly {@link app.SignInResponse.verify|verify} messages.
         * @param message SignInResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: app.ISignInResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignInResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignInResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.SignInResponse;

        /**
         * Decodes a SignInResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignInResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.SignInResponse;

        /**
         * Verifies a SignInResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignInResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignInResponse
         */
        public static fromObject(object: { [k: string]: any }): app.SignInResponse;

        /**
         * Creates a plain object from a SignInResponse message. Also converts values to other types if specified.
         * @param message SignInResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: app.SignInResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignInResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignUpRequest. */
    interface ISignUpRequest {

        /** SignUpRequest login */
        login?: (string|null);

        /** SignUpRequest password */
        password?: (string|null);
    }

    /** Represents a SignUpRequest. */
    class SignUpRequest implements ISignUpRequest {

        /**
         * Constructs a new SignUpRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: app.ISignUpRequest);

        /** SignUpRequest login. */
        public login: string;

        /** SignUpRequest password. */
        public password: string;

        /**
         * Creates a new SignUpRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignUpRequest instance
         */
        public static create(properties?: app.ISignUpRequest): app.SignUpRequest;

        /**
         * Encodes the specified SignUpRequest message. Does not implicitly {@link app.SignUpRequest.verify|verify} messages.
         * @param message SignUpRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: app.ISignUpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignUpRequest message, length delimited. Does not implicitly {@link app.SignUpRequest.verify|verify} messages.
         * @param message SignUpRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: app.ISignUpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignUpRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignUpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.SignUpRequest;

        /**
         * Decodes a SignUpRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignUpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.SignUpRequest;

        /**
         * Verifies a SignUpRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignUpRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignUpRequest
         */
        public static fromObject(object: { [k: string]: any }): app.SignUpRequest;

        /**
         * Creates a plain object from a SignUpRequest message. Also converts values to other types if specified.
         * @param message SignUpRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: app.SignUpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignUpRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConfirmRequest. */
    interface IConfirmRequest {

        /** ConfirmRequest login */
        login?: (string|null);

        /** ConfirmRequest uuidConfirm */
        uuidConfirm?: (string|null);
    }

    /** Represents a ConfirmRequest. */
    class ConfirmRequest implements IConfirmRequest {

        /**
         * Constructs a new ConfirmRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: app.IConfirmRequest);

        /** ConfirmRequest login. */
        public login: string;

        /** ConfirmRequest uuidConfirm. */
        public uuidConfirm: string;

        /**
         * Creates a new ConfirmRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConfirmRequest instance
         */
        public static create(properties?: app.IConfirmRequest): app.ConfirmRequest;

        /**
         * Encodes the specified ConfirmRequest message. Does not implicitly {@link app.ConfirmRequest.verify|verify} messages.
         * @param message ConfirmRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: app.IConfirmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConfirmRequest message, length delimited. Does not implicitly {@link app.ConfirmRequest.verify|verify} messages.
         * @param message ConfirmRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: app.IConfirmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConfirmRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConfirmRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.ConfirmRequest;

        /**
         * Decodes a ConfirmRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConfirmRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.ConfirmRequest;

        /**
         * Verifies a ConfirmRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConfirmRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConfirmRequest
         */
        public static fromObject(object: { [k: string]: any }): app.ConfirmRequest;

        /**
         * Creates a plain object from a ConfirmRequest message. Also converts values to other types if specified.
         * @param message ConfirmRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: app.ConfirmRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConfirmRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RestoreRequest. */
    interface IRestoreRequest {

        /** RestoreRequest token */
        token?: (string|null);

        /** RestoreRequest login */
        login?: (string|null);

        /** RestoreRequest newPassword */
        newPassword?: (string|null);
    }

    /** Represents a RestoreRequest. */
    class RestoreRequest implements IRestoreRequest {

        /**
         * Constructs a new RestoreRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: app.IRestoreRequest);

        /** RestoreRequest token. */
        public token: string;

        /** RestoreRequest login. */
        public login: string;

        /** RestoreRequest newPassword. */
        public newPassword: string;

        /**
         * Creates a new RestoreRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RestoreRequest instance
         */
        public static create(properties?: app.IRestoreRequest): app.RestoreRequest;

        /**
         * Encodes the specified RestoreRequest message. Does not implicitly {@link app.RestoreRequest.verify|verify} messages.
         * @param message RestoreRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: app.IRestoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RestoreRequest message, length delimited. Does not implicitly {@link app.RestoreRequest.verify|verify} messages.
         * @param message RestoreRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: app.IRestoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RestoreRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RestoreRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.RestoreRequest;

        /**
         * Decodes a RestoreRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RestoreRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.RestoreRequest;

        /**
         * Verifies a RestoreRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RestoreRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RestoreRequest
         */
        public static fromObject(object: { [k: string]: any }): app.RestoreRequest;

        /**
         * Creates a plain object from a RestoreRequest message. Also converts values to other types if specified.
         * @param message RestoreRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: app.RestoreRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RestoreRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteRequest. */
    interface IDeleteRequest {

        /** DeleteRequest login */
        login?: (string|null);
    }

    /** Represents a DeleteRequest. */
    class DeleteRequest implements IDeleteRequest {

        /**
         * Constructs a new DeleteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: app.IDeleteRequest);

        /** DeleteRequest login. */
        public login: string;

        /**
         * Creates a new DeleteRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteRequest instance
         */
        public static create(properties?: app.IDeleteRequest): app.DeleteRequest;

        /**
         * Encodes the specified DeleteRequest message. Does not implicitly {@link app.DeleteRequest.verify|verify} messages.
         * @param message DeleteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: app.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link app.DeleteRequest.verify|verify} messages.
         * @param message DeleteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: app.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.DeleteRequest;

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.DeleteRequest;

        /**
         * Verifies a DeleteRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteRequest
         */
        public static fromObject(object: { [k: string]: any }): app.DeleteRequest;

        /**
         * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
         * @param message DeleteRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: app.DeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EmptyResponse. */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IEmptyResponse {
    }

    /** Represents an EmptyResponse. */
    class EmptyResponse implements IEmptyResponse {

        /**
         * Constructs a new EmptyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: app.IEmptyResponse);

        /**
         * Creates a new EmptyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmptyResponse instance
         */
        public static create(properties?: app.IEmptyResponse): app.EmptyResponse;

        /**
         * Encodes the specified EmptyResponse message. Does not implicitly {@link app.EmptyResponse.verify|verify} messages.
         * @param message EmptyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: app.IEmptyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmptyResponse message, length delimited. Does not implicitly {@link app.EmptyResponse.verify|verify} messages.
         * @param message EmptyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: app.IEmptyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmptyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EmptyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.EmptyResponse;

        /**
         * Decodes an EmptyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EmptyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.EmptyResponse;

        /**
         * Verifies an EmptyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmptyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmptyResponse
         */
        public static fromObject(object: { [k: string]: any }): app.EmptyResponse;

        /**
         * Creates a plain object from an EmptyResponse message. Also converts values to other types if specified.
         * @param message EmptyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: app.EmptyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmptyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ValidateToken. */
    interface IValidateToken {

        /** ValidateToken token */
        token?: (string|null);
    }

    /** Represents a ValidateToken. */
    class ValidateToken implements IValidateToken {

        /**
         * Constructs a new ValidateToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: app.IValidateToken);

        /** ValidateToken token. */
        public token: string;

        /**
         * Creates a new ValidateToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ValidateToken instance
         */
        public static create(properties?: app.IValidateToken): app.ValidateToken;

        /**
         * Encodes the specified ValidateToken message. Does not implicitly {@link app.ValidateToken.verify|verify} messages.
         * @param message ValidateToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: app.IValidateToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ValidateToken message, length delimited. Does not implicitly {@link app.ValidateToken.verify|verify} messages.
         * @param message ValidateToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: app.IValidateToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ValidateToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ValidateToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.ValidateToken;

        /**
         * Decodes a ValidateToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ValidateToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.ValidateToken;

        /**
         * Verifies a ValidateToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ValidateToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ValidateToken
         */
        public static fromObject(object: { [k: string]: any }): app.ValidateToken;

        /**
         * Creates a plain object from a ValidateToken message. Also converts values to other types if specified.
         * @param message ValidateToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: app.ValidateToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ValidateToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ForgotPasswordRequest. */
    interface IForgotPasswordRequest {

        /** ForgotPasswordRequest login */
        login?: (string|null);
    }

    /** Represents a ForgotPasswordRequest. */
    class ForgotPasswordRequest implements IForgotPasswordRequest {

        /**
         * Constructs a new ForgotPasswordRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: app.IForgotPasswordRequest);

        /** ForgotPasswordRequest login. */
        public login: string;

        /**
         * Creates a new ForgotPasswordRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForgotPasswordRequest instance
         */
        public static create(properties?: app.IForgotPasswordRequest): app.ForgotPasswordRequest;

        /**
         * Encodes the specified ForgotPasswordRequest message. Does not implicitly {@link app.ForgotPasswordRequest.verify|verify} messages.
         * @param message ForgotPasswordRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: app.IForgotPasswordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ForgotPasswordRequest message, length delimited. Does not implicitly {@link app.ForgotPasswordRequest.verify|verify} messages.
         * @param message ForgotPasswordRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: app.IForgotPasswordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForgotPasswordRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ForgotPasswordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.ForgotPasswordRequest;

        /**
         * Decodes a ForgotPasswordRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ForgotPasswordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.ForgotPasswordRequest;

        /**
         * Verifies a ForgotPasswordRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ForgotPasswordRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ForgotPasswordRequest
         */
        public static fromObject(object: { [k: string]: any }): app.ForgotPasswordRequest;

        /**
         * Creates a plain object from a ForgotPasswordRequest message. Also converts values to other types if specified.
         * @param message ForgotPasswordRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: app.ForgotPasswordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ForgotPasswordRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents an AuthService */
    class AuthService extends $protobuf.rpc.Service {

        /**
         * Constructs a new AuthService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new AuthService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AuthService;

        /**
         * Calls SignIn.
         * @param request SignInRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SignInResponse
         */
        public signIn(request: app.ISignInRequest, callback: app.AuthService.SignInCallback): void;

        /**
         * Calls SignIn.
         * @param request SignInRequest message or plain object
         * @returns Promise
         */
        public signIn(request: app.SignInRequest): Promise<app.SignInResponse>;

        /**
         * Calls SignUp.
         * @param request SignUpRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EmptyResponse
         */
        public signUp(request: app.ISignUpRequest, callback: app.AuthService.SignUpCallback): void;

        /**
         * Calls SignUp.
         * @param request SignUpRequest message or plain object
         * @returns Promise
         */
        public signUp(request: app.ISignUpRequest): Promise<app.EmptyResponse>;

        /**
         * Calls Delete.
         * @param request DeleteRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EmptyResponse
         */
        public delete(request: app.IDeleteRequest, callback: app.AuthService.DeleteCallback): void;

        /**
         * Calls Delete.
         * @param request DeleteRequest message or plain object
         * @returns Promise
         */
        public delete(request: app.IDeleteRequest): Promise<app.EmptyResponse>;

        /**
         * Calls RefreshToken.
         * @param request RefreshTokenRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and RefreshTokenResponse
         */
        public refreshToken(request: app.IRefreshTokenRequest, callback: app.AuthService.RefreshTokenCallback): void;

        /**
         * Calls RefreshToken.
         * @param request RefreshTokenRequest message or plain object
         * @returns Promise
         */
        public refreshToken(request: app.IRefreshTokenRequest): Promise<app.RefreshTokenResponse>;

        /**
         * Calls Confirm.
         * @param request ConfirmRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EmptyResponse
         */
        public confirm(request: app.IConfirmRequest, callback: app.AuthService.ConfirmCallback): void;

        /**
         * Calls Confirm.
         * @param request ConfirmRequest message or plain object
         * @returns Promise
         */
        public confirm(request: app.IConfirmRequest): Promise<app.EmptyResponse>;

        /**
         * Calls Restore.
         * @param request RestoreRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EmptyResponse
         */
        public restore(request: app.IRestoreRequest, callback: app.AuthService.RestoreCallback): void;

        /**
         * Calls Restore.
         * @param request RestoreRequest message or plain object
         * @returns Promise
         */
        public restore(request: app.IRestoreRequest): Promise<app.EmptyResponse>;

        /**
         * Calls ForgotPassword.
         * @param request ForgotPasswordRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EmptyResponse
         */
        public forgotPassword(request: app.IForgotPasswordRequest, callback: app.AuthService.ForgotPasswordCallback): void;

        /**
         * Calls ForgotPassword.
         * @param request ForgotPasswordRequest message or plain object
         * @returns Promise
         */
        public forgotPassword(request: app.IForgotPasswordRequest): Promise<app.EmptyResponse>;
    }

    namespace AuthService {

        /**
         * Callback as used by {@link app.AuthService#signIn}.
         * @param error Error, if any
         * @param [response] SignInResponse
         */
        type SignInCallback = (error: (Error|null), response?: app.SignInResponse) => void;

        /**
         * Callback as used by {@link app.AuthService#signUp}.
         * @param error Error, if any
         * @param [response] EmptyResponse
         */
        type SignUpCallback = (error: (Error|null), response?: app.EmptyResponse) => void;

        /**
         * Callback as used by {@link app.AuthService#delete_}.
         * @param error Error, if any
         * @param [response] EmptyResponse
         */
        type DeleteCallback = (error: (Error|null), response?: app.EmptyResponse) => void;

        /**
         * Callback as used by {@link app.AuthService#refreshToken}.
         * @param error Error, if any
         * @param [response] RefreshTokenResponse
         */
        type RefreshTokenCallback = (error: (Error|null), response?: app.RefreshTokenResponse) => void;

        /**
         * Callback as used by {@link app.AuthService#confirm}.
         * @param error Error, if any
         * @param [response] EmptyResponse
         */
        type ConfirmCallback = (error: (Error|null), response?: app.EmptyResponse) => void;

        /**
         * Callback as used by {@link app.AuthService#restore}.
         * @param error Error, if any
         * @param [response] EmptyResponse
         */
        type RestoreCallback = (error: (Error|null), response?: app.EmptyResponse) => void;

        /**
         * Callback as used by {@link app.AuthService#forgotPassword}.
         * @param error Error, if any
         * @param [response] EmptyResponse
         */
        type ForgotPasswordCallback = (error: (Error|null), response?: app.EmptyResponse) => void;
    }
}

/** Namespace claims. */
export namespace claims {

    /** Properties of a Claims. */
    interface IClaims {

        /** Claims login */
        login?: (string|null);

        /** Claims description */
        description?: (string|null);

        /** Claims value */
        value?: (string|null);
    }

    /** Represents a Claims. */
    class Claims implements IClaims {

        /**
         * Constructs a new Claims.
         * @param [properties] Properties to set
         */
        constructor(properties?: claims.IClaims);

        /** Claims login. */
        public login: string;

        /** Claims description. */
        public description: string;

        /** Claims value. */
        public value: string;

        /**
         * Creates a new Claims instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Claims instance
         */
        public static create(properties?: claims.IClaims): claims.Claims;

        /**
         * Encodes the specified Claims message. Does not implicitly {@link claims.Claims.verify|verify} messages.
         * @param message Claims message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: claims.IClaims, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Claims message, length delimited. Does not implicitly {@link claims.Claims.verify|verify} messages.
         * @param message Claims message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: claims.IClaims, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Claims message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Claims
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): claims.Claims;

        /**
         * Decodes a Claims message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Claims
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): claims.Claims;

        /**
         * Verifies a Claims message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Claims message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Claims
         */
        public static fromObject(object: { [k: string]: any }): claims.Claims;

        /**
         * Creates a plain object from a Claims message. Also converts values to other types if specified.
         * @param message Claims
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: claims.Claims, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Claims to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddClaimsRequest. */
    interface IAddClaimsRequest {

        /** AddClaimsRequest login */
        login?: (string|null);

        /** AddClaimsRequest claims */
        claims?: Map<string,string>;
    }

    /** Represents an AddClaimsRequest. */
    class AddClaimsRequest implements IAddClaimsRequest {

        /**
         * Constructs a new AddClaimsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: claims.IAddClaimsRequest);

        /** AddClaimsRequest login. */
        public login: string;

        /** AddClaimsRequest claims. */
        public claims: Map<string,string>;

        /**
         * Creates a new AddClaimsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddClaimsRequest instance
         */
        public static create(properties?: claims.IAddClaimsRequest): claims.AddClaimsRequest;

        /**
         * Encodes the specified AddClaimsRequest message. Does not implicitly {@link claims.AddClaimsRequest.verify|verify} messages.
         * @param message AddClaimsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: claims.IAddClaimsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddClaimsRequest message, length delimited. Does not implicitly {@link claims.AddClaimsRequest.verify|verify} messages.
         * @param message AddClaimsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: claims.IAddClaimsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddClaimsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddClaimsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): claims.AddClaimsRequest;

        /**
         * Decodes an AddClaimsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddClaimsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): claims.AddClaimsRequest;

        /**
         * Verifies an AddClaimsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddClaimsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddClaimsRequest
         */
        public static fromObject(object: { [k: string]: any }): claims.AddClaimsRequest;

        /**
         * Creates a plain object from an AddClaimsRequest message. Also converts values to other types if specified.
         * @param message AddClaimsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: claims.AddClaimsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddClaimsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EmptyResponse. */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IEmptyResponse {
    }

    /** Represents an EmptyResponse. */
    class EmptyResponse implements IEmptyResponse {

        /**
         * Constructs a new EmptyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: claims.IEmptyResponse);

        /**
         * Creates a new EmptyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmptyResponse instance
         */
        public static create(properties?: claims.IEmptyResponse): claims.EmptyResponse;

        /**
         * Encodes the specified EmptyResponse message. Does not implicitly {@link claims.EmptyResponse.verify|verify} messages.
         * @param message EmptyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: claims.IEmptyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmptyResponse message, length delimited. Does not implicitly {@link claims.EmptyResponse.verify|verify} messages.
         * @param message EmptyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: claims.IEmptyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmptyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EmptyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): claims.EmptyResponse;

        /**
         * Decodes an EmptyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EmptyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): claims.EmptyResponse;

        /**
         * Verifies an EmptyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmptyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmptyResponse
         */
        public static fromObject(object: { [k: string]: any }): claims.EmptyResponse;

        /**
         * Creates a plain object from an EmptyResponse message. Also converts values to other types if specified.
         * @param message EmptyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: claims.EmptyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmptyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EmptyRequest. */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IEmptyRequest {
    }

    /** Represents an EmptyRequest. */
    class EmptyRequest implements IEmptyRequest {

        /**
         * Constructs a new EmptyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: claims.IEmptyRequest);

        /**
         * Creates a new EmptyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmptyRequest instance
         */
        public static create(properties?: claims.IEmptyRequest): claims.EmptyRequest;

        /**
         * Encodes the specified EmptyRequest message. Does not implicitly {@link claims.EmptyRequest.verify|verify} messages.
         * @param message EmptyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: claims.IEmptyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmptyRequest message, length delimited. Does not implicitly {@link claims.EmptyRequest.verify|verify} messages.
         * @param message EmptyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: claims.IEmptyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmptyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EmptyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): claims.EmptyRequest;

        /**
         * Decodes an EmptyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EmptyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): claims.EmptyRequest;

        /**
         * Verifies an EmptyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmptyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmptyRequest
         */
        public static fromObject(object: { [k: string]: any }): claims.EmptyRequest;

        /**
         * Creates a plain object from an EmptyRequest message. Also converts values to other types if specified.
         * @param message EmptyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: claims.EmptyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmptyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetClaimsResponse. */
    interface IGetClaimsResponse {

        /** GetClaimsResponse claims */
        claims?: claims.Claims[];
    }

    /** Represents a GetClaimsResponse. */
    class GetClaimsResponse implements IGetClaimsResponse {

        /**
         * Constructs a new GetClaimsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: claims.IGetClaimsResponse);

        /** GetClaimsResponse claims. */
        public claims: claims.Claims[];

        /**
         * Creates a new GetClaimsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetClaimsResponse instance
         */
        public static create(properties?: claims.IGetClaimsResponse): claims.GetClaimsResponse;

        /**
         * Encodes the specified GetClaimsResponse message. Does not implicitly {@link claims.GetClaimsResponse.verify|verify} messages.
         * @param message GetClaimsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: claims.IGetClaimsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetClaimsResponse message, length delimited. Does not implicitly {@link claims.GetClaimsResponse.verify|verify} messages.
         * @param message GetClaimsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: claims.IGetClaimsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetClaimsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetClaimsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): claims.GetClaimsResponse;

        /**
         * Decodes a GetClaimsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetClaimsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): claims.GetClaimsResponse;

        /**
         * Verifies a GetClaimsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetClaimsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetClaimsResponse
         */
        public static fromObject(object: { [k: string]: any }): claims.GetClaimsResponse;

        /**
         * Creates a plain object from a GetClaimsResponse message. Also converts values to other types if specified.
         * @param message GetClaimsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: claims.GetClaimsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetClaimsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteClaimsRequest. */
    interface IDeleteClaimsRequest {

        /** DeleteClaimsRequest login */
        login?: (string|null);

        /** DeleteClaimsRequest claims */
        claims?: Map<string,string>;
    }

    /** Represents a DeleteClaimsRequest. */
    class DeleteClaimsRequest implements IDeleteClaimsRequest {

        /**
         * Constructs a new DeleteClaimsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: claims.IDeleteClaimsRequest);

        /** DeleteClaimsRequest login. */
        public login: string;

        /** DeleteClaimsRequest claims. */
        public claims: Map<string,string>;

        /**
         * Creates a new DeleteClaimsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteClaimsRequest instance
         */
        public static create(properties?: claims.IDeleteClaimsRequest): claims.DeleteClaimsRequest;

        /**
         * Encodes the specified DeleteClaimsRequest message. Does not implicitly {@link claims.DeleteClaimsRequest.verify|verify} messages.
         * @param message DeleteClaimsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: claims.IDeleteClaimsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteClaimsRequest message, length delimited. Does not implicitly {@link claims.DeleteClaimsRequest.verify|verify} messages.
         * @param message DeleteClaimsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: claims.IDeleteClaimsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteClaimsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteClaimsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): claims.DeleteClaimsRequest;

        /**
         * Decodes a DeleteClaimsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteClaimsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): claims.DeleteClaimsRequest;

        /**
         * Verifies a DeleteClaimsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteClaimsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteClaimsRequest
         */
        public static fromObject(object: { [k: string]: any }): claims.DeleteClaimsRequest;

        /**
         * Creates a plain object from a DeleteClaimsRequest message. Also converts values to other types if specified.
         * @param message DeleteClaimsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: claims.DeleteClaimsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteClaimsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IfExistClaimsRequest. */
    interface IIfExistClaimsRequest {

        /** IfExistClaimsRequest login */
        login?: (string|null);
    }

    /** Represents an IfExistClaimsRequest. */
    class IfExistClaimsRequest implements IIfExistClaimsRequest {

        /**
         * Constructs a new IfExistClaimsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: claims.IIfExistClaimsRequest);

        /** IfExistClaimsRequest login. */
        public login: string;

        /**
         * Creates a new IfExistClaimsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IfExistClaimsRequest instance
         */
        public static create(properties?: claims.IIfExistClaimsRequest): claims.IfExistClaimsRequest;

        /**
         * Encodes the specified IfExistClaimsRequest message. Does not implicitly {@link claims.IfExistClaimsRequest.verify|verify} messages.
         * @param message IfExistClaimsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: claims.IIfExistClaimsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IfExistClaimsRequest message, length delimited. Does not implicitly {@link claims.IfExistClaimsRequest.verify|verify} messages.
         * @param message IfExistClaimsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: claims.IIfExistClaimsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IfExistClaimsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IfExistClaimsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): claims.IfExistClaimsRequest;

        /**
         * Decodes an IfExistClaimsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IfExistClaimsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): claims.IfExistClaimsRequest;

        /**
         * Verifies an IfExistClaimsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IfExistClaimsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IfExistClaimsRequest
         */
        public static fromObject(object: { [k: string]: any }): claims.IfExistClaimsRequest;

        /**
         * Creates a plain object from an IfExistClaimsRequest message. Also converts values to other types if specified.
         * @param message IfExistClaimsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: claims.IfExistClaimsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IfExistClaimsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IfExistClaimsResponse. */
    interface IIfExistClaimsResponse {

        /** IfExistClaimsResponse claim */
        claim?: (claims.IClaims|null);
    }

    /** Represents an IfExistClaimsResponse. */
    class IfExistClaimsResponse implements IIfExistClaimsResponse {

        /**
         * Constructs a new IfExistClaimsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: claims.IIfExistClaimsResponse);

        /** IfExistClaimsResponse claim. */
        public claim?: (claims.IClaims|null);

        /**
         * Creates a new IfExistClaimsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IfExistClaimsResponse instance
         */
        public static create(properties?: claims.IIfExistClaimsResponse): claims.IfExistClaimsResponse;

        /**
         * Encodes the specified IfExistClaimsResponse message. Does not implicitly {@link claims.IfExistClaimsResponse.verify|verify} messages.
         * @param message IfExistClaimsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: claims.IIfExistClaimsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IfExistClaimsResponse message, length delimited. Does not implicitly {@link claims.IfExistClaimsResponse.verify|verify} messages.
         * @param message IfExistClaimsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: claims.IIfExistClaimsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IfExistClaimsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IfExistClaimsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): claims.IfExistClaimsResponse;

        /**
         * Decodes an IfExistClaimsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IfExistClaimsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): claims.IfExistClaimsResponse;

        /**
         * Verifies an IfExistClaimsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IfExistClaimsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IfExistClaimsResponse
         */
        public static fromObject(object: { [k: string]: any }): claims.IfExistClaimsResponse;

        /**
         * Creates a plain object from an IfExistClaimsResponse message. Also converts values to other types if specified.
         * @param message IfExistClaimsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: claims.IfExistClaimsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IfExistClaimsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a ClaimsService */
   export class ClaimsService extends $protobuf.rpc.Service {

        /**
         * Constructs a new ClaimsService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new ClaimsService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ClaimsService;

        /**
         * Calls DeleteClaims.
         * @param request DeleteClaimsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EmptyResponse
         */
        public deleteClaims(request: claims.IDeleteClaimsRequest, callback: claims.ClaimsService.DeleteClaimsCallback): void;

        /**
         * Calls DeleteClaims.
         * @param request DeleteClaimsRequest message or plain object
         * @returns Promise
         */
        public deleteClaims(request: claims.IDeleteClaimsRequest): Promise<claims.EmptyResponse>;

        /**
         * Calls AddClaims.
         * @param request AddClaimsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EmptyResponse
         */
        public addClaims(request: claims.IAddClaimsRequest, callback: claims.ClaimsService.AddClaimsCallback): void;

        /**
         * Calls AddClaims.
         * @param request AddClaimsRequest message or plain object
         * @returns Promise
         */
        public addClaims(request: claims.IAddClaimsRequest): Promise<claims.EmptyResponse>;

        /**
         * Calls GetClaims.
         * @param request EmptyRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetClaimsResponse
         */
        public getClaims(request: claims.IEmptyRequest, callback: claims.ClaimsService.GetClaimsCallback): void;

        /**
         * Calls GetClaims.
         * @param request EmptyRequest message or plain object
         * @returns Promise
         */
        public getClaims(request: claims.IEmptyRequest): Promise<claims.GetClaimsResponse>;

        /**
         * Calls IfExistClaims.
         * @param request IfExistClaimsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and IfExistClaimsResponse
         */
        public ifExistClaims(request: claims.IIfExistClaimsRequest, callback: claims.ClaimsService.IfExistClaimsCallback): void;

        /**
         * Calls IfExistClaims.
         * @param request IfExistClaimsRequest message or plain object
         * @returns Promise
         */
        public ifExistClaims(request: claims.IIfExistClaimsRequest): Promise<claims.IfExistClaimsResponse>;

        /**
         * Calls DeleteAllClaims.
         * @param request EmptyRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EmptyResponse
         */
        public deleteAllClaims(request: claims.IEmptyRequest, callback: claims.ClaimsService.DeleteAllClaimsCallback): void;

        /**
         * Calls DeleteAllClaims.
         * @param request EmptyRequest message or plain object
         * @returns Promise
         */
        public deleteAllClaims(request: claims.IEmptyRequest): Promise<claims.EmptyResponse>;
    }

    namespace ClaimsService {

        /**
         * Callback as used by {@link claims.ClaimsService#deleteClaims}.
         * @param error Error, if any
         * @param [response] EmptyResponse
         */
        type DeleteClaimsCallback = (error: (Error|null), response?: claims.EmptyResponse) => void;

        /**
         * Callback as used by {@link claims.ClaimsService#addClaims}.
         * @param error Error, if any
         * @param [response] EmptyResponse
         */
        type AddClaimsCallback = (error: (Error|null), response?: claims.EmptyResponse) => void;

        /**
         * Callback as used by {@link claims.ClaimsService#getClaims}.
         * @param error Error, if any
         * @param [response] GetClaimsResponse
         */
        type GetClaimsCallback = (error: (Error|null), response?: claims.GetClaimsResponse) => void;

        /**
         * Callback as used by {@link claims.ClaimsService#ifExistClaims}.
         * @param error Error, if any
         * @param [response] IfExistClaimsResponse
         */
        type IfExistClaimsCallback = (error: (Error|null), response?: claims.IfExistClaimsResponse) => void;

        /**
         * Callback as used by {@link claims.ClaimsService#deleteAllClaims}.
         * @param error Error, if any
         * @param [response] EmptyResponse
         */
        type DeleteAllClaimsCallback = (error: (Error|null), response?: claims.EmptyResponse) => void;
    }
}
