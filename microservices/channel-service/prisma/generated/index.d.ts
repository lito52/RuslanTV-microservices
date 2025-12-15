
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model PostMedia
 * 
 */
export type PostMedia = $Result.DefaultSelection<Prisma.$PostMediaPayload>
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
   * `prisma.postMedia`: Exposes CRUD operations for the **PostMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostMedias
    * const postMedias = await prisma.postMedia.findMany()
    * ```
    */
  get postMedia(): Prisma.PostMediaDelegate<ExtArgs, ClientOptions>;

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    PostMedia: 'PostMedia',
    PostLikes: 'PostLikes',
    PostComments: 'PostComments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "channel" | "subscriptions" | "post" | "postMedia" | "postLikes" | "postComments"
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
      PostMedia: {
        payload: Prisma.$PostMediaPayload<ExtArgs>
        fields: Prisma.PostMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          findFirst: {
            args: Prisma.PostMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          findMany: {
            args: Prisma.PostMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>[]
          }
          create: {
            args: Prisma.PostMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          createMany: {
            args: Prisma.PostMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>[]
          }
          delete: {
            args: Prisma.PostMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          update: {
            args: Prisma.PostMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          deleteMany: {
            args: Prisma.PostMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>[]
          }
          upsert: {
            args: Prisma.PostMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          aggregate: {
            args: Prisma.PostMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostMedia>
          }
          groupBy: {
            args: Prisma.PostMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostMediaCountArgs<ExtArgs>
            result: $Utils.Optional<PostMediaCountAggregateOutputType> | number
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    postMedia?: PostMediaOmit
    postLikes?: PostLikesOmit
    postComments?: PostCommentsOmit
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
    subscriptions: number
  }

  export type ChannelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | ChannelCountOutputTypeCountPostsArgs
    subscriptions?: boolean | ChannelCountOutputTypeCountSubscriptionsArgs
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
  export type ChannelCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionsWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    postLikes: number
    postComments: number
    postMedias: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postLikes?: boolean | PostCountOutputTypeCountPostLikesArgs
    postComments?: boolean | PostCountOutputTypeCountPostCommentsArgs
    postMedias?: boolean | PostCountOutputTypeCountPostMediasArgs
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
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostMediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostMediaWhereInput
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
    subscriptions?: boolean | Channel$subscriptionsArgs<ExtArgs>
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
    subscriptions?: boolean | Channel$subscriptionsArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Channel"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionsPayload<ExtArgs>[]
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
    subscriptions<T extends Channel$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Channel$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Channel.subscriptions
   */
  export type Channel$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    text: string | null
    channelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    text: string | null
    channelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    text: number
    channelId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    text?: true
    channelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    text?: true
    channelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    text?: true
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
    text: string
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
    text?: boolean
    channelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postLikes?: boolean | Post$postLikesArgs<ExtArgs>
    postComments?: boolean | Post$postCommentsArgs<ExtArgs>
    postMedias?: boolean | Post$postMediasArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    channelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    channelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    text?: boolean
    channelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "channelId" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postLikes?: boolean | Post$postLikesArgs<ExtArgs>
    postComments?: boolean | Post$postCommentsArgs<ExtArgs>
    postMedias?: boolean | Post$postMediasArgs<ExtArgs>
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
      postMedias: Prisma.$PostMediaPayload<ExtArgs>[]
      channel: Prisma.$ChannelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
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
    postMedias<T extends Post$postMediasArgs<ExtArgs> = {}>(args?: Subset<T, Post$postMediasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly text: FieldRef<"Post", 'String'>
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
   * Post.postMedias
   */
  export type Post$postMediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    where?: PostMediaWhereInput
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    cursor?: PostMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostMediaScalarFieldEnum | PostMediaScalarFieldEnum[]
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
   * Model PostMedia
   */

  export type AggregatePostMedia = {
    _count: PostMediaCountAggregateOutputType | null
    _min: PostMediaMinAggregateOutputType | null
    _max: PostMediaMaxAggregateOutputType | null
  }

  export type PostMediaMinAggregateOutputType = {
    id: string | null
    url: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMediaMaxAggregateOutputType = {
    id: string | null
    url: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMediaCountAggregateOutputType = {
    id: number
    url: number
    postId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMediaMinAggregateInputType = {
    id?: true
    url?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMediaMaxAggregateInputType = {
    id?: true
    url?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMediaCountAggregateInputType = {
    id?: true
    url?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostMedia to aggregate.
     */
    where?: PostMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMedias to fetch.
     */
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostMedias
    **/
    _count?: true | PostMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMediaMaxAggregateInputType
  }

  export type GetPostMediaAggregateType<T extends PostMediaAggregateArgs> = {
        [P in keyof T & keyof AggregatePostMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostMedia[P]>
      : GetScalarType<T[P], AggregatePostMedia[P]>
  }




  export type PostMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostMediaWhereInput
    orderBy?: PostMediaOrderByWithAggregationInput | PostMediaOrderByWithAggregationInput[]
    by: PostMediaScalarFieldEnum[] | PostMediaScalarFieldEnum
    having?: PostMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostMediaCountAggregateInputType | true
    _min?: PostMediaMinAggregateInputType
    _max?: PostMediaMaxAggregateInputType
  }

  export type PostMediaGroupByOutputType = {
    id: string
    url: string
    postId: string
    createdAt: Date
    updatedAt: Date
    _count: PostMediaCountAggregateOutputType | null
    _min: PostMediaMinAggregateOutputType | null
    _max: PostMediaMaxAggregateOutputType | null
  }

  type GetPostMediaGroupByPayload<T extends PostMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostMediaGroupByOutputType[P]>
            : GetScalarType<T[P], PostMediaGroupByOutputType[P]>
        }
      >
    >


  export type PostMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postMedia"]>

  export type PostMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postMedia"]>

  export type PostMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postMedia"]>

  export type PostMediaSelectScalar = {
    id?: boolean
    url?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "postId" | "createdAt" | "updatedAt", ExtArgs["result"]["postMedia"]>
  export type PostMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostMedia"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      postId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["postMedia"]>
    composites: {}
  }

  type PostMediaGetPayload<S extends boolean | null | undefined | PostMediaDefaultArgs> = $Result.GetResult<Prisma.$PostMediaPayload, S>

  type PostMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostMediaCountAggregateInputType | true
    }

  export interface PostMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostMedia'], meta: { name: 'PostMedia' } }
    /**
     * Find zero or one PostMedia that matches the filter.
     * @param {PostMediaFindUniqueArgs} args - Arguments to find a PostMedia
     * @example
     * // Get one PostMedia
     * const postMedia = await prisma.postMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostMediaFindUniqueArgs>(args: SelectSubset<T, PostMediaFindUniqueArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostMediaFindUniqueOrThrowArgs} args - Arguments to find a PostMedia
     * @example
     * // Get one PostMedia
     * const postMedia = await prisma.postMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, PostMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaFindFirstArgs} args - Arguments to find a PostMedia
     * @example
     * // Get one PostMedia
     * const postMedia = await prisma.postMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostMediaFindFirstArgs>(args?: SelectSubset<T, PostMediaFindFirstArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaFindFirstOrThrowArgs} args - Arguments to find a PostMedia
     * @example
     * // Get one PostMedia
     * const postMedia = await prisma.postMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, PostMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostMedias
     * const postMedias = await prisma.postMedia.findMany()
     * 
     * // Get first 10 PostMedias
     * const postMedias = await prisma.postMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postMediaWithIdOnly = await prisma.postMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostMediaFindManyArgs>(args?: SelectSubset<T, PostMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostMedia.
     * @param {PostMediaCreateArgs} args - Arguments to create a PostMedia.
     * @example
     * // Create one PostMedia
     * const PostMedia = await prisma.postMedia.create({
     *   data: {
     *     // ... data to create a PostMedia
     *   }
     * })
     * 
     */
    create<T extends PostMediaCreateArgs>(args: SelectSubset<T, PostMediaCreateArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostMedias.
     * @param {PostMediaCreateManyArgs} args - Arguments to create many PostMedias.
     * @example
     * // Create many PostMedias
     * const postMedia = await prisma.postMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostMediaCreateManyArgs>(args?: SelectSubset<T, PostMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostMedias and returns the data saved in the database.
     * @param {PostMediaCreateManyAndReturnArgs} args - Arguments to create many PostMedias.
     * @example
     * // Create many PostMedias
     * const postMedia = await prisma.postMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostMedias and only return the `id`
     * const postMediaWithIdOnly = await prisma.postMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, PostMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostMedia.
     * @param {PostMediaDeleteArgs} args - Arguments to delete one PostMedia.
     * @example
     * // Delete one PostMedia
     * const PostMedia = await prisma.postMedia.delete({
     *   where: {
     *     // ... filter to delete one PostMedia
     *   }
     * })
     * 
     */
    delete<T extends PostMediaDeleteArgs>(args: SelectSubset<T, PostMediaDeleteArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostMedia.
     * @param {PostMediaUpdateArgs} args - Arguments to update one PostMedia.
     * @example
     * // Update one PostMedia
     * const postMedia = await prisma.postMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostMediaUpdateArgs>(args: SelectSubset<T, PostMediaUpdateArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostMedias.
     * @param {PostMediaDeleteManyArgs} args - Arguments to filter PostMedias to delete.
     * @example
     * // Delete a few PostMedias
     * const { count } = await prisma.postMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostMediaDeleteManyArgs>(args?: SelectSubset<T, PostMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostMedias
     * const postMedia = await prisma.postMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostMediaUpdateManyArgs>(args: SelectSubset<T, PostMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostMedias and returns the data updated in the database.
     * @param {PostMediaUpdateManyAndReturnArgs} args - Arguments to update many PostMedias.
     * @example
     * // Update many PostMedias
     * const postMedia = await prisma.postMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostMedias and only return the `id`
     * const postMediaWithIdOnly = await prisma.postMedia.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, PostMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostMedia.
     * @param {PostMediaUpsertArgs} args - Arguments to update or create a PostMedia.
     * @example
     * // Update or create a PostMedia
     * const postMedia = await prisma.postMedia.upsert({
     *   create: {
     *     // ... data to create a PostMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostMedia we want to update
     *   }
     * })
     */
    upsert<T extends PostMediaUpsertArgs>(args: SelectSubset<T, PostMediaUpsertArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaCountArgs} args - Arguments to filter PostMedias to count.
     * @example
     * // Count the number of PostMedias
     * const count = await prisma.postMedia.count({
     *   where: {
     *     // ... the filter for the PostMedias we want to count
     *   }
     * })
    **/
    count<T extends PostMediaCountArgs>(
      args?: Subset<T, PostMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostMediaAggregateArgs>(args: Subset<T, PostMediaAggregateArgs>): Prisma.PrismaPromise<GetPostMediaAggregateType<T>>

    /**
     * Group by PostMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaGroupByArgs} args - Group by arguments.
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
      T extends PostMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostMediaGroupByArgs['orderBy'] }
        : { orderBy?: PostMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostMedia model
   */
  readonly fields: PostMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PostMedia model
   */
  interface PostMediaFieldRefs {
    readonly id: FieldRef<"PostMedia", 'String'>
    readonly url: FieldRef<"PostMedia", 'String'>
    readonly postId: FieldRef<"PostMedia", 'String'>
    readonly createdAt: FieldRef<"PostMedia", 'DateTime'>
    readonly updatedAt: FieldRef<"PostMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostMedia findUnique
   */
  export type PostMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter, which PostMedia to fetch.
     */
    where: PostMediaWhereUniqueInput
  }

  /**
   * PostMedia findUniqueOrThrow
   */
  export type PostMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter, which PostMedia to fetch.
     */
    where: PostMediaWhereUniqueInput
  }

  /**
   * PostMedia findFirst
   */
  export type PostMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter, which PostMedia to fetch.
     */
    where?: PostMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMedias to fetch.
     */
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostMedias.
     */
    cursor?: PostMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostMedias.
     */
    distinct?: PostMediaScalarFieldEnum | PostMediaScalarFieldEnum[]
  }

  /**
   * PostMedia findFirstOrThrow
   */
  export type PostMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter, which PostMedia to fetch.
     */
    where?: PostMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMedias to fetch.
     */
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostMedias.
     */
    cursor?: PostMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostMedias.
     */
    distinct?: PostMediaScalarFieldEnum | PostMediaScalarFieldEnum[]
  }

  /**
   * PostMedia findMany
   */
  export type PostMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter, which PostMedias to fetch.
     */
    where?: PostMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMedias to fetch.
     */
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostMedias.
     */
    cursor?: PostMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMedias.
     */
    skip?: number
    distinct?: PostMediaScalarFieldEnum | PostMediaScalarFieldEnum[]
  }

  /**
   * PostMedia create
   */
  export type PostMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a PostMedia.
     */
    data: XOR<PostMediaCreateInput, PostMediaUncheckedCreateInput>
  }

  /**
   * PostMedia createMany
   */
  export type PostMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostMedias.
     */
    data: PostMediaCreateManyInput | PostMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostMedia createManyAndReturn
   */
  export type PostMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * The data used to create many PostMedias.
     */
    data: PostMediaCreateManyInput | PostMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostMedia update
   */
  export type PostMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a PostMedia.
     */
    data: XOR<PostMediaUpdateInput, PostMediaUncheckedUpdateInput>
    /**
     * Choose, which PostMedia to update.
     */
    where: PostMediaWhereUniqueInput
  }

  /**
   * PostMedia updateMany
   */
  export type PostMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostMedias.
     */
    data: XOR<PostMediaUpdateManyMutationInput, PostMediaUncheckedUpdateManyInput>
    /**
     * Filter which PostMedias to update
     */
    where?: PostMediaWhereInput
    /**
     * Limit how many PostMedias to update.
     */
    limit?: number
  }

  /**
   * PostMedia updateManyAndReturn
   */
  export type PostMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * The data used to update PostMedias.
     */
    data: XOR<PostMediaUpdateManyMutationInput, PostMediaUncheckedUpdateManyInput>
    /**
     * Filter which PostMedias to update
     */
    where?: PostMediaWhereInput
    /**
     * Limit how many PostMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostMedia upsert
   */
  export type PostMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the PostMedia to update in case it exists.
     */
    where: PostMediaWhereUniqueInput
    /**
     * In case the PostMedia found by the `where` argument doesn't exist, create a new PostMedia with this data.
     */
    create: XOR<PostMediaCreateInput, PostMediaUncheckedCreateInput>
    /**
     * In case the PostMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostMediaUpdateInput, PostMediaUncheckedUpdateInput>
  }

  /**
   * PostMedia delete
   */
  export type PostMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter which PostMedia to delete.
     */
    where: PostMediaWhereUniqueInput
  }

  /**
   * PostMedia deleteMany
   */
  export type PostMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostMedias to delete
     */
    where?: PostMediaWhereInput
    /**
     * Limit how many PostMedias to delete.
     */
    limit?: number
  }

  /**
   * PostMedia without action
   */
  export type PostMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
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
    parentId: string | null
    reaction: $Enums.ReactionValue | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostLikesMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    parentId: string | null
    reaction: $Enums.ReactionValue | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostLikesCountAggregateOutputType = {
    id: number
    postId: number
    parentId: number
    reaction: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostLikesMinAggregateInputType = {
    id?: true
    postId?: true
    parentId?: true
    reaction?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostLikesMaxAggregateInputType = {
    id?: true
    postId?: true
    parentId?: true
    reaction?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostLikesCountAggregateInputType = {
    id?: true
    postId?: true
    parentId?: true
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
    parentId: string
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
    parentId?: boolean
    reaction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLikes"]>

  export type PostLikesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    parentId?: boolean
    reaction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLikes"]>

  export type PostLikesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    parentId?: boolean
    reaction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLikes"]>

  export type PostLikesSelectScalar = {
    id?: boolean
    postId?: boolean
    parentId?: boolean
    reaction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostLikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "parentId" | "reaction" | "createdAt" | "updatedAt", ExtArgs["result"]["postLikes"]>
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
      parentId: string
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
    readonly parentId: FieldRef<"PostLikes", 'String'>
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
    parentId: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCommentsMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    parentId: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCommentsCountAggregateOutputType = {
    id: number
    postId: number
    parentId: number
    text: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostCommentsMinAggregateInputType = {
    id?: true
    postId?: true
    parentId?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCommentsMaxAggregateInputType = {
    id?: true
    postId?: true
    parentId?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCommentsCountAggregateInputType = {
    id?: true
    postId?: true
    parentId?: true
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
    parentId: string
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
    parentId?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComments"]>

  export type PostCommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    parentId?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComments"]>

  export type PostCommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    parentId?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComments"]>

  export type PostCommentsSelectScalar = {
    id?: boolean
    postId?: boolean
    parentId?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostCommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "parentId" | "text" | "createdAt" | "updatedAt", ExtArgs["result"]["postComments"]>
  export type PostCommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostCommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostCommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostCommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostComments"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      parentId: string
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
    readonly parentId: FieldRef<"PostComments", 'String'>
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
    text: 'text',
    channelId: 'channelId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostMediaScalarFieldEnum: {
    id: 'id',
    url: 'url',
    postId: 'postId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostMediaScalarFieldEnum = (typeof PostMediaScalarFieldEnum)[keyof typeof PostMediaScalarFieldEnum]


  export const PostLikesScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    parentId: 'parentId',
    reaction: 'reaction',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostLikesScalarFieldEnum = (typeof PostLikesScalarFieldEnum)[keyof typeof PostLikesScalarFieldEnum]


  export const PostCommentsScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    parentId: 'parentId',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostCommentsScalarFieldEnum = (typeof PostCommentsScalarFieldEnum)[keyof typeof PostCommentsScalarFieldEnum]


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
    subscriptions?: SubscriptionsListRelationFilter
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
    subscriptions?: SubscriptionsOrderByRelationAggregateInput
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
    subscriptions?: SubscriptionsListRelationFilter
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
    text?: StringFilter<"Post"> | string
    channelId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    postLikes?: PostLikesListRelationFilter
    postComments?: PostCommentsListRelationFilter
    postMedias?: PostMediaListRelationFilter
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    channelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postLikes?: PostLikesOrderByRelationAggregateInput
    postComments?: PostCommentsOrderByRelationAggregateInput
    postMedias?: PostMediaOrderByRelationAggregateInput
    channel?: ChannelOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    text?: StringFilter<"Post"> | string
    channelId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    postLikes?: PostLikesListRelationFilter
    postComments?: PostCommentsListRelationFilter
    postMedias?: PostMediaListRelationFilter
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
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
    text?: StringWithAggregatesFilter<"Post"> | string
    channelId?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type PostMediaWhereInput = {
    AND?: PostMediaWhereInput | PostMediaWhereInput[]
    OR?: PostMediaWhereInput[]
    NOT?: PostMediaWhereInput | PostMediaWhereInput[]
    id?: StringFilter<"PostMedia"> | string
    url?: StringFilter<"PostMedia"> | string
    postId?: StringFilter<"PostMedia"> | string
    createdAt?: DateTimeFilter<"PostMedia"> | Date | string
    updatedAt?: DateTimeFilter<"PostMedia"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostMediaOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type PostMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostMediaWhereInput | PostMediaWhereInput[]
    OR?: PostMediaWhereInput[]
    NOT?: PostMediaWhereInput | PostMediaWhereInput[]
    url?: StringFilter<"PostMedia"> | string
    postId?: StringFilter<"PostMedia"> | string
    createdAt?: DateTimeFilter<"PostMedia"> | Date | string
    updatedAt?: DateTimeFilter<"PostMedia"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type PostMediaOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostMediaCountOrderByAggregateInput
    _max?: PostMediaMaxOrderByAggregateInput
    _min?: PostMediaMinOrderByAggregateInput
  }

  export type PostMediaScalarWhereWithAggregatesInput = {
    AND?: PostMediaScalarWhereWithAggregatesInput | PostMediaScalarWhereWithAggregatesInput[]
    OR?: PostMediaScalarWhereWithAggregatesInput[]
    NOT?: PostMediaScalarWhereWithAggregatesInput | PostMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostMedia"> | string
    url?: StringWithAggregatesFilter<"PostMedia"> | string
    postId?: StringWithAggregatesFilter<"PostMedia"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostMedia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostMedia"> | Date | string
  }

  export type PostLikesWhereInput = {
    AND?: PostLikesWhereInput | PostLikesWhereInput[]
    OR?: PostLikesWhereInput[]
    NOT?: PostLikesWhereInput | PostLikesWhereInput[]
    id?: StringFilter<"PostLikes"> | string
    postId?: StringFilter<"PostLikes"> | string
    parentId?: StringFilter<"PostLikes"> | string
    reaction?: EnumReactionValueFilter<"PostLikes"> | $Enums.ReactionValue
    createdAt?: DateTimeFilter<"PostLikes"> | Date | string
    updatedAt?: DateTimeFilter<"PostLikes"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostLikesOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    reaction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type PostLikesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId_parentId?: PostLikesPostIdParentIdCompoundUniqueInput
    AND?: PostLikesWhereInput | PostLikesWhereInput[]
    OR?: PostLikesWhereInput[]
    NOT?: PostLikesWhereInput | PostLikesWhereInput[]
    postId?: StringFilter<"PostLikes"> | string
    parentId?: StringFilter<"PostLikes"> | string
    reaction?: EnumReactionValueFilter<"PostLikes"> | $Enums.ReactionValue
    createdAt?: DateTimeFilter<"PostLikes"> | Date | string
    updatedAt?: DateTimeFilter<"PostLikes"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "postId_parentId">

  export type PostLikesOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
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
    parentId?: StringWithAggregatesFilter<"PostLikes"> | string
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
    parentId?: StringFilter<"PostComments"> | string
    text?: StringFilter<"PostComments"> | string
    createdAt?: DateTimeFilter<"PostComments"> | Date | string
    updatedAt?: DateTimeFilter<"PostComments"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostCommentsOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type PostCommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostCommentsWhereInput | PostCommentsWhereInput[]
    OR?: PostCommentsWhereInput[]
    NOT?: PostCommentsWhereInput | PostCommentsWhereInput[]
    postId?: StringFilter<"PostComments"> | string
    parentId?: StringFilter<"PostComments"> | string
    text?: StringFilter<"PostComments"> | string
    createdAt?: DateTimeFilter<"PostComments"> | Date | string
    updatedAt?: DateTimeFilter<"PostComments"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type PostCommentsOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
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
    parentId?: StringWithAggregatesFilter<"PostComments"> | string
    text?: StringWithAggregatesFilter<"PostComments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostComments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostComments"> | Date | string
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
    subscriptions?: SubscriptionsCreateNestedManyWithoutChannelInput
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
    subscriptions?: SubscriptionsUncheckedCreateNestedManyWithoutChannelInput
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
    subscriptions?: SubscriptionsUpdateManyWithoutChannelNestedInput
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
    subscriptions?: SubscriptionsUncheckedUpdateManyWithoutChannelNestedInput
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
    channel: ChannelCreateNestedOneWithoutSubscriptionsInput
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
    channel?: ChannelUpdateOneRequiredWithoutSubscriptionsNestedInput
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
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postLikes?: PostLikesCreateNestedManyWithoutPostInput
    postComments?: PostCommentsCreateNestedManyWithoutPostInput
    postMedias?: PostMediaCreateNestedManyWithoutPostInput
    channel: ChannelCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    text: string
    channelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutPostInput
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutPostInput
    postMedias?: PostMediaUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postLikes?: PostLikesUpdateManyWithoutPostNestedInput
    postComments?: PostCommentsUpdateManyWithoutPostNestedInput
    postMedias?: PostMediaUpdateManyWithoutPostNestedInput
    channel?: ChannelUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postLikes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput
    postComments?: PostCommentsUncheckedUpdateManyWithoutPostNestedInput
    postMedias?: PostMediaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    text: string
    channelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostMediaCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutPostMediasInput
  }

  export type PostMediaUncheckedCreateInput = {
    id?: string
    url: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostMediasNestedInput
  }

  export type PostMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostMediaCreateManyInput = {
    id?: string
    url: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesCreateInput = {
    id?: string
    parentId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutPostLikesInput
  }

  export type PostLikesUncheckedCreateInput = {
    id?: string
    postId: string
    parentId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostLikesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostLikesNestedInput
  }

  export type PostLikesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesCreateManyInput = {
    id?: string
    postId: string
    parentId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostLikesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsCreateInput = {
    id?: string
    parentId: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutPostCommentsInput
  }

  export type PostCommentsUncheckedCreateInput = {
    id?: string
    postId: string
    parentId: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsCreateManyInput = {
    id?: string
    postId: string
    parentId: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
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

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionsOrderByRelationAggregateInput = {
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

  export type PostCommentsListRelationFilter = {
    every?: PostCommentsWhereInput
    some?: PostCommentsWhereInput
    none?: PostCommentsWhereInput
  }

  export type PostMediaListRelationFilter = {
    every?: PostMediaWhereInput
    some?: PostMediaWhereInput
    none?: PostMediaWhereInput
  }

  export type PostLikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    channelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    channelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    channelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostMediaCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMediaMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReactionValueFilter<$PrismaModel = never> = {
    equals?: $Enums.ReactionValue | EnumReactionValueFieldRefInput<$PrismaModel>
    in?: $Enums.ReactionValue[] | ListEnumReactionValueFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReactionValue[] | ListEnumReactionValueFieldRefInput<$PrismaModel>
    not?: NestedEnumReactionValueFilter<$PrismaModel> | $Enums.ReactionValue
  }

  export type PostLikesPostIdParentIdCompoundUniqueInput = {
    postId: string
    parentId: string
  }

  export type PostLikesCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    reaction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostLikesMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    reaction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostLikesMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
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

  export type PostCommentsCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCommentsMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    text?: SortOrder
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

  export type ChannelCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<ChannelCreateWithoutSubscriptionsInput, ChannelUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutSubscriptionsInput
    connect?: ChannelWhereUniqueInput
  }

  export type EnumSubscribeTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubscribeType
  }

  export type ChannelUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<ChannelCreateWithoutSubscriptionsInput, ChannelUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutSubscriptionsInput
    upsert?: ChannelUpsertWithoutSubscriptionsInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutSubscriptionsInput, ChannelUpdateWithoutSubscriptionsInput>, ChannelUncheckedUpdateWithoutSubscriptionsInput>
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

  export type PostMediaCreateNestedManyWithoutPostInput = {
    create?: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput> | PostMediaCreateWithoutPostInput[] | PostMediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutPostInput | PostMediaCreateOrConnectWithoutPostInput[]
    createMany?: PostMediaCreateManyPostInputEnvelope
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
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

  export type PostMediaUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput> | PostMediaCreateWithoutPostInput[] | PostMediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutPostInput | PostMediaCreateOrConnectWithoutPostInput[]
    createMany?: PostMediaCreateManyPostInputEnvelope
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
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

  export type PostMediaUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput> | PostMediaCreateWithoutPostInput[] | PostMediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutPostInput | PostMediaCreateOrConnectWithoutPostInput[]
    upsert?: PostMediaUpsertWithWhereUniqueWithoutPostInput | PostMediaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostMediaCreateManyPostInputEnvelope
    set?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    disconnect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    delete?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    update?: PostMediaUpdateWithWhereUniqueWithoutPostInput | PostMediaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostMediaUpdateManyWithWhereWithoutPostInput | PostMediaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostMediaScalarWhereInput | PostMediaScalarWhereInput[]
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

  export type PostMediaUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput> | PostMediaCreateWithoutPostInput[] | PostMediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutPostInput | PostMediaCreateOrConnectWithoutPostInput[]
    upsert?: PostMediaUpsertWithWhereUniqueWithoutPostInput | PostMediaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostMediaCreateManyPostInputEnvelope
    set?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    disconnect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    delete?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    update?: PostMediaUpdateWithWhereUniqueWithoutPostInput | PostMediaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostMediaUpdateManyWithWhereWithoutPostInput | PostMediaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostMediaScalarWhereInput | PostMediaScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutPostMediasInput = {
    create?: XOR<PostCreateWithoutPostMediasInput, PostUncheckedCreateWithoutPostMediasInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostMediasInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutPostMediasNestedInput = {
    create?: XOR<PostCreateWithoutPostMediasInput, PostUncheckedCreateWithoutPostMediasInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostMediasInput
    upsert?: PostUpsertWithoutPostMediasInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostMediasInput, PostUpdateWithoutPostMediasInput>, PostUncheckedUpdateWithoutPostMediasInput>
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

  export type PostUpdateOneRequiredWithoutPostCommentsNestedInput = {
    create?: XOR<PostCreateWithoutPostCommentsInput, PostUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostCommentsInput
    upsert?: PostUpsertWithoutPostCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostCommentsInput, PostUpdateWithoutPostCommentsInput>, PostUncheckedUpdateWithoutPostCommentsInput>
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
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postLikes?: PostLikesCreateNestedManyWithoutPostInput
    postComments?: PostCommentsCreateNestedManyWithoutPostInput
    postMedias?: PostMediaCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutChannelInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutPostInput
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutPostInput
    postMedias?: PostMediaUncheckedCreateNestedManyWithoutPostInput
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
    text?: StringFilter<"Post"> | string
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

  export type ChannelCreateWithoutSubscriptionsInput = {
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
  }

  export type ChannelUncheckedCreateWithoutSubscriptionsInput = {
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
  }

  export type ChannelCreateOrConnectWithoutSubscriptionsInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutSubscriptionsInput, ChannelUncheckedCreateWithoutSubscriptionsInput>
  }

  export type ChannelUpsertWithoutSubscriptionsInput = {
    update: XOR<ChannelUpdateWithoutSubscriptionsInput, ChannelUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<ChannelCreateWithoutSubscriptionsInput, ChannelUncheckedCreateWithoutSubscriptionsInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutSubscriptionsInput, ChannelUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type ChannelUpdateWithoutSubscriptionsInput = {
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
  }

  export type ChannelUncheckedUpdateWithoutSubscriptionsInput = {
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
  }

  export type PostLikesCreateWithoutPostInput = {
    id?: string
    parentId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostLikesUncheckedCreateWithoutPostInput = {
    id?: string
    parentId: string
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
    parentId: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentsUncheckedCreateWithoutPostInput = {
    id?: string
    parentId: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentsCreateOrConnectWithoutPostInput = {
    where: PostCommentsWhereUniqueInput
    create: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput>
  }

  export type PostCommentsCreateManyPostInputEnvelope = {
    data: PostCommentsCreateManyPostInput | PostCommentsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostMediaCreateWithoutPostInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostMediaUncheckedCreateWithoutPostInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostMediaCreateOrConnectWithoutPostInput = {
    where: PostMediaWhereUniqueInput
    create: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput>
  }

  export type PostMediaCreateManyPostInputEnvelope = {
    data: PostMediaCreateManyPostInput | PostMediaCreateManyPostInput[]
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
    subscriptions?: SubscriptionsCreateNestedManyWithoutChannelInput
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
    subscriptions?: SubscriptionsUncheckedCreateNestedManyWithoutChannelInput
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
    parentId?: StringFilter<"PostLikes"> | string
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

  export type PostCommentsScalarWhereInput = {
    AND?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
    OR?: PostCommentsScalarWhereInput[]
    NOT?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
    id?: StringFilter<"PostComments"> | string
    postId?: StringFilter<"PostComments"> | string
    parentId?: StringFilter<"PostComments"> | string
    text?: StringFilter<"PostComments"> | string
    createdAt?: DateTimeFilter<"PostComments"> | Date | string
    updatedAt?: DateTimeFilter<"PostComments"> | Date | string
  }

  export type PostMediaUpsertWithWhereUniqueWithoutPostInput = {
    where: PostMediaWhereUniqueInput
    update: XOR<PostMediaUpdateWithoutPostInput, PostMediaUncheckedUpdateWithoutPostInput>
    create: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput>
  }

  export type PostMediaUpdateWithWhereUniqueWithoutPostInput = {
    where: PostMediaWhereUniqueInput
    data: XOR<PostMediaUpdateWithoutPostInput, PostMediaUncheckedUpdateWithoutPostInput>
  }

  export type PostMediaUpdateManyWithWhereWithoutPostInput = {
    where: PostMediaScalarWhereInput
    data: XOR<PostMediaUpdateManyMutationInput, PostMediaUncheckedUpdateManyWithoutPostInput>
  }

  export type PostMediaScalarWhereInput = {
    AND?: PostMediaScalarWhereInput | PostMediaScalarWhereInput[]
    OR?: PostMediaScalarWhereInput[]
    NOT?: PostMediaScalarWhereInput | PostMediaScalarWhereInput[]
    id?: StringFilter<"PostMedia"> | string
    url?: StringFilter<"PostMedia"> | string
    postId?: StringFilter<"PostMedia"> | string
    createdAt?: DateTimeFilter<"PostMedia"> | Date | string
    updatedAt?: DateTimeFilter<"PostMedia"> | Date | string
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
    subscriptions?: SubscriptionsUpdateManyWithoutChannelNestedInput
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
    subscriptions?: SubscriptionsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type PostCreateWithoutPostMediasInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postLikes?: PostLikesCreateNestedManyWithoutPostInput
    postComments?: PostCommentsCreateNestedManyWithoutPostInput
    channel: ChannelCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutPostMediasInput = {
    id?: string
    text: string
    channelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutPostInput
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostMediasInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostMediasInput, PostUncheckedCreateWithoutPostMediasInput>
  }

  export type PostUpsertWithoutPostMediasInput = {
    update: XOR<PostUpdateWithoutPostMediasInput, PostUncheckedUpdateWithoutPostMediasInput>
    create: XOR<PostCreateWithoutPostMediasInput, PostUncheckedCreateWithoutPostMediasInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostMediasInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostMediasInput, PostUncheckedUpdateWithoutPostMediasInput>
  }

  export type PostUpdateWithoutPostMediasInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postLikes?: PostLikesUpdateManyWithoutPostNestedInput
    postComments?: PostCommentsUpdateManyWithoutPostNestedInput
    channel?: ChannelUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutPostMediasInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postLikes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput
    postComments?: PostCommentsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutPostLikesInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postComments?: PostCommentsCreateNestedManyWithoutPostInput
    postMedias?: PostMediaCreateNestedManyWithoutPostInput
    channel: ChannelCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutPostLikesInput = {
    id?: string
    text: string
    channelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postComments?: PostCommentsUncheckedCreateNestedManyWithoutPostInput
    postMedias?: PostMediaUncheckedCreateNestedManyWithoutPostInput
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
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postComments?: PostCommentsUpdateManyWithoutPostNestedInput
    postMedias?: PostMediaUpdateManyWithoutPostNestedInput
    channel?: ChannelUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutPostLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postComments?: PostCommentsUncheckedUpdateManyWithoutPostNestedInput
    postMedias?: PostMediaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutPostCommentsInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postLikes?: PostLikesCreateNestedManyWithoutPostInput
    postMedias?: PostMediaCreateNestedManyWithoutPostInput
    channel: ChannelCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutPostCommentsInput = {
    id?: string
    text: string
    channelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postLikes?: PostLikesUncheckedCreateNestedManyWithoutPostInput
    postMedias?: PostMediaUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostCommentsInput, PostUncheckedCreateWithoutPostCommentsInput>
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
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postLikes?: PostLikesUpdateManyWithoutPostNestedInput
    postMedias?: PostMediaUpdateManyWithoutPostNestedInput
    channel?: ChannelUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutPostCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postLikes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput
    postMedias?: PostMediaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyChannelInput = {
    id?: string
    text: string
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

  export type PostUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postLikes?: PostLikesUpdateManyWithoutPostNestedInput
    postComments?: PostCommentsUpdateManyWithoutPostNestedInput
    postMedias?: PostMediaUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postLikes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput
    postComments?: PostCommentsUncheckedUpdateManyWithoutPostNestedInput
    postMedias?: PostMediaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
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

  export type PostLikesCreateManyPostInput = {
    id?: string
    parentId: string
    reaction: $Enums.ReactionValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentsCreateManyPostInput = {
    id?: string
    parentId: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostMediaCreateManyPostInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostLikesUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    reaction?: EnumReactionValueFieldUpdateOperationsInput | $Enums.ReactionValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostMediaUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostMediaUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostMediaUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
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