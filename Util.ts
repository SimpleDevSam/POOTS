export class Util {
    public static randomize(inicio: number, fim: number): number {
        return inicio + Math.random() * (fim - inicio);
    }
}