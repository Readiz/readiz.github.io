var createElement = (function()
{
    // Detect IE using conditional compilation
    if (/*@cc_on @*//*@if (@_win32)!/*@end @*/false)
    {
        // Translations for attribute names which IE would otherwise choke on
        var attrTranslations =
        {
            "class": "className",
            "for": "htmlFor"
        };

        var setAttribute = function(element, attr, value)
        {
            if (attrTranslations.hasOwnProperty(attr))
            {
                element[attrTranslations[attr]] = value;
            }
            else if (attr == "style")
            {
                element.style.cssText = value;
            }
            else
            {
                element.setAttribute(attr, value);
            }
        };

        return function(tagName, attributes)
        {
            attributes = attributes || {};

            // See http://channel9.msdn.com/Wiki/InternetExplorerProgrammingBugs
            if (attributes.hasOwnProperty("name") ||
                attributes.hasOwnProperty("checked") ||
                attributes.hasOwnProperty("multiple"))
            {
                var tagParts = ["<" + tagName];
                if (attributes.hasOwnProperty("name"))
                {
                    tagParts[tagParts.length] =
                        ' name="' + attributes.name + '"';
                    delete attributes.name;
                }
                if (attributes.hasOwnProperty("checked") &&
                    "" + attributes.checked == "true")
                {
                    tagParts[tagParts.length] = " checked";
                    delete attributes.checked;
                }
                if (attributes.hasOwnProperty("multiple") &&
                    "" + attributes.multiple == "true")
                {
                    tagParts[tagParts.length] = " multiple";
                    delete attributes.multiple;
                }
                tagParts[tagParts.length] = ">";

                var element =
                    document.createElement(tagParts.join(""));
            }
            else
            {
                var element = document.createElement(tagName);
            }

            for (var attr in attributes)
            {
                if (attributes.hasOwnProperty(attr))
                {
                    setAttribute(element, attr, attributes[attr]);
                }
            }

            return element;
        };
    }
    // All other browsers
    else
    {
        return function(tagName, attributes)
        {
            attributes = attributes || {};
            var element = document.createElement(tagName);
            for (var attr in attributes)
            {
                if (attributes.hasOwnProperty(attr))
                {
                    element.setAttribute(attr, attributes[attr]);
                }
            }
            return element;
        };
    }
})();

var Readiz = {};
Readiz.terminalCommandsObject = {
    help: function() {
        this.echo('help, main, about, log, blog, util, feed, bot, stock, memo, echo');
    },
    main: function() {
        this.echo('Redirecting...')
        location.href = 'http://main.readiz.com/';
    },
    about: function() {
        this.echo('Redirecting...')
        location.href = 'http://about.readiz.com/';
    },
    log: function() {
        this.echo('Redirecting...')
        location.href = 'https://log.readiz.com/';
    },
    blog: function() {
        this.echo('Redirecting...')
        location.href = 'http://blog.readiz.com/';
    },
    util: function() {
        this.echo('Redirecting...')
        location.href = 'http://util.readiz.com/';
    },
    feed: function() {
        this.echo('Redirecting...')
        location.href = 'http://feed.readiz.com/';
    },
    bot: function() {
        this.echo('Redirecting...')
        location.href = 'http://bot.readiz.com/';
    },
    stock: function() {
        this.echo('Redirecting...')
        location.href = 'https://p.readiz.com/stock';
    },
    memo: function() {
        this.echo('Redirecting...')
        location.href = 'https://p.readiz.com/memo';
    },
    hobby: function() {
        this.echo('Redirecting...')
        location.href = 'https://p.readiz.com/collected/productive_hobby';
    },
    echo: function(arg1) {
        this.echo(arg1);
    },
    // calc: {
    //     add: function(a, b) {
    //         this.echo(a+b);
    //     },
    //     sub: function(a, b) {
    //         this.echo(a-b);
    //     }
    // },
    plogin: function(arg1, arg2) {
        this.echo('Signing in...');

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
    }
};
Readiz.terminalSettingsObject = { 
    prompt: 'user@readiz>', 
    greeting: true,
    greetings: '#######################################\n' +
            '# Readiz\n' +
            '# -\n' +
            '# Read everything in the world easily.\n' +
            '# http://readiz.com/\n' +
            '########################################\n\n' +
            'Executable commands:\n' +
            'main, about, log, blog, util, feed, bot, \nstock, memo, hobby, echo, help\n'
};
