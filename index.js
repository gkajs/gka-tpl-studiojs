var gkaUtils = require('gka-utils');
var html = require("./lib/html");

module.exports = class PercentTemplatePlugin {
    apply(compiler) {
        compiler.hooks.on('templateOptions', (context, next) => {
            context.options.sprites = true;
            context.options.split = false;
            context.options.diff = false;
            next(context);
        })
        compiler.hooks.on('template', (context, next) => {
            const {
                options,
                data,
            } = context;
            
            let dir = options.imgOutput;
            
            function run(data, opts, key) {
                var name = (key? key + '-' : '') + 'gka',
                    dataName = name + '-data.js',
                    htmlName = name + '.html';
        
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
                
                context.assets[dataName] = `var data = ${gkaUtils.data.fixArrayString(JSON.stringify(_data, null, '    '))}`;
                context.assets[htmlName] = html(data, opts, dataName);
            }
        
            run(data[0], options);
        
            // 对每个子目录都进行处理
            gkaUtils._.effectSubFolderSync(run, data[0], options);
            
            next(context);
        })
    }        
}

// module.exports.config = function(opts) {
//     // console.log(opts)
//     return {
//         crop: 'any',
//         sprites: true,
//     }
// };