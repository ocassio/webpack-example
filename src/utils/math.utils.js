export function sum(...args) {
    return args.reduce((prev, current) => prev + current, 0);
}
