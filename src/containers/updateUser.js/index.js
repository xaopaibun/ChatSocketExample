import axios from 'axios';
import { useFormik } from 'formik';
import { Url_SeverLocal } from 'utils/until';
import * as Yup from "yup";
import React from 'react';
import { updateUser_API } from '../../services/api';

const UpdateUser = () => {
    const [image, setImage] = React.useState('');
    
    const formik = useFormik({
        initialValues: {
            username: "",
            phone: '',
            address: "",
            gender: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Please input your full name??"),
            phone: Yup.string()
                .required("Please input your phone??"),
            address: Yup.string()
                .required("Please input your address??"),
            gender: Yup.string()
                .required("Please input your gender??"),
        }),
        onSubmit: (values) => {
            if(image){
                updateUser_API({...values, avatar : image}).
                then(res => {
                    if(res.status == 200){
                        alert('Cap nhat thong tin thanh cong');
                    }
                    else{
                        alert('Cap nhat thong tin that bai. Vui long thu lai sau!');
                    }
                }).catch(err =>console.log(err))
            }
            
        }
    });

    const onChangeFile = async (evt) => {
        evt.preventDefault();
        const formData = await new FormData();
        formData.append("images", evt.target.files[0]);
        const config = await {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        await axios.post(Url_SeverLocal + '/uploadImages', formData, config).then(res => {
            setImage(res.data.fileNameInServer);
        })
    }

    return (
        <div className='container'>
            <div className='div_box20' />
            <h1>Cap nhat thong tin ca nhan</h1>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label className="label_input" >Avatar</label><div className='div_box5' />

                    <input
                        name='images'
                        type="file"
                        className="ant-input"
                        onChange={(evt) => onChangeFile(evt)}

                    />
                    <div className='div_box5' />
                    {
                        image !== '' ?
                            <div style={{ width: '100px', height: '100px', margin : 'auto' }}>
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={'http://localhost:5000/' + image} />
                            </div> : <div />
                    }

                    <div className='div_box20' />
                </div>

                <div className="form-group">
                    <label className="label_input" >Full name</label><div className='div_box5' />
                    <div className="div_input" >
                        <input
                            name='username'
                            type="text"
                            className="ant-input"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                        {/* {formik.errors.confirmpassword && (
                            <p className='colorErr'>{formik.errors.confirmpassword}</p>
                        )} */}
                    </div>
                    <div className='div_box20' />
                </div>

                <div className="form-group">
                    <label className="label_input">Phone</label><div className='div_box5' />
                    <div className="div_input" >
                        <input
                            name='phone'
                            type="text"
                            className="ant-input"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                        />
                        {/* {formik.errors.confirmpassword && (
                            <p className='colorErr'>{formik.errors.confirmpassword}</p>
                        )} */}

                    </div>
                    <div className='div_box20' />
                </div>

                <div className="form-group">
                    <label className="label_input" >Address</label><div className='div_box5' />
                    <div className="div_input" >
                        <input
                            name='address'
                            type="text"
                            className="ant-input"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                        />
                        {/* {formik.errors.confirmpassword && (
                            <p className='colorErr'>{formik.errors.confirmpassword}</p>
                        )} */}
                    </div>
                    <div className='div_box20' />
                </div>

                <div className="form-group">
                    <label className="label_input">Gender</label><div className='div_box5' />
                    <div className="div_input">
                        <input
                            name='gender'
                            type="text"
                            className="ant-input"
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                        />
                        {/* {formik.errors.confirmpassword && (
                            <p className='colorErr'>{formik.errors.confirmpassword}</p>
                        )} */}
                    </div>
                    <div className='div_box20' />
                </div>
                <button type="submit" className="ant-btn ant-btn-primary ant-btn-block">
                    <span id="btntext">Update</span>
                </button>
                <div className='div_box20' />
            </form>
        </div>
    );
}
export default UpdateUser;