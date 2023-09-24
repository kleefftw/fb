var agtw = agtw || {};


(function () {
    var JS = "js";
    var CS = "cs";
    //
    console.warn("%c init js_loader", "background:red;color:white");

    //
    var cssFiles = [
        "agtw.css"
    ];
    loadCs("", cssFiles);



//   
//    var jsDev1 = [
//        "agtw_base.js",
//        "agtw_util.js",
//        "agtw_log.js",
//         "agtw.js"
//    ];
//    load("src/", jsDev1);
//



    var jsProd = [
        "agtw-all-min.js"
    ];
    load("", jsProd);



//----------------------------------------------------------------------------



    function loadCs(scriptLocation, jsFiles) {
        scriptTagLoad(CS, scriptLocation, jsFiles);
    }

    function load(scriptLocation, jsFiles) {
        scriptTagLoad(JS, scriptLocation, jsFiles);
    }

    function scriptTagLoad(type, scriptLocation, jsFiles) {
        var url;
        var scriptTags = [];
        for (var i = 0, len = jsFiles.length; i < len; i++) {
            url = scriptLocation + jsFiles[i];
            url = url + "?random=" + getRandom();
            var errMsg = "dev " + type + " loadder error, 找不到此 " + type + " 檔: " + url + "";
            var alertScript = "alert(\'" + htmlEncode(errMsg) + "\')";
            if (type === CS) {
                scriptTags[i] = "<link rel=\"stylesheet\" href=\"" + url + "\" onerror=\"" + alertScript + "\"  type=\"text/css\">";
            } else {
                scriptTags[i] = "<script src=\"" + url + "\" onerror=\"" + alertScript + "\"></script>";
            }
        }
        if (scriptTags.length > 0) {
            var tags = scriptTags.join("\r\n");
//            console.log("dev load js:\r\n\r\n\r\n" + tags + "\r\n\r\n\r\n");
            document.write(tags);
        }
    }

    function htmlEncode(value) {
        return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function getRandom() {
        return Math.floor(Math.random() * 10000000, 0);
    }

})();

