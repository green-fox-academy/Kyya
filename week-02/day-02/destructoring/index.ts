/* eslint-disable */
var car = {
  model: 'Benz',
  color: 'black',
  year: 1886,
  doors: 0,
  historical: true,
};

var computer = {
  type: 'PC',
  monitor: {
    color: 'black',
    size: '16\"',
    HDMI: true,
    VGA: true,
  },
  tower: {
    color: 'grey',
    CPU: 4.7,
    memory: 16,
    SSD: 128,
  },
};

// before ES6
var type = computer.type;
var size = computer.monitor.size;
var CPU = computer.tower.CPU;
var computerMonitorColor = computer.monitor.color;

// from ES6
const { model, color, year } = car;

const { 
  tower: { CPU: computerTowerCPU }, 
  monitor: { color: computerMonitorColor2 }
} = computer;
