// Start ptty
var $ptty = $('#terminal').Ptty(
    Readiz.terminalSettingsObject
);

// Register a command.
for (var i = 0; i < Readiz.terminalCommandsObject.length; i++) {
    $ptty.register('command', Readiz.terminalCommandsObject[i]);
}
$('.command_guide').on('click', function() {
    var string_guide = $(this).html();
    $('.input').html(string_guide); // This is terminal's prompt!
    $('.input').trigger({type: 'keydown', which: 13, keyCode: 13});
});
$('.command_guide_onlytype').on('click', function() {
    var string_guide = $(this).html();
    $('.input').html(string_guide + ' '); // This is terminal's prompt!
});

// Check Private Menu
Readiz.CheckPrivateMenuAvailable();