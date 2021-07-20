// const Input = (props) => {
//     return (
//         <div>
//             <div className="form-group" >

//                 <label className="label_input" >{props.label}</label><div className='div_box5' />
//                 <div className='div_input'>
//                     <input
                
//                         type={props.type}
//                         name={props.name}
//                         className={!formik.errors.gmail ? "ant-input" : "ant-input error"}

//                         value={formik.values.gmail}
//                         onChange={formik.handleChange}
//                     />
//                     {formik.errors.gmail && (
//                         <p className='colorErr' >{formik.errors.gmail}</p>
//                     )}
//                     <span className='text-primary'>
//                         <MailSvg />
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Input;