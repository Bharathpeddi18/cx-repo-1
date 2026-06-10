<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<title>Live Dashboard</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial,sans-serif;
    background:#f5f7fb;
    padding:20px;
}

.dashboard{
    max-width:1400px;
    margin:auto;
}

.header{
    margin-bottom:20px;
}

.kpi-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:16px;
    margin-bottom:20px;
}

.kpi-card{
    background:white;
    padding:20px;
    border-radius:12px;
    box-shadow:0 2px 10px rgba(0,0,0,.08);
}

.kpi-title{
    color:#666;
    font-size:14px;
}

.kpi-value{
    font-size:32px;
    font-weight:bold;
    margin-top:10px;
}

.kpi-change{
    margin-top:8px;
    color:green;
}

.chart-card{
    background:white;
    padding:20px;
    border-radius:12px;
    box-shadow:0 2px 10px rgba(0,0,0,.08);
}

canvas{
    width:100%;
    height:400px;
    border-radius:8px;
}
</style>
</head>

<body>

<div class="dashboard">

    <div class="header">
        <h1>Sales Dashboard</h1>
    </div>

    <div class="kpi-grid">

        <div class="kpi-card">
            <div class="kpi-title">Revenue</div>
            <div class="kpi-value" id="revenue">$0</div>
            <div class="kpi-change">▲ Live</div>
        </div>

        <div class="kpi-card">
            <div class="kpi-title">Orders</div>
            <div class="kpi-value" id="orders">0</div>
            <div class="kpi-change">▲ Live</div>
        </div>

        <div class="kpi-card">
            <div class="kpi-title">Users Online</div>
            <div class="kpi-value" id="users">0</div>
            <div class="kpi-change">▲ Live</div>
        </div>

        <div class="kpi-card">
            <div class="kpi-title">Conversion</div>
            <div class="kpi-value" id="conversion">0%</div>
            <div class="kpi-change">▲ Live</div>
        </div>

    </div>

    <div class="chart-card">
        <h3>Revenue Trend</h3>
        <canvas id="chart"></canvas>
    </div>

</div>

<script>

const revenueEl = document.getElementById("revenue");
const ordersEl = document.getElementById("orders");
const usersEl = document.getElementById("users");
const conversionEl = document.getElementById("conversion");

const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = 400;

let chartData = [];

for(let i=0;i<30;i++){
    chartData.push(
        Math.floor(Math.random()*500)+100
    );
}

function updateKPIs(){

    revenueEl.textContent =
        "$" + (50000 + Math.floor(Math.random()*50000)).toLocaleString();

    ordersEl.textContent =
        Math.floor(Math.random()*2000);

    usersEl.textContent =
        Math.floor(Math.random()*500);

    conversionEl.textContent =
        (Math.random()*10).toFixed(2) + "%";
}

function drawChart(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    const padding = 40;

    ctx.strokeStyle="#ddd";
    ctx.lineWidth=1;

    for(let i=0;i<5;i++){

        let y =
        padding +
        ((canvas.height-padding*2)/4)*i;

        ctx.beginPath();
        ctx.moveTo(padding,y);
        ctx.lineTo(canvas.width-padding,y);
        ctx.stroke();
    }

    const max = Math.max(...chartData);

    ctx.beginPath();

    chartData.forEach((value,index)=>{

        const x =
        padding +
        (index*(canvas.width-padding*2))/
        (chartData.length-1);

        const y =
        canvas.height-padding -
        ((value/max)*(canvas.height-padding*2));

        if(index===0){
            ctx.moveTo(x,y);
        }
        else{
            ctx.lineTo(x,y);
        }
    });

    ctx.strokeStyle="#2563eb";
    ctx.lineWidth=3;
    ctx.stroke();

    chartData.forEach((value,index)=>{

        const x =
        padding +
        (index*(canvas.width-padding*2))/
        (chartData.length-1);

        const y =
        canvas.height-padding -
        ((value/max)*(canvas.height-padding*2));

        ctx.beginPath();
        ctx.arc(x,y,4,0,Math.PI*2);
        ctx.fillStyle="#2563eb";
        ctx.fill();
    });
}

function simulateRealtimeData(){

    chartData.shift();

    chartData.push(
        Math.floor(Math.random()*500)+100
    );

    updateKPIs();
    drawChart();
}

updateKPIs();
drawChart();

setInterval(
    simulateRealtimeData,
    1000
);

</script>

</body>
</html>
