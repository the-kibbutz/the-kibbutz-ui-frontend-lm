import fs from 'fs';
import path from 'path';
import { ScreenData } from './types';

export type { ScreenData }; // Re-export if needed, or just let consumers import from types

const UI_BASE_PATH = path.join(process.cwd(), 'public/assets/ui');

export async function getScreens(platform: 'web' | 'mobile'): Promise<ScreenData[]> {
    const dir = path.join(UI_BASE_PATH, platform, 'components');

    if (!fs.existsSync(dir)) {
        return [];
    }

    const files = fs.readdirSync(dir).filter(file => file.endsWith('.json'));

    const screens = files.map(file => {
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(content);
        return {
            id: file.replace('.json', ''),
            platform,
            ...data
        } as ScreenData;
    });

    return screens.sort((a, b) => a.id.localeCompare(b.id)); // Sort by ID (m1, m2...)
}

export async function getScreen(platform: 'web' | 'mobile', id: string): Promise<ScreenData | null> {
    const filePath = path.join(UI_BASE_PATH, platform, 'components', `${id}.json`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);

    return {
        id,
        platform,
        ...data
    } as ScreenData;
}
