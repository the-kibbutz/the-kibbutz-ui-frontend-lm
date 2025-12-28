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
