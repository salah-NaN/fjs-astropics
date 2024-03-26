// export default function Toast() {

//     return(
//         <>

//         </>
//     )
// }



import toast, { Toaster } from 'solid-toast';

const notify = () => toast('Here is your toast.');

const Toast = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};

export default Toast