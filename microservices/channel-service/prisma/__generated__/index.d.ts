
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Channel
 * 
 */
export type Channel = $Result.DefaultSelection<Prisma.$ChannelPayload>
/**
 * Model Subscriptions
 * 
 */
export type Subscriptions = $Result.DefaultSelection<Prisma.$SubscriptionsPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostLikes
 * 
 */
export type PostLikes = $Result.DefaultSelection<Prisma.$PostLikesPayload>
/**
 * Model PostComments
 * 
 */
export type PostComments = $Result.DefaultSelection<Prisma.$PostCommentsPayload>
/**
 * Model PostCommentReactions
 * 
 */
export type PostCommentReactions = $Result.DefaultSelection<Prisma.$PostCommentReactionsPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model PlaylistVideo
 * 
 */
export type PlaylistVideo = $Result.DefaultSelection<Prisma.$PlaylistVideoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ReactionValue: {
  LIKE: 'LIKE',
  DISLIKE: 'DISLIKE'
};

export type ReactionValue = (typeof ReactionValue)[keyof typeof ReactionValue]


export const SubscribeType: {
  REGULAR: 'REGULAR',
  NOTIFICATIONS: 'NOTIFICATIONS'
};

export type SubscribeType = (typeof SubscribeType)[keyof typeof SubscribeType]

}

export type ReactionValue = $Enums.ReactionValue

export const ReactionValue: typeof $Enums.ReactionValue

export type SubscribeType = $Enums.SubscribeType

