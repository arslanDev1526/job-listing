// import { useState } from 'react';
// import { useMutation } from 'react-query';

// // Define your mutation function that will make the API call and return the response data.
// const createData = async (formData) => {
//   const response = await fetch('your-api-url', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(formData)
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Something went wrong!');
//   }

//   return data;
// };

// export const MyForm = () => {
//   const [formData, setFormData] = useState({
//     field1: '',
//     field2: '',
//     field3: ''
//   });

//   // Define your mutation using the useMutation hook.
//   const [mutate, { isLoading, isError, isSuccess }] = useMutation(createData);

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     // Call the mutation function when the form is submitted, and pass in the form data as an argument.
//     mutate(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={formData.field1}
//         onChange={(event) => setFormData({ ...formData, field1: event.target.value })}
//       />
//       <input
//         type="text"
//         value={formData.field2}
//         onChange={(event) => setFormData({ ...formData, field2: event.target.value })}
//       />
//       <input
//         type="text"
//         value={formData.field3}
//         onChange={(event) => setFormData({ ...formData, field3: event.target.value })}
//       />
//       <button type="submit">Submit</button>

//       {/* Handle the result of the mutation */}
//       {isLoading && <p>Loading...</p>}
//       {isError && <p>Error creating data!</p>}
//       {isSuccess && <p>Data created successfully!</p>}
//     </form>
//   );
// };
