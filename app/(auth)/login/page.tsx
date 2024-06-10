'use client';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import axios from 'axios';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/admin/guest/login', data);
      // const response = await fetch('/api/admin/guest/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      console.log('response', response);
      const responseData = response.data;
      // Redirect or handle success response
      console.log(responseData); // Log success response
      router.push('/addPark'); // Redirect to dashboard page
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        setError('general', { type: 'manual', message: error.message });
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-lg mx-auto mt-8 p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
        <div className="border-b-white border-2 mb-5">
          <h1 className="text-3xl font-semibold mb-4 dark:text-white">Login</h1>
        </div>
        <form
          className="flex justify-center flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="gap-3 flex flex-col">
            <div className="flex flex-col gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Username"
                {...register('username', { required: 'Username is required' })}
                error={errors.username && errors.username.message}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                placeholder="Password"
                type="password"
                {...register('password', { required: 'Password is required' })}
                error={errors.password && errors.password.message}
              />
            </div>
            {errors.general && (
              <p className="text-red-500">{errors.general.message}</p>
            )}
          </div>
          <Button
            type="submit"
            // className="mt-4"
            // variant="contained"
            // color="primary"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
