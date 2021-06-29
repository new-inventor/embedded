/* eslint-disable @typescript-eslint/no-explicit-any,no-unused-vars */

interface EmbeddedBlockConfig {
    rootElementId: string;
    assetsRootUrl: string;
}

interface InitProps extends EmbeddedBlockConfig{
    stylePaths: string[];
    jsPaths: string[];
}

const initEmbeddedBlock = ({rootElementId, assetsRootUrl, stylePaths, jsPaths}: InitProps): void => {
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
        js.type = 'application/javascript';
        js.lang = 'JavaScript';
        js.setAttribute('data-root-element-id', rootElementId);
        js.setAttribute('data-assets-root-url', assetsRootUrl);
        head.append(js);
    })
}

(function a() {
    ((window as any).embeddedBlocksConfig as InitProps[]).forEach((embeddedProps) => {
        initEmbeddedBlock(embeddedProps);
    })
    // const {currentScript} = document;
    // console.log('config', JSON.parse(`${currentScript?.getAttribute('data-config')}`));
})();
