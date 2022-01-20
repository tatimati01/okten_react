import React, {useState} from 'react';

const FilterForm = ({getFilter}) => {

    const [formState, setFormState] = useState({name: '', username: '', email: ''});

    const find = (e) => {
        e.preventDefault();
        console.log(formState);
        setFormState({name: '', username: '', email: ''})
    }
    const onChange = (e) => {
        const userRequest = {...formState, [e.target.name]: e.target.value};
        setFormState(...formState, ...userRequest)
        getFilter(userRequest)
    }

    return (
        <div className={'formContainer'}>
            <form className={'form'} onSubmit={find}>
                <div>
                    <label>Name:
                    </label>
                    <input type="text" name={'name'} value={formState.name} className={'inputStyle'}
                           onChange={onChange}/>
                </div>
                <div>
                    <label>Username:
                    </label>
                    <input type="text" name={'username'} value={formState.username} className={'inputStyle'}
                           onChange={onChange}/>
                </div>
                <div>
                    <label>Email:
                    </label>
                    <input type="text" name={'email'} value={formState.email} className={'inputStyle'}
                           onChange={onChange}/>
                </div>
                <button>Find</button>
            </form>

        </div>
    );
};

export default FilterForm;