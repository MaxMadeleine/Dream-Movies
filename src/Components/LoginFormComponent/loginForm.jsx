import { useForm } from 'react-hook-form';
import supabase from '../../Utils/Supabase/supabaseClient.js';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {    
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Error logging in:", error.message);
      } else {
        console.log("User logged in:", data.user);
        localStorage.setItem('accessToken', data.session.access_token); // Store access token
        navigate("/");
      }
    } catch (err) {
      console.error("An unexpected error occurred:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Brugernavn/Email:</label>
        <input {...register('email', { required: true })} />
        {errors.email && <span>Du skal skrive din email</span>}
      </div>
      <div>
        <label htmlFor="password">Adgangskode:</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>Du skal skrive din adgangskode</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};