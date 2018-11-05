var vimMode = 0;

console.log("Hello World!");
handleKeyboard = function(e) {
    var key = e.key;

    if (key === "a") {
        console.log("Pressed A!");
    }
};
$(".docs-texteventtarget-iframe").contents().find("[contenteditable=\"true\"]").on("keydown", handleKeyboard);
