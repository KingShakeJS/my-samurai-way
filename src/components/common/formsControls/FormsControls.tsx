import * as React from 'react';
import s from './FormsControls.module.css'


export const FormsControls = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${s.formControl} ${hasError && s.error}`}>

            <div>
                {
                    props.children
                }
            </div>


            {
                hasError && <span>  {meta.error} </span>
            }


        </div>
    );
};

export const TextArea = (props: any) => {
 const {input, meta, ...restProps} = props
    return (
        <FormsControls
            {
            ...props
            }
        >
                 <textarea
                     {...input}
                     {...restProps}
                 ></textarea>
        </FormsControls>
    );
};


export const Input = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormsControls
            {
                ...props
            }
        >
                 <input
                     {...input}
                     {...restProps}
                 ></input>
        </FormsControls>
    );
};