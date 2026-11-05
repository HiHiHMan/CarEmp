let _data_car = []

const headTableCarManageSl = [ 
    {col: "แผนก / บริษัท", key: "EmpDept", sort: '', filter: []},
    {col: "ทะเบียนรถ", key: "CarRegistration", sort: '', filter: []},
    {col: "ยี่ห้อ", key: "Brand", sort: '', filter: []},
    {col: "รุ่น", key: "Model", sort: '', filter: [] },
    {col: "สีรถ", key: "Color", sort: '', filter: []},
    {col: "ชนิดรถ", key: "Type", sort: '', filter: []},
    {col: "เชื้อเพลิง", key: "Energy", sort: '', filter: []},
    {col: "หมดอายุใบขับขี่", key: "ExpDriLicense", sort: '', filter: []},
    {col: "หมดอายุพรบ.", key: "ExpAct", sort: '', filter: []},
    {col: "หมดอายุประกันภัย", key: "ExpInsurance", sort: '', filter: []},
    {col: "ประเภทสติกเกอร์", key: "Sticker", sort: '', filter: []},
    {col: "สถานที่", key: "Location", sort: '', filter: []},
    {col: "วันที่คีย์ข้อมูล", key: "DataUpDate", sort: '', filter: []}
]

const closeDropbox_car = (e) => { 
    $('.' + 'ref-manages-' + e).hide()
    $('.backdrop_dropbox_manages').hide()
}

const openDrobboxManagesData_car = (e) => {
    $('.'+ e.id).show()
    $('.backdrop_dropbox_manages').show()
    $('.backdrop_dropbox_manages').on( "mousedown", function(ev) { 
        if( ev.target.classList.contains('backdrop_dropbox_manages') ) {
            $('.'+ e.id).hide()
            $('.backdrop_dropbox_manages').hide()
        }
    })  
    
}

