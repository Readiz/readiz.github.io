var Readiz = {};
Readiz.terminalSettingsObject = { 
    ps: '[user@readiz]$', 
    i18n: {
        welcome: 'Readiz\n' +
            '-\n' +
            'Read everything in the world easily.\n' +
            '<a href="http://readiz.com/">http://readiz.com/</a>\n\n' +
            'Executable Commands:\n' +
            '<span class="command_guide">help</span>, ' +
            '<span class="command_guide">hello</span>, ' + 
            '<span class="command_guide">history</span>, ' +
            '<span class="command_guide">clear</span>, ' + 
            '<span class="command_guide">main</span>\n' +
            '<span class="command_guide">about</span>, ' +
            '<span class="command_guide">log</span>, ' +
            '<span class="command_guide">blog</span>, ' +
            '<span class="command_guide">util</span>, ' +
            '<span class="command_guide">feed</span>, ' +
            '<span class="command_guide">bot</span>\n' + 
            '<span class="command_guide">stock</span>, ' +
            '<span class="command_guide">scrap</span>, ' +
            '<span class="command_guide">memo</span>, ' +
            '<span class="command_guide">favorite</span>, ' +
            '<span class="command_guide_onlytype">plogin</span>, ' +
            '<span class="command_guide_onlytype">cl</span>\n'
    }
};
Readiz.makePublicPageObject = function(keyword) {
    return {
        name : keyword,
        method : function(cmd){
            cmd.out = 'Redirecting...';
            location.href = 'http://' + keyword + '.readiz.com/';
            return cmd;
        },
        help : 'Goto ' + keyword + ' page.'
    }
};
Readiz.makePrivatePageObject = function(keyword) {
    return {
        name : keyword,
        method : function(cmd){
            cmd.out = 'Redirecting...';
            location.href = 'https://p.readiz.com/' + keyword;
            return cmd;
        },
        help : 'Goto ' + keyword + ' page.'
    }
};
Readiz.terminalCommandsObject = [{
    name : 'hello',
    method : function(cmd){
        cmd.out = '<h1>Hello World!</h1>';
        fetch("https://t.readiz.com/menu", {
            method: "GET",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "Test"
        }).then(function(res) {
            alert(JSON.stringify(res));
        }, function(e) {
            alert("Error submitting form!");
        });
        return cmd;
    },
    help : 'A demo command.'
},
Readiz.makePublicPageObject('main'),
Readiz.makePublicPageObject('about'),
Readiz.makePublicPageObject('log'),
Readiz.makePublicPageObject('blog'),
Readiz.makePublicPageObject('util'),
Readiz.makePublicPageObject('feed'),
Readiz.makePublicPageObject('bot'),
Readiz.makePrivatePageObject('scrap'),
Readiz.makePrivatePageObject('stock'),
Readiz.makePrivatePageObject('memo'),
Readiz.makePrivatePageObject('favorite'),
{
    name : 'plogin',
    method : function(cmd) {
        var last = $ptty.get_command_option('last');
        var args = last.split(' ');
        var arg1 = args[1];
        var arg2 = args[2];

        if (!(arg1 && arg2)) {
            cmd.out = 'Error: needs 2 variables.';
            return cmd;
        }

        var url = "https://p.readiz.com/do_login";
        var values = { username: arg1, password: arg2, return_page: 'https://p.readiz.com/summary' };
        var form = createElement("form", {action: url,
                                        method: "POST",
                                        style: "display: none"});
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

        cmd.out = 'Signing In...'
        return cmd;
    },
    help : 'Private login'
},
{
    name : 'cl',
    method : function(cmd) {
        var last = $ptty.get_command_option('last');
        var args = last.split(' ');
        var arg1 = args[1];

        if (!(arg1)) {
            cmd.out = 'Redirecting...';
            location.href = 'https://p.readiz.com/collected';
            return cmd;
        }

        cmd.out = 'Redirecting...';
        location.href = 'https://p.readiz.com/collected/' + arg1;
        return cmd;
    },
    help : 'Redirect to collected folder'
}
];