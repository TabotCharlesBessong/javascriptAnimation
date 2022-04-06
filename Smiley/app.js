

function outf(text) { 

    var mypre = document.getElementById("output"); 

    mypre.innerHTML = mypre.innerHTML + text; 

} 

function builtinRead(x) {

    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)

            throw "File not found: '" + x + "'";

    return Sk.builtinFiles["files"][x];

}

function runit() { 

    var prog = document.getElementById("abc").value; 

    Sk.configure({output:outf, read:builtinRead}); 

    (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';

       

    var myPromise = Sk.misceval.asyncToPromise(function() {

        return Sk.importMainWithBody("<stdin>", false, prog, true);

    });

       

    myPromise.then(function(mod) {

            

    },

        

    function(err) {

        console.log(err.toString());

    });

} 

window.onload = runit;
