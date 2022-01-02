function render_new_frame(ctx, angle_spool, angle_ball) {
    ctx.clearRect(0, 0, 1000, 1000);
    draw_ball(ctx, 161, 0, [800 / 2, 550 / 2], angle_ball + Math.PI / 180 * 270)
    draw_spool(ctx, 800, 550, angle_spool)
    //draw_spool_base(ctx,800,600);
    ctx.stroke()
}

function draw_ball(ctx, bal_x, bal_y, rot_center, angle) {

    var radius = 60
    ctx.lineWidth = "2"
    ctx.fillStyle = "#ED5A36"
    ctx.translate(rot_center[0], rot_center[1])
    ctx.rotate(angle)
    ctx.beginPath();
    ctx.arc(bal_x, bal_y, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.rotate(-angle);
    ctx.translate(-rot_center[0], -rot_center[1])
    ctx.fill()
}

function draw_spool(ctx, bal_x, bal_y, angle) {

    var width = bal_x
    var height = bal_y
    var radius = 100
    ctx.lineWidth = "2"
    ctx.lineStyle = "grey";
    ctx.fillStyle = "#B2AEAD"
    ctx.translate(width / 2, height / 2)
    ctx.rotate(angle)
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    //first line
    ctx.moveTo(-radius, 0)
    ctx.lineTo(+radius, 0)
    //second line
    ctx.moveTo(0, -radius)
    ctx.lineTo(0, radius)
    ctx.rotate(-angle);
    ctx.translate(-width / 2, -height / 2)
    ctx.fill()
    ctx.stroke();

}

function draw_spool_base(ctx, width, height) {
    const y_pos = 80
    const x_pos = -100
    const rect_x = 200
    const rect_y = 140


    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "red";
    ctx.translate(width / 2 + x_pos, height / 2 + y_pos)
    ctx.rect(0, 0, rect_x, rect_y);
    ctx.translate(-width / 2 + x_pos, -height / 2 + y_pos)
    ctx.moveTo(rect_x / 2, 0)


}



