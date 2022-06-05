type TypeExample = {
    name: string;
    age: number;
    gender: 'male' | 'female';
    location?: string;
};

type MyPartial<T> = { [K in keyof T]+?: T[K] };
type OptionalTypeExample = MyPartial<TypeExample>;

type MyRequired<T> = { [P in keyof T]-?: T[P] };
type RequiredTypeExample = MyRequired<TypeExample>;

type NullableType = null | undefined | string | number;
type MyNonNullable<T> = T extends null | undefined ? never : T;
type NonNullableType = MyNonNullable<NullableType>;

type RecordType = 'width' | 'height' | 'length';
type MyRecord<T extends keyof any, U> = { [K in T]: U };
type RecordedType = MyRecord<RecordType, number>;

type MyReadOnly<T> = { readonly [K in keyof T]: T[K] };
type TypeExampleReadOnly = MyReadOnly<TypeExample>;

type MyPick<T, U extends keyof T> = {
    [K in U]: T[K];
};
type Picked = MyPick<TypeExample, 'name' | 'age'>;

type MyExtract<T, U> = T extends U ? T : never;
type Extracted = MyExtract<'a' | 'b' | 'c' | string, 'f' | 'c' | 'b' | string>;

type MyExclude<T, U> = T extends U ? never : T;
type MyExcluded = MyExclude<1 | 2 | 3 | 4, 1 | 2 | 3 | 5>;

type MyOmit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;
type Omited = MyOmit<TypeExample, 'age' | 'gender'>;

type MyParameters<T extends (...args: any) => any> = T extends (
        ...args: infer P
    ) => void
    ? P
    : never;
type MyParametersExample = MyParameters<(a: string, b: number) => any>;

type MyConstructorParameters<T extends new (...args: any) => any> =
    T extends new (...args: infer P) => any ? P : never;
type MyConstructorParametersExample = MyConstructorParameters<
    new (a: string, b: number) => any
    >;

type MyReturnType<T extends (...args: any) => any> = T extends (
        ...args: any
    ) => infer P
    ? P
    : any;
type MyReturnTypeExample = MyReturnType<(a: string, b: number) => string>;

type MyInstanceType<T extends new (...args: any) => any> = T extends new (
        ...args: any
    ) => infer P
    ? P
    : any;
type MyInstanceTypeExample = MyInstanceType<
    new (a: string, b: number) => number
    >;
