$(document).ready(function(){

    $(document).on("click","#testing-tab", triggerWidth);

});

window.addEventListener('resize', triggerWidth, true);

function triggerWidth() {
    const width = document.getElementById("firstCol").getBoundingClientRect().left -
        document.getElementById("menu").getBoundingClientRect().left;
    const rect = document.getElementById("firstCol").getBoundingClientRect();

    console.log(rect.top, rect.right, rect.bottom, rect.left);
    console.log(width);

    $("#testTable").width(width);

    // document.getElementById("testTable").style.width = width.toString();
    // console.log($("#testTable").width());
}

