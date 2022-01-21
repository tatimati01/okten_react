import React, {useState} from 'react';

const FilterForm = ({getFilter}) => {

    const [formState, setFormState] = useState({name: '', username: '', email: ''});

    const onChange = (e) => {
        const userData = {...formState, [e.target.name]: e.target.value}
        setFormState({...formState, ...userData})
        getFilter(userData)
    }

    const back = (e) => {
        e.preventDefault();
        setFormState({name: '', username: '', email: ''})
    }

    return (
        <div className={'formContainer'}>
            <form className={'form'}>
                <div>
                    <label>Name:
                        <input type="text" name={'name'} value={formState.name} className={'inputStyle'}
                               onChange={onChange}/>
                    </label>
                </div>
                <div>
                    <label>Username:
                        <input type="text" name={'username'} value={formState.username} className={'inputStyle'}
                               onChange={onChange}/>
                    </label>
                </div>
                <div>
                    <label>Email:
                        <input type="text" name={'email'} value={formState.email} className={'inputStyle'}
                               onChange={onChange}/>
                    </label>
                </div>
                <button className={'btnBack'} onClick={back}>Back to All</button>
            </form>
        </div>
    );
};

export default FilterForm;