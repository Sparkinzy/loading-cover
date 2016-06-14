/**
 * 单独元素loading 层
 * v 1.0.0
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
;(function($) {
// What does the loading plugin do?
$.fn.loading = function(options) {

  if (!this.length) { return this; }
  if(options!= undefined && options.length>0 && options+'' === options){
  	if(options === 'hide'){
  		options = { hide:true};
  	}
  	
  }
  
  var opts = $.extend(true, {}, $.fn.loading.defaults, options);
  // 获取当前文件地址


  this.each(function() {
    var $this = $(this),
    width = $this.get(0).offsetWidth,
    height = $this.get(0).offsetHeight;
    console.log(opts)
    if(opts.hide){
    	$this.find('.loading-cover').remove();
    	return false;
    }
    $this.css('position', 'relative');

    if($this.find('.loading-cover').length==0){
    	var loader_inner = '',loader = '';
    	if(opts.loader === 'ball-grid-pulse'){
    		var i = 1;
    		for (i; i <= 9; i++) {
    			loader_inner += '<div></div>';
    		}
    	}
    	if(opts.loader){
    		loader = '<span class="'+opts.loader+'" style="display:inline-block">'+loader_inner+'</span>';
    	}
    	if (opts.msg.length>0) {
    		loader += '<span style="display:inline-block;width:'+width+'px">'+opts.msg+'</span>';
    	}
    	
    	$this.append('<div class="loading-cover"></div>');
    	$this.find('.loading-cover').css({
    		background: opts.background,
    		width:width+'px',
    		height:height+'px',
    		top:0,
    		left:0,
    		position:'absolute',
    		'text-align':'center',
    		'vertical-align':'middle',
    		'line-height':height+'px',
    		'filter':'alpha(opacity='+opts.opacity*100+')',
    		'-moz-opacity':opts.opacity,
    		'opacity':opts.opacity,
    		'overflow':'hidden',
    	})
    	.html('<span style="display:inline-block;line-height:1.5;">'+loader+'</span>');
    }
  });

  return this;
};

// default options
$.fn.loading.defaults = {
  hide:false,
  loader:'ball-grid-pulse',
  background:'#eee',
  msg:'',
  opacity:0.3,
};

})(jQuery);
