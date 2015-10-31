 $(document).ready(function(){
            $('#a1').click(function(){
                $('#div1').show('');
                $('#div2').show();
                
            });
           $('#a2').click(function(){
                $('#div2').hide();
                $('#div1').show('');
            });
	
            });
			
			
			
function copy()
									{
										var n1 = document.getElementById("n1");
										var n2 = document.getElementById("n2");
										var n3 = document.getElementById("n3");
										var n4 = document.getElementById("n4");
										var n5 = document.getElementById("n5");
										var n6 = document.getElementById("n6");
										var n7 = document.getElementById("n7");
										var n8 = document.getElementById("n8");
										var n9 = document.getElementById("n9");
										var n10 = document.getElementById("n10");
										var n11 = document.getElementById("n11");
										var n12= document.getElementById("n12");
										var n13 = document.getElementById("n13");
										var n14 = document.getElementById("n14");
										
										n2.value = n1.value;
										n4.value = n3.value;
										n6.value = n5.value;
										n8.value = n7.value;
										n10.value = n9.value;
										n12.value = n11.value;
										n14.value = n13.value;
									}
			
/* 			$(document).ready(function(){
           		$('#check1').click(function(){
					if(document.getElementById('#check1').checked = true;)
					{
					$('#mass1').hide();
					$('#mass2').show();
					}
					else
						$('#mass2').hide();
						$('#mass1').show();
                
            });
			
			 }); */
			 
			 
// for enable and disable fields fron tab 4
/* 	function enableDisable()
	{
	
	if (document.getElementById('chkbox').checked ){
		//document.getElementById('txtBox1').disabled = true;
		document.getElementById('txtBox').disabled = true;
		document.getElementById('star').hidden = true;
			if(document.getElementById('txtBox').disabled = true)
			{
				document.getElementById("txtBox").style.backgroundColor = "#fff";
			}
			else{
			document.getElementById("txtBox").style.backgroundColor = "gray";
			}
				
		
	}
	else{
		document.getElementById('txtBox').disabled = false;
		document.getElementById('star').hidden = false;
		//document.getElementById('txtBox1').disabled = false;
		if(document.getElementById('txtBox').disabled = false)
			{
				document.getElementById("txtBox").style.backgroundColor = "red";
			}
			else{
			document.getElementById("txtBox").style.backgroundColor = "red";
			}
	}
	} */