

import { useRef } from "react";

const SignUpPage = () => {
  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="enter text" />
      <button onClick={focusInput}>Go Go Go </button>
    </div>
  )
}

export default SignUpPage