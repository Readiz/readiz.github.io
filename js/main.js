// Start ptty
var $ptty = $('#terminal').Ptty(
    Readiz.terminalSettingsObject
);

// Register a command.
for (var i = 0; i < Readiz.terminalCommandsObject.length; i++) {
    $ptty.register('command', Readiz.terminalCommandsObject[i]);
}
Readiz.RegisterCommandClickEvent();

// Check Private Menu
Readiz.CheckPrivateMenuAvailable();