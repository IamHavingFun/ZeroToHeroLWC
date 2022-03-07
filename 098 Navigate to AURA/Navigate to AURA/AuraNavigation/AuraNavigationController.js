({
    onload : function(component) {
        var myPageRef = component.get("v.pageReference")
        var id = myPageRef.state.c__id
        component.set("v.id", id)
    }
})
