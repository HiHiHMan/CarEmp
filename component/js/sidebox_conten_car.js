const list_field_1_car = [
    {
        label: 'ลำดับข้อมูล',
        name: 'data_no',
        type: 'text',
        list: '',
        hidden: true
    },
    {
        label: 'รหัสพนักงาน',
        name: 'emp_id',
        type: 'text',
        list: '',
        hidden: false
    },
    {
        label: 'ชื่อ - สกุล',
        name: 'fullName',
        type: 'text',
        list: '',
        hidden: false
        
    },
    {
        label: 'แผนก / บริษัท',
        name: 'dept',
        type: 'text',
        list: '',
        hidden: false
        
    },
    
]

const list_field_2_car = [
    {
        label: 'ทะเบียน',
        name: 'carRegistration',
        type: 'text',
        list: '',
        hidden: false
    },
    {
        label: 'ทะเบียน',
        name: 'targetUpdate',
        type: 'text',
        list: '',
        hidden: true
    },
    {
        label: 'ประเภทรถ',
        name: 'type',
        type: 'text',
        list: 'typecar_sh_selt',
        hidden: false
    },
    {
        label: 'ยี่ห้อ',
        name: 'brand',
        type: 'text',
        list: 'brand_sh_selt',
        hidden: false
        
    },
    {
        label: 'รุ่น',
        name: 'model',
        type: 'text',
        list: 'model_sh_selt',
        hidden: false
        
    },
    {
        label: 'สีรถ',
        name: 'color',
        type: 'text',
        list: 'color_sh_selt',
        hidden: false
        
    },
    {
        label: 'เชื้อเพลิง',
        name: 'energy',
        type: 'text',
        list: 'energy_sh_selt',
        hidden: false
        
    }
]

const list_field_3_car = [
    
    {
        label: 'สถานที่',
        name: 'location',
        type: 'text',
        list: 'location_sh_selt',
        hidden: false
    },
    {
        label: 'สติกเกอร์',
        name: 'sticker',
        type: 'text',
        list: 'sticker_sh_selt',
        hidden: false
    }
]

const list_field_4_car = [
    {
        label: 'ใบขับขี่',
        name: 'expDriLicense',
        type: 'date',
        list: '',
        hidden: false
    },
    {
        label: 'พรบ.',
        name: 'expAct',
        type: 'date',
        list: '',
        hidden: false
    },
    {
        label: 'ประกันภัย',
        name: 'expInsurance',
        type: 'date',
        list: '',
        hidden: false
    }
]


let sidebox_content_car = $("<form>", {
    "class": 'sidebox_content', 
    "id" : "form-submit",
    "method" : "post",
    "autocomplete" : "off"

})

let box_driver_detl = $("<div>", {
    "class": 'inbox_side_content mm box_driver_detl' 

})

let change_driver = $("<div>", {
    "class": 'change_driver' 
}) 

let box_change_driver = $("<div>", {
    "class": 'box_change_driver' 
}).html('<div>เปลี่ยนแปลงผู้ขับ</div>')

let input_new_driver = $("<input>", {
    "type": 'text',
    "name": 'new_driver',
    "placeholder": 'รหัสพนักงาน'
}) 

box_change_driver.append(input_new_driver)


let box_driver_img = $("<div>", {
    "class": 'inbox_side_content s box_driver_img' 
})

let box_car_detl = $("<div>", {
    "class": 'inbox_side_content mm box_car_detl' 
})

let box_car_img = $("<div>", {
    "class": 'inbox_side_content s box_car_img' 
})

let box_car_type = $("<div>", {
    "class": 'inbox_side_content mm box_car_type' 
})

let box_space_1_car = $("<div>", {
    "class": 'inbox_side_content s box_space' 
})

let box_car_outdate = $("<div>", {
    "class": 'inbox_side_content mm box_car_outdate' 
})

let box_space_2_car = $("<div>", {
    "class": 'inbox_side_content s box_space' 
})

