let calc = {
    numbA: '',
    act: null,
    numbB: '',
    isRvn: false,
    vvd: null,
}

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const actions = ['plus', 'mine', 'divi', 'mult',]

$(document).ready(function() {
    console.log(calc);

    for (let i = 0; i < numbers.length; i++) {
    }

    for (let i = 0; i < numbers.length; i++) {
        const e =numbers [i];

        $("#" + e).click(function() {
            console.log("#" + e);
    
            if (!calc.act) {
                calc.numbA += e;
                showVvd(calc.numbA);
            } else {
                calc.numbB += e;
                showVvd(calc.numbB);
            }   
            
            console.log(calc);
        });
    }
  
    $("#plus").click(function() {
        console.log("#plus");

        calc.act = "plus";

        console.log(calc); 
    });      
    
    $("#rvn").click(function() {
        console.log("#rvn");

        calc.isRvn = true;

        if (calc.act === 'plus') {
            calc.Vvd = Number(calc.numbA) + Number(calc.numbB);
        }

      showVdd(calc.vvd);
        console.log(calc);  
    }); 

    function showVvd(number) { 
        $("#vvd").text(number);   
    }
    
    console.log

    $("#2").click(function() {
        console.log("#1");

        if (!calc.act) {
            calc.numbA += '2';
            showVvd(calc.numbA);
        } else {
            calc.numbB += '2';
            showVvd(calc.numbB);
        }   
        
        console.log(calc);
    });                                                                     
});