export const SubscribeType: typeof $Enums.SubscribeType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Channels
 * const channels = await prisma.channel.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Channels
   * const channels = await prisma.channel.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.channel`: Exposes CRUD operations for the **Channel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channel.findMany()
    * ```
    */
  get channel(): Prisma.ChannelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptions`: Exposes CRUD operations for the **Subscriptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscriptions.findMany()
    * ```
    */
  get subscriptions(): Prisma.SubscriptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postLikes`: Exposes CRUD operations for the **PostLikes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostLikes
    * const postLikes = await prisma.postLikes.findMany()
    * ```
    */
  get postLikes(): Prisma.PostLikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postComments`: Exposes CRUD operations for the **PostComments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostComments
    * const postComments = await prisma.postComments.findMany()
    * ```
    */
  get postComments(): Prisma.PostCommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postCommentReactions`: Exposes CRUD operations for the **PostCommentReactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostCommentReactions
    * const postCommentReactions = await prisma.postCommentReactions.findMany()
    * ```
    */
  get postCommentReactions(): Prisma.PostCommentReactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlistVideo`: Exposes CRUD operations for the **PlaylistVideo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaylistVideos
    * const playlistVideos = await prisma.playlistVideo.findMany()
    * ```
    */
  get playlistVideo(): Prisma.PlaylistVideoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Channel: 'Channel',
    Subscriptions: 'Subscriptions',
    Post: 'Post',
    PostLikes: 'PostLikes',
    PostComments: 'PostComments',
    PostCommentReactions: 'PostCommentReactions',
    Playlist: 'Playlist',
    PlaylistVideo: 'PlaylistVideo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "channel" | "subscriptions" | "post" | "postLikes" | "postComments" | "postCommentReactions" | "playlist" | "playlistVideo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Channel: {
        payload: Prisma.$ChannelPayload<ExtArgs>
        fields: Prisma.ChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findFirst: {
            args: Prisma.ChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findMany: {
            args: Prisma.ChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          create: {
            args: Prisma.ChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          createMany: {
            args: Prisma.ChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          delete: {
            args: Prisma.ChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          update: {
            args: Prisma.ChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          deleteMany: {
            args: Prisma.ChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          upsert: {
            args: Prisma.ChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          aggregate: {
            args: Prisma.ChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannel>
          }
          groupBy: {
            args: Prisma.ChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelCountAggregateOutputType> | number
          }
        }
      }
      Subscriptions: {
        payload: Prisma.$SubscriptionsPayload<ExtArgs>
        fields: Prisma.SubscriptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          findMany: {
            args: Prisma.SubscriptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>[]
          }
          create: {
            args: Prisma.SubscriptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          createMany: {
            args: Prisma.SubscriptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          update: {
            args: Prisma.SubscriptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptions>
          }
          groupBy: {
            args: Prisma.SubscriptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionsCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionsCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostLikes: {
        payload: Prisma.$PostLikesPayload<ExtArgs>
        fields: Prisma.PostLikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostLikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostLikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          findFirst: {
            args: Prisma.PostLikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostLikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          findMany: {
            args: Prisma.PostLikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>[]
          }
          create: {
            args: Prisma.PostLikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          createMany: {
            args: Prisma.PostLikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostLikesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>[]
          }
          delete: {
            args: Prisma.PostLikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          update: {
            args: Prisma.PostLikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          deleteMany: {
            args: Prisma.PostLikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostLikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostLikesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>[]
          }
          upsert: {
            args: Prisma.PostLikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          aggregate: {
            args: Prisma.PostLikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostLikes>
          }
          groupBy: {
            args: Prisma.PostLikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostLikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostLikesCountArgs<ExtArgs>
            result: $Utils.Optional<PostLikesCountAggregateOutputType> | number
          }
        }
      }
      PostComments: {
        payload: Prisma.$PostCommentsPayload<ExtArgs>
        fields: Prisma.PostCommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostCommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostCommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          findFirst: {
            args: Prisma.PostCommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostCommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          findMany: {
            args: Prisma.PostCommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>[]
          }
          create: {
            args: Prisma.PostCommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          createMany: {
            args: Prisma.PostCommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>[]
          }
          delete: {
            args: Prisma.PostCommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          update: {
            args: Prisma.PostCommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          deleteMany: {
            args: Prisma.PostCommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostCommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostCommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>[]
          }
          upsert: {
            args: Prisma.PostCommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          aggregate: {
            args: Prisma.PostCommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostComments>
          }
          groupBy: {
            args: Prisma.PostCommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostCommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCommentsCountArgs<ExtArgs>
            result: $Utils.Optional<PostCommentsCountAggregateOutputType> | number
          }
        }
      }
      PostCommentReactions: {
        payload: Prisma.$PostCommentReactionsPayload<ExtArgs>
        fields: Prisma.PostCommentReactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostCommentReactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentReactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostCommentReactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentReactionsPayload>
          }
          findFirst: {
            args: Prisma.PostCommentReactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentReactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostCommentReactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentReactionsPayload>
          }
          findMany: {
            args: Prisma.PostCommentReactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentReactionsPayload>[]
          }
          create: {
            args: Prisma.PostCommentReactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentReactionsPayload>
          }
          createMany: {
            args: Prisma.PostCommentReactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCommentReactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentReactionsPayload>[]
          }
          delete: {
            args: Prisma.PostCommentReactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentReactionsPayload>
          }
          update: {
            args: Prisma.PostCommentReactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentReactionsPayload>
          }
          deleteMany: {
            args: Prisma.PostCommentReactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostCommentReactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostCommentReactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentReactionsPayload>[]
          }
          upsert: {
            args: Prisma.PostCommentReactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentReactionsPayload>
          }
          aggregate: {
            args: Prisma.PostCommentReactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostCommentReactions>
          }
          groupBy: {
            args: Prisma.PostCommentReactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostCommentReactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCommentReactionsCountArgs<ExtArgs>
            result: $Utils.Optional<PostCommentReactionsCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      PlaylistVideo: {
        payload: Prisma.$PlaylistVideoPayload<ExtArgs>
        fields: Prisma.PlaylistVideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistVideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistVideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistVideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistVideoPayload>
          }
          findFirst: {
            args: Prisma.PlaylistVideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistVideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistVideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistVideoPayload>
          }
          findMany: {
            args: Prisma.PlaylistVideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistVideoPayload>[]
          }
          create: {
            args: Prisma.PlaylistVideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistVideoPayload>
          }
          createMany: {
            args: Prisma.PlaylistVideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistVideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistVideoPayload>[]
          }
          delete: {
            args: Prisma.PlaylistVideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistVideoPayload>
          }
          update: {
            args: Prisma.PlaylistVideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistVideoPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistVideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistVideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistVideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistVideoPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistVideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistVideoPayload>
          }
          aggregate: {
            args: Prisma.PlaylistVideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylistVideo>
          }
          groupBy: {
            args: Prisma.PlaylistVideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistVideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistVideoCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistVideoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    channel?: ChannelOmit
    subscriptions?: SubscriptionsOmit
    post?: PostOmit
    postLikes?: PostLikesOmit
    postComments?: PostCommentsOmit
    postCommentReactions?: PostCommentReactionsOmit
    playlist?: PlaylistOmit
    playlistVideo?: PlaylistVideoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ChannelCountOutputType
   */

  export type ChannelCountOutputType = {
    posts: number
    subcriptions: number
    playlist: number
    postComments: number
    postCommentReactions: number
  }

  export type ChannelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | ChannelCountOutputTypeCountPostsArgs
    subcriptions?: boolean | ChannelCountOutputTypeCountSubcriptionsArgs
    playlist?: boolean | ChannelCountOutputTypeCountPlaylistArgs
    postComments?: boolean | ChannelCountOutputTypeCountPostCommentsArgs
    postCommentReactions?: boolean | ChannelCountOutputTypeCountPostCommentReactionsArgs
  }

  // Custom InputTypes
  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelCountOutputType
     */
    select?: ChannelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountSubcriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionsWhereInput
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountPostCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentsWhereInput
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountPostCommentReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentReactionsWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    postLikes: number
    postComments: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postLikes?: boolean | PostCountOutputTypeCountPostLikesArgs
    postComments?: boolean | PostCountOutputTypeCountPostCommentsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikesWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentsWhereInput
  }


  /**
   * Count Type PostCommentsCountOutputType
   */

  export type PostCommentsCountOutputType = {
    postCommentReactions: number
  }

  export type PostCommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postCommentReactions?: boolean | PostCommentsCountOutputTypeCountPostCommentReactionsArgs
  }

  // Custom InputTypes
  /**
   * PostCommentsCountOutputType without action
   */
  export type PostCommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsCountOutputType
     */
    select?: PostCommentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCommentsCountOutputType without action
   */
  export type PostCommentsCountOutputTypeCountPostCommentReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentReactionsWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    playlistVideo: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlistVideo?: boolean | PlaylistCountOutputTypeCountPlaylistVideoArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountPlaylistVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistVideoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Channel
   */

  export type AggregateChannel = {
    _count: ChannelCountAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  export type ChannelMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    handle: string | null
    bio: string | null
    profilePicture: string | null
    backgroundPicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    handle: string | null
    bio: string | null
    profilePicture: string | null
    backgroundPicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    handle: number
    bio: number
    profilePicture: number
    backgroundPicture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChannelMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    handle?: true
    bio?: true
    profilePicture?: true
    backgroundPicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    handle?: true
    bio?: true
    profilePicture?: true
    backgroundPicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    handle?: true
    bio?: true
    profilePicture?: true
    backgroundPicture?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channel to aggregate.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Channels
    **/
    _count?: true | ChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelMaxAggregateInputType
  }

  export type GetChannelAggregateType<T extends ChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannel[P]>
      : GetScalarType<T[P], AggregateChannel[P]>
  }




  export type ChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithAggregationInput | ChannelOrderByWithAggregationInput[]
    by: ChannelScalarFieldEnum[] | ChannelScalarFieldEnum
    having?: ChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelCountAggregateInputType | true
    _min?: ChannelMinAggregateInputType
    _max?: ChannelMaxAggregateInputType
  }

  export type ChannelGroupByOutputType = {
    id: string
    userId: string
    name: string
    handle: string
    bio: string
    profilePicture: string
    backgroundPicture: string
    createdAt: Date
    updatedAt: Date
    _count: ChannelCountAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  type GetChannelGroupByPayload<T extends ChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelGroupByOutputType[P]>
        }
      >
    >


  export type ChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    handle?: boolean
    bio?: boolean
    profilePicture?: boolean
    backgroundPicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | Channel$postsArgs<ExtArgs>
    subcriptions?: boolean | Channel$subcriptionsArgs<ExtArgs>
    playlist?: boolean | Channel$playlistArgs<ExtArgs>
    postComments?: boolean | Channel$postCommentsArgs<ExtArgs>
    postCommentReactions?: boolean | Channel$postCommentReactionsArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    handle?: boolean
    bio?: boolean
    profilePicture?: boolean
    backgroundPicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    handle?: boolean
    bio?: boolean
    profilePicture?: boolean
    backgroundPicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    handle?: boolean
    bio?: boolean
    profilePicture?: boolean
    backgroundPicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "handle" | "bio" | "profilePicture" | "backgroundPicture" | "createdAt" | "updatedAt", ExtArgs["result"]["channel"]>
  export type ChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Channel$postsArgs<ExtArgs>
    subcriptions?: boolean | Channel$subcriptionsArgs<ExtArgs>
    playlist?: boolean | Channel$playlistArgs<ExtArgs>
    postComments?: boolean | Channel$postCommentsArgs<ExtArgs>
    postCommentReactions?: boolean | Channel$postCommentReactionsArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Channel"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      subcriptions: Prisma.$SubscriptionsPayload<ExtArgs>[]
      playlist: Prisma.$PlaylistPayload<ExtArgs>[]
      postComments: Prisma.$PostCommentsPayload<ExtArgs>[]
      postCommentReactions: Prisma.$PostCommentReactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      handle: string
      bio: string
      profilePicture: string
      backgroundPicture: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["channel"]>
    composites: {}
  }

  type ChannelGetPayload<S extends boolean | null | undefined | ChannelDefaultArgs> = $Result.GetResult<Prisma.$ChannelPayload, S>

  type ChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelCountAggregateInputType | true
    }

  export interface ChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Channel'], meta: { name: 'Channel' } }
    /**
     * Find zero or one Channel that matches the filter.
     * @param {ChannelFindUniqueArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelFindUniqueArgs>(args: SelectSubset<T, ChannelFindUniqueArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Channel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelFindUniqueOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelFindFirstArgs>(args?: SelectSubset<T, ChannelFindFirstArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channel.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelWithIdOnly = await prisma.channel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelFindManyArgs>(args?: SelectSubset<T, ChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Channel.
     * @param {ChannelCreateArgs} args - Arguments to create a Channel.
     * @example
     * // Create one Channel
     * const Channel = await prisma.channel.create({
     *   data: {
     *     // ... data to create a Channel
     *   }
     * })
     * 
     */
    create<T extends ChannelCreateArgs>(args: SelectSubset<T, ChannelCreateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Channels.
     * @param {ChannelCreateManyArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelCreateManyArgs>(args?: SelectSubset<T, ChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Channels and returns the data saved in the database.
     * @param {ChannelCreateManyAndReturnArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Channels and only return the `id`
     * const channelWithIdOnly = await prisma.channel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Channel.
     * @param {ChannelDeleteArgs} args - Arguments to delete one Channel.
     * @example
     * // Delete one Channel
     * const Channel = await prisma.channel.delete({
     *   where: {
     *     // ... filter to delete one Channel
     *   }
     * })
     * 
     */
    delete<T extends ChannelDeleteArgs>(args: SelectSubset<T, ChannelDeleteArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Channel.
     * @param {ChannelUpdateArgs} args - Arguments to update one Channel.
     * @example
     * // Update one Channel
     * const channel = await prisma.channel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelUpdateArgs>(args: SelectSubset<T, ChannelUpdateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Channels.
     * @param {ChannelDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelDeleteManyArgs>(args?: SelectSubset<T, ChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelUpdateManyArgs>(args: SelectSubset<T, ChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels and returns the data updated in the database.
     * @param {ChannelUpdateManyAndReturnArgs} args - Arguments to update many Channels.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Channels and only return the `id`
     * const channelWithIdOnly = await prisma.channel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, ChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Channel.
     * @param {ChannelUpsertArgs} args - Arguments to update or create a Channel.
     * @example
     * // Update or create a Channel
     * const channel = await prisma.channel.upsert({
     *   create: {
     *     // ... data to create a Channel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channel we want to update
     *   }
     * })
     */
    upsert<T extends ChannelUpsertArgs>(args: SelectSubset<T, ChannelUpsertArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channel.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends ChannelCountArgs>(
      args?: Subset<T, ChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChannelAggregateArgs>(args: Subset<T, ChannelAggregateArgs>): Prisma.PrismaPromise<GetChannelAggregateType<T>>

    /**
     * Group by Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelGroupByArgs['orderBy'] }
        : { orderBy?: ChannelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Channel model
   */
  readonly fields: ChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Channel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Channel$postsArgs<ExtArgs> = {}>(args?: Subset<T, Channel$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subcriptions<T extends Channel$subcriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Channel$subcriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlist<T extends Channel$playlistArgs<ExtArgs> = {}>(args?: Subset<T, Channel$playlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postComments<T extends Channel$postCommentsArgs<ExtArgs> = {}>(args?: Subset<T, Channel$postCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postCommentReactions<T extends Channel$postCommentReactionsArgs<ExtArgs> = {}>(args?: Subset<T, Channel$postCommentReactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentReactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Channel model
   */
  interface ChannelFieldRefs {
    readonly id: FieldRef<"Channel", 'String'>
    readonly userId: FieldRef<"Channel", 'String'>
    readonly name: FieldRef<"Channel", 'String'>
    readonly handle: FieldRef<"Channel", 'String'>
    readonly bio: FieldRef<"Channel", 'String'>
    readonly profilePicture: FieldRef<"Channel", 'String'>
    readonly backgroundPicture: FieldRef<"Channel", 'String'>
    readonly createdAt: FieldRef<"Channel", 'DateTime'>
    readonly updatedAt: FieldRef<"Channel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Channel findUnique
   */
  export type ChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findUniqueOrThrow
   */
  export type ChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findFirst
   */
  export type ChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findFirstOrThrow
   */
  export type ChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findMany
   */
  export type ChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel create
   */
  export type ChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a Channel.
     */
    data: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
  }

  /**
   * Channel createMany
   */
  export type ChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Channel createManyAndReturn
   */
  export type ChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Channel update
   */
  export type ChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a Channel.
     */
    data: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
    /**
     * Choose, which Channel to update.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel updateMany
   */
  export type ChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
  }

  /**
   * Channel updateManyAndReturn
   */
  export type ChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
  }

  /**
   * Channel upsert
   */
  export type ChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the Channel to update in case it exists.
     */
    where: ChannelWhereUniqueInput
    /**
     * In case the Channel found by the `where` argument doesn't exist, create a new Channel with this data.
     */
    create: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
    /**
     * In case the Channel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
  }

  /**
   * Channel delete
   */
  export type ChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter which Channel to delete.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel deleteMany
   */
  export type ChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channels to delete
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to delete.
     */
    limit?: number
  }

  /**
   * Channel.posts
   */
  export type Channel$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Channel.subcriptions
   */
  export type Channel$subcriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    where?: SubscriptionsWhereInput
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    cursor?: SubscriptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * Channel.playlist
   */
  export type Channel$playlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Channel.postComments
   */
  export type Channel$postCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    where?: PostCommentsWhereInput
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    cursor?: PostCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentsScalarFieldEnum | PostCommentsScalarFieldEnum[]
  }

  /**
   * Channel.postCommentReactions
   */
  export type Channel$postCommentReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentReactions
     */
    select?: PostCommentReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentReactions
     */
    omit?: PostCommentReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentReactionsInclude<ExtArgs> | null
    where?: PostCommentReactionsWhereInput
    orderBy?: PostCommentReactionsOrderByWithRelationInput | PostCommentReactionsOrderByWithRelationInput[]
    cursor?: PostCommentReactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentReactionsScalarFieldEnum | PostCommentReactionsScalarFieldEnum[]
  }

  /**
   * Channel without action
   */
  export type ChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
  }


  /**
   * Model Subscriptions
   */

  export type AggregateSubscriptions = {
    _count: SubscriptionsCountAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  export type SubscriptionsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    channelId: string | null
    subscribeType: $Enums.SubscribeType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    channelId: string | null
    subscribeType: $Enums.SubscribeType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionsCountAggregateOutputType = {
    id: number
    userId: number
    channelId: number
    subscribeType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionsMinAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
    subscribeType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionsMaxAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
    subscribeType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionsCountAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
    subscribeType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to aggregate.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type GetSubscriptionsAggregateType<T extends SubscriptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptions[P]>
      : GetScalarType<T[P], AggregateSubscriptions[P]>
  }




  export type SubscriptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionsWhereInput
    orderBy?: SubscriptionsOrderByWithAggregationInput | SubscriptionsOrderByWithAggregationInput[]
    by: SubscriptionsScalarFieldEnum[] | SubscriptionsScalarFieldEnum
    having?: SubscriptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionsCountAggregateInputType | true
    _min?: SubscriptionsMinAggregateInputType
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type SubscriptionsGroupByOutputType = {
    id: string
    userId: string
    channelId: string
    subscribeType: $Enums.SubscribeType
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionsCountAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  type GetSubscriptionsGroupByPayload<T extends SubscriptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    channelId?: boolean
    subscribeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type SubscriptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    channelId?: boolean
    subscribeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type SubscriptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    channelId?: boolean
    subscribeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type SubscriptionsSelectScalar = {
    id?: boolean
    userId?: boolean
    channelId?: boolean
    subscribeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "channelId" | "subscribeType" | "createdAt" | "updatedAt", ExtArgs["result"]["subscriptions"]>
  export type SubscriptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type SubscriptionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type SubscriptionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }

  export type $SubscriptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscriptions"
    objects: {
      channel: Prisma.$ChannelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      channelId: string
      subscribeType: $Enums.SubscribeType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscriptions"]>
    composites: {}
  }

  type SubscriptionsGetPayload<S extends boolean | null | undefined | SubscriptionsDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionsPayload, S>

  type SubscriptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionsCountAggregateInputType | true
    }

  export interface SubscriptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscriptions'], meta: { name: 'Subscriptions' } }
    /**
     * Find zero or one Subscriptions that matches the filter.
     * @param {SubscriptionsFindUniqueArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionsFindUniqueArgs>(args: SelectSubset<T, SubscriptionsFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscriptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionsFindUniqueOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsFindFirstArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionsFindFirstArgs>(args?: SelectSubset<T, SubscriptionsFindFirstArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsFindFirstOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionsFindManyArgs>(args?: SelectSubset<T, SubscriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscriptions.
     * @param {SubscriptionsCreateArgs} args - Arguments to create a Subscriptions.
     * @example
     * // Create one Subscriptions
     * const Subscriptions = await prisma.subscriptions.create({
     *   data: {
     *     // ... data to create a Subscriptions
     *   }
     * })
     * 
     */
    create<T extends SubscriptionsCreateArgs>(args: SelectSubset<T, SubscriptionsCreateArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionsCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscriptions = await prisma.subscriptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionsCreateManyArgs>(args?: SelectSubset<T, SubscriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionsCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscriptions = await prisma.subscriptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscriptions.
     * @param {SubscriptionsDeleteArgs} args - Arguments to delete one Subscriptions.
     * @example
     * // Delete one Subscriptions
     * const Subscriptions = await prisma.subscriptions.delete({
     *   where: {
     *     // ... filter to delete one Subscriptions
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionsDeleteArgs>(args: SelectSubset<T, SubscriptionsDeleteArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscriptions.
     * @param {SubscriptionsUpdateArgs} args - Arguments to update one Subscriptions.
     * @example
     * // Update one Subscriptions
     * const subscriptions = await prisma.subscriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionsUpdateArgs>(args: SelectSubset<T, SubscriptionsUpdateArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionsDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionsDeleteManyArgs>(args?: SelectSubset<T, SubscriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscriptions = await prisma.subscriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionsUpdateManyArgs>(args: SelectSubset<T, SubscriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionsUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscriptions = await prisma.subscriptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscriptions.
     * @param {SubscriptionsUpsertArgs} args - Arguments to update or create a Subscriptions.
     * @example
     * // Update or create a Subscriptions
     * const subscriptions = await prisma.subscriptions.upsert({
     *   create: {
     *     // ... data to create a Subscriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriptions we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionsUpsertArgs>(args: SelectSubset<T, SubscriptionsUpsertArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscriptions.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionsCountArgs>(
      args?: Subset<T, SubscriptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionsAggregateArgs>(args: Subset<T, SubscriptionsAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionsAggregateType<T>>

    /**
     * Group by Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionsGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscriptions model
   */
  readonly fields: SubscriptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscriptions model
   */
  interface SubscriptionsFieldRefs {
    readonly id: FieldRef<"Subscriptions", 'String'>
    readonly userId: FieldRef<"Subscriptions", 'String'>
    readonly channelId: FieldRef<"Subscriptions", 'String'>
    readonly subscribeType: FieldRef<"Subscriptions", 'SubscribeType'>
    readonly createdAt: FieldRef<"Subscriptions", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscriptions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscriptions findUnique
   */
  export type SubscriptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where: SubscriptionsWhereUniqueInput
  }

  /**
   * Subscriptions findUniqueOrThrow
   */
  export type SubscriptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where: SubscriptionsWhereUniqueInput
  }

  /**
   * Subscriptions findFirst
   */
  export type SubscriptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * Subscriptions findFirstOrThrow
   */
  export type SubscriptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * Subscriptions findMany
   */
  export type SubscriptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * Subscriptions create
   */
  export type SubscriptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscriptions.
     */
    data: XOR<SubscriptionsCreateInput, SubscriptionsUncheckedCreateInput>
  }

  /**
   * Subscriptions createMany
   */
  export type SubscriptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionsCreateManyInput | SubscriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscriptions createManyAndReturn
   */
  export type SubscriptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionsCreateManyInput | SubscriptionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscriptions update
   */
  export type SubscriptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscriptions.
     */
    data: XOR<SubscriptionsUpdateInput, SubscriptionsUncheckedUpdateInput>
    /**
     * Choose, which Subscriptions to update.
     */
    where: SubscriptionsWhereUniqueInput
  }

  /**
   * Subscriptions updateMany
   */
  export type SubscriptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionsUpdateManyMutationInput, SubscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionsWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscriptions updateManyAndReturn
   */
  export type SubscriptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionsUpdateManyMutationInput, SubscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionsWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscriptions upsert
   */
  export type SubscriptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscriptions to update in case it exists.
     */
    where: SubscriptionsWhereUniqueInput
    /**
     * In case the Subscriptions found by the `where` argument doesn't exist, create a new Subscriptions with this data.
     */
    create: XOR<SubscriptionsCreateInput, SubscriptionsUncheckedCreateInput>
    /**
     * In case the Subscriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionsUpdateInput, SubscriptionsUncheckedUpdateInput>
  }

  /**
   * Subscriptions delete
   */
  export type SubscriptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter which Subscriptions to delete.
     */
    where: SubscriptionsWhereUniqueInput
  }

  /**
   * Subscriptions deleteMany
   */
  export type SubscriptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionsWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscriptions without action
   */
  export type SubscriptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    picture: string | null
    channelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    picture: string | null
    channelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    description: number
    picture: number
    channelId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    picture?: true
    channelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    picture?: true
    channelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    picture?: true
    channelId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    description: string
    picture: string
    channelId: string
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    picture?: boolean
    channelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postLikes?: boolean | Post$postLikesArgs<ExtArgs>
    postComments?: boolean | Post$postCommentsArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    picture?: boolean
    channelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    picture?: boolean
    channelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    picture?: boolean
    channelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "picture" | "channelId" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postLikes?: boolean | Post$postLikesArgs<ExtArgs>
    postComments?: boolean | Post$postCommentsArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      postLikes: Prisma.$PostLikesPayload<ExtArgs>[]
      postComments: Prisma.$PostCommentsPayload<ExtArgs>[]
      channel: Prisma.$ChannelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      picture: string
      channelId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postLikes<T extends Post$postLikesArgs<ExtArgs> = {}>(args?: Subset<T, Post$postLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postComments<T extends Post$postCommentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$postCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly description: FieldRef<"Post", 'String'>
    readonly picture: FieldRef<"Post", 'String'>
    readonly channelId: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.postLikes
   */
  export type Post$postLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    where?: PostLikesWhereInput
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    cursor?: PostLikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[]
  }

  /**
   * Post.postComments
   */
  export type Post$postCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    where?: PostCommentsWhereInput
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    cursor?: PostCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentsScalarFieldEnum | PostCommentsScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model PostLikes
   */

  export type AggregatePostLikes = {
    _count: PostLikesCountAggregateOutputType | null
    _min: PostLikesMinAggregateOutputType | null
    _max: PostLikesMaxAggregateOutputType | null
  }

  export type PostLikesMinAggregateOutputType = {
    id: string | null
    postId: string | null
    channelId: string | null
    reaction: $Enums.ReactionValue | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostLikesMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    channelId: string | null
    reaction: $Enums.ReactionValue | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostLikesCountAggregateOutputType = {
    id: number
    postId: number
    channelId: number
    reaction: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostLikesMinAggregateInputType = {
    id?: true
    postId?: true
    channelId?: true
    reaction?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostLikesMaxAggregateInputType = {
    id?: true
    postId?: true
    channelId?: true
    reaction?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostLikesCountAggregateInputType = {
    id?: true
    postId?: true
    channelId?: true
    reaction?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostLikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLikes to aggregate.
     */
    where?: PostLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostLikes
    **/
    _count?: true | PostLikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostLikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostLikesMaxAggregateInputType
  }

  export type GetPostLikesAggregateType<T extends PostLikesAggregateArgs> = {
        [P in keyof T & keyof AggregatePostLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostLikes[P]>
      : GetScalarType<T[P], AggregatePostLikes[P]>
  }




  export type PostLikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikesWhereInput
    orderBy?: PostLikesOrderByWithAggregationInput | PostLikesOrderByWithAggregationInput[]
    by: PostLikesScalarFieldEnum[] | PostLikesScalarFieldEnum
    having?: PostLikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostLikesCountAggregateInputType | true
    _min?: PostLikesMinAggregateInputType
    _max?: PostLikesMaxAggregateInputType
  }

  export type PostLikesGroupByOutputType = {
    id: string
    postId: string
    channelId: string
    reaction: $Enums.ReactionValue
    createdAt: Date
    updatedAt: Date
    _count: PostLikesCountAggregateOutputType | null
    _min: PostLikesMinAggregateOutputType | null
    _max: PostLikesMaxAggregateOutputType | null
  }

  type GetPostLikesGroupByPayload<T extends PostLikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostLikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostLikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostLikesGroupByOutputType[P]>
            : GetScalarType<T[P], PostLikesGroupByOutputType[P]>
        }
      >
    >


  export type PostLikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    channelId?: boolean
    reaction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLikes"]>

  export type PostLikesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    channelId?: boolean
    reaction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLikes"]>

  export type PostLikesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    channelId?: boolean
    reaction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLikes"]>

  export type PostLikesSelectScalar = {
    id?: boolean
    postId?: boolean
    channelId?: boolean
    reaction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostLikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "channelId" | "reaction" | "createdAt" | "updatedAt", ExtArgs["result"]["postLikes"]>
  export type PostLikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostLikesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostLikesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostLikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostLikes"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      channelId: string
      reaction: $Enums.ReactionValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["postLikes"]>
    composites: {}
  }

  type PostLikesGetPayload<S extends boolean | null | undefined | PostLikesDefaultArgs> = $Result.GetResult<Prisma.$PostLikesPayload, S>

  type PostLikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostLikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostLikesCountAggregateInputType | true
    }

  export interface PostLikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostLikes'], meta: { name: 'PostLikes' } }
    /**
     * Find zero or one PostLikes that matches the filter.
     * @param {PostLikesFindUniqueArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostLikesFindUniqueArgs>(args: SelectSubset<T, PostLikesFindUniqueArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostLikes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostLikesFindUniqueOrThrowArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostLikesFindUniqueOrThrowArgs>(args: SelectSubset<T, PostLikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesFindFirstArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostLikesFindFirstArgs>(args?: SelectSubset<T, PostLikesFindFirstArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostLikes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesFindFirstOrThrowArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostLikesFindFirstOrThrowArgs>(args?: SelectSubset<T, PostLikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostLikes
     * const postLikes = await prisma.postLikes.findMany()
     * 
     * // Get first 10 PostLikes
     * const postLikes = await prisma.postLikes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postLikesWithIdOnly = await prisma.postLikes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostLikesFindManyArgs>(args?: SelectSubset<T, PostLikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostLikes.
     * @param {PostLikesCreateArgs} args - Arguments to create a PostLikes.
     * @example
     * // Create one PostLikes
     * const PostLikes = await prisma.postLikes.create({
     *   data: {
     *     // ... data to create a PostLikes
     *   }
     * })
     * 
     */
    create<T extends PostLikesCreateArgs>(args: SelectSubset<T, PostLikesCreateArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostLikes.
     * @param {PostLikesCreateManyArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLikes = await prisma.postLikes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostLikesCreateManyArgs>(args?: SelectSubset<T, PostLikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostLikes and returns the data saved in the database.
     * @param {PostLikesCreateManyAndReturnArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLikes = await prisma.postLikes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostLikes and only return the `id`
     * const postLikesWithIdOnly = await prisma.postLikes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostLikesCreateManyAndReturnArgs>(args?: SelectSubset<T, PostLikesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostLikes.
     * @param {PostLikesDeleteArgs} args - Arguments to delete one PostLikes.
     * @example
     * // Delete one PostLikes
     * const PostLikes = await prisma.postLikes.delete({
     *   where: {
     *     // ... filter to delete one PostLikes
     *   }
     * })
     * 
     */
    delete<T extends PostLikesDeleteArgs>(args: SelectSubset<T, PostLikesDeleteArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostLikes.
     * @param {PostLikesUpdateArgs} args - Arguments to update one PostLikes.
     * @example
     * // Update one PostLikes
     * const postLikes = await prisma.postLikes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostLikesUpdateArgs>(args: SelectSubset<T, PostLikesUpdateArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostLikes.
     * @param {PostLikesDeleteManyArgs} args - Arguments to filter PostLikes to delete.
     * @example
     * // Delete a few PostLikes
     * const { count } = await prisma.postLikes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostLikesDeleteManyArgs>(args?: SelectSubset<T, PostLikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostLikes
     * const postLikes = await prisma.postLikes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostLikesUpdateManyArgs>(args: SelectSubset<T, PostLikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes and returns the data updated in the database.
     * @param {PostLikesUpdateManyAndReturnArgs} args - Arguments to update many PostLikes.
     * @example
     * // Update many PostLikes
     * const postLikes = await prisma.postLikes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostLikes and only return the `id`
     * const postLikesWithIdOnly = await prisma.postLikes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostLikesUpdateManyAndReturnArgs>(args: SelectSubset<T, PostLikesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostLikes.
     * @param {PostLikesUpsertArgs} args - Arguments to update or create a PostLikes.
     * @example
     * // Update or create a PostLikes
     * const postLikes = await prisma.postLikes.upsert({
     *   create: {
     *     // ... data to create a PostLikes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostLikes we want to update
     *   }
     * })
     */
    upsert<T extends PostLikesUpsertArgs>(args: SelectSubset<T, PostLikesUpsertArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesCountArgs} args - Arguments to filter PostLikes to count.
     * @example
     * // Count the number of PostLikes
     * const count = await prisma.postLikes.count({
     *   where: {
     *     // ... the filter for the PostLikes we want to count
     *   }
     * })
    **/
    count<T extends PostLikesCountArgs>(
      args?: Subset<T, PostLikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostLikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostLikesAggregateArgs>(args: Subset<T, PostLikesAggregateArgs>): Prisma.PrismaPromise<GetPostLikesAggregateType<T>>

    /**
     * Group by PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostLikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostLikesGroupByArgs['orderBy'] }
        : { orderBy?: PostLikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostLikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostLikes model
   */
  readonly fields: PostLikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostLikes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostLikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostLikes model
   */
  interface PostLikesFieldRefs {
    readonly id: FieldRef<"PostLikes", 'String'>
    readonly postId: FieldRef<"PostLikes", 'String'>
    readonly channelId: FieldRef<"PostLikes", 'String'>
    readonly reaction: FieldRef<"PostLikes", 'ReactionValue'>
    readonly createdAt: FieldRef<"PostLikes", 'DateTime'>
    readonly updatedAt: FieldRef<"PostLikes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostLikes findUnique
   */
  export type PostLikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where: PostLikesWhereUniqueInput
  }

  /**
   * PostLikes findUniqueOrThrow
   */
  export type PostLikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where: PostLikesWhereUniqueInput
  }

  /**
   * PostLikes findFirst
   */
  export type PostLikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[]
  }

  /**
   * PostLikes findFirstOrThrow
   */
  export type PostLikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[]
  }

  /**
   * PostLikes findMany
   */
  export type PostLikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostLikes.
     */
    cursor?: PostLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[]
  }

  /**
   * PostLikes create
   */
  export type PostLikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * The data needed to create a PostLikes.
     */
    data: XOR<PostLikesCreateInput, PostLikesUncheckedCreateInput>
  }

  /**
   * PostLikes createMany
   */
  export type PostLikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikesCreateManyInput | PostLikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostLikes createManyAndReturn
   */
  export type PostLikesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikesCreateManyInput | PostLikesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLikes update
   */
  export type PostLikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * The data needed to update a PostLikes.
     */
    data: XOR<PostLikesUpdateInput, PostLikesUncheckedUpdateInput>
    /**
     * Choose, which PostLikes to update.
     */
    where: PostLikesWhereUniqueInput
  }

  /**
   * PostLikes updateMany
   */
  export type PostLikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikesUpdateManyMutationInput, PostLikesUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikesWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
  }

  /**
   * PostLikes updateManyAndReturn
   */
  export type PostLikesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikesUpdateManyMutationInput, PostLikesUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikesWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLikes upsert
   */
  export type PostLikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * The filter to search for the PostLikes to update in case it exists.
     */
    where: PostLikesWhereUniqueInput
    /**
     * In case the PostLikes found by the `where` argument doesn't exist, create a new PostLikes with this data.
     */
    create: XOR<PostLikesCreateInput, PostLikesUncheckedCreateInput>
    /**
     * In case the PostLikes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostLikesUpdateInput, PostLikesUncheckedUpdateInput>
  }

  /**
   * PostLikes delete
   */
  export type PostLikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter which PostLikes to delete.
     */
    where: PostLikesWhereUniqueInput
  }

  /**
   * PostLikes deleteMany
   */
  export type PostLikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLikes to delete
     */
    where?: PostLikesWhereInput
    /**
     * Limit how many PostLikes to delete.
     */
    limit?: number
  }

  /**
   * PostLikes without action
   */
  export type PostLikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
  }


  /**
   * Model PostComments
   */

  export type AggregatePostComments = {
    _count: PostCommentsCountAggregateOutputType | null
    _min: PostCommentsMinAggregateOutputType | null
    _max: PostCommentsMaxAggregateOutputType | null
  }

  export type PostCommentsMinAggregateOutputType = {
    id: string | null
    postId: string | null
    channelId: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCommentsMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    channelId: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCommentsCountAggregateOutputType = {
    id: number
    postId: number
    channelId: number
    text: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostCommentsMinAggregateInputType = {
    id?: true
    postId?: true
    channelId?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCommentsMaxAggregateInputType = {
    id?: true
    postId?: true
    channelId?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCommentsCountAggregateInputType = {
    id?: true
    postId?: true
    channelId?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostCommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostComments to aggregate.
     */
    where?: PostCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostComments
    **/
    _count?: true | PostCommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostCommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostCommentsMaxAggregateInputType
  }

  export type GetPostCommentsAggregateType<T extends PostCommentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePostComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostComments[P]>
      : GetScalarType<T[P], AggregatePostComments[P]>
  }




  export type PostCommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentsWhereInput
    orderBy?: PostCommentsOrderByWithAggregationInput | PostCommentsOrderByWithAggregationInput[]
    by: PostCommentsScalarFieldEnum[] | PostCommentsScalarFieldEnum
    having?: PostCommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCommentsCountAggregateInputType | true
    _min?: PostCommentsMinAggregateInputType
    _max?: PostCommentsMaxAggregateInputType
  }

  export type PostCommentsGroupByOutputType = {
    id: string
    postId: string
    channelId: string
    text: string
    createdAt: Date
    updatedAt: Date
    _count: PostCommentsCountAggregateOutputType | null
    _min: PostCommentsMinAggregateOutputType | null
    _max: PostCommentsMaxAggregateOutputType | null
  }

  type GetPostCommentsGroupByPayload<T extends PostCommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostCommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostCommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostCommentsGroupByOutputType[P]>
            : GetScalarType<T[P], PostCommentsGroupByOutputType[P]>
        }
      >
    >


  export type PostCommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    channelId?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    postCommentReactions?: boolean | PostComments$postCommentReactionsArgs<ExtArgs>
    _count?: boolean | PostCommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComments"]>

  export type PostCommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    channelId?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComments"]>

  export type PostCommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    channelId?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComments"]>

  export type PostCommentsSelectScalar = {
    id?: boolean
    postId?: boolean
    channelId?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostCommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "channelId" | "text" | "createdAt" | "updatedAt", ExtArgs["result"]["postComments"]>
  export type PostCommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    postCommentReactions?: boolean | PostComments$postCommentReactionsArgs<ExtArgs>
    _count?: boolean | PostCommentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostCommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type PostCommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }

  export type $PostCommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostComments"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      channel: Prisma.$ChannelPayload<ExtArgs>
      postCommentReactions: Prisma.$PostCommentReactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      channelId: string
      text: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["postComments"]>
    composites: {}
  }

  type PostCommentsGetPayload<S extends boolean | null | undefined | PostCommentsDefaultArgs> = $Result.GetResult<Prisma.$PostCommentsPayload, S>

  type PostCommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostCommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCommentsCountAggregateInputType | true
    }

  export interface PostCommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostComments'], meta: { name: 'PostComments' } }
    /**
     * Find zero or one PostComments that matches the filter.
     * @param {PostCommentsFindUniqueArgs} args - Arguments to find a PostComments
     * @example
     * // Get one PostComments
     * const postComments = await prisma.postComments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostCommentsFindUniqueArgs>(args: SelectSubset<T, PostCommentsFindUniqueArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostComments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostCommentsFindUniqueOrThrowArgs} args - Arguments to find a PostComments
     * @example
     * // Get one PostComments
     * const postComments = await prisma.postComments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostCommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostCommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsFindFirstArgs} args - Arguments to find a PostComments
     * @example
     * // Get one PostComments
     * const postComments = await prisma.postComments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostCommentsFindFirstArgs>(args?: SelectSubset<T, PostCommentsFindFirstArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostComments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsFindFirstOrThrowArgs} args - Arguments to find a PostComments
     * @example
     * // Get one PostComments
     * const postComments = await prisma.postComments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostCommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostCommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostComments
     * const postComments = await prisma.postComments.findMany()
     * 
     * // Get first 10 PostComments
     * const postComments = await prisma.postComments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postCommentsWithIdOnly = await prisma.postComments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostCommentsFindManyArgs>(args?: SelectSubset<T, PostCommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostComments.
     * @param {PostCommentsCreateArgs} args - Arguments to create a PostComments.
     * @example
     * // Create one PostComments
     * const PostComments = await prisma.postComments.create({
     *   data: {
     *     // ... data to create a PostComments
     *   }
     * })
     * 
     */
    create<T extends PostCommentsCreateArgs>(args: SelectSubset<T, PostCommentsCreateArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostComments.
     * @param {PostCommentsCreateManyArgs} args - Arguments to create many PostComments.
     * @example
     * // Create many PostComments
     * const postComments = await prisma.postComments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCommentsCreateManyArgs>(args?: SelectSubset<T, PostCommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostComments and returns the data saved in the database.
     * @param {PostCommentsCreateManyAndReturnArgs} args - Arguments to create many PostComments.
     * @example
     * // Create many PostComments
     * const postComments = await prisma.postComments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostComments and only return the `id`
     * const postCommentsWithIdOnly = await prisma.postComments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostComments.
     * @param {PostCommentsDeleteArgs} args - Arguments to delete one PostComments.
     * @example
     * // Delete one PostComments
     * const PostComments = await prisma.postComments.delete({
     *   where: {
     *     // ... filter to delete one PostComments
     *   }
     * })
     * 
     */
    delete<T extends PostCommentsDeleteArgs>(args: SelectSubset<T, PostCommentsDeleteArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostComments.
     * @param {PostCommentsUpdateArgs} args - Arguments to update one PostComments.
     * @example
     * // Update one PostComments
     * const postComments = await prisma.postComments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostCommentsUpdateArgs>(args: SelectSubset<T, PostCommentsUpdateArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostComments.
     * @param {PostCommentsDeleteManyArgs} args - Arguments to filter PostComments to delete.
     * @example
     * // Delete a few PostComments
     * const { count } = await prisma.postComments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostCommentsDeleteManyArgs>(args?: SelectSubset<T, PostCommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostComments
     * const postComments = await prisma.postComments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostCommentsUpdateManyArgs>(args: SelectSubset<T, PostCommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostComments and returns the data updated in the database.
     * @param {PostCommentsUpdateManyAndReturnArgs} args - Arguments to update many PostComments.
     * @example
     * // Update many PostComments
     * const postComments = await prisma.postComments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostComments and only return the `id`
     * const postCommentsWithIdOnly = await prisma.postComments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostCommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostCommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostComments.
     * @param {PostCommentsUpsertArgs} args - Arguments to update or create a PostComments.
     * @example
     * // Update or create a PostComments
     * const postComments = await prisma.postComments.upsert({
     *   create: {
     *     // ... data to create a PostComments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostComments we want to update
     *   }
     * })
     */
    upsert<T extends PostCommentsUpsertArgs>(args: SelectSubset<T, PostCommentsUpsertArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsCountArgs} args - Arguments to filter PostComments to count.
     * @example
     * // Count the number of PostComments
     * const count = await prisma.postComments.count({
     *   where: {
     *     // ... the filter for the PostComments we want to count
     *   }
     * })
    **/
    count<T extends PostCommentsCountArgs>(
      args?: Subset<T, PostCommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostCommentsAggregateArgs>(args: Subset<T, PostCommentsAggregateArgs>): Prisma.PrismaPromise<GetPostCommentsAggregateType<T>>

    /**
     * Group by PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostCommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostCommentsGroupByArgs['orderBy'] }
        : { orderBy?: PostCommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostCommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostComments model
   */
  readonly fields: PostCommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostComments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostCommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    postCommentReactions<T extends PostComments$postCommentReactionsArgs<ExtArgs> = {}>(args?: Subset<T, PostComments$postCommentReactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentReactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostComments model
   */
  interface PostCommentsFieldRefs {
    readonly id: FieldRef<"PostComments", 'String'>
    readonly postId: FieldRef<"PostComments", 'String'>
    readonly channelId: FieldRef<"PostComments", 'String'>
    readonly text: FieldRef<"PostComments", 'String'>
    readonly createdAt: FieldRef<"PostComments", 'DateTime'>
    readonly updatedAt: FieldRef<"PostComments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostComments findUnique
   */
  export type PostCommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where: PostCommentsWhereUniqueInput
  }

  /**
   * PostComments findUniqueOrThrow
   */
  export type PostCommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where: PostCommentsWhereUniqueInput
  }

  /**
   * PostComments findFirst
   */
  export type PostCommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where?: PostCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostComments.
     */
    cursor?: PostCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostComments.
     */
    distinct?: PostCommentsScalarFieldEnum | PostCommentsScalarFieldEnum[]
  }

  /**
   * PostComments findFirstOrThrow
   */
  export type PostCommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where?: PostCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostComments.
     */
    cursor?: PostCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostComments.
     */
    distinct?: PostCommentsScalarFieldEnum | PostCommentsScalarFieldEnum[]
  }

  /**
   * PostComments findMany
   */
  export type PostCommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where?: PostCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostComments.
     */
    cursor?: PostCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    distinct?: PostCommentsScalarFieldEnum | PostCommentsScalarFieldEnum[]
  }

  /**
   * PostComments create
   */
  export type PostCommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a PostComments.
     */
    data: XOR<PostCommentsCreateInput, PostCommentsUncheckedCreateInput>
  }

  /**
   * PostComments createMany
   */
  export type PostCommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostComments.
     */
    data: PostCommentsCreateManyInput | PostCommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostComments createManyAndReturn
   */
  export type PostCommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * The data used to create many PostComments.
     */
    data: PostCommentsCreateManyInput | PostCommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostComments update
   */
  export type PostCommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a PostComments.
     */
    data: XOR<PostCommentsUpdateInput, PostCommentsUncheckedUpdateInput>
    /**
     * Choose, which PostComments to update.
     */
    where: PostCommentsWhereUniqueInput
  }

  /**
   * PostComments updateMany
   */
  export type PostCommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostComments.
     */
    data: XOR<PostCommentsUpdateManyMutationInput, PostCommentsUncheckedUpdateManyInput>
    /**
     * Filter which PostComments to update
     */
    where?: PostCommentsWhereInput
    /**
     * Limit how many PostComments to update.
     */
    limit?: number
  }

  /**
   * PostComments updateManyAndReturn
   */
  export type PostCommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * The data used to update PostComments.
     */
    data: XOR<PostCommentsUpdateManyMutationInput, PostCommentsUncheckedUpdateManyInput>
    /**
     * Filter which PostComments to update
     */
    where?: PostCommentsWhereInput
    /**
     * Limit how many PostComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostComments upsert
   */
  export type PostCommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the PostComments to update in case it exists.
     */
    where: PostCommentsWhereUniqueInput
    /**
     * In case the PostComments found by the `where` argument doesn't exist, create a new PostComments with this data.
     */
    create: XOR<PostCommentsCreateInput, PostCommentsUncheckedCreateInput>
    /**
     * In case the PostComments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostCommentsUpdateInput, PostCommentsUncheckedUpdateInput>
  }

  /**
   * PostComments delete
   */
  export type PostCommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter which PostComments to delete.
     */
    where: PostCommentsWhereUniqueInput
  }

  /**
   * PostComments deleteMany
   */
  export type PostCommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostComments to delete
     */
    where?: PostCommentsWhereInput
    /**
     * Limit how many PostComments to delete.
     */
    limit?: number
  }

  /**
   * PostComments.postCommentReactions
   */
  export type PostComments$postCommentReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentReactions
     */
    select?: PostCommentReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentReactions
     */
    omit?: PostCommentReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentReactionsInclude<ExtArgs> | null
    where?: PostCommentReactionsWhereInput
    orderBy?: PostCommentReactionsOrderByWithRelationInput | PostCommentReactionsOrderByWithRelationInput[]
    cursor?: PostCommentReactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentReactionsScalarFieldEnum | PostCommentReactionsScalarFieldEnum[]
  }

  /**
   * PostComments without action
   */
  export type PostCommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
  }


  /**
   * Model PostCommentReactions
   */

  export type AggregatePostCommentReactions = {
    _count: PostCommentReactionsCountAggregateOutputType | null
    _min: PostCommentReactionsMinAggregateOutputType | null
    _max: PostCommentReactionsMaxAggregateOutputType | null
  }

  export type PostCommentReactionsMinAggregateOutputType = {
    id: string | null
    commentId: string | null
    channelId: string | null
    reaction: $Enums.ReactionValue | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCommentReactionsMaxAggregateOutputType = {
    id: string | null
    commentId: string | null
    channelId: string | null
    reaction: $Enums.ReactionValue | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCommentReactionsCountAggregateOutputType = {
    id: number
    commentId: number
    channelId: number
    reaction: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostCommentReactionsMinAggregateInputType = {
    id?: true
    commentId?: true
    channelId?: true
    reaction?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCommentReactionsMaxAggregateInputType = {
    id?: true
    commentId?: true
    channelId?: true
    reaction?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCommentReactionsCountAggregateInputType = {
    id?: true
    commentId?: true
    channelId?: true
    reaction?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostCommentReactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostCommentReactions to aggregate.
     */
    where?: PostCommentReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCommentReactions to fetch.
     */
    orderBy?: PostCommentReactionsOrderByWithRelationInput | PostCommentReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostCommentReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCommentReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCommentReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostCommentReactions
    **/
    _count?: true | PostCommentReactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostCommentReactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostCommentReactionsMaxAggregateInputType
  }

  export type GetPostCommentReactionsAggregateType<T extends PostCommentReactionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePostCommentReactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostCommentReactions[P]>
      : GetScalarType<T[P], AggregatePostCommentReactions[P]>
  }




  export type PostCommentReactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentReactionsWhereInput
    orderBy?: PostCommentReactionsOrderByWithAggregationInput | PostCommentReactionsOrderByWithAggregationInput[]
    by: PostCommentReactionsScalarFieldEnum[] | PostCommentReactionsScalarFieldEnum
    having?: PostCommentReactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCommentReactionsCountAggregateInputType | true
    _min?: PostCommentReactionsMinAggregateInputType
    _max?: PostCommentReactionsMaxAggregateInputType
  }

  export type PostCommentReactionsGroupByOutputType = {
    id: string
    commentId: string
    channelId: string
    reaction: $Enums.ReactionValue
    createdAt: Date
    updatedAt: Date
    _count: PostCommentReactionsCountAggregateOutputType | null
    _min: PostCommentReactionsMinAggregateOutputType | null
    _max: PostCommentReactionsMaxAggregateOutputType | null
  }

  type GetPostCommentReactionsGroupByPayload<T extends PostCommentReactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostCommentReactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostCommentReactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostCommentReactionsGroupByOutputType[P]>
            : GetScalarType<T[P], PostCommentReactionsGroupByOutputType[P]>
        }
      >
    >


  export type PostCommentReactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    channelId?: boolean
    reaction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postComments?: boolean | PostCommentsDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postCommentReactions"]>

  export type PostCommentReactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    channelId?: boolean
    reaction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postComments?: boolean | PostCommentsDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postCommentReactions"]>

  export type PostCommentReactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    channelId?: boolean
    reaction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postComments?: boolean | PostCommentsDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postCommentReactions"]>

  export type PostCommentReactionsSelectScalar = {
    id?: boolean
    commentId?: boolean
    channelId?: boolean
    reaction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostCommentReactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "commentId" | "channelId" | "reaction" | "createdAt" | "updatedAt", ExtArgs["result"]["postCommentReactions"]>
  export type PostCommentReactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postComments?: boolean | PostCommentsDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type PostCommentReactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postComments?: boolean | PostCommentsDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type PostCommentReactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postComments?: boolean | PostCommentsDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }

  export type $PostCommentReactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostCommentReactions"
    objects: {
      postComments: Prisma.$PostCommentsPayload<ExtArgs>
      channel: Prisma.$ChannelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      commentId: string
      channelId: string
      reaction: $Enums.ReactionValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["postCommentReactions"]>
    composites: {}
  }

  type PostCommentReactionsGetPayload<S extends boolean | null | undefined | PostCommentReactionsDefaultArgs> = $Result.GetResult<Prisma.$PostCommentReactionsPayload, S>

  type PostCommentReactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostCommentReactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCommentReactionsCountAggregateInputType | true
    }

  export interface PostCommentReactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostCommentReactions'], meta: { name: 'PostCommentReactions' } }
    /**
     * Find zero or one PostCommentReactions that matches the filter.
     * @param {PostCommentReactionsFindUniqueArgs} args - Arguments to find a PostCommentReactions
     * @example
     * // Get one PostCommentReactions
     * const postCommentReactions = await prisma.postCommentReactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostCommentReactionsFindUniqueArgs>(args: SelectSubset<T, PostCommentReactionsFindUniqueArgs<ExtArgs>>): Prisma__PostCommentReactionsClient<$Result.GetResult<Prisma.$PostCommentReactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostCommentReactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostCommentReactionsFindUniqueOrThrowArgs} args - Arguments to find a PostCommentReactions
     * @example
     * // Get one PostCommentReactions
     * const postCommentReactions = await prisma.postCommentReactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostCommentReactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostCommentReactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostCommentReactionsClient<$Result.GetResult<Prisma.$PostCommentReactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostCommentReactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentReactionsFindFirstArgs} args - Arguments to find a PostCommentReactions
     * @example
     * // Get one PostCommentReactions
     * const postCommentReactions = await prisma.postCommentReactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostCommentReactionsFindFirstArgs>(args?: SelectSubset<T, PostCommentReactionsFindFirstArgs<ExtArgs>>): Prisma__PostCommentReactionsClient<$Result.GetResult<Prisma.$PostCommentReactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostCommentReactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentReactionsFindFirstOrThrowArgs} args - Arguments to find a PostCommentReactions
     * @example
     * // Get one PostCommentReactions
     * const postCommentReactions = await prisma.postCommentReactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostCommentReactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostCommentReactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostCommentReactionsClient<$Result.GetResult<Prisma.$PostCommentReactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostCommentReactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentReactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostCommentReactions
     * const postCommentReactions = await prisma.postCommentReactions.findMany()
     * 
     * // Get first 10 PostCommentReactions
     * const postCommentReactions = await prisma.postCommentReactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postCommentReactionsWithIdOnly = await prisma.postCommentReactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostCommentReactionsFindManyArgs>(args?: SelectSubset<T, PostCommentReactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentReactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostCommentReactions.
     * @param {PostCommentReactionsCreateArgs} args - Arguments to create a PostCommentReactions.
     * @example
     * // Create one PostCommentReactions
     * const PostCommentReactions = await prisma.postCommentReactions.create({
     *   data: {
     *     // ... data to create a PostCommentReactions
     *   }
     * })
     * 
     */
    create<T extends PostCommentReactionsCreateArgs>(args: SelectSubset<T, PostCommentReactionsCreateArgs<ExtArgs>>): Prisma__PostCommentReactionsClient<$Result.GetResult<Prisma.$PostCommentReactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostCommentReactions.
     * @param {PostCommentReactionsCreateManyArgs} args - Arguments to create many PostCommentReactions.
     * @example
     * // Create many PostCommentReactions
     * const postCommentReactions = await prisma.postCommentReactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCommentReactionsCreateManyArgs>(args?: SelectSubset<T, PostCommentReactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostCommentReactions and returns the data saved in the database.
     * @param {PostCommentReactionsCreateManyAndReturnArgs} args - Arguments to create many PostCommentReactions.
     * @example
     * // Create many PostCommentReactions
     * const postCommentReactions = await prisma.postCommentReactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostCommentReactions and only return the `id`
     * const postCommentReactionsWithIdOnly = await prisma.postCommentReactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCommentReactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCommentReactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentReactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostCommentReactions.
     * @param {PostCommentReactionsDeleteArgs} args - Arguments to delete one PostCommentReactions.
     * @example
     * // Delete one PostCommentReactions
     * const PostCommentReactions = await prisma.postCommentReactions.delete({
     *   where: {
     *     // ... filter to delete one PostCommentReactions
     *   }
     * })
     * 
     */
    delete<T extends PostCommentReactionsDeleteArgs>(args: SelectSubset<T, PostCommentReactionsDeleteArgs<ExtArgs>>): Prisma__PostCommentReactionsClient<$Result.GetResult<Prisma.$PostCommentReactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostCommentReactions.
     * @param {PostCommentReactionsUpdateArgs} args - Arguments to update one PostCommentReactions.
     * @example
     * // Update one PostCommentReactions
     * const postCommentReactions = await prisma.postCommentReactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostCommentReactionsUpdateArgs>(args: SelectSubset<T, PostCommentReactionsUpdateArgs<ExtArgs>>): Prisma__PostCommentReactionsClient<$Result.GetResult<Prisma.$PostCommentReactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostCommentReactions.
     * @param {PostCommentReactionsDeleteManyArgs} args - Arguments to filter PostCommentReactions to delete.
     * @example
     * // Delete a few PostCommentReactions
     * const { count } = await prisma.postCommentReactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostCommentReactionsDeleteManyArgs>(args?: SelectSubset<T, PostCommentReactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostCommentReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentReactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostCommentReactions
     * const postCommentReactions = await prisma.postCommentReactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostCommentReactionsUpdateManyArgs>(args: SelectSubset<T, PostCommentReactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostCommentReactions and returns the data updated in the database.
     * @param {PostCommentReactionsUpdateManyAndReturnArgs} args - Arguments to update many PostCommentReactions.
     * @example
     * // Update many PostCommentReactions
     * const postCommentReactions = await prisma.postCommentReactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostCommentReactions and only return the `id`
     * const postCommentReactionsWithIdOnly = await prisma.postCommentReactions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostCommentReactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostCommentReactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentReactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostCommentReactions.
     * @param {PostCommentReactionsUpsertArgs} args - Arguments to update or create a PostCommentReactions.
     * @example
     * // Update or create a PostCommentReactions
     * const postCommentReactions = await prisma.postCommentReactions.upsert({
     *   create: {
     *     // ... data to create a PostCommentReactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostCommentReactions we want to update
     *   }
     * })
     */
    upsert<T extends PostCommentReactionsUpsertArgs>(args: SelectSubset<T, PostCommentReactionsUpsertArgs<ExtArgs>>): Prisma__PostCommentReactionsClient<$Result.GetResult<Prisma.$PostCommentReactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostCommentReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentReactionsCountArgs} args - Arguments to filter PostCommentReactions to count.
     * @example
     * // Count the number of PostCommentReactions
     * const count = await prisma.postCommentReactions.count({
     *   where: {
     *     // ... the filter for the PostCommentReactions we want to count
     *   }
     * })
    **/
    count<T extends PostCommentReactionsCountArgs>(
      args?: Subset<T, PostCommentReactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCommentReactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostCommentReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentReactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostCommentReactionsAggregateArgs>(args: Subset<T, PostCommentReactionsAggregateArgs>): Prisma.PrismaPromise<GetPostCommentReactionsAggregateType<T>>

    /**
     * Group by PostCommentReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentReactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostCommentReactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostCommentReactionsGroupByArgs['orderBy'] }
        : { orderBy?: PostCommentReactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostCommentReactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostCommentReactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostCommentReactions model
   */
  readonly fields: PostCommentReactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostCommentReactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostCommentReactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postComments<T extends PostCommentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostCommentsDefaultArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostCommentReactions model
   */
  interface PostCommentReactionsFieldRefs {
    readonly id: FieldRef<"PostCommentReactions", 'String'>
    readonly commentId: FieldRef<"PostCommentReactions", 'String'>
    readonly channelId: FieldRef<"PostCommentReactions", 'String'>
    readonly reaction: FieldRef<"PostCommentReactions", 'ReactionValue'>
    readonly createdAt: FieldRef<"PostCommentReactions", 'DateTime'>
    readonly updatedAt: FieldRef<"PostCommentReactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostCommentReactions findUnique
   */
  export type PostCommentReactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentReactions
     */
    select?: PostCommentReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentReactions
     */
    omit?: PostCommentReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentReactionsInclude<ExtArgs> | null
    /**
     * Filter, which PostCommentReactions to fetch.
     */
    where: PostCommentReactionsWhereUniqueInput
  }

  /**
   * PostCommentReactions findUniqueOrThrow
   */
  export type PostCommentReactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentReactions
     */
    select?: PostCommentReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentReactions
     */
    omit?: PostCommentReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentReactionsInclude<ExtArgs> | null
    /**
     * Filter, which PostCommentReactions to fetch.
     */
    where: PostCommentReactionsWhereUniqueInput
  }

  /**
   * PostCommentReactions findFirst
   */
  export type PostCommentReactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentReactions
     */
    select?: PostCommentReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentReactions
     */
    omit?: PostCommentReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentReactionsInclude<ExtArgs> | null
    /**
     * Filter, which PostCommentReactions to fetch.
     */
    where?: PostCommentReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCommentReactions to fetch.
     */
    orderBy?: PostCommentReactionsOrderByWithRelationInput | PostCommentReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostCommentReactions.
     */
    cursor?: PostCommentReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCommentReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCommentReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostCommentReactions.
     */
    distinct?: PostCommentReactionsScalarFieldEnum | PostCommentReactionsScalarFieldEnum[]
  }

  /**
   * PostCommentReactions findFirstOrThrow
   */
  export type PostCommentReactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentReactions
     */
    select?: PostCommentReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentReactions
     */
    omit?: PostCommentReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentReactionsInclude<ExtArgs> | null
    /**
     * Filter, which PostCommentReactions to fetch.
     */
    where?: PostCommentReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCommentReactions to fetch.
     */
    orderBy?: PostCommentReactionsOrderByWithRelationInput | PostCommentReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostCommentReactions.
     */
    cursor?: PostCommentReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCommentReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCommentReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostCommentReactions.
     */
    distinct?: PostCommentReactionsScalarFieldEnum | PostCommentReactionsScalarFieldEnum[]
  }

  /**
   * PostCommentReactions findMany
   */
  export type PostCommentReactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentReactions
     */
    select?: PostCommentReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentReactions
     */
    omit?: PostCommentReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentReactionsInclude<ExtArgs> | null
    /**
     * Filter, which PostCommentReactions to fetch.
     */
    where?: PostCommentReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCommentReactions to fetch.
     */
    orderBy?: PostCommentReactionsOrderByWithRelationInput | PostCommentReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostCommentReactions.
     */
    cursor?: PostCommentReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCommentReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCommentReactions.
     */
    skip?: number
    distinct?: PostCommentReactionsScalarFieldEnum | PostCommentReactionsScalarFieldEnum[]
  }

  /**
   * PostCommentReactions create
   */
  export type PostCommentReactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentReactions
     */
    select?: PostCommentReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentReactions
     */
    omit?: PostCommentReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentReactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a PostCommentReactions.
     */
    data: XOR<PostCommentReactionsCreateInput, PostCommentReactionsUncheckedCreateInput>
  }

  /**
   * PostCommentReactions createMany
   */
  export type PostCommentReactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostCommentReactions.
     */
    data: PostCommentReactionsCreateManyInput | PostCommentReactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostCommentReactions createManyAndReturn
   */
  export type PostCommentReactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentReactions
     */
    select?: PostCommentReactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentReactions
     */
    omit?: PostCommentReactionsOmit<ExtArgs> | null
    /**
     * The data used to create many PostCommentReactions.
     */
    data: PostCommentReactionsCreateManyInput | PostCommentReactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentReactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostCommentReactions update
   */
  export type PostCommentReactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentReactions
     */
    select?: PostCommentReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentReactions
     */
    omit?: PostCommentReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentReactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a PostCommentReactions.
     */
    data: XOR<PostCommentReactionsUpdateInput, PostCommentReactionsUncheckedUpdateInput>
    /**
     * Choose, which PostCommentReactions to update.
     */
    where: PostCommentReactionsWhereUniqueInput
  }

  /**
   * PostCommentReactions updateMany
   */
  export type PostCommentReactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostCommentReactions.
     */
    data: XOR<PostCommentReactionsUpdateManyMutationInput, PostCommentReactionsUncheckedUpdateManyInput>
    /**
     * Filter which PostCommentReactions to update
     */
    where?: PostCommentReactionsWhereInput
    /**
     * Limit how many PostCommentReactions to update.
     */
    limit?: number
  }

  /**
   * PostCommentReactions updateManyAndReturn
   */
  export type PostCommentReactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentReactions
     */
    select?: PostCommentReactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentReactions
     */
    omit?: PostCommentReactionsOmit<ExtArgs> | null
    /**
     * The data used to update PostCommentReactions.
     */
    data: XOR<PostCommentReactionsUpdateManyMutationInput, PostCommentReactionsUncheckedUpdateManyInput>
    /**
     * Filter which PostCommentReactions to update
     */
    where?: PostCommentReactionsWhereInput
    /**
     * Limit how many PostCommentReactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentReactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostCommentReactions upsert
   */
  export type PostCommentReactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentReactions
     */
    select?: PostCommentReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentReactions
     */
    omit?: PostCommentReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentReactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the PostCommentReactions to update in case it exists.
     */
    where: PostCommentReactionsWhereUniqueInput
    /**
     * In case the PostCommentReactions found by the `where` argument doesn't exist, create a new PostCommentReactions with this data.
     */
    create: XOR<PostCommentReactionsCreateInput, PostCommentReactionsUncheckedCreateInput>
    /**
     * In case the PostCommentReactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostCommentReactionsUpdateInput, PostCommentReactionsUncheckedUpdateInput>
  }

  /**
   * PostCommentReactions delete
   */
  export type PostCommentReactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentReactions
     */
    select?: PostCommentReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentReactions
     */
    omit?: PostCommentReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentReactionsInclude<ExtArgs> | null
    /**
     * Filter which PostCommentReactions to delete.
     */
    where: PostCommentReactionsWhereUniqueInput
  }

  /**
   * PostCommentReactions deleteMany
   */
  export type PostCommentReactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostCommentReactions to delete
     */
    where?: PostCommentReactionsWhereInput
    /**
     * Limit how many PostCommentReactions to delete.
     */
    limit?: number
  }

  /**
   * PostCommentReactions without action
   */
  export type PostCommentReactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentReactions
     */
    select?: PostCommentReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentReactions
     */
    omit?: PostCommentReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentReactionsInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    channelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    channelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    title: number
    description: number
    channelId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlaylistMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    channelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    channelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    channelId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: string
    title: string
    description: string
    channelId: string
    createdAt: Date
    updatedAt: Date
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    channelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    playlistVideo?: boolean | Playlist$playlistVideoArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    channelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    channelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    channelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "channelId" | "createdAt" | "updatedAt", ExtArgs["result"]["playlist"]>
  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    playlistVideo?: boolean | Playlist$playlistVideoArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      channel: Prisma.$ChannelPayload<ExtArgs>
      playlistVideo: Prisma.$PlaylistVideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      channelId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {PlaylistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    playlistVideo<T extends Playlist$playlistVideoArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$playlistVideoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'String'>
    readonly title: FieldRef<"Playlist", 'String'>
    readonly description: FieldRef<"Playlist", 'String'>
    readonly channelId: FieldRef<"Playlist", 'String'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Playlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist updateManyAndReturn
   */
  export type PlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number
  }

  /**
   * Playlist.playlistVideo
   */
  export type Playlist$playlistVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistVideo
     */
    select?: PlaylistVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistVideo
     */
    omit?: PlaylistVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistVideoInclude<ExtArgs> | null
    where?: PlaylistVideoWhereInput
    orderBy?: PlaylistVideoOrderByWithRelationInput | PlaylistVideoOrderByWithRelationInput[]
    cursor?: PlaylistVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistVideoScalarFieldEnum | PlaylistVideoScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model PlaylistVideo
   */

  export type AggregatePlaylistVideo = {
    _count: PlaylistVideoCountAggregateOutputType | null
    _min: PlaylistVideoMinAggregateOutputType | null
    _max: PlaylistVideoMaxAggregateOutputType | null
  }

  export type PlaylistVideoMinAggregateOutputType = {
    id: string | null
    playlistId: string | null
    videoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistVideoMaxAggregateOutputType = {
    id: string | null
    playlistId: string | null
    videoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistVideoCountAggregateOutputType = {
    id: number
    playlistId: number
    videoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlaylistVideoMinAggregateInputType = {
    id?: true
    playlistId?: true
    videoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistVideoMaxAggregateInputType = {
    id?: true
    playlistId?: true
    videoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistVideoCountAggregateInputType = {
    id?: true
    playlistId?: true
    videoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaylistVideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistVideo to aggregate.
     */
    where?: PlaylistVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistVideos to fetch.
     */
    orderBy?: PlaylistVideoOrderByWithRelationInput | PlaylistVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaylistVideos
    **/
    _count?: true | PlaylistVideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistVideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistVideoMaxAggregateInputType
  }

  export type GetPlaylistVideoAggregateType<T extends PlaylistVideoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylistVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylistVideo[P]>
      : GetScalarType<T[P], AggregatePlaylistVideo[P]>
  }




  export type PlaylistVideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistVideoWhereInput
    orderBy?: PlaylistVideoOrderByWithAggregationInput | PlaylistVideoOrderByWithAggregationInput[]
    by: PlaylistVideoScalarFieldEnum[] | PlaylistVideoScalarFieldEnum
    having?: PlaylistVideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistVideoCountAggregateInputType | true
    _min?: PlaylistVideoMinAggregateInputType
    _max?: PlaylistVideoMaxAggregateInputType
  }

  export type PlaylistVideoGroupByOutputType = {
    id: string
    playlistId: string
    videoId: string
    createdAt: Date
    updatedAt: Date
    _count: PlaylistVideoCountAggregateOutputType | null
    _min: PlaylistVideoMinAggregateOutputType | null
    _max: PlaylistVideoMaxAggregateOutputType | null
  }

  type GetPlaylistVideoGroupByPayload<T extends PlaylistVideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistVideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistVideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistVideoGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistVideoGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistVideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    videoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistVideo"]>

  export type PlaylistVideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    videoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistVideo"]>

  export type PlaylistVideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    videoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistVideo"]>

  export type PlaylistVideoSelectScalar = {
    id?: boolean
    playlistId?: boolean
    videoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlaylistVideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playlistId" | "videoId" | "createdAt" | "updatedAt", ExtArgs["result"]["playlistVideo"]>
  export type PlaylistVideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }
  export type PlaylistVideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }
  export type PlaylistVideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }

  export type $PlaylistVideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaylistVideo"
    objects: {
      playlist: Prisma.$PlaylistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playlistId: string
      videoId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playlistVideo"]>
    composites: {}
  }

  type PlaylistVideoGetPayload<S extends boolean | null | undefined | PlaylistVideoDefaultArgs> = $Result.GetResult<Prisma.$PlaylistVideoPayload, S>

  type PlaylistVideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistVideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistVideoCountAggregateInputType | true
    }

  export interface PlaylistVideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaylistVideo'], meta: { name: 'PlaylistVideo' } }
    /**
     * Find zero or one PlaylistVideo that matches the filter.
     * @param {PlaylistVideoFindUniqueArgs} args - Arguments to find a PlaylistVideo
     * @example
     * // Get one PlaylistVideo
     * const playlistVideo = await prisma.playlistVideo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistVideoFindUniqueArgs>(args: SelectSubset<T, PlaylistVideoFindUniqueArgs<ExtArgs>>): Prisma__PlaylistVideoClient<$Result.GetResult<Prisma.$PlaylistVideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlaylistVideo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistVideoFindUniqueOrThrowArgs} args - Arguments to find a PlaylistVideo
     * @example
     * // Get one PlaylistVideo
     * const playlistVideo = await prisma.playlistVideo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistVideoFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistVideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistVideoClient<$Result.GetResult<Prisma.$PlaylistVideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistVideo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistVideoFindFirstArgs} args - Arguments to find a PlaylistVideo
     * @example
     * // Get one PlaylistVideo
     * const playlistVideo = await prisma.playlistVideo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistVideoFindFirstArgs>(args?: SelectSubset<T, PlaylistVideoFindFirstArgs<ExtArgs>>): Prisma__PlaylistVideoClient<$Result.GetResult<Prisma.$PlaylistVideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistVideo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistVideoFindFirstOrThrowArgs} args - Arguments to find a PlaylistVideo
     * @example
     * // Get one PlaylistVideo
     * const playlistVideo = await prisma.playlistVideo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistVideoFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistVideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistVideoClient<$Result.GetResult<Prisma.$PlaylistVideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlaylistVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistVideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaylistVideos
     * const playlistVideos = await prisma.playlistVideo.findMany()
     * 
     * // Get first 10 PlaylistVideos
     * const playlistVideos = await prisma.playlistVideo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistVideoWithIdOnly = await prisma.playlistVideo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistVideoFindManyArgs>(args?: SelectSubset<T, PlaylistVideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlaylistVideo.
     * @param {PlaylistVideoCreateArgs} args - Arguments to create a PlaylistVideo.
     * @example
     * // Create one PlaylistVideo
     * const PlaylistVideo = await prisma.playlistVideo.create({
     *   data: {
     *     // ... data to create a PlaylistVideo
     *   }
     * })
     * 
     */
    create<T extends PlaylistVideoCreateArgs>(args: SelectSubset<T, PlaylistVideoCreateArgs<ExtArgs>>): Prisma__PlaylistVideoClient<$Result.GetResult<Prisma.$PlaylistVideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlaylistVideos.
     * @param {PlaylistVideoCreateManyArgs} args - Arguments to create many PlaylistVideos.
     * @example
     * // Create many PlaylistVideos
     * const playlistVideo = await prisma.playlistVideo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistVideoCreateManyArgs>(args?: SelectSubset<T, PlaylistVideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaylistVideos and returns the data saved in the database.
     * @param {PlaylistVideoCreateManyAndReturnArgs} args - Arguments to create many PlaylistVideos.
     * @example
     * // Create many PlaylistVideos
     * const playlistVideo = await prisma.playlistVideo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaylistVideos and only return the `id`
     * const playlistVideoWithIdOnly = await prisma.playlistVideo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistVideoCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistVideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistVideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlaylistVideo.
     * @param {PlaylistVideoDeleteArgs} args - Arguments to delete one PlaylistVideo.
     * @example
     * // Delete one PlaylistVideo
     * const PlaylistVideo = await prisma.playlistVideo.delete({
     *   where: {
     *     // ... filter to delete one PlaylistVideo
     *   }
     * })
     * 
     */
    delete<T extends PlaylistVideoDeleteArgs>(args: SelectSubset<T, PlaylistVideoDeleteArgs<ExtArgs>>): Prisma__PlaylistVideoClient<$Result.GetResult<Prisma.$PlaylistVideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlaylistVideo.
     * @param {PlaylistVideoUpdateArgs} args - Arguments to update one PlaylistVideo.
     * @example
     * // Update one PlaylistVideo
     * const playlistVideo = await prisma.playlistVideo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistVideoUpdateArgs>(args: SelectSubset<T, PlaylistVideoUpdateArgs<ExtArgs>>): Prisma__PlaylistVideoClient<$Result.GetResult<Prisma.$PlaylistVideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlaylistVideos.
     * @param {PlaylistVideoDeleteManyArgs} args - Arguments to filter PlaylistVideos to delete.
     * @example
     * // Delete a few PlaylistVideos
     * const { count } = await prisma.playlistVideo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistVideoDeleteManyArgs>(args?: SelectSubset<T, PlaylistVideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistVideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaylistVideos
     * const playlistVideo = await prisma.playlistVideo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistVideoUpdateManyArgs>(args: SelectSubset<T, PlaylistVideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistVideos and returns the data updated in the database.
     * @param {PlaylistVideoUpdateManyAndReturnArgs} args - Arguments to update many PlaylistVideos.
     * @example
     * // Update many PlaylistVideos
     * const playlistVideo = await prisma.playlistVideo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlaylistVideos and only return the `id`
     * const playlistVideoWithIdOnly = await prisma.playlistVideo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaylistVideoUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistVideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistVideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlaylistVideo.
     * @param {PlaylistVideoUpsertArgs} args - Arguments to update or create a PlaylistVideo.
     * @example
     * // Update or create a PlaylistVideo
     * const playlistVideo = await prisma.playlistVideo.upsert({
     *   create: {
     *     // ... data to create a PlaylistVideo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaylistVideo we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistVideoUpsertArgs>(args: SelectSubset<T, PlaylistVideoUpsertArgs<ExtArgs>>): Prisma__PlaylistVideoClient<$Result.GetResult<Prisma.$PlaylistVideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlaylistVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistVideoCountArgs} args - Arguments to filter PlaylistVideos to count.
     * @example
     * // Count the number of PlaylistVideos
     * const count = await prisma.playlistVideo.count({
     *   where: {
     *     // ... the filter for the PlaylistVideos we want to count
     *   }
     * })
    **/
    count<T extends PlaylistVideoCountArgs>(
      args?: Subset<T, PlaylistVideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistVideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaylistVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistVideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistVideoAggregateArgs>(args: Subset<T, PlaylistVideoAggregateArgs>): Prisma.PrismaPromise<GetPlaylistVideoAggregateType<T>>

    /**
     * Group by PlaylistVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistVideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistVideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistVideoGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistVideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistVideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaylistVideo model
   */
  readonly fields: PlaylistVideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaylistVideo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistVideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlaylistVideo model
   */
  interface PlaylistVideoFieldRefs {
    readonly id: FieldRef<"PlaylistVideo", 'String'>
    readonly playlistId: FieldRef<"PlaylistVideo", 'String'>
    readonly videoId: FieldRef<"PlaylistVideo", 'String'>
    readonly createdAt: FieldRef<"PlaylistVideo", 'DateTime'>
    readonly updatedAt: FieldRef<"PlaylistVideo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlaylistVideo findUnique
   */
  export type PlaylistVideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistVideo
     */
    select?: PlaylistVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistVideo
     */
    omit?: PlaylistVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistVideoInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistVideo to fetch.
     */
    where: PlaylistVideoWhereUniqueInput
  }

  /**
   * PlaylistVideo findUniqueOrThrow
   */
  export type PlaylistVideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistVideo
     */
    select?: PlaylistVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistVideo
     */
    omit?: PlaylistVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistVideoInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistVideo to fetch.
     */
    where: PlaylistVideoWhereUniqueInput
  }

  /**
   * PlaylistVideo findFirst
   */
  export type PlaylistVideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistVideo
     */
    select?: PlaylistVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistVideo
     */
    omit?: PlaylistVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistVideoInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistVideo to fetch.
     */
    where?: PlaylistVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistVideos to fetch.
     */
    orderBy?: PlaylistVideoOrderByWithRelationInput | PlaylistVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistVideos.
     */
    cursor?: PlaylistVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistVideos.
     */
    distinct?: PlaylistVideoScalarFieldEnum | PlaylistVideoScalarFieldEnum[]
  }

  /**
   * PlaylistVideo findFirstOrThrow
   */
  export type PlaylistVideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistVideo
     */
    select?: PlaylistVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistVideo
     */
    omit?: PlaylistVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistVideoInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistVideo to fetch.
     */
    where?: PlaylistVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistVideos to fetch.
     */
    orderBy?: PlaylistVideoOrderByWithRelationInput | PlaylistVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistVideos.
     */
    cursor?: PlaylistVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistVideos.
     */
    distinct?: PlaylistVideoScalarFieldEnum | PlaylistVideoScalarFieldEnum[]
  }

  /**
   * PlaylistVideo findMany
   */
  export type PlaylistVideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistVideo
     */
    select?: PlaylistVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistVideo
     */
    omit?: PlaylistVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistVideoInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistVideos to fetch.
     */
    where?: PlaylistVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistVideos to fetch.
     */
    orderBy?: PlaylistVideoOrderByWithRelationInput | PlaylistVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaylistVideos.
     */
    cursor?: PlaylistVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistVideos.
     */
    skip?: number
    distinct?: PlaylistVideoScalarFieldEnum | PlaylistVideoScalarFieldEnum[]
  }

  /**
   * PlaylistVideo create
   */
  export type PlaylistVideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistVideo
     */
    select?: PlaylistVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistVideo
     */
    omit?: PlaylistVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistVideoInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaylistVideo.
     */
    data: XOR<PlaylistVideoCreateInput, PlaylistVideoUncheckedCreateInput>
  }

  /**
   * PlaylistVideo createMany
   */
  export type PlaylistVideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaylistVideos.
     */
    data: PlaylistVideoCreateManyInput | PlaylistVideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaylistVideo createManyAndReturn
   */
  export type PlaylistVideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistVideo
     */
    select?: PlaylistVideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistVideo
     */
    omit?: PlaylistVideoOmit<ExtArgs> | null
    /**
     * The data used to create many PlaylistVideos.
     */
    data: PlaylistVideoCreateManyInput | PlaylistVideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistVideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistVideo update
   */
  export type PlaylistVideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistVideo
     */
    select?: PlaylistVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistVideo
     */
    omit?: PlaylistVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistVideoInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaylistVideo.
     */
    data: XOR<PlaylistVideoUpdateInput, PlaylistVideoUncheckedUpdateInput>
    /**
     * Choose, which PlaylistVideo to update.
     */
    where: PlaylistVideoWhereUniqueInput
  }

  /**
   * PlaylistVideo updateMany
   */
  export type PlaylistVideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaylistVideos.
     */
    data: XOR<PlaylistVideoUpdateManyMutationInput, PlaylistVideoUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistVideos to update
     */
    where?: PlaylistVideoWhereInput
    /**
     * Limit how many PlaylistVideos to update.
     */
    limit?: number
  }

  /**
   * PlaylistVideo updateManyAndReturn
   */
  export type PlaylistVideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistVideo
     */
    select?: PlaylistVideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistVideo
     */
    omit?: PlaylistVideoOmit<ExtArgs> | null
    /**
     * The data used to update PlaylistVideos.
     */
    data: XOR<PlaylistVideoUpdateManyMutationInput, PlaylistVideoUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistVideos to update
     */
    where?: PlaylistVideoWhereInput
    /**
     * Limit how many PlaylistVideos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistVideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistVideo upsert
   */
  export type PlaylistVideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistVideo
     */
    select?: PlaylistVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistVideo
     */
    omit?: PlaylistVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistVideoInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaylistVideo to update in case it exists.
     */
    where: PlaylistVideoWhereUniqueInput
    /**
     * In case the PlaylistVideo found by the `where` argument doesn't exist, create a new PlaylistVideo with this data.
     */
    create: XOR<PlaylistVideoCreateInput, PlaylistVideoUncheckedCreateInput>
    /**
     * In case the PlaylistVideo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistVideoUpdateInput, PlaylistVideoUncheckedUpdateInput>
  }

  /**
   * PlaylistVideo delete
   */
  export type PlaylistVideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistVideo
     */
    select?: PlaylistVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistVideo
     */
    omit?: PlaylistVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistVideoInclude<ExtArgs> | null
    /**
     * Filter which PlaylistVideo to delete.
     */
    where: PlaylistVideoWhereUniqueInput
  }

  /**
   * PlaylistVideo deleteMany
   */
  export type PlaylistVideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistVideos to delete
     */
    where?: PlaylistVideoWhereInput
    /**
     * Limit how many PlaylistVideos to delete.
     */
    limit?: number
  }

  /**
   * PlaylistVideo without action
   */
  export type PlaylistVideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistVideo
     */
    select?: PlaylistVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistVideo
     */
    omit?: PlaylistVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistVideoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChannelScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    handle: 'handle',
    bio: 'bio',
    profilePicture: 'profilePicture',
    backgroundPicture: 'backgroundPicture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChannelScalarFieldEnum = (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum]


  export const SubscriptionsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    channelId: 'channelId',
    subscribeType: 'subscribeType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionsScalarFieldEnum = (typeof SubscriptionsScalarFieldEnum)[keyof typeof SubscriptionsScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    picture: 'picture',
    channelId: 'channelId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostLikesScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    channelId: 'channelId',
    reaction: 'reaction',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostLikesScalarFieldEnum = (typeof PostLikesScalarFieldEnum)[keyof typeof PostLikesScalarFieldEnum]


  export const PostCommentsScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    channelId: 'channelId',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostCommentsScalarFieldEnum = (typeof PostCommentsScalarFieldEnum)[keyof typeof PostCommentsScalarFieldEnum]


  export const PostCommentReactionsScalarFieldEnum: {
    id: 'id',
    commentId: 'commentId',
    channelId: 'channelId',
    reaction: 'reaction',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostCommentReactionsScalarFieldEnum = (typeof PostCommentReactionsScalarFieldEnum)[keyof typeof PostCommentReactionsScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    channelId: 'channelId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const PlaylistVideoScalarFieldEnum: {
    id: 'id',
    playlistId: 'playlistId',
    videoId: 'videoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlaylistVideoScalarFieldEnum = (typeof PlaylistVideoScalarFieldEnum)[keyof typeof PlaylistVideoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SubscribeType'
   */
  export type EnumSubscribeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscribeType'>
    


  /**
   * Reference to a field of type 'SubscribeType[]'
   */
  export type ListEnumSubscribeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscribeType[]'>
    


  /**
   * Reference to a field of type 'ReactionValue'
   */
  export type EnumReactionValueFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReactionValue'>
    


  /**
   * Reference to a field of type 'ReactionValue[]'
   */
  export type ListEnumReactionValueFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReactionValue[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ChannelWhereInput = {
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    id?: StringFilter<"Channel"> | string
    userId?: StringFilter<"Channel"> | string
    name?: StringFilter<"Channel"> | string
    handle?: StringFilter<"Channel"> | string
    bio?: StringFilter<"Channel"> | string
    profilePicture?: StringFilter<"Channel"> | string
    backgroundPicture?: StringFilter<"Channel"> | string
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    posts?: PostListRelationFilter
    subcriptions?: SubscriptionsListRelationFilter
    playlist?: PlaylistListRelationFilter
    postComments?: PostCommentsListRelationFilter
    postCommentReactions?: PostCommentReactionsListRelationFilter
  }

  export type ChannelOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    handle?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    backgroundPicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    subcriptions?: SubscriptionsOrderByRelationAggregateInput
    playlist?: PlaylistOrderByRelationAggregateInput
    postComments?: PostCommentsOrderByRelationAggregateInput
    postCommentReactions?: PostCommentReactionsOrderByRelationAggregateInput
  }

  export type ChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    handle?: string
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    name?: StringFilter<"Channel"> | string
    bio?: StringFilter<"Channel"> | string
    profilePicture?: StringFilter<"Channel"> | string
    backgroundPicture?: StringFilter<"Channel"> | string
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    posts?: PostListRelationFilter
    subcriptions?: SubscriptionsListRelationFilter
    playlist?: PlaylistListRelationFilter
    postComments?: PostCommentsListRelationFilter
    postCommentReactions?: PostCommentReactionsListRelationFilter
  }, "id" | "userId" | "handle">

  export type ChannelOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    handle?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    backgroundPicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChannelCountOrderByAggregateInput
    _max?: ChannelMaxOrderByAggregateInput
    _min?: ChannelMinOrderByAggregateInput
  }

  export type ChannelScalarWhereWithAggregatesInput = {
    AND?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    OR?: ChannelScalarWhereWithAggregatesInput[]
    NOT?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Channel"> | string
    userId?: StringWithAggregatesFilter<"Channel"> | string
    name?: StringWithAggregatesFilter<"Channel"> | string
    handle?: StringWithAggregatesFilter<"Channel"> | string
    bio?: StringWithAggregatesFilter<"Channel"> | string
    profilePicture?: StringWithAggregatesFilter<"Channel"> | string
    backgroundPicture?: StringWithAggregatesFilter<"Channel"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
  }

  export type SubscriptionsWhereInput = {
    AND?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    OR?: SubscriptionsWhereInput[]
    NOT?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    id?: StringFilter<"Subscriptions"> | string
    userId?: StringFilter<"Subscriptions"> | string
    channelId?: StringFilter<"Subscriptions"> | string
    subscribeType?: EnumSubscribeTypeFilter<"Subscriptions"> | $Enums.SubscribeType
    createdAt?: DateTimeFilter<"Subscriptions"> | Date | string
    updatedAt?: DateTimeFilter<"Subscriptions"> | Date | string
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }

  export type SubscriptionsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    subscribeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    channel?: ChannelOrderByWithRelationInput
  }

  export type SubscriptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_channelId?: SubscriptionsUserIdChannelIdCompoundUniqueInput
    AND?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    OR?: SubscriptionsWhereInput[]
    NOT?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    userId?: StringFilter<"Subscriptions"> | string
    channelId?: StringFilter<"Subscriptions"> | string
    subscribeType?: EnumSubscribeTypeFilter<"Subscriptions"> | $Enums.SubscribeType
    createdAt?: DateTimeFilter<"Subscriptions"> | Date | string
    updatedAt?: DateTimeFilter<"Subscriptions"> | Date | string
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }, "id" | "userId_channelId">

  export type SubscriptionsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    subscribeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionsCountOrderByAggregateInput
    _max?: SubscriptionsMaxOrderByAggregateInput
    _min?: SubscriptionsMinOrderByAggregateInput
  }

  export type SubscriptionsScalarWhereWithAggregatesInput = {
    AND?: SubscriptionsScalarWhereWithAggregatesInput | SubscriptionsScalarWhereWithAggregatesInput[]
    OR?: SubscriptionsScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionsScalarWhereWithAggregatesInput | SubscriptionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscriptions"> | string
    userId?: StringWithAggregatesFilter<"Subscriptions"> | string
    channelId?: StringWithAggregatesFilter<"Subscriptions"> | string
    subscribeType?: EnumSubscribeTypeWithAggregatesFilter<"Subscriptions"> | $Enums.SubscribeType
    createdAt?: DateTimeWithAggregatesFilter<"Subscriptions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscriptions"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    description?: StringFilter<"Post"> | string
    picture?: StringFilter<"Post"> | string
    channelId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    postLikes?: PostLikesListRelationFilter
    postComments?: PostCommentsListRelationFilter
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    picture?: SortOrder
    channelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postLikes?: PostLikesOrderByRelationAggregateInput
    postComments?: PostCommentsOrderByRelationAggregateInput
    channel?: ChannelOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    description?: StringFilter<"Post"> | string
    picture?: StringFilter<"Post"> | string
    channelId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    postLikes?: PostLikesListRelationFilter
    postComments?: PostCommentsListRelationFilter
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    picture?: SortOrder
    channelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    description?: StringWithAggregatesFilter<"Post"> | string
    picture?: StringWithAggregatesFilter<"Post"> | string
    channelId?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type PostLikesWhereInput = {
    AND?: PostLikesWhereInput | PostLikesWhereInput[]
    OR?: PostLikesWhereInput[]
    NOT?: PostLikesWhereInput | PostLikesWhereInput[]
    id?: StringFilter<"PostLikes"> | string
    postId?: StringFilter<"PostLikes"> | string
    channelId?: StringFilter<"PostLikes"> | string
    reaction?: EnumReactionValueFilter<"PostLikes"> | $Enums.ReactionValue
    createdAt?: DateTimeFilter<"PostLikes"> | Date | string
    updatedAt?: DateTimeFilter<"PostLikes"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostLikesOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    channelId?: SortOrder
    reaction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type PostLikesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId_channelId?: PostLikesPostIdChannelIdCompoundUniqueInput
    AND?: PostLikesWhereInput | PostLikesWhereInput[]
    OR?: PostLikesWhereInput[]
    NOT?: PostLikesWhereInput | PostLikesWhereInput[]
    postId?: StringFilter<"PostLikes"> | string
    channelId?: StringFilter<"PostLikes"> | string
    reaction?: EnumReactionValueFilter<"PostLikes"> | $Enums.ReactionValue
    createdAt?: DateTimeFilter<"PostLikes"> | Date | string
    updatedAt?: DateTimeFilter<"PostLikes"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "postId_channelId">

  export type PostLikesOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    channelId?: SortOrder
    reaction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostLikesCountOrderByAggregateInput
    _max?: PostLikesMaxOrderByAggregateInput
    _min?: PostLikesMinOrderByAggregateInput
  }

  export type PostLikesScalarWhereWithAggregatesInput = {
    AND?: PostLikesScalarWhereWithAggregatesInput | PostLikesScalarWhereWithAggregatesInput[]
    OR?: PostLikesScalarWhereWithAggregatesInput[]
    NOT?: PostLikesScalarWhereWithAggregatesInput | PostLikesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostLikes"> | string
    postId?: StringWithAggregatesFilter<"PostLikes"> | string
    channelId?: StringWithAggregatesFilter<"PostLikes"> | string
    reaction?: EnumReactionValueWithAggregatesFilter<"PostLikes"> | $Enums.ReactionValue
    createdAt?: DateTimeWithAggregatesFilter<"PostLikes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostLikes"> | Date | string
  }

  export type PostCommentsWhereInput = {
    AND?: PostCommentsWhereInput | PostCommentsWhereInput[]
    OR?: PostCommentsWhereInput[]
    NOT?: PostCommentsWhereInput | PostCommentsWhereInput[]
    id?: StringFilter<"PostComments"> | string
    postId?: StringFilter<"PostComments"> | string
    channelId?: StringFilter<"PostComments"> | string
    text?: StringFilter<"PostComments"> | string
    createdAt?: DateTimeFilter<"PostComments"> | Date | string
    updatedAt?: DateTimeFilter<"PostComments"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
    postCommentReactions?: PostCommentReactionsListRelationFilter
  }

  export type PostCommentsOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    channelId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
    channel?: ChannelOrderByWithRelationInput
    postCommentReactions?: PostCommentReactionsOrderByRelationAggregateInput
  }

  export type PostCommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId_channelId?: PostCommentsPostIdChannelIdCompoundUniqueInput
    AND?: PostCommentsWhereInput | PostCommentsWhereInput[]
    OR?: PostCommentsWhereInput[]
    NOT?: PostCommentsWhereInput | PostCommentsWhereInput[]
    postId?: StringFilter<"PostComments"> | string
    channelId?: StringFilter<"PostComments"> | string
    text?: StringFilter<"PostComments"> | string
    createdAt?: DateTimeFilter<"PostComments"> | Date | string
    updatedAt?: DateTimeFilter<"PostComments"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
    postCommentReactions?: PostCommentReactionsListRelationFilter
  }, "id" | "postId_channelId">

  export type PostCommentsOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    channelId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCommentsCountOrderByAggregateInput
    _max?: PostCommentsMaxOrderByAggregateInput
    _min?: PostCommentsMinOrderByAggregateInput
  }

  export type PostCommentsScalarWhereWithAggregatesInput = {
    AND?: PostCommentsScalarWhereWithAggregatesInput | PostCommentsScalarWhereWithAggregatesInput[]
    OR?: PostCommentsScalarWhereWithAggregatesInput[]
    NOT?: PostCommentsScalarWhereWithAggregatesInput | PostCommentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostComments"> | string
    postId?: StringWithAggregatesFilter<"PostComments"> | string
    channelId?: StringWithAggregatesFilter<"PostComments"> | string
    text?: StringWithAggregatesFilter<"PostComments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostComments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostComments"> | Date | string
  }

  export type PostCommentReactionsWhereInput = {
    AND?: PostCommentReactionsWhereInput | PostCommentReactionsWhereInput[]
    OR?: PostCommentReactionsWhereInput[]
    NOT?: PostCommentReactionsWhereInput | PostCommentReactionsWhereInput[]
    id?: StringFilter<"PostCommentReactions"> | string
    commentId?: StringFilter<"PostCommentReactions"> | string
    channelId?: StringFilter<"PostCommentReactions"> | string
    reaction?: EnumReactionValueFilter<"PostCommentReactions"> | $Enums.ReactionValue
    createdAt?: DateTimeFilter<"PostCommentReactions"> | Date | string
    updatedAt?: DateTimeFilter<"PostCommentReactions"> | Date | string
    postComments?: XOR<PostCommentsScalarRelationFilter, PostCommentsWhereInput>
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }

  export type PostCommentReactionsOrderByWithRelationInput = {
    id?: SortOrder
    commentId?: SortOrder
    channelId?: SortOrder
    reaction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postComments?: PostCommentsOrderByWithRelationInput
    channel?: ChannelOrderByWithRelationInput
  }

  export type PostCommentReactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    commentId_channelId?: PostCommentReactionsCommentIdChannelIdCompoundUniqueInput
    AND?: PostCommentReactionsWhereInput | PostCommentReactionsWhereInput[]
    OR?: PostCommentReactionsWhereInput[]
    NOT?: PostCommentReactionsWhereInput | PostCommentReactionsWhereInput[]
    commentId?: StringFilter<"PostCommentReactions"> | string
    channelId?: StringFilter<"PostCommentReactions"> | string
    reaction?: EnumReactionValueFilter<"PostCommentReactions"> | $Enums.ReactionValue
    createdAt?: DateTimeFilter<"PostCommentReactions"> | Date | string
    updatedAt?: DateTimeFilter<"PostCommentReactions"> | Date | string
    postComments?: XOR<PostCommentsScalarRelationFilter, PostCommentsWhereInput>
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }, "id" | "commentId_channelId">

  export type PostCommentReactionsOrderByWithAggregationInput = {
    id?: SortOrder
    commentId?: SortOrder
    channelId?: SortOrder
    reaction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCommentReactionsCountOrderByAggregateInput
    _max?: PostCommentReactionsMaxOrderByAggregateInput
    _min?: PostCommentReactionsMinOrderByAggregateInput
  }

  export type PostCommentReactionsScalarWhereWithAggregatesInput = {
    AND?: PostCommentReactionsScalarWhereWithAggregatesInput | PostCommentReactionsScalarWhereWithAggregatesInput[]
    OR?: PostCommentReactionsScalarWhereWithAggregatesInput[]
    NOT?: PostCommentReactionsScalarWhereWithAggregatesInput | PostCommentReactionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostCommentReactions"> | string
    commentId?: StringWithAggregatesFilter<"PostCommentReactions"> | string
    channelId?: StringWithAggregatesFilter<"PostCommentReactions"> | string
    reaction?: EnumReactionValueWithAggregatesFilter<"PostCommentReactions"> | $Enums.ReactionValue
    createdAt?: DateTimeWithAggregatesFilter<"PostCommentReactions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostCommentReactions"> | Date | string
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: StringFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    description?: StringFilter<"Playlist"> | string
    channelId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
    playlistVideo?: PlaylistVideoListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    channelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    channel?: ChannelOrderByWithRelationInput
    playlistVideo?: PlaylistVideoOrderByRelationAggregateInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    title?: StringFilter<"Playlist"> | string
    description?: StringFilter<"Playlist"> | string
    channelId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
    playlistVideo?: PlaylistVideoListRelationFilter
  }, "id">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    channelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Playlist"> | string
    title?: StringWithAggregatesFilter<"Playlist"> | string
    description?: StringWithAggregatesFilter<"Playlist"> | string
    channelId?: StringWithAggregatesFilter<"Playlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
  }

  export type PlaylistVideoWhereInput = {
    AND?: PlaylistVideoWhereInput | PlaylistVideoWhereInput[]
    OR?: PlaylistVideoWhereInput[]
    NOT?: PlaylistVideoWhereInput | PlaylistVideoWhereInput[]
    id?: StringFilter<"PlaylistVideo"> | string
    playlistId?: StringFilter<"PlaylistVideo"> | string
    videoId?: StringFilter<"PlaylistVideo"> | string
    createdAt?: DateTimeFilter<"PlaylistVideo"> | Date | string
    updatedAt?: DateTimeFilter<"PlaylistVideo"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
  }

  export type PlaylistVideoOrderByWithRelationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlist?: PlaylistOrderByWithRelationInput
  }

  export type PlaylistVideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaylistVideoWhereInput | PlaylistVideoWhereInput[]
    OR?: PlaylistVideoWhereInput[]
    NOT?: PlaylistVideoWhereInput | PlaylistVideoWhereInput[]
    playlistId?: StringFilter<"PlaylistVideo"> | string
    videoId?: StringFilter<"PlaylistVideo"> | string
    createdAt?: DateTimeFilter<"PlaylistVideo"> | Date | string
    updatedAt?: DateTimeFilter<"PlaylistVideo"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
  }, "id">

  export type PlaylistVideoOrderByWithAggregationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlaylistVideoCountOrderByAggregateInput
    _max?: PlaylistVideoMaxOrderByAggregateInput
    _min?: PlaylistVideoMinOrderByAggregateInput
  }

  export type PlaylistVideoScalarWhereWithAggregatesInput = {
    AND?: PlaylistVideoScalarWhereWithAggregatesInput | PlaylistVideoScalarWhereWithAggregatesInput[]
    OR?: PlaylistVideoScalarWhereWithAggregatesInput[]
    NOT?: PlaylistVideoScalarWhereWithAggregatesInput | PlaylistVideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlaylistVideo"> | string
    playlistId?: StringWithAggregatesFilter<"PlaylistVideo"> | string
    videoId?: StringWithAggregatesFilter<"PlaylistVideo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PlaylistVideo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlaylistVideo"> | Date | string
  }

  export type ChannelCreateInput = {
    id?: string
    userId: string
    name: string
    handle: string
    bio: string
    profilePicture: string
    backgroundPicture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutChannelInput
    subcriptions?: SubscriptionsCreateNestedManyWithoutChannelInput
    playlist?: PlaylistCreateNestedManyWithoutChannelInput
    postComments?: PostCommentsCreateNestedManyWithoutChannelInput
    postCommentReactions?: PostCommentReactionsCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    handle: string
    bio: string
    profilePicture: string
    backgroundPicture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutChannelInput
    subcriptions?: SubscriptionsUncheckedCreateNestedManyWithoutChannelInput
    playlist?: PlaylistUncheckedCreateNestedManyWithoutChannelInput
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutChannelInput
    postCommentReactions?: PostCommentReactionsUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    backgroundPicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutChannelNestedInput
    subcriptions?: SubscriptionsUpdateManyWithoutChannelNestedInput
    playlist?: PlaylistUpdateManyWithoutChannelNestedInput
    postComments?: PostCommentsUpdateManyWithoutChannelNestedInput
    postCommentReactions?: PostCommentReactionsUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    backgroundPicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutChannelNestedInput
    subcriptions?: SubscriptionsUncheckedUpdateManyWithoutChannelNestedInput
    playlist?: PlaylistUncheckedUpdateManyWithoutChannelNestedInput
    postComments?: PostCommentsUncheckedUpdateManyWithoutChannelNestedInput
    postCommentReactions?: PostCommentReactionsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelCreateManyInput = {
    id?: string
    userId: string
    name: string
    handle: string
    bio: string
    profilePicture: string
    backgroundPicture: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    backgroundPicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    backgroundPicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionsCreateInput = {
    id?: string
    userId: string
    subscribeType?: $Enums.SubscribeType
    createdAt?: Date | string
    updatedAt?: Date | string
    channel: ChannelCreateNestedOneWithoutSubcriptionsInput
  }

  export type SubscriptionsUncheckedCreateInput = {
    id?: string
    userId: string
    channelId: string
    subscribeType?: $Enums.SubscribeType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscribeType?: EnumSubscribeTypeFieldUpdateOperationsInput | $Enums.SubscribeType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutSubcriptionsNestedInput
  }

  export type SubscriptionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    subscribeType?: EnumSubscribeTypeFieldUpdateOperationsInput | $Enums.SubscribeType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionsCreateManyInput = {
    id?: string
    userId: string
    channelId: string
    subscribeType?: $Enums.SubscribeType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscribeType?: EnumSubscribeTypeFieldUpdateOperationsInput | $Enums.SubscribeType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    subscribeType?: EnumSubscribeTypeFieldUpdateOperationsInput | $Enums.SubscribeType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    description: string
    picture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postLikes?: PostLikesCreateNestedManyWithoutPostInput
    postComments?: PostCommentsCreateNestedManyWithoutPostInput
    channel: ChannelCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    picture: string
    channelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutPostInput
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postLikes?: PostLikesUpdateManyWithoutPostNestedInput
    postComments?: PostCommentsUpdateManyWithoutPostNestedInput
    channel?: ChannelUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postLikes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput
    postComments?: PostCommentsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    description: string
    picture: string
    channelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesCreateInput = {
    id?: string
    channelId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutPostLikesInput
  }

  export type PostLikesUncheckedCreateInput = {
    id?: string
    postId: string
    channelId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostLikesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostLikesNestedInput
  }

  export type PostLikesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesCreateManyInput = {
    id?: string
    postId: string
    channelId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostLikesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutPostCommentsInput
    channel: ChannelCreateNestedOneWithoutPostCommentsInput
    postCommentReactions?: PostCommentReactionsCreateNestedManyWithoutPostCommentsInput
  }

  export type PostCommentsUncheckedCreateInput = {
    id?: string
    postId: string
    channelId: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postCommentReactions?: PostCommentReactionsUncheckedCreateNestedManyWithoutPostCommentsInput
  }

  export type PostCommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostCommentsNestedInput
    channel?: ChannelUpdateOneRequiredWithoutPostCommentsNestedInput
    postCommentReactions?: PostCommentReactionsUpdateManyWithoutPostCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postCommentReactions?: PostCommentReactionsUncheckedUpdateManyWithoutPostCommentsNestedInput
  }

  export type PostCommentsCreateManyInput = {
    id?: string
    postId: string
    channelId: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentReactionsCreateInput = {
    id?: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
    postComments: PostCommentsCreateNestedOneWithoutPostCommentReactionsInput
    channel: ChannelCreateNestedOneWithoutPostCommentReactionsInput
  }

  export type PostCommentReactionsUncheckedCreateInput = {
    id?: string
    commentId: string
    channelId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentReactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postComments?: PostCommentsUpdateOneRequiredWithoutPostCommentReactionsNestedInput
    channel?: ChannelUpdateOneRequiredWithoutPostCommentReactionsNestedInput
  }

  export type PostCommentReactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentReactionsCreateManyInput = {
    id?: string
    commentId: string
    channelId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentReactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentReactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistCreateInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channel: ChannelCreateNestedOneWithoutPlaylistInput
    playlistVideo?: PlaylistVideoCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    channelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlistVideo?: PlaylistVideoUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutPlaylistNestedInput
    playlistVideo?: PlaylistVideoUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistVideo?: PlaylistVideoUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: string
    title: string
    description: string
    channelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistVideoCreateInput = {
    id?: string
    videoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutPlaylistVideoInput
  }

  export type PlaylistVideoUncheckedCreateInput = {
    id?: string
    playlistId: string
    videoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistVideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutPlaylistVideoNestedInput
  }

  export type PlaylistVideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistVideoCreateManyInput = {
    id?: string
    playlistId: string
    videoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistVideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistVideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SubscriptionsListRelationFilter = {
    every?: SubscriptionsWhereInput
    some?: SubscriptionsWhereInput
    none?: SubscriptionsWhereInput
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type PostCommentsListRelationFilter = {
    every?: PostCommentsWhereInput
    some?: PostCommentsWhereInput
    none?: PostCommentsWhereInput
  }

  export type PostCommentReactionsListRelationFilter = {
    every?: PostCommentReactionsWhereInput
    some?: PostCommentReactionsWhereInput
    none?: PostCommentReactionsWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCommentReactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChannelCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    handle?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    backgroundPicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    handle?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    backgroundPicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    handle?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    backgroundPicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSubscribeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscribeType | EnumSubscribeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscribeType[] | ListEnumSubscribeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscribeType[] | ListEnumSubscribeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscribeTypeFilter<$PrismaModel> | $Enums.SubscribeType
  }

  export type ChannelScalarRelationFilter = {
    is?: ChannelWhereInput
    isNot?: ChannelWhereInput
  }

  export type SubscriptionsUserIdChannelIdCompoundUniqueInput = {
    userId: string
    channelId: string
  }

  export type SubscriptionsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    subscribeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    subscribeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    subscribeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubscribeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscribeType | EnumSubscribeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscribeType[] | ListEnumSubscribeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscribeType[] | ListEnumSubscribeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscribeTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscribeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscribeTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscribeTypeFilter<$PrismaModel>
  }

  export type PostLikesListRelationFilter = {
    every?: PostLikesWhereInput
    some?: PostLikesWhereInput
    none?: PostLikesWhereInput
  }

  export type PostLikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    picture?: SortOrder
    channelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    picture?: SortOrder
    channelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    picture?: SortOrder
    channelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReactionValueFilter<$PrismaModel = never> = {
    equals?: $Enums.ReactionValue | EnumReactionValueFieldRefInput<$PrismaModel>
    in?: $Enums.ReactionValue[] | ListEnumReactionValueFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReactionValue[] | ListEnumReactionValueFieldRefInput<$PrismaModel>
    not?: NestedEnumReactionValueFilter<$PrismaModel> | $Enums.ReactionValue
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostLikesPostIdChannelIdCompoundUniqueInput = {
    postId: string
    channelId: string
  }

  export type PostLikesCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    channelId?: SortOrder
    reaction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostLikesMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    channelId?: SortOrder
    reaction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostLikesMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    channelId?: SortOrder
    reaction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReactionValueWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReactionValue | EnumReactionValueFieldRefInput<$PrismaModel>
    in?: $Enums.ReactionValue[] | ListEnumReactionValueFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReactionValue[] | ListEnumReactionValueFieldRefInput<$PrismaModel>
    not?: NestedEnumReactionValueWithAggregatesFilter<$PrismaModel> | $Enums.ReactionValue
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReactionValueFilter<$PrismaModel>
    _max?: NestedEnumReactionValueFilter<$PrismaModel>
  }

  export type PostCommentsPostIdChannelIdCompoundUniqueInput = {
    postId: string
    channelId: string
  }

  export type PostCommentsCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    channelId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    channelId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCommentsMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    channelId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCommentsScalarRelationFilter = {
    is?: PostCommentsWhereInput
    isNot?: PostCommentsWhereInput
  }

  export type PostCommentReactionsCommentIdChannelIdCompoundUniqueInput = {
    commentId: string
    channelId: string
  }

  export type PostCommentReactionsCountOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    channelId?: SortOrder
    reaction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCommentReactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    channelId?: SortOrder
    reaction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCommentReactionsMinOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    channelId?: SortOrder
    reaction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistVideoListRelationFilter = {
    every?: PlaylistVideoWhereInput
    some?: PlaylistVideoWhereInput
    none?: PlaylistVideoWhereInput
  }

  export type PlaylistVideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    channelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    channelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    channelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistScalarRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type PlaylistVideoCountOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistVideoMaxOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistVideoMinOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCreateNestedManyWithoutChannelInput = {
    create?: XOR<PostCreateWithoutChannelInput, PostUncheckedCreateWithoutChannelInput> | PostCreateWithoutChannelInput[] | PostUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostCreateOrConnectWithoutChannelInput | PostCreateOrConnectWithoutChannelInput[]
    createMany?: PostCreateManyChannelInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type SubscriptionsCreateNestedManyWithoutChannelInput = {
    create?: XOR<SubscriptionsCreateWithoutChannelInput, SubscriptionsUncheckedCreateWithoutChannelInput> | SubscriptionsCreateWithoutChannelInput[] | SubscriptionsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutChannelInput | SubscriptionsCreateOrConnectWithoutChannelInput[]
    createMany?: SubscriptionsCreateManyChannelInputEnvelope
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutChannelInput = {
    create?: XOR<PlaylistCreateWithoutChannelInput, PlaylistUncheckedCreateWithoutChannelInput> | PlaylistCreateWithoutChannelInput[] | PlaylistUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutChannelInput | PlaylistCreateOrConnectWithoutChannelInput[]
    createMany?: PlaylistCreateManyChannelInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type PostCommentsCreateNestedManyWithoutChannelInput = {
    create?: XOR<PostCommentsCreateWithoutChannelInput, PostCommentsUncheckedCreateWithoutChannelInput> | PostCommentsCreateWithoutChannelInput[] | PostCommentsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutChannelInput | PostCommentsCreateOrConnectWithoutChannelInput[]
    createMany?: PostCommentsCreateManyChannelInputEnvelope
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
  }

  export type PostCommentReactionsCreateNestedManyWithoutChannelInput = {
    create?: XOR<PostCommentReactionsCreateWithoutChannelInput, PostCommentReactionsUncheckedCreateWithoutChannelInput> | PostCommentReactionsCreateWithoutChannelInput[] | PostCommentReactionsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostCommentReactionsCreateOrConnectWithoutChannelInput | PostCommentReactionsCreateOrConnectWithoutChannelInput[]
    createMany?: PostCommentReactionsCreateManyChannelInputEnvelope
    connect?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<PostCreateWithoutChannelInput, PostUncheckedCreateWithoutChannelInput> | PostCreateWithoutChannelInput[] | PostUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostCreateOrConnectWithoutChannelInput | PostCreateOrConnectWithoutChannelInput[]
    createMany?: PostCreateManyChannelInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type SubscriptionsUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<SubscriptionsCreateWithoutChannelInput, SubscriptionsUncheckedCreateWithoutChannelInput> | SubscriptionsCreateWithoutChannelInput[] | SubscriptionsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutChannelInput | SubscriptionsCreateOrConnectWithoutChannelInput[]
    createMany?: SubscriptionsCreateManyChannelInputEnvelope
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<PlaylistCreateWithoutChannelInput, PlaylistUncheckedCreateWithoutChannelInput> | PlaylistCreateWithoutChannelInput[] | PlaylistUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutChannelInput | PlaylistCreateOrConnectWithoutChannelInput[]
    createMany?: PlaylistCreateManyChannelInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type PostCommentsUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<PostCommentsCreateWithoutChannelInput, PostCommentsUncheckedCreateWithoutChannelInput> | PostCommentsCreateWithoutChannelInput[] | PostCommentsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutChannelInput | PostCommentsCreateOrConnectWithoutChannelInput[]
    createMany?: PostCommentsCreateManyChannelInputEnvelope
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
  }

  export type PostCommentReactionsUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<PostCommentReactionsCreateWithoutChannelInput, PostCommentReactionsUncheckedCreateWithoutChannelInput> | PostCommentReactionsCreateWithoutChannelInput[] | PostCommentReactionsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostCommentReactionsCreateOrConnectWithoutChannelInput | PostCommentReactionsCreateOrConnectWithoutChannelInput[]
    createMany?: PostCommentReactionsCreateManyChannelInputEnvelope
    connect?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostUpdateManyWithoutChannelNestedInput = {
    create?: XOR<PostCreateWithoutChannelInput, PostUncheckedCreateWithoutChannelInput> | PostCreateWithoutChannelInput[] | PostUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostCreateOrConnectWithoutChannelInput | PostCreateOrConnectWithoutChannelInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutChannelInput | PostUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: PostCreateManyChannelInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutChannelInput | PostUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: PostUpdateManyWithWhereWithoutChannelInput | PostUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SubscriptionsUpdateManyWithoutChannelNestedInput = {
    create?: XOR<SubscriptionsCreateWithoutChannelInput, SubscriptionsUncheckedCreateWithoutChannelInput> | SubscriptionsCreateWithoutChannelInput[] | SubscriptionsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutChannelInput | SubscriptionsCreateOrConnectWithoutChannelInput[]
    upsert?: SubscriptionsUpsertWithWhereUniqueWithoutChannelInput | SubscriptionsUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: SubscriptionsCreateManyChannelInputEnvelope
    set?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    disconnect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    delete?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    update?: SubscriptionsUpdateWithWhereUniqueWithoutChannelInput | SubscriptionsUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: SubscriptionsUpdateManyWithWhereWithoutChannelInput | SubscriptionsUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutChannelNestedInput = {
    create?: XOR<PlaylistCreateWithoutChannelInput, PlaylistUncheckedCreateWithoutChannelInput> | PlaylistCreateWithoutChannelInput[] | PlaylistUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutChannelInput | PlaylistCreateOrConnectWithoutChannelInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutChannelInput | PlaylistUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: PlaylistCreateManyChannelInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutChannelInput | PlaylistUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutChannelInput | PlaylistUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type PostCommentsUpdateManyWithoutChannelNestedInput = {
    create?: XOR<PostCommentsCreateWithoutChannelInput, PostCommentsUncheckedCreateWithoutChannelInput> | PostCommentsCreateWithoutChannelInput[] | PostCommentsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutChannelInput | PostCommentsCreateOrConnectWithoutChannelInput[]
    upsert?: PostCommentsUpsertWithWhereUniqueWithoutChannelInput | PostCommentsUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: PostCommentsCreateManyChannelInputEnvelope
    set?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    disconnect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    delete?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    update?: PostCommentsUpdateWithWhereUniqueWithoutChannelInput | PostCommentsUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: PostCommentsUpdateManyWithWhereWithoutChannelInput | PostCommentsUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
  }

  export type PostCommentReactionsUpdateManyWithoutChannelNestedInput = {
    create?: XOR<PostCommentReactionsCreateWithoutChannelInput, PostCommentReactionsUncheckedCreateWithoutChannelInput> | PostCommentReactionsCreateWithoutChannelInput[] | PostCommentReactionsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostCommentReactionsCreateOrConnectWithoutChannelInput | PostCommentReactionsCreateOrConnectWithoutChannelInput[]
    upsert?: PostCommentReactionsUpsertWithWhereUniqueWithoutChannelInput | PostCommentReactionsUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: PostCommentReactionsCreateManyChannelInputEnvelope
    set?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    disconnect?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    delete?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    connect?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    update?: PostCommentReactionsUpdateWithWhereUniqueWithoutChannelInput | PostCommentReactionsUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: PostCommentReactionsUpdateManyWithWhereWithoutChannelInput | PostCommentReactionsUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: PostCommentReactionsScalarWhereInput | PostCommentReactionsScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<PostCreateWithoutChannelInput, PostUncheckedCreateWithoutChannelInput> | PostCreateWithoutChannelInput[] | PostUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostCreateOrConnectWithoutChannelInput | PostCreateOrConnectWithoutChannelInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutChannelInput | PostUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: PostCreateManyChannelInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutChannelInput | PostUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: PostUpdateManyWithWhereWithoutChannelInput | PostUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SubscriptionsUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<SubscriptionsCreateWithoutChannelInput, SubscriptionsUncheckedCreateWithoutChannelInput> | SubscriptionsCreateWithoutChannelInput[] | SubscriptionsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutChannelInput | SubscriptionsCreateOrConnectWithoutChannelInput[]
    upsert?: SubscriptionsUpsertWithWhereUniqueWithoutChannelInput | SubscriptionsUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: SubscriptionsCreateManyChannelInputEnvelope
    set?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    disconnect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    delete?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    update?: SubscriptionsUpdateWithWhereUniqueWithoutChannelInput | SubscriptionsUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: SubscriptionsUpdateManyWithWhereWithoutChannelInput | SubscriptionsUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<PlaylistCreateWithoutChannelInput, PlaylistUncheckedCreateWithoutChannelInput> | PlaylistCreateWithoutChannelInput[] | PlaylistUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutChannelInput | PlaylistCreateOrConnectWithoutChannelInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutChannelInput | PlaylistUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: PlaylistCreateManyChannelInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutChannelInput | PlaylistUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutChannelInput | PlaylistUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type PostCommentsUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<PostCommentsCreateWithoutChannelInput, PostCommentsUncheckedCreateWithoutChannelInput> | PostCommentsCreateWithoutChannelInput[] | PostCommentsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutChannelInput | PostCommentsCreateOrConnectWithoutChannelInput[]
    upsert?: PostCommentsUpsertWithWhereUniqueWithoutChannelInput | PostCommentsUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: PostCommentsCreateManyChannelInputEnvelope
    set?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    disconnect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    delete?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    update?: PostCommentsUpdateWithWhereUniqueWithoutChannelInput | PostCommentsUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: PostCommentsUpdateManyWithWhereWithoutChannelInput | PostCommentsUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
  }

  export type PostCommentReactionsUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<PostCommentReactionsCreateWithoutChannelInput, PostCommentReactionsUncheckedCreateWithoutChannelInput> | PostCommentReactionsCreateWithoutChannelInput[] | PostCommentReactionsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostCommentReactionsCreateOrConnectWithoutChannelInput | PostCommentReactionsCreateOrConnectWithoutChannelInput[]
    upsert?: PostCommentReactionsUpsertWithWhereUniqueWithoutChannelInput | PostCommentReactionsUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: PostCommentReactionsCreateManyChannelInputEnvelope
    set?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    disconnect?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    delete?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    connect?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    update?: PostCommentReactionsUpdateWithWhereUniqueWithoutChannelInput | PostCommentReactionsUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: PostCommentReactionsUpdateManyWithWhereWithoutChannelInput | PostCommentReactionsUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: PostCommentReactionsScalarWhereInput | PostCommentReactionsScalarWhereInput[]
  }

  export type ChannelCreateNestedOneWithoutSubcriptionsInput = {
    create?: XOR<ChannelCreateWithoutSubcriptionsInput, ChannelUncheckedCreateWithoutSubcriptionsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutSubcriptionsInput
    connect?: ChannelWhereUniqueInput
  }

  export type EnumSubscribeTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubscribeType
  }

  export type ChannelUpdateOneRequiredWithoutSubcriptionsNestedInput = {
    create?: XOR<ChannelCreateWithoutSubcriptionsInput, ChannelUncheckedCreateWithoutSubcriptionsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutSubcriptionsInput
    upsert?: ChannelUpsertWithoutSubcriptionsInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutSubcriptionsInput, ChannelUpdateWithoutSubcriptionsInput>, ChannelUncheckedUpdateWithoutSubcriptionsInput>
  }

  export type PostLikesCreateNestedManyWithoutPostInput = {
    create?: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput> | PostLikesCreateWithoutPostInput[] | PostLikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutPostInput | PostLikesCreateOrConnectWithoutPostInput[]
    createMany?: PostLikesCreateManyPostInputEnvelope
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
  }

  export type PostCommentsCreateNestedManyWithoutPostInput = {
    create?: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput> | PostCommentsCreateWithoutPostInput[] | PostCommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostInput | PostCommentsCreateOrConnectWithoutPostInput[]
    createMany?: PostCommentsCreateManyPostInputEnvelope
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
  }

  export type ChannelCreateNestedOneWithoutPostsInput = {
    create?: XOR<ChannelCreateWithoutPostsInput, ChannelUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutPostsInput
    connect?: ChannelWhereUniqueInput
  }

  export type PostLikesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput> | PostLikesCreateWithoutPostInput[] | PostLikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutPostInput | PostLikesCreateOrConnectWithoutPostInput[]
    createMany?: PostLikesCreateManyPostInputEnvelope
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
  }

  export type PostCommentsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput> | PostCommentsCreateWithoutPostInput[] | PostCommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostInput | PostCommentsCreateOrConnectWithoutPostInput[]
    createMany?: PostCommentsCreateManyPostInputEnvelope
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
  }

  export type PostLikesUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput> | PostLikesCreateWithoutPostInput[] | PostLikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutPostInput | PostLikesCreateOrConnectWithoutPostInput[]
    upsert?: PostLikesUpsertWithWhereUniqueWithoutPostInput | PostLikesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostLikesCreateManyPostInputEnvelope
    set?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    disconnect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    delete?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    update?: PostLikesUpdateWithWhereUniqueWithoutPostInput | PostLikesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostLikesUpdateManyWithWhereWithoutPostInput | PostLikesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
  }

  export type PostCommentsUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput> | PostCommentsCreateWithoutPostInput[] | PostCommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostInput | PostCommentsCreateOrConnectWithoutPostInput[]
    upsert?: PostCommentsUpsertWithWhereUniqueWithoutPostInput | PostCommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostCommentsCreateManyPostInputEnvelope
    set?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    disconnect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    delete?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    update?: PostCommentsUpdateWithWhereUniqueWithoutPostInput | PostCommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostCommentsUpdateManyWithWhereWithoutPostInput | PostCommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
  }

  export type ChannelUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<ChannelCreateWithoutPostsInput, ChannelUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutPostsInput
    upsert?: ChannelUpsertWithoutPostsInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutPostsInput, ChannelUpdateWithoutPostsInput>, ChannelUncheckedUpdateWithoutPostsInput>
  }

  export type PostLikesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput> | PostLikesCreateWithoutPostInput[] | PostLikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutPostInput | PostLikesCreateOrConnectWithoutPostInput[]
    upsert?: PostLikesUpsertWithWhereUniqueWithoutPostInput | PostLikesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostLikesCreateManyPostInputEnvelope
    set?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    disconnect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    delete?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    update?: PostLikesUpdateWithWhereUniqueWithoutPostInput | PostLikesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostLikesUpdateManyWithWhereWithoutPostInput | PostLikesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
  }

  export type PostCommentsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput> | PostCommentsCreateWithoutPostInput[] | PostCommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostInput | PostCommentsCreateOrConnectWithoutPostInput[]
    upsert?: PostCommentsUpsertWithWhereUniqueWithoutPostInput | PostCommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostCommentsCreateManyPostInputEnvelope
    set?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    disconnect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    delete?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    update?: PostCommentsUpdateWithWhereUniqueWithoutPostInput | PostCommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostCommentsUpdateManyWithWhereWithoutPostInput | PostCommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutPostLikesInput = {
    create?: XOR<PostCreateWithoutPostLikesInput, PostUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostLikesInput
    connect?: PostWhereUniqueInput
  }

  export type EnumReactionValueFieldUpdateOperationsInput = {
    set?: $Enums.ReactionValue
  }

  export type PostUpdateOneRequiredWithoutPostLikesNestedInput = {
    create?: XOR<PostCreateWithoutPostLikesInput, PostUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostLikesInput
    upsert?: PostUpsertWithoutPostLikesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostLikesInput, PostUpdateWithoutPostLikesInput>, PostUncheckedUpdateWithoutPostLikesInput>
  }

  export type PostCreateNestedOneWithoutPostCommentsInput = {
    create?: XOR<PostCreateWithoutPostCommentsInput, PostUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type ChannelCreateNestedOneWithoutPostCommentsInput = {
    create?: XOR<ChannelCreateWithoutPostCommentsInput, ChannelUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutPostCommentsInput
    connect?: ChannelWhereUniqueInput
  }

  export type PostCommentReactionsCreateNestedManyWithoutPostCommentsInput = {
    create?: XOR<PostCommentReactionsCreateWithoutPostCommentsInput, PostCommentReactionsUncheckedCreateWithoutPostCommentsInput> | PostCommentReactionsCreateWithoutPostCommentsInput[] | PostCommentReactionsUncheckedCreateWithoutPostCommentsInput[]
    connectOrCreate?: PostCommentReactionsCreateOrConnectWithoutPostCommentsInput | PostCommentReactionsCreateOrConnectWithoutPostCommentsInput[]
    createMany?: PostCommentReactionsCreateManyPostCommentsInputEnvelope
    connect?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
  }

  export type PostCommentReactionsUncheckedCreateNestedManyWithoutPostCommentsInput = {
    create?: XOR<PostCommentReactionsCreateWithoutPostCommentsInput, PostCommentReactionsUncheckedCreateWithoutPostCommentsInput> | PostCommentReactionsCreateWithoutPostCommentsInput[] | PostCommentReactionsUncheckedCreateWithoutPostCommentsInput[]
    connectOrCreate?: PostCommentReactionsCreateOrConnectWithoutPostCommentsInput | PostCommentReactionsCreateOrConnectWithoutPostCommentsInput[]
    createMany?: PostCommentReactionsCreateManyPostCommentsInputEnvelope
    connect?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
  }

  export type PostUpdateOneRequiredWithoutPostCommentsNestedInput = {
    create?: XOR<PostCreateWithoutPostCommentsInput, PostUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostCommentsInput
    upsert?: PostUpsertWithoutPostCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostCommentsInput, PostUpdateWithoutPostCommentsInput>, PostUncheckedUpdateWithoutPostCommentsInput>
  }

  export type ChannelUpdateOneRequiredWithoutPostCommentsNestedInput = {
    create?: XOR<ChannelCreateWithoutPostCommentsInput, ChannelUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutPostCommentsInput
    upsert?: ChannelUpsertWithoutPostCommentsInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutPostCommentsInput, ChannelUpdateWithoutPostCommentsInput>, ChannelUncheckedUpdateWithoutPostCommentsInput>
  }

  export type PostCommentReactionsUpdateManyWithoutPostCommentsNestedInput = {
    create?: XOR<PostCommentReactionsCreateWithoutPostCommentsInput, PostCommentReactionsUncheckedCreateWithoutPostCommentsInput> | PostCommentReactionsCreateWithoutPostCommentsInput[] | PostCommentReactionsUncheckedCreateWithoutPostCommentsInput[]
    connectOrCreate?: PostCommentReactionsCreateOrConnectWithoutPostCommentsInput | PostCommentReactionsCreateOrConnectWithoutPostCommentsInput[]
    upsert?: PostCommentReactionsUpsertWithWhereUniqueWithoutPostCommentsInput | PostCommentReactionsUpsertWithWhereUniqueWithoutPostCommentsInput[]
    createMany?: PostCommentReactionsCreateManyPostCommentsInputEnvelope
    set?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    disconnect?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    delete?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    connect?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    update?: PostCommentReactionsUpdateWithWhereUniqueWithoutPostCommentsInput | PostCommentReactionsUpdateWithWhereUniqueWithoutPostCommentsInput[]
    updateMany?: PostCommentReactionsUpdateManyWithWhereWithoutPostCommentsInput | PostCommentReactionsUpdateManyWithWhereWithoutPostCommentsInput[]
    deleteMany?: PostCommentReactionsScalarWhereInput | PostCommentReactionsScalarWhereInput[]
  }

  export type PostCommentReactionsUncheckedUpdateManyWithoutPostCommentsNestedInput = {
    create?: XOR<PostCommentReactionsCreateWithoutPostCommentsInput, PostCommentReactionsUncheckedCreateWithoutPostCommentsInput> | PostCommentReactionsCreateWithoutPostCommentsInput[] | PostCommentReactionsUncheckedCreateWithoutPostCommentsInput[]
    connectOrCreate?: PostCommentReactionsCreateOrConnectWithoutPostCommentsInput | PostCommentReactionsCreateOrConnectWithoutPostCommentsInput[]
    upsert?: PostCommentReactionsUpsertWithWhereUniqueWithoutPostCommentsInput | PostCommentReactionsUpsertWithWhereUniqueWithoutPostCommentsInput[]
    createMany?: PostCommentReactionsCreateManyPostCommentsInputEnvelope
    set?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    disconnect?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    delete?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    connect?: PostCommentReactionsWhereUniqueInput | PostCommentReactionsWhereUniqueInput[]
    update?: PostCommentReactionsUpdateWithWhereUniqueWithoutPostCommentsInput | PostCommentReactionsUpdateWithWhereUniqueWithoutPostCommentsInput[]
    updateMany?: PostCommentReactionsUpdateManyWithWhereWithoutPostCommentsInput | PostCommentReactionsUpdateManyWithWhereWithoutPostCommentsInput[]
    deleteMany?: PostCommentReactionsScalarWhereInput | PostCommentReactionsScalarWhereInput[]
  }

  export type PostCommentsCreateNestedOneWithoutPostCommentReactionsInput = {
    create?: XOR<PostCommentsCreateWithoutPostCommentReactionsInput, PostCommentsUncheckedCreateWithoutPostCommentReactionsInput>
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostCommentReactionsInput
    connect?: PostCommentsWhereUniqueInput
  }

  export type ChannelCreateNestedOneWithoutPostCommentReactionsInput = {
    create?: XOR<ChannelCreateWithoutPostCommentReactionsInput, ChannelUncheckedCreateWithoutPostCommentReactionsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutPostCommentReactionsInput
    connect?: ChannelWhereUniqueInput
  }

  export type PostCommentsUpdateOneRequiredWithoutPostCommentReactionsNestedInput = {
    create?: XOR<PostCommentsCreateWithoutPostCommentReactionsInput, PostCommentsUncheckedCreateWithoutPostCommentReactionsInput>
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostCommentReactionsInput
    upsert?: PostCommentsUpsertWithoutPostCommentReactionsInput
    connect?: PostCommentsWhereUniqueInput
    update?: XOR<XOR<PostCommentsUpdateToOneWithWhereWithoutPostCommentReactionsInput, PostCommentsUpdateWithoutPostCommentReactionsInput>, PostCommentsUncheckedUpdateWithoutPostCommentReactionsInput>
  }

  export type ChannelUpdateOneRequiredWithoutPostCommentReactionsNestedInput = {
    create?: XOR<ChannelCreateWithoutPostCommentReactionsInput, ChannelUncheckedCreateWithoutPostCommentReactionsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutPostCommentReactionsInput
    upsert?: ChannelUpsertWithoutPostCommentReactionsInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutPostCommentReactionsInput, ChannelUpdateWithoutPostCommentReactionsInput>, ChannelUncheckedUpdateWithoutPostCommentReactionsInput>
  }

  export type ChannelCreateNestedOneWithoutPlaylistInput = {
    create?: XOR<ChannelCreateWithoutPlaylistInput, ChannelUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutPlaylistInput
    connect?: ChannelWhereUniqueInput
  }

  export type PlaylistVideoCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistVideoCreateWithoutPlaylistInput, PlaylistVideoUncheckedCreateWithoutPlaylistInput> | PlaylistVideoCreateWithoutPlaylistInput[] | PlaylistVideoUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistVideoCreateOrConnectWithoutPlaylistInput | PlaylistVideoCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistVideoCreateManyPlaylistInputEnvelope
    connect?: PlaylistVideoWhereUniqueInput | PlaylistVideoWhereUniqueInput[]
  }

  export type PlaylistVideoUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistVideoCreateWithoutPlaylistInput, PlaylistVideoUncheckedCreateWithoutPlaylistInput> | PlaylistVideoCreateWithoutPlaylistInput[] | PlaylistVideoUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistVideoCreateOrConnectWithoutPlaylistInput | PlaylistVideoCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistVideoCreateManyPlaylistInputEnvelope
    connect?: PlaylistVideoWhereUniqueInput | PlaylistVideoWhereUniqueInput[]
  }

  export type ChannelUpdateOneRequiredWithoutPlaylistNestedInput = {
    create?: XOR<ChannelCreateWithoutPlaylistInput, ChannelUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutPlaylistInput
    upsert?: ChannelUpsertWithoutPlaylistInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutPlaylistInput, ChannelUpdateWithoutPlaylistInput>, ChannelUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlaylistVideoUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistVideoCreateWithoutPlaylistInput, PlaylistVideoUncheckedCreateWithoutPlaylistInput> | PlaylistVideoCreateWithoutPlaylistInput[] | PlaylistVideoUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistVideoCreateOrConnectWithoutPlaylistInput | PlaylistVideoCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistVideoUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistVideoUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistVideoCreateManyPlaylistInputEnvelope
    set?: PlaylistVideoWhereUniqueInput | PlaylistVideoWhereUniqueInput[]
    disconnect?: PlaylistVideoWhereUniqueInput | PlaylistVideoWhereUniqueInput[]
    delete?: PlaylistVideoWhereUniqueInput | PlaylistVideoWhereUniqueInput[]
    connect?: PlaylistVideoWhereUniqueInput | PlaylistVideoWhereUniqueInput[]
    update?: PlaylistVideoUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistVideoUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistVideoUpdateManyWithWhereWithoutPlaylistInput | PlaylistVideoUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistVideoScalarWhereInput | PlaylistVideoScalarWhereInput[]
  }

  export type PlaylistVideoUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistVideoCreateWithoutPlaylistInput, PlaylistVideoUncheckedCreateWithoutPlaylistInput> | PlaylistVideoCreateWithoutPlaylistInput[] | PlaylistVideoUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistVideoCreateOrConnectWithoutPlaylistInput | PlaylistVideoCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistVideoUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistVideoUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistVideoCreateManyPlaylistInputEnvelope
    set?: PlaylistVideoWhereUniqueInput | PlaylistVideoWhereUniqueInput[]
    disconnect?: PlaylistVideoWhereUniqueInput | PlaylistVideoWhereUniqueInput[]
    delete?: PlaylistVideoWhereUniqueInput | PlaylistVideoWhereUniqueInput[]
    connect?: PlaylistVideoWhereUniqueInput | PlaylistVideoWhereUniqueInput[]
    update?: PlaylistVideoUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistVideoUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistVideoUpdateManyWithWhereWithoutPlaylistInput | PlaylistVideoUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistVideoScalarWhereInput | PlaylistVideoScalarWhereInput[]
  }

  export type PlaylistCreateNestedOneWithoutPlaylistVideoInput = {
    create?: XOR<PlaylistCreateWithoutPlaylistVideoInput, PlaylistUncheckedCreateWithoutPlaylistVideoInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutPlaylistVideoInput
    connect?: PlaylistWhereUniqueInput
  }

  export type PlaylistUpdateOneRequiredWithoutPlaylistVideoNestedInput = {
    create?: XOR<PlaylistCreateWithoutPlaylistVideoInput, PlaylistUncheckedCreateWithoutPlaylistVideoInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutPlaylistVideoInput
    upsert?: PlaylistUpsertWithoutPlaylistVideoInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutPlaylistVideoInput, PlaylistUpdateWithoutPlaylistVideoInput>, PlaylistUncheckedUpdateWithoutPlaylistVideoInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSubscribeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscribeType | EnumSubscribeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscribeType[] | ListEnumSubscribeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscribeType[] | ListEnumSubscribeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscribeTypeFilter<$PrismaModel> | $Enums.SubscribeType
  }

  export type NestedEnumSubscribeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscribeType | EnumSubscribeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscribeType[] | ListEnumSubscribeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscribeType[] | ListEnumSubscribeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscribeTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscribeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscribeTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscribeTypeFilter<$PrismaModel>
  }

  export type NestedEnumReactionValueFilter<$PrismaModel = never> = {
    equals?: $Enums.ReactionValue | EnumReactionValueFieldRefInput<$PrismaModel>
    in?: $Enums.ReactionValue[] | ListEnumReactionValueFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReactionValue[] | ListEnumReactionValueFieldRefInput<$PrismaModel>
    not?: NestedEnumReactionValueFilter<$PrismaModel> | $Enums.ReactionValue
  }

  export type NestedEnumReactionValueWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReactionValue | EnumReactionValueFieldRefInput<$PrismaModel>
    in?: $Enums.ReactionValue[] | ListEnumReactionValueFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReactionValue[] | ListEnumReactionValueFieldRefInput<$PrismaModel>
    not?: NestedEnumReactionValueWithAggregatesFilter<$PrismaModel> | $Enums.ReactionValue
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReactionValueFilter<$PrismaModel>
    _max?: NestedEnumReactionValueFilter<$PrismaModel>
  }

  export type PostCreateWithoutChannelInput = {
    id?: string
    title: string
    description: string
    picture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postLikes?: PostLikesCreateNestedManyWithoutPostInput
    postComments?: PostCommentsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutChannelInput = {
    id?: string
    title: string
    description: string
    picture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutPostInput
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutChannelInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutChannelInput, PostUncheckedCreateWithoutChannelInput>
  }

  export type PostCreateManyChannelInputEnvelope = {
    data: PostCreateManyChannelInput | PostCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionsCreateWithoutChannelInput = {
    id?: string
    userId: string
    subscribeType?: $Enums.SubscribeType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionsUncheckedCreateWithoutChannelInput = {
    id?: string
    userId: string
    subscribeType?: $Enums.SubscribeType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionsCreateOrConnectWithoutChannelInput = {
    where: SubscriptionsWhereUniqueInput
    create: XOR<SubscriptionsCreateWithoutChannelInput, SubscriptionsUncheckedCreateWithoutChannelInput>
  }

  export type SubscriptionsCreateManyChannelInputEnvelope = {
    data: SubscriptionsCreateManyChannelInput | SubscriptionsCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistCreateWithoutChannelInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlistVideo?: PlaylistVideoCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutChannelInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlistVideo?: PlaylistVideoUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutChannelInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutChannelInput, PlaylistUncheckedCreateWithoutChannelInput>
  }

  export type PlaylistCreateManyChannelInputEnvelope = {
    data: PlaylistCreateManyChannelInput | PlaylistCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type PostCommentsCreateWithoutChannelInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutPostCommentsInput
    postCommentReactions?: PostCommentReactionsCreateNestedManyWithoutPostCommentsInput
  }

  export type PostCommentsUncheckedCreateWithoutChannelInput = {
    id?: string
    postId: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postCommentReactions?: PostCommentReactionsUncheckedCreateNestedManyWithoutPostCommentsInput
  }

  export type PostCommentsCreateOrConnectWithoutChannelInput = {
    where: PostCommentsWhereUniqueInput
    create: XOR<PostCommentsCreateWithoutChannelInput, PostCommentsUncheckedCreateWithoutChannelInput>
  }

  export type PostCommentsCreateManyChannelInputEnvelope = {
    data: PostCommentsCreateManyChannelInput | PostCommentsCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type PostCommentReactionsCreateWithoutChannelInput = {
    id?: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
    postComments: PostCommentsCreateNestedOneWithoutPostCommentReactionsInput
  }

  export type PostCommentReactionsUncheckedCreateWithoutChannelInput = {
    id?: string
    commentId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentReactionsCreateOrConnectWithoutChannelInput = {
    where: PostCommentReactionsWhereUniqueInput
    create: XOR<PostCommentReactionsCreateWithoutChannelInput, PostCommentReactionsUncheckedCreateWithoutChannelInput>
  }

  export type PostCommentReactionsCreateManyChannelInputEnvelope = {
    data: PostCommentReactionsCreateManyChannelInput | PostCommentReactionsCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutChannelInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutChannelInput, PostUncheckedUpdateWithoutChannelInput>
    create: XOR<PostCreateWithoutChannelInput, PostUncheckedCreateWithoutChannelInput>
  }

  export type PostUpdateWithWhereUniqueWithoutChannelInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutChannelInput, PostUncheckedUpdateWithoutChannelInput>
  }

  export type PostUpdateManyWithWhereWithoutChannelInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutChannelInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    description?: StringFilter<"Post"> | string
    picture?: StringFilter<"Post"> | string
    channelId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type SubscriptionsUpsertWithWhereUniqueWithoutChannelInput = {
    where: SubscriptionsWhereUniqueInput
    update: XOR<SubscriptionsUpdateWithoutChannelInput, SubscriptionsUncheckedUpdateWithoutChannelInput>
    create: XOR<SubscriptionsCreateWithoutChannelInput, SubscriptionsUncheckedCreateWithoutChannelInput>
  }

  export type SubscriptionsUpdateWithWhereUniqueWithoutChannelInput = {
    where: SubscriptionsWhereUniqueInput
    data: XOR<SubscriptionsUpdateWithoutChannelInput, SubscriptionsUncheckedUpdateWithoutChannelInput>
  }

  export type SubscriptionsUpdateManyWithWhereWithoutChannelInput = {
    where: SubscriptionsScalarWhereInput
    data: XOR<SubscriptionsUpdateManyMutationInput, SubscriptionsUncheckedUpdateManyWithoutChannelInput>
  }

  export type SubscriptionsScalarWhereInput = {
    AND?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
    OR?: SubscriptionsScalarWhereInput[]
    NOT?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
    id?: StringFilter<"Subscriptions"> | string
    userId?: StringFilter<"Subscriptions"> | string
    channelId?: StringFilter<"Subscriptions"> | string
    subscribeType?: EnumSubscribeTypeFilter<"Subscriptions"> | $Enums.SubscribeType
    createdAt?: DateTimeFilter<"Subscriptions"> | Date | string
    updatedAt?: DateTimeFilter<"Subscriptions"> | Date | string
  }

  export type PlaylistUpsertWithWhereUniqueWithoutChannelInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutChannelInput, PlaylistUncheckedUpdateWithoutChannelInput>
    create: XOR<PlaylistCreateWithoutChannelInput, PlaylistUncheckedCreateWithoutChannelInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutChannelInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutChannelInput, PlaylistUncheckedUpdateWithoutChannelInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutChannelInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutChannelInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: StringFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    description?: StringFilter<"Playlist"> | string
    channelId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
  }

  export type PostCommentsUpsertWithWhereUniqueWithoutChannelInput = {
    where: PostCommentsWhereUniqueInput
    update: XOR<PostCommentsUpdateWithoutChannelInput, PostCommentsUncheckedUpdateWithoutChannelInput>
    create: XOR<PostCommentsCreateWithoutChannelInput, PostCommentsUncheckedCreateWithoutChannelInput>
  }

  export type PostCommentsUpdateWithWhereUniqueWithoutChannelInput = {
    where: PostCommentsWhereUniqueInput
    data: XOR<PostCommentsUpdateWithoutChannelInput, PostCommentsUncheckedUpdateWithoutChannelInput>
  }

  export type PostCommentsUpdateManyWithWhereWithoutChannelInput = {
    where: PostCommentsScalarWhereInput
    data: XOR<PostCommentsUpdateManyMutationInput, PostCommentsUncheckedUpdateManyWithoutChannelInput>
  }

  export type PostCommentsScalarWhereInput = {
    AND?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
    OR?: PostCommentsScalarWhereInput[]
    NOT?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
    id?: StringFilter<"PostComments"> | string
    postId?: StringFilter<"PostComments"> | string
    channelId?: StringFilter<"PostComments"> | string
    text?: StringFilter<"PostComments"> | string
    createdAt?: DateTimeFilter<"PostComments"> | Date | string
    updatedAt?: DateTimeFilter<"PostComments"> | Date | string
  }

  export type PostCommentReactionsUpsertWithWhereUniqueWithoutChannelInput = {
    where: PostCommentReactionsWhereUniqueInput
    update: XOR<PostCommentReactionsUpdateWithoutChannelInput, PostCommentReactionsUncheckedUpdateWithoutChannelInput>
    create: XOR<PostCommentReactionsCreateWithoutChannelInput, PostCommentReactionsUncheckedCreateWithoutChannelInput>
  }

  export type PostCommentReactionsUpdateWithWhereUniqueWithoutChannelInput = {
    where: PostCommentReactionsWhereUniqueInput
    data: XOR<PostCommentReactionsUpdateWithoutChannelInput, PostCommentReactionsUncheckedUpdateWithoutChannelInput>
  }

  export type PostCommentReactionsUpdateManyWithWhereWithoutChannelInput = {
    where: PostCommentReactionsScalarWhereInput
    data: XOR<PostCommentReactionsUpdateManyMutationInput, PostCommentReactionsUncheckedUpdateManyWithoutChannelInput>
  }

  export type PostCommentReactionsScalarWhereInput = {
    AND?: PostCommentReactionsScalarWhereInput | PostCommentReactionsScalarWhereInput[]
    OR?: PostCommentReactionsScalarWhereInput[]
    NOT?: PostCommentReactionsScalarWhereInput | PostCommentReactionsScalarWhereInput[]
    id?: StringFilter<"PostCommentReactions"> | string
    commentId?: StringFilter<"PostCommentReactions"> | string
    channelId?: StringFilter<"PostCommentReactions"> | string
    reaction?: EnumReactionValueFilter<"PostCommentReactions"> | $Enums.ReactionValue
    createdAt?: DateTimeFilter<"PostCommentReactions"> | Date | string
    updatedAt?: DateTimeFilter<"PostCommentReactions"> | Date | string
  }

  export type ChannelCreateWithoutSubcriptionsInput = {
    id?: string
    userId: string
    name: string
    handle: string
    bio: string
    profilePicture: string
    backgroundPicture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutChannelInput
    playlist?: PlaylistCreateNestedManyWithoutChannelInput
    postComments?: PostCommentsCreateNestedManyWithoutChannelInput
    postCommentReactions?: PostCommentReactionsCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutSubcriptionsInput = {
    id?: string
    userId: string
    name: string
    handle: string
    bio: string
    profilePicture: string
    backgroundPicture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutChannelInput
    playlist?: PlaylistUncheckedCreateNestedManyWithoutChannelInput
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutChannelInput
    postCommentReactions?: PostCommentReactionsUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutSubcriptionsInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutSubcriptionsInput, ChannelUncheckedCreateWithoutSubcriptionsInput>
  }

  export type ChannelUpsertWithoutSubcriptionsInput = {
    update: XOR<ChannelUpdateWithoutSubcriptionsInput, ChannelUncheckedUpdateWithoutSubcriptionsInput>
    create: XOR<ChannelCreateWithoutSubcriptionsInput, ChannelUncheckedCreateWithoutSubcriptionsInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutSubcriptionsInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutSubcriptionsInput, ChannelUncheckedUpdateWithoutSubcriptionsInput>
  }

  export type ChannelUpdateWithoutSubcriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    backgroundPicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutChannelNestedInput
    playlist?: PlaylistUpdateManyWithoutChannelNestedInput
    postComments?: PostCommentsUpdateManyWithoutChannelNestedInput
    postCommentReactions?: PostCommentReactionsUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutSubcriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    backgroundPicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutChannelNestedInput
    playlist?: PlaylistUncheckedUpdateManyWithoutChannelNestedInput
    postComments?: PostCommentsUncheckedUpdateManyWithoutChannelNestedInput
    postCommentReactions?: PostCommentReactionsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type PostLikesCreateWithoutPostInput = {
    id?: string
    channelId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostLikesUncheckedCreateWithoutPostInput = {
    id?: string
    channelId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostLikesCreateOrConnectWithoutPostInput = {
    where: PostLikesWhereUniqueInput
    create: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput>
  }

  export type PostLikesCreateManyPostInputEnvelope = {
    data: PostLikesCreateManyPostInput | PostLikesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostCommentsCreateWithoutPostInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channel: ChannelCreateNestedOneWithoutPostCommentsInput
    postCommentReactions?: PostCommentReactionsCreateNestedManyWithoutPostCommentsInput
  }

  export type PostCommentsUncheckedCreateWithoutPostInput = {
    id?: string
    channelId: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postCommentReactions?: PostCommentReactionsUncheckedCreateNestedManyWithoutPostCommentsInput
  }

  export type PostCommentsCreateOrConnectWithoutPostInput = {
    where: PostCommentsWhereUniqueInput
    create: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput>
  }

  export type PostCommentsCreateManyPostInputEnvelope = {
    data: PostCommentsCreateManyPostInput | PostCommentsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type ChannelCreateWithoutPostsInput = {
    id?: string
    userId: string
    name: string
    handle: string
    bio: string
    profilePicture: string
    backgroundPicture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subcriptions?: SubscriptionsCreateNestedManyWithoutChannelInput
    playlist?: PlaylistCreateNestedManyWithoutChannelInput
    postComments?: PostCommentsCreateNestedManyWithoutChannelInput
    postCommentReactions?: PostCommentReactionsCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutPostsInput = {
    id?: string
    userId: string
    name: string
    handle: string
    bio: string
    profilePicture: string
    backgroundPicture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subcriptions?: SubscriptionsUncheckedCreateNestedManyWithoutChannelInput
    playlist?: PlaylistUncheckedCreateNestedManyWithoutChannelInput
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutChannelInput
    postCommentReactions?: PostCommentReactionsUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutPostsInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutPostsInput, ChannelUncheckedCreateWithoutPostsInput>
  }

  export type PostLikesUpsertWithWhereUniqueWithoutPostInput = {
    where: PostLikesWhereUniqueInput
    update: XOR<PostLikesUpdateWithoutPostInput, PostLikesUncheckedUpdateWithoutPostInput>
    create: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput>
  }

  export type PostLikesUpdateWithWhereUniqueWithoutPostInput = {
    where: PostLikesWhereUniqueInput
    data: XOR<PostLikesUpdateWithoutPostInput, PostLikesUncheckedUpdateWithoutPostInput>
  }

  export type PostLikesUpdateManyWithWhereWithoutPostInput = {
    where: PostLikesScalarWhereInput
    data: XOR<PostLikesUpdateManyMutationInput, PostLikesUncheckedUpdateManyWithoutPostInput>
  }

  export type PostLikesScalarWhereInput = {
    AND?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
    OR?: PostLikesScalarWhereInput[]
    NOT?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
    id?: StringFilter<"PostLikes"> | string
    postId?: StringFilter<"PostLikes"> | string
    channelId?: StringFilter<"PostLikes"> | string
    reaction?: EnumReactionValueFilter<"PostLikes"> | $Enums.ReactionValue
    createdAt?: DateTimeFilter<"PostLikes"> | Date | string
    updatedAt?: DateTimeFilter<"PostLikes"> | Date | string
  }

  export type PostCommentsUpsertWithWhereUniqueWithoutPostInput = {
    where: PostCommentsWhereUniqueInput
    update: XOR<PostCommentsUpdateWithoutPostInput, PostCommentsUncheckedUpdateWithoutPostInput>
    create: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput>
  }

  export type PostCommentsUpdateWithWhereUniqueWithoutPostInput = {
    where: PostCommentsWhereUniqueInput
    data: XOR<PostCommentsUpdateWithoutPostInput, PostCommentsUncheckedUpdateWithoutPostInput>
  }

  export type PostCommentsUpdateManyWithWhereWithoutPostInput = {
    where: PostCommentsScalarWhereInput
    data: XOR<PostCommentsUpdateManyMutationInput, PostCommentsUncheckedUpdateManyWithoutPostInput>
  }

  export type ChannelUpsertWithoutPostsInput = {
    update: XOR<ChannelUpdateWithoutPostsInput, ChannelUncheckedUpdateWithoutPostsInput>
    create: XOR<ChannelCreateWithoutPostsInput, ChannelUncheckedCreateWithoutPostsInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutPostsInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutPostsInput, ChannelUncheckedUpdateWithoutPostsInput>
  }

  export type ChannelUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    backgroundPicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcriptions?: SubscriptionsUpdateManyWithoutChannelNestedInput
    playlist?: PlaylistUpdateManyWithoutChannelNestedInput
    postComments?: PostCommentsUpdateManyWithoutChannelNestedInput
    postCommentReactions?: PostCommentReactionsUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    backgroundPicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcriptions?: SubscriptionsUncheckedUpdateManyWithoutChannelNestedInput
    playlist?: PlaylistUncheckedUpdateManyWithoutChannelNestedInput
    postComments?: PostCommentsUncheckedUpdateManyWithoutChannelNestedInput
    postCommentReactions?: PostCommentReactionsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type PostCreateWithoutPostLikesInput = {
    id?: string
    title: string
    description: string
    picture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postComments?: PostCommentsCreateNestedManyWithoutPostInput
    channel: ChannelCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutPostLikesInput = {
    id?: string
    title: string
    description: string
    picture: string
    channelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostLikesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostLikesInput, PostUncheckedCreateWithoutPostLikesInput>
  }

  export type PostUpsertWithoutPostLikesInput = {
    update: XOR<PostUpdateWithoutPostLikesInput, PostUncheckedUpdateWithoutPostLikesInput>
    create: XOR<PostCreateWithoutPostLikesInput, PostUncheckedCreateWithoutPostLikesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostLikesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostLikesInput, PostUncheckedUpdateWithoutPostLikesInput>
  }

  export type PostUpdateWithoutPostLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postComments?: PostCommentsUpdateManyWithoutPostNestedInput
    channel?: ChannelUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutPostLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postComments?: PostCommentsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutPostCommentsInput = {
    id?: string
    title: string
    description: string
    picture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postLikes?: PostLikesCreateNestedManyWithoutPostInput
    channel: ChannelCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutPostCommentsInput = {
    id?: string
    title: string
    description: string
    picture: string
    channelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostCommentsInput, PostUncheckedCreateWithoutPostCommentsInput>
  }

  export type ChannelCreateWithoutPostCommentsInput = {
    id?: string
    userId: string
    name: string
    handle: string
    bio: string
    profilePicture: string
    backgroundPicture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutChannelInput
    subcriptions?: SubscriptionsCreateNestedManyWithoutChannelInput
    playlist?: PlaylistCreateNestedManyWithoutChannelInput
    postCommentReactions?: PostCommentReactionsCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutPostCommentsInput = {
    id?: string
    userId: string
    name: string
    handle: string
    bio: string
    profilePicture: string
    backgroundPicture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutChannelInput
    subcriptions?: SubscriptionsUncheckedCreateNestedManyWithoutChannelInput
    playlist?: PlaylistUncheckedCreateNestedManyWithoutChannelInput
    postCommentReactions?: PostCommentReactionsUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutPostCommentsInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutPostCommentsInput, ChannelUncheckedCreateWithoutPostCommentsInput>
  }

  export type PostCommentReactionsCreateWithoutPostCommentsInput = {
    id?: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
    channel: ChannelCreateNestedOneWithoutPostCommentReactionsInput
  }

  export type PostCommentReactionsUncheckedCreateWithoutPostCommentsInput = {
    id?: string
    channelId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentReactionsCreateOrConnectWithoutPostCommentsInput = {
    where: PostCommentReactionsWhereUniqueInput
    create: XOR<PostCommentReactionsCreateWithoutPostCommentsInput, PostCommentReactionsUncheckedCreateWithoutPostCommentsInput>
  }

  export type PostCommentReactionsCreateManyPostCommentsInputEnvelope = {
    data: PostCommentReactionsCreateManyPostCommentsInput | PostCommentReactionsCreateManyPostCommentsInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithoutPostCommentsInput = {
    update: XOR<PostUpdateWithoutPostCommentsInput, PostUncheckedUpdateWithoutPostCommentsInput>
    create: XOR<PostCreateWithoutPostCommentsInput, PostUncheckedCreateWithoutPostCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostCommentsInput, PostUncheckedUpdateWithoutPostCommentsInput>
  }

  export type PostUpdateWithoutPostCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postLikes?: PostLikesUpdateManyWithoutPostNestedInput
    channel?: ChannelUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutPostCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postLikes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type ChannelUpsertWithoutPostCommentsInput = {
    update: XOR<ChannelUpdateWithoutPostCommentsInput, ChannelUncheckedUpdateWithoutPostCommentsInput>
    create: XOR<ChannelCreateWithoutPostCommentsInput, ChannelUncheckedCreateWithoutPostCommentsInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutPostCommentsInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutPostCommentsInput, ChannelUncheckedUpdateWithoutPostCommentsInput>
  }

  export type ChannelUpdateWithoutPostCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    backgroundPicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutChannelNestedInput
    subcriptions?: SubscriptionsUpdateManyWithoutChannelNestedInput
    playlist?: PlaylistUpdateManyWithoutChannelNestedInput
    postCommentReactions?: PostCommentReactionsUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutPostCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    backgroundPicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutChannelNestedInput
    subcriptions?: SubscriptionsUncheckedUpdateManyWithoutChannelNestedInput
    playlist?: PlaylistUncheckedUpdateManyWithoutChannelNestedInput
    postCommentReactions?: PostCommentReactionsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type PostCommentReactionsUpsertWithWhereUniqueWithoutPostCommentsInput = {
    where: PostCommentReactionsWhereUniqueInput
    update: XOR<PostCommentReactionsUpdateWithoutPostCommentsInput, PostCommentReactionsUncheckedUpdateWithoutPostCommentsInput>
    create: XOR<PostCommentReactionsCreateWithoutPostCommentsInput, PostCommentReactionsUncheckedCreateWithoutPostCommentsInput>
  }

  export type PostCommentReactionsUpdateWithWhereUniqueWithoutPostCommentsInput = {
    where: PostCommentReactionsWhereUniqueInput
    data: XOR<PostCommentReactionsUpdateWithoutPostCommentsInput, PostCommentReactionsUncheckedUpdateWithoutPostCommentsInput>
  }

  export type PostCommentReactionsUpdateManyWithWhereWithoutPostCommentsInput = {
    where: PostCommentReactionsScalarWhereInput
    data: XOR<PostCommentReactionsUpdateManyMutationInput, PostCommentReactionsUncheckedUpdateManyWithoutPostCommentsInput>
  }

  export type PostCommentsCreateWithoutPostCommentReactionsInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutPostCommentsInput
    channel: ChannelCreateNestedOneWithoutPostCommentsInput
  }

  export type PostCommentsUncheckedCreateWithoutPostCommentReactionsInput = {
    id?: string
    postId: string
    channelId: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentsCreateOrConnectWithoutPostCommentReactionsInput = {
    where: PostCommentsWhereUniqueInput
    create: XOR<PostCommentsCreateWithoutPostCommentReactionsInput, PostCommentsUncheckedCreateWithoutPostCommentReactionsInput>
  }

  export type ChannelCreateWithoutPostCommentReactionsInput = {
    id?: string
    userId: string
    name: string
    handle: string
    bio: string
    profilePicture: string
    backgroundPicture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutChannelInput
    subcriptions?: SubscriptionsCreateNestedManyWithoutChannelInput
    playlist?: PlaylistCreateNestedManyWithoutChannelInput
    postComments?: PostCommentsCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutPostCommentReactionsInput = {
    id?: string
    userId: string
    name: string
    handle: string
    bio: string
    profilePicture: string
    backgroundPicture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutChannelInput
    subcriptions?: SubscriptionsUncheckedCreateNestedManyWithoutChannelInput
    playlist?: PlaylistUncheckedCreateNestedManyWithoutChannelInput
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutPostCommentReactionsInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutPostCommentReactionsInput, ChannelUncheckedCreateWithoutPostCommentReactionsInput>
  }

  export type PostCommentsUpsertWithoutPostCommentReactionsInput = {
    update: XOR<PostCommentsUpdateWithoutPostCommentReactionsInput, PostCommentsUncheckedUpdateWithoutPostCommentReactionsInput>
    create: XOR<PostCommentsCreateWithoutPostCommentReactionsInput, PostCommentsUncheckedCreateWithoutPostCommentReactionsInput>
    where?: PostCommentsWhereInput
  }

  export type PostCommentsUpdateToOneWithWhereWithoutPostCommentReactionsInput = {
    where?: PostCommentsWhereInput
    data: XOR<PostCommentsUpdateWithoutPostCommentReactionsInput, PostCommentsUncheckedUpdateWithoutPostCommentReactionsInput>
  }

  export type PostCommentsUpdateWithoutPostCommentReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostCommentsNestedInput
    channel?: ChannelUpdateOneRequiredWithoutPostCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateWithoutPostCommentReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUpsertWithoutPostCommentReactionsInput = {
    update: XOR<ChannelUpdateWithoutPostCommentReactionsInput, ChannelUncheckedUpdateWithoutPostCommentReactionsInput>
    create: XOR<ChannelCreateWithoutPostCommentReactionsInput, ChannelUncheckedCreateWithoutPostCommentReactionsInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutPostCommentReactionsInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutPostCommentReactionsInput, ChannelUncheckedUpdateWithoutPostCommentReactionsInput>
  }

  export type ChannelUpdateWithoutPostCommentReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    backgroundPicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutChannelNestedInput
    subcriptions?: SubscriptionsUpdateManyWithoutChannelNestedInput
    playlist?: PlaylistUpdateManyWithoutChannelNestedInput
    postComments?: PostCommentsUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutPostCommentReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    backgroundPicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutChannelNestedInput
    subcriptions?: SubscriptionsUncheckedUpdateManyWithoutChannelNestedInput
    playlist?: PlaylistUncheckedUpdateManyWithoutChannelNestedInput
    postComments?: PostCommentsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelCreateWithoutPlaylistInput = {
    id?: string
    userId: string
    name: string
    handle: string
    bio: string
    profilePicture: string
    backgroundPicture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutChannelInput
    subcriptions?: SubscriptionsCreateNestedManyWithoutChannelInput
    postComments?: PostCommentsCreateNestedManyWithoutChannelInput
    postCommentReactions?: PostCommentReactionsCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutPlaylistInput = {
    id?: string
    userId: string
    name: string
    handle: string
    bio: string
    profilePicture: string
    backgroundPicture: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutChannelInput
    subcriptions?: SubscriptionsUncheckedCreateNestedManyWithoutChannelInput
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutChannelInput
    postCommentReactions?: PostCommentReactionsUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutPlaylistInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutPlaylistInput, ChannelUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistVideoCreateWithoutPlaylistInput = {
    id?: string
    videoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistVideoUncheckedCreateWithoutPlaylistInput = {
    id?: string
    videoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistVideoCreateOrConnectWithoutPlaylistInput = {
    where: PlaylistVideoWhereUniqueInput
    create: XOR<PlaylistVideoCreateWithoutPlaylistInput, PlaylistVideoUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistVideoCreateManyPlaylistInputEnvelope = {
    data: PlaylistVideoCreateManyPlaylistInput | PlaylistVideoCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type ChannelUpsertWithoutPlaylistInput = {
    update: XOR<ChannelUpdateWithoutPlaylistInput, ChannelUncheckedUpdateWithoutPlaylistInput>
    create: XOR<ChannelCreateWithoutPlaylistInput, ChannelUncheckedCreateWithoutPlaylistInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutPlaylistInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutPlaylistInput, ChannelUncheckedUpdateWithoutPlaylistInput>
  }

  export type ChannelUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    backgroundPicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutChannelNestedInput
    subcriptions?: SubscriptionsUpdateManyWithoutChannelNestedInput
    postComments?: PostCommentsUpdateManyWithoutChannelNestedInput
    postCommentReactions?: PostCommentReactionsUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    backgroundPicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutChannelNestedInput
    subcriptions?: SubscriptionsUncheckedUpdateManyWithoutChannelNestedInput
    postComments?: PostCommentsUncheckedUpdateManyWithoutChannelNestedInput
    postCommentReactions?: PostCommentReactionsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type PlaylistVideoUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistVideoWhereUniqueInput
    update: XOR<PlaylistVideoUpdateWithoutPlaylistInput, PlaylistVideoUncheckedUpdateWithoutPlaylistInput>
    create: XOR<PlaylistVideoCreateWithoutPlaylistInput, PlaylistVideoUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistVideoUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistVideoWhereUniqueInput
    data: XOR<PlaylistVideoUpdateWithoutPlaylistInput, PlaylistVideoUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlaylistVideoUpdateManyWithWhereWithoutPlaylistInput = {
    where: PlaylistVideoScalarWhereInput
    data: XOR<PlaylistVideoUpdateManyMutationInput, PlaylistVideoUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type PlaylistVideoScalarWhereInput = {
    AND?: PlaylistVideoScalarWhereInput | PlaylistVideoScalarWhereInput[]
    OR?: PlaylistVideoScalarWhereInput[]
    NOT?: PlaylistVideoScalarWhereInput | PlaylistVideoScalarWhereInput[]
    id?: StringFilter<"PlaylistVideo"> | string
    playlistId?: StringFilter<"PlaylistVideo"> | string
    videoId?: StringFilter<"PlaylistVideo"> | string
    createdAt?: DateTimeFilter<"PlaylistVideo"> | Date | string
    updatedAt?: DateTimeFilter<"PlaylistVideo"> | Date | string
  }

  export type PlaylistCreateWithoutPlaylistVideoInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channel: ChannelCreateNestedOneWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutPlaylistVideoInput = {
    id?: string
    title: string
    description: string
    channelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistCreateOrConnectWithoutPlaylistVideoInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutPlaylistVideoInput, PlaylistUncheckedCreateWithoutPlaylistVideoInput>
  }

  export type PlaylistUpsertWithoutPlaylistVideoInput = {
    update: XOR<PlaylistUpdateWithoutPlaylistVideoInput, PlaylistUncheckedUpdateWithoutPlaylistVideoInput>
    create: XOR<PlaylistCreateWithoutPlaylistVideoInput, PlaylistUncheckedCreateWithoutPlaylistVideoInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutPlaylistVideoInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutPlaylistVideoInput, PlaylistUncheckedUpdateWithoutPlaylistVideoInput>
  }

  export type PlaylistUpdateWithoutPlaylistVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutPlaylistVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyChannelInput = {
    id?: string
    title: string
    description: string
    picture: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionsCreateManyChannelInput = {
    id?: string
    userId: string
    subscribeType?: $Enums.SubscribeType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistCreateManyChannelInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentsCreateManyChannelInput = {
    id?: string
    postId: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentReactionsCreateManyChannelInput = {
    id?: string
    commentId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postLikes?: PostLikesUpdateManyWithoutPostNestedInput
    postComments?: PostCommentsUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postLikes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput
    postComments?: PostCommentsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionsUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscribeType?: EnumSubscribeTypeFieldUpdateOperationsInput | $Enums.SubscribeType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionsUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscribeType?: EnumSubscribeTypeFieldUpdateOperationsInput | $Enums.SubscribeType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionsUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscribeType?: EnumSubscribeTypeFieldUpdateOperationsInput | $Enums.SubscribeType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistVideo?: PlaylistVideoUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistVideo?: PlaylistVideoUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostCommentsNestedInput
    postCommentReactions?: PostCommentReactionsUpdateManyWithoutPostCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postCommentReactions?: PostCommentReactionsUncheckedUpdateManyWithoutPostCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentReactionsUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postComments?: PostCommentsUpdateOneRequiredWithoutPostCommentReactionsNestedInput
  }

  export type PostCommentReactionsUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentReactionsUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesCreateManyPostInput = {
    id?: string
    channelId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentsCreateManyPostInput = {
    id?: string
    channelId: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostLikesUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutPostCommentsNestedInput
    postCommentReactions?: PostCommentReactionsUpdateManyWithoutPostCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postCommentReactions?: PostCommentReactionsUncheckedUpdateManyWithoutPostCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentReactionsCreateManyPostCommentsInput = {
    id?: string
    channelId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentReactionsUpdateWithoutPostCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutPostCommentReactionsNestedInput
  }

  export type PostCommentReactionsUncheckedUpdateWithoutPostCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentReactionsUncheckedUpdateManyWithoutPostCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistVideoCreateManyPlaylistInput = {
    id?: string
    videoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistVideoUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistVideoUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistVideoUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}