const renderBoxInput_car = (label, name, type, list, hidden) => {

    let box_input = $("<div>", {
        "class": 'box_input', 
    })

    if(hidden) {
        box_input.hide()
    }

    let label_filed = $("<p>", {
        "class": 'label_filed',  
        "text" : label
    })

    let input

    if(list != '') {
        input = input = $("<input>", {
            "class": 'border_sty',
            "id" : name,
            "name" : name,
            "list": list,   
        }).on( "focus", function(ev) { 
            if(ev.target.id == 'brand') {
                
                $('#brand_sh_selt').html('') 
                // console.log($('#type').val() + ' ---------' )
                getTypeCar($('#type').val(), '')
              
            } else if(ev.target.id == 'model' ) {

                $('#model_sh_selt').html('')
                // console.log($('#type').val() + ' ---------' + $('#brand').val())
                getTypeCar($('#type').val(), $('#brand').val())

            }
 
       })

        box_input.append('<datalist id="'+ list +'" > </datalist>')
        box_input.append(label_filed)
        box_input.append(input)

    } else if(type == 'date') {
        input = $("<input>", {
            "class": 'border_sty-m',
            "id" : name,
            "name" : name,
            "type": type,  
            
         }).on( "focus", function(ev) {
            if(input.val() == null || input.val() == '') {
                input.val(formatDatetime(new Date().setFullYear(new Date().getFullYear() + 543),'--') )
            }
            
        })

        box_input.append(label_filed)
        box_input.append(input)
        if(name == 'expDriLicense') {
            box_input.append(`<input type="checkbox" id="${name}_checkbox" name="${name}_checkbox" value="ตลอดชีพ"> <label for="${name}_checkbox"> ตลอดชีพ </label><br>`)

        } else if(name == 'expInsurance') {
            box_input.append(`<select id="typeInsurance" name="typeInsurance">
                                    <option value="">--</option>
                                    <option value="ชั้น 1">ชั้น 1</option>
                                    <option value="ชั้น 2+">ชั้น 2+</option>
                                    <option value="ชั้น 2">ชั้น 2</option>
                                    <option value="ชั้น 3+">ชั้น 3+</option>
                                    <option value="ชั้น 3">ชั้น 3</option>
                                </select>`)
 
        }
       
    } else if(name == 'carRegistration') {
        input = $("<input>", {
            "class": 'border_sty-m',
            "id" : name,
            "name" : name,
            "type": type,  
            
         }) 

        box_input.append(label_filed)
        box_input.append(input)
        box_input.append(`<input type="checkbox" id="nocarRegistration" name="nocarRegistration" value="ไม่มีทะเบียน"> <label for="nocarRegistration"> ไม่มี </label><br>`)
        box_input.append(`<input type="checkbox" id="typecarRegistration" name="typecarRegistration" value="red"> <label for="typecarRegistration"> ป้ายแดง </label><br>`)
 
    } else {
        input = $("<input>", {
            "class": 'border_sty',
            "id" : name,
            "name" : name,
            "type": type,   

        })

        box_input.append(label_filed)
        box_input.append(input)
    }
 

    return box_input;

}

const render_List_car = (item, funcRender, target) => {

    item.forEach((e, index) => { 
        let obj =  funcRender(e.label, e.name, e.type, e.list, e.hidden)
        target.append( obj)  
    }) 
     
}

const render_List_MapData_car = (_this_data) => {
    $('#data_no').val(_this_data.Data_no) 
    $('#emp_id').val(_this_data.EmpId) 
    $('#fullName').val(_this_data.EmpName)
    $('#dept').val(_this_data.EmpDept)
    $('#carRegistration').val(_this_data.CarRegistration)
    $('#nocarRegistration').prop("checked", _this_data.CarRegistration == 'ไม่มีทะเบียน'? 1 : 0 )
    $('#typecarRegistration').prop("checked", _this_data.TypeCarRegistration == 'red'? 1 : 0)
    $('#targetUpdate').val(_this_data.CarRegistration)
    $('#brand').val(_this_data.Brand)
    $('#model').val(_this_data.Model)
    $('#color').val(_this_data.Color)
    $('#type').val(_this_data.Type)
    $('#energy').val(_this_data.Energy)
    $('#location').val(_this_data.Location)
    $('#sticker').val(_this_data.Sticker)
    $('#expDriLicense').val(formatDatetime(_this_data.ExpDriLicense,'--') == '-' ? null : new Date(_this_data.ExpDriLicense).getFullYear() == '9999' ? null : formatDatetime(_this_data.ExpDriLicense,'--'))
    $('#expDriLicense_checkbox').prop("checked", new Date(_this_data.ExpDriLicense).getFullYear() == '9999' ? 1 : 0)
    $('#expAct').val(formatDatetime(_this_data.ExpAct,'--') == '-' ? null : formatDatetime(_this_data.ExpAct,'--'))
    $('#expInsurance').val(formatDatetime(_this_data.ExpInsurance,'--') == '-' ? null : formatDatetime(_this_data.ExpInsurance,'--'))
    $('#typeInsurance').val(_this_data.TypeInsurance)

}

