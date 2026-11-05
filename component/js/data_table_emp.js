let _data_emp = []

const headTableEmpManageSl = [  
    {col: "ชื่อ-สกุล (eng)", key: "EmpEngName", sort: '', filter: []},
    {col: "เพศ", key: "EmpGender", sort: '', filter: []},
    {col: "ตำแหน่ง", key: "EmpPosition", sort: '', filter: []},
    {col: "หน่วยงาน", key: "EmpDept", sort: '', filter: []},
    {col: "วันเริ่มงาน", key: "EmpWorkDate", sort: '', filter: []},
    {col: "สถานที่ทำงาน", key: "EmpOffice", sort: '', filter: []},
]

const closeDropbox_emp = (e) => {
    $('.' + 'ref-manages-' + e).hide()
    $('.backdrop_dropbox_manages').hide()
}

const openDrobboxManagesData_emp = (e) => {
    $('.'+ e.id).show()
    $('.backdrop_dropbox_manages').show()
    $('.backdrop_dropbox_manages').on( "mousedown", function(ev) { 
        if( ev.target.classList.contains('backdrop_dropbox_manages') ) {
            $('.'+ e.id).hide()
            $('.backdrop_dropbox_manages').hide()
        }
    })
}

const formatDatetime_emp = (date,time) => {

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

const formatDatetime_form_Buddhis_emp = (date,time) => {

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
        
        return  String(dateFormat.getFullYear() + 543).padStart(2, '0')+
                "-"+ String((dateFormat.getMonth()+1)).padStart(2, '0')+
                "-"+ String(dateFormat.getDate()).padStart(2, '0') 
    }

        return  String(dateFormat.getFullYear() + 543).padStart(2, '0')+
                    "-"+ String((dateFormat.getMonth()+1)).padStart(2, '0')+
                    "-"+ String(dateFormat.getDate()).padStart(2, '0')+
                    " "+ String(dateFormat.getHours()).padStart(2, '0')+
                    ":"+ String(dateFormat.getMinutes()).padStart(2, '0')+
                    ":"+ String(dateFormat.getSeconds()).padStart(2, '0');

    dateFormat = null;
}

const format_text_emp = (text) => {
    if(text == null || text == 'null' || text == '') {
        return '-'
    }

    return text
}

const sub_text_name_emp = (text) => {  
    text = text.replace("คุณ", "");

    return text;
}

const MapBodyTableEmpMangeSl = (item, index, none, page) => {
    return  '<div class="tr ' + (index%2 > 0? 'row_cw' : 'row_cb')  + '" id="ref-' + item.EmpId + '" key="' + index + '">\
                <div style="--column-n: 5" class="td">' + format_text_emp(item.EmpEngName) +'</div>\
                <div style="--column-n: 5" class="td">' + format_text_emp(item.EmpGender) +'</div>\
                <div style="--column-n: 5" class="td">' + format_text_emp(item.EmpPosition) +'</div>\
                <div style="--column-n: 5" class="td" >' + format_text_emp(item.EmpDept) +'</div>\
                <div style="--column-n: 5" class="td">' + formatDatetime_emp(format_text_emp(item.EmpWorkDate),'--') +'</div>\
                <div style="--column-n: 5" class="td">' + format_text_emp(item.EmpOffice) +'</div>\
                <div class="td btn-tabหle table-row-func">'
                +
                    (item.EmpId.substring(0,1).toUpperCase() == 'O' ?
                        '<div class="btn-title-admin"><i class="bx bx-dots-vertical" id="ref-manages-' + item.EmpId  + '" onclick="openDrobboxManagesData_emp(this)" ></i></div>\
                        <div class="backdrop_dropbox_manages" style="display: none;"></div>\
                        <div class="dropbox_manages ref-manages-' + item.EmpId + '" style="display: none;">\
                            <div class="func-manage-data" id="' + item.EmpId + '" onclick="funcEdit_emp(this)">\
                                Edit \
                            </div>\
                            <div class="func-manage-data" id="' + item.EmpId + '" onclick="funcDelete_emp(this)">\
                                Delete\
                            </div>\
                        </div>'
                    :
                        '')
                +
                '</div>\
            </div>'
}

{/* <div class="btn-title-admin"><i class="bx bx-dots-vertical" id="ref-manages-' + item.EmpId  + '" onclick="openDrobboxManagesData_emp(this)" ></i></div>\
<div class="backdrop_dropbox_manages" style="display: none;"></div>\
<div class="dropbox_manages ref-manages-' + item.EmpId + '" style="display: none;">\
    <div class="func-manage-data" id="' + item.EmpId + '" onclick="funcEdit_emp(this)">\
        Edit \
    </div>\
    <div class="func-manage-data" id="' + item.EmpId + '" onclick="funcDelete_emp(this)">\
        Delete\
    </div>\
</div>\ */}

