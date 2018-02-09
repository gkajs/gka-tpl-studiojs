var pkg = require("../package.json");
var gkaUtils = require('gka-utils');

module.exports = function html(data, opts, dataName) {

    var prefix = opts.prefix,
        frameduration = opts.frameduration,
        names = JSON.stringify(gkaUtils.data.getImageNames(data)),
        width = data.frames[0].sourceW,
        height = data.frames[0].sourceH,
        html = gkaUtils.html.getHtmlWrap(opts.gkaVersion, pkg.name, pkg.version);

    html.includeBodyContent(`
    <canvas id="gka" width="${width}" height="${height}"></canvas>
    <script src="https://unpkg.com/studiojs/dist/studiojs.min.js"></script>
    <script src="./${dataName}"></script>
    <script>
    var Frame = studiojs.Frame;
    var canvas = document.getElementById('gka');
    var img = new Image();
    img.onload = () => {
        var frameData = {
            images: [img],
            frames: data.frames,
            animations: {
                default: ["0-${data.frames.length - 1}", "default"]
            }
        };
        var material = new Frame(canvas, frameData, "default", ${Math.round(frameduration * 1000 / 16)});
        setInterval(()=> {
            material.update();
        }, 16);
    };
    img.src = "img/" + data.file;
    </script>`);

    return html + '';
}