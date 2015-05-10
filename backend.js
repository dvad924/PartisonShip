
var maxPartisanship = 4;
var body = d3.select('body')
body.style('background-color','red').style('margin','0px');
var container = d3.select('#container');
constyle = {
	'height':window.outerHeight.toString()+'px',
	'width':window.outerWidth.toString()+'px',
	'background-color': 'white'

};
var search = d3.select('#search');
searchStyle = {
	'margin': "0px auto",
	'height':'100px',
	'width' :'200px',
	'position':'relative',
	'overflow':'hidden'
}
search.style(searchStyle);
container.style(constyle);
var querybox = d3.select('#query');
var submit = d3.select('#submit');
submit.attr('value','Submit Query')

viz = d3.select('#viz');
labels = ['Dem','Rep'];
conwidth = window.outerWidth;
console.log(conwidth);
console.log(container.node().getBoundingClientRect())
var barwidth = conwidth/2.5;
barStyle = {
	'height':'200px',
	'width' :barwidth.toString()+'px',
	'position':'absolute',
	'overflow':'hidden',
	'opacity':'0.5'
}
min = Math.floor(conwidth/2) - Math.floor(barwidth/2);
maxl = min - Math.floor(barwidth/2);
maxr = min + Math.floor(barwidth/2);
var dem = d3.select('#dem').style(barStyle).style('background-color','blue').style('left',min+'px');
var rep = d3.select('#rep').style(barStyle).style('background-color','red').style('left',min+'px');

d3.json('http://localhost:50000',function(err,data){
	var val = 0;
	try{
		val = parseFloat(data.score);
	}catch(err){
		return
	}
	var dshift = min - (val*barwidth)/(2*maxPartisanship)
	var rshift = min + (val*barwidth)/(2*maxPartisanship)
	dem.style('left',dshift+'px')
	rep.style('left',rshift+'px')
})
	
