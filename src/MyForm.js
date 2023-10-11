import { useState } from "react";


function MyForm() {
    const [user, setUser] = useState({
        firstName : '',
        lastName : '',
        email : ''
    });

    // 입력 상자의 내용이 변경되면 값을 저장
    // 변경 처리기를 각 이름별로 만들면 코드가 복잡해지니까 input에 name속성을 주면서 하나로 통일
    const inputChanged = (event) => {
        setUser({...user, [event.target.name]:event.target.value});
    }

    const handleSubmit = (event) => {
        alert(`Hello ${user.firstName} ${user.lastName}`);
        event.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
                <input type="text" name="firstName" onChange={inputChanged} value={user.firstName}/><br/>
            <label>Last Name</label>
                <input type="text" name="lastName" onChange={inputChanged} value={user.lastName}/><br/>
            <label>Email</label>
                <input type="email" name="email" onChange={inputChanged} value={user.email}/><br/>
            <input type="submit" value="Press me"/>
        </form>
    );
};

export default MyForm;