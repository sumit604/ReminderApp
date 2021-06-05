xui.Class('App.customer', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout5")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":150,
                        "min":70,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":true
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":650
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":80,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":true,
                        "cmd":true,
                        "itemDisplay":"display:none;"
                    }
                ])
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input23")
                .setLeft("21.333333333333332em")
                .setTop("0.7619047619047619em")
                .setWidth("18em")
                .setHeight("7.695238095238095em")
                .setLabelSize("8em")
                .setLabelCaption("Customer Details")
                .setMultiLines(true),
                "before"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});