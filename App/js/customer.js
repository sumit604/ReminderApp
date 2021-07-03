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
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout1")
                .setLeft("11.428571428571429em")
                .setTop("1.5238095238095237em")
                .setWidth("33.82857142857143em")
                .setHeight("31.085714285714285em")
                .setLayoutData({
                    "rows":5,
                    "cols":2,
                    "rowSetting":{
                        "1":{
                            "manualHeight":50
                        },
                        "2":{
                            "manualHeight":50
                        },
                        "3":{
                            "manualHeight":50
                        },
                        "4":{
                            "manualHeight":50
                        },
                        "5":{
                            "manualHeight":50
                        }
                    },
                    "cells":{
                        "A1":{
                            "value":"Name"
                        },
                        "A2":{
                            "value":"Contact No."
                        },
                        "A3":{
                            "value":"Email Id"
                        },
                        "A4":{
                            "value":"Event"
                        },
                        "A5":{
                            "value":"Date"
                        }
                    }
                }),
                "main"
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1")
                .setLeft("16em")
                .setTop("3.8095238095238093em")
                .setWidth("23.00952380952381em")
                .setHeight("3.5047619047619047em")
                .setCaption("    Customer Details")
                .setFontSize("2em")
                .setFontWeight("900"),
                "before"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});