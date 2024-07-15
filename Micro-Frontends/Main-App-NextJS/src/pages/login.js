import React, {lazy, Suspense} from "react";
const LoginForm = lazy(()  => import('loginApp/login'))
import { useSelector } from "react-redux";
export default function Login() {
  const inputValue = useSelector((state) => state.input.inputValue);

  return (
<Suspense fallback={<div>Loading...</div>} >
<LoginForm appName={inputValue} />
</Suspense>
  );
}
