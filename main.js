var vimMode = 0;

console.log("Hello World!");

docs.keyboard.startBlockingKeyboard();

// docs.keyboard.handleKeyDown = function (e) {
//    let keyPressed = e.key;
//    switch(keyPressed) {
//        case 'Esc':
//            if (vimMode !== 0) {
//                vimMode = 0;
//                docs.keyboard.startBlockingKeyboard();
//            }
//            break;
//        case 'i':
//            if (vimMode === 0) {
//                vimMode = 1;
//                docs.keyboard.stopBlockingKeyboard();
//            }
//            break;
//        case 'h':
//
//            break;
//    }
// };

