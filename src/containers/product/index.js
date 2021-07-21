import { useDispatch, useSelector } from "react-redux";
import { Url_Image, Url_Sever } from '../../utils/until';
import Skeleton from 'react-loading-skeleton';
import React from "react";
import Loading from "../../components/loading";
import { TEST_SEND_REQUEST } from '../../redux/actions/productAction';
const Product = () => {
    const isloading = useSelector(state => state?.productReducer?.isloading)

    const Product = useSelector(state => state?.productReducer?.Product)
   
    const TableProduct = () => {
        
        return (
            <div className="container">
                <table className="table" >
                    <thead className="text-center">
                        <tr>
                            <th>STT</th>
                            <th>TenCoffee</th>
                            <th>Image</th>
                            <th>So Luong</th>
                            <th>Gia</th>
                            <th>Thao Tac</th>
                        </tr>
                    </thead>
                    <tbody className="text-center" >
                        {
                            Product?.map((val, index) => {
                                return (
                                    <tr key={val._id}>
                                        <td scope="row">{index + 1}</td>
                                        <td>{val.TenCoffee || <Skeleton height={100} count={5} />}</td>
                                        <td><img src={Url_Image + val.images} style={{ height: 60, width: 60 }} /></td>
                                        <td>{val.soluong}</td>
                                        <td>{val.gia}</td>
                                        <td>
                                            <button type="button" className="btn btn-success btn-lg"><i className="fas fa-trash-alt"></i></button>
                                            <span> </span>
                                            <button type="button" className="btn btn-secondary btn-lg"><i className="fas fa-edit"></i></button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    const dispatch = useDispatch();

    React.useEffect(() =>{
        if(!Product){
            dispatch(TEST_SEND_REQUEST())
        }
    }, [])

    return (
        <div>
            {isloading ? <Loading /> : <TableProduct />}
        </div>
    );
}
export default Product;