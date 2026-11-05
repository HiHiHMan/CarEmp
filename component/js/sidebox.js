const formatDatetime = (date,time) => {

    if(date == null || date == '' || date == '-') {
        return '-'
    }

    let dateFormat = new Date(date);

    if(time != "" && time != "--") {
        dateFormat.setHours(time.split(':')[0]);
        dateFormat.setMinutes(time.split(':')[1]);
        dateFormat.setSeconds(0);
    }

    if(time == '--') {
        // console.log(dateFormat)
        
        return  String(dateFormat.getFullYear()).padStart(2, '0')+
                "-"+ String((dateFormat.getMonth()+1)).padStart(2, '0')+
                "-"+ String(dateFormat.getDate()).padStart(2, '0') 
    }

        return  String(dateFormat.getFullYear()).padStart(2, '0')+
                    "-"+ String((dateFormat.getMonth()+1)).padStart(2, '0')+
                    "-"+ String(dateFormat.getDate()).padStart(2, '0')+
                    " "+ String(dateFormat.getHours()).padStart(2, '0')+
                    ":"+ String(dateFormat.getMinutes()).padStart(2, '0')+
                    ":"+ String(dateFormat.getSeconds()).padStart(2, '0');

    dateFormat = null;
}

let sidebox_blackdrop = $("<div>", {
    "class": 'sidebox_blackdrop',
})

let sidebox = $("<div>", {
    "class": 'sidebox inactive',
})

let close = $("<i>", {
    "class": 'btn_close bx bx-right-arrow-alt' 
})

let head_content = $("<div>", {
    "class": 'head_content',
    "text" : 'รายละเอียด'
}) 


const close_sidebox = () => {
    sidebox.toggleClass('inactive')
    setTimeout(() => {$('.sidebox_content').html('') }, 100);
    $("body").css('overflow', 'auto');
    sidebox_blackdrop.hide()
}

const render_sidebox = (sidebox_content) => {
    sidebox_blackdrop.show()
    sidebox.toggleClass('inactive')
    sidebox.html('')

    close.on( "click", function(e) {
        close_sidebox()
    });

    ////////////////////////////////////////////////////////////
    sidebox_content_car.on('submit', (event) => {
    
        event.preventDefault()
        const data = new FormData(event.currentTarget)
    
        let current_date = new Date()
        current_date = current_date.setFullYear(current_date.getFullYear() + 543)

        // for (var pair of data.entries()) {
        //     console.log(pair[0] + ' , ' + pair[1])
        // }

        let date = new Date(current_date)
        let year = date.getFullYear();
        let month = ('0' + (date.getMonth() + 1)).slice(-2);
        let day = ('0' + date.getDate()).slice(-2);
        let hours = ('0' + date.getHours()).slice(-2);
        let minutes = ('0' + date.getMinutes()).slice(-2);
        let seconds = ('0' + date.getSeconds()).slice(-2);
        let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        let jData = {
                        TargetUpdate: data.get('targetUpdate'),
                        Data_no: data.get('data_no'),
                        DataUpDate: formattedDate,
                        EmpId: data.get('emp_id'),
                        CarRegistration: data.get('nocarRegistration')? 'ไม่มีทะเบียน' : data.get('carRegistration'),
                        TypeCarRegistration: data.get('typecarRegistration'),
                        Brand: data.get('brand'),
                        Model: data.get('model'),
                        Color: data.get('color'),
                        Type: data.get('type'),
                        Energy: data.get('energy'),
                        ExpDriLicense: data.get('expDriLicense_checkbox')? '9999-09-09' : data.get('expDriLicense'),
                        ExpAct: data.get('expAct'),
                        ExpInsurance: data.get('expInsurance'), 
                        TypeInsurance: data.get('typeInsurance'), 
                        Sticker: data.get('sticker'),
                        Location: data.get('location'),
                        UpdateBy: getCookie('UserName')
                    }
 

        $.ajax({
        
            url: path_api + '/api_Car_up_vehicle' ,
            type: 'POST', 
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: jData,
            success: function(response) { 
                if(response.msg == "success") { 
                    close_sidebox()
                    render_alert('response','เสร็จสิ้น', null, '' )
                    callDataTable_car($('#table-search').val(), parseInt( $('#pange_current').val()))
                }
            },
            error: function(xhr, status, error) {
                console.log(error)
            }

        });
                    
     }) 

    sidebox_content_emp.on('submit', (event) => {
    
        event.preventDefault()
        const data = new FormData(event.currentTarget)
    
        let jData = {
                EmpId:  data.get('emp_id'), 
                EmpNameTitle: '',
                EmpName: data.get('fullName'),
                EmpEngName: data.get('fullName_eng'),
                EmpGender: data.get('gender'),
                EmpPosition: data.get('position'),
                EmpDept: data.get('dept'),
                EmpWorkDate: data.get('workDate'),
                EmpOffice: data.get('office') 
            }

        $.ajax({
    
            url: path_api + '/api_Car_up_emp' ,
            type: 'POST', 
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: jData,
            success: function(response) { 
                if(response.msg == "success") { 
                    close_sidebox()
                    render_alert('response','เสร็จสิ้น', null, '' )
                    callDataTable_emp($('#table-search').val(), parseInt( $('#pange_current').val()))
                }
                
            },
            error: function(xhr, status, error) {
                console.log(error)
            }

        });
    })
    ////////////////////////////////////////////////////////////

    sidebox.append(close)
    sidebox.append(head_content)
    sidebox.append(sidebox_content)  
    $("body").css('overflow', 'hidden');
    $('body').append(sidebox_blackdrop)
    $('body').append(sidebox)    

}


