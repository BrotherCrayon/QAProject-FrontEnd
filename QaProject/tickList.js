(function() {
    document.getElementById('ticklist').addEventListener('change', disableInput, false);
    function disableInput() {
        var ticklist = document.getElementById('ticklist');
        var listitem = document.getElementById('listitem');
        
        if(ticklist.checked) {
            listitem.disabled = true;
            // element.classList.add("tickedoff");
        } else {
            listitem.disabled = false;
        }
    }
})();