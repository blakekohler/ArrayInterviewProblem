var existingArray = [{
            "content": {
                "host": {
                    "name": "Mia"
                }
            },
        }, {
            "content": {
                "host": {
                    "name": "Annie"
                }
            },
        }, {
            "content": {
                "host": {
                    "name": "Mia"
                }
            }
		},
                        {
                content: {
                    host: {
                        name: "Oscar"
                    }
                },
            },
            {
                "content": {
                    "host": {
                        "name": "Annie"
                    }
                },
            },
            {
                "content": {
                    "host": {
                        "name": "Mia"
                    }
                },
            },
            {
                "content": {
                    "host": {
                        "name": "Annie"
                    }
                },
            }
        ];

$("#ArrayPrint").click(function(){
	var v;
	for(v = 0; v < existingArray.length; v++){
		$(".ArrayHolder").append("<h3>"+ existingArray[v].content.host.name + "</h3>");
	}
});
$("#ClearArray").click(function(){
	$(".ArrayHolder").html("");
});