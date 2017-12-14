var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function(){
  hexo.load().then(function(){
    hexo.call('generate').then(function(){
      console.log('generate succeed.')
      return hexo.exit();
    }).catch(function(err){
      console.log('generation failed:', err)
      return hexo.exit(err);
    });
  });
});
