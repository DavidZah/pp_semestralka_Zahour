REX.HMI.init = function () {
    REX.HMI.setRefreshRate(20);
    // Zde se doplní registrace čtení hodnot s targetu
    REX.HMI.addItems([
        {alias:"Fi1", cstring:"mic.TRND:u1"},{alias:"dFi1", cstring:"mic.TRND:u2"},
        {alias:"Fi2", cstring:"mic.TRND:u3"},{alias:"dFi2", cstring:"mic.TRND:u4"},
        {alias: "rst", cstring: "mic.MP_INTEG_RST:BSTATE",write:true},
        {alias: "initAngle",cstring: "mic.CNR_y0:ycn",write: true},
        {alias: "nudge",cstring: "mic.MP_NUDGE:BSTATE",write: true},
        {alias: "disturbance",cstring: "mic.CNB_DISTRB:YCN",write: true},
        {alias: "disturbanceLevel",cstring: "mic.SGI:amp",write:true}
    ]);
    document.getElementById("disturbance").checked = true;
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    let spool_angle = 0
    let ball_angle = 0
    /***
     * On change sends new animation settings
     * */
    let fi1Input = document.getElementById('Fi1');
    REX.HMI.get('Fi1').on('change',function(itm){
        let value =itm.getValue();
        spool_angle = value
        // Konverze číselné hodnoty na string s třemi desetinnými místy
        fi1Input.value = radians_to_degrees(value).toFixed(3);;
        render_new_frame(ctx,spool_angle,Number(ball_angle))
    });

    let dfi1Input = document.getElementById('dFi1');
    REX.HMI.get('dFi1').on('change',function(itm){
        let value = itm.getValue();
        // Konverze číselné hodnoty na string s třemi desetinnými místy
        dfi1Input.value = radians_to_degrees(value).toFixed(3);;
    });

    let fi2Input = document.getElementById('Fi2');
    REX.HMI.get('Fi2').on('change',function(itm){
        let value = itm.getValue();
        ball_angle=value
        // Konverze číselné hodnoty na string s třemi desetinnými místy
        fi2Input.value = radians_to_degrees(value).toFixed(3);;
        render_new_frame(ctx,spool_angle,Number(ball_angle))
    });

    let dfi2Input = document.getElementById('dFi2');
    REX.HMI.get('dFi2').on('change',function(itm){
        let value =itm.getValue();
        // Konverze číselné hodnoty na string s třemi desetinnými místy
        dfi2Input.value = radians_to_degrees(value).toFixed(3);
    });

    let pushBall = document.getElementById("rst")
    pushBall.addEventListener('click',function (event){
        REX.HMI.get('rst').write(true);
    },false)

    let nudge = document.getElementById("nudge")
    nudge.addEventListener('click',function (event){
        var nudge_force = document.getElementById("nudgeForce")
        var value = Number(nudge_force.value)
        REX.HMI.get('nudge').write(value);
    },false)


    let slider = document.getElementById("initBallPos");
    slider.addEventListener('change',function (event){
        var init_val = Number(slider.value);
       REX.HMI.get('initAngle').write(init_val);
    })

    let disturbanceLevel = document.getElementById("disturbanceLevel");
    disturbanceLevel.addEventListener('change',function (){
        var dist = Number(disturbanceLevel.value)
        REX.HMI.get('disturbanceLevel').write(dist)
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
    function radians_to_degrees(radians)
    {
        var pi = Math.PI;
        return radians * (180/pi);
    }
};

