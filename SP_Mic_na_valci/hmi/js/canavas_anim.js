

function render_new_frame(ctx,angle_spool,angle_ball){
    ctx.clearRect(0, 0, 1000, 1000);
    draw_ball(ctx,161,0,[800/2,550/2],angle_ball+Math.PI/180*270)
    draw_spool(ctx,800,550,angle_spool)
    //draw_spool_base(ctx,800,600);
    ctx.stroke()
}

function draw_ball(ctx,bal_x,bal_y,rot_center,angle){

    var radius = 60
    ctx.translate(rot_center[0],rot_center[1])
    ctx.rotate(angle)
    ctx.beginPath();
    ctx.arc(bal_x, bal_y, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.rotate(-angle);
    ctx.translate(-rot_center[0],-rot_center[1])
}

    function draw_spool(ctx,bal_x,bal_y,angle){

    var width = bal_x
    var height = bal_y
    var radius = 100
    ctx.translate(width/2,height/2)
    ctx.rotate(angle)
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    //first line
    ctx.moveTo(-radius,0)
    ctx.lineTo(+radius,0)
    //second line
    ctx.moveTo(0,-radius)
    ctx.lineTo(0,radius)
    ctx.rotate(-angle);
    ctx.translate(-width/2,-height/2);

}

    function draw_spool_base(ctx,width,height){
    const y_pos = 80
    const x_pos = -100
    const rect_x = 200
    const rect_y = 140


    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "red";
    ctx.translate(width/2+x_pos,height/2+y_pos)
    ctx.rect(0, 0, rect_x, rect_y);
    ctx.translate(-width/2+x_pos,-height/2+y_pos)
    ctx.moveTo(rect_x/2,0)
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);

}