const formatDatetime_car = (date,time) => {

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

const formatDatetime_form_Buddhis_car = (date,time) => {

    if(date == null || date == '' || date == '-') {
        return '-'
    }

    date = date.split('.')[0]
    let dateFormat = new Date(date);
 
    if(time != "" && time != "--") {
        dateFormat.setHours(time.split(':')[0]);
        dateFormat.setMinutes(time.split(':')[1]);
        dateFormat.setSeconds(0);
    }

    let year =  dateFormat.getFullYear()
    let Buddhis_Check = new Date().getFullYear() - dateFormat.getFullYear()
 
    if( Math.abs(Buddhis_Check) < 200) {
        year = dateFormat.getFullYear() + 543
    }

    if(time == '--') { 
       
        return  String(year).padStart(2, '0') +
                "-" + String((dateFormat.getMonth() + 1)).padStart(2, '0') //+ "-" + String(dateFormat.getDate()).padStart(2, '0') 
    }

   

    return  String(year).padStart(2, '0') +
                "-" + String((dateFormat.getMonth() + 1)).padStart(2, '0') +
                "-" + String(dateFormat.getDate()).padStart(2, '0') +
                " " + String(dateFormat.getHours()).padStart(2, '0') +
                ":" + String(dateFormat.getMinutes()).padStart(2, '0') //+ ":" + String(dateFormat.getSeconds()).padStart(2, '0');

    dateFormat = null;
}


const format_text_car = (text) => {
    if(text == null || text == 'null' || text == '') {
        return '-'
    }
 
    return text
}

const sub_text_dept_car = (text) => { 
    text = text.replace("(CDC.มหาชัย)", "");
    text = text.replace("(BDC.มหาชัย)", "");
    text = text.replace("(DC.มหาชัย)", "");
    text = text.replace("แผนก", "");
    text = text.replace("CDC.มหาชัย", "");
    text = text.replace("BDC.มหาชัย", "");
    text = text.replace("DC.มหาชัย", "");

    return text;
}


const sub_text_name_car = (text) => {  
    text = text.replace("คุณ", "");

    return text;
}

const highlight_car = (_date) => {  
    if(_date == null || _date == '' || _date == '-') {
        return _date
    }
    
    let _date_ = new Date(_date)
    let current_date_form_Buddhis = new Date()
    current_date_form_Buddhis = current_date_form_Buddhis.setFullYear(current_date_form_Buddhis.getFullYear() + 543)

    if(_date_.getFullYear() == 9999) {
        return ' highlight-1'
    }
    
    if(current_date_form_Buddhis > _date_ ) {
        return ' highlight'
    }
 
    return ' '
}

const change_form_date_car = (_date) => {  
    if(_date == null || _date == '' || _date == '-') {
        return _date
    }
    
    let _date_ = new Date(_date)

    if(_date_.getFullYear() == 9999 ) {
        return 'ตลอดชีพ';
    }

    return _date;
}

const color_lavel_insu = (lavel) => {

    if(lavel == 'ชั้น 1') {
        return 'Insulevel1'

    } else if(lavel == 'ชั้น 2+') {
        return 'Insulevel2p'

    } else if(lavel == 'ชั้น 2') {
        return 'Insulevel2'

    } else if(lavel == 'ชั้น 3+') {
        return 'Insulevel3p'

    } else if(lavel == 'ชั้น 3') {
        return 'Insulevel3'

    } else {
        return ''
        
    }
}

const MapBodyTableCarMangeSl = (item, index, none, page) => {
    return  `<div class="tr ' + ${index%2 > 0? 'row_cw' : 'row_cb'}  + '" id="ref-' + item.CarRegistration + '" key="' + index + '">
                <div style="--column-n: 12" class="td">${sub_text_dept_car(format_text_car(item.EmpDept))}</div>
                <div style="--column-n: 12" class="td ${((item.TypeCarRegistration == 'red' || item.CarRegistration == 'ไม่มีทะเบียน')? 'highlight' : '')}">${format_text_car(item.CarRegistration)}</div>
                <div style="--column-n: 12" class="td">${format_text_car(item.Brand)}</div>
                <div style="--column-n: 12" class="td">${format_text_car(item.Model)}</div>
                <div style="--column-n: 12" class="td">${format_text_car(item.Color)}</div>
                <div style="--column-n: 12" class="td">${format_text_car(item.Type)}</div>
                <div style="--column-n: 12" class="td">${format_text_car(item.Energy)}</div>
                <div style="--column-n: 12" class="td ${highlight_car(format_text_car(item.ExpDriLicense))}">${change_form_date_car(formatDatetime_car(format_text_car(item.ExpDriLicense), '--'))}</div>
                <div style="--column-n: 12" class="td ${highlight_car(format_text_car(item.ExpAct))}">${change_form_date_car(formatDatetime_car(format_text_car(item.ExpAct), '--'))}</div>
                <div style="--column-n: 12" class="td ${highlight_car(format_text_car(item.ExpInsurance))} ${color_lavel_insu(item.TypeInsurance)}">${change_form_date_car(formatDatetime_car(format_text_car(item.ExpInsurance), '--'))}<span> ${item.TypeInsurance? item.TypeInsurance : ''}</span></div>
                <div style="--column-n: 12" class="td">${format_text_car(item.Sticker)}</div>
                <div style="--column-n: 12" class="td">${format_text_car(item.Location)}</div>
                <div style="--column-n: 12" class="td">${format_text_car(formatDatetime_form_Buddhis_car(item.DataUpDate, ''))}</div>
                <div class="td btn-table table-row-func">
                    <div class="btn-title-admin"><i class="bx bx-dots-vertical" id="ref-manages-${item.CarRegistration.trim()}_${item.Data_no + '_' + index}" onclick="openDrobboxManagesData_car(this)" ></i></div>
                    <div class="backdrop_dropbox_manages" style="display: none;"></div>
                    <div class="dropbox_manages ref-manages-${item.CarRegistration.trim()}_${item.Data_no + '_' + index}" style="display: none;">
                        <div class="func-manage-data" id="${item.CarRegistration.trim()}_${item.Data_no + '_' +index}" onclick="funcEdit_car(this)">
                            Edit
                        </div>
                        <div class="func-manage-data" id="${item.CarRegistration.trim()}_${item.Data_no + '_' +index}" onclick="funcDelete_car(this)">
                            Delete
                        </div>
                    </div>
                </div>
            </div>`
}

const headTableCarManagePre = [ 
    {col: " ", key: "Data_no", sort: '', filter: []}, 
    {col: "รหัสพนักงาน", key: "EmpId", sort: '', filter: []},
    {col: "ชื่อ - สกุล", key: "EmpName", sort: '', filter: []},
]

const MapBodyTableCarMangePre = (item, index, none, page) => {
    return  '<div class="tr ' + (index%2 > 0? 'row_cw' : 'row_cb')  + '" id="ref-' + (item.CarRegistration )  + '" key="' + index + '">\
                <div class="td table-row-number">' + format_text_car(item.Data_no) + '</div>\
                <div style="--column-n: 2;width: 70px" class="td ' + (item.EmpStatus == 'resign'? '_resign' : '') + '">' + format_text_car(item.EmpId) +'</div>\
                <div style="--column-n: 2;width: 157px" class="td">' + sub_text_name_car(format_text_car(item.EmpName)) +'</div>\
             </div>'
}

const remove_car = (key) => {
    $.ajax({
    
        url: path_api + '/api_Car_remove_vehicle' ,
        type: 'POST', 
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {"key": key},
        success: function(response) {
            if(response.msg == "success") {
                render_alert('response','เสร็จสิ้น', null, '' )
                callDataTable_car($('#table-search').val(), parseInt( $('#pange_current').val()))
            }

        },
        error: function(xhr, status, error) {  console.log(error) }

    });
}

const editValue_obj_car = (array, index, key, newValue) => {
    array[index][key] = newValue;
}

const sort_col_convert_sql_car = () => {
    let sql_ = ``
    
    headTableCarManagePre.forEach((e, index) => {
        if(e.sort != '') {
            if(sql_ == '') {
                sql_ += `${e.key} ${e.sort}`

            } else {
                sql_ += `, ${e.key} ${e.sort}`

            }
    
        }
    })

    headTableCarManageSl.forEach((e, index) => {
        
        if(e.sort != '') {
            if(sql_ == '') {
                sql_ += `${e.key} ${e.sort}`

            } else {
                sql_ += `, ${e.key} ${e.sort}`

            }
    
        }
        
    })

   
    return sql_
}

const set_sort_col_car = (item, key) => {
    let index = item.findIndex(obj => { return obj.key === key })

    if(index == -1) {
        return
    }

    let sortType = item[index]['sort'] == ''? 'asc' : item[index]['sort'] == 'asc'? 'desc' : ''

    $(`#${key}`).removeClass('asc')
    $(`#${key}`).removeClass('desc')

    $(`#${key}`).addClass(sortType)
    
    editValue_obj_car(item, index, 'sort', sortType);
}

const sort_col_car = (key) => {
    if(key == '') {return}

    set_sort_col_car(headTableCarManagePre, key)
    set_sort_col_car(headTableCarManageSl, key)

    callDataTable_car($('#table-search').val(), parseInt( $('#pange_current').val()))

}

const filter_convert_sql_car = (dataset) => {
    let sql_ = ``

    dataset.forEach((e, index) => {
        if(e.filter.length > 0 ) {
            let condition_filter_x = ''
            e.filter.forEach((e_, index_) => {
                if(condition_filter_x == '') {
                    condition_filter_x += ` ${e_} `
                } else {
                    condition_filter_x += ` or ${e_}`
                }
            })

            if(sql_ == '') {
                sql_ += `( ${condition_filter_x} )`

            } else {
                sql_ += ` and ( ${condition_filter_x} )`

            }
    
        }
    })

    return sql_
}

const filter_col_convert_sql_car = (key) => {
    let sql_ = ``
    
    let dataset = []

    if(key != '') {

        if(headTableCarManagePre.findIndex(obj => { return obj.key === key }) != -1) {
            dataset = headTableCarManagePre
    
        } else if(headTableCarManageSl.findIndex(obj => { return obj.key === key }) != -1) {
            dataset = headTableCarManageSl
        }
    
        sql_ += filter_convert_sql_car(dataset.filter((obj) => obj.key == key))
    
    } else {
 
        let sqlHPre = '', sqlHSl = ''
        sqlHPre = filter_convert_sql_car(headTableCarManagePre)
        sqlHSl = filter_convert_sql_car(headTableCarManageSl)

        if(sql_ == '') {
            sql_ += sqlHPre

        } else {
            sql_ += sqlHPre? ` and ( ${ sqlHPre } )` : ''

        }

        if(sql_ == '') {
            sql_ += sqlHSl

        } else {
            sql_ += sqlHSl ? ` and ( ${ sqlHSl } )` : ''

        }
    }
 
    return sql_
}

const set_filter_col_car = (item, key, filter_val) => {
    let index = item.findIndex(obj => { return obj.key === key })

    if(index == -1) {
        return
    }

    let filter = item[index]['filter'] 
    if(filter == '') {
        filter = []
    }

    if(filter_val == 'ตลอดชีพ') {
        filter_val = '9999'
    }

    if((key == 'ExpDriLicense' || key == 'ExpAct' || key == 'ExpInsurance') && filter_val == 'หมดอายุ') {
        filter.push(` ${key} <= CAST(DATEADD(YEAR,543,GETDATE()) AS DATE) `)

    } else if(key == 'EmpId') {
        if(filter_val == 'ลาออก') {
            filter.push(` e.EmpStatus like '*resign*' `)
            
        } else {
            filter.push(` c.EmpId like '*${filter_val}*' `)

        }
    
    } else if(key == 'CarRegistration' && filter_val == 'ป้ายแดง') {
        filter.push(` TypeCarRegistration like '*red*' `)

    } else if(key == 'ExpInsurance' && (filter_val.indexOf('ชั้น') || filter_val.indexOf('+') )) {
        filter.push(` TypeInsurance like '*${filter_val}*' `)


    } else {
        filter.push(` ${key} like '*${filter_val}*' `)

    }
 
    editValue_obj_car(item, index, 'filter', filter); 

}

const  push_filter_car = (parent, dataset, indexObj, key, vals) => {
    
    let vals_

    if(vals.indexOf("resign") != -1) {
        vals_ = '*ลาออก*'
    } else if(vals.indexOf("GETDATE") != -1) {
        vals_ = '*หมดอายุ*'
    } else if(vals.indexOf("red") != -1) {
        vals_ = '*ป้ายแดง*'
    } else if(vals.search("'") != -1) {
        vals_ = vals.split("'")[1].replaceAll("'",'').trim() 

    } else {
        vals_ = vals
        vals = ` ${key} like '*${vals}*' `
    } 
 
    let filter = $("<div>", {
        "class": 'filter' 
    }).append (`<label>${vals_.replaceAll('*','')}</label>`)

    filter.append(
        $("<div>", {
            "class": 'btn_cancle_filter' 
        }).append(`<i class='bx bx-x'></i>`).on( "click", (e__) => { 
            let filter_arr = dataset[indexObj]['filter'];
            let findIndex = filter_arr.findIndex((this_e) => this_e == vals )
       
            if(findIndex != -1) { 
                
                filter_arr = filter_arr.filter((this_e) => this_e != vals)  
                dataset[indexObj]['filter'] = filter_arr
                filter.remove()
                
    
                callDataTable_car($('#table-search').val(), parseInt( $('#pange_current').val()))
            }

        })
    )
    
    parent.append(filter)
    
}

const filter_col_car = (e) => {
    let key = e.id.split('__')[0]
    if(key == '')  { return }

    let dataset = []
    if(headTableCarManagePre.findIndex(obj => { return obj.key === key }) != -1) {
        dataset = headTableCarManagePre

    } else if(headTableCarManageSl.findIndex(obj => { return obj.key === key }) != -1) {
        dataset = headTableCarManageSl
    }

    let index = dataset.findIndex(obj => { return obj.key === key })
     
    let filter_arr = dataset[index]['filter'];
    
    if( $(`#${key}__filter .filter_col`)[0].classList.contains('active') ) {
        return
    }
    
    // $(`#${key}__filter`).css('opacity', '1')
    $(`#${key}__filter`).addClass('active')
    $(`#${key}__filter .filter_col`).addClass('active')

    $(`#${key}__filter`).on( "dblclick", function(e_) { 
        
        if(filter_col_convert_sql_car(key) == '') {
            $(`#${key}__filter`).removeClass('active')
        
        }
        $(`#${key}__filter .filter_col`).removeClass('active')

    }) 

    let lastClick_car = 0;
    $(`#${key}__filter`).on( "touchstart", function(e_) { 
        e_.preventDefault(); 
        let date = new Date();
        let time = date.getTime();
        const time_between_taps = 200;

        if (time - lastClick_car < time_between_taps) {
            if(filter_col_convert_sql_car(key) == '') {
                $(`#${key}__filter`).removeClass('active')
            
            }
            $(`#${key}__filter .filter_col`).removeClass('active')
        }

        lastClick_car = time;

    }) 

    let obj_filter_box = $(`#${e.id} .filter_col`) 
    obj_filter_box.html('')

    let filters = $("<div>", {
        "class": 'box_filter' 
    }) 

    let input_filter = $("<div>", {
        "class": 'input_filter'
    })

    let input_text = $("<input>", {
        "type": 'text',
        "autofocus":"autofocus",
        "placeholder": "Filter . . . "

    }).on( "keypress", (e_) => {
        if (e_.keyCode == 13) {
            let val = ` ${key} like '*${input_text.val()}*' `
            if(dataset[index]['filter'].findIndex(sql_str => sql_str.replaceAll(' ','').toLowerCase() == val.replaceAll(' ','').toLowerCase() ) == -1
                && input_text.val() != '') {

                set_filter_col_car(dataset, key, input_text.val()) 
    
                push_filter_car(filters, dataset, index, key, input_text.val())
                
 
                callDataTable_car($('#table-search').val(), parseInt( $('#pange_current').val()))
            }
        }
    }).focus()

    let btn_add_filter = $("<div>", {
        "class": 'btn_add_filter' 
    }).append("<i class='bx bx-filter-alt'></i>").on( "click", (e_) => {
        let val = ` ${key} like '*${input_text.val()}*' `
        if(dataset[index]['filter'].findIndex(sql_str => sql_str.replaceAll(' ','').toLowerCase() == val.replaceAll(' ','').toLowerCase() ) == -1
           && input_text.val() != '') {

            set_filter_col_car(dataset, key, input_text.val()) 

            push_filter_car(filters, dataset, index, key, input_text.val())

    
            callDataTable_car($('#table-search').val(), parseInt( $('#pange_current').val()))
        }
    })

    input_filter.append(input_text)
    input_filter.append(btn_add_filter)
    obj_filter_box.append(input_filter)

    if(filter_arr.length > 0 ) {
        filter_arr.forEach((e_)=> {
            push_filter_car(filters, dataset, index, key, e_)
             
        })
    }

    obj_filter_box.append(filters)      
    
}

const callDataTable_car  = (value, currentPage) => {
 
    if(!currentPage) {
        currentPage = 1
    }

    let count_vehicle 
    let filter = filter_col_convert_sql_car('')
    console.log(filter)

    $.ajax({
        url:   `${path_api}/api_Car_getCountVehicle?search=${value}${(filter!=''? `&filter=${filter}` : "")}`,
        type: 'GET',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data_count) {

            count_vehicle = data_count[0].count_vehicle
            if(Math.ceil(count_vehicle/20) < currentPage) {
                currentPage = 1
            }

            let sortBy = sort_col_convert_sql_car()

            $.ajax({
                url: `${path_api}/api_Car_getVehicle?search=${value}&OffsetData=${((currentPage-1) * 20)}${(sortBy!=''? `&sortBy=${sortBy}` : "")}${(filter!=''? `&filter=${filter}` : "")}`,
                type: 'GET',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function(data) {

                    _data_car = data 

                    if($('.content .table_car_manage').html() != '') {
                        Table({
                            tableName: 'table_car',
                            dataHeadMain: headTableCarManagePre, 
                            dataHead: headTableCarManageSl, 
                            dataBody: data, 
                            reloadDataOnly : true,
                            funcRenderMain: MapBodyTableCarMangePre, 
                            funcRender: MapBodyTableCarMangeSl,
                            page: currentPage,
                            sort_col: 'sort_col_car',
                            filter_col: 'filter_col_car'
                        })
    
                    } else {
                        document.querySelector('.content .table_car_manage').innerHTML =  Table({
                            tableName: 'table_car',
                            dataHeadMain: headTableCarManagePre, 
                            dataHead: headTableCarManageSl, 
                            dataBody: data, 
                            funcRenderMain: MapBodyTableCarMangePre, 
                            funcRender: MapBodyTableCarMangeSl,
                            page: currentPage,
                            sort_col: 'sort_col_car',
                            filter_col: 'filter_col_car'
                        })
                    }
                    
                    $('#pange_current').val(currentPage);

                    count_vehicle > 0 ?
                        $.jqPaginator('#pagination1', {
                            totalPages: Math.ceil(count_vehicle/20),
                            visiblePages:  7,
                            currentPage: currentPage, 
                            onPageChange:  (num, type) => {
                                 
                                $('#pange_all').text(num + "/" + Math.ceil(count_vehicle/20));
                                if($('#pange_current').val() != num && $('#pange_current').val() != '' ) { 
                                    callDataTable_car(value,  num) 
                                }

                            }
                        })
                    :
                        () => {
                            $('#pange_all').text("1/1");
                            $('#pange_current').val(1);
                        }
 
 
                },
                error: function(xhr, status, error) {
                     document.querySelector('.content .table_car_manage').innerHTML = "ไม่สามารถติดต่อฐานข้อมูลได้"

                }

            });
        },
        error: function(xhr, status, error) {
            document.querySelector('.content .table_car_manage').innerHTML = "ไม่สามารถติดต่อฐานข้อมูลได้"
 
        }

    });
    
}

