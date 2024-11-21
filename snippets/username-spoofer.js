// This allows you to change the output of the username block.

if (typeof(vm)=="undefined")
      var vm = document
        .getElementById("app")
        ._reactRootContainer._internalRoot.current.child.pendingProps.store.getState()
        .scratchGui.vm;


        
vm.runtime.ioDevices.userData.getUsername = ()=>{
    return "JIM"
}
