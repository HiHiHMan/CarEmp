const render_alert = (content, message, callFunc, val) => {
    // message = 'ลบข้อมูลดังกล่าวออกจากระบบ'

    let blackdrop_drop_alert_box = $("<div>", {
        "class": 'blackdrop_drop_alert_box'

    })
    
    let drop_alert_box = $("<div>", {
        "class": 'drop_alert_box'
    })
 
    let head_drop_alert_box = $("<div>", {
        "class": 'head_drop_alert_box'
    }).append('<div class="title">แจ้งเตือน การดำเนินการ</div>')

    let close_drop_alert_box = $("<div>", {
        "class": 'close_drop_alert_box'

    }).append('<i class="bx bx-x"></i>').on( "click", (event) => {
        blackdrop_drop_alert_box.remove();

    })

    head_drop_alert_box.append(close_drop_alert_box)

    let content_drop_alert_box = $("<div>", {
        "class": 'content_drop_alert_box', 
    })
    
    let inbox_message  = ''
    if(content == 'confirm') {
        inbox_message = 'ขั้นตอนนี้หากกด &nbsp;"&nbsp;ตกลง&nbsp;&nbsp;"&nbsp; ระบบจะดำเนินการ &nbsp;"&nbsp;&nbsp;\
        '+ message +'&nbsp;"&nbsp;&nbsp; คุณต้องการดำเนินการหรือไม่ ?'
    
    } else if(content == 'response') {
        inbox_message = 'การดำเนินการ &nbsp; "&nbsp;' + message + '&nbsp;" &nbsp;'
    }
    
    content_drop_alert_box.append(inbox_message)

    let footer_drop_alert_box = $("<div>", {
        "class": 'footer_drop_alert_box'
    }).append('<div class="comment_alert">กด "ตกลง" เพื่อดำเนินการต่อไป</div>')

    let btn_conf = $("<div>", {
        "class": 'btn_conf',
        "text": 'ตกลง'
    }).on( "click", (event) => {
        blackdrop_drop_alert_box.remove();
        if(callFunc != null && callFunc != '') {
            callFunc(val)
        } 
        
    })

    footer_drop_alert_box.append(btn_conf)
 
    drop_alert_box.append(head_drop_alert_box)
    drop_alert_box.append(content_drop_alert_box)
    drop_alert_box.append(footer_drop_alert_box)
    

    blackdrop_drop_alert_box.append(drop_alert_box)
    $('body').append(blackdrop_drop_alert_box)
}