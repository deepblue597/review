function foo() {

    for (let i = 0; i < this.parameters.length; i++) {

        if (this.parameters[i] == undefined) {
            console.log("parameter does not exist.");
        } 
        else if ( this.parameters[i].name.includes("/pus/")) {
            this.newParameters = this.newParameters.concat(this.parameters[i]);
        }
    }
} 


