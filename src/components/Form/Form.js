import React from 'react';

const Form = () => {



    return (
        <div>
            <form>
                <label>Add cat</label>
                <input type="text"/>
                <button onClick={(e)=>e.preventDefault()}>Save</button>
            </form>
            <form>
                <label>Add dog</label>
                <input type="text"/>
                <button onClick={(e)=>e.preventDefault()}>Save</button>
            </form>
        </div>
    );
};

export default Form;