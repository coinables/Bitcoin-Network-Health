var chainWS = new WebSocket('wss://ws.chain.com/v2/notifications');

chainWS.onopen = function()
	{
	chainWS.send(JSON.stringify( 
        {type: "new-transaction", block_chain: "bitcoin"}
         ) );
	};


chainWS.onmessage = function(onmsg)
	{  
        ++totalTx;
    var response = JSON.parse(onmsg.data);
    var amount = response.payload.transaction.amount;
	var calAmount = amount / 100000000;   
	$('#stand').html("&#3647;" + calAmount);    
	$('#UTX').html("<p></p>"); 
    var txperSec =  totalTx/totalSeconds;   
    $('#txps').html(txperSec.toFixed(2) + "TX/s");
    var limit = txperSec/0.07;
    $('#limit').html(limit.toFixed(0) + "%");    
    $("p").animate({
        left: '-200px',
        });


if(limit > 19){
  	$("#meter1").css("background-color", "green");
	} else {
	$("#meter1").css("background-color", "gray");
	}
if(limit > 39){
  	$("#meter2").css("background-color", "yellow");
	} else {
	$("#meter2").css("background-color", "gray");
	}
if(limit > 59){
  	$("#meter3").css("background-color", "orange");
	} else {
	$("#meter3").css("background-color", "gray");
	}
if(limit > 79){
  	$("#meter4").css("background-color", "red");
	} else {
	$("#meter4").css("background-color", "gray");
	}

}