const headTableEmpManagePre = [
    {col: " ", key: "", sort: '', filter: []},
    {col: "รหัสพนักงาน", key: "EmpId", sort: '', filter: []},
    {col: "ชื่อ-สกุล ", key: "EmpName", sort: '', filter: []},
]


const MapBodyTableEmpMangePre = (item, index, none, page ) => {
    return  '<div class="tr ' + (index%2 > 0? 'row_cw' : 'row_cb')  + '" id="ref-' + item.EmpId + '_' + index  + '" key="' + index + '">\
                <div class="td table-row-number">' + ((index+1) + ((page-1) * 20)) + '</div>\
                <div style="--column-n: 2;width: 70px;" class="td ' + (item.EmpStatus == 'resign'? '_resign' : '') + '">' + format_text_emp(item.EmpId) +'</div>\
                <div style="--column-n: 2;width: 155px; " class="td">' + sub_text_name_emp(format_text_emp(item.EmpName)) +'</div>\
             </div>'
}

const remove_emp = (emp_id) => { 
    $.ajax({
    
        url: path_api + '/api_Car_remove_emp' ,
        type: 'POST', 
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {"EmpId": emp_id},
        success: function(response) { 
            if(response.msg == "success") {
                render_alert('response','เสร็จสิ้น', null, '' )
                callDataTable_emp($('#table-search').val(), parseInt( $('#pange_current').val()))
            }
        },
        error: function(xhr, status, error) {
            console.log(error)
        }

    });
}

const editValue_obj_emp = (array, index, key, newValue) => {
    array[index][key] = newValue;
}

const sort_col_convert_sql_emp = () => {
    let sql_ = ''

    headTableEmpManagePre.forEach((e, index) => {
        
        if(e.sort != '') {
            if(sql_ == '') {
                sql_ += e.key + ' ' + e.sort

            } else {
                sql_ += ', ' + e.key + ' ' + e.sort

            }
    
        }
        
    })

    headTableEmpManageSl.forEach((e, index) => {
        
        if(e.sort != '') {
            if(sql_ == '') {
                sql_ += e.key + ' ' + e.sort

            } else {
                sql_ += ', ' + e.key + ' ' + e.sort

            }
    
        }
        
    })

    return sql_
}

const set_sort_col_emp = (item, key) => {
    let index = item.findIndex(obj => { return obj.key === key })

    if(index == -1) {
        return
    }

    let sortType = item[index]['sort'] == ''? 'asc' : item[index]['sort'] == 'asc'? 'desc' : ''
    $(`#${key}`).removeClass('asc')
    $(`#${key}`).removeClass('desc')

    $(`#${key}`).addClass(sortType)
    
    editValue_obj_emp(item, index, 'sort', sortType);
}

const sort_col_emp = (key) => {
    if(key == '') {return}

    set_sort_col_emp(headTableEmpManagePre, key)
    set_sort_col_emp(headTableEmpManageSl, key)
 
    callDataTable_emp($('#table-search').val(), parseInt( $('#pange_current').val()))

}

const filter_convert_sql_emp = (dataset) => {
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

const filter_col_convert_sql_emp = (key) => {
    let sql_ = ``
    
    let dataset = []

    if(key != '') {

        if(headTableEmpManagePre.findIndex(obj => { return obj.key === key }) != -1) {
            dataset = headTableEmpManagePre
    
        } else if(headTableEmpManageSl.findIndex(obj => { return obj.key === key }) != -1) {
            dataset = headTableEmpManageSl
        }
    
        sql_ += filter_convert_sql_emp(dataset.filter((obj) => obj.key == key))

    } else {
        let sqlHPre = '', sqlHSl = ''
        sqlHPre = filter_convert_sql_emp(headTableEmpManagePre)
        sqlHSl = filter_convert_sql_emp(headTableEmpManageSl)

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

const set_filter_col_emp = (item, key, filter_val) => {
    let index = item.findIndex(obj => { return obj.key === key })

    if(index == -1) {
        return
    }

    let filter = item[index]['filter'] 
    if(filter == '') {
        filter = []
    }

    if(key == 'EmpId' && filter_val == 'ลาออก') {
        filter.push(` EmpStatus like '*resign*' `)
    
    } else {

        filter.push(` ${key} like '*${filter_val}*' `)

    }
    
    editValue_obj_emp(item, index, 'filter', filter); 

}

const push_filter_emp = (parent, dataset, indexObj, key, vals) => {
    
    let vals_

    if(vals.indexOf("resign") != -1) {
        vals_ = '*ลาออก*'
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

   
                callDataTable_emp($('#table-search').val(), parseInt( $('#pange_current').val()))
            }

        })
    )
    
    parent.append(filter)
    
}

