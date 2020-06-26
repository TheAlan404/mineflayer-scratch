(function(ext) {
	var mineflayer = require("mineflayer");
	var botSpawned = false;
	
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};
	
    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
	
	ext.createBot = function(username, host, port){
		
	};
	
	ext.spawnEvent = function() {
		
	}
	
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
			[' ','Create a new bot with the name of %s and connect to %s %n','createBot', "Player", "localhost", 25565],
			['h','When bot spawns','spawnEvent'],
			['block type','block content','block function name']
		]
    };
	
    // Register the extension
    ScratchExtensions.register('Mineflayer', descriptor, ext);
})({});