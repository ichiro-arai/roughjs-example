import {JSDOM} from 'jsdom'
import rough from "roughjs"
import { RoughSVG } from "roughjs/bin/svg"

//const rough = require('roughjs')
const dom = new JSDOM(`<body></body>`)
const tempDocument = dom.window.document
const svg = tempDocument.createElementNS("http://www.w3.org/2000/svg", "svg")

const rc = rough.svg(svg) as RoughSVG
////////////////
const style='stroke:black;stroke-width:1;fill:yellow'
const d=`
M 410,170
C 410,200 320,230 210,230
C 100,230 10,200 10,170
C 10,140 100,110 210,110
C 320,110 410,130 410,170
z
M 410,170
L 410,480
C 410,500 320,540 210,540
C 100,540 10,510 10,480
L 10,170
`
svg.appendChild(rc.path(d, {stroke: 'black', fill: 'green'}))

////////////////////////
let node = rc.rectangle(10, 10, 200, 200); // x, y, width, height
svg.appendChild(node)

svg.appendChild(rc.path('M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z', { fill: 'green' }))
svg.appendChild(rc.path('M230 80 A 45 45, 0, 1, 0, 275 125 L 275 80 Z', { fill: 'purple' }))
svg.appendChild(rc.path('M80 230 A 45 45, 0, 0, 1, 125 275 L 125 230 Z', { fill: 'red' }))
svg.appendChild(rc.path('M230 230 A 45 45, 0, 1, 1, 275 275 L 275 230 Z', { fill: 'blue' }))

svg.appendChild(rc.path('M10 315 L 110 215 A 30 50 0 0 1 162.55 162.45 L 172.55 152.45 A 30 50 -45 0 1 215.1 109.9 L 315 10', {stroke: 'black', fill: 'green'}))

///////////////////
svg.appendChild(rc.line(60, 60, 190, 60));
svg.appendChild(rc.rectangle(10, 10, 100, 100));
svg.appendChild(rc.rectangle(140, 10, 100, 100, {
  fill: 'rgba(255,0,0,0.2)',
  fillStyle: 'solid',
  roughness: 2
}));
svg.appendChild(rc.rectangle(10, 130, 100, 100, {
  fill: 'red',
  stroke: 'blue',
  hachureAngle: 60,
  hachureGap: 10,
  fillWeight: 5,
  strokeWidth: 5
}));


// ellipse and circle
svg.appendChild(rc.ellipse(350, 50, 150, 80));
svg.appendChild(rc.ellipse(610, 50, 150, 80, {
  fill: 'blue'
}));
svg.appendChild(rc.circle(480, 50, 80, {
  stroke: 'red', strokeWidth: 2,
  fill: 'rgba(0,255,0,0.3)', fillStyle: 'solid'
}));

//overlapping circles
svg.appendChild(rc.circle(480, 150, 80, {
  stroke: 'red', strokeWidth: 4,
  fill: 'rgba(0,255,0,1)', fillWeight: 4, hachureGap: 6
}));
svg.appendChild(rc.circle(530, 150, 80, {
  stroke: 'blue', strokeWidth: 4,
  fill: 'rgba(255,255,0,1)', fillWeight: 4, hachureGap: 6
}));

// linearPath and polygon
svg.appendChild(rc.linearPath([[690, 10], [790, 20], [750, 120], [690, 100]], {
  roughness: 0.7,
  stroke: 'red', strokeWidth: 4
}));
svg.appendChild(rc.polygon([[690, 130], [790, 140], [750, 240], [690, 220]]));
svg.appendChild(rc.polygon([[690, 250], [790, 260], [750, 360], [690, 340]], {
  stroke: 'red', strokeWidth: 4,
  fill: 'rgba(0,0,255,0.2)', fillStyle: 'solid'
}));
svg.appendChild(rc.polygon([[690, 370], [790, 385], [750, 480], [690, 460]], {
  stroke: 'red',
  hachureAngle: 65,
  fill: 'rgba(0,0,255,0.6)'
}));


// arcs
svg.appendChild(rc.arc(350, 200, 200, 180, Math.PI, Math.PI * 1.6));
svg.appendChild(rc.arc(350, 300, 200, 180, Math.PI, Math.PI * 1.6, true));
svg.appendChild(rc.arc(350, 300, 200, 180, 0, Math.PI / 2, true, {
  stroke: 'red', strokeWidth: 4,
  fill: 'rgba(255,255,0,0.4)', fillStyle: 'solid'
}));
svg.appendChild(rc.arc(350, 300, 200, 180, Math.PI / 2, Math.PI, true, {
  stroke: 'blue', strokeWidth: 2,
  fill: 'rgba(255,0,255,0.4)'
}));

// draw sine curve
let points = [] as [number, number][];
for (let i = 0; i < 20; i++) {
  // 4pi - 400px
  let x = (400 / 20) * i + 10;
  let xdeg = (Math.PI / 100) * x;
  let y = Math.round(Math.sin(xdeg) * 90) + 500;
  points.push([x, y]);
}
svg.appendChild(rc.curve(points, {
  roughness: 1.2, stroke: 'red', strokeWidth: 3
}));

console.log('<?xml version="1.0" encoding="UTF-8" standalone="no"?>')
var tmp = dom.window.document.createElement("div")
tmp.appendChild(svg);
svg.setAttribute('xmlns',"http://www.w3.org/2000/svg")
svg.setAttribute('xmlns:xlink', "http://www.w3.org/1999/xlink")
svg.setAttribute('version', "1.1")
svg.setAttribute('contentScriptType', "application/ecmascript")
svg.setAttribute('contentStyleType',"text/css")
svg.setAttribute('width',"798px")
svg.setAttribute('height', "590px")
//svg.setAttribute('style', "width:848px;height:590px;")
//svg.setAttribute('viewBox', "0 0 848 590")
//svg.setAttribute('preserveAspectRatio',"none")
//svg.setAttribute('zoomAndPan', "magnify")
console.log(tmp.innerHTML)