const filter_col_emp = (e) => {
    let key = e.id.split('__')[0]
    if(key == '')  { return }

    let dataset = []
    if(headTableEmpManagePre.findIndex(obj => { return obj.key === key }) != -1) {
        dataset = headTableEmpManagePre

    } else if(headTableEmpManageSl.findIndex(obj => { return obj.key === key }) != -1) {
        dataset = headTableEmpManageSl
    }

    let index = dataset.findIndex(obj => { return obj.key === key })
     
    let filter_arr = dataset[index]['filter'];
    
    if( $(`#${key}__filter .filter_col`)[0].classList.contains('active') ) {
        return
    }
    
    $(`#${key}__filter`).addClass('active')
    $(`#${key}__filter .filter_col`).addClass('active')

    $(`#${key}__filter`).on( "dblclick", function(e_) { 

        if(filter_col_convert_sql_emp(key) == '') {
            $(`#${key}__filter`).removeClass('active')
        } 
        $(`#${key}__filter .filter_col`).removeClass('active')
        
    }) 

    let lastClick_emp = 0;
    $(`#${key}__filter`).on( "touchstart", function(e_) { 
        e_.preventDefault();
        let date = new Date();
        let time = date.getTime();
        const time_between_taps = 200; 
        if (time - lastClick_emp < time_between_taps) {
           
            if(filter_col_convert_sql_emp(key) == '') {
                $(`#${key}__filter`).removeClass('active')
            } 
            $(`#${key}__filter .filter_col`).removeClass('active')
        }
        
        lastClick_emp = time;
        
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
        "type": 'text'

    }).on( "keypress", (e_) => {
        if (e_.keyCode == 13) {
            let val = ` ${key} like '*${input_text.val()}*' `
            if(dataset[index]['filter'].findIndex(sql_str => sql_str.replaceAll(' ','').toLowerCase() == val.replaceAll(' ','').toLowerCase() ) == -1
                && input_text.val() != '') {

                set_filter_col_emp(dataset, key, input_text.val()) 
    
                push_filter_emp(filters, dataset, index, key, input_text.val())
                
         
                callDataTable_emp($('#table-search').val(), parseInt( $('#pange_current').val()))
            }
            
         
        }
    })

    let btn_add_filter = $("<div>", {
        "class": 'btn_add_filter' 
    }).append("<i class='bx bx-filter-alt'></i>").on( "click", (e_) => {
        if(dataset[index]['filter'].findIndex(sql_str => sql_str.replaceAll(' ','').toLowerCase() == val.replaceAll(' ','').toLowerCase() ) == -1
            && input_text.val() != '') {

            set_filter_col_emp(dataset, key, input_text.val()) 

            push_filter_emp(filters, dataset, index, key, input_text.val())
 
            callDataTable_emp($('#table-search').val(), parseInt( $('#pange_current').val()))
        }
    })

    input_filter.append(input_text)
    input_filter.append(btn_add_filter)
    obj_filter_box.append(input_filter)

    if(filter_arr.length > 0 ) {
        filter_arr.forEach((e_)=> {
            push_filter_emp(filters, dataset, index, key, e_)
             
        })
    }

    obj_filter_box.append(filters)      

    // callDataTable_emp($('#table-search').val(), parseInt( $('#pange_current').val()))
    
}

