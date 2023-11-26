/// <reference types="react-scripts" />

interface Window {
    app: HTMLElement;
    nav: HTMLElement;
}

type LoaderData<T extends {}> = {
    promise: Promise<T>;
};
