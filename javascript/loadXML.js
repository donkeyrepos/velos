function reply_click() {
	var items = Array(7109682747, 7280458100, 1315695995, 8123121857, 8546250530, 9154263344, 5546144531, 6500356618, 5746727163, 6293962221, 2346266814, 8426225178, 4743584657, 9047314112, 1902384398, 5769557587, 7581308357, 3568843557, 7661346135, 8048930973, 9868420881, 5142998909, 1076573577, 4621954365, 5775587651, 7695337729, 6504776055, 7694842333, 2946177529, 7131080991, 1148074503);
	var item = items[Math.floor(Math.random()*items.length)];

    $(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "datasets/" + item + ".data",
		dataType: "text",
		success: function(data){
			$('#dataset').val(data);
		    },
		error: function() {
		    alert("An error occurred while processing traffic dataset.");
		}
	});
});
}
