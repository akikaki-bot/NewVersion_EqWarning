const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080

app.get('/',(req,res) => {
return res.redirect('/earthquake')
})

app.get('/apple-touch-icon-152x152-precomposed.png',(req,res) => {
  res.sendFile(__dirname+"/app_icon.png")
})
app.get('/apple-touch-icon-152x152.png',(req,res) => {
  res.sendFile(__dirname+"/app_icon.png")
})
app.get('/apple-touch-icon.png',(req,res) => {
  res.sendFile(__dirname+"/app_icon.png")
})
app.get('/apple-touch-icon.png',(req,res) => {
  res.sendFile(__dirname+"/app_icon.png")
})
app.get('/icons/1',(req,res) => {
  res.sendFile(__dirname+"/shakeicon/1.bmp")
})
app.get('/icons/2',(req,res) => {
  res.sendFile(__dirname+"/shakeicon/2.bmp")
})
app.get('/icons/3',(req,res) => {
  res.sendFile(__dirname+"/shakeicon/3.bmp")
})
app.get('/icons/4',(req,res) => {
  res.sendFile(__dirname+"/shakeicon/4.bmp")
})
app.get('/icons/5m',(req,res) => {
  res.sendFile(__dirname+"/shakeicon/5弱.bmp")
})
app.get('/icons/6m',(req,res) => {
  res.sendFile(__dirname+"/shakeicon/6弱.bmp")
})
app.get('/icons/5p',(req,res) => {
  res.sendFile(__dirname+"/shakeicon/5強.bmp")
})
app.get('/icons/6p',(req,res) => {
  res.sendFile(__dirname+"/shakeicon/6強.bmp")
})
app.get('/icons/7',(req,res) => {
  res.sendFile(__dirname+"/shakeicon/7.bmp")
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}でサーバーを開始しました。`)
  })

const {
  Client,
  MessageEmbed,
  Intents
} = require('discord.js')

//intentsのoption
const option = {
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
}
//client
const { Wsend } = require('project-type')
const w = new Wsend(process.env.web_to_url)
const ChangeToView = require('./lib/lib.js')
//const Keyv = require('keyv')
//const db = new Keyv('sqlite://earthquake_database.sqlite', {
//  table: 'earthquakes'
//})

const client = new Client(option)
const c = new ChangeToView()
client.on('ready',() => {
  console.log('ぬべ')
client.user.setActivity({
  name : "P2P地震情報とにらめっこ中"
  })
})
const { WebSocket } = require('ws')
const ws = new WebSocket('wss://api.p2pquake.net/v2/ws')
const request = require('request')
const path = require('path')



const favicon = require('serve-favicon');


//const { areacode } = require('./area_change_to_string/index.js')
app.use(favicon(path.join(__dirname, 'favicon.ico')));

    app.get('/earthquake', function(req,res){
      let size = ""
      if(req.query.size){ size = ".new{font-size:30;} .old{font-size:30;} .subtitle{font-size:35}"}
      request.get('https://api.p2pquake.net/v2/jma/quake?limit=100', (reqs, ress, bodys) => {
        const o = JSON.parse(bodys);
    let basyo = ""
    let basyo1 = ""
    let basyo2 = ""
    let basyo3 = ""
    let basyo4 = ""
    let basyo5m = ""
    let basyo5p = ""
    let basyo6m = ""
    let basyo6p = ""
    let basyo7 = ""

    let time = 0
    for(i of o[0].points){
          if(i.scale === 70){
          basyo7 += "</br><img class='icon' src='http://www.jpeq.ml/icons/"+c.icon(c.shindo(i.scale))+"'></img>&nbsp;&nbsp;震度<span style='font-size: 2rem;'>"+c.shindo(i.scale)+"</span> "+i.addr
         }
         if(i.scale === 60){
          basyo6p += "</br><img class='icon' src='http://www.jpeq.ml/icons/"+c.icon(c.shindo(i.scale))+"'></img>&nbsp;&nbsp;震度<span style='font-size: 2rem;'>"+c.shindo(i.scale)+"</span> "+i.addr
         }
         if(i.scale === 55){
          basyo6m += "</br><img class='icon' src='http://www.jpeq.ml/icons/"+c.icon(c.shindo(i.scale))+"'></img>&nbsp;&nbsp;震度<span style='font-size: 2rem;'>"+c.shindo(i.scale)+"</span> "+i.addr
         }
         if(i.scale === 50){
          basyo5p += "</br><img class='icon' src='http://www.jpeq.ml/icons/"+c.icon(c.shindo(i.scale))+"'></img>&nbsp;&nbsp;震度<span style='font-size: 2rem;'>"+c.shindo(i.scale)+"</span> "+i.addr
         }
         if(i.scale === 45){
          basyo5m += "</br><img class='icon' src='http://www.jpeq.ml/icons/"+c.icon(c.shindo(i.scale))+"'></img>&nbsp;&nbsp;震度<span style='font-size: 2rem;'>"+c.shindo(i.scale)+"</span> "+i.addr
         }
         if(i.scale === 40){
          basyo4 += "</br><img class='icon' src='http://www.jpeq.ml/icons/"+c.icon(c.shindo(i.scale))+"'></img>&nbsp;&nbsp;震度<span style='font-size: 2rem;'>"+c.shindo(i.scale)+"</span> "+i.addr
         }
         if(i.scale === 30){
          basyo3 += "</br><img class='icon' src='http://www.jpeq.ml/icons/"+c.icon(c.shindo(i.scale))+"'></img>&nbsp;&nbsp;震度<span style='font-size: 2rem;'>"+c.shindo(i.scale)+"</span> "+i.addr
         }
         if(i.scale === 20){
          basyo2 += "</br><img class='icon' src='http://www.jpeq.ml/icons/"+c.icon(c.shindo(i.scale))+"'></img>&nbsp;&nbsp;震度<span style='font-size: 2rem;'>"+c.shindo(i.scale)+"</span> "+i.addr
         }
         if(i.scale === 10){
          basyo1 += "</br><img class='icon' src='http://www.jpeq.ml/icons/"+c.icon(c.shindo(i.scale))+"'></img>&nbsp;&nbsp;震度<span style='font-size: 2rem;'>"+c.shindo(i.scale)+"</span> "+i.addr
         }
        }

console.log(__dirname)

    res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>p2pEq API / 非公式りーどあぶるサービス </title>
<link rel="shortcut icon" href="https://akikaki-bot.github.io/cdn-priceless-web/favicon.ico" type="image/vnd.microsoft.icon">
<link rel="icon" href="https://akikaki-bot.github.io/cdn-priceless-web/favicon.ico" type="image/vnd.microsoft.icon">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js"></script>

<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

<style>
.icon {
  position: relative;
  top: 5px;
  left: 5px;
}
${size}
.new{
  background-color:#333
}
.old{
  background-color:#333
}
html{
  background-color:#333
}
.no{
  white-space: nowrap
}

@font-face {
  font-family: number;
  font-size: 3rem
  unicode-range: U+0030-0039;
}

.p{
  font-family: number;
}
.while{
  color: #FFF
}
body {
  height:100%;
}

</style>
</head>
<body>
<div class="container">
  <div class="new">
    <br>
    <div class="box">
    <nobr><p class="title is-4" alt="最大しんどは${c.shindo(o[time].earthquake.maxScale)}で、地震の大きさを示すマグニチュードは${o[time].earthquake.hypocenter.magnitude}です。">最大震度 <span style="font-size: 3rem;">${c.shindo(o[time].earthquake.maxScale)}</span> M <span style="font-size: 3rem;">${o[time].earthquake.hypocenter.magnitude}</span></p></nobr>
    </div>
    <br>
    <h2 class="while">発生時刻 <span style="font-size: 2rem;">${o[time].earthquake.time}</span></h2>
    <h2 class="while">震源 <span style="font-size: 2rem;"> ${o[time].earthquake.hypocenter.name}</span></h2>
    <h2 class="while">深さ <span style="font-size: 2rem;">${c.depth(o[time].earthquake.hypocenter.depth)}km</span></h2>
    <h2 class="while">津波の心配 <span style="font-size: 2rem;">${c.tsunami(o[time].earthquake.domesticTsunami)}</span></h2>
    <br>
    <hr>
    <h1 class="title while">各地の震度</h1>
    <hr>
    <h3 class="while">
    ${basyo7}
    ${basyo6p}
    ${basyo6m}
    ${basyo5p}
    ${basyo5m}
    ${basyo4}
    ${basyo3}
    ${basyo2}
    ${basyo1}
    </h3>
    </div>
  </div>
</body>
</html>`)
  })
})