const getTypeCar = (type, brand) => { 
     $.ajax({
        url: path_api + '/api_Car_getBrandCar?type_car=' + type ,
        type: 'GET',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data) {

            $('#brand_sh_selt').html('') 
            data.map((item, index) => (
                $('#brand_sh_selt').append(
                    $("<option>", {
                        "key": index,
                        "value" : item.brand 

                    }) 
                )
                
            ))
 
        }
    })

    $.ajax({
        url: path_api + '/api_Car_getModelCar?type_car=' + type + '&brand=' + brand,
        type: 'GET',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data) { 

            $('#model_sh_selt').html('') 
            data.map((item, index) => (
                $('#model_sh_selt').append(
                    $("<option>", {
                        "key": index,
                        "value" : item.model 

                    }) 
                 )
                
            ))
 
        }
    })


    $.ajax({
        url: path_api + '/api_Car_getColorCar' ,
        type: 'GET',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data) { 

            $('#color_sh_selt').html('') 
            data.map((item, index) => (
                $('#color_sh_selt').append(
                    $("<option>", {
                        "key": index,
                        "value" : item.color 

                    }) 
                )
                
            ))
 
        }
    })

    $.ajax({
        url: path_api + '/api_Car_getTypeCar' ,
        type: 'GET',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data) { 
            
            $('#typecar_sh_selt').html('') 
            data.map((item, index) => (
                $('#typecar_sh_selt').append(
                    $("<option>", {
                        "key": index,
                        "value" : item.type_car 

                    })
                )
                
            ))

            //////////////////////////////////////////////////////////////////////

            let data_energy = [
                {
                    energy: 'LPG/NGV'
                },
                {
                    energy: 'ไฟฟ้า'
                },
                {
                    energy: 'น้ำมัน'
                }
            ]
         
            $('#energy_sh_selt').html('') 
            data_energy.map((item, index) => (
                $('#energy_sh_selt').append(
                    '<option key=' + index + ' value="'+  item.energy +'">'
                )
                
            ))

            //////////////////////////////////////////////////////////////////////
        
            let data_location = [
                {
                    location: 'CDC มหาชัย'
                },
                {
                    location: 'BDC มหาชัย'
                },
                {
                    location: 'DC มหาชัย'
                }
            ]
        
            $('#location_sh_selt').html('') 
            data_location.map((item, index) => (
                $('#location_sh_selt').append(
                    '<option key=' + index + ' value="'+  item.location +'">'
                )
                
            ))

            //////////////////////////////////////////////////////////////////////
            
            let data_sticker = [
                {
                    sticker: 'ชั่วคราว'
                },
                {
                    sticker: 'ถาวร'
                }
            ]
        
            $('#sticker_sh_selt').html('') 
            data_sticker.map((item, index) => (
                $('#sticker_sh_selt').append(
                    '<option key=' + index + ' value="'+  item.sticker +'">'
                )
                
            ))

 
        }
    })


   
}

const render_content_edit_car = (car_id) => {
    ///////////////////////////////////////////////
   
    let this_data = _data_car[_data_car.findIndex(obj => { return obj.CarRegistration.trim() === car_id.trim() || obj.Data_no === car_id})]

    ////////////////////////////////////////////////////////////// reset
    box_driver_detl.html('')
    box_car_detl.html('')
    box_car_type.html('')
    box_car_outdate.html('')
    //////////////////////////////////////////////////////////////
 
    change_driver.append(
        $("<i>", {
            "class": 'bx bx-transfer-alt' 

        }).on( "click", function(e) { 

            if(input_new_driver.val() == '') {
                $('.box_change_driver').toggleClass('active')

            } else {
                $.ajax({
                    url: path_api + '/api_Car_getDataEmp?search=' + input_new_driver.val() ,
                    type: 'GET',
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    success: function(data) { 
                        if(data.length == 1) {
                            $('#emp_id').val(data[0].EmpId)
                            $('#fullName').val(data[0].EmpName)
                            $('#dept').val(data[0].EmpDept)
            
                            $('.box_change_driver').toggleClass('active')
                            input_new_driver.val('')
                        
                        } else {

                            $('.change_driver i').toggleClass('notfound')
                            setTimeout(() => { 
                                $('.change_driver i').toggleClass('notfound')

                            }, 200);
                            
                        }
                    
                    }
                })
            }
            
    })
    )

    change_driver.append(box_change_driver)
    box_driver_detl.append(change_driver)

    render_List_car(list_field_1_car, renderBoxInput_car, box_driver_detl)
    render_List_car(list_field_2_car, renderBoxInput_car, box_car_detl)
    render_List_car(list_field_3_car, renderBoxInput_car, box_car_type)
    render_List_car(list_field_4_car, renderBoxInput_car, box_car_outdate)

    // sidebox_content_car.append(sidebox_content_car)
    sidebox_content_car.append(box_driver_detl)
    // sidebox_content_car.append(box_driver_img)
    sidebox_content_car.append(box_car_detl)
    // sidebox_content_car.append(box_car_img)
    sidebox_content_car.append(box_car_type)
    // sidebox_content_car.append(box_space_1_car)
    sidebox_content_car.append(box_car_outdate)
    // sidebox_content_car.append(box_space_2_car)
    let content_btn = $("<div>", { 
        "class" : "box_btn"
    })

    content_btn.append($("<input>", { 
        "class" : "btn_submit",
        "type" : "submit",
        "value" : "บันทึก",
        "title" : "save"
    }))

    sidebox_content_car.append(content_btn) 

    getTypeCar('','')
    setTimeout(function() {
        render_List_MapData_car(this_data) 

    }, 0)

    

    ///////////////////////////////////////////////
}

