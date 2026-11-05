const convertCSVtoJSON = (file) => {
    const reader = new FileReader();

    reader.onload = function(e) {
        const contents = e.target.result;
        const lines = contents.split('\n');

        const headers = lines[0].split(',');

        const data = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            const entry = {};

            for (let j = 0; j < headers.length; j++) {
                entry[headers[j]] = values[j];
            }

            data.push(entry);
        }

        const jsonData = JSON.stringify(data);

        console.log(data);
        console.log(jsonData);
    };

    reader.onerror = function(e) {
        console.error('Error reading the file', e);
    };

    reader.readAsText(file);
}

const saveFileDir = (file, dataName) => {
    if(file != undefined) {
        let loadfile = dataName == 'dataset_emp' ? 'uploadFileDataEmp' : dataName == 'dataset_car' ? 'uploadFileDataVehicle' : ''

        var form_data = new FormData();                  
        form_data.append('file', file);
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", `assets/php/${loadfile}.php`, true);
        
        xhttp.onload = function(event) {
            
            if (xhttp.status == 200) {
                $('body').append(
                    `<div class="loading-csvImport">
                        <img style="width: 50px;height: 50px;" src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" alt="Loading...">
                    </div>`
                )
                
                let store = dataName == 'dataset_emp' ? 'api_Car_importCSVEmp' : dataName == 'dataset_car' ? 'api_Car_importCSVVehicle' : ''
                $.ajax({
                    url: `${path_api}/${store}`,
					timeout: 35000, 
                    type: 'GET',
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    success: function(data) {
                        $('.loading-csvImport').remove()
                        render_alert('response','อัพโหลดข้อมูลเรียบร้อย', null, '' )
                        
                    },
                    error: function(xhr, status, error) {
                        $('.loading-csvImport').remove()
                        render_alert('response','อัพโหลดข้อมูล ไม่สำเร็จ !!', null, '' )
                    }
                })

            } else {
                alert(xhttp.status);
                
            }
        }
    
        xhttp.send(form_data);
    }
}


