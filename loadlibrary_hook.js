Java.performNow(function() {
    const System = Java.use('java.lang.System');
    const Runtime = Java.use('java.lang.Runtime');
    const VMStack = Java.use('dalvik.system.VMStack');

    // for android 5.1
    System.loadLibrary.implementation = function(library) {
        try {
            console.log('System.loadLibrary("' + library + '")');
            // const loaded = Runtime.getRuntime().loadLibrary0(VMStack.getCallingClassLoader(), library);
            // return loaded;
            Runtime.getRuntime().loadLibrary(library, VMStack.getCallingClassLoader());
            // return loaded;
            // return;

        } catch(ex) {
            console.log(ex);
        }
    };
    
    // above android 5.1 .. maybe
    System.load.implementation = function(library) {
        try {
            console.log('System.load("' + library + '")');
            const loaded = Runtime.getRuntime().load0(VMStack.getCallingClassLoader(), library);
            return loaded;
        } catch(ex) {
            console.log(ex);
        }
    };
});
