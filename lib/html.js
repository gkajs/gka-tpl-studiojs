module.exports = function html(data, prefix, frameduration) {
    var frame = data.frames[0],
        width = data.sourceW? data.sourceW: frame.sourceW,
        height = data.sourceH? data.sourceH: frame.sourceH;

return  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,maximum-scale=1">
    <title>gka-preview</title>
</head>
<body>
    <canvas id="gkaStage" width="${width}" height="${height}"></canvas>
    
    <div style="position: fixed; bottom: 10px;">
        Powered By <a target="_blank" href="https://github.com/gkajs/gka">gka</a> .
        Template By <a target="_blank" href="https://github.com/gkajs/gka-tpl-studiojs">gka-tpl-studiojs</a>
    </div>

    <script src="https://unpkg.com/studiojs/dist/studiojs.min.js"></script>
    <script src="./data.js"></script>
    <script>
        var Frame = studiojs.Frame;
        var canvas = document.getElementById('gkaStage');
        var img = new Image();

        img.onload = () => {
            var frameData = {
                images: [img],
                frames: data.frames,
                animations: {
                    default: ["0-${data.frames.length - 1}", "default"]
                }
            };parseInt(2.6)

            var material = new Frame(frameData, "default", ${Math.round(0.04 * 1000 / 16)}, canvas);

            setInterval(()=> {
                material.update();
            }, 16);
        };

        img.src = "img/" + data.file;
    </script>
</body>
</html>
`;
}