
// import useAxiosSecure from '../../hooks/useAxiosSecure';
// import Swal from 'sweetalert2';
// import useAuth from '../../hooks/useAuth';
// import { useQuery } from '@tanstack/react-query';
// import { useNavigate } from 'react-router-dom';

// function Dabord() {
//    const axiosSecure = useAxiosSecure();

//    const navigate = useNavigate();

//    const { user } = useAuth();
//    const { data: parcels, refetch } = useQuery({
//       queryKey: ['parcels', user?.email],
//       queryFn: async () => {
//          const res = await axiosSecure.get(`/parcels?email=${user.email}`);
//          return res.data;
//       },
//    });

//    // const [parcels, setParcels] = useState([]);

//    // useEffect(() => {
//    //    axiosSecure.get('/parcels')
//    //       .then(res => setParcels(res.data))
//    //       .catch(err => console.error("Error loading parcels", err));
//    // }, []);

//    const handleDelete = (id) => {
//       Swal.fire({
//          title: 'Are you sure?',
//          text: "You won't be able to revert this!",
//          icon: 'warning',
//          showCancelButton: true,
//          confirmButtonColor: '#d33',
//          cancelButtonColor: '#3085d6',
//          confirmButtonText: 'Yes, delete it!'
//       }).then((result) => {
//          if (result.isConfirmed) {
//             axiosSecure.delete(`/parcels/${id}`)
//                .then(res => {
//                   if (res.data.deletedCount > 0) {
//                      Swal.fire('Deleted!', 'Parcel has been deleted.', 'success');
//                      refetch();
//                   }
//                })
//          }
//       });
//    };



//    const handlePay = (id) => {
//       navigate(`/payment/${id}`);
//    };

//    return (
//       <div className="p-6 max-w-6xl mx-auto">
//          <h2 className="text-2xl font-bold mb-4">All Parcels</h2>
//          <div className="overflow-x-auto">
//             <table className="table w-full">
//                <thead>
//                   <tr className="bg-gray-200">
//                      <th>Title</th>
//                      <th>Tracking ID</th>
//                      <th>Date</th>
//                      <th>Payment</th>
//                      <th>Action</th>
//                   </tr>
//                </thead>
//                <tbody>
//                   {parcels?.map(parcel => (
//                      <tr key={parcel._id}>
//                         <td>{parcel.title}</td>
//                         <td>{parcel.tracking_id}</td>
//                         <td>{new Date(parcel.creation_date).toLocaleDateString()}</td>
//                         <td>
//                            {parcel.payment_status === 'unpaid' ?
//                               <span className="text-red-500 font-semibold">Unpaid</span> :
//                               <span className="text-green-600 font-semibold">Paid</span>}
//                         </td>
//                         <td className="space-x-2">
//                            <button
//                               onClick={() => handleDelete(parcel._id)}
//                               className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
//                            >
//                               Delete
//                            </button>
//                            {
//                               parcel.payment_status === 'unpaid' &&
//                               <button
//                                  onClick={() => handlePay(parcel._id)}
//                                  className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white"
//                               >
//                                  Pay
//                               </button>
//                            }
//                         </td>

//                      </tr>
//                   ))}
//                </tbody>
//             </table>
//          </div>
//       </div>
//    );
// }

// export default Dabord;


import { Outlet } from 'react-router-dom';
import Sidbar from './Sidbar';
import DasBordStactik from './DasBordStactik';


function Dashboard() {
   return (


      <div className="w-1/1 mx-auto">
         <div className="flex min-h-screen ">
         
            <div className="w-68 bg-gray-800 text-white p-4 ">
               <Sidbar />
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 p-6">
               <div className="">
                  <DasBordStactik />
               </div>
               <Outlet />
            </div>
         </div>
      </div>
   );
}

export default Dashboard;
