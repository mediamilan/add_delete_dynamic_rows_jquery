$(function(){
	// GET ID OF last row and increment it by one
	var $lastChar =1, $newRow;
	$get_lastID = function(){
		var $id = $('#expense_table tr:last-child td:first-child input').attr("name");
		$lastChar = parseInt($id.substr($id.length - 2), 10);
		console.log('GET id: ' + $lastChar + ' | $id :'+$id);
		$lastChar = $lastChar + 1;
		$newRow = "<tr> \
					<td><input type='text' name='reg_no_0"+$lastChar+"' maxlength='255' /></td> \
					<td><input type='text' name='subjects_0"+$lastChar+"' maxlength='255' /></td> \
					<td><input type='number' name='max_marks_0"+$lastChar+"' maxlength='11' /></td> \
					<td><input type='number' name='max_obtained_0"+$lastChar+"' maxlength='11' /></td> \
					<td><input type='text' name='precentage_0"+$lastChar+"' maxlength='255' /></td> \
					<td><input type='text' name='attempts_0"+$lastChar+"' maxlength='255' /></td> \
					<td><input type='text' name='exam_year_0"+$lastChar+"' maxlength='255' /></td> \
					<td><input type='button' value='Delete' class='del_ExpenseRow' /></td> \
				</tr>"
		return $newRow;
	}
	
	// ***** -- START ADDING NEW ROWS
	$('#add_ExpenseRow').live("click", function(){ 
		if($lastChar <= 9){
			$get_lastID();
			$('#expense_table tbody').append($newRow);
		} else {
			alert("Reached Maximum Rows!");
		};
	});
	
	$(".del_ExpenseRow").live("click", function(){ 
		$(this).closest('tr').remove();
		$lastChar = $lastChar-2;
	});	
});