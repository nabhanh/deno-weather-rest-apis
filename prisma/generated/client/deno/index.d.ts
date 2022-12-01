/**
 * Client
 */

import * as runtime from ".././runtime/index.d.ts";
declare const prisma: unique symbol;
export type PrismaPromise<A> = Promise<A> & { [prisma]: true };
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P;
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}`
    ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]>
    : UnwrapPromise<Tuple[K]>;
};

/**
 * Model City
 */
export type City = {
  id: number;
  name: string;
  country: string;
  capital: boolean;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Model Weather
 */
export type Weather = {
  id: number;
  cityId: number;
  temp: number;
  temp_min: number;
  temp_max: number;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cities
 * const cities = await prisma.city.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof T
    ? T["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T["log"]>
    : never
    : never,
  GlobalReject extends
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined = "rejectOnNotFound" extends keyof T ? T["rejectOnNotFound"]
      : false,
> {
  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cities
   * const cities = await prisma.city.findMany()
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | "beforeExit")>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent
        : V extends "beforeExit" ? () => Promise<void>
        : Prisma.LogEvent,
    ) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): Promise<UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Prisma.TransactionClient) => Promise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): Promise<R>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Cities
   * const cities = await prisma.city.findMany()
   * ```
   */
  get city(): Prisma.CityDelegate<GlobalReject>;

  /**
   * `prisma.weather`: Exposes CRUD operations for the **Weather** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Weathers
   * const weathers = await prisma.weather.findMany()
   * ```
   */
  get weather(): Prisma.WeatherDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Prisma Client JS version: 4.7.0
   * Query Engine version: 39190b250ebc338586e25e6da45e5e783bc8a635
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null;
  };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };
  type HasSelect = {
    select: any;
  };
  type HasInclude = {
    include: any;
  };
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? "Please either choose `select` or `include`"
    : T extends HasSelect ? U
    : T extends HasInclude ? U
    : S;

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends
    PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> =
    PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
  export type SelectSubset<T, U> =
    & {
      [key in keyof T]: key extends keyof U ? T[key] : never;
    }
    & (T extends SelectAndInclude
      ? "Please either choose `select` or `include`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> =
    & {
      [key in keyof T]: key extends keyof U ? T[key] : never;
    }
    & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T)
    : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any> ? False
    : T extends Date ? False
    : T extends Uint8Array ? False
    : T extends BigInt ? False
    : T extends object ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> =
    & Omit<O, K>
    & {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean,
  > = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> =
    & {
      [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
    }
    & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> =
    & {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
    }
    & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> =
    {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
    }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A
    : 
      & {
        [K in keyof A]: A[K];
      }
      & {};

  export type OptionalFlat<O> =
    & {
      [K in keyof O]?: O[K];
    }
    & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown ? 
        | (K extends keyof O ? { [P in K]: O[P] } & O : O)
        | { [P in keyof O as P extends K ? K : never]-?: O[P] } & O
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 // anything `never` is false
    : A1 extends A2 ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Exact<A, W = unknown> = W extends unknown
    ? A extends Narrowable ? Cast<A, W> : Cast<
      { [K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never },
      { [K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K] }
    >
    : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
      [P in keyof T]: P extends keyof O ? O[P]
        : never;
    }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      // infer is only needed to not hit TS limit
      // based on the brilliant idea of Pierre-Antoine Mills
      // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
      ? T[K] extends infer TK ? GetHavingFields<
          UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
        >
      : never
      : {} extends FieldPaths<T[K]> ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<
    T,
    TupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never
    : FieldRef<Model, FieldType>;

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(
      prisma: PrismaClient<any, any>,
      debug?: boolean,
      hooks?: Hooks | undefined,
    );
    request<T>(
      document: any,
      dataPath?: string[],
      rootField?: string,
      typeName?: string,
      isList?: boolean,
      callsite?: string,
    ): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(
      document: any,
      data: any,
      path: string[],
      rootField?: string,
      isList?: boolean,
    ): any;
  }

  export const ModelName: {
    City: "City";
    Weather: "Weather";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  export type RejectOnNotFound = boolean | ((error: Error) => Error);
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound };
  export type RejectPerOperation = {
    [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound;
  };
  type IsReject<T> = T extends true ? True
    : T extends (err: Error) => Error ? True
    : False;
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions["rejectOnNotFound"],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName,
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
      ? Action extends keyof GlobalRejectSettings
        ? GlobalRejectSettings[Action] extends RejectOnNotFound
          ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
          ? Model extends keyof GlobalRejectSettings[Action]
            ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null.
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>;
  }

  export type Hooks = {
    beforeRequest?: (
      options: {
        query: string;
        path: string[];
        rootField?: string;
        typeName?: string;
        document: any;
      },
    ) => any;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends
    LogDefinition ? T["emit"] extends "event" ? T["level"] : never : never;
  export type GetEvents<T extends any> = T extends
    Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findMany"
    | "findFirst"
    | "create"
    | "createMany"
    | "update"
    | "updateMany"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    PrismaClient,
    "$connect" | "$disconnect" | "$on" | "$transaction" | "$use"
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    Weather: number;
  };

  export type CityCountOutputTypeSelect = {
    Weather?: boolean;
  };

  export type CityCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CityCountOutputTypeArgs,
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true ? CityCountOutputType
    : S extends undefined ? never
    : S extends { include: any } & (CityCountOutputTypeArgs)
      ? CityCountOutputType
    : S extends { select: any } & (CityCountOutputTypeArgs) ? {
        [P in TruthyKeys<S["select"]>]: P extends keyof CityCountOutputType
          ? CityCountOutputType[P]
          : never;
      }
    : CityCountOutputType;

  // Custom InputTypes

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect | null;
  };

  /**
   * Models
   */

  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null;
    _avg: CityAvgAggregateOutputType | null;
    _sum: CitySumAggregateOutputType | null;
    _min: CityMinAggregateOutputType | null;
    _max: CityMaxAggregateOutputType | null;
  };

  export type CityAvgAggregateOutputType = {
    id: number | null;
  };

  export type CitySumAggregateOutputType = {
    id: number | null;
  };

  export type CityMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    country: string | null;
    capital: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CityMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    country: string | null;
    capital: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CityCountAggregateOutputType = {
    id: number;
    name: number;
    country: number;
    capital: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CityAvgAggregateInputType = {
    id?: true;
  };

  export type CitySumAggregateInputType = {
    id?: true;
  };

  export type CityMinAggregateInputType = {
    id?: true;
    name?: true;
    country?: true;
    capital?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CityMaxAggregateInputType = {
    id?: true;
    name?: true;
    country?: true;
    capital?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CityCountAggregateInputType = {
    id?: true;
    name?: true;
    country?: true;
    capital?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CityAggregateArgs = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cities to fetch.
     */
    orderBy?: Enumerable<CityOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Cities
     */
    _count?: true | CityCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: CityAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: CitySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: CityMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: CityMaxAggregateInputType;
  };

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
    [P in keyof T & keyof AggregateCity]: P extends "_count" | "count"
      ? T[P] extends true ? number
      : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>;
  };

  export type CityGroupByArgs = {
    where?: CityWhereInput;
    orderBy?: Enumerable<CityOrderByWithAggregationInput>;
    by: Array<CityScalarFieldEnum>;
    having?: CityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CityCountAggregateInputType | true;
    _avg?: CityAvgAggregateInputType;
    _sum?: CitySumAggregateInputType;
    _min?: CityMinAggregateInputType;
    _max?: CityMaxAggregateInputType;
  };

  export type CityGroupByOutputType = {
    id: number;
    name: string;
    country: string;
    capital: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: CityCountAggregateOutputType | null;
    _avg: CityAvgAggregateOutputType | null;
    _sum: CitySumAggregateOutputType | null;
    _min: CityMinAggregateOutputType | null;
    _max: CityMaxAggregateOutputType | null;
  };

  type GetCityGroupByPayload<T extends CityGroupByArgs> = PrismaPromise<
    Array<
      & PickArray<CityGroupByOutputType, T["by"]>
      & {
        [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends "_count"
          ? T[P] extends boolean ? number
          : GetScalarType<T[P], CityGroupByOutputType[P]>
          : GetScalarType<T[P], CityGroupByOutputType[P]>;
      }
    >
  >;

  export type CitySelect = {
    id?: boolean;
    name?: boolean;
    country?: boolean;
    capital?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Weather?: boolean | WeatherFindManyArgs;
    _count?: boolean | CityCountOutputTypeArgs;
  };

  export type CityInclude = {
    Weather?: boolean | WeatherFindManyArgs;
    _count?: boolean | CityCountOutputTypeArgs;
  };

  export type CityGetPayload<S extends boolean | null | undefined | CityArgs> =
    S extends { select: any; include: any }
      ? "Please either choose `select` or `include`"
      : S extends true ? City
      : S extends undefined ? never
      : S extends { include: any } & (CityArgs | CityFindManyArgs) ? 
          & City
          & {
            [P in TruthyKeys<S["include"]>]: P extends "Weather"
              ? Array<WeatherGetPayload<S["include"][P]>>
              : P extends "_count"
                ? CityCountOutputTypeGetPayload<S["include"][P]>
              : never;
          }
      : S extends { select: any } & (CityArgs | CityFindManyArgs) ? {
          [P in TruthyKeys<S["select"]>]: P extends "Weather"
            ? Array<WeatherGetPayload<S["select"][P]>>
            : P extends "_count" ? CityCountOutputTypeGetPayload<S["select"][P]>
            : P extends keyof City ? City[P]
            : never;
        }
      : City;

  type CityCountArgs = Merge<
    Omit<CityFindManyArgs, "select" | "include"> & {
      select?: CityCountAggregateInputType | true;
    }
  >;

  export interface CityDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined,
  > {
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<
      T extends CityFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args: SelectSubset<T, CityFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "City"
    > extends True ? Prisma__CityClient<CityGetPayload<T>>
      : Prisma__CityClient<CityGetPayload<T> | null, null>;

    /**
     * Find one City that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CityFindUniqueOrThrowArgs>,
    ): Prisma__CityClient<CityGetPayload<T>>;

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<
      T extends CityFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args?: SelectSubset<T, CityFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "City"
    > extends True ? Prisma__CityClient<CityGetPayload<T>>
      : Prisma__CityClient<CityGetPayload<T> | null, null>;

    /**
     * Find the first City that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CityFindFirstOrThrowArgs>,
    ): Prisma__CityClient<CityGetPayload<T>>;

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     *
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     */
    findMany<T extends CityFindManyArgs>(
      args?: SelectSubset<T, CityFindManyArgs>,
    ): PrismaPromise<Array<CityGetPayload<T>>>;

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     */
    create<T extends CityCreateArgs>(
      args: SelectSubset<T, CityCreateArgs>,
    ): Prisma__CityClient<CityGetPayload<T>>;

    /**
     * Create many Cities.
     *     @param {CityCreateManyArgs} args - Arguments to create many Cities.
     *     @example
     *     // Create many Cities
     *     const city = await prisma.city.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     */
    createMany<T extends CityCreateManyArgs>(
      args?: SelectSubset<T, CityCreateManyArgs>,
    ): PrismaPromise<BatchPayload>;

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     */
    delete<T extends CityDeleteArgs>(
      args: SelectSubset<T, CityDeleteArgs>,
    ): Prisma__CityClient<CityGetPayload<T>>;

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    update<T extends CityUpdateArgs>(
      args: SelectSubset<T, CityUpdateArgs>,
    ): Prisma__CityClient<CityGetPayload<T>>;

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    deleteMany<T extends CityDeleteManyArgs>(
      args?: SelectSubset<T, CityDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    updateMany<T extends CityUpdateManyArgs>(
      args: SelectSubset<T, CityUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>;

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(
      args: SelectSubset<T, CityUpsertArgs>,
    ): Prisma__CityClient<CityGetPayload<T>>;

    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
     */
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): PrismaPromise<
      T extends _Record<"select", any> ? T["select"] extends true ? number
        : GetScalarType<T["select"], CityCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
     */
    aggregate<T extends CityAggregateArgs>(
      args: Subset<T, CityAggregateArgs>,
    ): PrismaPromise<GetCityAggregateType<T>>;

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
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
     */
    groupBy<
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs["orderBy"] }
        : { orderBy?: CityGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False ? {
            [P in HavingFields]: P extends ByFields ? never
              : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                Error,
                "Field ",
                P,
                ` in "having" needs to be provided in "by"`,
              ];
          }[HavingFields]
        : "take" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True ? {}
        : {
          [P in OrderFields]: P extends ByFields ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
        }[OrderFields],
    >(
      args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCityGroupByPayload<T>
      : PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CityClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    );
    readonly [Symbol.toStringTag]: "PrismaClientPromise";

    Weather<T extends WeatherFindManyArgs = {}>(
      args?: Subset<T, WeatherFindManyArgs>,
    ): PrismaPromise<Array<WeatherGetPayload<T>> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * City base type for findUnique actions
   */
  export type CityFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null;
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput;
  };

  /**
   * City: findUnique
   */
  export interface CityFindUniqueArgs extends CityFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null;
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput;
  };

  /**
   * City base type for findFirst actions
   */
  export type CityFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null;
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cities to fetch.
     */
    orderBy?: Enumerable<CityOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cities.
     */
    distinct?: Enumerable<CityScalarFieldEnum>;
  };

  /**
   * City: findFirst
   */
  export interface CityFindFirstArgs extends CityFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null;
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cities to fetch.
     */
    orderBy?: Enumerable<CityOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cities.
     */
    distinct?: Enumerable<CityScalarFieldEnum>;
  };

  /**
   * City findMany
   */
  export type CityFindManyArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null;
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cities to fetch.
     */
    orderBy?: Enumerable<CityOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cities.
     */
    skip?: number;
    distinct?: Enumerable<CityScalarFieldEnum>;
  };

  /**
   * City create
   */
  export type CityCreateArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null;
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>;
  };

  /**
   * City createMany
   */
  export type CityCreateManyArgs = {
    /**
     * The data used to create many Cities.
     */
    data: Enumerable<CityCreateManyInput>;
    skipDuplicates?: boolean;
  };

  /**
   * City update
   */
  export type CityUpdateArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null;
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>;
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput;
  };

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>;
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput;
  };

  /**
   * City upsert
   */
  export type CityUpsertArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null;
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput;
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>;
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>;
  };

  /**
   * City delete
   */
  export type CityDeleteArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null;
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput;
  };

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput;
  };

  /**
   * City without action
   */
  export type CityArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null;
  };

  /**
   * Model Weather
   */

  export type AggregateWeather = {
    _count: WeatherCountAggregateOutputType | null;
    _avg: WeatherAvgAggregateOutputType | null;
    _sum: WeatherSumAggregateOutputType | null;
    _min: WeatherMinAggregateOutputType | null;
    _max: WeatherMaxAggregateOutputType | null;
  };

  export type WeatherAvgAggregateOutputType = {
    id: number | null;
    cityId: number | null;
    temp: number | null;
    temp_min: number | null;
    temp_max: number | null;
  };

  export type WeatherSumAggregateOutputType = {
    id: number | null;
    cityId: number | null;
    temp: number | null;
    temp_min: number | null;
    temp_max: number | null;
  };

  export type WeatherMinAggregateOutputType = {
    id: number | null;
    cityId: number | null;
    temp: number | null;
    temp_min: number | null;
    temp_max: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type WeatherMaxAggregateOutputType = {
    id: number | null;
    cityId: number | null;
    temp: number | null;
    temp_min: number | null;
    temp_max: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type WeatherCountAggregateOutputType = {
    id: number;
    cityId: number;
    temp: number;
    temp_min: number;
    temp_max: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type WeatherAvgAggregateInputType = {
    id?: true;
    cityId?: true;
    temp?: true;
    temp_min?: true;
    temp_max?: true;
  };

  export type WeatherSumAggregateInputType = {
    id?: true;
    cityId?: true;
    temp?: true;
    temp_min?: true;
    temp_max?: true;
  };

  export type WeatherMinAggregateInputType = {
    id?: true;
    cityId?: true;
    temp?: true;
    temp_min?: true;
    temp_max?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type WeatherMaxAggregateInputType = {
    id?: true;
    cityId?: true;
    temp?: true;
    temp_min?: true;
    temp_max?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type WeatherCountAggregateInputType = {
    id?: true;
    cityId?: true;
    temp?: true;
    temp_min?: true;
    temp_max?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type WeatherAggregateArgs = {
    /**
     * Filter which Weather to aggregate.
     */
    where?: WeatherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Weathers to fetch.
     */
    orderBy?: Enumerable<WeatherOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: WeatherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Weathers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Weathers
     */
    _count?: true | WeatherCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: WeatherAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: WeatherSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: WeatherMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: WeatherMaxAggregateInputType;
  };

  export type GetWeatherAggregateType<T extends WeatherAggregateArgs> = {
    [P in keyof T & keyof AggregateWeather]: P extends "_count" | "count"
      ? T[P] extends true ? number
      : GetScalarType<T[P], AggregateWeather[P]>
      : GetScalarType<T[P], AggregateWeather[P]>;
  };

  export type WeatherGroupByArgs = {
    where?: WeatherWhereInput;
    orderBy?: Enumerable<WeatherOrderByWithAggregationInput>;
    by: Array<WeatherScalarFieldEnum>;
    having?: WeatherScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WeatherCountAggregateInputType | true;
    _avg?: WeatherAvgAggregateInputType;
    _sum?: WeatherSumAggregateInputType;
    _min?: WeatherMinAggregateInputType;
    _max?: WeatherMaxAggregateInputType;
  };

  export type WeatherGroupByOutputType = {
    id: number;
    cityId: number;
    temp: number;
    temp_min: number;
    temp_max: number;
    createdAt: Date;
    updatedAt: Date;
    _count: WeatherCountAggregateOutputType | null;
    _avg: WeatherAvgAggregateOutputType | null;
    _sum: WeatherSumAggregateOutputType | null;
    _min: WeatherMinAggregateOutputType | null;
    _max: WeatherMaxAggregateOutputType | null;
  };

  type GetWeatherGroupByPayload<T extends WeatherGroupByArgs> = PrismaPromise<
    Array<
      & PickArray<WeatherGroupByOutputType, T["by"]>
      & {
        [P in ((keyof T) & (keyof WeatherGroupByOutputType))]: P extends
          "_count" ? T[P] extends boolean ? number
          : GetScalarType<T[P], WeatherGroupByOutputType[P]>
          : GetScalarType<T[P], WeatherGroupByOutputType[P]>;
      }
    >
  >;

  export type WeatherSelect = {
    id?: boolean;
    cityId?: boolean;
    city?: boolean | CityArgs;
    temp?: boolean;
    temp_min?: boolean;
    temp_max?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type WeatherInclude = {
    city?: boolean | CityArgs;
  };

  export type WeatherGetPayload<
    S extends boolean | null | undefined | WeatherArgs,
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true ? Weather
    : S extends undefined ? never
    : S extends { include: any } & (WeatherArgs | WeatherFindManyArgs) ? 
        & Weather
        & {
          [P in TruthyKeys<S["include"]>]: P extends "city"
            ? CityGetPayload<S["include"][P]>
            : never;
        }
    : S extends { select: any } & (WeatherArgs | WeatherFindManyArgs) ? {
        [P in TruthyKeys<S["select"]>]: P extends "city"
          ? CityGetPayload<S["select"][P]>
          : P extends keyof Weather ? Weather[P]
          : never;
      }
    : Weather;

  type WeatherCountArgs = Merge<
    Omit<WeatherFindManyArgs, "select" | "include"> & {
      select?: WeatherCountAggregateInputType | true;
    }
  >;

  export interface WeatherDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined,
  > {
    /**
     * Find zero or one Weather that matches the filter.
     * @param {WeatherFindUniqueArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<
      T extends WeatherFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args: SelectSubset<T, WeatherFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "Weather"
    > extends True ? Prisma__WeatherClient<WeatherGetPayload<T>>
      : Prisma__WeatherClient<WeatherGetPayload<T> | null, null>;

    /**
     * Find one Weather that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {WeatherFindUniqueOrThrowArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeatherFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WeatherFindUniqueOrThrowArgs>,
    ): Prisma__WeatherClient<WeatherGetPayload<T>>;

    /**
     * Find the first Weather that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherFindFirstArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<
      T extends WeatherFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args?: SelectSubset<T, WeatherFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "Weather"
    > extends True ? Prisma__WeatherClient<WeatherGetPayload<T>>
      : Prisma__WeatherClient<WeatherGetPayload<T> | null, null>;

    /**
     * Find the first Weather that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherFindFirstOrThrowArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeatherFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WeatherFindFirstOrThrowArgs>,
    ): Prisma__WeatherClient<WeatherGetPayload<T>>;

    /**
     * Find zero or more Weathers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weathers
     * const weathers = await prisma.weather.findMany()
     *
     * // Get first 10 Weathers
     * const weathers = await prisma.weather.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const weatherWithIdOnly = await prisma.weather.findMany({ select: { id: true } })
     */
    findMany<T extends WeatherFindManyArgs>(
      args?: SelectSubset<T, WeatherFindManyArgs>,
    ): PrismaPromise<Array<WeatherGetPayload<T>>>;

    /**
     * Create a Weather.
     * @param {WeatherCreateArgs} args - Arguments to create a Weather.
     * @example
     * // Create one Weather
     * const Weather = await prisma.weather.create({
     *   data: {
     *     // ... data to create a Weather
     *   }
     * })
     */
    create<T extends WeatherCreateArgs>(
      args: SelectSubset<T, WeatherCreateArgs>,
    ): Prisma__WeatherClient<WeatherGetPayload<T>>;

    /**
     * Create many Weathers.
     *     @param {WeatherCreateManyArgs} args - Arguments to create many Weathers.
     *     @example
     *     // Create many Weathers
     *     const weather = await prisma.weather.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     */
    createMany<T extends WeatherCreateManyArgs>(
      args?: SelectSubset<T, WeatherCreateManyArgs>,
    ): PrismaPromise<BatchPayload>;

    /**
     * Delete a Weather.
     * @param {WeatherDeleteArgs} args - Arguments to delete one Weather.
     * @example
     * // Delete one Weather
     * const Weather = await prisma.weather.delete({
     *   where: {
     *     // ... filter to delete one Weather
     *   }
     * })
     */
    delete<T extends WeatherDeleteArgs>(
      args: SelectSubset<T, WeatherDeleteArgs>,
    ): Prisma__WeatherClient<WeatherGetPayload<T>>;

    /**
     * Update one Weather.
     * @param {WeatherUpdateArgs} args - Arguments to update one Weather.
     * @example
     * // Update one Weather
     * const weather = await prisma.weather.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    update<T extends WeatherUpdateArgs>(
      args: SelectSubset<T, WeatherUpdateArgs>,
    ): Prisma__WeatherClient<WeatherGetPayload<T>>;

    /**
     * Delete zero or more Weathers.
     * @param {WeatherDeleteManyArgs} args - Arguments to filter Weathers to delete.
     * @example
     * // Delete a few Weathers
     * const { count } = await prisma.weather.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    deleteMany<T extends WeatherDeleteManyArgs>(
      args?: SelectSubset<T, WeatherDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Weathers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weathers
     * const weather = await prisma.weather.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    updateMany<T extends WeatherUpdateManyArgs>(
      args: SelectSubset<T, WeatherUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>;

    /**
     * Create or update one Weather.
     * @param {WeatherUpsertArgs} args - Arguments to update or create a Weather.
     * @example
     * // Update or create a Weather
     * const weather = await prisma.weather.upsert({
     *   create: {
     *     // ... data to create a Weather
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weather we want to update
     *   }
     * })
     */
    upsert<T extends WeatherUpsertArgs>(
      args: SelectSubset<T, WeatherUpsertArgs>,
    ): Prisma__WeatherClient<WeatherGetPayload<T>>;

    /**
     * Count the number of Weathers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherCountArgs} args - Arguments to filter Weathers to count.
     * @example
     * // Count the number of Weathers
     * const count = await prisma.weather.count({
     *   where: {
     *     // ... the filter for the Weathers we want to count
     *   }
     * })
     */
    count<T extends WeatherCountArgs>(
      args?: Subset<T, WeatherCountArgs>,
    ): PrismaPromise<
      T extends _Record<"select", any> ? T["select"] extends true ? number
        : GetScalarType<T["select"], WeatherCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Weather.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
     */
    aggregate<T extends WeatherAggregateArgs>(
      args: Subset<T, WeatherAggregateArgs>,
    ): PrismaPromise<GetWeatherAggregateType<T>>;

    /**
     * Group by Weather.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherGroupByArgs} args - Group by arguments.
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
     */
    groupBy<
      T extends WeatherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeatherGroupByArgs["orderBy"] }
        : { orderBy?: WeatherGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False ? {
            [P in HavingFields]: P extends ByFields ? never
              : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                Error,
                "Field ",
                P,
                ` in "having" needs to be provided in "by"`,
              ];
          }[HavingFields]
        : "take" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True ? {}
        : {
          [P in OrderFields]: P extends ByFields ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
        }[OrderFields],
    >(
      args: SubsetIntersection<T, WeatherGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetWeatherGroupByPayload<T>
      : PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Weather.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WeatherClient<T, Null = never>
    implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    );
    readonly [Symbol.toStringTag]: "PrismaClientPromise";

    city<T extends CityArgs = {}>(
      args?: Subset<T, CityArgs>,
    ): Prisma__CityClient<CityGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Weather base type for findUnique actions
   */
  export type WeatherFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeatherInclude | null;
    /**
     * Filter, which Weather to fetch.
     */
    where: WeatherWhereUniqueInput;
  };

  /**
   * Weather: findUnique
   */
  export interface WeatherFindUniqueArgs extends WeatherFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Weather findUniqueOrThrow
   */
  export type WeatherFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeatherInclude | null;
    /**
     * Filter, which Weather to fetch.
     */
    where: WeatherWhereUniqueInput;
  };

  /**
   * Weather base type for findFirst actions
   */
  export type WeatherFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeatherInclude | null;
    /**
     * Filter, which Weather to fetch.
     */
    where?: WeatherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Weathers to fetch.
     */
    orderBy?: Enumerable<WeatherOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Weathers.
     */
    cursor?: WeatherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Weathers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Weathers.
     */
    distinct?: Enumerable<WeatherScalarFieldEnum>;
  };

  /**
   * Weather: findFirst
   */
  export interface WeatherFindFirstArgs extends WeatherFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Weather findFirstOrThrow
   */
  export type WeatherFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeatherInclude | null;
    /**
     * Filter, which Weather to fetch.
     */
    where?: WeatherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Weathers to fetch.
     */
    orderBy?: Enumerable<WeatherOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Weathers.
     */
    cursor?: WeatherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Weathers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Weathers.
     */
    distinct?: Enumerable<WeatherScalarFieldEnum>;
  };

  /**
   * Weather findMany
   */
  export type WeatherFindManyArgs = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeatherInclude | null;
    /**
     * Filter, which Weathers to fetch.
     */
    where?: WeatherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Weathers to fetch.
     */
    orderBy?: Enumerable<WeatherOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Weathers.
     */
    cursor?: WeatherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Weathers.
     */
    skip?: number;
    distinct?: Enumerable<WeatherScalarFieldEnum>;
  };

  /**
   * Weather create
   */
  export type WeatherCreateArgs = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeatherInclude | null;
    /**
     * The data needed to create a Weather.
     */
    data: XOR<WeatherCreateInput, WeatherUncheckedCreateInput>;
  };

  /**
   * Weather createMany
   */
  export type WeatherCreateManyArgs = {
    /**
     * The data used to create many Weathers.
     */
    data: Enumerable<WeatherCreateManyInput>;
    skipDuplicates?: boolean;
  };

  /**
   * Weather update
   */
  export type WeatherUpdateArgs = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeatherInclude | null;
    /**
     * The data needed to update a Weather.
     */
    data: XOR<WeatherUpdateInput, WeatherUncheckedUpdateInput>;
    /**
     * Choose, which Weather to update.
     */
    where: WeatherWhereUniqueInput;
  };

  /**
   * Weather updateMany
   */
  export type WeatherUpdateManyArgs = {
    /**
     * The data used to update Weathers.
     */
    data: XOR<WeatherUpdateManyMutationInput, WeatherUncheckedUpdateManyInput>;
    /**
     * Filter which Weathers to update
     */
    where?: WeatherWhereInput;
  };

  /**
   * Weather upsert
   */
  export type WeatherUpsertArgs = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeatherInclude | null;
    /**
     * The filter to search for the Weather to update in case it exists.
     */
    where: WeatherWhereUniqueInput;
    /**
     * In case the Weather found by the `where` argument doesn't exist, create a new Weather with this data.
     */
    create: XOR<WeatherCreateInput, WeatherUncheckedCreateInput>;
    /**
     * In case the Weather was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeatherUpdateInput, WeatherUncheckedUpdateInput>;
  };

  /**
   * Weather delete
   */
  export type WeatherDeleteArgs = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeatherInclude | null;
    /**
     * Filter which Weather to delete.
     */
    where: WeatherWhereUniqueInput;
  };

  /**
   * Weather deleteMany
   */
  export type WeatherDeleteManyArgs = {
    /**
     * Filter which Weathers to delete
     */
    where?: WeatherWhereInput;
  };

  /**
   * Weather without action
   */
  export type WeatherArgs = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeatherInclude | null;
  };

  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CityScalarFieldEnum: {
    id: "id";
    name: "name";
    country: "country";
    capital: "capital";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type CityScalarFieldEnum =
    (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const WeatherScalarFieldEnum: {
    id: "id";
    cityId: "cityId";
    temp: "temp";
    temp_min: "temp_min";
    temp_max: "temp_max";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type WeatherScalarFieldEnum =
    (typeof WeatherScalarFieldEnum)[keyof typeof WeatherScalarFieldEnum];

  /**
   * Deep Input Types
   */

  export type CityWhereInput = {
    AND?: Enumerable<CityWhereInput>;
    OR?: Enumerable<CityWhereInput>;
    NOT?: Enumerable<CityWhereInput>;
    id?: IntFilter | number;
    name?: StringFilter | string;
    country?: StringFilter | string;
    capital?: BoolFilter | boolean;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
    Weather?: WeatherListRelationFilter;
  };

  export type CityOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    country?: SortOrder;
    capital?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    Weather?: WeatherOrderByRelationAggregateInput;
  };

  export type CityWhereUniqueInput = {
    id?: number;
  };

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    country?: SortOrder;
    capital?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CityCountOrderByAggregateInput;
    _avg?: CityAvgOrderByAggregateInput;
    _max?: CityMaxOrderByAggregateInput;
    _min?: CityMinOrderByAggregateInput;
    _sum?: CitySumOrderByAggregateInput;
  };

  export type CityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CityScalarWhereWithAggregatesInput>;
    OR?: Enumerable<CityScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<CityScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter | number;
    name?: StringWithAggregatesFilter | string;
    country?: StringWithAggregatesFilter | string;
    capital?: BoolWithAggregatesFilter | boolean;
    createdAt?: DateTimeWithAggregatesFilter | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type WeatherWhereInput = {
    AND?: Enumerable<WeatherWhereInput>;
    OR?: Enumerable<WeatherWhereInput>;
    NOT?: Enumerable<WeatherWhereInput>;
    id?: IntFilter | number;
    cityId?: IntFilter | number;
    city?: XOR<CityRelationFilter, CityWhereInput>;
    temp?: FloatFilter | number;
    temp_min?: FloatFilter | number;
    temp_max?: FloatFilter | number;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
  };

  export type WeatherOrderByWithRelationInput = {
    id?: SortOrder;
    cityId?: SortOrder;
    city?: CityOrderByWithRelationInput;
    temp?: SortOrder;
    temp_min?: SortOrder;
    temp_max?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type WeatherWhereUniqueInput = {
    id?: number;
  };

  export type WeatherOrderByWithAggregationInput = {
    id?: SortOrder;
    cityId?: SortOrder;
    temp?: SortOrder;
    temp_min?: SortOrder;
    temp_max?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: WeatherCountOrderByAggregateInput;
    _avg?: WeatherAvgOrderByAggregateInput;
    _max?: WeatherMaxOrderByAggregateInput;
    _min?: WeatherMinOrderByAggregateInput;
    _sum?: WeatherSumOrderByAggregateInput;
  };

  export type WeatherScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WeatherScalarWhereWithAggregatesInput>;
    OR?: Enumerable<WeatherScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<WeatherScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter | number;
    cityId?: IntWithAggregatesFilter | number;
    temp?: FloatWithAggregatesFilter | number;
    temp_min?: FloatWithAggregatesFilter | number;
    temp_max?: FloatWithAggregatesFilter | number;
    createdAt?: DateTimeWithAggregatesFilter | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type CityCreateInput = {
    name: string;
    country: string;
    capital?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Weather?: WeatherCreateNestedManyWithoutCityInput;
  };

  export type CityUncheckedCreateInput = {
    id?: number;
    name: string;
    country: string;
    capital?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Weather?: WeatherUncheckedCreateNestedManyWithoutCityInput;
  };

  export type CityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    capital?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Weather?: WeatherUpdateManyWithoutCityNestedInput;
  };

  export type CityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    capital?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Weather?: WeatherUncheckedUpdateManyWithoutCityNestedInput;
  };

  export type CityCreateManyInput = {
    id?: number;
    name: string;
    country: string;
    capital?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    capital?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    capital?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WeatherCreateInput = {
    city: CityCreateNestedOneWithoutWeatherInput;
    temp: number;
    temp_min: number;
    temp_max: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type WeatherUncheckedCreateInput = {
    id?: number;
    cityId: number;
    temp: number;
    temp_min: number;
    temp_max: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type WeatherUpdateInput = {
    city?: CityUpdateOneRequiredWithoutWeatherNestedInput;
    temp?: FloatFieldUpdateOperationsInput | number;
    temp_min?: FloatFieldUpdateOperationsInput | number;
    temp_max?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WeatherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    cityId?: IntFieldUpdateOperationsInput | number;
    temp?: FloatFieldUpdateOperationsInput | number;
    temp_min?: FloatFieldUpdateOperationsInput | number;
    temp_max?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WeatherCreateManyInput = {
    id?: number;
    cityId: number;
    temp: number;
    temp_min: number;
    temp_max: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type WeatherUpdateManyMutationInput = {
    temp?: FloatFieldUpdateOperationsInput | number;
    temp_min?: FloatFieldUpdateOperationsInput | number;
    temp_max?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WeatherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    cityId?: IntFieldUpdateOperationsInput | number;
    temp?: FloatFieldUpdateOperationsInput | number;
    temp_min?: FloatFieldUpdateOperationsInput | number;
    temp_max?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter = {
    equals?: number;
    in?: Enumerable<number>;
    notIn?: Enumerable<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntFilter | number;
  };

  export type StringFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringFilter | string;
  };

  export type BoolFilter = {
    equals?: boolean;
    not?: NestedBoolFilter | boolean;
  };

  export type DateTimeFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string>;
    notIn?: Enumerable<Date> | Enumerable<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeFilter | Date | string;
  };

  export type WeatherListRelationFilter = {
    every?: WeatherWhereInput;
    some?: WeatherWhereInput;
    none?: WeatherWhereInput;
  };

  export type WeatherOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    country?: SortOrder;
    capital?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CityAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    country?: SortOrder;
    capital?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    country?: SortOrder;
    capital?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CitySumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter = {
    equals?: number;
    in?: Enumerable<number>;
    notIn?: Enumerable<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntWithAggregatesFilter | number;
    _count?: NestedIntFilter;
    _avg?: NestedFloatFilter;
    _sum?: NestedIntFilter;
    _min?: NestedIntFilter;
    _max?: NestedIntFilter;
  };

  export type StringWithAggregatesFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter | string;
    _count?: NestedIntFilter;
    _min?: NestedStringFilter;
    _max?: NestedStringFilter;
  };

  export type BoolWithAggregatesFilter = {
    equals?: boolean;
    not?: NestedBoolWithAggregatesFilter | boolean;
    _count?: NestedIntFilter;
    _min?: NestedBoolFilter;
    _max?: NestedBoolFilter;
  };

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string>;
    notIn?: Enumerable<Date> | Enumerable<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeWithAggregatesFilter | Date | string;
    _count?: NestedIntFilter;
    _min?: NestedDateTimeFilter;
    _max?: NestedDateTimeFilter;
  };

  export type CityRelationFilter = {
    is?: CityWhereInput;
    isNot?: CityWhereInput;
  };

  export type FloatFilter = {
    equals?: number;
    in?: Enumerable<number>;
    notIn?: Enumerable<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedFloatFilter | number;
  };

  export type WeatherCountOrderByAggregateInput = {
    id?: SortOrder;
    cityId?: SortOrder;
    temp?: SortOrder;
    temp_min?: SortOrder;
    temp_max?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type WeatherAvgOrderByAggregateInput = {
    id?: SortOrder;
    cityId?: SortOrder;
    temp?: SortOrder;
    temp_min?: SortOrder;
    temp_max?: SortOrder;
  };

  export type WeatherMaxOrderByAggregateInput = {
    id?: SortOrder;
    cityId?: SortOrder;
    temp?: SortOrder;
    temp_min?: SortOrder;
    temp_max?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type WeatherMinOrderByAggregateInput = {
    id?: SortOrder;
    cityId?: SortOrder;
    temp?: SortOrder;
    temp_min?: SortOrder;
    temp_max?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type WeatherSumOrderByAggregateInput = {
    id?: SortOrder;
    cityId?: SortOrder;
    temp?: SortOrder;
    temp_min?: SortOrder;
    temp_max?: SortOrder;
  };

  export type FloatWithAggregatesFilter = {
    equals?: number;
    in?: Enumerable<number>;
    notIn?: Enumerable<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedFloatWithAggregatesFilter | number;
    _count?: NestedIntFilter;
    _avg?: NestedFloatFilter;
    _sum?: NestedFloatFilter;
    _min?: NestedFloatFilter;
    _max?: NestedFloatFilter;
  };

  export type WeatherCreateNestedManyWithoutCityInput = {
    create?: XOR<
      Enumerable<WeatherCreateWithoutCityInput>,
      Enumerable<WeatherUncheckedCreateWithoutCityInput>
    >;
    connectOrCreate?: Enumerable<WeatherCreateOrConnectWithoutCityInput>;
    createMany?: WeatherCreateManyCityInputEnvelope;
    connect?: Enumerable<WeatherWhereUniqueInput>;
  };

  export type WeatherUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<
      Enumerable<WeatherCreateWithoutCityInput>,
      Enumerable<WeatherUncheckedCreateWithoutCityInput>
    >;
    connectOrCreate?: Enumerable<WeatherCreateOrConnectWithoutCityInput>;
    createMany?: WeatherCreateManyCityInputEnvelope;
    connect?: Enumerable<WeatherWhereUniqueInput>;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type WeatherUpdateManyWithoutCityNestedInput = {
    create?: XOR<
      Enumerable<WeatherCreateWithoutCityInput>,
      Enumerable<WeatherUncheckedCreateWithoutCityInput>
    >;
    connectOrCreate?: Enumerable<WeatherCreateOrConnectWithoutCityInput>;
    upsert?: Enumerable<WeatherUpsertWithWhereUniqueWithoutCityInput>;
    createMany?: WeatherCreateManyCityInputEnvelope;
    set?: Enumerable<WeatherWhereUniqueInput>;
    disconnect?: Enumerable<WeatherWhereUniqueInput>;
    delete?: Enumerable<WeatherWhereUniqueInput>;
    connect?: Enumerable<WeatherWhereUniqueInput>;
    update?: Enumerable<WeatherUpdateWithWhereUniqueWithoutCityInput>;
    updateMany?: Enumerable<WeatherUpdateManyWithWhereWithoutCityInput>;
    deleteMany?: Enumerable<WeatherScalarWhereInput>;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type WeatherUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<
      Enumerable<WeatherCreateWithoutCityInput>,
      Enumerable<WeatherUncheckedCreateWithoutCityInput>
    >;
    connectOrCreate?: Enumerable<WeatherCreateOrConnectWithoutCityInput>;
    upsert?: Enumerable<WeatherUpsertWithWhereUniqueWithoutCityInput>;
    createMany?: WeatherCreateManyCityInputEnvelope;
    set?: Enumerable<WeatherWhereUniqueInput>;
    disconnect?: Enumerable<WeatherWhereUniqueInput>;
    delete?: Enumerable<WeatherWhereUniqueInput>;
    connect?: Enumerable<WeatherWhereUniqueInput>;
    update?: Enumerable<WeatherUpdateWithWhereUniqueWithoutCityInput>;
    updateMany?: Enumerable<WeatherUpdateManyWithWhereWithoutCityInput>;
    deleteMany?: Enumerable<WeatherScalarWhereInput>;
  };

  export type CityCreateNestedOneWithoutWeatherInput = {
    create?: XOR<
      CityCreateWithoutWeatherInput,
      CityUncheckedCreateWithoutWeatherInput
    >;
    connectOrCreate?: CityCreateOrConnectWithoutWeatherInput;
    connect?: CityWhereUniqueInput;
  };

  export type CityUpdateOneRequiredWithoutWeatherNestedInput = {
    create?: XOR<
      CityCreateWithoutWeatherInput,
      CityUncheckedCreateWithoutWeatherInput
    >;
    connectOrCreate?: CityCreateOrConnectWithoutWeatherInput;
    upsert?: CityUpsertWithoutWeatherInput;
    connect?: CityWhereUniqueInput;
    update?: XOR<
      CityUpdateWithoutWeatherInput,
      CityUncheckedUpdateWithoutWeatherInput
    >;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NestedIntFilter = {
    equals?: number;
    in?: Enumerable<number>;
    notIn?: Enumerable<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntFilter | number;
  };

  export type NestedStringFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringFilter | string;
  };

  export type NestedBoolFilter = {
    equals?: boolean;
    not?: NestedBoolFilter | boolean;
  };

  export type NestedDateTimeFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string>;
    notIn?: Enumerable<Date> | Enumerable<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeFilter | Date | string;
  };

  export type NestedIntWithAggregatesFilter = {
    equals?: number;
    in?: Enumerable<number>;
    notIn?: Enumerable<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntWithAggregatesFilter | number;
    _count?: NestedIntFilter;
    _avg?: NestedFloatFilter;
    _sum?: NestedIntFilter;
    _min?: NestedIntFilter;
    _max?: NestedIntFilter;
  };

  export type NestedFloatFilter = {
    equals?: number;
    in?: Enumerable<number>;
    notIn?: Enumerable<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedFloatFilter | number;
  };

  export type NestedStringWithAggregatesFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringWithAggregatesFilter | string;
    _count?: NestedIntFilter;
    _min?: NestedStringFilter;
    _max?: NestedStringFilter;
  };

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean;
    not?: NestedBoolWithAggregatesFilter | boolean;
    _count?: NestedIntFilter;
    _min?: NestedBoolFilter;
    _max?: NestedBoolFilter;
  };

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string>;
    notIn?: Enumerable<Date> | Enumerable<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeWithAggregatesFilter | Date | string;
    _count?: NestedIntFilter;
    _min?: NestedDateTimeFilter;
    _max?: NestedDateTimeFilter;
  };

  export type NestedFloatWithAggregatesFilter = {
    equals?: number;
    in?: Enumerable<number>;
    notIn?: Enumerable<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedFloatWithAggregatesFilter | number;
    _count?: NestedIntFilter;
    _avg?: NestedFloatFilter;
    _sum?: NestedFloatFilter;
    _min?: NestedFloatFilter;
    _max?: NestedFloatFilter;
  };

  export type WeatherCreateWithoutCityInput = {
    temp: number;
    temp_min: number;
    temp_max: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type WeatherUncheckedCreateWithoutCityInput = {
    id?: number;
    temp: number;
    temp_min: number;
    temp_max: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type WeatherCreateOrConnectWithoutCityInput = {
    where: WeatherWhereUniqueInput;
    create: XOR<
      WeatherCreateWithoutCityInput,
      WeatherUncheckedCreateWithoutCityInput
    >;
  };

  export type WeatherCreateManyCityInputEnvelope = {
    data: Enumerable<WeatherCreateManyCityInput>;
    skipDuplicates?: boolean;
  };

  export type WeatherUpsertWithWhereUniqueWithoutCityInput = {
    where: WeatherWhereUniqueInput;
    update: XOR<
      WeatherUpdateWithoutCityInput,
      WeatherUncheckedUpdateWithoutCityInput
    >;
    create: XOR<
      WeatherCreateWithoutCityInput,
      WeatherUncheckedCreateWithoutCityInput
    >;
  };

  export type WeatherUpdateWithWhereUniqueWithoutCityInput = {
    where: WeatherWhereUniqueInput;
    data: XOR<
      WeatherUpdateWithoutCityInput,
      WeatherUncheckedUpdateWithoutCityInput
    >;
  };

  export type WeatherUpdateManyWithWhereWithoutCityInput = {
    where: WeatherScalarWhereInput;
    data: XOR<
      WeatherUpdateManyMutationInput,
      WeatherUncheckedUpdateManyWithoutWeatherInput
    >;
  };

  export type WeatherScalarWhereInput = {
    AND?: Enumerable<WeatherScalarWhereInput>;
    OR?: Enumerable<WeatherScalarWhereInput>;
    NOT?: Enumerable<WeatherScalarWhereInput>;
    id?: IntFilter | number;
    cityId?: IntFilter | number;
    temp?: FloatFilter | number;
    temp_min?: FloatFilter | number;
    temp_max?: FloatFilter | number;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
  };

  export type CityCreateWithoutWeatherInput = {
    name: string;
    country: string;
    capital?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CityUncheckedCreateWithoutWeatherInput = {
    id?: number;
    name: string;
    country: string;
    capital?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CityCreateOrConnectWithoutWeatherInput = {
    where: CityWhereUniqueInput;
    create: XOR<
      CityCreateWithoutWeatherInput,
      CityUncheckedCreateWithoutWeatherInput
    >;
  };

  export type CityUpsertWithoutWeatherInput = {
    update: XOR<
      CityUpdateWithoutWeatherInput,
      CityUncheckedUpdateWithoutWeatherInput
    >;
    create: XOR<
      CityCreateWithoutWeatherInput,
      CityUncheckedCreateWithoutWeatherInput
    >;
  };

  export type CityUpdateWithoutWeatherInput = {
    name?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    capital?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CityUncheckedUpdateWithoutWeatherInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    capital?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WeatherCreateManyCityInput = {
    id?: number;
    temp: number;
    temp_min: number;
    temp_max: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type WeatherUpdateWithoutCityInput = {
    temp?: FloatFieldUpdateOperationsInput | number;
    temp_min?: FloatFieldUpdateOperationsInput | number;
    temp_max?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WeatherUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number;
    temp?: FloatFieldUpdateOperationsInput | number;
    temp_min?: FloatFieldUpdateOperationsInput | number;
    temp_max?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WeatherUncheckedUpdateManyWithoutWeatherInput = {
    id?: IntFieldUpdateOperationsInput | number;
    temp?: FloatFieldUpdateOperationsInput | number;
    temp_min?: FloatFieldUpdateOperationsInput | number;
    temp_max?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
