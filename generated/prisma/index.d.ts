
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
 * Model LectureHierarchy
 * 
 */
export type LectureHierarchy = $Result.DefaultSelection<Prisma.$LectureHierarchyPayload>
/**
 * Model LectureMarkdown
 * 
 */
export type LectureMarkdown = $Result.DefaultSelection<Prisma.$LectureMarkdownPayload>
/**
 * Model MarkdownBlock
 * 
 */
export type MarkdownBlock = $Result.DefaultSelection<Prisma.$MarkdownBlockPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Roles: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Roles = (typeof Roles)[keyof typeof Roles]

}

export type Roles = $Enums.Roles

export const Roles: typeof $Enums.Roles

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LectureHierarchies
 * const lectureHierarchies = await prisma.lectureHierarchy.findMany()
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
   * // Fetch zero or more LectureHierarchies
   * const lectureHierarchies = await prisma.lectureHierarchy.findMany()
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
   * `prisma.lectureHierarchy`: Exposes CRUD operations for the **LectureHierarchy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LectureHierarchies
    * const lectureHierarchies = await prisma.lectureHierarchy.findMany()
    * ```
    */
  get lectureHierarchy(): Prisma.LectureHierarchyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lectureMarkdown`: Exposes CRUD operations for the **LectureMarkdown** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LectureMarkdowns
    * const lectureMarkdowns = await prisma.lectureMarkdown.findMany()
    * ```
    */
  get lectureMarkdown(): Prisma.LectureMarkdownDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.markdownBlock`: Exposes CRUD operations for the **MarkdownBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarkdownBlocks
    * const markdownBlocks = await prisma.markdownBlock.findMany()
    * ```
    */
  get markdownBlock(): Prisma.MarkdownBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    LectureHierarchy: 'LectureHierarchy',
    LectureMarkdown: 'LectureMarkdown',
    MarkdownBlock: 'MarkdownBlock',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken'
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
      modelProps: "lectureHierarchy" | "lectureMarkdown" | "markdownBlock" | "account" | "session" | "user" | "verificationToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LectureHierarchy: {
        payload: Prisma.$LectureHierarchyPayload<ExtArgs>
        fields: Prisma.LectureHierarchyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LectureHierarchyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureHierarchyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LectureHierarchyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureHierarchyPayload>
          }
          findFirst: {
            args: Prisma.LectureHierarchyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureHierarchyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LectureHierarchyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureHierarchyPayload>
          }
          findMany: {
            args: Prisma.LectureHierarchyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureHierarchyPayload>[]
          }
          create: {
            args: Prisma.LectureHierarchyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureHierarchyPayload>
          }
          createMany: {
            args: Prisma.LectureHierarchyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LectureHierarchyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureHierarchyPayload>[]
          }
          delete: {
            args: Prisma.LectureHierarchyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureHierarchyPayload>
          }
          update: {
            args: Prisma.LectureHierarchyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureHierarchyPayload>
          }
          deleteMany: {
            args: Prisma.LectureHierarchyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LectureHierarchyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LectureHierarchyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureHierarchyPayload>[]
          }
          upsert: {
            args: Prisma.LectureHierarchyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureHierarchyPayload>
          }
          aggregate: {
            args: Prisma.LectureHierarchyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLectureHierarchy>
          }
          groupBy: {
            args: Prisma.LectureHierarchyGroupByArgs<ExtArgs>
            result: $Utils.Optional<LectureHierarchyGroupByOutputType>[]
          }
          count: {
            args: Prisma.LectureHierarchyCountArgs<ExtArgs>
            result: $Utils.Optional<LectureHierarchyCountAggregateOutputType> | number
          }
        }
      }
      LectureMarkdown: {
        payload: Prisma.$LectureMarkdownPayload<ExtArgs>
        fields: Prisma.LectureMarkdownFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LectureMarkdownFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureMarkdownPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LectureMarkdownFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureMarkdownPayload>
          }
          findFirst: {
            args: Prisma.LectureMarkdownFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureMarkdownPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LectureMarkdownFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureMarkdownPayload>
          }
          findMany: {
            args: Prisma.LectureMarkdownFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureMarkdownPayload>[]
          }
          create: {
            args: Prisma.LectureMarkdownCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureMarkdownPayload>
          }
          createMany: {
            args: Prisma.LectureMarkdownCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LectureMarkdownCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureMarkdownPayload>[]
          }
          delete: {
            args: Prisma.LectureMarkdownDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureMarkdownPayload>
          }
          update: {
            args: Prisma.LectureMarkdownUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureMarkdownPayload>
          }
          deleteMany: {
            args: Prisma.LectureMarkdownDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LectureMarkdownUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LectureMarkdownUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureMarkdownPayload>[]
          }
          upsert: {
            args: Prisma.LectureMarkdownUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureMarkdownPayload>
          }
          aggregate: {
            args: Prisma.LectureMarkdownAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLectureMarkdown>
          }
          groupBy: {
            args: Prisma.LectureMarkdownGroupByArgs<ExtArgs>
            result: $Utils.Optional<LectureMarkdownGroupByOutputType>[]
          }
          count: {
            args: Prisma.LectureMarkdownCountArgs<ExtArgs>
            result: $Utils.Optional<LectureMarkdownCountAggregateOutputType> | number
          }
        }
      }
      MarkdownBlock: {
        payload: Prisma.$MarkdownBlockPayload<ExtArgs>
        fields: Prisma.MarkdownBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarkdownBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkdownBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarkdownBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkdownBlockPayload>
          }
          findFirst: {
            args: Prisma.MarkdownBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkdownBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarkdownBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkdownBlockPayload>
          }
          findMany: {
            args: Prisma.MarkdownBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkdownBlockPayload>[]
          }
          create: {
            args: Prisma.MarkdownBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkdownBlockPayload>
          }
          createMany: {
            args: Prisma.MarkdownBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarkdownBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkdownBlockPayload>[]
          }
          delete: {
            args: Prisma.MarkdownBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkdownBlockPayload>
          }
          update: {
            args: Prisma.MarkdownBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkdownBlockPayload>
          }
          deleteMany: {
            args: Prisma.MarkdownBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarkdownBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarkdownBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkdownBlockPayload>[]
          }
          upsert: {
            args: Prisma.MarkdownBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkdownBlockPayload>
          }
          aggregate: {
            args: Prisma.MarkdownBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarkdownBlock>
          }
          groupBy: {
            args: Prisma.MarkdownBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarkdownBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarkdownBlockCountArgs<ExtArgs>
            result: $Utils.Optional<MarkdownBlockCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
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
    lectureHierarchy?: LectureHierarchyOmit
    lectureMarkdown?: LectureMarkdownOmit
    markdownBlock?: MarkdownBlockOmit
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
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
   * Count Type LectureHierarchyCountOutputType
   */

  export type LectureHierarchyCountOutputType = {
    blocks: number
    hierarchyChildren: number
  }

  export type LectureHierarchyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | LectureHierarchyCountOutputTypeCountBlocksArgs
    hierarchyChildren?: boolean | LectureHierarchyCountOutputTypeCountHierarchyChildrenArgs
  }

  // Custom InputTypes
  /**
   * LectureHierarchyCountOutputType without action
   */
  export type LectureHierarchyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchyCountOutputType
     */
    select?: LectureHierarchyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LectureHierarchyCountOutputType without action
   */
  export type LectureHierarchyCountOutputTypeCountBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureMarkdownWhereInput
  }

  /**
   * LectureHierarchyCountOutputType without action
   */
  export type LectureHierarchyCountOutputTypeCountHierarchyChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureHierarchyWhereInput
  }


  /**
   * Count Type MarkdownBlockCountOutputType
   */

  export type MarkdownBlockCountOutputType = {
    lectures: number
  }

  export type MarkdownBlockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lectures?: boolean | MarkdownBlockCountOutputTypeCountLecturesArgs
  }

  // Custom InputTypes
  /**
   * MarkdownBlockCountOutputType without action
   */
  export type MarkdownBlockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkdownBlockCountOutputType
     */
    select?: MarkdownBlockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarkdownBlockCountOutputType without action
   */
  export type MarkdownBlockCountOutputTypeCountLecturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureMarkdownWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    lecturesCreated: number
    lecturesUpdated: number
    blocksCreated: number
    blocksUpdated: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    lecturesCreated?: boolean | UserCountOutputTypeCountLecturesCreatedArgs
    lecturesUpdated?: boolean | UserCountOutputTypeCountLecturesUpdatedArgs
    blocksCreated?: boolean | UserCountOutputTypeCountBlocksCreatedArgs
    blocksUpdated?: boolean | UserCountOutputTypeCountBlocksUpdatedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLecturesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureHierarchyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLecturesUpdatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureHierarchyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlocksCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkdownBlockWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlocksUpdatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkdownBlockWhereInput
  }


  /**
   * Models
   */

  /**
   * Model LectureHierarchy
   */

  export type AggregateLectureHierarchy = {
    _count: LectureHierarchyCountAggregateOutputType | null
    _avg: LectureHierarchyAvgAggregateOutputType | null
    _sum: LectureHierarchySumAggregateOutputType | null
    _min: LectureHierarchyMinAggregateOutputType | null
    _max: LectureHierarchyMaxAggregateOutputType | null
  }

  export type LectureHierarchyAvgAggregateOutputType = {
    id: number | null
    HierarchyParentId: number | null
  }

  export type LectureHierarchySumAggregateOutputType = {
    id: number | null
    HierarchyParentId: number | null
  }

  export type LectureHierarchyMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isPublic: boolean | null
    createdById: string | null
    updatedById: string | null
    HierarchyParentId: number | null
  }

  export type LectureHierarchyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isPublic: boolean | null
    createdById: string | null
    updatedById: string | null
    HierarchyParentId: number | null
  }

  export type LectureHierarchyCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    isPublic: number
    createdById: number
    updatedById: number
    HierarchyParentId: number
    _all: number
  }


  export type LectureHierarchyAvgAggregateInputType = {
    id?: true
    HierarchyParentId?: true
  }

  export type LectureHierarchySumAggregateInputType = {
    id?: true
    HierarchyParentId?: true
  }

  export type LectureHierarchyMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    isPublic?: true
    createdById?: true
    updatedById?: true
    HierarchyParentId?: true
  }

  export type LectureHierarchyMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    isPublic?: true
    createdById?: true
    updatedById?: true
    HierarchyParentId?: true
  }

  export type LectureHierarchyCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    isPublic?: true
    createdById?: true
    updatedById?: true
    HierarchyParentId?: true
    _all?: true
  }

  export type LectureHierarchyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LectureHierarchy to aggregate.
     */
    where?: LectureHierarchyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureHierarchies to fetch.
     */
    orderBy?: LectureHierarchyOrderByWithRelationInput | LectureHierarchyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LectureHierarchyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureHierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureHierarchies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LectureHierarchies
    **/
    _count?: true | LectureHierarchyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LectureHierarchyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LectureHierarchySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LectureHierarchyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LectureHierarchyMaxAggregateInputType
  }

  export type GetLectureHierarchyAggregateType<T extends LectureHierarchyAggregateArgs> = {
        [P in keyof T & keyof AggregateLectureHierarchy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLectureHierarchy[P]>
      : GetScalarType<T[P], AggregateLectureHierarchy[P]>
  }




  export type LectureHierarchyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureHierarchyWhereInput
    orderBy?: LectureHierarchyOrderByWithAggregationInput | LectureHierarchyOrderByWithAggregationInput[]
    by: LectureHierarchyScalarFieldEnum[] | LectureHierarchyScalarFieldEnum
    having?: LectureHierarchyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LectureHierarchyCountAggregateInputType | true
    _avg?: LectureHierarchyAvgAggregateInputType
    _sum?: LectureHierarchySumAggregateInputType
    _min?: LectureHierarchyMinAggregateInputType
    _max?: LectureHierarchyMaxAggregateInputType
  }

  export type LectureHierarchyGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    isPublic: boolean
    createdById: string
    updatedById: string
    HierarchyParentId: number | null
    _count: LectureHierarchyCountAggregateOutputType | null
    _avg: LectureHierarchyAvgAggregateOutputType | null
    _sum: LectureHierarchySumAggregateOutputType | null
    _min: LectureHierarchyMinAggregateOutputType | null
    _max: LectureHierarchyMaxAggregateOutputType | null
  }

  type GetLectureHierarchyGroupByPayload<T extends LectureHierarchyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LectureHierarchyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LectureHierarchyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LectureHierarchyGroupByOutputType[P]>
            : GetScalarType<T[P], LectureHierarchyGroupByOutputType[P]>
        }
      >
    >


  export type LectureHierarchySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
    createdById?: boolean
    updatedById?: boolean
    HierarchyParentId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    blocks?: boolean | LectureHierarchy$blocksArgs<ExtArgs>
    hierarchyParent?: boolean | LectureHierarchy$hierarchyParentArgs<ExtArgs>
    hierarchyChildren?: boolean | LectureHierarchy$hierarchyChildrenArgs<ExtArgs>
    _count?: boolean | LectureHierarchyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lectureHierarchy"]>

  export type LectureHierarchySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
    createdById?: boolean
    updatedById?: boolean
    HierarchyParentId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    hierarchyParent?: boolean | LectureHierarchy$hierarchyParentArgs<ExtArgs>
  }, ExtArgs["result"]["lectureHierarchy"]>

  export type LectureHierarchySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
    createdById?: boolean
    updatedById?: boolean
    HierarchyParentId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    hierarchyParent?: boolean | LectureHierarchy$hierarchyParentArgs<ExtArgs>
  }, ExtArgs["result"]["lectureHierarchy"]>

  export type LectureHierarchySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
    createdById?: boolean
    updatedById?: boolean
    HierarchyParentId?: boolean
  }

  export type LectureHierarchyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "isPublic" | "createdById" | "updatedById" | "HierarchyParentId", ExtArgs["result"]["lectureHierarchy"]>
  export type LectureHierarchyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    blocks?: boolean | LectureHierarchy$blocksArgs<ExtArgs>
    hierarchyParent?: boolean | LectureHierarchy$hierarchyParentArgs<ExtArgs>
    hierarchyChildren?: boolean | LectureHierarchy$hierarchyChildrenArgs<ExtArgs>
    _count?: boolean | LectureHierarchyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LectureHierarchyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    hierarchyParent?: boolean | LectureHierarchy$hierarchyParentArgs<ExtArgs>
  }
  export type LectureHierarchyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    hierarchyParent?: boolean | LectureHierarchy$hierarchyParentArgs<ExtArgs>
  }

  export type $LectureHierarchyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LectureHierarchy"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      updatedBy: Prisma.$UserPayload<ExtArgs>
      blocks: Prisma.$LectureMarkdownPayload<ExtArgs>[]
      hierarchyParent: Prisma.$LectureHierarchyPayload<ExtArgs> | null
      hierarchyChildren: Prisma.$LectureHierarchyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      isPublic: boolean
      createdById: string
      updatedById: string
      HierarchyParentId: number | null
    }, ExtArgs["result"]["lectureHierarchy"]>
    composites: {}
  }

  type LectureHierarchyGetPayload<S extends boolean | null | undefined | LectureHierarchyDefaultArgs> = $Result.GetResult<Prisma.$LectureHierarchyPayload, S>

  type LectureHierarchyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LectureHierarchyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LectureHierarchyCountAggregateInputType | true
    }

  export interface LectureHierarchyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LectureHierarchy'], meta: { name: 'LectureHierarchy' } }
    /**
     * Find zero or one LectureHierarchy that matches the filter.
     * @param {LectureHierarchyFindUniqueArgs} args - Arguments to find a LectureHierarchy
     * @example
     * // Get one LectureHierarchy
     * const lectureHierarchy = await prisma.lectureHierarchy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LectureHierarchyFindUniqueArgs>(args: SelectSubset<T, LectureHierarchyFindUniqueArgs<ExtArgs>>): Prisma__LectureHierarchyClient<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LectureHierarchy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LectureHierarchyFindUniqueOrThrowArgs} args - Arguments to find a LectureHierarchy
     * @example
     * // Get one LectureHierarchy
     * const lectureHierarchy = await prisma.lectureHierarchy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LectureHierarchyFindUniqueOrThrowArgs>(args: SelectSubset<T, LectureHierarchyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LectureHierarchyClient<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LectureHierarchy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureHierarchyFindFirstArgs} args - Arguments to find a LectureHierarchy
     * @example
     * // Get one LectureHierarchy
     * const lectureHierarchy = await prisma.lectureHierarchy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LectureHierarchyFindFirstArgs>(args?: SelectSubset<T, LectureHierarchyFindFirstArgs<ExtArgs>>): Prisma__LectureHierarchyClient<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LectureHierarchy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureHierarchyFindFirstOrThrowArgs} args - Arguments to find a LectureHierarchy
     * @example
     * // Get one LectureHierarchy
     * const lectureHierarchy = await prisma.lectureHierarchy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LectureHierarchyFindFirstOrThrowArgs>(args?: SelectSubset<T, LectureHierarchyFindFirstOrThrowArgs<ExtArgs>>): Prisma__LectureHierarchyClient<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LectureHierarchies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureHierarchyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LectureHierarchies
     * const lectureHierarchies = await prisma.lectureHierarchy.findMany()
     * 
     * // Get first 10 LectureHierarchies
     * const lectureHierarchies = await prisma.lectureHierarchy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lectureHierarchyWithIdOnly = await prisma.lectureHierarchy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LectureHierarchyFindManyArgs>(args?: SelectSubset<T, LectureHierarchyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LectureHierarchy.
     * @param {LectureHierarchyCreateArgs} args - Arguments to create a LectureHierarchy.
     * @example
     * // Create one LectureHierarchy
     * const LectureHierarchy = await prisma.lectureHierarchy.create({
     *   data: {
     *     // ... data to create a LectureHierarchy
     *   }
     * })
     * 
     */
    create<T extends LectureHierarchyCreateArgs>(args: SelectSubset<T, LectureHierarchyCreateArgs<ExtArgs>>): Prisma__LectureHierarchyClient<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LectureHierarchies.
     * @param {LectureHierarchyCreateManyArgs} args - Arguments to create many LectureHierarchies.
     * @example
     * // Create many LectureHierarchies
     * const lectureHierarchy = await prisma.lectureHierarchy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LectureHierarchyCreateManyArgs>(args?: SelectSubset<T, LectureHierarchyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LectureHierarchies and returns the data saved in the database.
     * @param {LectureHierarchyCreateManyAndReturnArgs} args - Arguments to create many LectureHierarchies.
     * @example
     * // Create many LectureHierarchies
     * const lectureHierarchy = await prisma.lectureHierarchy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LectureHierarchies and only return the `id`
     * const lectureHierarchyWithIdOnly = await prisma.lectureHierarchy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LectureHierarchyCreateManyAndReturnArgs>(args?: SelectSubset<T, LectureHierarchyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LectureHierarchy.
     * @param {LectureHierarchyDeleteArgs} args - Arguments to delete one LectureHierarchy.
     * @example
     * // Delete one LectureHierarchy
     * const LectureHierarchy = await prisma.lectureHierarchy.delete({
     *   where: {
     *     // ... filter to delete one LectureHierarchy
     *   }
     * })
     * 
     */
    delete<T extends LectureHierarchyDeleteArgs>(args: SelectSubset<T, LectureHierarchyDeleteArgs<ExtArgs>>): Prisma__LectureHierarchyClient<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LectureHierarchy.
     * @param {LectureHierarchyUpdateArgs} args - Arguments to update one LectureHierarchy.
     * @example
     * // Update one LectureHierarchy
     * const lectureHierarchy = await prisma.lectureHierarchy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LectureHierarchyUpdateArgs>(args: SelectSubset<T, LectureHierarchyUpdateArgs<ExtArgs>>): Prisma__LectureHierarchyClient<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LectureHierarchies.
     * @param {LectureHierarchyDeleteManyArgs} args - Arguments to filter LectureHierarchies to delete.
     * @example
     * // Delete a few LectureHierarchies
     * const { count } = await prisma.lectureHierarchy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LectureHierarchyDeleteManyArgs>(args?: SelectSubset<T, LectureHierarchyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LectureHierarchies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureHierarchyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LectureHierarchies
     * const lectureHierarchy = await prisma.lectureHierarchy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LectureHierarchyUpdateManyArgs>(args: SelectSubset<T, LectureHierarchyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LectureHierarchies and returns the data updated in the database.
     * @param {LectureHierarchyUpdateManyAndReturnArgs} args - Arguments to update many LectureHierarchies.
     * @example
     * // Update many LectureHierarchies
     * const lectureHierarchy = await prisma.lectureHierarchy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LectureHierarchies and only return the `id`
     * const lectureHierarchyWithIdOnly = await prisma.lectureHierarchy.updateManyAndReturn({
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
    updateManyAndReturn<T extends LectureHierarchyUpdateManyAndReturnArgs>(args: SelectSubset<T, LectureHierarchyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LectureHierarchy.
     * @param {LectureHierarchyUpsertArgs} args - Arguments to update or create a LectureHierarchy.
     * @example
     * // Update or create a LectureHierarchy
     * const lectureHierarchy = await prisma.lectureHierarchy.upsert({
     *   create: {
     *     // ... data to create a LectureHierarchy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LectureHierarchy we want to update
     *   }
     * })
     */
    upsert<T extends LectureHierarchyUpsertArgs>(args: SelectSubset<T, LectureHierarchyUpsertArgs<ExtArgs>>): Prisma__LectureHierarchyClient<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LectureHierarchies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureHierarchyCountArgs} args - Arguments to filter LectureHierarchies to count.
     * @example
     * // Count the number of LectureHierarchies
     * const count = await prisma.lectureHierarchy.count({
     *   where: {
     *     // ... the filter for the LectureHierarchies we want to count
     *   }
     * })
    **/
    count<T extends LectureHierarchyCountArgs>(
      args?: Subset<T, LectureHierarchyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LectureHierarchyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LectureHierarchy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureHierarchyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LectureHierarchyAggregateArgs>(args: Subset<T, LectureHierarchyAggregateArgs>): Prisma.PrismaPromise<GetLectureHierarchyAggregateType<T>>

    /**
     * Group by LectureHierarchy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureHierarchyGroupByArgs} args - Group by arguments.
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
      T extends LectureHierarchyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LectureHierarchyGroupByArgs['orderBy'] }
        : { orderBy?: LectureHierarchyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LectureHierarchyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLectureHierarchyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LectureHierarchy model
   */
  readonly fields: LectureHierarchyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LectureHierarchy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LectureHierarchyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blocks<T extends LectureHierarchy$blocksArgs<ExtArgs> = {}>(args?: Subset<T, LectureHierarchy$blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureMarkdownPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hierarchyParent<T extends LectureHierarchy$hierarchyParentArgs<ExtArgs> = {}>(args?: Subset<T, LectureHierarchy$hierarchyParentArgs<ExtArgs>>): Prisma__LectureHierarchyClient<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    hierarchyChildren<T extends LectureHierarchy$hierarchyChildrenArgs<ExtArgs> = {}>(args?: Subset<T, LectureHierarchy$hierarchyChildrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LectureHierarchy model
   */
  interface LectureHierarchyFieldRefs {
    readonly id: FieldRef<"LectureHierarchy", 'Int'>
    readonly name: FieldRef<"LectureHierarchy", 'String'>
    readonly createdAt: FieldRef<"LectureHierarchy", 'DateTime'>
    readonly updatedAt: FieldRef<"LectureHierarchy", 'DateTime'>
    readonly isPublic: FieldRef<"LectureHierarchy", 'Boolean'>
    readonly createdById: FieldRef<"LectureHierarchy", 'String'>
    readonly updatedById: FieldRef<"LectureHierarchy", 'String'>
    readonly HierarchyParentId: FieldRef<"LectureHierarchy", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LectureHierarchy findUnique
   */
  export type LectureHierarchyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyInclude<ExtArgs> | null
    /**
     * Filter, which LectureHierarchy to fetch.
     */
    where: LectureHierarchyWhereUniqueInput
  }

  /**
   * LectureHierarchy findUniqueOrThrow
   */
  export type LectureHierarchyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyInclude<ExtArgs> | null
    /**
     * Filter, which LectureHierarchy to fetch.
     */
    where: LectureHierarchyWhereUniqueInput
  }

  /**
   * LectureHierarchy findFirst
   */
  export type LectureHierarchyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyInclude<ExtArgs> | null
    /**
     * Filter, which LectureHierarchy to fetch.
     */
    where?: LectureHierarchyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureHierarchies to fetch.
     */
    orderBy?: LectureHierarchyOrderByWithRelationInput | LectureHierarchyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LectureHierarchies.
     */
    cursor?: LectureHierarchyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureHierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureHierarchies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LectureHierarchies.
     */
    distinct?: LectureHierarchyScalarFieldEnum | LectureHierarchyScalarFieldEnum[]
  }

  /**
   * LectureHierarchy findFirstOrThrow
   */
  export type LectureHierarchyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyInclude<ExtArgs> | null
    /**
     * Filter, which LectureHierarchy to fetch.
     */
    where?: LectureHierarchyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureHierarchies to fetch.
     */
    orderBy?: LectureHierarchyOrderByWithRelationInput | LectureHierarchyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LectureHierarchies.
     */
    cursor?: LectureHierarchyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureHierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureHierarchies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LectureHierarchies.
     */
    distinct?: LectureHierarchyScalarFieldEnum | LectureHierarchyScalarFieldEnum[]
  }

  /**
   * LectureHierarchy findMany
   */
  export type LectureHierarchyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyInclude<ExtArgs> | null
    /**
     * Filter, which LectureHierarchies to fetch.
     */
    where?: LectureHierarchyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureHierarchies to fetch.
     */
    orderBy?: LectureHierarchyOrderByWithRelationInput | LectureHierarchyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LectureHierarchies.
     */
    cursor?: LectureHierarchyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureHierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureHierarchies.
     */
    skip?: number
    distinct?: LectureHierarchyScalarFieldEnum | LectureHierarchyScalarFieldEnum[]
  }

  /**
   * LectureHierarchy create
   */
  export type LectureHierarchyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyInclude<ExtArgs> | null
    /**
     * The data needed to create a LectureHierarchy.
     */
    data: XOR<LectureHierarchyCreateInput, LectureHierarchyUncheckedCreateInput>
  }

  /**
   * LectureHierarchy createMany
   */
  export type LectureHierarchyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LectureHierarchies.
     */
    data: LectureHierarchyCreateManyInput | LectureHierarchyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LectureHierarchy createManyAndReturn
   */
  export type LectureHierarchyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * The data used to create many LectureHierarchies.
     */
    data: LectureHierarchyCreateManyInput | LectureHierarchyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LectureHierarchy update
   */
  export type LectureHierarchyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyInclude<ExtArgs> | null
    /**
     * The data needed to update a LectureHierarchy.
     */
    data: XOR<LectureHierarchyUpdateInput, LectureHierarchyUncheckedUpdateInput>
    /**
     * Choose, which LectureHierarchy to update.
     */
    where: LectureHierarchyWhereUniqueInput
  }

  /**
   * LectureHierarchy updateMany
   */
  export type LectureHierarchyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LectureHierarchies.
     */
    data: XOR<LectureHierarchyUpdateManyMutationInput, LectureHierarchyUncheckedUpdateManyInput>
    /**
     * Filter which LectureHierarchies to update
     */
    where?: LectureHierarchyWhereInput
    /**
     * Limit how many LectureHierarchies to update.
     */
    limit?: number
  }

  /**
   * LectureHierarchy updateManyAndReturn
   */
  export type LectureHierarchyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * The data used to update LectureHierarchies.
     */
    data: XOR<LectureHierarchyUpdateManyMutationInput, LectureHierarchyUncheckedUpdateManyInput>
    /**
     * Filter which LectureHierarchies to update
     */
    where?: LectureHierarchyWhereInput
    /**
     * Limit how many LectureHierarchies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LectureHierarchy upsert
   */
  export type LectureHierarchyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyInclude<ExtArgs> | null
    /**
     * The filter to search for the LectureHierarchy to update in case it exists.
     */
    where: LectureHierarchyWhereUniqueInput
    /**
     * In case the LectureHierarchy found by the `where` argument doesn't exist, create a new LectureHierarchy with this data.
     */
    create: XOR<LectureHierarchyCreateInput, LectureHierarchyUncheckedCreateInput>
    /**
     * In case the LectureHierarchy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LectureHierarchyUpdateInput, LectureHierarchyUncheckedUpdateInput>
  }

  /**
   * LectureHierarchy delete
   */
  export type LectureHierarchyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyInclude<ExtArgs> | null
    /**
     * Filter which LectureHierarchy to delete.
     */
    where: LectureHierarchyWhereUniqueInput
  }

  /**
   * LectureHierarchy deleteMany
   */
  export type LectureHierarchyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LectureHierarchies to delete
     */
    where?: LectureHierarchyWhereInput
    /**
     * Limit how many LectureHierarchies to delete.
     */
    limit?: number
  }

  /**
   * LectureHierarchy.blocks
   */
  export type LectureHierarchy$blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureMarkdown
     */
    select?: LectureMarkdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureMarkdown
     */
    omit?: LectureMarkdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureMarkdownInclude<ExtArgs> | null
    where?: LectureMarkdownWhereInput
    orderBy?: LectureMarkdownOrderByWithRelationInput | LectureMarkdownOrderByWithRelationInput[]
    cursor?: LectureMarkdownWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LectureMarkdownScalarFieldEnum | LectureMarkdownScalarFieldEnum[]
  }

  /**
   * LectureHierarchy.hierarchyParent
   */
  export type LectureHierarchy$hierarchyParentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyInclude<ExtArgs> | null
    where?: LectureHierarchyWhereInput
  }

  /**
   * LectureHierarchy.hierarchyChildren
   */
  export type LectureHierarchy$hierarchyChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyInclude<ExtArgs> | null
    where?: LectureHierarchyWhereInput
    orderBy?: LectureHierarchyOrderByWithRelationInput | LectureHierarchyOrderByWithRelationInput[]
    cursor?: LectureHierarchyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LectureHierarchyScalarFieldEnum | LectureHierarchyScalarFieldEnum[]
  }

  /**
   * LectureHierarchy without action
   */
  export type LectureHierarchyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyInclude<ExtArgs> | null
  }


  /**
   * Model LectureMarkdown
   */

  export type AggregateLectureMarkdown = {
    _count: LectureMarkdownCountAggregateOutputType | null
    _avg: LectureMarkdownAvgAggregateOutputType | null
    _sum: LectureMarkdownSumAggregateOutputType | null
    _min: LectureMarkdownMinAggregateOutputType | null
    _max: LectureMarkdownMaxAggregateOutputType | null
  }

  export type LectureMarkdownAvgAggregateOutputType = {
    order: number | null
    lectureId: number | null
    blockId: number | null
  }

  export type LectureMarkdownSumAggregateOutputType = {
    order: number | null
    lectureId: number | null
    blockId: number | null
  }

  export type LectureMarkdownMinAggregateOutputType = {
    order: number | null
    lectureId: number | null
    blockId: number | null
  }

  export type LectureMarkdownMaxAggregateOutputType = {
    order: number | null
    lectureId: number | null
    blockId: number | null
  }

  export type LectureMarkdownCountAggregateOutputType = {
    order: number
    lectureId: number
    blockId: number
    _all: number
  }


  export type LectureMarkdownAvgAggregateInputType = {
    order?: true
    lectureId?: true
    blockId?: true
  }

  export type LectureMarkdownSumAggregateInputType = {
    order?: true
    lectureId?: true
    blockId?: true
  }

  export type LectureMarkdownMinAggregateInputType = {
    order?: true
    lectureId?: true
    blockId?: true
  }

  export type LectureMarkdownMaxAggregateInputType = {
    order?: true
    lectureId?: true
    blockId?: true
  }

  export type LectureMarkdownCountAggregateInputType = {
    order?: true
    lectureId?: true
    blockId?: true
    _all?: true
  }

  export type LectureMarkdownAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LectureMarkdown to aggregate.
     */
    where?: LectureMarkdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureMarkdowns to fetch.
     */
    orderBy?: LectureMarkdownOrderByWithRelationInput | LectureMarkdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LectureMarkdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureMarkdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureMarkdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LectureMarkdowns
    **/
    _count?: true | LectureMarkdownCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LectureMarkdownAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LectureMarkdownSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LectureMarkdownMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LectureMarkdownMaxAggregateInputType
  }

  export type GetLectureMarkdownAggregateType<T extends LectureMarkdownAggregateArgs> = {
        [P in keyof T & keyof AggregateLectureMarkdown]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLectureMarkdown[P]>
      : GetScalarType<T[P], AggregateLectureMarkdown[P]>
  }




  export type LectureMarkdownGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureMarkdownWhereInput
    orderBy?: LectureMarkdownOrderByWithAggregationInput | LectureMarkdownOrderByWithAggregationInput[]
    by: LectureMarkdownScalarFieldEnum[] | LectureMarkdownScalarFieldEnum
    having?: LectureMarkdownScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LectureMarkdownCountAggregateInputType | true
    _avg?: LectureMarkdownAvgAggregateInputType
    _sum?: LectureMarkdownSumAggregateInputType
    _min?: LectureMarkdownMinAggregateInputType
    _max?: LectureMarkdownMaxAggregateInputType
  }

  export type LectureMarkdownGroupByOutputType = {
    order: number
    lectureId: number
    blockId: number
    _count: LectureMarkdownCountAggregateOutputType | null
    _avg: LectureMarkdownAvgAggregateOutputType | null
    _sum: LectureMarkdownSumAggregateOutputType | null
    _min: LectureMarkdownMinAggregateOutputType | null
    _max: LectureMarkdownMaxAggregateOutputType | null
  }

  type GetLectureMarkdownGroupByPayload<T extends LectureMarkdownGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LectureMarkdownGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LectureMarkdownGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LectureMarkdownGroupByOutputType[P]>
            : GetScalarType<T[P], LectureMarkdownGroupByOutputType[P]>
        }
      >
    >


  export type LectureMarkdownSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order?: boolean
    lectureId?: boolean
    blockId?: boolean
    lecture?: boolean | LectureHierarchyDefaultArgs<ExtArgs>
    block?: boolean | MarkdownBlockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lectureMarkdown"]>

  export type LectureMarkdownSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order?: boolean
    lectureId?: boolean
    blockId?: boolean
    lecture?: boolean | LectureHierarchyDefaultArgs<ExtArgs>
    block?: boolean | MarkdownBlockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lectureMarkdown"]>

  export type LectureMarkdownSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order?: boolean
    lectureId?: boolean
    blockId?: boolean
    lecture?: boolean | LectureHierarchyDefaultArgs<ExtArgs>
    block?: boolean | MarkdownBlockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lectureMarkdown"]>

  export type LectureMarkdownSelectScalar = {
    order?: boolean
    lectureId?: boolean
    blockId?: boolean
  }

  export type LectureMarkdownOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order" | "lectureId" | "blockId", ExtArgs["result"]["lectureMarkdown"]>
  export type LectureMarkdownInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture?: boolean | LectureHierarchyDefaultArgs<ExtArgs>
    block?: boolean | MarkdownBlockDefaultArgs<ExtArgs>
  }
  export type LectureMarkdownIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture?: boolean | LectureHierarchyDefaultArgs<ExtArgs>
    block?: boolean | MarkdownBlockDefaultArgs<ExtArgs>
  }
  export type LectureMarkdownIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture?: boolean | LectureHierarchyDefaultArgs<ExtArgs>
    block?: boolean | MarkdownBlockDefaultArgs<ExtArgs>
  }

  export type $LectureMarkdownPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LectureMarkdown"
    objects: {
      lecture: Prisma.$LectureHierarchyPayload<ExtArgs>
      block: Prisma.$MarkdownBlockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      order: number
      lectureId: number
      blockId: number
    }, ExtArgs["result"]["lectureMarkdown"]>
    composites: {}
  }

  type LectureMarkdownGetPayload<S extends boolean | null | undefined | LectureMarkdownDefaultArgs> = $Result.GetResult<Prisma.$LectureMarkdownPayload, S>

  type LectureMarkdownCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LectureMarkdownFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LectureMarkdownCountAggregateInputType | true
    }

  export interface LectureMarkdownDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LectureMarkdown'], meta: { name: 'LectureMarkdown' } }
    /**
     * Find zero or one LectureMarkdown that matches the filter.
     * @param {LectureMarkdownFindUniqueArgs} args - Arguments to find a LectureMarkdown
     * @example
     * // Get one LectureMarkdown
     * const lectureMarkdown = await prisma.lectureMarkdown.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LectureMarkdownFindUniqueArgs>(args: SelectSubset<T, LectureMarkdownFindUniqueArgs<ExtArgs>>): Prisma__LectureMarkdownClient<$Result.GetResult<Prisma.$LectureMarkdownPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LectureMarkdown that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LectureMarkdownFindUniqueOrThrowArgs} args - Arguments to find a LectureMarkdown
     * @example
     * // Get one LectureMarkdown
     * const lectureMarkdown = await prisma.lectureMarkdown.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LectureMarkdownFindUniqueOrThrowArgs>(args: SelectSubset<T, LectureMarkdownFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LectureMarkdownClient<$Result.GetResult<Prisma.$LectureMarkdownPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LectureMarkdown that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureMarkdownFindFirstArgs} args - Arguments to find a LectureMarkdown
     * @example
     * // Get one LectureMarkdown
     * const lectureMarkdown = await prisma.lectureMarkdown.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LectureMarkdownFindFirstArgs>(args?: SelectSubset<T, LectureMarkdownFindFirstArgs<ExtArgs>>): Prisma__LectureMarkdownClient<$Result.GetResult<Prisma.$LectureMarkdownPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LectureMarkdown that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureMarkdownFindFirstOrThrowArgs} args - Arguments to find a LectureMarkdown
     * @example
     * // Get one LectureMarkdown
     * const lectureMarkdown = await prisma.lectureMarkdown.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LectureMarkdownFindFirstOrThrowArgs>(args?: SelectSubset<T, LectureMarkdownFindFirstOrThrowArgs<ExtArgs>>): Prisma__LectureMarkdownClient<$Result.GetResult<Prisma.$LectureMarkdownPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LectureMarkdowns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureMarkdownFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LectureMarkdowns
     * const lectureMarkdowns = await prisma.lectureMarkdown.findMany()
     * 
     * // Get first 10 LectureMarkdowns
     * const lectureMarkdowns = await prisma.lectureMarkdown.findMany({ take: 10 })
     * 
     * // Only select the `order`
     * const lectureMarkdownWithOrderOnly = await prisma.lectureMarkdown.findMany({ select: { order: true } })
     * 
     */
    findMany<T extends LectureMarkdownFindManyArgs>(args?: SelectSubset<T, LectureMarkdownFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureMarkdownPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LectureMarkdown.
     * @param {LectureMarkdownCreateArgs} args - Arguments to create a LectureMarkdown.
     * @example
     * // Create one LectureMarkdown
     * const LectureMarkdown = await prisma.lectureMarkdown.create({
     *   data: {
     *     // ... data to create a LectureMarkdown
     *   }
     * })
     * 
     */
    create<T extends LectureMarkdownCreateArgs>(args: SelectSubset<T, LectureMarkdownCreateArgs<ExtArgs>>): Prisma__LectureMarkdownClient<$Result.GetResult<Prisma.$LectureMarkdownPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LectureMarkdowns.
     * @param {LectureMarkdownCreateManyArgs} args - Arguments to create many LectureMarkdowns.
     * @example
     * // Create many LectureMarkdowns
     * const lectureMarkdown = await prisma.lectureMarkdown.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LectureMarkdownCreateManyArgs>(args?: SelectSubset<T, LectureMarkdownCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LectureMarkdowns and returns the data saved in the database.
     * @param {LectureMarkdownCreateManyAndReturnArgs} args - Arguments to create many LectureMarkdowns.
     * @example
     * // Create many LectureMarkdowns
     * const lectureMarkdown = await prisma.lectureMarkdown.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LectureMarkdowns and only return the `order`
     * const lectureMarkdownWithOrderOnly = await prisma.lectureMarkdown.createManyAndReturn({
     *   select: { order: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LectureMarkdownCreateManyAndReturnArgs>(args?: SelectSubset<T, LectureMarkdownCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureMarkdownPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LectureMarkdown.
     * @param {LectureMarkdownDeleteArgs} args - Arguments to delete one LectureMarkdown.
     * @example
     * // Delete one LectureMarkdown
     * const LectureMarkdown = await prisma.lectureMarkdown.delete({
     *   where: {
     *     // ... filter to delete one LectureMarkdown
     *   }
     * })
     * 
     */
    delete<T extends LectureMarkdownDeleteArgs>(args: SelectSubset<T, LectureMarkdownDeleteArgs<ExtArgs>>): Prisma__LectureMarkdownClient<$Result.GetResult<Prisma.$LectureMarkdownPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LectureMarkdown.
     * @param {LectureMarkdownUpdateArgs} args - Arguments to update one LectureMarkdown.
     * @example
     * // Update one LectureMarkdown
     * const lectureMarkdown = await prisma.lectureMarkdown.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LectureMarkdownUpdateArgs>(args: SelectSubset<T, LectureMarkdownUpdateArgs<ExtArgs>>): Prisma__LectureMarkdownClient<$Result.GetResult<Prisma.$LectureMarkdownPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LectureMarkdowns.
     * @param {LectureMarkdownDeleteManyArgs} args - Arguments to filter LectureMarkdowns to delete.
     * @example
     * // Delete a few LectureMarkdowns
     * const { count } = await prisma.lectureMarkdown.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LectureMarkdownDeleteManyArgs>(args?: SelectSubset<T, LectureMarkdownDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LectureMarkdowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureMarkdownUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LectureMarkdowns
     * const lectureMarkdown = await prisma.lectureMarkdown.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LectureMarkdownUpdateManyArgs>(args: SelectSubset<T, LectureMarkdownUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LectureMarkdowns and returns the data updated in the database.
     * @param {LectureMarkdownUpdateManyAndReturnArgs} args - Arguments to update many LectureMarkdowns.
     * @example
     * // Update many LectureMarkdowns
     * const lectureMarkdown = await prisma.lectureMarkdown.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LectureMarkdowns and only return the `order`
     * const lectureMarkdownWithOrderOnly = await prisma.lectureMarkdown.updateManyAndReturn({
     *   select: { order: true },
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
    updateManyAndReturn<T extends LectureMarkdownUpdateManyAndReturnArgs>(args: SelectSubset<T, LectureMarkdownUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureMarkdownPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LectureMarkdown.
     * @param {LectureMarkdownUpsertArgs} args - Arguments to update or create a LectureMarkdown.
     * @example
     * // Update or create a LectureMarkdown
     * const lectureMarkdown = await prisma.lectureMarkdown.upsert({
     *   create: {
     *     // ... data to create a LectureMarkdown
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LectureMarkdown we want to update
     *   }
     * })
     */
    upsert<T extends LectureMarkdownUpsertArgs>(args: SelectSubset<T, LectureMarkdownUpsertArgs<ExtArgs>>): Prisma__LectureMarkdownClient<$Result.GetResult<Prisma.$LectureMarkdownPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LectureMarkdowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureMarkdownCountArgs} args - Arguments to filter LectureMarkdowns to count.
     * @example
     * // Count the number of LectureMarkdowns
     * const count = await prisma.lectureMarkdown.count({
     *   where: {
     *     // ... the filter for the LectureMarkdowns we want to count
     *   }
     * })
    **/
    count<T extends LectureMarkdownCountArgs>(
      args?: Subset<T, LectureMarkdownCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LectureMarkdownCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LectureMarkdown.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureMarkdownAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LectureMarkdownAggregateArgs>(args: Subset<T, LectureMarkdownAggregateArgs>): Prisma.PrismaPromise<GetLectureMarkdownAggregateType<T>>

    /**
     * Group by LectureMarkdown.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureMarkdownGroupByArgs} args - Group by arguments.
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
      T extends LectureMarkdownGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LectureMarkdownGroupByArgs['orderBy'] }
        : { orderBy?: LectureMarkdownGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LectureMarkdownGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLectureMarkdownGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LectureMarkdown model
   */
  readonly fields: LectureMarkdownFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LectureMarkdown.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LectureMarkdownClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecture<T extends LectureHierarchyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LectureHierarchyDefaultArgs<ExtArgs>>): Prisma__LectureHierarchyClient<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    block<T extends MarkdownBlockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarkdownBlockDefaultArgs<ExtArgs>>): Prisma__MarkdownBlockClient<$Result.GetResult<Prisma.$MarkdownBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LectureMarkdown model
   */
  interface LectureMarkdownFieldRefs {
    readonly order: FieldRef<"LectureMarkdown", 'Int'>
    readonly lectureId: FieldRef<"LectureMarkdown", 'Int'>
    readonly blockId: FieldRef<"LectureMarkdown", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LectureMarkdown findUnique
   */
  export type LectureMarkdownFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureMarkdown
     */
    select?: LectureMarkdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureMarkdown
     */
    omit?: LectureMarkdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureMarkdownInclude<ExtArgs> | null
    /**
     * Filter, which LectureMarkdown to fetch.
     */
    where: LectureMarkdownWhereUniqueInput
  }

  /**
   * LectureMarkdown findUniqueOrThrow
   */
  export type LectureMarkdownFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureMarkdown
     */
    select?: LectureMarkdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureMarkdown
     */
    omit?: LectureMarkdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureMarkdownInclude<ExtArgs> | null
    /**
     * Filter, which LectureMarkdown to fetch.
     */
    where: LectureMarkdownWhereUniqueInput
  }

  /**
   * LectureMarkdown findFirst
   */
  export type LectureMarkdownFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureMarkdown
     */
    select?: LectureMarkdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureMarkdown
     */
    omit?: LectureMarkdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureMarkdownInclude<ExtArgs> | null
    /**
     * Filter, which LectureMarkdown to fetch.
     */
    where?: LectureMarkdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureMarkdowns to fetch.
     */
    orderBy?: LectureMarkdownOrderByWithRelationInput | LectureMarkdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LectureMarkdowns.
     */
    cursor?: LectureMarkdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureMarkdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureMarkdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LectureMarkdowns.
     */
    distinct?: LectureMarkdownScalarFieldEnum | LectureMarkdownScalarFieldEnum[]
  }

  /**
   * LectureMarkdown findFirstOrThrow
   */
  export type LectureMarkdownFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureMarkdown
     */
    select?: LectureMarkdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureMarkdown
     */
    omit?: LectureMarkdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureMarkdownInclude<ExtArgs> | null
    /**
     * Filter, which LectureMarkdown to fetch.
     */
    where?: LectureMarkdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureMarkdowns to fetch.
     */
    orderBy?: LectureMarkdownOrderByWithRelationInput | LectureMarkdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LectureMarkdowns.
     */
    cursor?: LectureMarkdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureMarkdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureMarkdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LectureMarkdowns.
     */
    distinct?: LectureMarkdownScalarFieldEnum | LectureMarkdownScalarFieldEnum[]
  }

  /**
   * LectureMarkdown findMany
   */
  export type LectureMarkdownFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureMarkdown
     */
    select?: LectureMarkdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureMarkdown
     */
    omit?: LectureMarkdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureMarkdownInclude<ExtArgs> | null
    /**
     * Filter, which LectureMarkdowns to fetch.
     */
    where?: LectureMarkdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureMarkdowns to fetch.
     */
    orderBy?: LectureMarkdownOrderByWithRelationInput | LectureMarkdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LectureMarkdowns.
     */
    cursor?: LectureMarkdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureMarkdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureMarkdowns.
     */
    skip?: number
    distinct?: LectureMarkdownScalarFieldEnum | LectureMarkdownScalarFieldEnum[]
  }

  /**
   * LectureMarkdown create
   */
  export type LectureMarkdownCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureMarkdown
     */
    select?: LectureMarkdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureMarkdown
     */
    omit?: LectureMarkdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureMarkdownInclude<ExtArgs> | null
    /**
     * The data needed to create a LectureMarkdown.
     */
    data: XOR<LectureMarkdownCreateInput, LectureMarkdownUncheckedCreateInput>
  }

  /**
   * LectureMarkdown createMany
   */
  export type LectureMarkdownCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LectureMarkdowns.
     */
    data: LectureMarkdownCreateManyInput | LectureMarkdownCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LectureMarkdown createManyAndReturn
   */
  export type LectureMarkdownCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureMarkdown
     */
    select?: LectureMarkdownSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LectureMarkdown
     */
    omit?: LectureMarkdownOmit<ExtArgs> | null
    /**
     * The data used to create many LectureMarkdowns.
     */
    data: LectureMarkdownCreateManyInput | LectureMarkdownCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureMarkdownIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LectureMarkdown update
   */
  export type LectureMarkdownUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureMarkdown
     */
    select?: LectureMarkdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureMarkdown
     */
    omit?: LectureMarkdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureMarkdownInclude<ExtArgs> | null
    /**
     * The data needed to update a LectureMarkdown.
     */
    data: XOR<LectureMarkdownUpdateInput, LectureMarkdownUncheckedUpdateInput>
    /**
     * Choose, which LectureMarkdown to update.
     */
    where: LectureMarkdownWhereUniqueInput
  }

  /**
   * LectureMarkdown updateMany
   */
  export type LectureMarkdownUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LectureMarkdowns.
     */
    data: XOR<LectureMarkdownUpdateManyMutationInput, LectureMarkdownUncheckedUpdateManyInput>
    /**
     * Filter which LectureMarkdowns to update
     */
    where?: LectureMarkdownWhereInput
    /**
     * Limit how many LectureMarkdowns to update.
     */
    limit?: number
  }

  /**
   * LectureMarkdown updateManyAndReturn
   */
  export type LectureMarkdownUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureMarkdown
     */
    select?: LectureMarkdownSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LectureMarkdown
     */
    omit?: LectureMarkdownOmit<ExtArgs> | null
    /**
     * The data used to update LectureMarkdowns.
     */
    data: XOR<LectureMarkdownUpdateManyMutationInput, LectureMarkdownUncheckedUpdateManyInput>
    /**
     * Filter which LectureMarkdowns to update
     */
    where?: LectureMarkdownWhereInput
    /**
     * Limit how many LectureMarkdowns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureMarkdownIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LectureMarkdown upsert
   */
  export type LectureMarkdownUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureMarkdown
     */
    select?: LectureMarkdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureMarkdown
     */
    omit?: LectureMarkdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureMarkdownInclude<ExtArgs> | null
    /**
     * The filter to search for the LectureMarkdown to update in case it exists.
     */
    where: LectureMarkdownWhereUniqueInput
    /**
     * In case the LectureMarkdown found by the `where` argument doesn't exist, create a new LectureMarkdown with this data.
     */
    create: XOR<LectureMarkdownCreateInput, LectureMarkdownUncheckedCreateInput>
    /**
     * In case the LectureMarkdown was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LectureMarkdownUpdateInput, LectureMarkdownUncheckedUpdateInput>
  }

  /**
   * LectureMarkdown delete
   */
  export type LectureMarkdownDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureMarkdown
     */
    select?: LectureMarkdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureMarkdown
     */
    omit?: LectureMarkdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureMarkdownInclude<ExtArgs> | null
    /**
     * Filter which LectureMarkdown to delete.
     */
    where: LectureMarkdownWhereUniqueInput
  }

  /**
   * LectureMarkdown deleteMany
   */
  export type LectureMarkdownDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LectureMarkdowns to delete
     */
    where?: LectureMarkdownWhereInput
    /**
     * Limit how many LectureMarkdowns to delete.
     */
    limit?: number
  }

  /**
   * LectureMarkdown without action
   */
  export type LectureMarkdownDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureMarkdown
     */
    select?: LectureMarkdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureMarkdown
     */
    omit?: LectureMarkdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureMarkdownInclude<ExtArgs> | null
  }


  /**
   * Model MarkdownBlock
   */

  export type AggregateMarkdownBlock = {
    _count: MarkdownBlockCountAggregateOutputType | null
    _avg: MarkdownBlockAvgAggregateOutputType | null
    _sum: MarkdownBlockSumAggregateOutputType | null
    _min: MarkdownBlockMinAggregateOutputType | null
    _max: MarkdownBlockMaxAggregateOutputType | null
  }

  export type MarkdownBlockAvgAggregateOutputType = {
    id: number | null
  }

  export type MarkdownBlockSumAggregateOutputType = {
    id: number | null
  }

  export type MarkdownBlockMinAggregateOutputType = {
    id: number | null
    name: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
    updatedById: string | null
  }

  export type MarkdownBlockMaxAggregateOutputType = {
    id: number | null
    name: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
    updatedById: string | null
  }

  export type MarkdownBlockCountAggregateOutputType = {
    id: number
    name: number
    content: number
    createdAt: number
    updatedAt: number
    createdById: number
    updatedById: number
    _all: number
  }


  export type MarkdownBlockAvgAggregateInputType = {
    id?: true
  }

  export type MarkdownBlockSumAggregateInputType = {
    id?: true
  }

  export type MarkdownBlockMinAggregateInputType = {
    id?: true
    name?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    updatedById?: true
  }

  export type MarkdownBlockMaxAggregateInputType = {
    id?: true
    name?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    updatedById?: true
  }

  export type MarkdownBlockCountAggregateInputType = {
    id?: true
    name?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    updatedById?: true
    _all?: true
  }

  export type MarkdownBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarkdownBlock to aggregate.
     */
    where?: MarkdownBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarkdownBlocks to fetch.
     */
    orderBy?: MarkdownBlockOrderByWithRelationInput | MarkdownBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarkdownBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarkdownBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarkdownBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarkdownBlocks
    **/
    _count?: true | MarkdownBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarkdownBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarkdownBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarkdownBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarkdownBlockMaxAggregateInputType
  }

  export type GetMarkdownBlockAggregateType<T extends MarkdownBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateMarkdownBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarkdownBlock[P]>
      : GetScalarType<T[P], AggregateMarkdownBlock[P]>
  }




  export type MarkdownBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkdownBlockWhereInput
    orderBy?: MarkdownBlockOrderByWithAggregationInput | MarkdownBlockOrderByWithAggregationInput[]
    by: MarkdownBlockScalarFieldEnum[] | MarkdownBlockScalarFieldEnum
    having?: MarkdownBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarkdownBlockCountAggregateInputType | true
    _avg?: MarkdownBlockAvgAggregateInputType
    _sum?: MarkdownBlockSumAggregateInputType
    _min?: MarkdownBlockMinAggregateInputType
    _max?: MarkdownBlockMaxAggregateInputType
  }

  export type MarkdownBlockGroupByOutputType = {
    id: number
    name: string
    content: string | null
    createdAt: Date
    updatedAt: Date
    createdById: string
    updatedById: string
    _count: MarkdownBlockCountAggregateOutputType | null
    _avg: MarkdownBlockAvgAggregateOutputType | null
    _sum: MarkdownBlockSumAggregateOutputType | null
    _min: MarkdownBlockMinAggregateOutputType | null
    _max: MarkdownBlockMaxAggregateOutputType | null
  }

  type GetMarkdownBlockGroupByPayload<T extends MarkdownBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarkdownBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarkdownBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarkdownBlockGroupByOutputType[P]>
            : GetScalarType<T[P], MarkdownBlockGroupByOutputType[P]>
        }
      >
    >


  export type MarkdownBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    lectures?: boolean | MarkdownBlock$lecturesArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | MarkdownBlockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["markdownBlock"]>

  export type MarkdownBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["markdownBlock"]>

  export type MarkdownBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["markdownBlock"]>

  export type MarkdownBlockSelectScalar = {
    id?: boolean
    name?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
  }

  export type MarkdownBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "content" | "createdAt" | "updatedAt" | "createdById" | "updatedById", ExtArgs["result"]["markdownBlock"]>
  export type MarkdownBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lectures?: boolean | MarkdownBlock$lecturesArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | MarkdownBlockCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarkdownBlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MarkdownBlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MarkdownBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarkdownBlock"
    objects: {
      lectures: Prisma.$LectureMarkdownPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs>
      updatedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      content: string | null
      createdAt: Date
      updatedAt: Date
      createdById: string
      updatedById: string
    }, ExtArgs["result"]["markdownBlock"]>
    composites: {}
  }

  type MarkdownBlockGetPayload<S extends boolean | null | undefined | MarkdownBlockDefaultArgs> = $Result.GetResult<Prisma.$MarkdownBlockPayload, S>

  type MarkdownBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarkdownBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarkdownBlockCountAggregateInputType | true
    }

  export interface MarkdownBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarkdownBlock'], meta: { name: 'MarkdownBlock' } }
    /**
     * Find zero or one MarkdownBlock that matches the filter.
     * @param {MarkdownBlockFindUniqueArgs} args - Arguments to find a MarkdownBlock
     * @example
     * // Get one MarkdownBlock
     * const markdownBlock = await prisma.markdownBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarkdownBlockFindUniqueArgs>(args: SelectSubset<T, MarkdownBlockFindUniqueArgs<ExtArgs>>): Prisma__MarkdownBlockClient<$Result.GetResult<Prisma.$MarkdownBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarkdownBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarkdownBlockFindUniqueOrThrowArgs} args - Arguments to find a MarkdownBlock
     * @example
     * // Get one MarkdownBlock
     * const markdownBlock = await prisma.markdownBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarkdownBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, MarkdownBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarkdownBlockClient<$Result.GetResult<Prisma.$MarkdownBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarkdownBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownBlockFindFirstArgs} args - Arguments to find a MarkdownBlock
     * @example
     * // Get one MarkdownBlock
     * const markdownBlock = await prisma.markdownBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarkdownBlockFindFirstArgs>(args?: SelectSubset<T, MarkdownBlockFindFirstArgs<ExtArgs>>): Prisma__MarkdownBlockClient<$Result.GetResult<Prisma.$MarkdownBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarkdownBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownBlockFindFirstOrThrowArgs} args - Arguments to find a MarkdownBlock
     * @example
     * // Get one MarkdownBlock
     * const markdownBlock = await prisma.markdownBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarkdownBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, MarkdownBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarkdownBlockClient<$Result.GetResult<Prisma.$MarkdownBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarkdownBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarkdownBlocks
     * const markdownBlocks = await prisma.markdownBlock.findMany()
     * 
     * // Get first 10 MarkdownBlocks
     * const markdownBlocks = await prisma.markdownBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const markdownBlockWithIdOnly = await prisma.markdownBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarkdownBlockFindManyArgs>(args?: SelectSubset<T, MarkdownBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkdownBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarkdownBlock.
     * @param {MarkdownBlockCreateArgs} args - Arguments to create a MarkdownBlock.
     * @example
     * // Create one MarkdownBlock
     * const MarkdownBlock = await prisma.markdownBlock.create({
     *   data: {
     *     // ... data to create a MarkdownBlock
     *   }
     * })
     * 
     */
    create<T extends MarkdownBlockCreateArgs>(args: SelectSubset<T, MarkdownBlockCreateArgs<ExtArgs>>): Prisma__MarkdownBlockClient<$Result.GetResult<Prisma.$MarkdownBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarkdownBlocks.
     * @param {MarkdownBlockCreateManyArgs} args - Arguments to create many MarkdownBlocks.
     * @example
     * // Create many MarkdownBlocks
     * const markdownBlock = await prisma.markdownBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarkdownBlockCreateManyArgs>(args?: SelectSubset<T, MarkdownBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarkdownBlocks and returns the data saved in the database.
     * @param {MarkdownBlockCreateManyAndReturnArgs} args - Arguments to create many MarkdownBlocks.
     * @example
     * // Create many MarkdownBlocks
     * const markdownBlock = await prisma.markdownBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarkdownBlocks and only return the `id`
     * const markdownBlockWithIdOnly = await prisma.markdownBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarkdownBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, MarkdownBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkdownBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarkdownBlock.
     * @param {MarkdownBlockDeleteArgs} args - Arguments to delete one MarkdownBlock.
     * @example
     * // Delete one MarkdownBlock
     * const MarkdownBlock = await prisma.markdownBlock.delete({
     *   where: {
     *     // ... filter to delete one MarkdownBlock
     *   }
     * })
     * 
     */
    delete<T extends MarkdownBlockDeleteArgs>(args: SelectSubset<T, MarkdownBlockDeleteArgs<ExtArgs>>): Prisma__MarkdownBlockClient<$Result.GetResult<Prisma.$MarkdownBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarkdownBlock.
     * @param {MarkdownBlockUpdateArgs} args - Arguments to update one MarkdownBlock.
     * @example
     * // Update one MarkdownBlock
     * const markdownBlock = await prisma.markdownBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarkdownBlockUpdateArgs>(args: SelectSubset<T, MarkdownBlockUpdateArgs<ExtArgs>>): Prisma__MarkdownBlockClient<$Result.GetResult<Prisma.$MarkdownBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarkdownBlocks.
     * @param {MarkdownBlockDeleteManyArgs} args - Arguments to filter MarkdownBlocks to delete.
     * @example
     * // Delete a few MarkdownBlocks
     * const { count } = await prisma.markdownBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarkdownBlockDeleteManyArgs>(args?: SelectSubset<T, MarkdownBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarkdownBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarkdownBlocks
     * const markdownBlock = await prisma.markdownBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarkdownBlockUpdateManyArgs>(args: SelectSubset<T, MarkdownBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarkdownBlocks and returns the data updated in the database.
     * @param {MarkdownBlockUpdateManyAndReturnArgs} args - Arguments to update many MarkdownBlocks.
     * @example
     * // Update many MarkdownBlocks
     * const markdownBlock = await prisma.markdownBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarkdownBlocks and only return the `id`
     * const markdownBlockWithIdOnly = await prisma.markdownBlock.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarkdownBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, MarkdownBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkdownBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarkdownBlock.
     * @param {MarkdownBlockUpsertArgs} args - Arguments to update or create a MarkdownBlock.
     * @example
     * // Update or create a MarkdownBlock
     * const markdownBlock = await prisma.markdownBlock.upsert({
     *   create: {
     *     // ... data to create a MarkdownBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarkdownBlock we want to update
     *   }
     * })
     */
    upsert<T extends MarkdownBlockUpsertArgs>(args: SelectSubset<T, MarkdownBlockUpsertArgs<ExtArgs>>): Prisma__MarkdownBlockClient<$Result.GetResult<Prisma.$MarkdownBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarkdownBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownBlockCountArgs} args - Arguments to filter MarkdownBlocks to count.
     * @example
     * // Count the number of MarkdownBlocks
     * const count = await prisma.markdownBlock.count({
     *   where: {
     *     // ... the filter for the MarkdownBlocks we want to count
     *   }
     * })
    **/
    count<T extends MarkdownBlockCountArgs>(
      args?: Subset<T, MarkdownBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarkdownBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarkdownBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarkdownBlockAggregateArgs>(args: Subset<T, MarkdownBlockAggregateArgs>): Prisma.PrismaPromise<GetMarkdownBlockAggregateType<T>>

    /**
     * Group by MarkdownBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdownBlockGroupByArgs} args - Group by arguments.
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
      T extends MarkdownBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarkdownBlockGroupByArgs['orderBy'] }
        : { orderBy?: MarkdownBlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarkdownBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarkdownBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarkdownBlock model
   */
  readonly fields: MarkdownBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarkdownBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarkdownBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lectures<T extends MarkdownBlock$lecturesArgs<ExtArgs> = {}>(args?: Subset<T, MarkdownBlock$lecturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureMarkdownPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MarkdownBlock model
   */
  interface MarkdownBlockFieldRefs {
    readonly id: FieldRef<"MarkdownBlock", 'Int'>
    readonly name: FieldRef<"MarkdownBlock", 'String'>
    readonly content: FieldRef<"MarkdownBlock", 'String'>
    readonly createdAt: FieldRef<"MarkdownBlock", 'DateTime'>
    readonly updatedAt: FieldRef<"MarkdownBlock", 'DateTime'>
    readonly createdById: FieldRef<"MarkdownBlock", 'String'>
    readonly updatedById: FieldRef<"MarkdownBlock", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MarkdownBlock findUnique
   */
  export type MarkdownBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkdownBlock
     */
    select?: MarkdownBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarkdownBlock
     */
    omit?: MarkdownBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownBlockInclude<ExtArgs> | null
    /**
     * Filter, which MarkdownBlock to fetch.
     */
    where: MarkdownBlockWhereUniqueInput
  }

  /**
   * MarkdownBlock findUniqueOrThrow
   */
  export type MarkdownBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkdownBlock
     */
    select?: MarkdownBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarkdownBlock
     */
    omit?: MarkdownBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownBlockInclude<ExtArgs> | null
    /**
     * Filter, which MarkdownBlock to fetch.
     */
    where: MarkdownBlockWhereUniqueInput
  }

  /**
   * MarkdownBlock findFirst
   */
  export type MarkdownBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkdownBlock
     */
    select?: MarkdownBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarkdownBlock
     */
    omit?: MarkdownBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownBlockInclude<ExtArgs> | null
    /**
     * Filter, which MarkdownBlock to fetch.
     */
    where?: MarkdownBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarkdownBlocks to fetch.
     */
    orderBy?: MarkdownBlockOrderByWithRelationInput | MarkdownBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarkdownBlocks.
     */
    cursor?: MarkdownBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarkdownBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarkdownBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarkdownBlocks.
     */
    distinct?: MarkdownBlockScalarFieldEnum | MarkdownBlockScalarFieldEnum[]
  }

  /**
   * MarkdownBlock findFirstOrThrow
   */
  export type MarkdownBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkdownBlock
     */
    select?: MarkdownBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarkdownBlock
     */
    omit?: MarkdownBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownBlockInclude<ExtArgs> | null
    /**
     * Filter, which MarkdownBlock to fetch.
     */
    where?: MarkdownBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarkdownBlocks to fetch.
     */
    orderBy?: MarkdownBlockOrderByWithRelationInput | MarkdownBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarkdownBlocks.
     */
    cursor?: MarkdownBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarkdownBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarkdownBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarkdownBlocks.
     */
    distinct?: MarkdownBlockScalarFieldEnum | MarkdownBlockScalarFieldEnum[]
  }

  /**
   * MarkdownBlock findMany
   */
  export type MarkdownBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkdownBlock
     */
    select?: MarkdownBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarkdownBlock
     */
    omit?: MarkdownBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownBlockInclude<ExtArgs> | null
    /**
     * Filter, which MarkdownBlocks to fetch.
     */
    where?: MarkdownBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarkdownBlocks to fetch.
     */
    orderBy?: MarkdownBlockOrderByWithRelationInput | MarkdownBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarkdownBlocks.
     */
    cursor?: MarkdownBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarkdownBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarkdownBlocks.
     */
    skip?: number
    distinct?: MarkdownBlockScalarFieldEnum | MarkdownBlockScalarFieldEnum[]
  }

  /**
   * MarkdownBlock create
   */
  export type MarkdownBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkdownBlock
     */
    select?: MarkdownBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarkdownBlock
     */
    omit?: MarkdownBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a MarkdownBlock.
     */
    data: XOR<MarkdownBlockCreateInput, MarkdownBlockUncheckedCreateInput>
  }

  /**
   * MarkdownBlock createMany
   */
  export type MarkdownBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarkdownBlocks.
     */
    data: MarkdownBlockCreateManyInput | MarkdownBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarkdownBlock createManyAndReturn
   */
  export type MarkdownBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkdownBlock
     */
    select?: MarkdownBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarkdownBlock
     */
    omit?: MarkdownBlockOmit<ExtArgs> | null
    /**
     * The data used to create many MarkdownBlocks.
     */
    data: MarkdownBlockCreateManyInput | MarkdownBlockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownBlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarkdownBlock update
   */
  export type MarkdownBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkdownBlock
     */
    select?: MarkdownBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarkdownBlock
     */
    omit?: MarkdownBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a MarkdownBlock.
     */
    data: XOR<MarkdownBlockUpdateInput, MarkdownBlockUncheckedUpdateInput>
    /**
     * Choose, which MarkdownBlock to update.
     */
    where: MarkdownBlockWhereUniqueInput
  }

  /**
   * MarkdownBlock updateMany
   */
  export type MarkdownBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarkdownBlocks.
     */
    data: XOR<MarkdownBlockUpdateManyMutationInput, MarkdownBlockUncheckedUpdateManyInput>
    /**
     * Filter which MarkdownBlocks to update
     */
    where?: MarkdownBlockWhereInput
    /**
     * Limit how many MarkdownBlocks to update.
     */
    limit?: number
  }

  /**
   * MarkdownBlock updateManyAndReturn
   */
  export type MarkdownBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkdownBlock
     */
    select?: MarkdownBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarkdownBlock
     */
    omit?: MarkdownBlockOmit<ExtArgs> | null
    /**
     * The data used to update MarkdownBlocks.
     */
    data: XOR<MarkdownBlockUpdateManyMutationInput, MarkdownBlockUncheckedUpdateManyInput>
    /**
     * Filter which MarkdownBlocks to update
     */
    where?: MarkdownBlockWhereInput
    /**
     * Limit how many MarkdownBlocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownBlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarkdownBlock upsert
   */
  export type MarkdownBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkdownBlock
     */
    select?: MarkdownBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarkdownBlock
     */
    omit?: MarkdownBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the MarkdownBlock to update in case it exists.
     */
    where: MarkdownBlockWhereUniqueInput
    /**
     * In case the MarkdownBlock found by the `where` argument doesn't exist, create a new MarkdownBlock with this data.
     */
    create: XOR<MarkdownBlockCreateInput, MarkdownBlockUncheckedCreateInput>
    /**
     * In case the MarkdownBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarkdownBlockUpdateInput, MarkdownBlockUncheckedUpdateInput>
  }

  /**
   * MarkdownBlock delete
   */
  export type MarkdownBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkdownBlock
     */
    select?: MarkdownBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarkdownBlock
     */
    omit?: MarkdownBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownBlockInclude<ExtArgs> | null
    /**
     * Filter which MarkdownBlock to delete.
     */
    where: MarkdownBlockWhereUniqueInput
  }

  /**
   * MarkdownBlock deleteMany
   */
  export type MarkdownBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarkdownBlocks to delete
     */
    where?: MarkdownBlockWhereInput
    /**
     * Limit how many MarkdownBlocks to delete.
     */
    limit?: number
  }

  /**
   * MarkdownBlock.lectures
   */
  export type MarkdownBlock$lecturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureMarkdown
     */
    select?: LectureMarkdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureMarkdown
     */
    omit?: LectureMarkdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureMarkdownInclude<ExtArgs> | null
    where?: LectureMarkdownWhereInput
    orderBy?: LectureMarkdownOrderByWithRelationInput | LectureMarkdownOrderByWithRelationInput[]
    cursor?: LectureMarkdownWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LectureMarkdownScalarFieldEnum | LectureMarkdownScalarFieldEnum[]
  }

  /**
   * MarkdownBlock without action
   */
  export type MarkdownBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkdownBlock
     */
    select?: MarkdownBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarkdownBlock
     */
    omit?: MarkdownBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownBlockInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.Roles | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.Roles | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.Roles
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    lecturesCreated?: boolean | User$lecturesCreatedArgs<ExtArgs>
    lecturesUpdated?: boolean | User$lecturesUpdatedArgs<ExtArgs>
    blocksCreated?: boolean | User$blocksCreatedArgs<ExtArgs>
    blocksUpdated?: boolean | User$blocksUpdatedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    lecturesCreated?: boolean | User$lecturesCreatedArgs<ExtArgs>
    lecturesUpdated?: boolean | User$lecturesUpdatedArgs<ExtArgs>
    blocksCreated?: boolean | User$blocksCreatedArgs<ExtArgs>
    blocksUpdated?: boolean | User$blocksUpdatedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      lecturesCreated: Prisma.$LectureHierarchyPayload<ExtArgs>[]
      lecturesUpdated: Prisma.$LectureHierarchyPayload<ExtArgs>[]
      blocksCreated: Prisma.$MarkdownBlockPayload<ExtArgs>[]
      blocksUpdated: Prisma.$MarkdownBlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      password: string | null
      role: $Enums.Roles
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lecturesCreated<T extends User$lecturesCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$lecturesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lecturesUpdated<T extends User$lecturesUpdatedArgs<ExtArgs> = {}>(args?: Subset<T, User$lecturesUpdatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureHierarchyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blocksCreated<T extends User$blocksCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$blocksCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkdownBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blocksUpdated<T extends User$blocksUpdatedArgs<ExtArgs> = {}>(args?: Subset<T, User$blocksUpdatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkdownBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Roles'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.lecturesCreated
   */
  export type User$lecturesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyInclude<ExtArgs> | null
    where?: LectureHierarchyWhereInput
    orderBy?: LectureHierarchyOrderByWithRelationInput | LectureHierarchyOrderByWithRelationInput[]
    cursor?: LectureHierarchyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LectureHierarchyScalarFieldEnum | LectureHierarchyScalarFieldEnum[]
  }

  /**
   * User.lecturesUpdated
   */
  export type User$lecturesUpdatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureHierarchy
     */
    select?: LectureHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureHierarchy
     */
    omit?: LectureHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureHierarchyInclude<ExtArgs> | null
    where?: LectureHierarchyWhereInput
    orderBy?: LectureHierarchyOrderByWithRelationInput | LectureHierarchyOrderByWithRelationInput[]
    cursor?: LectureHierarchyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LectureHierarchyScalarFieldEnum | LectureHierarchyScalarFieldEnum[]
  }

  /**
   * User.blocksCreated
   */
  export type User$blocksCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkdownBlock
     */
    select?: MarkdownBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarkdownBlock
     */
    omit?: MarkdownBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownBlockInclude<ExtArgs> | null
    where?: MarkdownBlockWhereInput
    orderBy?: MarkdownBlockOrderByWithRelationInput | MarkdownBlockOrderByWithRelationInput[]
    cursor?: MarkdownBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarkdownBlockScalarFieldEnum | MarkdownBlockScalarFieldEnum[]
  }

  /**
   * User.blocksUpdated
   */
  export type User$blocksUpdatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkdownBlock
     */
    select?: MarkdownBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarkdownBlock
     */
    omit?: MarkdownBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkdownBlockInclude<ExtArgs> | null
    where?: MarkdownBlockWhereInput
    orderBy?: MarkdownBlockOrderByWithRelationInput | MarkdownBlockOrderByWithRelationInput[]
    cursor?: MarkdownBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarkdownBlockScalarFieldEnum | MarkdownBlockScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
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


  export const LectureHierarchyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isPublic: 'isPublic',
    createdById: 'createdById',
    updatedById: 'updatedById',
    HierarchyParentId: 'HierarchyParentId'
  };

  export type LectureHierarchyScalarFieldEnum = (typeof LectureHierarchyScalarFieldEnum)[keyof typeof LectureHierarchyScalarFieldEnum]


  export const LectureMarkdownScalarFieldEnum: {
    order: 'order',
    lectureId: 'lectureId',
    blockId: 'blockId'
  };

  export type LectureMarkdownScalarFieldEnum = (typeof LectureMarkdownScalarFieldEnum)[keyof typeof LectureMarkdownScalarFieldEnum]


  export const MarkdownBlockScalarFieldEnum: {
    id: 'id',
    name: 'name',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById',
    updatedById: 'updatedById'
  };

  export type MarkdownBlockScalarFieldEnum = (typeof MarkdownBlockScalarFieldEnum)[keyof typeof MarkdownBlockScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Roles'
   */
  export type EnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles'>
    


  /**
   * Reference to a field of type 'Roles[]'
   */
  export type ListEnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LectureHierarchyWhereInput = {
    AND?: LectureHierarchyWhereInput | LectureHierarchyWhereInput[]
    OR?: LectureHierarchyWhereInput[]
    NOT?: LectureHierarchyWhereInput | LectureHierarchyWhereInput[]
    id?: IntFilter<"LectureHierarchy"> | number
    name?: StringFilter<"LectureHierarchy"> | string
    createdAt?: DateTimeFilter<"LectureHierarchy"> | Date | string
    updatedAt?: DateTimeFilter<"LectureHierarchy"> | Date | string
    isPublic?: BoolFilter<"LectureHierarchy"> | boolean
    createdById?: StringFilter<"LectureHierarchy"> | string
    updatedById?: StringFilter<"LectureHierarchy"> | string
    HierarchyParentId?: IntNullableFilter<"LectureHierarchy"> | number | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    blocks?: LectureMarkdownListRelationFilter
    hierarchyParent?: XOR<LectureHierarchyNullableScalarRelationFilter, LectureHierarchyWhereInput> | null
    hierarchyChildren?: LectureHierarchyListRelationFilter
  }

  export type LectureHierarchyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    HierarchyParentId?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
    blocks?: LectureMarkdownOrderByRelationAggregateInput
    hierarchyParent?: LectureHierarchyOrderByWithRelationInput
    hierarchyChildren?: LectureHierarchyOrderByRelationAggregateInput
  }

  export type LectureHierarchyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LectureHierarchyWhereInput | LectureHierarchyWhereInput[]
    OR?: LectureHierarchyWhereInput[]
    NOT?: LectureHierarchyWhereInput | LectureHierarchyWhereInput[]
    name?: StringFilter<"LectureHierarchy"> | string
    createdAt?: DateTimeFilter<"LectureHierarchy"> | Date | string
    updatedAt?: DateTimeFilter<"LectureHierarchy"> | Date | string
    isPublic?: BoolFilter<"LectureHierarchy"> | boolean
    createdById?: StringFilter<"LectureHierarchy"> | string
    updatedById?: StringFilter<"LectureHierarchy"> | string
    HierarchyParentId?: IntNullableFilter<"LectureHierarchy"> | number | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    blocks?: LectureMarkdownListRelationFilter
    hierarchyParent?: XOR<LectureHierarchyNullableScalarRelationFilter, LectureHierarchyWhereInput> | null
    hierarchyChildren?: LectureHierarchyListRelationFilter
  }, "id">

  export type LectureHierarchyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    HierarchyParentId?: SortOrderInput | SortOrder
    _count?: LectureHierarchyCountOrderByAggregateInput
    _avg?: LectureHierarchyAvgOrderByAggregateInput
    _max?: LectureHierarchyMaxOrderByAggregateInput
    _min?: LectureHierarchyMinOrderByAggregateInput
    _sum?: LectureHierarchySumOrderByAggregateInput
  }

  export type LectureHierarchyScalarWhereWithAggregatesInput = {
    AND?: LectureHierarchyScalarWhereWithAggregatesInput | LectureHierarchyScalarWhereWithAggregatesInput[]
    OR?: LectureHierarchyScalarWhereWithAggregatesInput[]
    NOT?: LectureHierarchyScalarWhereWithAggregatesInput | LectureHierarchyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LectureHierarchy"> | number
    name?: StringWithAggregatesFilter<"LectureHierarchy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LectureHierarchy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LectureHierarchy"> | Date | string
    isPublic?: BoolWithAggregatesFilter<"LectureHierarchy"> | boolean
    createdById?: StringWithAggregatesFilter<"LectureHierarchy"> | string
    updatedById?: StringWithAggregatesFilter<"LectureHierarchy"> | string
    HierarchyParentId?: IntNullableWithAggregatesFilter<"LectureHierarchy"> | number | null
  }

  export type LectureMarkdownWhereInput = {
    AND?: LectureMarkdownWhereInput | LectureMarkdownWhereInput[]
    OR?: LectureMarkdownWhereInput[]
    NOT?: LectureMarkdownWhereInput | LectureMarkdownWhereInput[]
    order?: IntFilter<"LectureMarkdown"> | number
    lectureId?: IntFilter<"LectureMarkdown"> | number
    blockId?: IntFilter<"LectureMarkdown"> | number
    lecture?: XOR<LectureHierarchyScalarRelationFilter, LectureHierarchyWhereInput>
    block?: XOR<MarkdownBlockScalarRelationFilter, MarkdownBlockWhereInput>
  }

  export type LectureMarkdownOrderByWithRelationInput = {
    order?: SortOrder
    lectureId?: SortOrder
    blockId?: SortOrder
    lecture?: LectureHierarchyOrderByWithRelationInput
    block?: MarkdownBlockOrderByWithRelationInput
  }

  export type LectureMarkdownWhereUniqueInput = Prisma.AtLeast<{
    lectureId_blockId?: LectureMarkdownLectureIdBlockIdCompoundUniqueInput
    AND?: LectureMarkdownWhereInput | LectureMarkdownWhereInput[]
    OR?: LectureMarkdownWhereInput[]
    NOT?: LectureMarkdownWhereInput | LectureMarkdownWhereInput[]
    order?: IntFilter<"LectureMarkdown"> | number
    lectureId?: IntFilter<"LectureMarkdown"> | number
    blockId?: IntFilter<"LectureMarkdown"> | number
    lecture?: XOR<LectureHierarchyScalarRelationFilter, LectureHierarchyWhereInput>
    block?: XOR<MarkdownBlockScalarRelationFilter, MarkdownBlockWhereInput>
  }, "lectureId_blockId">

  export type LectureMarkdownOrderByWithAggregationInput = {
    order?: SortOrder
    lectureId?: SortOrder
    blockId?: SortOrder
    _count?: LectureMarkdownCountOrderByAggregateInput
    _avg?: LectureMarkdownAvgOrderByAggregateInput
    _max?: LectureMarkdownMaxOrderByAggregateInput
    _min?: LectureMarkdownMinOrderByAggregateInput
    _sum?: LectureMarkdownSumOrderByAggregateInput
  }

  export type LectureMarkdownScalarWhereWithAggregatesInput = {
    AND?: LectureMarkdownScalarWhereWithAggregatesInput | LectureMarkdownScalarWhereWithAggregatesInput[]
    OR?: LectureMarkdownScalarWhereWithAggregatesInput[]
    NOT?: LectureMarkdownScalarWhereWithAggregatesInput | LectureMarkdownScalarWhereWithAggregatesInput[]
    order?: IntWithAggregatesFilter<"LectureMarkdown"> | number
    lectureId?: IntWithAggregatesFilter<"LectureMarkdown"> | number
    blockId?: IntWithAggregatesFilter<"LectureMarkdown"> | number
  }

  export type MarkdownBlockWhereInput = {
    AND?: MarkdownBlockWhereInput | MarkdownBlockWhereInput[]
    OR?: MarkdownBlockWhereInput[]
    NOT?: MarkdownBlockWhereInput | MarkdownBlockWhereInput[]
    id?: IntFilter<"MarkdownBlock"> | number
    name?: StringFilter<"MarkdownBlock"> | string
    content?: StringNullableFilter<"MarkdownBlock"> | string | null
    createdAt?: DateTimeFilter<"MarkdownBlock"> | Date | string
    updatedAt?: DateTimeFilter<"MarkdownBlock"> | Date | string
    createdById?: StringFilter<"MarkdownBlock"> | string
    updatedById?: StringFilter<"MarkdownBlock"> | string
    lectures?: LectureMarkdownListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MarkdownBlockOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    lectures?: LectureMarkdownOrderByRelationAggregateInput
    createdBy?: UserOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
  }

  export type MarkdownBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MarkdownBlockWhereInput | MarkdownBlockWhereInput[]
    OR?: MarkdownBlockWhereInput[]
    NOT?: MarkdownBlockWhereInput | MarkdownBlockWhereInput[]
    name?: StringFilter<"MarkdownBlock"> | string
    content?: StringNullableFilter<"MarkdownBlock"> | string | null
    createdAt?: DateTimeFilter<"MarkdownBlock"> | Date | string
    updatedAt?: DateTimeFilter<"MarkdownBlock"> | Date | string
    createdById?: StringFilter<"MarkdownBlock"> | string
    updatedById?: StringFilter<"MarkdownBlock"> | string
    lectures?: LectureMarkdownListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MarkdownBlockOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    _count?: MarkdownBlockCountOrderByAggregateInput
    _avg?: MarkdownBlockAvgOrderByAggregateInput
    _max?: MarkdownBlockMaxOrderByAggregateInput
    _min?: MarkdownBlockMinOrderByAggregateInput
    _sum?: MarkdownBlockSumOrderByAggregateInput
  }

  export type MarkdownBlockScalarWhereWithAggregatesInput = {
    AND?: MarkdownBlockScalarWhereWithAggregatesInput | MarkdownBlockScalarWhereWithAggregatesInput[]
    OR?: MarkdownBlockScalarWhereWithAggregatesInput[]
    NOT?: MarkdownBlockScalarWhereWithAggregatesInput | MarkdownBlockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MarkdownBlock"> | number
    name?: StringWithAggregatesFilter<"MarkdownBlock"> | string
    content?: StringNullableWithAggregatesFilter<"MarkdownBlock"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MarkdownBlock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MarkdownBlock"> | Date | string
    createdById?: StringWithAggregatesFilter<"MarkdownBlock"> | string
    updatedById?: StringWithAggregatesFilter<"MarkdownBlock"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    lecturesCreated?: LectureHierarchyListRelationFilter
    lecturesUpdated?: LectureHierarchyListRelationFilter
    blocksCreated?: MarkdownBlockListRelationFilter
    blocksUpdated?: MarkdownBlockListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    lecturesCreated?: LectureHierarchyOrderByRelationAggregateInput
    lecturesUpdated?: LectureHierarchyOrderByRelationAggregateInput
    blocksCreated?: MarkdownBlockOrderByRelationAggregateInput
    blocksUpdated?: MarkdownBlockOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    lecturesCreated?: LectureHierarchyListRelationFilter
    lecturesUpdated?: LectureHierarchyListRelationFilter
    blocksCreated?: MarkdownBlockListRelationFilter
    blocksUpdated?: MarkdownBlockListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRolesWithAggregatesFilter<"User"> | $Enums.Roles
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type LectureHierarchyCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    createdBy: UserCreateNestedOneWithoutLecturesCreatedInput
    updatedBy: UserCreateNestedOneWithoutLecturesUpdatedInput
    blocks?: LectureMarkdownCreateNestedManyWithoutLectureInput
    hierarchyParent?: LectureHierarchyCreateNestedOneWithoutHierarchyChildrenInput
    hierarchyChildren?: LectureHierarchyCreateNestedManyWithoutHierarchyParentInput
  }

  export type LectureHierarchyUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    createdById: string
    updatedById: string
    HierarchyParentId?: number | null
    blocks?: LectureMarkdownUncheckedCreateNestedManyWithoutLectureInput
    hierarchyChildren?: LectureHierarchyUncheckedCreateNestedManyWithoutHierarchyParentInput
  }

  export type LectureHierarchyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneRequiredWithoutLecturesCreatedNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutLecturesUpdatedNestedInput
    blocks?: LectureMarkdownUpdateManyWithoutLectureNestedInput
    hierarchyParent?: LectureHierarchyUpdateOneWithoutHierarchyChildrenNestedInput
    hierarchyChildren?: LectureHierarchyUpdateManyWithoutHierarchyParentNestedInput
  }

  export type LectureHierarchyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    HierarchyParentId?: NullableIntFieldUpdateOperationsInput | number | null
    blocks?: LectureMarkdownUncheckedUpdateManyWithoutLectureNestedInput
    hierarchyChildren?: LectureHierarchyUncheckedUpdateManyWithoutHierarchyParentNestedInput
  }

  export type LectureHierarchyCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    createdById: string
    updatedById: string
    HierarchyParentId?: number | null
  }

  export type LectureHierarchyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LectureHierarchyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    HierarchyParentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LectureMarkdownCreateInput = {
    order: number
    lecture: LectureHierarchyCreateNestedOneWithoutBlocksInput
    block: MarkdownBlockCreateNestedOneWithoutLecturesInput
  }

  export type LectureMarkdownUncheckedCreateInput = {
    order: number
    lectureId: number
    blockId: number
  }

  export type LectureMarkdownUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    lecture?: LectureHierarchyUpdateOneRequiredWithoutBlocksNestedInput
    block?: MarkdownBlockUpdateOneRequiredWithoutLecturesNestedInput
  }

  export type LectureMarkdownUncheckedUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    lectureId?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
  }

  export type LectureMarkdownCreateManyInput = {
    order: number
    lectureId: number
    blockId: number
  }

  export type LectureMarkdownUpdateManyMutationInput = {
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LectureMarkdownUncheckedUpdateManyInput = {
    order?: IntFieldUpdateOperationsInput | number
    lectureId?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
  }

  export type MarkdownBlockCreateInput = {
    name: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lectures?: LectureMarkdownCreateNestedManyWithoutBlockInput
    createdBy: UserCreateNestedOneWithoutBlocksCreatedInput
    updatedBy: UserCreateNestedOneWithoutBlocksUpdatedInput
  }

  export type MarkdownBlockUncheckedCreateInput = {
    id?: number
    name: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    updatedById: string
    lectures?: LectureMarkdownUncheckedCreateNestedManyWithoutBlockInput
  }

  export type MarkdownBlockUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lectures?: LectureMarkdownUpdateManyWithoutBlockNestedInput
    createdBy?: UserUpdateOneRequiredWithoutBlocksCreatedNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutBlocksUpdatedNestedInput
  }

  export type MarkdownBlockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    lectures?: LectureMarkdownUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type MarkdownBlockCreateManyInput = {
    id?: number
    name: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    updatedById: string
  }

  export type MarkdownBlockUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarkdownBlockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Roles
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    lecturesCreated?: LectureHierarchyCreateNestedManyWithoutCreatedByInput
    lecturesUpdated?: LectureHierarchyCreateNestedManyWithoutUpdatedByInput
    blocksCreated?: MarkdownBlockCreateNestedManyWithoutCreatedByInput
    blocksUpdated?: MarkdownBlockCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Roles
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    lecturesCreated?: LectureHierarchyUncheckedCreateNestedManyWithoutCreatedByInput
    lecturesUpdated?: LectureHierarchyUncheckedCreateNestedManyWithoutUpdatedByInput
    blocksCreated?: MarkdownBlockUncheckedCreateNestedManyWithoutCreatedByInput
    blocksUpdated?: MarkdownBlockUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    lecturesCreated?: LectureHierarchyUpdateManyWithoutCreatedByNestedInput
    lecturesUpdated?: LectureHierarchyUpdateManyWithoutUpdatedByNestedInput
    blocksCreated?: MarkdownBlockUpdateManyWithoutCreatedByNestedInput
    blocksUpdated?: MarkdownBlockUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    lecturesCreated?: LectureHierarchyUncheckedUpdateManyWithoutCreatedByNestedInput
    lecturesUpdated?: LectureHierarchyUncheckedUpdateManyWithoutUpdatedByNestedInput
    blocksCreated?: MarkdownBlockUncheckedUpdateManyWithoutCreatedByNestedInput
    blocksUpdated?: MarkdownBlockUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Roles
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LectureMarkdownListRelationFilter = {
    every?: LectureMarkdownWhereInput
    some?: LectureMarkdownWhereInput
    none?: LectureMarkdownWhereInput
  }

  export type LectureHierarchyNullableScalarRelationFilter = {
    is?: LectureHierarchyWhereInput | null
    isNot?: LectureHierarchyWhereInput | null
  }

  export type LectureHierarchyListRelationFilter = {
    every?: LectureHierarchyWhereInput
    some?: LectureHierarchyWhereInput
    none?: LectureHierarchyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LectureMarkdownOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LectureHierarchyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LectureHierarchyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    HierarchyParentId?: SortOrder
  }

  export type LectureHierarchyAvgOrderByAggregateInput = {
    id?: SortOrder
    HierarchyParentId?: SortOrder
  }

  export type LectureHierarchyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    HierarchyParentId?: SortOrder
  }

  export type LectureHierarchyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    HierarchyParentId?: SortOrder
  }

  export type LectureHierarchySumOrderByAggregateInput = {
    id?: SortOrder
    HierarchyParentId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type LectureHierarchyScalarRelationFilter = {
    is?: LectureHierarchyWhereInput
    isNot?: LectureHierarchyWhereInput
  }

  export type MarkdownBlockScalarRelationFilter = {
    is?: MarkdownBlockWhereInput
    isNot?: MarkdownBlockWhereInput
  }

  export type LectureMarkdownLectureIdBlockIdCompoundUniqueInput = {
    lectureId: number
    blockId: number
  }

  export type LectureMarkdownCountOrderByAggregateInput = {
    order?: SortOrder
    lectureId?: SortOrder
    blockId?: SortOrder
  }

  export type LectureMarkdownAvgOrderByAggregateInput = {
    order?: SortOrder
    lectureId?: SortOrder
    blockId?: SortOrder
  }

  export type LectureMarkdownMaxOrderByAggregateInput = {
    order?: SortOrder
    lectureId?: SortOrder
    blockId?: SortOrder
  }

  export type LectureMarkdownMinOrderByAggregateInput = {
    order?: SortOrder
    lectureId?: SortOrder
    blockId?: SortOrder
  }

  export type LectureMarkdownSumOrderByAggregateInput = {
    order?: SortOrder
    lectureId?: SortOrder
    blockId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MarkdownBlockCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type MarkdownBlockAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MarkdownBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type MarkdownBlockMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type MarkdownBlockSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type MarkdownBlockListRelationFilter = {
    every?: MarkdownBlockWhereInput
    some?: MarkdownBlockWhereInput
    none?: MarkdownBlockWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarkdownBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type UserCreateNestedOneWithoutLecturesCreatedInput = {
    create?: XOR<UserCreateWithoutLecturesCreatedInput, UserUncheckedCreateWithoutLecturesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturesCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLecturesUpdatedInput = {
    create?: XOR<UserCreateWithoutLecturesUpdatedInput, UserUncheckedCreateWithoutLecturesUpdatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturesUpdatedInput
    connect?: UserWhereUniqueInput
  }

  export type LectureMarkdownCreateNestedManyWithoutLectureInput = {
    create?: XOR<LectureMarkdownCreateWithoutLectureInput, LectureMarkdownUncheckedCreateWithoutLectureInput> | LectureMarkdownCreateWithoutLectureInput[] | LectureMarkdownUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: LectureMarkdownCreateOrConnectWithoutLectureInput | LectureMarkdownCreateOrConnectWithoutLectureInput[]
    createMany?: LectureMarkdownCreateManyLectureInputEnvelope
    connect?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
  }

  export type LectureHierarchyCreateNestedOneWithoutHierarchyChildrenInput = {
    create?: XOR<LectureHierarchyCreateWithoutHierarchyChildrenInput, LectureHierarchyUncheckedCreateWithoutHierarchyChildrenInput>
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutHierarchyChildrenInput
    connect?: LectureHierarchyWhereUniqueInput
  }

  export type LectureHierarchyCreateNestedManyWithoutHierarchyParentInput = {
    create?: XOR<LectureHierarchyCreateWithoutHierarchyParentInput, LectureHierarchyUncheckedCreateWithoutHierarchyParentInput> | LectureHierarchyCreateWithoutHierarchyParentInput[] | LectureHierarchyUncheckedCreateWithoutHierarchyParentInput[]
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutHierarchyParentInput | LectureHierarchyCreateOrConnectWithoutHierarchyParentInput[]
    createMany?: LectureHierarchyCreateManyHierarchyParentInputEnvelope
    connect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
  }

  export type LectureMarkdownUncheckedCreateNestedManyWithoutLectureInput = {
    create?: XOR<LectureMarkdownCreateWithoutLectureInput, LectureMarkdownUncheckedCreateWithoutLectureInput> | LectureMarkdownCreateWithoutLectureInput[] | LectureMarkdownUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: LectureMarkdownCreateOrConnectWithoutLectureInput | LectureMarkdownCreateOrConnectWithoutLectureInput[]
    createMany?: LectureMarkdownCreateManyLectureInputEnvelope
    connect?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
  }

  export type LectureHierarchyUncheckedCreateNestedManyWithoutHierarchyParentInput = {
    create?: XOR<LectureHierarchyCreateWithoutHierarchyParentInput, LectureHierarchyUncheckedCreateWithoutHierarchyParentInput> | LectureHierarchyCreateWithoutHierarchyParentInput[] | LectureHierarchyUncheckedCreateWithoutHierarchyParentInput[]
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutHierarchyParentInput | LectureHierarchyCreateOrConnectWithoutHierarchyParentInput[]
    createMany?: LectureHierarchyCreateManyHierarchyParentInputEnvelope
    connect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutLecturesCreatedNestedInput = {
    create?: XOR<UserCreateWithoutLecturesCreatedInput, UserUncheckedCreateWithoutLecturesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturesCreatedInput
    upsert?: UserUpsertWithoutLecturesCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLecturesCreatedInput, UserUpdateWithoutLecturesCreatedInput>, UserUncheckedUpdateWithoutLecturesCreatedInput>
  }

  export type UserUpdateOneRequiredWithoutLecturesUpdatedNestedInput = {
    create?: XOR<UserCreateWithoutLecturesUpdatedInput, UserUncheckedCreateWithoutLecturesUpdatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturesUpdatedInput
    upsert?: UserUpsertWithoutLecturesUpdatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLecturesUpdatedInput, UserUpdateWithoutLecturesUpdatedInput>, UserUncheckedUpdateWithoutLecturesUpdatedInput>
  }

  export type LectureMarkdownUpdateManyWithoutLectureNestedInput = {
    create?: XOR<LectureMarkdownCreateWithoutLectureInput, LectureMarkdownUncheckedCreateWithoutLectureInput> | LectureMarkdownCreateWithoutLectureInput[] | LectureMarkdownUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: LectureMarkdownCreateOrConnectWithoutLectureInput | LectureMarkdownCreateOrConnectWithoutLectureInput[]
    upsert?: LectureMarkdownUpsertWithWhereUniqueWithoutLectureInput | LectureMarkdownUpsertWithWhereUniqueWithoutLectureInput[]
    createMany?: LectureMarkdownCreateManyLectureInputEnvelope
    set?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    disconnect?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    delete?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    connect?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    update?: LectureMarkdownUpdateWithWhereUniqueWithoutLectureInput | LectureMarkdownUpdateWithWhereUniqueWithoutLectureInput[]
    updateMany?: LectureMarkdownUpdateManyWithWhereWithoutLectureInput | LectureMarkdownUpdateManyWithWhereWithoutLectureInput[]
    deleteMany?: LectureMarkdownScalarWhereInput | LectureMarkdownScalarWhereInput[]
  }

  export type LectureHierarchyUpdateOneWithoutHierarchyChildrenNestedInput = {
    create?: XOR<LectureHierarchyCreateWithoutHierarchyChildrenInput, LectureHierarchyUncheckedCreateWithoutHierarchyChildrenInput>
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutHierarchyChildrenInput
    upsert?: LectureHierarchyUpsertWithoutHierarchyChildrenInput
    disconnect?: LectureHierarchyWhereInput | boolean
    delete?: LectureHierarchyWhereInput | boolean
    connect?: LectureHierarchyWhereUniqueInput
    update?: XOR<XOR<LectureHierarchyUpdateToOneWithWhereWithoutHierarchyChildrenInput, LectureHierarchyUpdateWithoutHierarchyChildrenInput>, LectureHierarchyUncheckedUpdateWithoutHierarchyChildrenInput>
  }

  export type LectureHierarchyUpdateManyWithoutHierarchyParentNestedInput = {
    create?: XOR<LectureHierarchyCreateWithoutHierarchyParentInput, LectureHierarchyUncheckedCreateWithoutHierarchyParentInput> | LectureHierarchyCreateWithoutHierarchyParentInput[] | LectureHierarchyUncheckedCreateWithoutHierarchyParentInput[]
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutHierarchyParentInput | LectureHierarchyCreateOrConnectWithoutHierarchyParentInput[]
    upsert?: LectureHierarchyUpsertWithWhereUniqueWithoutHierarchyParentInput | LectureHierarchyUpsertWithWhereUniqueWithoutHierarchyParentInput[]
    createMany?: LectureHierarchyCreateManyHierarchyParentInputEnvelope
    set?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    disconnect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    delete?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    connect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    update?: LectureHierarchyUpdateWithWhereUniqueWithoutHierarchyParentInput | LectureHierarchyUpdateWithWhereUniqueWithoutHierarchyParentInput[]
    updateMany?: LectureHierarchyUpdateManyWithWhereWithoutHierarchyParentInput | LectureHierarchyUpdateManyWithWhereWithoutHierarchyParentInput[]
    deleteMany?: LectureHierarchyScalarWhereInput | LectureHierarchyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LectureMarkdownUncheckedUpdateManyWithoutLectureNestedInput = {
    create?: XOR<LectureMarkdownCreateWithoutLectureInput, LectureMarkdownUncheckedCreateWithoutLectureInput> | LectureMarkdownCreateWithoutLectureInput[] | LectureMarkdownUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: LectureMarkdownCreateOrConnectWithoutLectureInput | LectureMarkdownCreateOrConnectWithoutLectureInput[]
    upsert?: LectureMarkdownUpsertWithWhereUniqueWithoutLectureInput | LectureMarkdownUpsertWithWhereUniqueWithoutLectureInput[]
    createMany?: LectureMarkdownCreateManyLectureInputEnvelope
    set?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    disconnect?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    delete?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    connect?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    update?: LectureMarkdownUpdateWithWhereUniqueWithoutLectureInput | LectureMarkdownUpdateWithWhereUniqueWithoutLectureInput[]
    updateMany?: LectureMarkdownUpdateManyWithWhereWithoutLectureInput | LectureMarkdownUpdateManyWithWhereWithoutLectureInput[]
    deleteMany?: LectureMarkdownScalarWhereInput | LectureMarkdownScalarWhereInput[]
  }

  export type LectureHierarchyUncheckedUpdateManyWithoutHierarchyParentNestedInput = {
    create?: XOR<LectureHierarchyCreateWithoutHierarchyParentInput, LectureHierarchyUncheckedCreateWithoutHierarchyParentInput> | LectureHierarchyCreateWithoutHierarchyParentInput[] | LectureHierarchyUncheckedCreateWithoutHierarchyParentInput[]
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutHierarchyParentInput | LectureHierarchyCreateOrConnectWithoutHierarchyParentInput[]
    upsert?: LectureHierarchyUpsertWithWhereUniqueWithoutHierarchyParentInput | LectureHierarchyUpsertWithWhereUniqueWithoutHierarchyParentInput[]
    createMany?: LectureHierarchyCreateManyHierarchyParentInputEnvelope
    set?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    disconnect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    delete?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    connect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    update?: LectureHierarchyUpdateWithWhereUniqueWithoutHierarchyParentInput | LectureHierarchyUpdateWithWhereUniqueWithoutHierarchyParentInput[]
    updateMany?: LectureHierarchyUpdateManyWithWhereWithoutHierarchyParentInput | LectureHierarchyUpdateManyWithWhereWithoutHierarchyParentInput[]
    deleteMany?: LectureHierarchyScalarWhereInput | LectureHierarchyScalarWhereInput[]
  }

  export type LectureHierarchyCreateNestedOneWithoutBlocksInput = {
    create?: XOR<LectureHierarchyCreateWithoutBlocksInput, LectureHierarchyUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutBlocksInput
    connect?: LectureHierarchyWhereUniqueInput
  }

  export type MarkdownBlockCreateNestedOneWithoutLecturesInput = {
    create?: XOR<MarkdownBlockCreateWithoutLecturesInput, MarkdownBlockUncheckedCreateWithoutLecturesInput>
    connectOrCreate?: MarkdownBlockCreateOrConnectWithoutLecturesInput
    connect?: MarkdownBlockWhereUniqueInput
  }

  export type LectureHierarchyUpdateOneRequiredWithoutBlocksNestedInput = {
    create?: XOR<LectureHierarchyCreateWithoutBlocksInput, LectureHierarchyUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutBlocksInput
    upsert?: LectureHierarchyUpsertWithoutBlocksInput
    connect?: LectureHierarchyWhereUniqueInput
    update?: XOR<XOR<LectureHierarchyUpdateToOneWithWhereWithoutBlocksInput, LectureHierarchyUpdateWithoutBlocksInput>, LectureHierarchyUncheckedUpdateWithoutBlocksInput>
  }

  export type MarkdownBlockUpdateOneRequiredWithoutLecturesNestedInput = {
    create?: XOR<MarkdownBlockCreateWithoutLecturesInput, MarkdownBlockUncheckedCreateWithoutLecturesInput>
    connectOrCreate?: MarkdownBlockCreateOrConnectWithoutLecturesInput
    upsert?: MarkdownBlockUpsertWithoutLecturesInput
    connect?: MarkdownBlockWhereUniqueInput
    update?: XOR<XOR<MarkdownBlockUpdateToOneWithWhereWithoutLecturesInput, MarkdownBlockUpdateWithoutLecturesInput>, MarkdownBlockUncheckedUpdateWithoutLecturesInput>
  }

  export type LectureMarkdownCreateNestedManyWithoutBlockInput = {
    create?: XOR<LectureMarkdownCreateWithoutBlockInput, LectureMarkdownUncheckedCreateWithoutBlockInput> | LectureMarkdownCreateWithoutBlockInput[] | LectureMarkdownUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: LectureMarkdownCreateOrConnectWithoutBlockInput | LectureMarkdownCreateOrConnectWithoutBlockInput[]
    createMany?: LectureMarkdownCreateManyBlockInputEnvelope
    connect?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutBlocksCreatedInput = {
    create?: XOR<UserCreateWithoutBlocksCreatedInput, UserUncheckedCreateWithoutBlocksCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlocksCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBlocksUpdatedInput = {
    create?: XOR<UserCreateWithoutBlocksUpdatedInput, UserUncheckedCreateWithoutBlocksUpdatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlocksUpdatedInput
    connect?: UserWhereUniqueInput
  }

  export type LectureMarkdownUncheckedCreateNestedManyWithoutBlockInput = {
    create?: XOR<LectureMarkdownCreateWithoutBlockInput, LectureMarkdownUncheckedCreateWithoutBlockInput> | LectureMarkdownCreateWithoutBlockInput[] | LectureMarkdownUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: LectureMarkdownCreateOrConnectWithoutBlockInput | LectureMarkdownCreateOrConnectWithoutBlockInput[]
    createMany?: LectureMarkdownCreateManyBlockInputEnvelope
    connect?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LectureMarkdownUpdateManyWithoutBlockNestedInput = {
    create?: XOR<LectureMarkdownCreateWithoutBlockInput, LectureMarkdownUncheckedCreateWithoutBlockInput> | LectureMarkdownCreateWithoutBlockInput[] | LectureMarkdownUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: LectureMarkdownCreateOrConnectWithoutBlockInput | LectureMarkdownCreateOrConnectWithoutBlockInput[]
    upsert?: LectureMarkdownUpsertWithWhereUniqueWithoutBlockInput | LectureMarkdownUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: LectureMarkdownCreateManyBlockInputEnvelope
    set?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    disconnect?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    delete?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    connect?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    update?: LectureMarkdownUpdateWithWhereUniqueWithoutBlockInput | LectureMarkdownUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: LectureMarkdownUpdateManyWithWhereWithoutBlockInput | LectureMarkdownUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: LectureMarkdownScalarWhereInput | LectureMarkdownScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutBlocksCreatedNestedInput = {
    create?: XOR<UserCreateWithoutBlocksCreatedInput, UserUncheckedCreateWithoutBlocksCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlocksCreatedInput
    upsert?: UserUpsertWithoutBlocksCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlocksCreatedInput, UserUpdateWithoutBlocksCreatedInput>, UserUncheckedUpdateWithoutBlocksCreatedInput>
  }

  export type UserUpdateOneRequiredWithoutBlocksUpdatedNestedInput = {
    create?: XOR<UserCreateWithoutBlocksUpdatedInput, UserUncheckedCreateWithoutBlocksUpdatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlocksUpdatedInput
    upsert?: UserUpsertWithoutBlocksUpdatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlocksUpdatedInput, UserUpdateWithoutBlocksUpdatedInput>, UserUncheckedUpdateWithoutBlocksUpdatedInput>
  }

  export type LectureMarkdownUncheckedUpdateManyWithoutBlockNestedInput = {
    create?: XOR<LectureMarkdownCreateWithoutBlockInput, LectureMarkdownUncheckedCreateWithoutBlockInput> | LectureMarkdownCreateWithoutBlockInput[] | LectureMarkdownUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: LectureMarkdownCreateOrConnectWithoutBlockInput | LectureMarkdownCreateOrConnectWithoutBlockInput[]
    upsert?: LectureMarkdownUpsertWithWhereUniqueWithoutBlockInput | LectureMarkdownUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: LectureMarkdownCreateManyBlockInputEnvelope
    set?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    disconnect?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    delete?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    connect?: LectureMarkdownWhereUniqueInput | LectureMarkdownWhereUniqueInput[]
    update?: LectureMarkdownUpdateWithWhereUniqueWithoutBlockInput | LectureMarkdownUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: LectureMarkdownUpdateManyWithWhereWithoutBlockInput | LectureMarkdownUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: LectureMarkdownScalarWhereInput | LectureMarkdownScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type LectureHierarchyCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<LectureHierarchyCreateWithoutCreatedByInput, LectureHierarchyUncheckedCreateWithoutCreatedByInput> | LectureHierarchyCreateWithoutCreatedByInput[] | LectureHierarchyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutCreatedByInput | LectureHierarchyCreateOrConnectWithoutCreatedByInput[]
    createMany?: LectureHierarchyCreateManyCreatedByInputEnvelope
    connect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
  }

  export type LectureHierarchyCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<LectureHierarchyCreateWithoutUpdatedByInput, LectureHierarchyUncheckedCreateWithoutUpdatedByInput> | LectureHierarchyCreateWithoutUpdatedByInput[] | LectureHierarchyUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutUpdatedByInput | LectureHierarchyCreateOrConnectWithoutUpdatedByInput[]
    createMany?: LectureHierarchyCreateManyUpdatedByInputEnvelope
    connect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
  }

  export type MarkdownBlockCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MarkdownBlockCreateWithoutCreatedByInput, MarkdownBlockUncheckedCreateWithoutCreatedByInput> | MarkdownBlockCreateWithoutCreatedByInput[] | MarkdownBlockUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MarkdownBlockCreateOrConnectWithoutCreatedByInput | MarkdownBlockCreateOrConnectWithoutCreatedByInput[]
    createMany?: MarkdownBlockCreateManyCreatedByInputEnvelope
    connect?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
  }

  export type MarkdownBlockCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<MarkdownBlockCreateWithoutUpdatedByInput, MarkdownBlockUncheckedCreateWithoutUpdatedByInput> | MarkdownBlockCreateWithoutUpdatedByInput[] | MarkdownBlockUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: MarkdownBlockCreateOrConnectWithoutUpdatedByInput | MarkdownBlockCreateOrConnectWithoutUpdatedByInput[]
    createMany?: MarkdownBlockCreateManyUpdatedByInputEnvelope
    connect?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type LectureHierarchyUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<LectureHierarchyCreateWithoutCreatedByInput, LectureHierarchyUncheckedCreateWithoutCreatedByInput> | LectureHierarchyCreateWithoutCreatedByInput[] | LectureHierarchyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutCreatedByInput | LectureHierarchyCreateOrConnectWithoutCreatedByInput[]
    createMany?: LectureHierarchyCreateManyCreatedByInputEnvelope
    connect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
  }

  export type LectureHierarchyUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<LectureHierarchyCreateWithoutUpdatedByInput, LectureHierarchyUncheckedCreateWithoutUpdatedByInput> | LectureHierarchyCreateWithoutUpdatedByInput[] | LectureHierarchyUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutUpdatedByInput | LectureHierarchyCreateOrConnectWithoutUpdatedByInput[]
    createMany?: LectureHierarchyCreateManyUpdatedByInputEnvelope
    connect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
  }

  export type MarkdownBlockUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MarkdownBlockCreateWithoutCreatedByInput, MarkdownBlockUncheckedCreateWithoutCreatedByInput> | MarkdownBlockCreateWithoutCreatedByInput[] | MarkdownBlockUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MarkdownBlockCreateOrConnectWithoutCreatedByInput | MarkdownBlockCreateOrConnectWithoutCreatedByInput[]
    createMany?: MarkdownBlockCreateManyCreatedByInputEnvelope
    connect?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
  }

  export type MarkdownBlockUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<MarkdownBlockCreateWithoutUpdatedByInput, MarkdownBlockUncheckedCreateWithoutUpdatedByInput> | MarkdownBlockCreateWithoutUpdatedByInput[] | MarkdownBlockUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: MarkdownBlockCreateOrConnectWithoutUpdatedByInput | MarkdownBlockCreateOrConnectWithoutUpdatedByInput[]
    createMany?: MarkdownBlockCreateManyUpdatedByInputEnvelope
    connect?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRolesFieldUpdateOperationsInput = {
    set?: $Enums.Roles
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type LectureHierarchyUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<LectureHierarchyCreateWithoutCreatedByInput, LectureHierarchyUncheckedCreateWithoutCreatedByInput> | LectureHierarchyCreateWithoutCreatedByInput[] | LectureHierarchyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutCreatedByInput | LectureHierarchyCreateOrConnectWithoutCreatedByInput[]
    upsert?: LectureHierarchyUpsertWithWhereUniqueWithoutCreatedByInput | LectureHierarchyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: LectureHierarchyCreateManyCreatedByInputEnvelope
    set?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    disconnect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    delete?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    connect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    update?: LectureHierarchyUpdateWithWhereUniqueWithoutCreatedByInput | LectureHierarchyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: LectureHierarchyUpdateManyWithWhereWithoutCreatedByInput | LectureHierarchyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: LectureHierarchyScalarWhereInput | LectureHierarchyScalarWhereInput[]
  }

  export type LectureHierarchyUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<LectureHierarchyCreateWithoutUpdatedByInput, LectureHierarchyUncheckedCreateWithoutUpdatedByInput> | LectureHierarchyCreateWithoutUpdatedByInput[] | LectureHierarchyUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutUpdatedByInput | LectureHierarchyCreateOrConnectWithoutUpdatedByInput[]
    upsert?: LectureHierarchyUpsertWithWhereUniqueWithoutUpdatedByInput | LectureHierarchyUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: LectureHierarchyCreateManyUpdatedByInputEnvelope
    set?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    disconnect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    delete?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    connect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    update?: LectureHierarchyUpdateWithWhereUniqueWithoutUpdatedByInput | LectureHierarchyUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: LectureHierarchyUpdateManyWithWhereWithoutUpdatedByInput | LectureHierarchyUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: LectureHierarchyScalarWhereInput | LectureHierarchyScalarWhereInput[]
  }

  export type MarkdownBlockUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MarkdownBlockCreateWithoutCreatedByInput, MarkdownBlockUncheckedCreateWithoutCreatedByInput> | MarkdownBlockCreateWithoutCreatedByInput[] | MarkdownBlockUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MarkdownBlockCreateOrConnectWithoutCreatedByInput | MarkdownBlockCreateOrConnectWithoutCreatedByInput[]
    upsert?: MarkdownBlockUpsertWithWhereUniqueWithoutCreatedByInput | MarkdownBlockUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MarkdownBlockCreateManyCreatedByInputEnvelope
    set?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    disconnect?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    delete?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    connect?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    update?: MarkdownBlockUpdateWithWhereUniqueWithoutCreatedByInput | MarkdownBlockUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MarkdownBlockUpdateManyWithWhereWithoutCreatedByInput | MarkdownBlockUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MarkdownBlockScalarWhereInput | MarkdownBlockScalarWhereInput[]
  }

  export type MarkdownBlockUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<MarkdownBlockCreateWithoutUpdatedByInput, MarkdownBlockUncheckedCreateWithoutUpdatedByInput> | MarkdownBlockCreateWithoutUpdatedByInput[] | MarkdownBlockUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: MarkdownBlockCreateOrConnectWithoutUpdatedByInput | MarkdownBlockCreateOrConnectWithoutUpdatedByInput[]
    upsert?: MarkdownBlockUpsertWithWhereUniqueWithoutUpdatedByInput | MarkdownBlockUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: MarkdownBlockCreateManyUpdatedByInputEnvelope
    set?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    disconnect?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    delete?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    connect?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    update?: MarkdownBlockUpdateWithWhereUniqueWithoutUpdatedByInput | MarkdownBlockUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: MarkdownBlockUpdateManyWithWhereWithoutUpdatedByInput | MarkdownBlockUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: MarkdownBlockScalarWhereInput | MarkdownBlockScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type LectureHierarchyUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<LectureHierarchyCreateWithoutCreatedByInput, LectureHierarchyUncheckedCreateWithoutCreatedByInput> | LectureHierarchyCreateWithoutCreatedByInput[] | LectureHierarchyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutCreatedByInput | LectureHierarchyCreateOrConnectWithoutCreatedByInput[]
    upsert?: LectureHierarchyUpsertWithWhereUniqueWithoutCreatedByInput | LectureHierarchyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: LectureHierarchyCreateManyCreatedByInputEnvelope
    set?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    disconnect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    delete?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    connect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    update?: LectureHierarchyUpdateWithWhereUniqueWithoutCreatedByInput | LectureHierarchyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: LectureHierarchyUpdateManyWithWhereWithoutCreatedByInput | LectureHierarchyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: LectureHierarchyScalarWhereInput | LectureHierarchyScalarWhereInput[]
  }

  export type LectureHierarchyUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<LectureHierarchyCreateWithoutUpdatedByInput, LectureHierarchyUncheckedCreateWithoutUpdatedByInput> | LectureHierarchyCreateWithoutUpdatedByInput[] | LectureHierarchyUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: LectureHierarchyCreateOrConnectWithoutUpdatedByInput | LectureHierarchyCreateOrConnectWithoutUpdatedByInput[]
    upsert?: LectureHierarchyUpsertWithWhereUniqueWithoutUpdatedByInput | LectureHierarchyUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: LectureHierarchyCreateManyUpdatedByInputEnvelope
    set?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    disconnect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    delete?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    connect?: LectureHierarchyWhereUniqueInput | LectureHierarchyWhereUniqueInput[]
    update?: LectureHierarchyUpdateWithWhereUniqueWithoutUpdatedByInput | LectureHierarchyUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: LectureHierarchyUpdateManyWithWhereWithoutUpdatedByInput | LectureHierarchyUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: LectureHierarchyScalarWhereInput | LectureHierarchyScalarWhereInput[]
  }

  export type MarkdownBlockUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MarkdownBlockCreateWithoutCreatedByInput, MarkdownBlockUncheckedCreateWithoutCreatedByInput> | MarkdownBlockCreateWithoutCreatedByInput[] | MarkdownBlockUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MarkdownBlockCreateOrConnectWithoutCreatedByInput | MarkdownBlockCreateOrConnectWithoutCreatedByInput[]
    upsert?: MarkdownBlockUpsertWithWhereUniqueWithoutCreatedByInput | MarkdownBlockUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MarkdownBlockCreateManyCreatedByInputEnvelope
    set?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    disconnect?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    delete?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    connect?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    update?: MarkdownBlockUpdateWithWhereUniqueWithoutCreatedByInput | MarkdownBlockUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MarkdownBlockUpdateManyWithWhereWithoutCreatedByInput | MarkdownBlockUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MarkdownBlockScalarWhereInput | MarkdownBlockScalarWhereInput[]
  }

  export type MarkdownBlockUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<MarkdownBlockCreateWithoutUpdatedByInput, MarkdownBlockUncheckedCreateWithoutUpdatedByInput> | MarkdownBlockCreateWithoutUpdatedByInput[] | MarkdownBlockUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: MarkdownBlockCreateOrConnectWithoutUpdatedByInput | MarkdownBlockCreateOrConnectWithoutUpdatedByInput[]
    upsert?: MarkdownBlockUpsertWithWhereUniqueWithoutUpdatedByInput | MarkdownBlockUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: MarkdownBlockCreateManyUpdatedByInputEnvelope
    set?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    disconnect?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    delete?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    connect?: MarkdownBlockWhereUniqueInput | MarkdownBlockWhereUniqueInput[]
    update?: MarkdownBlockUpdateWithWhereUniqueWithoutUpdatedByInput | MarkdownBlockUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: MarkdownBlockUpdateManyWithWhereWithoutUpdatedByInput | MarkdownBlockUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: MarkdownBlockScalarWhereInput | MarkdownBlockScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type UserCreateWithoutLecturesCreatedInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Roles
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    lecturesUpdated?: LectureHierarchyCreateNestedManyWithoutUpdatedByInput
    blocksCreated?: MarkdownBlockCreateNestedManyWithoutCreatedByInput
    blocksUpdated?: MarkdownBlockCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutLecturesCreatedInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Roles
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    lecturesUpdated?: LectureHierarchyUncheckedCreateNestedManyWithoutUpdatedByInput
    blocksCreated?: MarkdownBlockUncheckedCreateNestedManyWithoutCreatedByInput
    blocksUpdated?: MarkdownBlockUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutLecturesCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLecturesCreatedInput, UserUncheckedCreateWithoutLecturesCreatedInput>
  }

  export type UserCreateWithoutLecturesUpdatedInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Roles
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    lecturesCreated?: LectureHierarchyCreateNestedManyWithoutCreatedByInput
    blocksCreated?: MarkdownBlockCreateNestedManyWithoutCreatedByInput
    blocksUpdated?: MarkdownBlockCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutLecturesUpdatedInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Roles
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    lecturesCreated?: LectureHierarchyUncheckedCreateNestedManyWithoutCreatedByInput
    blocksCreated?: MarkdownBlockUncheckedCreateNestedManyWithoutCreatedByInput
    blocksUpdated?: MarkdownBlockUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutLecturesUpdatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLecturesUpdatedInput, UserUncheckedCreateWithoutLecturesUpdatedInput>
  }

  export type LectureMarkdownCreateWithoutLectureInput = {
    order: number
    block: MarkdownBlockCreateNestedOneWithoutLecturesInput
  }

  export type LectureMarkdownUncheckedCreateWithoutLectureInput = {
    order: number
    blockId: number
  }

  export type LectureMarkdownCreateOrConnectWithoutLectureInput = {
    where: LectureMarkdownWhereUniqueInput
    create: XOR<LectureMarkdownCreateWithoutLectureInput, LectureMarkdownUncheckedCreateWithoutLectureInput>
  }

  export type LectureMarkdownCreateManyLectureInputEnvelope = {
    data: LectureMarkdownCreateManyLectureInput | LectureMarkdownCreateManyLectureInput[]
    skipDuplicates?: boolean
  }

  export type LectureHierarchyCreateWithoutHierarchyChildrenInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    createdBy: UserCreateNestedOneWithoutLecturesCreatedInput
    updatedBy: UserCreateNestedOneWithoutLecturesUpdatedInput
    blocks?: LectureMarkdownCreateNestedManyWithoutLectureInput
    hierarchyParent?: LectureHierarchyCreateNestedOneWithoutHierarchyChildrenInput
  }

  export type LectureHierarchyUncheckedCreateWithoutHierarchyChildrenInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    createdById: string
    updatedById: string
    HierarchyParentId?: number | null
    blocks?: LectureMarkdownUncheckedCreateNestedManyWithoutLectureInput
  }

  export type LectureHierarchyCreateOrConnectWithoutHierarchyChildrenInput = {
    where: LectureHierarchyWhereUniqueInput
    create: XOR<LectureHierarchyCreateWithoutHierarchyChildrenInput, LectureHierarchyUncheckedCreateWithoutHierarchyChildrenInput>
  }

  export type LectureHierarchyCreateWithoutHierarchyParentInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    createdBy: UserCreateNestedOneWithoutLecturesCreatedInput
    updatedBy: UserCreateNestedOneWithoutLecturesUpdatedInput
    blocks?: LectureMarkdownCreateNestedManyWithoutLectureInput
    hierarchyChildren?: LectureHierarchyCreateNestedManyWithoutHierarchyParentInput
  }

  export type LectureHierarchyUncheckedCreateWithoutHierarchyParentInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    createdById: string
    updatedById: string
    blocks?: LectureMarkdownUncheckedCreateNestedManyWithoutLectureInput
    hierarchyChildren?: LectureHierarchyUncheckedCreateNestedManyWithoutHierarchyParentInput
  }

  export type LectureHierarchyCreateOrConnectWithoutHierarchyParentInput = {
    where: LectureHierarchyWhereUniqueInput
    create: XOR<LectureHierarchyCreateWithoutHierarchyParentInput, LectureHierarchyUncheckedCreateWithoutHierarchyParentInput>
  }

  export type LectureHierarchyCreateManyHierarchyParentInputEnvelope = {
    data: LectureHierarchyCreateManyHierarchyParentInput | LectureHierarchyCreateManyHierarchyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLecturesCreatedInput = {
    update: XOR<UserUpdateWithoutLecturesCreatedInput, UserUncheckedUpdateWithoutLecturesCreatedInput>
    create: XOR<UserCreateWithoutLecturesCreatedInput, UserUncheckedCreateWithoutLecturesCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLecturesCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLecturesCreatedInput, UserUncheckedUpdateWithoutLecturesCreatedInput>
  }

  export type UserUpdateWithoutLecturesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    lecturesUpdated?: LectureHierarchyUpdateManyWithoutUpdatedByNestedInput
    blocksCreated?: MarkdownBlockUpdateManyWithoutCreatedByNestedInput
    blocksUpdated?: MarkdownBlockUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLecturesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    lecturesUpdated?: LectureHierarchyUncheckedUpdateManyWithoutUpdatedByNestedInput
    blocksCreated?: MarkdownBlockUncheckedUpdateManyWithoutCreatedByNestedInput
    blocksUpdated?: MarkdownBlockUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUpsertWithoutLecturesUpdatedInput = {
    update: XOR<UserUpdateWithoutLecturesUpdatedInput, UserUncheckedUpdateWithoutLecturesUpdatedInput>
    create: XOR<UserCreateWithoutLecturesUpdatedInput, UserUncheckedCreateWithoutLecturesUpdatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLecturesUpdatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLecturesUpdatedInput, UserUncheckedUpdateWithoutLecturesUpdatedInput>
  }

  export type UserUpdateWithoutLecturesUpdatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    lecturesCreated?: LectureHierarchyUpdateManyWithoutCreatedByNestedInput
    blocksCreated?: MarkdownBlockUpdateManyWithoutCreatedByNestedInput
    blocksUpdated?: MarkdownBlockUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLecturesUpdatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    lecturesCreated?: LectureHierarchyUncheckedUpdateManyWithoutCreatedByNestedInput
    blocksCreated?: MarkdownBlockUncheckedUpdateManyWithoutCreatedByNestedInput
    blocksUpdated?: MarkdownBlockUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type LectureMarkdownUpsertWithWhereUniqueWithoutLectureInput = {
    where: LectureMarkdownWhereUniqueInput
    update: XOR<LectureMarkdownUpdateWithoutLectureInput, LectureMarkdownUncheckedUpdateWithoutLectureInput>
    create: XOR<LectureMarkdownCreateWithoutLectureInput, LectureMarkdownUncheckedCreateWithoutLectureInput>
  }

  export type LectureMarkdownUpdateWithWhereUniqueWithoutLectureInput = {
    where: LectureMarkdownWhereUniqueInput
    data: XOR<LectureMarkdownUpdateWithoutLectureInput, LectureMarkdownUncheckedUpdateWithoutLectureInput>
  }

  export type LectureMarkdownUpdateManyWithWhereWithoutLectureInput = {
    where: LectureMarkdownScalarWhereInput
    data: XOR<LectureMarkdownUpdateManyMutationInput, LectureMarkdownUncheckedUpdateManyWithoutLectureInput>
  }

  export type LectureMarkdownScalarWhereInput = {
    AND?: LectureMarkdownScalarWhereInput | LectureMarkdownScalarWhereInput[]
    OR?: LectureMarkdownScalarWhereInput[]
    NOT?: LectureMarkdownScalarWhereInput | LectureMarkdownScalarWhereInput[]
    order?: IntFilter<"LectureMarkdown"> | number
    lectureId?: IntFilter<"LectureMarkdown"> | number
    blockId?: IntFilter<"LectureMarkdown"> | number
  }

  export type LectureHierarchyUpsertWithoutHierarchyChildrenInput = {
    update: XOR<LectureHierarchyUpdateWithoutHierarchyChildrenInput, LectureHierarchyUncheckedUpdateWithoutHierarchyChildrenInput>
    create: XOR<LectureHierarchyCreateWithoutHierarchyChildrenInput, LectureHierarchyUncheckedCreateWithoutHierarchyChildrenInput>
    where?: LectureHierarchyWhereInput
  }

  export type LectureHierarchyUpdateToOneWithWhereWithoutHierarchyChildrenInput = {
    where?: LectureHierarchyWhereInput
    data: XOR<LectureHierarchyUpdateWithoutHierarchyChildrenInput, LectureHierarchyUncheckedUpdateWithoutHierarchyChildrenInput>
  }

  export type LectureHierarchyUpdateWithoutHierarchyChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneRequiredWithoutLecturesCreatedNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutLecturesUpdatedNestedInput
    blocks?: LectureMarkdownUpdateManyWithoutLectureNestedInput
    hierarchyParent?: LectureHierarchyUpdateOneWithoutHierarchyChildrenNestedInput
  }

  export type LectureHierarchyUncheckedUpdateWithoutHierarchyChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    HierarchyParentId?: NullableIntFieldUpdateOperationsInput | number | null
    blocks?: LectureMarkdownUncheckedUpdateManyWithoutLectureNestedInput
  }

  export type LectureHierarchyUpsertWithWhereUniqueWithoutHierarchyParentInput = {
    where: LectureHierarchyWhereUniqueInput
    update: XOR<LectureHierarchyUpdateWithoutHierarchyParentInput, LectureHierarchyUncheckedUpdateWithoutHierarchyParentInput>
    create: XOR<LectureHierarchyCreateWithoutHierarchyParentInput, LectureHierarchyUncheckedCreateWithoutHierarchyParentInput>
  }

  export type LectureHierarchyUpdateWithWhereUniqueWithoutHierarchyParentInput = {
    where: LectureHierarchyWhereUniqueInput
    data: XOR<LectureHierarchyUpdateWithoutHierarchyParentInput, LectureHierarchyUncheckedUpdateWithoutHierarchyParentInput>
  }

  export type LectureHierarchyUpdateManyWithWhereWithoutHierarchyParentInput = {
    where: LectureHierarchyScalarWhereInput
    data: XOR<LectureHierarchyUpdateManyMutationInput, LectureHierarchyUncheckedUpdateManyWithoutHierarchyParentInput>
  }

  export type LectureHierarchyScalarWhereInput = {
    AND?: LectureHierarchyScalarWhereInput | LectureHierarchyScalarWhereInput[]
    OR?: LectureHierarchyScalarWhereInput[]
    NOT?: LectureHierarchyScalarWhereInput | LectureHierarchyScalarWhereInput[]
    id?: IntFilter<"LectureHierarchy"> | number
    name?: StringFilter<"LectureHierarchy"> | string
    createdAt?: DateTimeFilter<"LectureHierarchy"> | Date | string
    updatedAt?: DateTimeFilter<"LectureHierarchy"> | Date | string
    isPublic?: BoolFilter<"LectureHierarchy"> | boolean
    createdById?: StringFilter<"LectureHierarchy"> | string
    updatedById?: StringFilter<"LectureHierarchy"> | string
    HierarchyParentId?: IntNullableFilter<"LectureHierarchy"> | number | null
  }

  export type LectureHierarchyCreateWithoutBlocksInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    createdBy: UserCreateNestedOneWithoutLecturesCreatedInput
    updatedBy: UserCreateNestedOneWithoutLecturesUpdatedInput
    hierarchyParent?: LectureHierarchyCreateNestedOneWithoutHierarchyChildrenInput
    hierarchyChildren?: LectureHierarchyCreateNestedManyWithoutHierarchyParentInput
  }

  export type LectureHierarchyUncheckedCreateWithoutBlocksInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    createdById: string
    updatedById: string
    HierarchyParentId?: number | null
    hierarchyChildren?: LectureHierarchyUncheckedCreateNestedManyWithoutHierarchyParentInput
  }

  export type LectureHierarchyCreateOrConnectWithoutBlocksInput = {
    where: LectureHierarchyWhereUniqueInput
    create: XOR<LectureHierarchyCreateWithoutBlocksInput, LectureHierarchyUncheckedCreateWithoutBlocksInput>
  }

  export type MarkdownBlockCreateWithoutLecturesInput = {
    name: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutBlocksCreatedInput
    updatedBy: UserCreateNestedOneWithoutBlocksUpdatedInput
  }

  export type MarkdownBlockUncheckedCreateWithoutLecturesInput = {
    id?: number
    name: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    updatedById: string
  }

  export type MarkdownBlockCreateOrConnectWithoutLecturesInput = {
    where: MarkdownBlockWhereUniqueInput
    create: XOR<MarkdownBlockCreateWithoutLecturesInput, MarkdownBlockUncheckedCreateWithoutLecturesInput>
  }

  export type LectureHierarchyUpsertWithoutBlocksInput = {
    update: XOR<LectureHierarchyUpdateWithoutBlocksInput, LectureHierarchyUncheckedUpdateWithoutBlocksInput>
    create: XOR<LectureHierarchyCreateWithoutBlocksInput, LectureHierarchyUncheckedCreateWithoutBlocksInput>
    where?: LectureHierarchyWhereInput
  }

  export type LectureHierarchyUpdateToOneWithWhereWithoutBlocksInput = {
    where?: LectureHierarchyWhereInput
    data: XOR<LectureHierarchyUpdateWithoutBlocksInput, LectureHierarchyUncheckedUpdateWithoutBlocksInput>
  }

  export type LectureHierarchyUpdateWithoutBlocksInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneRequiredWithoutLecturesCreatedNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutLecturesUpdatedNestedInput
    hierarchyParent?: LectureHierarchyUpdateOneWithoutHierarchyChildrenNestedInput
    hierarchyChildren?: LectureHierarchyUpdateManyWithoutHierarchyParentNestedInput
  }

  export type LectureHierarchyUncheckedUpdateWithoutBlocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    HierarchyParentId?: NullableIntFieldUpdateOperationsInput | number | null
    hierarchyChildren?: LectureHierarchyUncheckedUpdateManyWithoutHierarchyParentNestedInput
  }

  export type MarkdownBlockUpsertWithoutLecturesInput = {
    update: XOR<MarkdownBlockUpdateWithoutLecturesInput, MarkdownBlockUncheckedUpdateWithoutLecturesInput>
    create: XOR<MarkdownBlockCreateWithoutLecturesInput, MarkdownBlockUncheckedCreateWithoutLecturesInput>
    where?: MarkdownBlockWhereInput
  }

  export type MarkdownBlockUpdateToOneWithWhereWithoutLecturesInput = {
    where?: MarkdownBlockWhereInput
    data: XOR<MarkdownBlockUpdateWithoutLecturesInput, MarkdownBlockUncheckedUpdateWithoutLecturesInput>
  }

  export type MarkdownBlockUpdateWithoutLecturesInput = {
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutBlocksCreatedNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutBlocksUpdatedNestedInput
  }

  export type MarkdownBlockUncheckedUpdateWithoutLecturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
  }

  export type LectureMarkdownCreateWithoutBlockInput = {
    order: number
    lecture: LectureHierarchyCreateNestedOneWithoutBlocksInput
  }

  export type LectureMarkdownUncheckedCreateWithoutBlockInput = {
    order: number
    lectureId: number
  }

  export type LectureMarkdownCreateOrConnectWithoutBlockInput = {
    where: LectureMarkdownWhereUniqueInput
    create: XOR<LectureMarkdownCreateWithoutBlockInput, LectureMarkdownUncheckedCreateWithoutBlockInput>
  }

  export type LectureMarkdownCreateManyBlockInputEnvelope = {
    data: LectureMarkdownCreateManyBlockInput | LectureMarkdownCreateManyBlockInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutBlocksCreatedInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Roles
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    lecturesCreated?: LectureHierarchyCreateNestedManyWithoutCreatedByInput
    lecturesUpdated?: LectureHierarchyCreateNestedManyWithoutUpdatedByInput
    blocksUpdated?: MarkdownBlockCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutBlocksCreatedInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Roles
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    lecturesCreated?: LectureHierarchyUncheckedCreateNestedManyWithoutCreatedByInput
    lecturesUpdated?: LectureHierarchyUncheckedCreateNestedManyWithoutUpdatedByInput
    blocksUpdated?: MarkdownBlockUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutBlocksCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlocksCreatedInput, UserUncheckedCreateWithoutBlocksCreatedInput>
  }

  export type UserCreateWithoutBlocksUpdatedInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Roles
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    lecturesCreated?: LectureHierarchyCreateNestedManyWithoutCreatedByInput
    lecturesUpdated?: LectureHierarchyCreateNestedManyWithoutUpdatedByInput
    blocksCreated?: MarkdownBlockCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutBlocksUpdatedInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Roles
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    lecturesCreated?: LectureHierarchyUncheckedCreateNestedManyWithoutCreatedByInput
    lecturesUpdated?: LectureHierarchyUncheckedCreateNestedManyWithoutUpdatedByInput
    blocksCreated?: MarkdownBlockUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutBlocksUpdatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlocksUpdatedInput, UserUncheckedCreateWithoutBlocksUpdatedInput>
  }

  export type LectureMarkdownUpsertWithWhereUniqueWithoutBlockInput = {
    where: LectureMarkdownWhereUniqueInput
    update: XOR<LectureMarkdownUpdateWithoutBlockInput, LectureMarkdownUncheckedUpdateWithoutBlockInput>
    create: XOR<LectureMarkdownCreateWithoutBlockInput, LectureMarkdownUncheckedCreateWithoutBlockInput>
  }

  export type LectureMarkdownUpdateWithWhereUniqueWithoutBlockInput = {
    where: LectureMarkdownWhereUniqueInput
    data: XOR<LectureMarkdownUpdateWithoutBlockInput, LectureMarkdownUncheckedUpdateWithoutBlockInput>
  }

  export type LectureMarkdownUpdateManyWithWhereWithoutBlockInput = {
    where: LectureMarkdownScalarWhereInput
    data: XOR<LectureMarkdownUpdateManyMutationInput, LectureMarkdownUncheckedUpdateManyWithoutBlockInput>
  }

  export type UserUpsertWithoutBlocksCreatedInput = {
    update: XOR<UserUpdateWithoutBlocksCreatedInput, UserUncheckedUpdateWithoutBlocksCreatedInput>
    create: XOR<UserCreateWithoutBlocksCreatedInput, UserUncheckedCreateWithoutBlocksCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlocksCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlocksCreatedInput, UserUncheckedUpdateWithoutBlocksCreatedInput>
  }

  export type UserUpdateWithoutBlocksCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    lecturesCreated?: LectureHierarchyUpdateManyWithoutCreatedByNestedInput
    lecturesUpdated?: LectureHierarchyUpdateManyWithoutUpdatedByNestedInput
    blocksUpdated?: MarkdownBlockUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBlocksCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    lecturesCreated?: LectureHierarchyUncheckedUpdateManyWithoutCreatedByNestedInput
    lecturesUpdated?: LectureHierarchyUncheckedUpdateManyWithoutUpdatedByNestedInput
    blocksUpdated?: MarkdownBlockUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUpsertWithoutBlocksUpdatedInput = {
    update: XOR<UserUpdateWithoutBlocksUpdatedInput, UserUncheckedUpdateWithoutBlocksUpdatedInput>
    create: XOR<UserCreateWithoutBlocksUpdatedInput, UserUncheckedCreateWithoutBlocksUpdatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlocksUpdatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlocksUpdatedInput, UserUncheckedUpdateWithoutBlocksUpdatedInput>
  }

  export type UserUpdateWithoutBlocksUpdatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    lecturesCreated?: LectureHierarchyUpdateManyWithoutCreatedByNestedInput
    lecturesUpdated?: LectureHierarchyUpdateManyWithoutUpdatedByNestedInput
    blocksCreated?: MarkdownBlockUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBlocksUpdatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    lecturesCreated?: LectureHierarchyUncheckedUpdateManyWithoutCreatedByNestedInput
    lecturesUpdated?: LectureHierarchyUncheckedUpdateManyWithoutUpdatedByNestedInput
    blocksCreated?: MarkdownBlockUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Roles
    sessions?: SessionCreateNestedManyWithoutUserInput
    lecturesCreated?: LectureHierarchyCreateNestedManyWithoutCreatedByInput
    lecturesUpdated?: LectureHierarchyCreateNestedManyWithoutUpdatedByInput
    blocksCreated?: MarkdownBlockCreateNestedManyWithoutCreatedByInput
    blocksUpdated?: MarkdownBlockCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Roles
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    lecturesCreated?: LectureHierarchyUncheckedCreateNestedManyWithoutCreatedByInput
    lecturesUpdated?: LectureHierarchyUncheckedCreateNestedManyWithoutUpdatedByInput
    blocksCreated?: MarkdownBlockUncheckedCreateNestedManyWithoutCreatedByInput
    blocksUpdated?: MarkdownBlockUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    sessions?: SessionUpdateManyWithoutUserNestedInput
    lecturesCreated?: LectureHierarchyUpdateManyWithoutCreatedByNestedInput
    lecturesUpdated?: LectureHierarchyUpdateManyWithoutUpdatedByNestedInput
    blocksCreated?: MarkdownBlockUpdateManyWithoutCreatedByNestedInput
    blocksUpdated?: MarkdownBlockUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    lecturesCreated?: LectureHierarchyUncheckedUpdateManyWithoutCreatedByNestedInput
    lecturesUpdated?: LectureHierarchyUncheckedUpdateManyWithoutUpdatedByNestedInput
    blocksCreated?: MarkdownBlockUncheckedUpdateManyWithoutCreatedByNestedInput
    blocksUpdated?: MarkdownBlockUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Roles
    accounts?: AccountCreateNestedManyWithoutUserInput
    lecturesCreated?: LectureHierarchyCreateNestedManyWithoutCreatedByInput
    lecturesUpdated?: LectureHierarchyCreateNestedManyWithoutUpdatedByInput
    blocksCreated?: MarkdownBlockCreateNestedManyWithoutCreatedByInput
    blocksUpdated?: MarkdownBlockCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Roles
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    lecturesCreated?: LectureHierarchyUncheckedCreateNestedManyWithoutCreatedByInput
    lecturesUpdated?: LectureHierarchyUncheckedCreateNestedManyWithoutUpdatedByInput
    blocksCreated?: MarkdownBlockUncheckedCreateNestedManyWithoutCreatedByInput
    blocksUpdated?: MarkdownBlockUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    accounts?: AccountUpdateManyWithoutUserNestedInput
    lecturesCreated?: LectureHierarchyUpdateManyWithoutCreatedByNestedInput
    lecturesUpdated?: LectureHierarchyUpdateManyWithoutUpdatedByNestedInput
    blocksCreated?: MarkdownBlockUpdateManyWithoutCreatedByNestedInput
    blocksUpdated?: MarkdownBlockUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    lecturesCreated?: LectureHierarchyUncheckedUpdateManyWithoutCreatedByNestedInput
    lecturesUpdated?: LectureHierarchyUncheckedUpdateManyWithoutUpdatedByNestedInput
    blocksCreated?: MarkdownBlockUncheckedUpdateManyWithoutCreatedByNestedInput
    blocksUpdated?: MarkdownBlockUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LectureHierarchyCreateWithoutCreatedByInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    updatedBy: UserCreateNestedOneWithoutLecturesUpdatedInput
    blocks?: LectureMarkdownCreateNestedManyWithoutLectureInput
    hierarchyParent?: LectureHierarchyCreateNestedOneWithoutHierarchyChildrenInput
    hierarchyChildren?: LectureHierarchyCreateNestedManyWithoutHierarchyParentInput
  }

  export type LectureHierarchyUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    updatedById: string
    HierarchyParentId?: number | null
    blocks?: LectureMarkdownUncheckedCreateNestedManyWithoutLectureInput
    hierarchyChildren?: LectureHierarchyUncheckedCreateNestedManyWithoutHierarchyParentInput
  }

  export type LectureHierarchyCreateOrConnectWithoutCreatedByInput = {
    where: LectureHierarchyWhereUniqueInput
    create: XOR<LectureHierarchyCreateWithoutCreatedByInput, LectureHierarchyUncheckedCreateWithoutCreatedByInput>
  }

  export type LectureHierarchyCreateManyCreatedByInputEnvelope = {
    data: LectureHierarchyCreateManyCreatedByInput | LectureHierarchyCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type LectureHierarchyCreateWithoutUpdatedByInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    createdBy: UserCreateNestedOneWithoutLecturesCreatedInput
    blocks?: LectureMarkdownCreateNestedManyWithoutLectureInput
    hierarchyParent?: LectureHierarchyCreateNestedOneWithoutHierarchyChildrenInput
    hierarchyChildren?: LectureHierarchyCreateNestedManyWithoutHierarchyParentInput
  }

  export type LectureHierarchyUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    createdById: string
    HierarchyParentId?: number | null
    blocks?: LectureMarkdownUncheckedCreateNestedManyWithoutLectureInput
    hierarchyChildren?: LectureHierarchyUncheckedCreateNestedManyWithoutHierarchyParentInput
  }

  export type LectureHierarchyCreateOrConnectWithoutUpdatedByInput = {
    where: LectureHierarchyWhereUniqueInput
    create: XOR<LectureHierarchyCreateWithoutUpdatedByInput, LectureHierarchyUncheckedCreateWithoutUpdatedByInput>
  }

  export type LectureHierarchyCreateManyUpdatedByInputEnvelope = {
    data: LectureHierarchyCreateManyUpdatedByInput | LectureHierarchyCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type MarkdownBlockCreateWithoutCreatedByInput = {
    name: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lectures?: LectureMarkdownCreateNestedManyWithoutBlockInput
    updatedBy: UserCreateNestedOneWithoutBlocksUpdatedInput
  }

  export type MarkdownBlockUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedById: string
    lectures?: LectureMarkdownUncheckedCreateNestedManyWithoutBlockInput
  }

  export type MarkdownBlockCreateOrConnectWithoutCreatedByInput = {
    where: MarkdownBlockWhereUniqueInput
    create: XOR<MarkdownBlockCreateWithoutCreatedByInput, MarkdownBlockUncheckedCreateWithoutCreatedByInput>
  }

  export type MarkdownBlockCreateManyCreatedByInputEnvelope = {
    data: MarkdownBlockCreateManyCreatedByInput | MarkdownBlockCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type MarkdownBlockCreateWithoutUpdatedByInput = {
    name: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lectures?: LectureMarkdownCreateNestedManyWithoutBlockInput
    createdBy: UserCreateNestedOneWithoutBlocksCreatedInput
  }

  export type MarkdownBlockUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    name: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    lectures?: LectureMarkdownUncheckedCreateNestedManyWithoutBlockInput
  }

  export type MarkdownBlockCreateOrConnectWithoutUpdatedByInput = {
    where: MarkdownBlockWhereUniqueInput
    create: XOR<MarkdownBlockCreateWithoutUpdatedByInput, MarkdownBlockUncheckedCreateWithoutUpdatedByInput>
  }

  export type MarkdownBlockCreateManyUpdatedByInputEnvelope = {
    data: MarkdownBlockCreateManyUpdatedByInput | MarkdownBlockCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type LectureHierarchyUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: LectureHierarchyWhereUniqueInput
    update: XOR<LectureHierarchyUpdateWithoutCreatedByInput, LectureHierarchyUncheckedUpdateWithoutCreatedByInput>
    create: XOR<LectureHierarchyCreateWithoutCreatedByInput, LectureHierarchyUncheckedCreateWithoutCreatedByInput>
  }

  export type LectureHierarchyUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: LectureHierarchyWhereUniqueInput
    data: XOR<LectureHierarchyUpdateWithoutCreatedByInput, LectureHierarchyUncheckedUpdateWithoutCreatedByInput>
  }

  export type LectureHierarchyUpdateManyWithWhereWithoutCreatedByInput = {
    where: LectureHierarchyScalarWhereInput
    data: XOR<LectureHierarchyUpdateManyMutationInput, LectureHierarchyUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type LectureHierarchyUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: LectureHierarchyWhereUniqueInput
    update: XOR<LectureHierarchyUpdateWithoutUpdatedByInput, LectureHierarchyUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<LectureHierarchyCreateWithoutUpdatedByInput, LectureHierarchyUncheckedCreateWithoutUpdatedByInput>
  }

  export type LectureHierarchyUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: LectureHierarchyWhereUniqueInput
    data: XOR<LectureHierarchyUpdateWithoutUpdatedByInput, LectureHierarchyUncheckedUpdateWithoutUpdatedByInput>
  }

  export type LectureHierarchyUpdateManyWithWhereWithoutUpdatedByInput = {
    where: LectureHierarchyScalarWhereInput
    data: XOR<LectureHierarchyUpdateManyMutationInput, LectureHierarchyUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type MarkdownBlockUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: MarkdownBlockWhereUniqueInput
    update: XOR<MarkdownBlockUpdateWithoutCreatedByInput, MarkdownBlockUncheckedUpdateWithoutCreatedByInput>
    create: XOR<MarkdownBlockCreateWithoutCreatedByInput, MarkdownBlockUncheckedCreateWithoutCreatedByInput>
  }

  export type MarkdownBlockUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: MarkdownBlockWhereUniqueInput
    data: XOR<MarkdownBlockUpdateWithoutCreatedByInput, MarkdownBlockUncheckedUpdateWithoutCreatedByInput>
  }

  export type MarkdownBlockUpdateManyWithWhereWithoutCreatedByInput = {
    where: MarkdownBlockScalarWhereInput
    data: XOR<MarkdownBlockUpdateManyMutationInput, MarkdownBlockUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type MarkdownBlockScalarWhereInput = {
    AND?: MarkdownBlockScalarWhereInput | MarkdownBlockScalarWhereInput[]
    OR?: MarkdownBlockScalarWhereInput[]
    NOT?: MarkdownBlockScalarWhereInput | MarkdownBlockScalarWhereInput[]
    id?: IntFilter<"MarkdownBlock"> | number
    name?: StringFilter<"MarkdownBlock"> | string
    content?: StringNullableFilter<"MarkdownBlock"> | string | null
    createdAt?: DateTimeFilter<"MarkdownBlock"> | Date | string
    updatedAt?: DateTimeFilter<"MarkdownBlock"> | Date | string
    createdById?: StringFilter<"MarkdownBlock"> | string
    updatedById?: StringFilter<"MarkdownBlock"> | string
  }

  export type MarkdownBlockUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: MarkdownBlockWhereUniqueInput
    update: XOR<MarkdownBlockUpdateWithoutUpdatedByInput, MarkdownBlockUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<MarkdownBlockCreateWithoutUpdatedByInput, MarkdownBlockUncheckedCreateWithoutUpdatedByInput>
  }

  export type MarkdownBlockUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: MarkdownBlockWhereUniqueInput
    data: XOR<MarkdownBlockUpdateWithoutUpdatedByInput, MarkdownBlockUncheckedUpdateWithoutUpdatedByInput>
  }

  export type MarkdownBlockUpdateManyWithWhereWithoutUpdatedByInput = {
    where: MarkdownBlockScalarWhereInput
    data: XOR<MarkdownBlockUpdateManyMutationInput, MarkdownBlockUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type LectureMarkdownCreateManyLectureInput = {
    order: number
    blockId: number
  }

  export type LectureHierarchyCreateManyHierarchyParentInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    createdById: string
    updatedById: string
  }

  export type LectureMarkdownUpdateWithoutLectureInput = {
    order?: IntFieldUpdateOperationsInput | number
    block?: MarkdownBlockUpdateOneRequiredWithoutLecturesNestedInput
  }

  export type LectureMarkdownUncheckedUpdateWithoutLectureInput = {
    order?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
  }

  export type LectureMarkdownUncheckedUpdateManyWithoutLectureInput = {
    order?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
  }

  export type LectureHierarchyUpdateWithoutHierarchyParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneRequiredWithoutLecturesCreatedNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutLecturesUpdatedNestedInput
    blocks?: LectureMarkdownUpdateManyWithoutLectureNestedInput
    hierarchyChildren?: LectureHierarchyUpdateManyWithoutHierarchyParentNestedInput
  }

  export type LectureHierarchyUncheckedUpdateWithoutHierarchyParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    blocks?: LectureMarkdownUncheckedUpdateManyWithoutLectureNestedInput
    hierarchyChildren?: LectureHierarchyUncheckedUpdateManyWithoutHierarchyParentNestedInput
  }

  export type LectureHierarchyUncheckedUpdateManyWithoutHierarchyParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
  }

  export type LectureMarkdownCreateManyBlockInput = {
    order: number
    lectureId: number
  }

  export type LectureMarkdownUpdateWithoutBlockInput = {
    order?: IntFieldUpdateOperationsInput | number
    lecture?: LectureHierarchyUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type LectureMarkdownUncheckedUpdateWithoutBlockInput = {
    order?: IntFieldUpdateOperationsInput | number
    lectureId?: IntFieldUpdateOperationsInput | number
  }

  export type LectureMarkdownUncheckedUpdateManyWithoutBlockInput = {
    order?: IntFieldUpdateOperationsInput | number
    lectureId?: IntFieldUpdateOperationsInput | number
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type LectureHierarchyCreateManyCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    updatedById: string
    HierarchyParentId?: number | null
  }

  export type LectureHierarchyCreateManyUpdatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    createdById: string
    HierarchyParentId?: number | null
  }

  export type MarkdownBlockCreateManyCreatedByInput = {
    id?: number
    name: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedById: string
  }

  export type MarkdownBlockCreateManyUpdatedByInput = {
    id?: number
    name: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureHierarchyUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    updatedBy?: UserUpdateOneRequiredWithoutLecturesUpdatedNestedInput
    blocks?: LectureMarkdownUpdateManyWithoutLectureNestedInput
    hierarchyParent?: LectureHierarchyUpdateOneWithoutHierarchyChildrenNestedInput
    hierarchyChildren?: LectureHierarchyUpdateManyWithoutHierarchyParentNestedInput
  }

  export type LectureHierarchyUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    updatedById?: StringFieldUpdateOperationsInput | string
    HierarchyParentId?: NullableIntFieldUpdateOperationsInput | number | null
    blocks?: LectureMarkdownUncheckedUpdateManyWithoutLectureNestedInput
    hierarchyChildren?: LectureHierarchyUncheckedUpdateManyWithoutHierarchyParentNestedInput
  }

  export type LectureHierarchyUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    updatedById?: StringFieldUpdateOperationsInput | string
    HierarchyParentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LectureHierarchyUpdateWithoutUpdatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneRequiredWithoutLecturesCreatedNestedInput
    blocks?: LectureMarkdownUpdateManyWithoutLectureNestedInput
    hierarchyParent?: LectureHierarchyUpdateOneWithoutHierarchyChildrenNestedInput
    hierarchyChildren?: LectureHierarchyUpdateManyWithoutHierarchyParentNestedInput
  }

  export type LectureHierarchyUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    HierarchyParentId?: NullableIntFieldUpdateOperationsInput | number | null
    blocks?: LectureMarkdownUncheckedUpdateManyWithoutLectureNestedInput
    hierarchyChildren?: LectureHierarchyUncheckedUpdateManyWithoutHierarchyParentNestedInput
  }

  export type LectureHierarchyUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    HierarchyParentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MarkdownBlockUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lectures?: LectureMarkdownUpdateManyWithoutBlockNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutBlocksUpdatedNestedInput
  }

  export type MarkdownBlockUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    lectures?: LectureMarkdownUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type MarkdownBlockUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
  }

  export type MarkdownBlockUpdateWithoutUpdatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lectures?: LectureMarkdownUpdateManyWithoutBlockNestedInput
    createdBy?: UserUpdateOneRequiredWithoutBlocksCreatedNestedInput
  }

  export type MarkdownBlockUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    lectures?: LectureMarkdownUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type MarkdownBlockUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
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