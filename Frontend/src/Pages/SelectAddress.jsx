import { useEffect,useState } from "react";
import axios from "axios";
import AddressList from "../components/AdressComp/AllAdress/Addresses"
export default function  SelectAddress() {
    const [AllAddresses, setAllAddresses]= useState([]);
    const data = useSelector((state)=> state.user);
    useEffect(()=>{
        const fetchAddress=async()=>{
            const token =localStorage.getItem('token');
            if(!token){
                alert('token missing please try again');
            }
            const response= await axios.get(
                `https://ecommerce-follow-along-dwdh.onrender.com/user/get-addresses?token=${token}`
            )
            console.log(response.data.userInfo)
            setAllAddresses(response.data.userInfo.address)
        }
        fetchAddress();
    },[])
    return (
    <div>
        <AddressList addresses={AllAddresses}/>;
    </div>
    )
}