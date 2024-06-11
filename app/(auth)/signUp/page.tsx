// import React from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { Form, Label, TextField, Button } from '@radix-ui/react-form';
// import { Error, Success } from '@radix-ui/react-alert';
//
// interface IFormInput {
//   name: string;
//   username: string;
//   password: string;
// }
//
// const SignupForm: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IFormInput>();
//
//   const onSubmit: SubmitHandler<IFormInput> = async (data) => {
//     try {
//       const response = await fetch('/api/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//
//       const result = await response.json();
//       if (response.ok) {
//         alert(result.message);
//       } else {
//         alert(result.error);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
//
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <Form
//         onSubmit={handleSubmit(onSubmit)}
//         className={shadcn`bg-card p-6 rounded-lg shadow-md border-border`}
//         style={{ width: '300px' }}
//       >
//         <h1
//           className={shadcn`text-center text-card-foreground`}
//           style={{ marginBottom: '1rem' }}
//         >
//           Sign Up
//         </h1>
//         <Label
//           className={shadcn`bg-background text-foreground w-full border border-transparent rounded-md shadow-sm py-2 px-3`}
//           style={{ marginBottom: '1rem' }}
//         >
//           Name
//           <TextField
//             {...register('name', { required: 'Name is required' })}
//             className={shadcn`bg-background text-foreground w-full`}
//           />
//         </Label>
//         {errors.name && (
//           <Error className={shadcn`text-red-500 text-xs`}>
//             {errors.name.message}
//           </Error>
//         )}
//         <Label
//           className={shadcn`bg-background text-foreground w-full border border-transparent rounded-md shadow-sm py-2 px-3`}
//           style={{ marginBottom: '1rem' }}
//         >
//           Username
//           <TextField
//             {...register('username', { required: 'Username is required' })}
//             className={shadcn`bg-background text-foreground w-full`}
//           />
//         </Label>
//         {errors.username && (
//           <Error className={shadcn`text-red-500 text-xs`}>
//             {errors.username.message}
//           </Error>
//         )}
//         <Label
//           className={shadcn`bg-background text-foreground w-full border border-transparent rounded-md shadow-sm py-2 px-3`}
//           style={{ marginBottom: '1rem' }}
//         >
//           Password
//           <TextField
//             type="password"
//             {...register('password', { required: 'Password is required' })}
//             className={shadcn`bg-background text-foreground w-full`}
//           />
//         </Label>
//         {errors.password && (
//           <Error className={shadcn`text-red-500 text-xs`}>
//             {errors.password.message}
//           </Error>
//         )}
//         <Button
//           type="submit"
//           className={shadcn`mt-4 bg-primary text-primary-foreground hover:bg-primary-dark px-4 py-2 rounded-md shadow-sm`}
//         >
//           Register
//         </Button>
//       </Form>
//     </div>
//   );
// };
//
// export default SignupForm;
