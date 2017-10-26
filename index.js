var html = require("./lib/html");

module.exports = function (data, opts, tool) {
    var prefix = opts.prefix,
        frameduration = opts.frameduration * 1000;

    var frames = data.frames,
        frame = frames[0];
    
    var _data = {};
    _data.file = frame.file;
    _data.w = frame.w;
    _data.h = frame.h;
    _data.sourceW = frame.sourceW;
    _data.sourceH = frame.sourceH;

    _data.frames = frames.map(function(frame){
        return JSON.stringify([frame.x, frame.y, frame.width, frame.height, frame.offX, frame.offY])
    });

    tool.writeFile("data.js", `var data = ${JSON.stringify(_data, null, '    ').replace(/\"\[/ig, "\[").replace(/\]\"/ig, "\]")}`);
    tool.writeFile("gka.html", html(_data, prefix, frameduration));
};

