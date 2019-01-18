var IS_DEBUG_ON = false;
var APPLICATION_MODE = '';

var ApplicationUtil = {
    print:function(mainString = 'Sorry', sep = '') {
        console.log(sep + mainString + sep);
    }
};

ApplicationUtil.print();
ApplicationUtil.print('asdf');
ApplicationUtil.print('asdf', ' $$ ');
