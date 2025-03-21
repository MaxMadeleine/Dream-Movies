import { useForm } from 'react-hook-form';
import supabase from '../../Utils/Supabase/supabaseClient.js';
import { useNavigate } from 'react-router-dom';

export const SignUpForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error("Error signing up:", error.message);
      } else {
        console.log("User signed up:", data.user);
        navigate("/login");
      }
    } catch (err) {
      console.error("An unexpected error occurred:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email:</label>
        <input {...register('email', { required: true })} />
        {errors.email && <span>Email is required</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>Password is required</span>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};
