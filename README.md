# loading-cover
give every div a single loading cover

```html
<div class="box box-1">这是一个感人的情歌</div>
<div class="box">这是一个感人的情歌</div>
<div class="box box-2">这是一个感人的情歌</div>
<div class="box">这是一个感人的情歌</div>
<div class="box">这是一个感人的情歌</div>
```

```js
$('.box').loading();// 给每一个div等一个独立的加载遮罩
$('.box-1').loading('hide'); // 控制取消遮罩
// 参数控制
$('.box-2').loading({
	hide:false,
	loader:'ball-grid-pulse',
	background:'#ed5565',
	'msg':'不可说'
});

```
