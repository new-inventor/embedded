/* eslint-disable @typescript-eslint/no-explicit-any,no-unused-vars */

interface EmbeddedBlockConfig {
    rootElementId: string;
    assetsRootUrl: string;
}

interface InitProps extends EmbeddedBlockConfig{
    name: string;
    stylePaths: string[];
    jsPaths: string[];
}

(window as any).initEmbeddedBlock = ({name, rootElementId, assetsRootUrl, stylePaths, jsPaths}: InitProps): void => {
    if (!(window as any).embedded_blocks) {
        (window as any).embedded_blocks = {}
    }
    (window as any).embedded_blocks[name] = {rootElementId, assetsRootUrl};
    const head = document.head || document.getElementsByTagName('head')[0];

    stylePaths.forEach((stylePath) => {
        const css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = `${assetsRootUrl}/${stylePath}`;
        css.type = 'text/css';
        head.append(css);
    })
    jsPaths.forEach((jsPath) => {
        const js = document.createElement('script');
        js.src = `${assetsRootUrl}/${jsPath}`;
        js.defer = true;
        js.async = true;
        js.type = 'text/javascript';
        js.lang = 'JavaScript';
        head.append(js);
    })
}
