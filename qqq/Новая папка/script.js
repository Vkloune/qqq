let calc = {
    numbA: '',
    act: null,
    numbB: '',
    isRvn: false,
    vvd: null,
}

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ];
const actions = ['plus', 'mine', 'div', 'mult'];


$(document).ready(function(){
    console.log(calc);
    for (let i = 0; i < numbers.length; i++) {
        const e = numbers[i];
        $("#" + e).click(function(){
            console.log('#' + e);
            // if (calc.act === null){
            if (!calc.act){
                calc.numbA += e;
                ShowVvd(calc.numbA);
            } else{
                calc.numbB += e;
                ShowVvd(calc.numbB);
            }
            // calc.numbA = 1;
            console.log(calc);
        });
    }
    
    for (let i = 0; i < actions.length; i++) {
        const e = actions[i];
        $("#" + e).click(function(){
            console.log('#' + e);
            calc.act = e;
            console.log(calc);
        });
    }

    // $("#2").click(function(){
    //     console.log('#2');
    //     // if (calc.act === null){
    //     if (!calc.act){
    //         calc.numbA += '2';
    //         ShowVvd(calc.numbA);
    //     } else{
    //         calc.numbB += '2';
    //         ShowVvd(calc.numbB);
    //     }
    //     // calc.numbA = 1;
    //     console.log(calc);
    // });


    // $("#plus").click(function(){
    //     console.log('#plus');
    //     calc.act = 'plus';
    //     console.log(calc);
    // });

    $("#rvn").click(function(){
        console.log('#rvn');
        calc.isRvn = true;
        if (calc.act === 'plus'){
            calc.vvd = Number(calc.numbA) + Number(calc.numbB);
        }
        if (calc.act === 'mine'){
            calc.vvd = Number(calc.numbA) - Number(calc.numbB);
        }
        if (calc.act === 'mult'){
            calc.vvd = Number(calc.numbA) * Number(calc.numbB);
        }
        if (calc.act === 'div'){
            calc.vvd = Number(calc.numbA) / Number(calc.numbB);
        }
        // calc.vvd = calc.numbA + calc.numbB;
        ShowVvd(calc.vvd);
        console.log(calc);
    });

    function ShowVvd(number){
        $("#vvd").text(number);
    }
});