const callDataTable_emp  = (value, currentPage) => {

    if(!currentPage) {
        currentPage = 1
    }

    let count_emp
    let filter = filter_col_convert_sql_emp('')

    $.ajax({ 
        url: `${path_api}/api_Car_getCountEmp?search=${value}${(filter!=''? '&filter=' + filter : "")}`,
        type: 'GET',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data_count) {
            count_emp = data_count[0].count_emp

            if(Math.ceil(count_emp/20) < currentPage) {
                currentPage = 1
            }

            let sortBy = sort_col_convert_sql_emp()

            $.ajax({
               
                url: `${path_api}/api_Car_getDataEmp?search=${value}&OffsetData=${((currentPage-1) * 20)}${(sortBy!=''? '&sortBy=' + sortBy : "")}${(filter!=''? '&filter=' + filter : "")}`,
                type: 'GET',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function(data) {   

                    _data_emp = data

                    if($('.content .table_emp_manage').html() != '') {
                        Table({
                            tableName: 'table_emp',
                            dataHeadMain:headTableEmpManagePre, 
                            dataHead:headTableEmpManageSl, 
                            dataBody: data, 
                            reloadDataOnly : true,
                            funcRenderMain:MapBodyTableEmpMangePre, 
                            funcRender:MapBodyTableEmpMangeSl,
                            page: currentPage,
                            sort_col: 'sort_col_emp',
                            filter_col: 'filter_col_emp'
                        }) 

                    } else {
                        document.querySelector('.content .table_emp_manage').innerHTML =  Table({
                            tableName: 'table_emp',
                            dataHeadMain:headTableEmpManagePre, 
                            dataHead:headTableEmpManageSl, 
                            dataBody: data, 
                            funcRenderMain:MapBodyTableEmpMangePre, 
                            funcRender:MapBodyTableEmpMangeSl,
                            page: currentPage,
                            sort_col: 'sort_col_emp',
                            filter_col: 'filter_col_emp'
                        }) 
                    }
                    

                    $('#pange_current').val(currentPage); 
                    count_emp > 0 ?
                        $.jqPaginator('#pagination1', {
                            totalPages: Math.ceil(count_emp/20),
                            visiblePages:  7,
                            currentPage: currentPage, 
                            onPageChange:  (num, type) => {
                                $('#pange_all').text(num + "/" + Math.ceil(count_emp/20));
                                if($('#pange_current').val() != num && $('#pange_current').val() != '' ) { 
                                    callDataTable_emp(value,  num) 
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
                    console.log("error");
                    document.querySelector('.content .table_emp_manage').innerHTML = "ไม่สามารถติดต่อฐานข้อมูลได้"
                }

            });
        },
        error: function(xhr, status, error) {
             document.querySelector('.content .table_emp_manage').innerHTML = "ไม่สามารถติดต่อฐานข้อมูลได้"

        }
        
    })
}

const dataSearch_emp = (e) => {
     callDataTable_emp(e.value, 1) 

}

const btn_dataSearch_emp = (e) => {
    dataSearch_emp({value: $('#'+ e).val()})
    
}

const downloadCSV_FileEmp = () => { 
    let xlsx_head = 'รหัสพนักงาน,คำนำหน้า,ชื่อ-สกุล ภาษาไทย,ชื่อ-สกุล ภาษาอังกฤษ,เพศ,ตำแหน่ง,หน่วยงาน,วันเริ่มงาน,สถานที่ทำงาน,สถานะ'

    let sortBy = sort_col_convert_sql_emp()
    let filter = filter_col_convert_sql_emp('')
    let value = $('#table-search').val()
    $.ajax({
        url: `${path_api}/api_Car_getDataEmp?search=${value}${(sortBy!=''? `&sortBy=${sortBy}` : "")}${(filter!=''? `&filter=${filter}` : "")}`,
        type: 'GET',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data) {
            CreateXLSX(data, xlsx_head, 'dataset_emp')
        },
        error: function(xhr, status, error) { }
    })

} 

const onclickAnother_FileEmp = (target) => {
    $(`#${target}`).click() 
     
}

const importFileOnChange_FileEmp = (event) => {
 
    const file = event.files[0];
    
    if (!file) {
        alert('No file selected');
        return;
    }

    saveFileDir(file, 'dataset_emp')
}
// ข้อมูลพนักงาน &nbsp;&nbsp;<a class="bx bxs-file-import" href="EmpRegister/" target="_blank" rel="noopener noreferrer"></a>\
const renderTable_emp  = ( ) => {
    $('.content').html('<div class="header-content-admin">\
                            <div>ข้อมูลพนักงาน &nbsp;&nbsp;<a class="bx bxs-file-import" href="EmpRegister/" target="_blank" rel="noopener noreferrer"></a></div> \
                            <div class="table-content-top">\
                                <div class="table-search">\
                                    <input type="text" onchange="dataSearch_emp(this)" autofocus id="table-search" name="table-search" placeholder="ค้นหา . . .">\
                                    <i class="bx bx-search-alt" onclick="btn_dataSearch_emp(\'table-search\')"></i>\
                                </div>\
                                <i class="bx bxs-file-blank" onclick="downloadCSV_FileEmp()"></i>\
                                <i class="bx bxs-data" onclick="onclickAnother_FileEmp(\'importCSV\')"></i>\
                                <input type="file" title="" name="importCSV" id="importCSV" onchange="importFileOnChange_FileEmp(this)" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" hidden>\
                            </div>\
                        </div>\
                        <div class="table_emp_manage"></div>')
 
    dataSearch_emp({value:''})
} 