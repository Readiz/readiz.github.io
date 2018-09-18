// Start ptty
var $ptty = $('#terminal').Ptty(
    Readiz.terminalSettingsObject
);

// Register callback
var cbf_login = {
    name: 'otp',
    method: function(cmd){
        var opts, $input = $ptty.get_terminal('.prompt .input');

        if(cmd[1]){
            opts = {
                out : 'Verifying...',
                last : 'xxxxxxxxxx',
                data : { otp : cmd[1] }
            };
            $input
                .text('xxxxxxxxxx')
                .css({'visibility' : 'visible'});
            var url = "https://p.readiz.com/otp_login";
            var values = { password: cmd[1], return_page: 'https://p.readiz.com/summary' };
            var form = createElement("form", {action: url,
                                            method: "POST",
                                            style: 'display: none',
                                            target: 'hidden_iframe'});
            for (var property in values) {
                if (values.hasOwnProperty(property)) {
                    var value = values[property];
                    if (value instanceof Array) {
                        for (var i = 0, l = value.length; i < l; i++) {
                            form.appendChild(createElement("input", {type: "hidden",
                                                                    name: property,
                                                                    value: value[i]}));
                        }
                    }
                    else {
                        form.appendChild(createElement("input", {type: "hidden",
                                                                name: property,
                                                                value: value}));
                    }
                }
            }
            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
    
            setTimeout(function() {
                Readiz.CheckPrivateMenuAvailable();
            }, 3000);
        } else {
            opts = {
                out  : 'Sending OTP...',
                ps   : 'Input received value: ',
                next : 'otp %cmd%',
            };
            fetch("https://t.readiz.com/sendOTP", {
                method: "GET",
                mode: 'cors',
                credentials: 'include'
            }).then(function(response) {
                
            });
            cmd = false;
        }

        $ptty.set_command_option(opts);

        return cmd;
    }
};
$ptty.register('callbefore', cbf_login );

// Register a command.
for (var i = 0; i < Readiz.terminalCommandsObject.length; i++) {
    $ptty.register('command', Readiz.terminalCommandsObject[i]);
}
Readiz.RegisterCommandClickEvent();

// Check Private Menu
Readiz.CheckPrivateMenuAvailable();