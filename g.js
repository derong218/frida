
setImmediate(function () {
	//延迟1秒调用Hook方法
	setTimeout(test, 5000);
});


function hook_native() {
	var modules = Process.enumerateModules();
	for (var i in modules) {
		var module = modules[i];
		//console.log(module.name);
		if (module.name.indexOf("kiwi.so") > -1) {
			console.log(module.base);
		}
	}
}
//执行Hook方法
function test() {
	Java.perform(function () {

		// var baseAddr = Module.findBaseAddress("libkiwi.so");
		// console.log("baseAddr", baseAddr);
		// hook_native();

		// Frida Script to dump a loaded .so file
		'use strict';

		const soName = "libkiwi.so"; // Replace with your .so file name
		const outputFilePath = "/data/data/com.l706bdece0.f2dbf289ce/cache/libkiwi.so"; // Path to save the dumped .so file

		// Find the base address of the loaded .so file
		const module = Process.getModuleByName(soName);

		if (module) {
			console.log("[*] Found module:", module.name);
			console.log("[*] Base address:", module.base);
			console.log("[*] Size:", module.size);

			// 计算起始地址
			const startAddress = module.base.sub(0x10);
			console.log("[*] Start address:", startAddress);

			// Read the .so file contents from memory
			// const fileContents = module.base.readByteArray(6033408 + 0x40);

			const memoryContents = Memory.readByteArray(startAddress, 0x5C1000);
			console.log("fileContents");
			if (memoryContents) {
				// Save the contents to a file
				const file = new File(outputFilePath, "wb");
				file.write(memoryContents);
				file.close();
				console.log("[*] Dumped .so file saved to:", outputFilePath);
			} else {
				console.error("[-] Failed to read module memory");
			}
		} else {
			console.error("[-] Module not found");
		}


	});
}
