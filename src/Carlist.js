
import React, { useEffect, useState } from 'react';
import { SERVER_URL } from './constant';
import { DataGrid, GridToolbarContainer, GridToolbarExport, gridClasses } from '@mui/x-data-grid';
import { Snackbar} from '@mui/material';
import AddCar from './AddCar';
import EditCar from './EditCar';

function Carlist() {

    // 자동차 정보를 담을 상태 객체, 비어있는 배열을 기본값
    const [cars, setCars] = useState([]);

    // 삭제결과를 알려주는 알림 메시지 상태값
    const [open, setOpen] = useState(false);

    // 업데이트되면 새로 호출을 하기 위해 useEffect 사용
    useEffect(() => {
        fetchCars();
    }, []);


    // 첫번 째 렌더링 후에 한번만 실행. JSON 응답 데이터 있는 자동차 데이터는 cars 상태에 저장
    const fetchCars = () => {
        fetch( SERVER_URL+'api/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err));
    };

    const onDelclick = (url) => {
        if(window.confirm("Are you sure to delete?")) {
            fetch(url, {method: 'DELETE'})
            .then(response => {
                if(response.ok) {
                    fetchCars();
                    setOpen(true);
                }else {
                    alert("Something went wrong;!")
                }
            })
            .catch(err => console.error(err))
        }
    }

    const columns = [
        {field: 'brand', headerName: 'Brand', width: 200},
        {field: 'model', headerName: 'Model', width: 200},
        {field: 'color', headerName: 'Color', width: 200},
        {field: 'year', headerName: 'Year', width: 150},
        {field: 'price', headerName: 'Price', width: 150},
        {
            field : '_links.car.href',
            headerName: '',
            sortable : false,
            filterable : false,
            renderCell : row => <EditCar data={row} updateCar={updateCar} />
        },
        {
            field : '_links.self.href',
            headerName: '',
            sortable : false,
            filterable : false,
            renderCell : row => <button onClick={() => onDelclick(row.id)}>Delete</button>
        }
    ];


    // 새로운 자동차 추가
    const addCar = (car) => {
        fetch(SERVER_URL + 'api/cars',
        {
            method : 'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify(car)
        })
        .then(response => {
            if(response.ok) {
                fetchCars();
            }else {
                alert("Something went wrong!")
            }
        })
        .catch(err => console.log(err))
    }

    // 자동차 업데이트
    const updateCar = (car, link) => {
        fetch(link , 
            {
                method: 'PUT',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(car)
            })
            .then(response => {
                if(response.ok) {
                    fetchCars();
                }else {
                    alert('SomeThing went wrong!');
                }
            })
            .catch(err => console.error(err))
    }

    function CustomToolbar() {
        return (
            <GridToolbarContainer className={gridClasses.toolbarContainer}>
                <GridToolbarExport />
            </GridToolbarContainer>
        )
    }

    return(
        <React.Fragment>
            <AddCar addCar={addCar} />
            <div style={{height:500, width: '100%'}}>
                <DataGrid rows={cars} columns={columns}  getRowId={row => row._links.self.href} components={{Toolbar: CustomToolbar}}></DataGrid>
                <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)} message="Car deleted" />
            </div>
        </React.Fragment>
    );
}

export default Carlist;