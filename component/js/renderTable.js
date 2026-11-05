
const Table = (props) => {

    
    const renderHead = (item, index, n) => {
        if(index == 0) {
            return `<div class="th table-row-number" key="' + index + '">
                        ${item.col}
                        <i class="bx bx-sort btn_sort ${item.sort != '' ? item.sort : ''}" id="${item.key}" onclick="${props.sort_col}('${item.key}')"></i>
                        <i class="bx bx-filter-alt btn_filter ${item.filter.length > 0 ? 'active' : ''}"  id="${item.key}__filter" onclick=" ${props.filter_col}(this)" >
                            <div class="filter_col"></div>
                        </i>
                    </div>`

        } else {
            return `<div style="--column-n:${n}" class="th" key="${index}">\
                        ${item.col}\
                        <i class="bx bx-sort btn_sort ${item.sort != '' ? item.sort : ''}" id="${item.key}" onclick="${props.sort_col}('${item.key}')"></i>\
                        <i class="bx bx-filter-alt btn_filter ${item.filter.length > 0 ? 'active' : ''}" id="${item.key}__filter" onclick=" ${props.filter_col}(this)" >
                            <div class="filter_col"></div>
                        </i>
                    </div>`

        }
    }

    const renderHeadBody = (item, index, n) => {
       
        return `<div style="--column-n:${n}" class="th" key="${index}">
                    ${item.col}
                    <i class="bx bx-sort btn_sort ${item.sort != '' ? item.sort : ''}"  id="${item.key}" onclick="${props.sort_col}('${item.key}')"></i>
                    <i class="bx bx-filter-alt btn_filter ${item.filter.length > 0 ? 'active' : ''}" id="${item.key}__filter" onclick=" ${props.filter_col}(this)" >
                            <div class="filter_col"></div>
                    </i>
                </div>`
 
    }

    const render = (item, funcRender) => {
        let content = ''

        if(item.length > 0) {

            item.forEach((e, index) => {
                content += funcRender(e, index, item.length-1, props.page )
            }) 

        }

        return content 
    }

    if(props.reloadDataOnly) {
        if(props.dataHead.length != 0 && props.dataBody.length != 0 ) {
            $(`.${props.tableName} .head-content .tbody`).html(render(props.dataBody, props.funcRenderMain))
            $(`.${props.tableName} .body-content .tbody`).html(render(props.dataBody, props.funcRender))

        } else {
            $(`.${props.tableName} .head-content .tbody`).html('<div style="--column-n:1" class="th nodata">' + 'ไม่มีรายการข้อมูล'  + '</div>')
            $(`.${props.tableName} .body-content .tbody`).html('<div style="--column-n:1" class="th nodata">' + 'ไม่มีรายการข้อมูล'  + '</div>')
            $('#pagination1').html('')
            $('#pange_all').html('')
            $('#pange_current').val('')
        }
             
    }
   
    return ( 
            props.dataHead.length != 0 && props.dataBody.length != 0 ?
                '<div class="table-data-view ' + props.tableName + '">\
                    <div class="table head-content">' 
                    +
                                '<div class="thead">\
                                    <div class="tr">'
                                    +
                                        render(props.dataHeadMain, renderHead)
                                    +
                                    '</div>\
                                </div>'
                    +
                                '<div class="tbody">'
                                    +
                                        render(props.dataBody, props.funcRenderMain)
                                    +
                                '</div>'
                    +
                    '<p  class="pagination_page" id="pange_all"></p> <input hidden type="text" id="pange_current"/> <div class="pagination" id="pagination1"></div>\
                    </div>\
                    <div class="table body-content">' 
                    +
                                '<div class="thead">\
                                    <div class="tr">'
                                    +
                                        render(props.dataHead, renderHeadBody) + '<div class="th table-row-func" key="' + 'lne' + '">' +  ''  + '</div>'
                                    +
                                    '</div>\
                                </div>'
                    +
                                '<div class="tbody">'
                                    +
                                        render(props.dataBody, props.funcRender)
                                    +
                                '</div>'
                    +
                    '</div>\
                </div>' 
                 
            :

                '<div class="table-data-view">\
                    <div class="table head-content">' 
                    +
                                '<div class="thead">\
                                    <div class="tr">'
                                    +
                                        render(props.dataHeadMain, renderHead)
                                    +
                                    '</div>\
                                </div>'
                    +
                                '<div class="tbody">'
                                    +
                                        '<div style="--column-n:1" class="th nodata">' + 'ไม่มีรายการข้อมูล'  + '</div>'
                                    +
                                '</div>'
                    +
                    '</div>\
                    <div class="table body-content">' 
                    +
                                '<div class="thead">\
                                    <div class="tr">'
                                    +
                                        render(props.dataHead, renderHeadBody) + '<div class="th table-row-func" key="' + 'lne' + '">' +  ''  + '</div>'
                                    +
                                    '</div>\
                                </div>'
                    +
                                '<div class="tbody">'
                                    +
                                        '<div style="--column-n:1" class="th nodata">' + 'ไม่มีรายการข้อมูล'  + '</div>'
                                    +
                                '</div>'
                    +
                    '</div>\
                </div>'
    )
}