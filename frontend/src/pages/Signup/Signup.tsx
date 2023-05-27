import React, { FC } from 'react';

const Signup: FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="flex flex-col gap-2 text-white">
                <h1 className="text-center text-2xl">Chat App</h1>
                <div className="flex flex-col">
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div className="flex flex-col">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div className="flex flex-col">
                    <label>Verify Password</label>
                    <input type="password" />
                </div>
                <button>Sign Up</button>
                <div className="flex flex-row gap-7 items-center">
                    <label>
                        <input type="checkbox" className="mr-2" />
                        Remember Me
                    </label>
                    <button>Login to Existing Account</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;