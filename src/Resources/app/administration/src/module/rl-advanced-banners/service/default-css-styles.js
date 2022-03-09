export default function defaultCssStyles(layer) {
    let styles = 'position: relative;';
    styles += `height: ${layer.config.height};`;
    styles += `width: ${layer.config.width};`;
    styles += `top: ${layer.config.posTop};`;
    styles += `right: ${layer.config.posRight};`;
    styles += `bottom: ${layer.config.posBottom};`;
    styles += `left: ${layer.config.posLeft};`;
    styles += `padding: ${layer.config.padTop} ${layer.config.padRight} ${layer.config.padBottom} ${layer.config.padLeft};`;

    return styles;
}
