import { useSelector } from "react-redux";
import { Url_Image, Url_Sever } from '../../config/until';
import Skeleton from 'react-loading-skeleton';
const Product = () => {
    const isloading = useSelector(state => state?.productReducer?.isloading)
    const Product = useSelector(state => state.productReducer?.Product)
    const TableProduct = () => {
        return (
            <div className="container" style={{ opacity: !isloading ? 1 : 0 }}>
                <table className="table" >
                    <thead className="thead-dark text-center">
                        <tr>
                            <th>STT</th>
                            <th>TenCoffee</th>
                            <th>Image</th>
                            <th>Gia</th>
                            <th>Thao Tac</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            Product?.map((val, index) => {
                                return (
                                    <tr key={val._id}>
                                        <td scope="row">{index + 1}</td>
                                        <td>{val.TenCoffee || <Skeleton height={100} count={5} />}</td>
                                        <td><img src={Url_Image + val.images} style={{ height: 60, width: 60 }} /></td>
                                        <td>{val.gia}</td>
                                        <td>
                                            <button type="button" class="btn btn-info btn-lg">Delete</button>
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

    const Loading = () => {
        return (
            <div style={{ display: 'flex',height:'100vh', justifyContent: 'center', alignItems: 'center' }}>
               
                    <img src='https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340' style={{ width: '100px', height: '100px' }} />
              
            </div>
        );
    }
    return (
        <div>
            {isloading ? <Loading /> : <TableProduct />}
        </div>
    );
}
export default Product;