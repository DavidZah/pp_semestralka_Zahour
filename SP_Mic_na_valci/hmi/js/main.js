REX.HMI.init = function () {
    // Zde se doplní registrace čtení hodnot s targetu
    REX.HMI.addItems([
        {alias:"Fi1", cstring:"mic.TRND:u1"},{alias:"dFi1", cstring:"mic.TRND:u2"},
        {alias:"Fi2", cstring:"mic.TRND:u3"},{alias:"dFi2", cstring:"mic.TRND:u3"},
        {alias: "rst", cstring: "mic.MP_INTEG_RST:BSTATE",write:true},
        {alias: "initAngle",cstring: "mic.CNR_y0:ycn",write: true},
        {alias: "nudge",cstring: "mic.MP_NUDGE:BSTATE",write: true},
        {alias: "disturbance",cstring: "mic.CNB_DISTRB:YCN",write: true}
    ]);

    let fi1Input = document.getElementById('Fi1');
    REX.HMI.get('Fi1').on('change',function(itm){
        let value = itm.getValue();
        // Konverze číselné hodnoty na string s třemi desetinnými místy
        value = value.toFixed(3);
        fi1Input.value = value;
    });

    let dfi1Input = document.getElementById('dFi1');
    REX.HMI.get('dFi1').on('change',function(itm){
        let value = itm.getValue();
        // Konverze číselné hodnoty na string s třemi desetinnými místy
        value = value.toFixed(3);
        dfi1Input.value = value;
    });

    let fi2Input = document.getElementById('Fi2');
    REX.HMI.get('Fi2').on('change',function(itm){
        let value = itm.getValue();
        // Konverze číselné hodnoty na string s třemi desetinnými místy
        value = value.toFixed(3);
        fi2Input.value = value;
    });

    let dfi2Input = document.getElementById('dFi2');
    REX.HMI.get('dFi2').on('change',function(itm){
        let value = itm.getValue();
        // Konverze číselné hodnoty na string s třemi desetinnými místy
        value = value.toFixed(3);
        dfi2Input.value = value;
    });


    let pushBall = document.getElementById("rst")
    pushBall.addEventListener('click',function (event){
        REX.HMI.get('rst').write(true);
        delay(100)
        REX.HMI.get('rst').write(false);
    },false)

    let nudge = document.getElementById("nudge")
    nudge.addEventListener('click',function (event){
        REX.HMI.get('nudge').write(1);
    },false)


    let slider = document.getElementById("pushForce");
    slider.addEventListener('change',function (event){
       var init_val = Number(slider.value);
       REX.HMI.get('initAngle').write(init_val);
    })

    let distrubanceToggle = document.getElementById("disturbance");
    distrubanceToggle.addEventListener('change',function (event){
        var val = distrubanceToggle.checked
        if(val){
            REX.HMI.get('disturbance').write(true);
        }
        else {
            REX.HMI.get('disturbance').write(false);
        }
    })

};