const dataSearch_car = (e) => { 
    callDataTable_car(e.value, 1)  

}

const btn_dataSearch_car = (e) => {
    dataSearch_car({value: $('#'+ e).val()})

}

const downloadCSV_FileCar = () => { 
    let xlsx_head = 'ลำดับที่,รหัสพนักงาน,ชื่อ - สกุล,แผนก / บริษัท,ทะเบียนรถ,ประเภททะเบียน,ยี่ห้อ,รุ่น,สีรถ,ชนิดรถ,เชื้อเพลิง,หมดอายุ_ใบขับขี่,หมดอายุ_พรบ#,หมดอายุ_ประกันภัย_(รถยนต์),ประเภทประกันภัย,ประเภท_สติกเกอร์,สถานที่,วันที่คีย์ข้อมูล'

    let sortBy = sort_col_convert_sql_car()
    let filter = filter_col_convert_sql_car('')
    let value = $('#table-search').val()
    $.ajax({
        url: `${path_api}/api_Car_getVehicle?search=${value}${(sortBy!=''? `&sortBy=${sortBy}` : "")}${(filter!=''? `&filter=${filter}` : "")}`,
        type: 'GET',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data) {
            CreateXLSX(data, xlsx_head, 'dataset_car')
        },
        error: function(xhr, status, error) { }
    })

} 

