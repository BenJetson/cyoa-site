warps = {
    'start' : 'startpage.html',
    '1' : 'story1.html',
    '1a' : 'story1a.html',
    '1aa' : 'story1aa.html',
    '1ab' : 'story1ab.html',
    '1aba' : 'story1aba.html',
    '1abb' : 'story1abb.html',
    '1b' : 'story1b.html',
    '1ba' : 'story1ba.html',
    '1bb' : 'story1bb.html',
    '2' : 'story2.html'    
}


function warp() {
        
    warpid = $("#warpinput").val().toLowerCase().toString()
    
    if (warpid in warps) {
        
        location.href = warps[warpid];
        
    } else {
        
        $("#warpinput").css("border-color", "#f00");
        $("#warpinput").css("color", "#f00");
        $("#warpinput").css("background-color", "#fdd");
        alert("Invalid!")
        throw "The input '" + warpid + "' was not a valid warp ID."
        return false;
        
    }
    
}