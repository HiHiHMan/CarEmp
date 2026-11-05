const list_field_1_emp = [
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
        label: 'ชื่อ-สกุล (Eng)',
        name: 'fullName_eng',
        type: 'text',
        list: '',
        hidden: false
        
    },
    {
        label: 'เพศ',
        name: 'gender',
        type: 'radio',
        list: '',
        hidden: false
        
    }
    
]

const list_field_2_emp = [
    {
        label: 'หน่วยงาน',
        name: 'dept',
        type: 'text',
        list: '',
        hidden: false
    },
    {
        label: 'ตำแหน่ง',
        name: 'position',
        type: 'text',
        list: '',
        hidden: false
        
    },
    {
        label: 'สถานที่ทำงาน',
        name: 'office',
        type: 'text',
        list: '',
        hidden: false
        
    },
    {
        label: 'วันเริ่มงาน',
        name: 'workDate',
        type: 'date',
        list: '',
        hidden: false
        
    },
    
]


let sidebox_content_emp = $("<form>", {
    "class": 'sidebox_content', 
    "id" : "form-submit",
    "method" : "post",
    "autocomplete" : "off"

}) 

let box_emp_detl = $("<div>", {
    "class": 'inbox_side_content mm box_emp_detl' 

})

let box_emp_img = $("<div>", {
    "class": 'inbox_side_content s box_emp_img' 
})

let box_emp_detl_2 = $("<div>", {
    "class": 'inbox_side_content mm box_emp_detl_2' 
})

let box_space_1_emp = $("<div>", {
    "class": 'inbox_side_content s box_space' 
})

const renderBoxInput_emp = (label, name, type, list) => {

    let box_input = $("<div>", {
        "class": 'box_input',
    })

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

                getTypeCar($('#type').val(), '')
              
            } else if(ev.target.id == 'model' ) {

                $('#model_sh_selt').html('')
                
                getTypeCar($('#type').val(), $('#brand').val())

            }
 
       })  

        box_input.append('<datalist id="'+ list +'" > </datalist>')

    } else if(type == 'date') {
        input = $("<input>", {
            "class": 'border_sty',
            "id" : name,
            "name" : name,
            "type": type,  

         }).on( "focus", function(ev) {
            if(input.val() == null || input.val() == '') {
                input.val(formatDatetime(new Date().setFullYear(new Date().getFullYear() + 543),'--') )
            }
            
        })
    } else if(type == 'radio') {
         input = `<div class="my-3 box_group dp-flex">

                        <div class="form-check">
                            <input id="gender-1" name="gender" type="radio" class="form-check-input" value="ชาย"  >
                            <label class="form-check-label" for="credit">ชาย</label>
                        </div>
                        <div class="form-check">
                            <input id="gender-2" name="gender" type="radio" class="form-check-input" value="หญิง" >
                            <label class="form-check-label" for="debit">หญิง</label>
                        </div>

                    </div>`

    } else {
        input = $("<input>", {
            "class": 'border_sty',
            "id" : name,
            "name" : name,
            "type": type,   

        })
    }

    box_input.append(label_filed)
    box_input.append(input)

    return box_input;

}

const render_List_emp = (item, funcRender, target) => {

    item.forEach((e, index) => { 
        let obj =  funcRender(e.label, e.name, e.type, e.list)
        target.append( obj)  
    }) 
     
}

const render_List_MapData_emp = (_this_data) => {
    $('#emp_id').val(_this_data.EmpId)
    $('#emp_id').css('pointer-events', 'none')
    $('#fullName').val(_this_data.EmpName)
    $('#fullName_eng').val(_this_data.EmpEngName) 
    _this_data.EmpGender == 'ชาย' ? $('#gender-1').prop('checked', true) : _this_data.EmpGender == 'หญิง' ? $('#gender-2').prop('checked', true) : null
    $('#dept').val(_this_data.EmpDept)
    $('#position').val(_this_data.EmpPosition)
    $('#workDate').val(_this_data.Color)
    $('#office').val(_this_data.EmpOffice)
    $('#workDate').val(formatDatetime(_this_data.EmpWorkDate,'--')) 
}

const render_content_edit_emp = (emp_id) => {
    ///////////////////////////////////////////////
  
    let this_data = _data_emp[_data_emp.findIndex(obj => { return obj.EmpId === emp_id })]
 
    ////////////////////////////////////////////////////////////// reset
    box_emp_detl.html('')
    box_emp_detl_2.html('') 
    //////////////////////////////////////////////////////////////

    render_List_emp(list_field_1_emp, renderBoxInput_emp, box_emp_detl)
    render_List_emp(list_field_2_emp, renderBoxInput_emp, box_emp_detl_2) 

    sidebox_content_emp.append(sidebox_content_emp)
    sidebox_content_emp.append(box_emp_detl)
    sidebox_content_emp.append(box_emp_img)
    sidebox_content_emp.append(box_emp_detl_2) 
    sidebox_content_emp.append(box_space_1_emp) 
    sidebox_content_emp.append(
        $("<input>", { 
            "class" : "btn_submit",
            "type" : "submit",
            "value" : "บันทึก",
            "title" : "save"
        })
    )  

    setTimeout(function() {
        render_List_MapData_emp(this_data) 

    }, 0)

    ///////////////////////////////////////////////
}