const onclickAnother_FileCar  = (target) => {
    $(`#${target}`).click() 
     
}

const importFileOnChange_FileCar = (event) => {
 
    const file = event.files[0];
    
    if (!file) {
        alert('No file selected');
        return;
    }
    // convertCSVtoJSON(file)
    saveFileDir(file, 'dataset_car')
}

const renderTable_car  = ( ) => {
    $('.content').html('<div class="header-content-admin">\
                            <div>การจัดการทะเบียนยานยนต์&nbsp;&nbsp; <a class="bx bxs-file-import" href="CarRegister/" target="_blank" rel="noopener noreferrer"></a></div>\
                            <div class="table-content-top">\
                            <div class="table-search">\
                                    <input type="text" onchange="dataSearch_car(this)" autofocus id="table-search" name="table-search" placeholder="ค้นหา . . .">\
                                    <i class="bx bx-search-alt" onclick="btn_dataSearch_car(\'table-search\')"></i>\
                            </div>\
                            <i class="bx bxs-file-blank" onclick="downloadCSV_FileCar()"></i>\
                            <i class="bx bxs-data" onclick="onclickAnother_FileCar(\'importCSV\')"></i>\
                            <input type="file" title="" name="importCSV" id="importCSV" onchange="importFileOnChange_FileCar(this)" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" hidden>\
                        </div>\
                        </div>\
                        <div class="table_car_manage"></div>') 

    dataSearch_car({value:''})
}