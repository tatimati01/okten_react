import React, {useState} from 'react';

import css from '/src/App.module.css';

const MainForm = () => {
    const [form,setForm] = useState({name:'', username:'', email:''});

    const formHandler = (e) => {
      setForm({...form, [e.target.name]:[e.target.value]})
    }

    const onSubmit = (e) => {
      e.preventDefault();
      console.log(form);
    }

    return (
        <div className={css.formWrapper}>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name:
                        <input type="text" name={'name'} value={form.name} onChange={formHandler}/>
                    </label>
                </div>
                <div>
                    <label>Username:
                        <input type="text" name={'username'} value={form.username} onChange={formHandler}/>
                    </label>
                </div>
                <div>
                    <label>Email:
                        <input type="text" name={'email'} value={form.email} onChange={formHandler}/>
                    </label>
                </div>
            </form>

        </div>
    );
};

export default MainForm;