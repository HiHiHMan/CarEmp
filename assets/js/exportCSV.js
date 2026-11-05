const formatDatetime_form_Buddhis_CSV = (date,time) => {

    if(date == null || date == '' || date == '-') {
        return null
    }

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
                "-" + String((dateFormat.getMonth() + 1)).padStart(2, '0') + "-" + String(dateFormat.getDate()).padStart(2, '0') 
    }

        return  String(year).padStart(2, '0') +
                    "-" + String((dateFormat.getMonth() + 1)).padStart(2, '0') +
                    "-" + String(dateFormat.getDate()).padStart(2, '0') +
                    " " + String(dateFormat.getHours()).padStart(2, '0') +
                    ":" + String(dateFormat.getMinutes()).padStart(2, '0') //+ ":" + String(dateFormat.getSeconds()).padStart(2, '0');

    dateFormat = null;
}

const change_form_date_CSV = (_date) => {  
    if(_date == null || _date == '' || _date == '-') {
        return _date
    }
    
    let _date_ = new Date(_date)

    if(_date_.getFullYear() == 9999 ) {
        return 'ตลอดชีพ';
    }

    return _date;
}

const fomatNull = (val) => {
    if(val == null || val.toLowerCase() == 'null') {
        return ''
    } 

    return val
}

const saveFile = (blob, filename) => {
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.href = url;
        a.download = filename;
        a.click();

        setTimeout(() => {
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a)
        }, 0)
    }

}

const CreateXLSX = (dataSet, head, dataName) => {
    
    let csvContent = "\ufeff" + head + "\n"

    if(dataName == 'dataset_emp') {
        
        dataSet.forEach((obj) => {
            let row = fomatNull(obj.EmpId) 
            + ',' + fomatNull(obj.EmpNameTitle)
            + ',' + fomatNull(obj.EmpName) 
            + ',' + fomatNull(obj.EmpEngName) 
            + ',' + fomatNull(obj.EmpGender)  
            + ',' + fomatNull(obj.EmpPosition)  
            + ',' + fomatNull(obj.EmpDept)  
            + ',' + fomatNull(formatDatetime_form_Buddhis_CSV((obj.EmpWorkDate),'--'))
            + ',' + fomatNull(obj.EmpOffice)
            + ',' + fomatNull(obj.EmpStatus) 
            + '\n'
            csvContent += row
        })

        var workbook = XLSX.utils.book_new();
        var worksheet = XLSX.utils.aoa_to_sheet(csvContent.split('\n').map(row => row.split(',')));
        XLSX.utils.book_append_sheet(workbook, worksheet, 'DATA');

        var wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        var blob = new Blob([wbout], { type: 'application/octet-stream' });
      
        // var data = new Blob([csvContent], {type: ' type: "text/csv;charset=UTF-8"' });
        saveFile(blob, "ข้อมูลพนักงาน_ทะเบียนยานยนต์_" + formatDatetime_form_Buddhis_CSV(new Date(),'--') +".xlsx")

    } else if(dataName == 'dataset_car') {

        dataSet.forEach((obj) => {
            let row = fomatNull(obj.Data_no)
            + ',' + fomatNull(obj.EmpId)
            + ',' + fomatNull(obj.EmpName) 
            + ',' + fomatNull(obj.EmpDept) 
            + ',' + fomatNull(obj.CarRegistration) 
            + ',' + fomatNull(obj.TypeCarRegistration) 
            + ',' + fomatNull(obj.Brand) 
            + ',' + fomatNull(obj.Model) 
            + ',' + fomatNull(obj.Color)
            + ',' + fomatNull(obj.Type) 
            + ',' + fomatNull(obj.Energy) 
            + ',' + fomatNull(change_form_date_CSV(formatDatetime_form_Buddhis_CSV(obj.ExpDriLicense,'--'))) 
            + ',' + fomatNull(change_form_date_CSV(formatDatetime_form_Buddhis_CSV(obj.ExpAct,'--'))) 
            + ',' + fomatNull(change_form_date_CSV(formatDatetime_form_Buddhis_CSV(obj.ExpInsurance,'--'))) 
            + ',' + fomatNull(obj.TypeInsurance) 
            + ',' + fomatNull(obj.Sticker) 
            + ',' + fomatNull(obj.Location) 
            + ',' + fomatNull(obj.DataUpDate)  
            + '\n'
            csvContent += row
        })

        var workbook = XLSX.utils.book_new();
        var worksheet = XLSX.utils.aoa_to_sheet(csvContent.split('\n').map(row => row.split(',')));
        XLSX.utils.book_append_sheet(workbook, worksheet, 'DATA');

        var wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        var blob = new Blob([wbout], { type: 'application/octet-stream' });
 
        // var data = new Blob([csvContent], {type: ' type: "text/csv;charset=UTF-8"' });
        saveFile(blob, "ทะเบียนยานยนต์_" + formatDatetime_form_Buddhis_CSV(new Date(),'--') +".xlsx")
    }

    
}

