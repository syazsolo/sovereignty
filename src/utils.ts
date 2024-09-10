import fs from 'fs-extra';
import path from "path";

export function randomlyTrue(probability: number) {
    if (probability >= Math.random()) {
        return true;
    }
    return false;
}

export async function loadPlayers<T>(dir: string): Promise<T[]> {
    try {
        const files = await fs.readdir(dir);

        const promises = files.map(async (file) => {
            const file_path = path.join(dir, file);
            const imported_file = await import(file_path);
            const player_class = imported_file.default;
            const player_instance: T = new player_class();

            return player_instance;
        });

        const players = await Promise.all(promises);
        return players;

    } catch (error) {
        console.error('Error loading player files:', error);
        throw error;
    }
}

export function getRandomBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};