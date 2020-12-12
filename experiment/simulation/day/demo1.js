var rightconnection=false;
jsPlumb.ready(function () {

    var instance,
        discs = [],
        addDisc = function (evt)
		       {
                  var info = createDisc();
                  var e = prepare(info.id);
                  instance.draggable(info.id);
                  discs.push(info.id);
                  evt.stopPropagation();
                  evt.preventDefault();
                },

        reset = function (e)  
		         {
                       for (var i = 0; i < discs.length; i++)  
					      {
                            var d = document.getElementById(discs[i]);
                            if (d) d.parentNode.removeChild(d);
                           }
                   discs = [];
                   e.stopPropagation();
                   e.preventDefault();
                 },
        initAnimation = function (elId) 
		    {
               var el = document.getElementById(elId);
               instance.on(el, 'click', function (e, ui) 
			       {
                      if (el.className.indexOf("jsPlumb_dragged") > -1) 
				                   {
                                     jsPlumb.removeClass(elId, "jsPlumb_dragged");
                                   return;
                   }
               
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
         endpoint = {
                       anchor: [0.5, 0.5, 0, -1],
                       connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,225)" },
                       endpointsOnTop: true,
                       isSource: true,
                        maxConnections: 10,
                       isTarget: true,
                       dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
                    },
        prepare = function (elId) 
		   {
              initAnimation(elId);
              return instance.addEndpoint(elId, endpoint);
           },
		     endpoint1= {
           anchor: [0.5, 0.5, 0, -1],
           connectorStyle: { strokeWidth: 4, stroke: "rgba(225,0,0)" },
           endpointsOnTop: true,
           isSource: true,
           maxConnections:3,
           isTarget: true,
           dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
       },

       prepare1 = function (elId) {
           initAnimation(elId);

           return instance.addEndpoint(elId, endpoint1);
       },


       endpoint2 = {
          anchor: [0.5, 0.5, 0, -1],
          connectorStyle: { strokeWidth: 4, stroke: "rgba(0,225,0)" },
          endpointsOnTop: true,
          isSource: true,
          maxConnections: 3,
          isTarget: true,
          dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
      },

      prepare2 = function (elId) {
          initAnimation(elId);

          return instance.addEndpoint(elId, endpoint2);
      },

    // this is overridden by the YUI demo.
        createDisc = function () 
		    {
                var d = document.createElement("div");
                d.className = "bigdot";
                document.getElementById("animation-demo").appendChild(d);
                var id = '' + ((new Date().getTime()));
                d.setAttribute("id", id);
                var w = screen.width - 162, h = screen.height - 200;
                var x = (5 * w) + Math.floor(Math.random() * (10 * w));
                var y = (5 * h) + Math.floor(Math.random() * (10 * h));
                d.style.top = y + 'px';
                d.style.left = x + 'px';
                return {d: d, id: id};
            };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
     instance = jsPlumb.getInstance({
                            DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: -90 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),//red
            e2 = prepare1("ld2"),//red
            e4 = prepare2("ld4"),//green
            e5 = prepare2("ld5"),//green
            e6 = prepare("ld6"),
            e7 = prepare2("ld7"),//green
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare("ld10"),
            e11 = prepare("ld11"),
            e18 = prepare2("ld18"),//green
            e19 = prepare("ld19"),
           
            e21 = prepare("ld21"),
       
            e23 = prepare("ld23"),
            
            e25 = prepare("ld25"),
            e26 = prepare("ld26"),
            
           
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {
        var correct_connections_1_18 = [
            {
                "source": "ld1",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld1"
            }
        ];

        var correct_connections_2_19 = [
            {
                "source": "ld2",
                "target": "ld19"
            },
    
            {
                "source": "ld19",
                "target": "ld2"
            }
        ];
        var correct_connections_4_18 = [
            {
                "source": "ld18",
                "target": "ld4"
            },
    
            {
                "source": "ld4",
                "target": "ld18"
            }
        ];
      
        var correct_connections_5_19 = [
            {
                "source": "ld19",
                "target": "ld5"
            },
    
            {
                "source": "ld5",
                "target": "ld19"
            }
        ];

        var correct_connections_6_8 = [
            {
                "source": "ld6",
                "target": "ld8"
            },
    
            {
                "source": "ld8",
                "target": "ld6"
            }
        ];
        var correct_connections_7_19 = [
            {
                "source": "ld7",
                "target": "ld19"
            },
    
            {
                "source": "ld19",
                "target": "ld7"
            }
        ];
        var correct_connections_9_10 = [
            {
                "source": "ld9",
                "target": "ld10"
            },
    
            {
                "source": "ld10",
                "target": "ld9"
            }
        ];
        
		var correct_connections_10_21 = [
            {
                "source": "ld10",
                "target": "ld21"
            },
    
            {
                "source": "ld21",
                "target": "ld10"
            }
        ];
        var correct_connections_18_25 = [
            {
                "source": "ld18",
                "target": "ld25"
            },
    
            {
                "source": "ld25",
                "target": "ld18"
            }
        ];
        var correct_connections_26_23 = [
            {
                "source": "ld26",
                "target": "ld23"
            },
    
            {
                "source": "ld23",
                "target": "ld26"
            }
        ];
		var correct_connections_11_25 = [
            {
                "source": "ld25",
                "target": "ld11"
            },
    
            {
                "source": "ld25",
                "target": "ld11"
            }
        ];
        

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld19"
            },
    
            {
                "source": "ld19",
                "target": "ld2"
            },
            {
                "source": "ld18",
                "target": "ld4"
            },
    
            {
                "source": "ld4",
                "target": "ld18"
            },
            
            {
                "source": "ld19",
                "target": "ld5"
            },
            {
                "source": "ld5",
                "target": "ld19"
            },
            {
                "source": "ld6",
                "target": "ld8"
            },
            {
                "source": "ld8",
                "target": "ld6"
            },
            {
                "source": "ld7",
                "target": "ld19"
            },
            {
                "source": "ld19",
                "target": "ld7"
            },
            {
                "source": "ld9",
                "target": "ld10"
            },
            {
                "source": "ld10",
                "target": "ld9"
            },
			{
                "source": "ld10",
                "target": "ld21"
            },
			{
                "source": "ld21",
                "target": "ld10"
            },
            
            {
                "source": "ld18",
                "target": "ld25"
            },
            {
                "source": "ld25",
                "target": "ld18"
            },
			{
                "source": "ld11",
                "target": "ld25"
            },
			{
                "source": "ld25",
                "target": "ld11"
            },
            {
                "source": "ld26",
                "target": "ld23"
            },
            {
                "source": "ld123",
                "target": "ld26"
            },
            
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_18= false;
        var is_connected_2_19 = false;
        var is_connected_4_18 = false;
        var is_connected_5_19 = false;
        var is_connected_6_8= false;
        var is_connected_7_19 = false;
        var is_connected_9_10 = false;
        
		var is_connected_10_21 = false;
        var is_connected_18_25 = false;
        var is_connected_26_23 = false;
		 var is_connected_11_25 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_18){
                is_connected_1_18 = correct_connections_1_18.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_2_19){
                is_connected_2_19 = correct_connections_2_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
			if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

           
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_18){
                is_connected_4_18 = correct_connections_4_18.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
			if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

           
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_5_19){
                is_connected_5_19= correct_connections_5_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
			if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

           
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_6_8){
                is_connected_6_8 = correct_connections_6_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
			if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_7_19){
                is_connected_7_19= correct_connections_7_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
			if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_9_10){
                is_connected_9_10= correct_connections_9_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
			if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

           
        });
       
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_10_21){
                is_connected_10_21 = correct_connections_10_21.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
			if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

           
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_18_25){
                is_connected_18_25= correct_connections_18_25.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
			if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

           
        });
		 actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_11_25){
                is_connected_11_25= correct_connections_11_25.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
			if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

           
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_26_23){
                is_connected_26_23 = correct_connections_26_23.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
			if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

           
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
       

           
if ( is_connected_1_18&&is_connected_2_19&&is_connected_4_18 && is_connected_5_19 && is_connected_6_8&&is_connected_7_19 &&is_connected_9_10  &&is_connected_10_21&& is_connected_18_25 &&is_connected_26_23 
         && !unallowed_connection_present) {
            alert("correct connection");
			rightconnection=true;
            return;
            }
        else if(!unallowed_connection_present){
	                           alert("Please complete connection");
							   }
			else {
               alert("WRONG CONNECTION");
                return;
            } 
    });
});
var rotoroffstate=true;
var mcboffstate=true;
var were=240;
function mcbonoff()
{   
    if(rightconnection==false)
    {
	
        alert("Alert ! Please complete the connection first.");
    }
    else
    {
        if (mcboffstate==true)
        {
            
            mcboffstate=false;
            document.getElementById('myimage').src='Mcbon.png';
          
        }
        else
        {
            if(rotoroffstate==false)
            {
                rotaronoff();
                document.getElementById('myimage').src='Mcboff.png';
                mcboffstate=true;
				document.getElementById('needle1').style.transform="rotate(-60deg)";
		          document.getElementById('needle2').style.transform="rotate(-60deg)";
		          document.getElementById('needle3').style.transform="rotate(-60deg)";
		          document.getElementById('needle4').style.transform="rotate(-60deg)";
				  
            }
            else
            {
                mcboffstate=true;
                document.getElementById('myimage').src='Mcboff.png';

            }
            
        }
    }
    
    
}
var isrotating=false;
function rotaronoff()
{   
    if(mcboffstate==true)
    {
        alert("Alert ! Either please complete the connection first or set mcb to on.");
    }
    else
    {
	  if(isrotating==false)
	  {  
           if (rotoroffstate==true)
            {
               isrotating=true;
            rotoroffstate=false;
			       document.getElementById('needle1').style.transform="rotate(40deg)";
					document.getElementById('needle2').style.transform="rotate(-30deg)";
					document.getElementById('needle3').style.transform="rotate(30deg)";
                  //addtotable();
            var intervalId=setInterval(function()
            {
                if(were===390)
                {
                    clearInterval(intervalId);
                    were=390;
                    isrotating=false;
                }
                document.getElementById('cirmover2').style.transform="rotate("+were+"deg)";
                were++;
            },15);
            //settoon();
        }
        else
        {   
	         isrotating=true;  
	         document.getElementById('needle1').style.transform="rotate(-60deg)";
		          document.getElementById('needle2').style.transform="rotate(-60deg)";
		          document.getElementById('needle3').style.transform="rotate(-60deg)";      
            rotoroffstate=true;

            //document.getElementById("graph").disabled=true;
            //document.getElementById("addToTable").disabled=true;
            //document.getElementById("range").disabled=true;
            var intervalId=setInterval(function()
                {
                    if(were===240)
                    {
						isrotating=false;
                        clearInterval(intervalId);
                        were=240;
                    }
                    document.getElementById('cirmover2').style.transform="rotate("+were+"deg)";
                    were--;
                },15);
            //setto0();
        }
    }
    
    else{
		 return;
	}
	}	
}
   function setto0()
   {
    rangeMeter.value=0;  
    rangeChange();
   }
   function settoon()
   {
    rangeMeter.value=1;
    rangeChange();
   }	  
var attcounter=0;
var addtable=false;
function addtotable()
{
	if (rotoroffstate==true)
                     {
                      alert("Alert! Please rotate autotransformer first");
                     }
	else if(attcounter<=0)
	   {
		   attcounter++;
	       var x = table.insertRow(1);
	       var cell1 = x.insertCell(0);
	       var cell2=x.insertCell(1);
	       var cell3 = x.insertCell(2);
		   cell1.innerHTML=37.5;
		   cell2.innerHTML=4.5;
		   cell3.innerHTML=11;
		  //Nextpage();  
	}
	else
	{
		return;
	}
	
}
function Nextpage()
{
	
	if(attcounter<=0){
		               alert("Alert! Please  add reading in table");
	}
else {
      window.open("submitimage.html");
}

}	  
