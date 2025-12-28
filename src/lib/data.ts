import fs from 'fs';
import path from 'path';

export interface ScreenDimensions {
    width: number;
    height: number;
}

export interface ComponentBox {
    x: number | null;
    y: number | null;
    w: number | null;
    h: number | null;
}

export interface UiComponent {
    name: string;
    box: ComponentBox;
    notes: string;
}

export interface ScreenData {
    id: string;
    platform: 'web' | 'mobile';
    imageName: string;
    description: string;
    ui_components: UiComponent[];
    screen_dimensions: ScreenDimensions;
}

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
