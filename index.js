const express=require('express');
const app=express();
const server=require('http').Server(app);

server.listen(3000);

var ans={};

// 0 -- Rock
// 1 -- Paper
// 2 -- Scissor

var arr=["Rock","Paper","Scissor"];
var results=[
    [0,0,1],
    [1,0,0],
    [0,1,0]
];
for(var i=1;i<=50;i++){
    var p1=Math.floor((Math.random() * 3));
    var p2=Math.floor((Math.random() * 3));
    var p3=Math.floor((Math.random() * 3));
    var p4=Math.floor((Math.random() * 3));
    var iteration={
                    "player1":arr[p1],
                    "player2":arr[p2],
                    "player3":arr[p3],
                    "player4":arr[p4]
                  };
    var player1={
        "player1":'-',
        "player2":results[p1][p2],
        "player3":results[p1][p3],
        "player4":results[p1][p4]
    };
    var player2={
        "player1":results[p2][p1],
        "player2":'-',
        "player3":results[p2][p3],
        "player4":results[p2][p4]
    };
    var player3={
        "player1":results[p3][p1],
        "player2":results[p3][p2],
        "player3":'-',
        "player4":results[p3][p4]
    };
    var player4={
        "player1":results[p4][p1],
        "player2":results[p4][p2],
        "player3":results[p4][p3],
        "player4":'-'
    };
    var reference={};
    reference[1]=player1;
    reference[2]=player2;
    reference[3]=player3;
    reference[4]=player4;
    var reference_result={};
    reference_result[1]=iteration;
    reference_result[2]=reference;
    ans[i]=reference_result;

}

app.get('/game/start',(req,res)=>{
    res.send(JSON.stringify(ans));
})