//client.login(process.env.token)
client.login('ODI1Njc2MjkzNDY2NjE5OTA1.YGBY-A.Dgs4OlNLHBEJln5WcF3ueplu9wY')
ws.onmessage = async (data) => {

  const o = JSON.parse(data.data)  
 console.log("Response P2P WebSocketServer. Code :"+o.code)
 //console.log(o)
  if(o.code === 9611){
  /*  let areas = ""
    if(o.area_confidences.length === 0){
      areas = "[情報なし]"
    }else {
    for(i of o.area_confidences){
      areas +=`\n ${o.area_confidences}`
    }  */  
   // w.send(`【地震感知情報】UserQuakeInfo\n\n感知件数 : ${o.count}\n\n開始時刻 : ${o.started_at} 更新時刻 : ${o.updated_at} \n\n Id : ${o._id}`)
    }

    if(o.code === 551){

    let msindo = c.shindo(o.earthquake.maxScale)
    let atime = o.earthquake.time
    let domesticTsunami = o.earthquake.domesticTsunami
    let depth = o.earthquake.hypocenter.depth
    let magunitude = o.earthquake.hypocenter.magnitude
    let hyposentername = o.earthquake.hypocenter.name
    let pointskazu = o.points.length
    let eq = ""
    let info = ""
    let tsunamiwarning = ""

    if(depth === -1) return depth = "[不明]"
    if(magunitude === -1) return magunitude = "[不明]"
    if(hyposentername === undefined) return hyposentername = "[不明]"

    if(domesticTsunami === "Warning") tsunamiwarning = "現在、津波警報が発表されています。"
    else tsunamiwarning = "この地震による津波の心配はありません。"

    let maxscaleplace=""
      for(i of o.points){
        if(i.scale === o.earthquake.maxScale){
          maxscaleplace += "**"+i.addr+"**\n"
        }
      }

      let title = `EarthQuakeInfo - 最大震度${msindo}`
      let placedescription = `最大震度${msindo}を\n${maxscaleplace}で観測しています。`
      if(o.earthquake.maxScale === -1 && maxscaleplace===""){
        title = `EarthQuakeInfo - 震源情報`
        placedescription = ""
      }
      
      console.log(pointskazu) 
      const embed = new MessageEmbed().setTitle(title).setDescription(`〈震源と大きさ〉\n${hyposentername} M${magunitude} 最大震度${msindo}\n・震源の深さ : ${depth}km\n・発生時刻 : ${atime}\n\n${placedescription}\n**${tsunamiwarning}**`).setFooter(`id : ${o._id}`).setColor('YELLOW')
    	client.channels.cache.get('951418875847786496').send({embeds:[embed]}).catch(e => {})
    }

  if(o.code === 554){
  const embed = new MessageEmbed().setTitle('緊急地震速報 - (警報)').setDescription(`緊急地震速報です。強い揺れに警戒して下さい。\n緊急地震速報が発令された地域では、震度5弱以上の揺れが来るかもしれません。\n落ち着いて、身の安全を図ってください。`).setFooter(`id : ${o._id}`).setColor('RED')
    client.channels.cache.get('951418875847786496').send({embeds:[embed]}).catch(e => {})
  }
}