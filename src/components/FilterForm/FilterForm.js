import React, {useState} from 'react';

const FilterForm = ({getFilter, backToAll}) => {

    const [formState, setFormState] = useState({name: '', username: '', email: ''});

    const onChange = (e) => {
        const userData = {...formState, [e.target.name]: e.target.value}
        setFormState({...formState, ...userData})
        getFilter(userData)
    }

    const formCleaner = () => {
        setFormState({name: '', username: '', email: ''})
        console.log(backToAll());
    }

    return (
        <div className={'formContainer'}>
            <form className={'form'}>
                <div>
                    <label>Name: </label>
                    <input type="text" name={'name'} value={formState.name} className={'inputStyle'}
                           onChange={onChange}/>
                </div>
                <div>
                    <label>Username: </label>
                    <input type="text" name={'username'} value={formState.username} className={'inputStyle'}
                           onChange={onChange}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" name={'email'} value={formState.email} className={'inputStyle'}
                           onChange={onChange}/>
                </div>
                <button className={'btnBack'} onClick={formCleaner}>Back to All</button>
            </form>
        </div>
    );
};

export default FilterForm;